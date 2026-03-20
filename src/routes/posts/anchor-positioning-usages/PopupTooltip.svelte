<div class="box">
    <div class="header">
        Some dialog
    </div>
    <div class="target">
        <div class="target__text">
            ?
        </div>
        <div class="popup">Tooltip!</div>
    </div>
</div>

<style>
    .box {
        width: 150px;
        margin: 0 auto;
        border: 3px solid var(--accent);
        border-radius: 8px;
        overflow: auto;
    }

    .header {
        background: var(--accent);
        color: #000;
        padding: 10px 10px;
    }

    .target {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        margin: 20px auto;
        border-radius: 6px;
        background: var(--accent);
    }

    .target__text {
        font-size: 22px;
        font-weight: bold;
        color: #000;
    }

    .popup {
        position: absolute;
        left: 100%;
        margin-left: 10px;
        align-self: anchor-center;
        background: var(--accent);
        border-radius: 4px;
        padding: 4px 8px;
        color: #000;
    }
</style>
