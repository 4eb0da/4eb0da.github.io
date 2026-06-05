<script lang="ts">
    import SupportWarning from '$lib/components/SupportWarning.svelte';
</script>

<SupportWarning
    name="rule-break"
    value="none"
    message="gap decorations не поддерживаются :("
/>

<div class="box">
    <div class="item">Main </div>
    <div class="item">Articles</div>
    <div class="item">Profile</div>
</div>

<style>
    .box {
        display: flex;
        width: 300px;
        justify-content: center;
        text-wrap: initial;
        margin: 0 auto;
        text-align: center;
        gap: 20px;
        column-rule: 3px solid var(--accent);
    }

    .item {
        flex: 0 0 auto;
    }
</style>
