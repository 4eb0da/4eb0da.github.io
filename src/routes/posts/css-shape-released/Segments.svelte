<script lang="ts">
    let current = -1;
    const commands = [{
        text: 'line to 20px 20px',
        svg: 'M 0 0 L 20 20'
    }, {
        text: 'hline to 60px',
        svg: 'M 20 20 H 60'
    }, {
        text: 'curve to 100px 40px with 80px 20px / 100px 20px',
        svg: 'M 60 20 C 80 20 100 20 100 40'
    }, {
        text: 'smooth to 140px 60px with 120px 60px',
        svg: 'M 100 40 C 100 60 120 60 140 60'
    }, {
        text: 'arc to 20px 80px of 100px 80px cw small',
        svg: 'M 140 60 A 100 80 0 0 1 20 80'
    }, {
        text: 'close',
        svg: 'M 20 80 L 0 0'
    }];
</script>

<div class="box">
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="100" viewBox="0 0 150 100">
        {#each commands as command, index}
            <path d={command.svg} class:path_active={index === current} />
        {/each}
    </svg>
</div>

<div class="code">
shape(
    from 0 0,
{''}{#each commands as command, index}
{'    '}<button class="segment-button" class:segment-button_active={current === index} onclick={() => current = current === index ? -1 : index}>{command.text}{#if index + 1 !== commands.length},{/if}</button>
{'\n'}{/each})
</div>

<style>
    .box {
        width: 150px;
        height: 100px;
        margin: 0 auto;
        border: 2px solid var(--accent);
        border-radius: 4px;
    }

    svg {
        display: block;
    }

    path {
        stroke: currentColor;
        stroke-width: 2px;
        fill: none;
        transition: .15s ease-in-out;
    }

    .path_active {
        stroke: var(--accent);
    }

    .code {
        /* padding: 1em 1em 1em 2em;
        border-radius: .8em;
        background: var(--bg-tertiary);
        border: 1px solid var(--text-fill-02); */
        white-space: pre-wrap;
        font-family: monospace;
    }

    .segment-button {
        margin: 0;
        padding: 2px 4px;
        font: inherit;
        border: none;
        border-radius: 2px;
        /* background: none; */
        /* appearance: none; */
        transition: background-color .15s ease-in-out;
    }

    .segment-button_active {
        background: var(--accent);
    }
</style>
