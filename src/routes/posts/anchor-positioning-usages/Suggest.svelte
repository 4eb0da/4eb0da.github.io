<div class="box">
    <input type="text" placeholder="Search...">
    <div class="popup">
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
        </ul>
    </div>
</div>

<style>
    .box {
        width: fit-content;
        margin: 0 auto;
    }

    input {
        padding: 10px 20px;
        border: 3px solid var(--accent);
        border-radius: 6px;
        color: inherit;
        font: inherit;
    }

    .popup {
        margin: 0 6px;
        border: 3px solid var(--accent);
        border-radius: 0 0 6px 6px;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        padding: 4px 14px;
    }
</style>
