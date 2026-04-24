<script lang="ts">
    import SupportWarning from "$lib/components/SupportWarning.svelte";

    let x = 1;
</script>

<SupportWarning
    name="corner-shape"
    value="superellipse(1)"
    message="corner-shape не поддерживается"
/>

<div>
    superellipse({x.toFixed(1)})
    <br>
    <input type="range" bind:value={x} min="-5" max="5" step="0.1">
</div>

<div class="box" style:--x={x}></div>

<style>
    div {
        display: block;
        width: fit-content;
        margin: 0 auto 10px;
        text-align: center;
    }

    .box {
        width: 150px;
        height: 100px;
        margin: 0 auto;
        border: 3px solid var(--accent);
        border-right: none;
        border-bottom: none;
        border-top-left-radius: 40px;
        corner-shape: superellipse(var(--x));
    }
</style>
