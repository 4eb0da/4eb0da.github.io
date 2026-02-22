<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
    import SampleRadio from '$lib/components/SampleRadio.svelte';

    let indent = $state('3em');
</script>

<Sample>
    <SampleRadio
        initial="3em"
        options={[{
            text: '3em',
            value: '3em'
        }, {
            text: 'each-line',
            value: '3em each-line'
        }, {
            text: 'hanging',
            value: '3em hanging'
        }]}
        name="text-indent"
        onChange={value => indent = value}
    />
    
    <p style:text-indent={indent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br>
        Nihil amet repellendus ducimus ipsum soluta beatae debitis itaque ratione at quasi consectetur alias, consequuntur officia minus porro vitae eius illo nemo.
    </p>
</Sample>

<style>
    p {
        margin: 0;
    }
</style>
