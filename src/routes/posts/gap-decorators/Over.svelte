<script lang="ts">
    import SampleRadio from '$lib/components/SampleRadio.svelte';
    import SupportWarning from '$lib/components/SupportWarning.svelte';

    let current = 'row-over-column';
</script>

<SupportWarning
    name="rule-break"
    value="none"
    message="gap decorations не поддерживаются :("
/>

<SampleRadio
    name="over"
    initial={current}
    options={[{
        text: 'row-over-column',
        value: 'row-over-column'
    }, {
        text: 'column-over-row',
        value: 'column-over-row'
    }]}
    onChange={val => current = val}
/>

<div class="box box_{current}">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>

<style>
    .box {
        display: grid;
        flex-wrap: wrap;
        width: 180px;
        text-wrap: initial;
        margin: 0 auto;
        text-align: center;
        gap: 20px;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        column-rule: 16px solid var(--accent);
        row-rule: 16px solid currentColor;
        rule-overlap: row-over-column;
    }

    .box_column-over-row {
        rule-overlap: column-over-row;
    }

    .item {
        box-sizing: border-box;
        display: inline-block;
        height: 40px;
        border: 1px solid currentColor;
        border-radius: 6px;
    }

    .item:nth-child(3) {
        grid-row: 2;
    }
</style>
