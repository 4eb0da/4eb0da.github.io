<script lang="ts">
    import { onMount } from 'svelte';
    import './toc.css';
    import './markdown.css';

	let { children, data } = $props();

    function recalcActiveHeader(): void {
        const headers = Array.from(
            document.querySelectorAll<HTMLElement>(
                [/* 'h1',  */'h2', 'h3', 'h4', 'h5', 'h6'].map(it => `.article__layout > ${it}`).join(', ')
            )
        );
        const navHeaders = Array.from(
            document.querySelectorAll<HTMLElement>('.toc .toc-link')
        );
        const scrollTop = window.scrollY;
        const scrollHeight = window.innerHeight;
        const offsets = headers.map(it => {
            const bbox = it.getBoundingClientRect();
            return bbox.top -
                (parseFloat(getComputedStyle(it).marginTop) || 0) +
                window.scrollY;
        });
        const heights = offsets.map((it, i) => {
            if (i === offsets.length - 1) {
                return document.body.scrollHeight - it;
            }
            return offsets[i + 1] - it;
        });
        let firstActiveIndex = -1;
        let lastActiveIndex = -1;
        for (let i = 0; i < offsets.length; ++i) {
            const intersection = Math.min(scrollTop + scrollHeight, offsets[i] + heights[i]) -
                Math.max(scrollTop, offsets[i]);
            if (intersection > 0) {
                if (firstActiveIndex < 0) {
                    firstActiveIndex = i;
                }
                lastActiveIndex = i;
            }
        }
        firstActiveIndex = Math.max(firstActiveIndex, 0);
        lastActiveIndex = Math.max(lastActiveIndex, 0);
        const block = document.querySelector<HTMLElement>('.toc-level-1');
        if (block) {
            const newItems = navHeaders.slice(firstActiveIndex, lastActiveIndex + 1);
            const bbox = block.getBoundingClientRect();
            const top = (newItems[0]?.getBoundingClientRect().top ?? 0) - (bbox?.top || 0);
            const bottom = (bbox?.bottom || 0) - (newItems[newItems.length - 1]?.getBoundingClientRect().bottom ?? 0);

            block.style.setProperty('--top', `${top}px`);
            block.style.setProperty('--bottom', `${bottom}px`);
        }
    }

    let copyTimeout: number;
    function onCopyClick(event: MouseEvent): void {
        const button = event.target;
        if (button instanceof Element && button.closest('.code-copy-button')) {
            const figure = button.closest<HTMLElement>('figure');
            if (figure) {
                navigator.clipboard.writeText(figure.textContent);

                button.classList.add('code-copy-button_copied');
                clearTimeout(copyTimeout);
                copyTimeout = window.setTimeout(() => {
                    button.classList.remove('code-copy-button_copied');
                }, 3000);
            }
        }
    }

    // function formatDate(dateStr: string): string {
    //     const date = new Date(dateStr);

    //     return [
    //         String(date.getDate()).padStart(2, '0'),
    //         String(date.getMonth() + 1).padStart(2, '0'),
    //         date.getFullYear()
    //     ].join('.');
    // }

    onMount(() => {
        recalcActiveHeader();
    });
</script>

<svelte:head>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Блог 4eb0da">
    <meta property="og:locale" content="ru_RU">
    <meta property="twitter:card" content="summary_large_image">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
</svelte:head>

<svelte:window
    onscroll={recalcActiveHeader}
    onresize={recalcActiveHeader}
    onclick={onCopyClick}
/>

<div class="article__layout">
    {@render children()}

    <a class="discuss" href="http://t.me/blog_4eb0da" target="_blank">
        <span class="icon icon_telegram"></span>
        Обсудить в Telegram
    </a>

    {#if data?.relatedPosts?.length}
        <h4 class="article__related-title">
            Почитать ещё посты
        </h4>

        <ul class="article__related">
            {#each data.relatedPosts as post}
                <li class="article__related-post">
                    <a href="/posts/{post.name}" class="article__related-link">
                        <img
                            class="article__related-image"
                            alt={post.title}
                            src={post.shareImage}
                        >
                        <!-- <div class="article__related-date">
                            {formatDate(post.date)}
                        </div> -->
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    @import '../media.css';

    .article__layout {
        --toc-width: 100%;

        position: relative;
        padding-right: 20px;
        padding-left: 20px;

        text-wrap: balance;
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

    .discuss {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin-top: 40px;
        color: var(--accent);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        background: currentColor;
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
    }

    .icon_telegram {
        mask-image: url(./telegram.svg);
    }

    .article__related-title {
        margin-top: 100px;
    }

    .article__related {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: row;
        gap: 12px;
        margin: 0 -20px;
        padding: 0 20px 20px;
        overflow-x: auto;
        list-style: none;
    }

    @media (--desktop-window-large) {
        .article__related {
            margin-right: 0;
            margin-left: 0;
            padding-right: 0;
            padding-left: 0;
        }
    }

    .article__related-link {
        display: block;
        padding: 12px;
        border-radius: 12px;
        color: inherit;
        text-decoration: none;
        background-color: var(--bg-quaternary);
        transition: background-color .15s ease-in-out;
    }

    .article__related-link:hover {
        background-color: var(--bg-tertiary);
    }

    .article__related-image {
        display: block;
        width: 200px;
        max-width: none;
        margin: 0;
        aspect-ratio: 1200 / 630;
        pointer-events: none;
    }

    /* .article__related-date {
        margin-top: 12px;
        text-align: center;
    } */
</style>
