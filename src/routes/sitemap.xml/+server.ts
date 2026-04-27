import { XMLBuilder } from 'fast-xml-parser';
import { load } from '../+page.server';

export const prerender = true;

const builder = new XMLBuilder({
    format: true,
    ignoreAttributes: false,
    suppressBooleanAttributes: false,
    cdataPropName: 'CDATA'
});

const formatDate = (date: Date): string => {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

const now = new Date();

export async function GET() {
    const origin = 'https://4eb0da.ru';
    const urls = [
        `${origin}/`,
        `${origin}/about`,
        `${origin}/war3-model/dist/docs/preview/preview.html`,
        `${origin}/war3-model/dist/docs/convert/convert.html`,
        `${origin}/war3-model/dist/docs/decodeblp/decodeblp.html`,
        `${origin}/war3-model/dist/docs/optframes/optframes.html`
    ];
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
    const links = [
        ...urls.map(link => {
            return {
                loc: link,
                lastmod:  formatDate(now)
            };
        }),
        ...posts.map(post => {
            const link = `${origin}/posts/${post.name}.html`;
            const image = imagesMap[post.name];
            if (!image) {
                throw new Error('Image error: ' + post.name);
            }

            return {
                loc: link,
                lastmod:  formatDate(post.date),
                'image:image': {
                    'image:loc': `${origin}${image}`
                }
            };
        })
    ]

    const xml = builder.build({
        '?xml': {
            '@_version': '1.0',
            '@_encoding': 'UTF-8'
        },
        urlset: {
            '@_xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
            '@_xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',

            url: links
        }
    });

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
