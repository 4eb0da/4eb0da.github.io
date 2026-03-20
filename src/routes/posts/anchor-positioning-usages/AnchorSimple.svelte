<div class="box">
    <div class="target">?</div>
    <div class="tooltip">Tooltip!</div>
</div>

<style>
    .box {
        width: 100px;
        margin: 0 auto;
    }

    .target {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        font-size: 22px;
        font-weight: bold;
        color: #000;
        border-radius: 6px;
        background: var(--accent);
        anchor-name: --anchor;
    }

    .tooltip {
        position: absolute;
        position-anchor: --anchor;
        left: anchor(right);
        margin-left: 10px;
        align-self: anchor-center;
        background: var(--accent);
        border-radius: 4px;
        padding: 4px 8px;
        color: #000;
    }
</style>
