<script lang="ts">
    let color0 = '#4eb0da';
    let color1 = '#fff';
    let percent = 50;
</script>

<div class="group">
    <div class="row">
        <input class="color" type="color" bind:value={color0}>
        =&gt;
        <div
            class="result"
            style:--color0={color0}
            style:--color1={color1}
            style:--percent={percent}
        ></div>
        &lt;=
        <input class="color" type="color" bind:value={color1}>
    </div>
    <input type="range" min="0" max="100" bind:value={percent}>
</div>

<style>
    .group {
        display: flex;
        gap: 12px;
        flex-direction: column;
        width: fit-content;
        margin: 0 auto;
    }

    .row {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .color, .result {
        box-sizing: border-box;
        width: 44px;
        height: 44px;
        padding: 2px;
        border-radius: 4px;
        border: 1px solid var(--text-fill-02);
    }

    .result {
        background: color-mix(in srgb, var(--color0), var(--color1) calc(1% * var(--percent)));
    }
</style>
