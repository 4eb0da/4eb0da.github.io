<div class="box">
    <div class="dot"></div>
</div>

<style>
    .box {
        width: 190px;
        height: 100px;
        margin: 0 auto;
        padding: 10px;
        border: 2px solid var(--accent);
        border-radius: 6px;
    }

    .dot {
        width: 10px;
        height: 10px;
        background: var(--accent);
        border-radius: 100%;
        offset-path: circle(50px);
        animation: offset-path 5000ms infinite linear;
    }

    @keyframes offset-path {
        from {
            offset-distance: 0%;
        }
        to {
            offset-distance: 100%;
        }
    }
</style>
