<script lang="ts">
    import { onMount } from 'svelte';
    import './toc.css';
    import './markdown.css';

	let { children } = $props();

    function recalcActiveHeader(): void {
        const headers = Array.from(
            document.querySelectorAll<HTMLElement>(
                ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(it => `.article__layout > ${it}`).join(', ')
            )
        );
        const navHeaders = Array.from(
            document.querySelectorAll<HTMLElement>('.toc .toc-link')
        );
        const scrollTop = window.scrollY;
        const offsets = headers.map(it =>
            it.getBoundingClientRect().top -
                (parseFloat(getComputedStyle(it).marginTop) || 0) +
                window.scrollY
        );
        let activeIndex = 0;
        for (let i = 1; i < offsets.length; ++i) {
            if (scrollTop >= offsets[i] - 40 - 2) {
                activeIndex = i;
            }
        }
        const oldItem = document.querySelector<HTMLElement>('.toc-link_active');
        const newItem = navHeaders[activeIndex];
        if (newItem && newItem !== oldItem) {
            oldItem?.classList.remove('toc-link_active');
            newItem.classList.add('toc-link_active');
        }
    }

    function onCopyClick(event: MouseEvent): void {
        if (event.target instanceof Element && event.target.closest('.rehype-pretty-copy')) {
            const code = event.target.closest<HTMLElement>('code');
            if (code) {
                navigator.clipboard.writeText(code.textContent);
            }
        }
    }

    onMount(() => {
        recalcActiveHeader();
    });
</script>

<svelte:window
    onscroll={recalcActiveHeader}
    onresize={recalcActiveHeader}
    onclick={onCopyClick}
/>

<div class="article__layout">
    {@render children()}
</div>

<style>
    @import '../media.css';

    .article__layout {
        --toc-width: 100%;

        position: relative;
        padding-right: 20px;
        padding-left: 20px;

        text-wrap: pretty;

        transition: padding-right .3s ease-in-out;
    }

    :global(.toc) {
        visibility: hidden;
        opacity: 0;
        transform: translate(100vw);
        transition: .3s ease-in-out;
        transition-property: visibility, opacity, transform;
    }

    :global(.body_menu .toc) {
        visibility: visible;
        opacity: 1;
        transform: translate(0);
    }

    @media (--desktop-window) {
        .article__layout {
            --toc-width: 16rem;

            max-width: 40rem;
            margin: 0 auto;
            padding-right: calc(var(--toc-width) + 20px);
        }

        :global(.toc) {
            visibility: visible;
            opacity: 1;
            transform: none;
        }
    }

    @media (--desktop-window-large) {
        .article__layout {
            padding-left: calc(var(--toc-width) + 20px);
        }
    }
</style>
