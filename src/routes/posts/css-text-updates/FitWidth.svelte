<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';

    let width = $state(100);
</script>

<Sample>
    <div class="center">
        <input
            type="range"
            min="10"
            max="200"
            bind:value={width}
        />
        {width}
    </div>
    
    <p style:width="{width}px" style:font-size="{width / 6}px">
        Привет, мир
    </p>
</Sample>

<style>
    .center {
        margin: 0 0 2em;
    }

    input {
        width: 190px;
        margin-left: 10px;
    }

    p {
        margin: 0;
        border: 1px solid;
    }
</style>
