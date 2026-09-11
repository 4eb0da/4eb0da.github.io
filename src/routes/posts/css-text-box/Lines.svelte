<script lang="ts">
    import SupportWarning from '$lib/components/SupportWarning.svelte';
</script>

<SupportWarning
    name="text-box"
    value="inherit"
    message="text-box не поддерживается"
/>

<div class="box">
    <div class="inner">
        <div class="line"></div>
        <div class="text">
            Abcde
        </div>
        <div class="line"></div>
    </div>
</div>

<style>
    .line {
        height: 10px;
        background: linear-gradient(45deg, transparent 40%, var(--accent) 40%, var(--accent) 60%, transparent 60%);
        background-size: 10px;
    }

    .text {
        font-size: 64px;
        text-box: trim-both cap alphabetic;
    }
</style>
