<script lang="ts">
    import Sample from './Sample.svelte';

    let enableClearfix = true;
</script>

<Sample>
    <button onclick={() => enableClearfix = !enableClearfix}>
        {enableClearfix ? 'Выключить clearfix' : 'Включить clearfix'}
    </button>

    <div class="parent">
        <div class="parent__label">
            parent
        </div>

        <div class="float">float</div>

        <div class="clearfix2" class:clearfix2_enable={enableClearfix}>
            {enableClearfix ? 'clearfix' : 'no clearfix'}
        </div>
    </div>

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

    .parent {
        position: relative;
        border: 2px solid;
    }

    .parent__label {
        position: absolute;
        top: 4px;
        right: 4px;
    }

    .clearfix2 {
        background: var(--accent);
        text-align: center;
        color: #000;
        margin: 10px;
    }

    .clearfix2_enable {
        clear: both;
    }
</style>
