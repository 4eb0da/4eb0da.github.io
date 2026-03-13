<div class="box">
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="100" viewBox="0 0 150 100">
        <circle class="point" cx="20" cy="20" r="3" />
        <circle class="point" cx="75" cy="50" r="3" />
        <circle class="point" cx="130" cy="80" r="3" />

        <circle cx="50" cy="20" r="2" />
        <circle cx="60" cy="35" r="2" />

        <circle cx="90" cy="65" r="2" />
        <circle cx="105" cy="80" r="2" />

        <path class="static-path" d="M 20 20 C 50 20 60 35 75 50" pathLength="10" fill="none" />
        <path class="animated-path" d="M 75 50 C 90 65 105 80 130 80" pathLength="10" fill="none" />

        <path d="M 20 20 L 50 20 M 60 35 75 50" />
        <path d="M 75 50 L 90 65 M 105 80 130 80" />
    </svg>
    <div class="dot"></div>
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
        offset-path: shape(from 75px 50px, curve to 130px 80px with 90px 65px / 105px 80px);
        animation: offset-path 2000ms infinite ease-in-out;
    }

    svg {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
    }

    circle {
        fill: currentColor;
    }

    .point {
        fill: var(--accent);
    }

    path {
        stroke: currentColor;
        stroke-width: 1px;
        opacity: .3;
    }

    .static-path,
    .animated-path {
        stroke: var(--accent);
        stroke-width: 2px;
        opacity: 1;
    }

    .animated-path {
        stroke-dashoffset: 0px;
        stroke-dasharray: 10px 10px;
        animation: dash-offset 2000ms infinite ease-in-out;
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
