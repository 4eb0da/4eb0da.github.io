<div class="tree-item" style:--level={1}>
    <div class="tree-item__name">--level: 1</div>
    <div class="tree-item" style:--level={2}>
        <div class="tree-item__name">--level: 2</div>
        <div class="tree-item" style:--level={3}>
            <div class="tree-item__name">--level: 3</div>
        </div>
    </div>
</div>

<style>
    .tree-item__name {
        display: flex;
        align-items: center;
        height: 32px;
        padding-left: calc(var(--level) * 20px);
    
        &:hover {
            background-color: rgb(45, 157, 194);
        }
    }
</style>
