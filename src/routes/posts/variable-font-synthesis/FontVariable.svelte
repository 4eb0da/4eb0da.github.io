<script lang="ts">
    let weight = $state(400);
</script>

<input type="range" bind:value={weight} min="100" max="900">
{weight}
<div class="roboto" style:font-weight={weight}>
    Съешь еще этих французских булок да выпей чаю
</div>

<style>
    @font-face {
        font-family: "Roboto";
        src: url(./Roboto-VariableFont_wdth\,wght.ttf) format('truetype');
        font-display: swap;
        font-style: normal;
        /* font-weight: 100 900; */
    }

    .roboto {
        font-family: "Roboto";
    }

    input {
        accent-color: var(--accent);
    }
</style>
