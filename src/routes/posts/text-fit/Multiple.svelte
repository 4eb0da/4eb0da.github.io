<div class="layout">
    <div class="block">
        <div class="item">Main</div>
        <div class="item">Profile</div>
        <div class="item">Store</div>
        <div class="item">Collection</div>
        <div class="item">Search</div>
    </div>
</div>

<style>
    .layout {
        /* width: 320px; */
        margin: 0 auto;
        padding: 30px;
        border: 3px solid var(--accent);
    }

    .block {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .item {
        display: flex;
        align-items: center;
        flex: 0 0 auto;
        width: 100px;
        margin: 10px;
        padding: 10px;
        border: 1px solid;
    }

    .item:nth-child(1) {
        font-size: 270%;
    }

    .item:nth-child(2) {
        font-size: 210%;
    }

    .item:nth-child(3) {
        font-size: 250%;
    }

    .item:nth-child(4) {
        font-size: 140%;
    }

    .item:nth-child(5) {
        font-size: 200%;
    }
</style>
