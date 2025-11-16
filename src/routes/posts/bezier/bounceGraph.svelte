<svg xmlns="http://www.w3.org/2000/svg" height="200" viewBox="0 0 300 200">
    <path d="M 50 200 L 250 200" fill="none" stroke="currentColor" />
    <path d="M 50 200 L 50 0" fill="none" stroke="currentColor" />
    <path d="M 50 200 L 96 172" fill="none" stroke="var(--accent)" />
    <path d="M 150 100 L 50 38" fill="none" stroke="var(--accent)" />
    <path d="M 50 100 L 150 100" fill="none" stroke="currentColor" stroke-dasharray="2 0 2" />
    <path d="M 150 200 L 150 100" fill="none" stroke="currentColor" stroke-dasharray="2 0 2" />

    <circle cx="50" cy="200" r="5" fill="none" stroke="currentColor" stroke-width="2" />
    <circle cx="150" cy="100" r="5" fill="none" stroke="currentColor" stroke-width="2" />
    <circle cx="96" cy="172" r="5" fill="none" stroke="var(--accent)" stroke-width="2" />
    <circle cx="50" cy="38" r="5" fill="none" stroke="var(--accent)" stroke-width="2" />

    <path d="M 50 200 C 96 172 50 38 150 100" fill="none" stroke="currentColor" />

    <text x="50" y="222" text-anchor="middle" fill="currentColor">0</text>
    <text x="150" y="222" text-anchor="middle" fill="currentColor">1</text>
    <text x="220" y="222" text-anchor="middle" fill="currentColor" font-style="italic">время</text>
    <text x="30" y="200" dominant-baseline="middle" fill="currentColor">0</text>
    <text x="30" y="100" dominant-baseline="middle" fill="currentColor">1</text>
    <text x="-75" y="30" dominant-baseline="middle" fill="currentColor" transform="rotate(-90)" font-style="italic">значение</text>
</svg>

<style>
    svg {
        display: block;
        margin: 0 auto 20px;
        overflow: visible;
    }
</style>
