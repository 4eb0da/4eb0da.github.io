<script lang="ts">
    import SupportWarning from "$lib/components/SupportWarning.svelte";

    let isCircle = true;

    let borderRadiusA = $state(10);
    let borderRadiusB = $state(10);
    let borderRadiusShow = $state(true);
    let borderRadiusColor = $state('#ffffff');
    let borderRadiusAlpha = $state(.3);

    let superEllipse = $state(2);
    let cornerRadiusA = $state(10);
    let cornerRadiusB = $state(10);
    let cornerRadiusShow = $state(true);
    let cornerRadiusColor = $state('#4eb0da');
    let cornerRadiusAlpha = $state(1); 

    let zoom = $state(10);
    let width = $state(1);

    $effect(() => {
        if (isCircle) {
            borderRadiusB = borderRadiusA;
            cornerRadiusB = cornerRadiusA;
        }
    });

    function calcSuperEllipse(angle: number, n: number, a: number, b: number): [number, number] {
        const r = Math.pow(Math.pow(Math.abs(Math.cos(angle) / a), n) + Math.pow(Math.abs(Math.sin(angle) / b), n), -1 / n);

        return [
            Math.cos(angle) * r,
            Math.sin(angle) * r
        ];
    }

    function calcFallback(): void {
        let bestRadiusA = 0;
        let bestRadiusB = 0;
        let bestDiff = Infinity;

        for (let bR = 0; bR <= 100; bR += 0.1) {
            let diff = 0;
            const max = Math.max(bR, cornerRadiusA);
            for (let x = 0; x <= 1; x += .01) {
                const angle = x * Math.PI / 2;

                const xCoord = Math.min(1, Math.tan(Math.PI / 2 - angle)) * max;
                const yCoord = Math.min(1, Math.tan(angle)) * max;

                const borderRadiusAngle = Math.atan2(yCoord - (max - bR), xCoord - (max - bR));
                const cornerRadiusAngle = Math.atan2(yCoord - (max - cornerRadiusB), xCoord - (max - cornerRadiusA));

                let ellipse;
                if (borderRadiusAngle >= 0 && borderRadiusAngle <= Math.PI / 2) {
                    ellipse = calcSuperEllipse(borderRadiusAngle, 2, bR, bR);
                    ellipse[0] += max - bR;
                    ellipse[1] += max - bR;
                } else {
                    ellipse = angle > Math.PI / 4 ? [Math.tan(Math.PI / 2 - angle) * max, max] : [max, Math.tan(angle) * max];
                }
                let sEllipse;
                if (cornerRadiusAngle >= 0 && cornerRadiusAngle <= Math.PI / 2) {
                    sEllipse = calcSuperEllipse(cornerRadiusAngle, Math.pow(2, superEllipse), cornerRadiusA, cornerRadiusB);
                    sEllipse[0] += max - cornerRadiusA;
                    sEllipse[1] += max - cornerRadiusB;
                } else {
                    sEllipse = angle > Math.PI / 4 ? [Math.tan(Math.PI / 2 - angle) * max, max] : [max, Math.tan(angle) * max];
                }
                diff += (ellipse[0] - sEllipse[0]) * (ellipse[0] - sEllipse[0]) + (ellipse[1] - sEllipse[1]) * (ellipse[1] - sEllipse[1]);
            }
            if (diff < bestDiff) {
                bestDiff = diff;
                bestRadiusA = bR;
                bestRadiusB = bR;
            }
        }

        borderRadiusA = bestRadiusA;
        borderRadiusB = bestRadiusB;
    }

    function calcCorner(): void {
        let bestRadiusA = 0;
        let bestRadiusB = 0;
        let bestDiff = Infinity;

        for (let bR = 0; bR <= 100; bR += 0.1) {
            let diff = 0;
            const max = Math.max(borderRadiusA, bR);
            for (let x = 0; x <= 1; x += .01) {
                const angle = x * Math.PI / 2;

                const xCoord = Math.min(1, Math.tan(Math.PI / 2 - angle)) * max;
                const yCoord = Math.min(1, Math.tan(angle)) * max;

                const borderRadiusAngle = Math.atan2(yCoord - (max - borderRadiusB), xCoord - (max - borderRadiusA));
                const cornerRadiusAngle = Math.atan2(yCoord - (max - bR), xCoord - (max - bR));

                let ellipse;
                if (borderRadiusAngle >= 0 && borderRadiusAngle <= Math.PI / 2) {
                    ellipse = calcSuperEllipse(borderRadiusAngle, 2, borderRadiusA, borderRadiusB);
                    ellipse[0] += max - borderRadiusA;
                    ellipse[1] += max - borderRadiusB;
                } else {
                    ellipse = angle > Math.PI / 4 ? [Math.tan(Math.PI / 2 - angle) * max, max] : [max, Math.tan(angle) * max];
                }
                let sEllipse;
                if (cornerRadiusAngle >= 0 && cornerRadiusAngle <= Math.PI / 2) {
                    sEllipse = calcSuperEllipse(cornerRadiusAngle, Math.pow(2, superEllipse), bR, bR);
                    sEllipse[0] += max - bR;
                    sEllipse[1] += max - bR;
                } else {
                    sEllipse = angle > Math.PI / 4 ? [Math.tan(Math.PI / 2 - angle) * max, max] : [max, Math.tan(angle) * max];
                }
                diff += (ellipse[0] - sEllipse[0]) * (ellipse[0] - sEllipse[0]) + (ellipse[1] - sEllipse[1]) * (ellipse[1] - sEllipse[1]);
            }
            if (diff < bestDiff) {
                bestDiff = diff;
                bestRadiusA = bR;
                bestRadiusB = bR;
            }
        }

        cornerRadiusA = bestRadiusA;
        cornerRadiusB = bestRadiusB;
    }

    function formatNumber(num: number): string {
        return num.toFixed(1).replace(/0+$/, '').replace(/\.$/, '');
    }
