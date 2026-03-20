<div class="box">
    <span class="target">Lorem ipsum do</span>lor sit amet consectetur adipisicing elit.
    <div class="tooltip">
        <span class="bold">B</span>
        <span class="italic">I</span>
        <span class="underline">U</span>
    </div>
</div>

<style>
    .box {
        width: 200px;
        margin: 30px auto 20px;
        padding: 20px;
        border: 2px solid var(--accent);
    }

    .target {
        color: #000;
        background: var(--accent);
        anchor-name: --context;
    }

    .tooltip {
        position: absolute;
        position-anchor: --context;
        left: anchor(left);
        bottom: anchor(top);
        display: flex;
        margin-bottom: 4px;
        justify-self: anchor-center;
        align-self: anchor-center;
        background: var(--accent);
        border-radius: 4px;
        padding: 4px 8px;
        color: #000;
    }

    .tooltip span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        font-size: 18px;
    }

    .bold {
        font-weight: bold;
    }

    .italic {
        font-style: italic;
    }

    .underline {
        text-decoration: underline;
    }
</style>
