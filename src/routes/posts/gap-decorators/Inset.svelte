<script lang="ts">
    import SampleRadio from '$lib/components/SampleRadio.svelte';
    import SupportWarning from '$lib/components/SupportWarning.svelte';

    let current = '0';
</script>

<SupportWarning
    name="rule-break"
    value="none"
    message="gap decorations не поддерживаются :("
/>

<SampleRadio
    name="inset"
    initial={current}
    options={[{
        text: '0',
        value: '0'
    }, {
        text: '6px',
        value: 'plus'
    }, {
        text: '-6px',
        value: 'minus'
    }]}
    onChange={val => current = val}
/>

<div class="box box_{current}">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item item_large"></div>
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
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        column-rule: 3px solid var(--accent);
        row-rule: 1px solid currentColor;
        rule-break: intersection;
    }

    .box_plus {
        rule-inset: 6px;
    }

    .box_minus {
        rule-inset: -6px;
    }

    .item {
        box-sizing: border-box;
        display: inline-block;
        height: 40px;
        border: 1px solid currentColor;
        border-radius: 6px;
    }

    .item_large {
        grid-column: 1 / span 2;
    }
</style>
