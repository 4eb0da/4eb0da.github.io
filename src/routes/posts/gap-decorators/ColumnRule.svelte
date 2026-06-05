<script lang="ts">
    import SampleRadio from '$lib/components/SampleRadio.svelte';
    import SupportWarning from '$lib/components/SupportWarning.svelte';

    let current = 'flex';
</script>

<SupportWarning
    name="rule-break"
    value="none"
    message="gap decorations не поддерживаются :("
/>

<SampleRadio
    name="display"
    initial={current}
    options={[{
        text: 'flex',
        value: 'flex'
    }, {
        text: 'grid',
        value: 'grid'
    }]}
    onChange={val => current = val}
/>

<div class="box" class:box_grid={current === 'grid'}>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>

<style>
    .box {
        display: flex;
        flex-wrap: wrap;
        width: 300px;
        text-wrap: initial;
        margin: 0 auto;
        text-align: center;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, 50px);
        justify-content: center;
        column-rule: 3px solid var(--accent);
    }

    .box_grid {
        display: grid;
    }

    .item {
        flex: 1 0 auto;
        box-sizing: border-box;
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 1px solid currentColor;
        border-radius: 6px;
    }
</style>
