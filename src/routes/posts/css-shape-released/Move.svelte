<div class="box">
    <div class="dot"></div>
</div>

<style>
    .box {
        box-sizing: border-box;
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
        offset-path: shape(from 20px 20px, line to 130px 80px);
        animation: offset-path 2000ms infinite ease-in-out;
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
</style>
