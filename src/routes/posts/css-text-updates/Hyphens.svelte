<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
    import SampleRadio from '$lib/components/SampleRadio.svelte';

    let limitChars = $state('auto');
</script>

<Sample>
    <SampleRadio
        initial="auto"
        options={[{
            text: 'auto',
            value: 'auto'
        }, {
            text: '5 5 5',
            value: '5 5 5'
        }]}
        name="hyphenate-limit-chars"
        onChange={value => limitChars = value}
    />
    
    <p style:hyphenate-limit-chars={limitChars}>
        Длинный текст с очень длинными программисткими длиннющими словами.
    </p>
</Sample>

<style>
    p {
        max-width: 100px;
        margin: 0 auto;
        hyphens: auto;
        border: 1px solid;
    }
</style>
