<div class="box">
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="100" viewBox="0 0 150 100">
        <path d="M 20 50 L 130 50" pathLength="10" />
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
        offset-path: shape(from 20px 50px, line to 130px 50px);
        animation: offset-path 2000ms infinite ease-in-out;
    }

    svg {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
    }

    path {
        stroke: var(--accent);
        stroke-width: 2px;
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
