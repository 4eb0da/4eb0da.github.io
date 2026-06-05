<script lang="ts">
    import SampleRadio from '$lib/components/SampleRadio.svelte';
    import SupportWarning from '$lib/components/SupportWarning.svelte';

    let current = 'all';
</script>

<SupportWarning
    name="rule-break"
    value="none"
    message="gap decorations не поддерживаются :("
/>

<SampleRadio
    name="items"
    initial={current}
    options={[{
        text: 'all',
        value: 'all'
    }, {
        text: 'around',
        value: 'around'
    }, {
        text: 'between',
        value: 'between'
    }]}
    onChange={val => current = val}
/>

<div class="box box_{current}">
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
        column-rule: 3px solid var(--accent);
        row-rule: 1px solid currentColor;
    }

    .box_all {
        rule-visibility-items: all;
    }

    .box_around {
        rule-visibility-items: around;
    }

    .box_between {
        rule-visibility-items: between;
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
