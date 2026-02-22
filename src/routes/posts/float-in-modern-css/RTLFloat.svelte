<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
    import url from './img.svg?url'

    let dir = 'ltr';
</script>

<Sample>
    <div class="radio">
        <label class="radio__label">
            LTR
            <input bind:group={dir} type="radio" name="rtl" value="ltr" class="radio__input" />
        </label>
        <label class="radio__label">
            RTL
            <input bind:group={dir} type="radio" name="rtl" value="rtl" class="radio__input" />
        </label>
    </div>

    <div class="parent" style:direction={dir}>
        <img src={url} alt="Демонстрационное изображение">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci ipsum expedita itaque sapiente eveniet voluptate amet nihil! Laudantium voluptatibus, temporibus odio tempora amet sit est animi culpa esse voluptas.
    </div>

    <div class="clearfix"></div>
</Sample>

<style>
    button {
        display: block;
        width: fit-content;
        margin: 0 auto 20px;
        padding: 4px 8px;
        background: var(--accent);
        border-radius: 4px;
        border: none;
        font: inherit;
        font-size: 14px;
        color: #000;
        appearance: none;
        transition: opacity .15s ease-in-out;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }

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

    img {
        width: 75px;
        height: 50px;
        float: inline-start;
        margin: 0 10px;
    }

    .clearfix {
        clear: both;
    }
</style>
