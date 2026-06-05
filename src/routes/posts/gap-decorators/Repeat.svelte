<script lang="ts">
    import SupportWarning from '$lib/components/SupportWarning.svelte';
</script>

<SupportWarning
    name="rule-break"
    value="none"
    message="gap decorations не поддерживаются :("
/>

<div class="box">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>

<style>
    .box {
        display: grid;
        flex-wrap: wrap;
        width: 300px;
        text-wrap: initial;
        margin: 0 auto;
        text-align: center;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, 40px);
        justify-content: center;
        column-rule:
            3px solid currentColor,
            repeat(auto, 3px solid var(--accent)),
            3px solid currentColor;
    }

    .item {
        box-sizing: border-box;
        display: inline-block;
        width: 40px;
        height: 40px;
        border: 1px solid currentColor;
        border-radius: 6px;
    }
</style>
