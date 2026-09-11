<script lang="ts">
    import SupportWarning from '$lib/components/SupportWarning.svelte';
</script>

<SupportWarning
    name="text-box"
    value="inherit"
    message="text-box не поддерживается"
/>

<div class="box">
    <div class="icon">
        5
    </div>
</div>

<style>
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border-radius: 100%;
        border: 3px solid var(--accent);
        font-size: 48px;
        text-box: trim-both cap alphabetic;
    }
</style>
