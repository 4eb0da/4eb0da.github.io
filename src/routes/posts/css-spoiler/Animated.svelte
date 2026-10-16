<details>
    <summary>Заголовок</summary>
    <div class="content">
        <p>Содержимое</p>
        <p>Содержимое</p>
        <p>Содержимое</p>
    </div>
</details>

<style>
    ::details-content {
        transition: .3s ease;
        transition-property: height, opacity, content-visibility;
        transition-behavior: allow-discrete;
        interpolate-size: allow-keywords;
        height: 0;
        overflow: hidden;
    }

    details[open]::details-content {
        height: auto;
    }
</style>
