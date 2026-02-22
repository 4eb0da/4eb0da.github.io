<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
    import SampleRadio from '$lib/components/SampleRadio.svelte';

    let spacing = $state('16px');
</script>

<Sample>
    <SampleRadio
        initial="16px"
        options={[{
            text: '16px',
            value: '16px'
        }, {
            text: '1em',
            value: '1em'
        }, {
            text: '50%',
            value: '50%'
        }]}
        name="letter-spacing"
        onChange={value => spacing = value}
    />
    
    <div style:letter-spacing={spacing}>
        <p style:font-size="32px">
            32px text
        </p>
        
        <p style:font-size="20px">
            20px text
        </p>
        
        <p style:font-size="12px">
            12px text
        </p>
    </div>
</Sample>

<style>
    p {
        margin: 0;
        word-break: break-all;
    }
</style>
