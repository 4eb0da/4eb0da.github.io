<script lang="ts">
    import SupportWarning from '$lib/components/SupportWarning.svelte';
    import SampleRadio from '$lib/components/SampleRadio.svelte';

    let top = 'text';
    let bottom = 'text';
</script>

<SupportWarning
    name="text-box"
    value="inherit"
    message="text-box не поддерживается"
/>

<SampleRadio
    name="top"
    initial={top}
    options={[{
        text: 'text',
        value: 'text'
    }, {
        text: 'cap',
        value: 'cap'
    }, {
        text: 'ex',
        value: 'ex'
    }]}
    onChange={val => top = val}
/>

<div class="box">
    <div class="inner">
        <div class="line"></div>
        <div
            class="text"
            style:--top={top}
            style:--bottom={bottom}
        >
            Abcde
        </div>
        <div class="line"></div>
    </div>
</div>

<SampleRadio
    name="bottom"
    initial={bottom}
    options={[{
        text: 'text',
        value: 'text'
    }, {
        text: 'alphabetic',
        value: 'alphabetic'
    }]}
    onChange={val => bottom = val}
/>

<style>
    .line {
        height: 3px;
        background: var(--accent);
    }

    .text {
        font-size: 64px;
        text-box: trim-both var(--top) var(--bottom);
    }

    .box {
        margin: 20px 0;
    }
</style>
