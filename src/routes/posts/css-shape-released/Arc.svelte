<script>
    import SampleRadio from '$lib/components/SampleRadio.svelte';

    let current = 'ccw small';
</script>

<SampleRadio
    name="arc"
    initial={current}
    options={[{
        text: 'ccw small',
        value: 'ccw small'
    }, {
        text: 'ccw large',
        value: 'ccw large'
    }, {
        text: 'cw small',
        value: 'cw small'
    }, {
        text: 'cw large',
        value: 'cw large'
    }]}
    onChange={val => current = val}
/>

<div class="box">
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="100" viewBox="0 0 150 100">
        <path d="M 40 70 A 40 30 -60 0 0 100 30" />
        <path d="M 40 70 A 40 30 -60 0 1 100 30" />
        <path d="M 40 70 A 40 30 -60 1 0 100 30" />
        <path d="M 40 70 A 40 30 -60 1 1 100 30" />

        <path class="animated-path" class:animated-path_visible={current === 'ccw small'} d="M 40 70 A 40 30 -60 0 0 100 30" pathLength="10" />
        <path class="animated-path" class:animated-path_visible={current === 'cw small'} d="M 40 70 A 40 30 -60 0 1 100 30" pathLength="10" />
        <path class="animated-path" class:animated-path_visible={current === 'ccw large'} d="M 40 70 A 40 30 -60 1 0 100 30" pathLength="10" />
        <path class="animated-path" class:animated-path_visible={current === 'cw large'} d="M 40 70 A 40 30 -60 1 1 100 30" pathLength="10" />
    </svg>
    <div class="dot" style:--arc={current}></div>
</div>

<style>
    .box {
        box-sizing: border-box;
        position: relative;
        width: 150px;
        height: 100px;
        margin: 0 auto;
        padding: 10px;
        border: 2px solid var(--accent);
        border-radius: 6px;
    }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        border: 2px solid var(--accent);
        offset-path: shape(from 40px 70px, arc to 100px 30px of 40px 30px var(--arc) rotate -60deg);
        animation: offset-path 2000ms infinite ease-in-out;
    }

    svg {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
    }

    path {
        fill: none;
        stroke: currentColor;
        stroke-width: 1px;
        opacity: .3;
    }

    .animated-path {
        visibility: hidden;
        stroke: var(--accent);
        stroke-width: 2px;
        stroke-dashoffset: 0px;
        stroke-dasharray: 10px 10px;
        animation: dash-offset 2000ms infinite ease-in-out;
    }

    .animated-path_visible {
        visibility: visible;
    }

    @keyframes offset-path {
        from {
            opacity: 0;
            offset-distance: 0%;
        }
        10% {
            opacity: 1;
            offset-distance: 0%;
        }
        90% {
            opacity: 1;
            offset-distance: 100%;
        }
        to {
            opacity: 0;
            offset-distance: 100%;
        }
    }

    @keyframes dash-offset {
        from {
            opacity: 0;
            stroke-dashoffset: 10px;
        }
        10% {
            opacity: 1;
            stroke-dashoffset: 10px;
        }
        90% {
            opacity: 1;
            stroke-dashoffset: 0px;
        }
        to {
            opacity: 0;
            stroke-dashoffset: 0px;
        }
    }
</style>
