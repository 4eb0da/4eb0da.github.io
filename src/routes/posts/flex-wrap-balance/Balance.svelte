<script lang="ts">
    import SampleRadio from '$lib/components/SampleRadio.svelte';

    let current = 'wrap';
</script>

<SampleRadio
    name="balance"
    initial={current}
    options={[{
        text: 'wrap',
        value: 'wrap'
    }, {
        text: 'balance',
        value: 'balance'
    }]}
    onChange={val => current = val}
/>

<div class="box" class:box_balanced={current === 'balance'}>
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
        width: 180px;
        text-wrap: initial;
        margin: 0 auto;
        text-align: center;
    }

    .box_balanced {
        text-wrap: balance;
    }

    .item {
        box-sizing: border-box;
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 3px solid var(--accent);
        border-radius: 100%;
    }
</style>
