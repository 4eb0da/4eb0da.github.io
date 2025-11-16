<script lang="ts">
    export let type: 'linear' | 'bezier';

    let box: HTMLElement;
    let direction = 1;

    function run(): void {
        direction *= -1;

        let keyframes = [{
            transform: 'translateX(0)'
        }, {
            transform: 'translateX(100px)'
        }];

        if (direction === 1) {
            keyframes.reverse();
        }

        box.animate(keyframes, {
            easing: type === 'bezier' ? 'ease-in-out' : 'linear',
            duration: 1000,
            fill: 'both'
        });
    }
</script>

<div class="root">
    <div bind:this={box} class="box"></div>

    <button onclick={run} type="button">
        Запустить
    </button>
</div>

<style>
    .root {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px 0;
    }

    .box {
        width: 100px;
        height: 100px;
        border: 3px solid currentColor;
        border-radius: 10px;
    }

    button {
        margin-top: 10px;
        font-size: 1.4em;
    }
</style>
