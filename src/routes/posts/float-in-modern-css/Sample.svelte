<div class="sample">
    <div class="sample__label">Пример</div>
    
    <slot />
</div>

<style>
    .sample {
        position: relative;
        box-sizing: border-box;
        max-width: 300px;
        margin: 40px auto 20px;
        padding: 10px;
        border: 2px solid var(--accent);
    }

    .sample__label {
        position: absolute;
        bottom: calc(100% + 2px);
        left: -2px;
        padding: 4px 8px;
        background: var(--accent);
        border-radius: 6px 6px 0 0;
        color: #000;
    }
</style>
