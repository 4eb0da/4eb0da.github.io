<script lang="ts">
    import SupportWarning from "$lib/components/SupportWarning.svelte";

    let shape = 'round';
</script>

<SupportWarning
    name="corner-shape"
    value="inherit"
    message="corner-shape не поддерживается"
/>

<select bind:value={shape}>
    <option value="round">round</option>
    <option value="squircle">squircle</option>
    <option value="bevel">bevel</option>
    <option value="scoop">scoop</option>
    <option value="notch">notch</option>
    <option value="square">square</option>
</select>

<div class="box" style:--shape={shape}></div>

<style>
    select {
        display: block;
        margin: 0 auto 10px;
    }

    .box {
        width: 150px;
        height: 100px;
        margin: 0 auto;
        border: 3px solid var(--accent);
        border-right: none;
        border-bottom: none;
        border-top-left-radius: 40px;
        corner-shape: var(--shape);
    }
</style>
