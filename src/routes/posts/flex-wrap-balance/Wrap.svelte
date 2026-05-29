<script lang="ts">
    import SampleRadio from '$lib/components/SampleRadio.svelte';

    let current = 'nowrap';
</script>

<SampleRadio
    name="wrap"
    initial={current}
    options={[{
        text: 'Без переносв',
        value: 'nowrap'
    }, {
        text: 'flex-wrap',
        value: 'wrap'
    }, {
        text: '+ flex-grow',
        value: 'grow'
    }]}
    onChange={val => current = val}
/>

<div
    class="box"
    class:box_wrap={current === 'wrap' || current === 'grow'}
    class:box_grow={current === 'grow'}
>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>

<style>
    .box {
        display: flex;
        gap: 5px;
        width: 180px;
        border: 3px solid red;
        margin: 0 auto;
    }

    .box_wrap {
        flex-wrap: wrap;
    }

    .item {
        box-sizing: border-box;
        flex: 0 0 auto;
        width: 70px;
        height: 20px;
        background: var(--accent);
    }

    .box_grow .item {
        flex-grow: 1;
    }
</style>
