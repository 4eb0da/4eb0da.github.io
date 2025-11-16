export const prerender = true;

export async function load() {
    const imports = import.meta.glob('./posts/*/+page.svx');
    const names = [...Object.keys(imports)].map(it => /\.\/posts\/(.+)\//.exec(it)?.[1]);
    const posts = await Promise.all([...Object.values(imports)].map(it => it()));

    return {
        posts: posts.map((it: any, index) => {
            return {
                ...it.metadata,
                name: names[index],
                date: new Date(it.metadata.date)
            };
        }).sort((a, b) => b.date.getTime() - a.date.getTime())
    };
}
