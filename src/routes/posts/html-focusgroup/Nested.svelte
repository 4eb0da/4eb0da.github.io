<script>
    import { browser } from '$app/environment';
    import SupportWarning from '$lib/components/SupportWarning.svelte';
</script>

<SupportWarning
    js={!browser || 'focusGroup' in HTMLElement.prototype}
    message="focusgroup не поддерживается"
/>

<div class="toolbar" focusgroup="toolbar">
    <button type="button">Кнопка 1</button>
    <div focusgroup="toolbar">
        <button type="button">Вложено 1</button>
        <button type="button">Вложено 2</button>
    </div>
    <button type="button">Кнопка 2</button>
</div>

<style>
    .toolbar {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        margin: 24px 0;
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
