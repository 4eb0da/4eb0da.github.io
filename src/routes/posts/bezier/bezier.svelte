<script lang="ts">
    import { clamp } from '$lib/utils/clamp';

    const RECT_SIZE = 50;
    const points = $state([
        [50, 100],
        [75, 75],
        [225, 75],
        [250, 100]
    ]);

    let pointerDown = $state(false);
    let prevX = 0;
    let prevY = 0;
    let currentIndex = 0;

    function onPointerDown(event: PointerEvent, index: number): void {
        prevX = event.pageX;
        prevY = event.pageY;

        pointerDown = true;
        currentIndex = index;

        event.preventDefault();
    }

    function onPointerMove(event: PointerEvent): void {
        points[currentIndex][0] += event.pageX - prevX;
        points[currentIndex][1] += event.pageY - prevY;
        points[currentIndex][0] = clamp(points[currentIndex][0], 6, 294);
        points[currentIndex][1] = clamp(points[currentIndex][1], 6, 194);
        prevX = event.pageX;
        prevY = event.pageY;

        event.preventDefault();
    }

    function onPointerUp(): void {
        pointerDown = false;
    }

    $effect(() => {
        if (pointerDown) {
            window.addEventListener('pointermove', onPointerMove, {
                passive: false
            });

            return () => {
                window.removeEventListener('pointermove', onPointerMove);
            };
        }
    });
</script>

<svelte:window
    onpointerup={onPointerUp}
    onpointercancel={onPointerUp}
/>

<svg xmlns="http://www.w3.org/2000/svg" height="200" viewBox="0 0 300 200">
    <path d="M {points[0][0]} {points[0][1]} {points[1][0]} {points[1][1]} M {points[3][0]} {points[3][1]} {points[2][0]} {points[2][1]}" fill="none" stroke="var(--accent)" stroke-width="2" />
    <path d="M {points[0][0]} {points[0][1]} C {points[1][0]} {points[1][1]} {points[2][0]} {points[2][1]} {points[3][0]} {points[3][1]}" fill="none" stroke="currentColor" stroke-width="2" />

    <circle cx={points[0][0]} cy={points[0][1]} r="5" fill="transparent" stroke="currentColor" stroke-width="2" />
    <circle cx={points[3][0]} cy={points[3][1]} r="5" fill="transparent" stroke="currentColor" stroke-width="2" />
    <circle class="secondary" cx={points[1][0]} cy={points[1][1]} r="5" fill="transparent" stroke="var(--accent)" stroke-width="2" />
    <circle class="secondary" cx={points[2][0]} cy={points[2][1]} r="5" fill="transparent" stroke="var(--accent)" stroke-width="2" />

    <rect x={points[0][0] - RECT_SIZE / 2} y={points[0][1] - RECT_SIZE / 2} width={RECT_SIZE} height={RECT_SIZE} fill="transparent" onpointerdown={event => onPointerDown(event, 0)}></rect>
    <rect x={points[1][0] - RECT_SIZE / 2} y={points[1][1] - RECT_SIZE / 2} width={RECT_SIZE} height={RECT_SIZE} fill="transparent" onpointerdown={event => onPointerDown(event, 1)}></rect>
    <rect x={points[2][0] - RECT_SIZE / 2} y={points[2][1] - RECT_SIZE / 2} width={RECT_SIZE} height={RECT_SIZE} fill="transparent" onpointerdown={event => onPointerDown(event, 2)}></rect>
    <rect x={points[3][0] - RECT_SIZE / 2} y={points[3][1] - RECT_SIZE / 2} width={RECT_SIZE} height={RECT_SIZE} fill="transparent" onpointerdown={event => onPointerDown(event, 3)}></rect>
</svg>

<style>
    svg {
        display: block;
        margin: 0 auto;
        overflow: visible;
        touch-action: none;
    }

    rect {
        cursor: grab;
    }
</style>
