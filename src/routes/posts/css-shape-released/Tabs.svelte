<div class="tabs">
    <div class="tab">Tab 0</div>
    <div class="tab">Tab 1</div>
    <div class="tab">Tab 2</div>
    <div class="tab">Tab 3</div>
</div>

<style>
    .tabs {
        display: flex;
        align-items: center;
        gap: 4px;
        width: fit-content;
        margin: 0 auto;
    }

    .tab {
        padding: 2px 12px;
        background: var(--accent);
        color: #000;
        clip-path: shape(
            from 0 100%,
            curve to 12px 0 with 6px 100% / 6px 0,
            line to calc(100% - 12px) 0,
            curve to 100% 100% with calc(100% - 6px) 0 / calc(100% - 6px) 100%
        );
    }
</style>