</script>

<SupportWarning name="corner-shape" value="superellipse(2)" message="Браузер не поддерживает superellipse :(" />

<div class="preview" style:--zoom={zoom} style:--width={width}>
    {#if borderRadiusShow}
        <div
            class="border-radius"
            style:--border-radius-a={borderRadiusA}
            style:--border-radius-b={borderRadiusB}
            style:--border-color={borderRadiusColor}
            style:--opacity={borderRadiusAlpha}
        ></div>
    {/if}
    {#if cornerRadiusShow}
        <div
            class="corner-radius"
            style:--border-radius-a={cornerRadiusA}
            style:--border-radius-b={cornerRadiusB}
            style:--border-color={cornerRadiusColor}
            style:--corner-superellipse={superEllipse}
            style:--opacity={cornerRadiusAlpha}
        ></div>
    {/if}
</div>

<div class="zoom">
    Zoom:
    <input
        type="range"
        min="1"
        max="20"
        step="0.1"
        bind:value={zoom}
    >
    {zoom.toFixed(1)}
</div>

<div class="boxes">
<fieldset>
    <legend>
        border-radius
    </legend>
    <div class="row">
        <input
            type="checkbox"
            bind:checked={borderRadiusShow}
        >
        <input
            type="color"
            bind:value={borderRadiusColor}
            disabled={!borderRadiusShow}
        >
        Opacity:
        <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            bind:value={borderRadiusAlpha}
            disabled={!borderRadiusShow}
        >
    </div>

    <div class="row">
        Radius:
        <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            bind:value={borderRadiusA}
            disabled={!borderRadiusShow}
        >
        <input
            class="short"
            type="number"
            bind:value={borderRadiusA}
        >
    </div>

    <button onclick={calcFallback} disabled={!borderRadiusShow}>
        Посчитать фолбек
    </button>
</fieldset>

<fieldset>
    <legend>
        corner-shape
    </legend>
    <div class="row">
        <input
            type="checkbox"
            bind:checked={cornerRadiusShow}
        >
        <input
            type="color"
            bind:value={cornerRadiusColor}
            disabled={!cornerRadiusShow}
        >
        Opacity:
        <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            bind:value={cornerRadiusAlpha}
            disabled={!cornerRadiusShow}
        >
    </div>

    <div class="row">
        Radius:
        <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            bind:value={cornerRadiusA}
            disabled={!cornerRadiusShow}
        >
        <input
            class="short"
            type="number"
            bind:value={cornerRadiusA}
        >
    </div>

    <div class="row">
        superellipse(n):
        <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            bind:value={superEllipse}
            disabled={!cornerRadiusShow}
        >
        <input
            class="short"
            type="number"
            min="0"
            max="10"
            step="0.1"
            bind:value={superEllipse}
        >
    </div>

    <button onclick={calcCorner} disabled={!cornerRadiusShow}>
        Посчитать радиус corner-shape
    </button>
</fieldset>
</div>

<pre>
    <code>
.element &lbrace;
    border-radius: {formatNumber(borderRadiusA)}px;
&rbrace;

@supports (corner-shape: superellipse(2)) &lbrace;
    .element &lbrace;
        border-radius: {formatNumber(cornerRadiusA)}px;
        corner-shape: superellipse({superEllipse});
    &rbrace;
&rbrace;
    </code>
</pre>

<style>
    .preview {
        position: relative;
        width: 300px;
        height: 200px;
        margin: 20px auto;
        /* border: 1px solid var(--accent); */
        /* border-radius: 4px; */
        overflow: hidden;
        overflow: clip;
    }

    input {
        accent-color: var(--accent);
    }

    .border-radius,
    .corner-radius {
        position: absolute;
        top: 0;
        right: 0;
        width: calc(100% * var(--zoom));
        height: calc(100% * var(--zoom));
        border-top-right-radius: calc(1px * var(--border-radius-a) * var(--zoom)) calc(1px * var(--border-radius-b) * var(--zoom));
        border: calc(1px * var(--width) * var(--zoom)) solid var(--border-color);
        border-bottom: none;
        border-left: none;
        opacity: var(--opacity);
    }

    .corner-radius {
        corner-shape: superellipse(var(--corner-superellipse));
    }

    @media (min-width: 60em) {
        .boxes {
            display: flex;
            gap: 12px;
        }
    }

    .zoom {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
    }

    fieldset {
        display: flex;
        flex-direction: column;
        gap: 12px;
        flex: 1 0 0;
    }

    .row {
        display: flex;
        align-items: center;
    }

    .short {
        width: 40px;
    }

    button {
        margin: auto 0 0;
        padding: 4px 6px;
        font: inherit;
        border: none;
        border-radius: 4px;
        background: var(--accent);
        color: #000;
    }

    button[disabled] {
        background: var(--bg-quaternary);
    }

    button:not([disabled]):hover {
        opacity: .8;
    }
</style>
