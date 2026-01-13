<div class="block" style:--level={1}>
    Block level 1

    <div class="block" style:--level={2}>
        Block level 2

        <div class="block" style:--level={3}>Block level 3</div>
        <div class="block" style:--level={3}>Block level 3</div>
    </div>
</div>

<style>
    .block {
        --accent: 220;
        --saturation: 50;

        margin: 10px;
        padding: 10px;
        color: #000;
        background-color: hsl(var(--accent) var(--saturation) calc(100 - 10 * var(--level)));
    }
</style>
