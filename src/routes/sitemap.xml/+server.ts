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
    const links = [
        ...urls.map(link => {
            return {
                loc: link,
                lastmod:  formatDate(now)
            };
        }),
        ...posts.map(post => {
            const link = `${origin}/posts/${post.name}`;

            return {
                loc: link,
                lastmod:  formatDate(post.date)
            };
        })
    ]

    const xml = builder.build({
        '?xml': {
            '@_version': '1.0',
            '@_encoding': 'UTF-8'
        },
        urlset: {
            '@_xmlns': 'http://sitemaps.org',

            url: links
        }
    });

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
