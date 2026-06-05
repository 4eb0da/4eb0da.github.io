<script lang="ts">
    import SupportWarning from '$lib/components/SupportWarning.svelte';
</script>

<SupportWarning
    name="rule-break"
    value="none"
    message="gap decorations не поддерживаются :("
/>

<div class="box">
    <div class="item">Header </div>
    <div class="item">Header</div>
    <div class="item">Header</div>
    <div class="item">Data</div>
    <div class="item">Data</div>
    <div class="item">Data</div>
    <div class="item">Data</div>
    <div class="item">Data</div>
    <div class="item">Data</div>
</div>

<style>
    .box {
        display: grid;
        width: 300px;
        text-wrap: initial;
        margin: 0 auto;
        text-align: center;
        gap: 20px;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        column-rule: 3px solid var(--accent);
        row-rule: 3px solid currentColor, repeat(auto, none);
    }

    .item {
        flex: 1 0 auto;
        box-sizing: border-box;
        display: inline-block;
        border: 1px solid currentColor;
    }
</style>
