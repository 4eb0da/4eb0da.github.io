<div class="gallery">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
</div>

<div class="highlight"></div>

<style>
    .gallery {
        display: flex;
        gap: 12px;
        width: 300px;
        margin: 40px auto 0;
        padding: 10px 10px 30px;
        overflow-x: scroll;
    }

    .card {
        flex: 0 0 auto;
        width: 200px;
        height: 150px;
        border: 2px solid;
        border-radius: 10px;
    }

    .card:first-child {
        anchor-name: --gallery-target;
    }

    .highlight {
        position: absolute;
        border: 3px solid var(--accent);
        position-anchor: --gallery-target;
        margin: -20px;
        border-radius: 16px;
        top: anchor(top);
        right: anchor(right);
        bottom: anchor(bottom);
        left: anchor(left);
        pointer-events: none;
    }
</style>
