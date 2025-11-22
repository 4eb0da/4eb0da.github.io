import { XMLBuilder } from 'fast-xml-parser';
import { load } from '../+page.server';

export const prerender = true;

const builder = new XMLBuilder({
    format: true,
    ignoreAttributes: false,
    suppressBooleanAttributes: false,
    cdataPropName: 'CDATA'
});

export async function GET() {
    const origin = 'https://4eb0da.ru';
    const posts = (await load()).posts;
    const imports = import.meta.glob('../posts/*/share.png', {
        query: 'url'
    });
    const names = [...Object.keys(imports)].map(it => /\.\/posts\/(.+)\//.exec(it)?.[1]);
    const images = (await Promise.all([...Object.values(imports)].map(it => it()))) as {
        default: string;
    }[];
    const imagesMap: Record<string, string> = {};
    images.forEach((it, index) => {
        const name = names[index];
        if (name) {
            imagesMap[name] = it.default;
        }
    });

    const xml = builder.build({
        '?xml': {
            '@_version': '1.0',
            '@_encoding': 'UTF-8'
        },
        rss: {
            '@_version': '2.0',
            '@_xmlns:dc': 'http://purl.org/dc/elements/1.1/',

            channel: {
                title: 'Блог 4eb0da',
                link: origin,
                description: 'Блог Александра Нефедова про фронтенд-разработку',
                language: 'ru',
                item: posts.map(post => {
                    const link = `${origin}/posts/${post.name}`;
                    const image = imagesMap[post.name];
                    if (!image) {
                        throw new Error('Image error: ' + post.name);
                    }

                    return {
                        title: post.title,
                        guid: {
                            '#text': link,
                            '@_isPermaLink': 'true'
                        },
                        link,
                        description: {
                            CDATA: `<img src="${origin}${image}" /><p>${post.description}</p>`
                        },
                        pubDate: post.date.toUTCString(),
                        category: post.tags
                    };
                })
            }
        }
    });

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/rss+xml'
        }
    });
}
