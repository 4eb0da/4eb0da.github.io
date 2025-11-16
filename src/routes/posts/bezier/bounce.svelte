<div class="scene">
    <div class="box"></div>
</div>

<style>
    .scene {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
    }

    .box {
        width: 100px;
        height: 100px;
        border: 3px solid;
        border-radius: 10px;

        animation: rotate 3s cubic-bezier(0.46, 0.28, 0, 1.62) infinite;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(90deg);
        }
        to {
            transform: rotate(90deg);
        }
    }
</style>
