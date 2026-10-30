<script>
    import { browser } from '$app/environment';
    import SupportWarning from '$lib/components/SupportWarning.svelte';
</script>

<SupportWarning
    js={!browser || 'focusGroup' in HTMLElement.prototype}
    message="focusgroup не поддерживается"
/>

<h4>Горизонтальный тулбар (inline)</h4>
<div class="toolbar" focusgroup="toolbar">
    <button type="button">Один</button>
    <button type="button">Два</button>
    <button type="button">Три</button>
</div>

<h4>Вертикальный тулбар (block)</h4>
<div class="toolbar vertical" focusgroup="toolbar block">
    <button type="button">Один</button>
    <button type="button">Два</button>
    <button type="button">Три</button>
</div>

<style>
    .toolbar {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        margin: 24px 0;
    }

    .vertical {
        flex-direction: column;
    }

    button {
        margin: 0;
        padding: 6px 12px;
        font: inherit;
        font-size: 16px;
        color: inherit;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        background: var(--bg-quaternary);
        transition: background-color .3s ease-in-out;
    }

    button:hover {
        background: var(--bg-quinary);
    }
</style>
