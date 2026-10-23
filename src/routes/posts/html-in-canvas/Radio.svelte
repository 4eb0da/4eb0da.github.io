<script>
    import { browser } from '$app/environment';
    import SupportWarning from '$lib/components/SupportWarning.svelte';

    let canvas;
    let input;

    // Треугольная волна: значение в [-1, 1] с резким изломом — та самая "зигзаг"-форма.
    const zigzag = (t) => 2 * Math.abs(((t % 2) + 2) % 2 - 1) - 1;

    $effect(() => {
        const ctx = canvas.getContext("2d");

        canvas.onpaint = () => {
            ctx.reset();
            // 1. Рисуем элемент на канвас.
            ctx.drawElementImage(input, 0, 50);

            // 2. Читаем пиксели обратно.
            const width = canvas.width;
            const height = canvas.height;
            if (width === 0 || height === 0) return;

            const imageData = ctx.getImageData(0, 0, width, height);
            const src = imageData.data;
            const copy = new Uint8ClampedArray(src);

            // 3. Искривляем пиксели зигзагом вдоль горизонтальной оси:
            //    каждая колонка x сдвигается по вертикали на zigzag(x / period) * amplitude.
            const amplitude = Math.max(2, Math.round(height * 0.14));
            const period = Math.max(4, Math.round(width / 6));

            for (let x = 0; x < width; x++) {
                const shift = Math.round(amplitude * zigzag(x / period));
                for (let y = 0; y < height; y++) {
                    const sy = Math.min(height - 1, Math.max(0, y + shift));
                    const s = (sy * width + x) * 4;
                    const d = (y * width + x) * 4;
                    copy[d] = src[s];
                    copy[d + 1] = src[s + 1];
                    copy[d + 2] = src[s + 2];
                    copy[d + 3] = src[s + 3];
                }
            }

            imageData.data.set(copy);

            // 4. Кладём искажённое изображение обратно на канвас.
            ctx.putImageData(imageData, 0, 0);
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
