<script lang="ts">
    import SupportWarning from '$lib/components/SupportWarning.svelte';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    let value = 'Привет, @мир!'
    let input: HTMLInputElement;

    let prevRanges: OpaqueRange[] = [];
    let coords: {
        x: number;
        y: number;
    } | undefined;
    function update(): void {
        if (!HTMLInputElement.prototype.createValueRange) {
            return;
        }

        prevRanges.forEach((range) => {
            range.disconnect();
        });

        const ranges = [];

        const re = /@[a-zа-яё]+/ig;
        let match;
        while ((match = re.exec(input.value))) {
            ranges.push(input.createValueRange(match.index, match.index + match[0].length));
        }
        if (ranges.length > 0) {
            const bbox = ranges[0].getBoundingClientRect();
            coords = {
                x: bbox.x + bbox.width / 2,
                y: bbox.y
            };
            const highlight = new Highlight(...ranges);
            CSS.highlights.set('login', highlight);
        } else {
            coords = undefined;
            CSS.highlights.delete('login');
        }
        prevRanges = ranges;
    }

    onMount(() => {
        update();
    });
</script>

<svelte:window
    onresize={update}
    onscroll={update}
/>

<div class="wrapper">
    <SupportWarning
        js={!browser || HTMLInputElement.prototype.createValueRange}
        message="createValueRange() не поддерживается"
    />

    <input placeholder="Введите @логин..." bind:value={value} bind:this={input} oninput={update} />
</div>

{#if coords}
    <div
        class="tooltip"
        style:top="{coords.y}px"
        style:left="{coords.x}px"
    >
        tooltip
    </div>
{/if}

<style>
    .wrapper {
        display: block;
        width: fit-content;
        margin: 40px auto 0;
    }

    input {
        display: block;
        margin: 0 auto;
        padding: 10px 20px;
        border: 2px solid var(--text-fill-02);
        border-radius: 10px;
        background: var(--bg-secondary);
        color: inherit;
        font: inherit;
        font-size: 20px;
    }

    ::highlight(login) {
        color: var(--accent);
    }

    .tooltip {
        position: fixed;
        transform: translateX(-50%);
        margin-top: -30px;
        padding: 4px 8px;
        border-radius: 6px;
        border: 1px solid var(--text-fill-02);
        background: var(--bg-secondary);
    }
</style>
