<script lang="ts" module>
    import type { BrowserName, CompatStatement } from '@mdn/browser-compat-data';

    const BROWSERS: BrowserName[] = ['chrome', 'firefox', 'safari'];

    const TITLES: Record<string, string> = {
        chrome: 'Chrome',
        firefox: 'Firefox',
        safari: 'Safari'
    };
</script>

<script lang="ts">
    import { getBcd } from '$lib/utils/bcd.remote';

    const {
        id,
        title,
        link,
        compat
    }: {
        id?: string;
        title: string;
        link?: string;
        compat?: CompatStatement;
    } = $props();

    let data = compat || await getBcd(id || '');

    let status;
    const map = BROWSERS.map(browser => {
        const item = data.support?.[browser];
        if (!item) {
            return {
                support: false,
                partial: false
            };
        }
        const lastItem = Array.isArray(item) ? item[0] : item; 
        const support = lastItem.version_added;
        const partial = lastItem.prefix ||
            lastItem.partial_implementation ||
            lastItem.flags;

        return {
            support,
            partial
        };
    });
    if (map.every(it => it.support) && map.every(it => !it.partial)) {
        status = 'supported';
    } else if (map.some(it => it.support)) {
        status = 'some';
    } else {
        status = 'none';
    }
</script>

<div class="bcd bcd_status_{status}">
    <a
        class="bcd__title"
        href={link || data.mdn_url}
        target="_blank"
        rel="noopener"
    >
        {title}
    </a>
    <div class="bcd__browsers">
        {#each BROWSERS as browser, index}
            <div
                class="bcd__browser"
                class:bcd__browser_partial={map[index]?.partial}
                class:bcd__browser_missing={!map[index]?.support}
                title={TITLES[browser]}
            >
                <div class="bcd__browser-icon bcd__browser-icon_browser_{browser}"></div>

                {#if map[index]?.support}
                    {@const item = Array.isArray(data.support[browser]) ? data.support[browser][0] : data.support[browser]}

                    {#if item}
                        {item.version_added}
                    {/if}
                {:else}
                    <svg class="bcd__missing" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="M1 15 15 1M1 1l14 14"/></g></svg>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    .bcd {
        position: relative;
        margin: 1em 0;
        padding: .6em 1em 2.4em;
        border-radius: .8em;
        border: 1px solid var(--text-fill-02);
    }

    .bcd_status_supported {
        background: var(--bcd-supported);
    }

    .bcd_status_some {
        background: var(--bcd-partial);
    }

    .bcd_status_none {
        background: var(--bcd-unsupported);
    }

    .bcd__title {
        margin: 0;
        color: inherit;
        font-size: 20px;
        font-weight: normal;
        text-decoration: none;
    }

    .bcd__title:link:hover {
        text-decoration: underline;
    }

    .bcd__browsers {
        position: absolute;
        right: 1em;
        bottom: .6em;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .bcd__browser {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px;
        font-size: 14px;
        border-radius: 12px;
        background: var(--bg-color);
    }

    .bcd__browser {
        color: var(--bcd-sub-supported-text);
        --bg-color: var(--bcd-sub-supported-bg);
    }

    .bcd__browser_partial {
        color: var(--bcd-sub-partial-text);
        --bg-color: var(--bcd-sub-partial-bg);
    }

    .bcd__browser_missing {
        color: var(--bcd-sub-unsupported-text);
        --bg-color: var(--bcd-sub-unsupported-bg);
    }

    .bcd__missing {
        display: block;
        width: 10px;
        height: 10px;
        overflow: visible;
    }

    .bcd__browser-icon {
        width: 16px;
        height: 16px;
        background: no-repeat 50% 50%;
        background-size: contain;
    }

    .bcd__browser-icon_browser_chrome {
        background-image: url(../assets/chrome.svg);
    }

    .bcd__browser-icon_browser_firefox {
        background-image: url(../assets/firefox.svg);
    }

    .bcd__browser-icon_browser_safari {
        background-image: url(../assets/safari.svg);
    }
</style>
