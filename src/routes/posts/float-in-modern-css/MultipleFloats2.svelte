<script lang="ts">
    import Sample from './Sample.svelte';

    let showText = false;
</script>

<Sample>
    <button onclick={() => showText = !showText}>
        {showText ? 'Скрыть текст' : 'Показать текст'}
    </button>

    <div class="float">1</div>
    <div class="float">2</div>
    <div class="float">3</div>
    <div class="float">4</div>

    {#if showText}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae accusantium ratione dolorem, debitis est, delectus consequuntur vero, minus nesciunt blanditiis quisquam laboriosam ut earum sapiente. Non quo sint rem atque!
    {/if}

    <div class="clearfix"></div>
</Sample>

<style>
    button {
        display: block;
        width: fit-content;
        margin: 0 auto 20px;
        padding: 4px 8px;
        background: var(--accent);
        border-radius: 4px;
        border: none;
        font: inherit;
        font-size: 14px;
        color: #000;
        appearance: none;
        transition: opacity .15s ease-in-out;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }

    .float {
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        margin: 10px;
        border: 2px solid var(--accent);
        border-radius: 4px;
        font-size: 20px;
    }

    .clearfix {
        clear: both;
    }
</style>
