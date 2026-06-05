<script lang="ts">
    import SampleRadio from '$lib/components/SampleRadio.svelte';
    import SupportWarning from '$lib/components/SupportWarning.svelte';

    let current = 'normal';
</script>

<SupportWarning
    name="rule-break"
    value="none"
    message="gap decorations не поддерживаются :("
/>

<SampleRadio
    name="break"
    initial={current}
    options={[{
        text: 'normal',
        value: 'normal'
    }, {
        text: 'none',
        value: 'none'
    }, {
        text: 'intersection',
        value: 'intersection'
    }]}
    onChange={val => current = val}
/>

<div class="box box_{current}">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item item_large"></div>
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
        column-rule: 3px solid var(--accent);
        row-rule: 1px solid currentColor;
    }

    .box_normal {
        rule-break: normal;
    }

    .box_none {
        rule-break: none;
    }

    .box_intersection {
        rule-break: intersection;
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
