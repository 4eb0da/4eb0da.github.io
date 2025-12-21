<div class="label">
    Синтетическое начертание
</div>
<div class="synthesis">
    Съешь еще этих французских булок да выпей чаю
</div>

<br>

<div class="label">
    font-synthesis: none
</div>
<div class="disabled">
    Съешь еще этих французских булок да выпей чаю
</div>

<style>
    @font-face {
        font-family: "Roboto 400";
        src: url(./Roboto-VariableFont_wdth\,wght.ttf) format('truetype');
        font-display: swap;
        font-style: normal;
        font-weight: 400;
    }

    .label {
        font-style: italic;
        color: var(--text-info);
    }

    .synthesis {
        font-family: "Roboto 400";
        font-weight: bold;
    }

    .disabled {
        font-family: "Roboto 400";
        font-weight: bold;
        font-synthesis: none;
    }
</style>
