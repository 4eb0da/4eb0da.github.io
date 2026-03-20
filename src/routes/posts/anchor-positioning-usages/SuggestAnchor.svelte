<script lang="ts">
    import Sample from "$lib/components/Sample.svelte";
</script>

<Sample largeBottomMargin>
    <div class="box">
        <div class="scroll">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, soluta! Quidem doloremque ipsum ipsam animi obcaecati quae. Doloribus porro repellendus, quos, esse,
            <br>
            <input type="text" placeholder="Search...">
            <br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo error aspernatur placeat quisquam id est nesciunt sed magnam?
        </div>
        <div class="popup">
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
            </ul>
        </div>
    </div>
</Sample>

<style>
    .box {
        position: relative;
    }

    .scroll {
        overflow-y: scroll;
        height: 200px;
    }

    input {
        margin: 10px 0;
        padding: 10px 20px;
        border: 3px solid var(--accent);
        border-radius: 6px;
        background: var(--bg-primary);
        color: inherit;
        font: inherit;
        anchor-name: --suggest-anchor;
    }

    .popup {
        position: absolute;
        left: 0;
        box-sizing: border-box;
        margin: 0 6px;
        border: 3px solid var(--accent);
        border-radius: 0 0 6px 6px;
        background: var(--bg-primary);
        position-anchor: --suggest-anchor;
        top: anchor(bottom);
        right: anchor(right);
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
