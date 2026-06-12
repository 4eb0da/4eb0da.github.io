<script lang="ts">
    import { onMount } from 'svelte';
    import SampleRadio from '$lib/components/SampleRadio.svelte';

    let width = $state(200);
    let origWidth = $state<number[]>([]);
    let line0: HTMLElement;
    let line1: HTMLElement;
    let line2: HTMLElement;

    let current = $state('none');

    onMount(() => {
        origWidth = [
            line0.getBoundingClientRect().width,
            line1.getBoundingClientRect().width,
            line2.getBoundingClientRect().width,
        ];
    });
</script>

<SampleRadio
    name="per-line"
    initial={current}
    options={[{
        text: 'none',
        value: 'none'
    }, {
        text: 'per-line',
        value: 'per-line'
    }, {
        text: 'per-line-all',
        value: 'per-line-all'
    }]}
    onChange={val => current = val}
/>

<div class="layout layout_{current}">
    <input type="range" min="150" max="250" bind:value={width}> {width}

    <div
        class="block"
        style:width="{width}px"
    >
        <div
            bind:this={line0}
            class="line"
            style:width={origWidth.length ? `${width}px` : undefined}
            style:--width={width}
            style:--origWidth={origWidth[0] || undefined}
        >
            Lorem ipsum dolor
        </div>
        <div
            bind:this={line1}
            class="line"
            style:width={origWidth.length ? `${width}px` : undefined}
            style:--width={width}
            style:--origWidth={origWidth[1] || undefined}
        >
            sit amet consectetur
        </div>
        <div
            bind:this={line2}
            class="line"
            style:width={origWidth.length ? `${width}px` : undefined}
            style:--width={width}
            style:--origWidth={origWidth[2] || undefined}
        >
            adipisicing elit.
        </div>
    </div>
</div>

<style>
    .layout {
        width: 320px;
        margin: 0 auto;
        padding: 30px;
        border: 3px solid var(--accent);
    }

    input {
        margin-bottom: 20px;
        accent-color: var(--accent);
    }

    .block {
        border: 1px solid;
    }

    .line {
        width: fit-content;
        margin: 0 auto;
        font-size: 16px;
        white-space: nowrap;
    }

    .layout_per-line .line:not(:last-child) {
        font-size: calc(16px * var(--width) / var(--origWidth));
    }

    .layout_per-line-all .line {
        font-size: calc(16px * var(--width) / var(--origWidth));
    }
</style>
