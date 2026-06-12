<script lang="ts">
    import { onMount } from "svelte";

    let width = $state(100);
    let origWidth = $state(0);
    let node: HTMLElement;

    onMount(() => {
        origWidth = node.getBoundingClientRect().width - 2;
    });
</script>

<div class="layout">
    <input type="range" min="100" max="300" bind:value={width}> {width}

    <div
        bind:this={node}
        class="block"
        style:width={origWidth ? `${width}px` : undefined}
        style:--width={width}
        style:--origWidth={origWidth || undefined}
    >
        Hello
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
    }

    .block {
        width: fit-content;
        border: 1px solid;
        font-size: 16px;
        font-size: calc(16px * var(--width) / var(--origWidth));
    }
</style>
