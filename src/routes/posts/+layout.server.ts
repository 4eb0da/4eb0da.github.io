import { load as postsLoad } from '../+page.server';

export const prerender = true;

const MIN_POSTS = 5;

export async function load({ url }) {
    const postName = (/^\/posts\/([^/]+)$/.exec(url.pathname) || [])[1] || '';
    if (!postName) {
        return;
    }

    const posts = await postsLoad();
    const shareImages = import.meta.glob('./*/share.png', {
        query: 'url'
    });
    const names = [...Object.keys(shareImages)].map(it => /\/(.+)\//.exec(it)?.[1]);
    const images = (await Promise.all([...Object.values(shareImages)].map(it => it()))) as {
        default: string;
    }[];
    const imagesMap: Record<string, string> = {};
    images.forEach((it, index) => {
        const name = names[index];
        if (name) {
            imagesMap[name] = it.default;
        }
    });

    const post = posts.posts.find(it => it.name === postName);
    if (!post) {
        return;
    }

    const currentTags = new Set(post.tags);

    const postsWithTags = posts.posts.filter(it => it.name !== postName).map(post => {
        return {
            post,
            commonTags: currentTags.intersection(new Set(post.tags))
        };
    });
    const sorted = postsWithTags.toSorted((a, b) => {
        return b.commonTags.size - a.commonTags.size;
    });
    const relatedPosts = sorted.slice(0, MIN_POSTS).map(it => {
        return {
            ...it.post,
            shareImage: imagesMap[it.post.name]
        };
    });

    return {
        post,
        relatedPosts
    };
}
