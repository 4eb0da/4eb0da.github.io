<script lang="ts">
    import src from './html.svg?url';

    let x = 200;
    let y = 200;
    let size = 200;

    let pointerDown = false;
    let eventStartPageX = 0;
    let eventStartPageY = 0;
    let eventStartX = 0;
    let eventStartY = 0;
    let highlightContainer: HTMLDivElement;

    function onPointerDown(event: PointerEvent): void {
        event.preventDefault();

        eventStartPageX = event.pageX;
        eventStartPageY = event.pageY;
        eventStartX = x;
        eventStartY = y;

        pointerDown = true;
    }

    function onPointerMove(event: PointerEvent): void {
        event.preventDefault();

        const pxSize = highlightContainer.offsetWidth;

        x = Math.max(0, Math.min(512 - size, Math.round(eventStartX + (event.pageX - eventStartPageX) / pxSize * 512)));
        y = Math.max(0, Math.min(512 - size, Math.round(eventStartY + (event.pageY - eventStartPageY) / pxSize * 512)));
    }

    function onPointerUp(): void {
        pointerDown = false;
    }
</script>

<svelte:window
    onpointermove={pointerDown ? onPointerMove : undefined}
    onpointerup={pointerDown ? onPointerUp : undefined}
    onpointercancel={pointerDown ? onPointerUp : undefined}
/>

<div
    class="container"
    style:--x="{x}px"
    style:--y="{y}px"
    style:--size="{size}px"
>
    <div class="container__inner">
        <div
            bind:this={highlightContainer}
            class="container__block"
        >
            <img
                class="container__full-image"
                alt="Тестовое изображение"
                src="{src}"
            >
            <div
                class="container__highlight"
                onpointerdown={onPointerDown}
            ></div>
        </div>
        <div
            class="container__block container__test-image"
        ></div>
    </div>
</div>

<div class="preview">
    #xywh={x},{y},{size},{size}
</div>

<div>
    <label>
        <div>
            x
        </div>
        <input type="range" bind:value={x} min="0" max={512 - size}>
    </label>
</div>
<div>
    <label>
        <div>
            y
        </div>
        <input type="range" bind:value={y} min="0" max={512 - size}>
    </label>
</div>
<div>
    <label>
        <div>
            width & height
        </div>
        <input type="range" bind:value={size} min="1" max={512 - Math.max(x, y)}>
    </label>
</div>

<style>
    .container {
        position: relative;
        height: 0;
        padding-bottom: 50%;
    }

    .container__inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
    }

    .preview {
        display: inline-block;
        margin-top: 12px;
        padding: .2em .4em;
        border-radius: .4em;
        background: var(--bg-tertiary);
        border: 1px solid var(--text-fill-03);
    }

    img {
        margin: 0;
    }

    input {
        accent-color: #4eb0da;
    }

    .container__block {
        position: relative;
        width: 50%;
        margin: 0;
        border: 1px solid currentColor;
    }

    .container__test-image {
        background: no-repeat 50% 50% url(./html.svg);
        background-position: calc(100% * (var(--x) / (512px - var(--size)))) calc(100% * (var(--y) / (512px - var(--size))));
        background-size: calc(100% / (var(--size) / 512px));
    }

    .container__full-image {
        display: block;
        width: 100%;
        height: 100%;
        max-width: none;
    }

    .container__highlight {
        position: absolute;
        left: calc(100% * var(--x) / 512px);
        top: calc(100% * var(--y) / 512px);
        width: calc(100% * var(--size) / 512px);
        height: calc(100% * var(--size) / 512px);
        border: 2px solid var(--accent);
        cursor: crosshair;
        touch-action: none;
    }
</style>
