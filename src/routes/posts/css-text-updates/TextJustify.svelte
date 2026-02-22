<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
    import SampleRadio from '$lib/components/SampleRadio.svelte';

    let justify = $state('inter-word');
</script>

<Sample>
    <SampleRadio
        initial="inter-word"
        options={[{
            text: 'inter-word',
            value: 'inter-word'
        }, {
            text: 'inter-character',
            value: 'inter-character'
        }]}
        name="text-justify"
        onChange={value => justify = value}
    />
    
    <p style:text-justify={justify}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil amet repellendus ducimus ipsum soluta beatae debitis itaque ratione at quasi consectetur alias, consequuntur officia minus porro vitae eius illo nemo.
    </p>
</Sample>

<style>
    p {
        margin: 0;
        text-align: justify;
    }
</style>
