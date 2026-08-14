<script lang="ts">
    import { browser } from '$app/environment';
    import SupportWarning from '$lib/components/SupportWarning.svelte';

    let input: HTMLInputElement;

    let prevRanges: OpaqueRange[] = [];
    function update(): void {
        if (!HTMLInputElement.prototype.createValueRange) {
            return;
        }

        prevRanges.forEach((range) => {
            range.disconnect();
        });

        const ranges = [];

        const re = /@[a-zа-яё]+/ig;
        let match;
        while ((match = re.exec(input.value))) {
            ranges.push(input.createValueRange(match.index, match.index + match[0].length));
        }
        if (ranges.length > 0) {
            const highlight = new Highlight(...ranges);
            CSS.highlights.set('login', highlight);
        } else {
            CSS.highlights.delete('login');
        }
        prevRanges = ranges;
    }
</script>

<SupportWarning
    js={!browser || HTMLInputElement.prototype.createValueRange}
    message="createValueRange() не поддерживается"
/>

<input placeholder="Введите @логин..." bind:this={input} oninput={update} />

<style>
    input {
        display: block;
        margin: 0 auto;
        padding: 10px 20px;
        border: 2px solid var(--text-fill-02);
        border-radius: 10px;
        background: var(--bg-secondary);
        color: inherit;
        font: inherit;
        font-size: 20px;
    }

    ::highlight(login) {
        color: var(--accent);
    }
</style>
