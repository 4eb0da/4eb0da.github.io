import type { Reroute } from '@sveltejs/kit';

export const reroute: Reroute = ({ url }) => {
    if (url.pathname.endsWith('.html')) {
        const cleanPath = url.pathname.slice(0, -5);

        return cleanPath || '/';
    }
}
