<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
    import SampleRadio from '$lib/components/SampleRadio.svelte';

    let variant = $state('emoji');
</script>

<Sample>
    <SampleRadio
        initial="emoji"
        options={[{
            text: 'emoji',
            value: 'emoji'
        }, {
            text: 'text',
            value: 'text'
        }]}
        name="variant-emoji"
        onChange={value => variant = value}
    />
    
    <p style:font-variant-emoji={variant}>
        ☎
    </p>
</Sample>

<style>
    p {
        margin: 0;
        font-size: 32px;
        text-align: center;
    }
</style>
