<script lang="ts">
    import SupportWarning from '$lib/components/SupportWarning.svelte';
</script>

<SupportWarning
    name="text-box"
    value="inherit"
    message="text-box не поддерживается"
/>

<div class="box">
    <div class="icon"></div>
    <div class="text">
        something
    </div>
</div>

<style>
    .box {
        display: flex;
        align-items: center;
    }

    .icon {
        width: 36px;
        height: 36px;
        border-radius: 100%;
        margin-right: 12px;
        background: var(--accent);
    }

    .text {
        font-size: 64px;
        text-box: trim-both ex alphabetic;
    }
</style>
