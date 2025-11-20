import { load } from '../+page.server';

export const prerender = true;

export async function GET() {
    const origin = 'https://4eb0da.ru';
    const urls = [
        `${origin}/`,
        `${origin}/about`,
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
