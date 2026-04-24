<script lang="ts">
    import { browser } from '$app/environment';

    const {
        name,
        value,
        message
    }: {
        name: string;
        value: string;
        message: string;
    } = $props();

    const supported = !browser || CSS.supports(name, value);
</script>

{#if !supported}
    <div class="support-warning">
        {message}
    </div>
{/if}

<style>
    .support-warning {
        width: fit-content;
        margin: 0 auto 12px;
        padding: 4px 8px;
        border-radius: 8px;
        background: rgba(240, 90, 56, 0.666);
    }
</style>
