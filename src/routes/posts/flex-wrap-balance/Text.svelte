<script lang="ts">
    import SampleRadio from '$lib/components/SampleRadio.svelte';

    let current = 'text';
</script>

<SampleRadio
    name="text"
    initial={current}
    options={[{
        text: 'Текст',
        value: 'text'
    }, {
        text: 'Блоки',
        value: 'block'
    }]}
    onChange={val => current = val}
/>

<div class="box" class:box_block={current === 'block'}>
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
        /* text-wrap: initial; */
        text-wrap: balance;
        margin: 0 auto;
        text-align: center;
    }

    .item {
        box-sizing: border-box;
        display: inline-block;
        border: 3px solid transparent;
        transition: .3s ease-in-out;
    }

    .item::before {
        content: 'hello';
        transition: .3s ease-in-out;
    }

    .box_block .item {
        border-color: var(--accent);
    }

    .box_block .item::before {
        color: transparent;
    }
</style>
