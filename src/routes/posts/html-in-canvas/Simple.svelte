<script>
    import { browser } from '$app/environment';
    import SupportWarning from '$lib/components/SupportWarning.svelte';

    let canvas;
    let input;

    $effect(() => {
        const ctx = canvas.getContext("2d");

        canvas.onpaint = () => {
            ctx.reset();
            ctx.drawElementImage(input, 0, 0);
        };

        // Size the canvas grid to match the device scale factor.
        new ResizeObserver((entries) => {
            canvas.width = entries[0].devicePixelContentBoxSize[0].inlineSize;
            canvas.height = entries[0].devicePixelContentBoxSize[0].blockSize;
        }).observe(canvas, { box: "device-pixel-content-box" });
    });
</script>

<SupportWarning
    js={!browser || HTMLCanvasElement.prototype.requestPaint}
    message="HTML в Canvas не поддерживается"
/>

<canvas bind:this={canvas} style="width: 300px; height: 100px;" content="drawable">
    <input bind:this={input} id="name" drawable>
</canvas>

<style>
    input {
        font-size: 20px;
    }
</style>
