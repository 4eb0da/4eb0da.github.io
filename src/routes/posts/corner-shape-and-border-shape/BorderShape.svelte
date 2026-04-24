<script lang="ts">
    import SampleRadio from '$lib/components/SampleRadio.svelte';
    import SupportWarning from '$lib/components/SupportWarning.svelte';
    import { fade } from 'svelte/transition';

    let current = 'show';
</script>

<SupportWarning
    name="border-shape"
    value="inherit"
    message="border-shape не поддерживается"
/>

<SampleRadio
    name="show box"
    initial={current}
    options={[{
        text: 'show border geometry',
        value: 'show'
    }, {
        text: 'hide',
        value: 'hide'
    }]}
    onChange={val => current = val}
/>

<div class="box">
    {#if current === 'show'}
        <div class="highlight" transition:fade></div>
    {/if}
</div>

<style>
    .box {
        position: relative;
        box-sizing: border-box;
        width: 150px;
        height: 100px;
        margin: 30px auto;
        border: 10px solid var(--accent);
        border-shape: shape(from 0 0, arc to 100% 0 of 500px 500px cw, curve to 100% 100% with calc(100% + 20px) 80%, smooth to 0 100%, close)
            shape(from 0 0, curve to 100% 0 with 20% 20%, curve to 100% 100% with 100% 50%, arc to 0 100% of 500px 500px cw, close);
    }

    .highlight {
        position: absolute;
        top: -10px;
        left: -10px;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        box-sizing: border-box;
        border: 10px solid red;
        opacity: .4;
    }
</style>
