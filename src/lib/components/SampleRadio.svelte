<script lang="ts">
    const {
        initial,
        name,
        options,
        onChange
    }: {
        initial: string;
        name: string;
        options: {
            text: string;
            value: string;
        }[];
        onChange: (value: string) => void;
    } = $props();

    let value = $state(initial);

    $effect(() => {
        onChange(value);
    });
</script>

<div class="radio">
    {#each options as option}
        <label class="radio__label">
            {option.text}
            <input bind:group={value} type="radio" name={name} value={option.value} class="radio__input" />
        </label>
    {/each}
</div>

<style>
    .radio {
        display: flex;
        width: fit-content;
        margin: 0 auto 20px;
        border-radius: 4px;
        border: 2px solid var(--accent);
    }

    .radio__label {
        position: relative;
        padding: 4px 8px;
        transition: background-color .15s ease-in-out;

        &:first-child {
            border: 4px 0 0 4px;
        }

        &:last-child {
            border: 0 4px 4px 0;
        }

        &:has(.radio__input:checked) {
            background: var(--accent);
            color: #000;
        }

        &:not(:has(.radio__input:checked)):hover {
            background: var(--bg-tertiary);
        }
    }

    .radio__input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        appearance: none;
        cursor: pointer;
    }
</style>
