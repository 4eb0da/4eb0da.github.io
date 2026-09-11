<script lang="ts">
    import SupportWarning from '$lib/components/SupportWarning.svelte';
</script>

<SupportWarning
    name="text-box"
    value="inherit"
    message="text-box не поддерживается"
/>

<div class="box">
    <div class="text">
        company
    </div>
</div>

<style>
    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px 0;
        background: linear-gradient(45deg, transparent 40%, var(--text-fill-02) 40%, var(--text-fill-02) 60%, transparent 60%)/* ,
            linear-gradient(-45deg, transparent 40%, var(--text-fill-02) 40%, var(--text-fill-02) 60%, transparent 60%) */;
        background-size: 18px 18px;
    }

    .text {
        font-size: 32px;
        text-box: trim-both ex alphabetic;
        background: var(--bg-secondary);
    }
</style>
