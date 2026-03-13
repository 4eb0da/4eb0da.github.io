<script lang="ts">
    import Sample from "$lib/components/Sample.svelte";
    import SampleRadio from "$lib/components/SampleRadio.svelte";

    let mode = 'nonzero';
</script>

<Sample>
    <SampleRadio
        initial={mode}
        name="mode"
        options={[{
            text: 'nonzero',
            value: 'nonzero'
        }, {
            text: 'evenodd',
            value: 'evenodd'
        }]}
        onChange={val => mode = val}
    />

    <div class="clip-path" style:--mode={mode}></div>
</Sample>

<style>
    .clip-path {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        background: var(--accent);
        clip-path: shape(
            var(--mode) from 0 50%,
            line to 100% 0, line to 100% 100%, line to 0 50%,
            move to 25% 50%,
            line to 85% 20%, line to 85% 80%, line to 25% 50%
        );
    }
</style>
