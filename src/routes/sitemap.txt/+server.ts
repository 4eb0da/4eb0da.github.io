import { load } from '../+page.server';

export const prerender = true;

export async function GET() {
    const origin = 'https://4eb0da.ru';
    const urls = [
        `${origin}/`,
        `${origin}/about`,
        `${origin}//war3-model/dist/docs/preview/preview.html`,
        `${origin}//war3-model/dist/docs/convert/convert.html`,
        `${origin}//war3-model/dist/docs/decodeblp/decodeblp.html`,
        `${origin}//war3-model/dist/docs/optframes/optframes.html`
    ];

    const posts = (await load()).posts;

    for (const post of posts) {
        urls.push(`${origin}/posts/${post.name}`);
    }

    return new Response(urls.join('\n'), {
        headers: {
            'Content-Type': 'text/plain'
        }
    });
}
