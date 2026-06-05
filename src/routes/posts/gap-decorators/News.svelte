<script lang="ts">
    import SupportWarning from '$lib/components/SupportWarning.svelte';
</script>

<SupportWarning
    name="rule-break"
    value="none"
    message="gap decorations не поддерживаются :("
/>

<div class="box">
    <div class="item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    <div class="item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    <div class="item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
</div>

<style>
    .box {
        display: grid;
        width: 300px;
        justify-content: center;
        text-wrap: initial;
        margin: 40px auto;
        text-align: center;
        gap: 20px;
        column-rule: 3px solid var(--accent);
        row-rule: 3px solid currentColor;
        grid-template-columns: repeat(2, 1fr);
    }

    .item:nth-child(3) {
        grid-column: 1 / span 2;
    }
</style>
