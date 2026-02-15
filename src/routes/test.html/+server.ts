export const prerender = true;

const content = `<!doctype html>
<html lang="ru" class="app">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            html {
    height: 100%;
    font-family: sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scroll-padding-top: 60px
}

body {
    height: 100%;
    margin: 0
}

.app {
    color-scheme: light only
}

.app_dark {
    color-scheme: dark only
}

.app {
    --bg-primary: #fff;
    --bg-secondary: #fbfbfb;
    --bg-tertiary: #f0f0f0;
    --bg-quaternary: #e0e0e0;
    --bg-quinary: #d0d0d0;
    --text-primary: #111111;
    --text-info: #888;
    --text-fill-02: rgba(17, 17, 17, .2);
    --text-fill-03: rgba(17, 17, 17, .3);
    --accent: #4eb0da;
    --accent-fill-02: #4eb0da3a
}

.app_dark {
    --bg-primary: #222;
    --bg-secondary: #262626;
    --bg-tertiary: #303030;
    --bg-quaternary: #404040;
    --bg-quinary: #505050;
    --text-primary: #f8f8f8;
    --text-info: #999;
    --text-fill-02: rgba(248, 248, 248, .2);
    --text-fill-03: rgba(248, 248, 248, .3);
    --accent: #4eb0da;
    --accent-fill-02: #4eb0da3a
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden
}

:target {
    animation: target 1s ease-in-out
}

@keyframes target {
    0% {
        background-color: transparent
    }

    25% {
        background-color: var(--accent)
    }

    50% {
        background-color: transparent
    }

    75% {
        background-color: var(--accent)
    }

    to {
        background-color: transparent
    }
}

main.svelte-12qhfyh {
    display: flex;
    flex-direction: column;
    min-height: 100%
}

header.svelte-12qhfyh {
    position: sticky;
    z-index: 1;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 auto;
    height: 50px;
    padding: 0 20px;
    background: var(--bg-secondary)
}

@media(min-width: 40em) {
    header.svelte-12qhfyh {
        height:40px
    }
}

.header__left.svelte-12qhfyh {
    display: flex;
    align-items: baseline;
    gap: 12px
}

.link.svelte-12qhfyh {
    color: inherit;
    text-decoration: none
}

.link.svelte-12qhfyh:hover {
    text-decoration: underline
}

.header__menu.svelte-12qhfyh {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 0;
    background: none;
    appearance: none;
    cursor: pointer
}

article.svelte-12qhfyh {
    flex: 1 1 auto
}

footer.svelte-12qhfyh {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 0 0 auto;
    height: 50px;
    margin: 40px 0 0;
    padding: 0 20px;
    background: var(--bg-secondary)
}

@media(min-width: 40em) {
    footer.svelte-12qhfyh {
        height:40px
    }
}

@media(min-width: 40em) {
    .header__menu.svelte-12qhfyh {
        display:none
    }
}

.body_menu {
    overflow: hidden
}

.toc {
    position: fixed;
    z-index: 1;
    top: 50px;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: var(--toc-width);
    background: var(--bg-primary)
}

@media(min-width: 40em) {
    .toc {
        top:40px;
        bottom: 40px;
        justify-content: center
    }
}

.toc-level {
    margin: 0;
    padding: 0 20px;
    list-style: none
}

.toc>.toc-level {
    padding-top: 20px;
    padding-bottom: 20px
}

@media(min-width: 40em) {
    .toc>.toc-level {
        border-left:1px solid var(--text-fill-02)
    }
}

[class].toc-link {
    display: block;
    padding: 10px 0;
    color: inherit;
    text-decoration: none;
    text-wrap: balance;
    line-height: 1
}

[class].toc-link:hover {
    text-decoration: underline
}

@media(min-width: 40em) {
    [class].toc-link {
        padding:.2em 0
    }

    .toc-level-1 {
        position: relative
    }

    .toc-level-1:before {
        position: absolute;
        content: "";
        top: var(--top);
        left: -2px;
        bottom: var(--bottom);
        width: 3px;
        background-color: var(--accent);
        transition: .1s ease-out;
        transition-property: top,bottom
    }
}

.article__layout :not(pre)>code {
    padding: .2em .4em;
    border-radius: .4em;
    background: var(--bg-tertiary);
    border: 1px solid var(--text-fill-03)
}

.article__layout figcaption[data-rehype-pretty-code-title] {
    padding: .6em 2em;
    border-radius: .8em .8em 0 0;
    background: var(--bg-tertiary);
    border: 1px solid var(--text-fill-02);
    border-bottom: none
}

.article__layout pre {
    position: relative;
    padding: 1em 1em 1em 2em;
    border-radius: .8em;
    background: var(--bg-tertiary);
    border: 1px solid var(--text-fill-02);
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: thin
}

.article__layout pre>code {
    position: relative
}

.article__layout figcaption[data-rehype-pretty-code-title]+pre {
    margin-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.article__layout figure {
    margin-inline-start:0;margin-inline-end:0}

.article__layout code[data-line-numbers] {
    counter-reset: line
}

.article__layout code[data-line-numbers]>[data-line]:before {
    counter-increment: line;
    content: counter(line);
    display: inline-block;
    width: .75em;
    margin-right: 2em;
    text-align: right;
    color: gray
}

.article__layout code[data-line-numbers-max-digits="2"]>[data-line]:before {
    width: 1.25em
}

.article__layout code[data-line-numbers-max-digits="3"]>[data-line]:before {
    width: 1.75em
}

.article__layout code[data-line-numbers-max-digits="4"]>[data-line]:before {
    width: 2.25em
}

.article__layout pre code [data-line] span {
    color: var(--shiki-light)
}

.app_dark :is(.article__layout pre code [data-line] span) {
    color: var(--shiki-dark)
}

.article__layout [data-highlighted-line] {
    background: var(--bg-quinary)
}

.article__layout figure[data-rehype-pretty-code-figure] {
    position: relative
}

.article__layout .code-copy-button {
    position: absolute;
    top: .6em;
    right: .6em;
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 4px;
    background: no-repeat 50% 50% url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M3.734%206.515c-.61.488-1%201.239-1%202.085v10A2.66%202.66%200%200%200%205.4%2021.266h10c.846%200%201.597-.39%202.085-1'%20style='fill:none;stroke:%23fff;stroke-width:2.00001;stroke-dasharray:none;stroke-opacity:1'/%3e%3crect%20width='15.333'%20height='15.333'%20x='6.333'%20y='2.333'%20rx='2.667'%20ry='2.667'%20style='fill:none;stroke:%23fff;stroke-width:2.00001;stroke-dasharray:none;stroke-opacity:1'/%3e%3c/svg%3e");
    appearance: none;
    cursor: pointer;
    opacity: 0;
    transition: opacity .3s ease-in-out
}

.article__layout .code-copy-button_copied {
    background-image: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m4%2011%205%209L20%206'/%3e%3c/svg%3e")
}

.article__layout [data-rehype-pretty-code-figure]:hover .code-copy-button {
    opacity: .4
}

.article__layout [data-rehype-pretty-code-figure]:hover .code-copy-button:hover {
    opacity: .8
}

.article__layout h1,.article__layout h2,.article__layout h3,.article__layout h4,.article__layout h5,.article__layout h6 {
    max-width: 30rem;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    text-wrap: balance;
    text-wrap: pretty
}

.article__layout h1>a {
    display: none
}

:is(.article__layout h2,.article__layout h3,.article__layout h4,.article__layout h5,.article__layout h6)>a {
    display: inline-block;
    width: 0;
    text-decoration: none;
    color: inherit;
    opacity: 0;
    transition: opacity .15s ease-in-out
}

:is(.article__layout h2,.article__layout h3,.article__layout h4,.article__layout h5,.article__layout h6):hover>a {
    opacity: .4;
    text-decoration: underline
}

:is(.article__layout h2,.article__layout h3,.article__layout h4,.article__layout h5,.article__layout h6):hover>a:hover {
    opacity: 1
}

.article__layout h1 {
    margin-top: 1em;
    margin-bottom: 0
}

.article__layout h2 {
    margin-top: 2em;
    margin-bottom: 1em
}

.article__layout .info {
    margin: .6em 0 3em;
    text-align: center;
    color: var(--text-info)
}

.article__layout .icon-link:after {
    content: "#";
    padding-left: .4em
}

.article__layout img {
    display: block;
    max-width: 80%;
    margin: 30px auto;
    border: none
}

.article__layout video {
    display: block;
    max-width: 80%;
    margin: 30px auto;
    border: none
}

.article__layout a:not([class]) {
    text-decoration: none;
    color: var(--accent);
    border-bottom: 1px solid transparent;
    transition: .15s ease-in-out;
    transition-property: background-color,border-bottom-color
}

.article__layout a:not([class]):hover {
    border-bottom-color: var(--accent);
    background-color: var(--accent-fill-02)
}

.article__layout blockquote {
    margin: .2em 0;
    padding: 0 1em;
    border-left: 3px solid var(--accent);
    font-style: italic
}

.article__layout details {
    padding: .2em .4em;
    border-radius: .4em;
    background: var(--bg-tertiary);
    border: 1px solid var(--text-fill-03)
}

.article__layout.svelte-1w55t0d {
    --toc-width: 100%;
    position: relative;
    padding-right: 20px;
    padding-left: 20px;
    text-wrap: balance;
    text-wrap: pretty;
    transition: padding-right .3s ease-in-out
}

.toc {
    visibility: hidden;
    opacity: 0;
    transform: translate(100vw);
    transition: .3s ease-in-out;
    transition-property: visibility,opacity,transform
}

.body_menu .toc {
    visibility: visible;
    opacity: 1;
    transform: translate(0)
}

@media(min-width: 40em) {
    .article__layout.svelte-1w55t0d {
        --toc-width: 16rem;
        max-width: 40rem;
        margin: 0 auto;
        padding-right: calc(var(--toc-width) + 20px)
    }

    .toc {
        visibility: visible;
        opacity: 1;
        transform: none
    }
}

@media(min-width: 80em) {
    .article__layout.svelte-1w55t0d {
        padding-left:calc(var(--toc-width) + 20px)
    }
}

.discuss.svelte-1w55t0d {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-top: 40px;
    color: var(--accent);
    text-decoration: none
}

.discuss.svelte-1w55t0d:hover {
    text-decoration: underline
}

.icon.svelte-1w55t0d {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: currentColor;
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat
}

.icon_telegram.svelte-1w55t0d {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%3e%3cg%20fill='none'%20stroke='%23000'%3e%3cpath%20d='m4.497%208.927%201.47%204.095s.19.395.394.395'/%3e%3cpath%20d='m6.464%209.882-.293%203.112s-.123.954.83%200%201.665-1.524%201.665-1.524'/%3e%3cpath%20d='M4.469%208.95%201.33%207.928s-.375-.152-.254-.497c.024-.071.075-.132.225-.236.695-.485%2012.868-4.86%2012.868-4.86s.343-.116.546-.039a.3.3%200%200%201%20.202.22%201%201%200%200%201%20.027.277c0%20.081-.01.156-.018.273-.074%201.196-2.293%2010.124-2.293%2010.124s-.133.522-.608.54a.87.87%200%200%201-.635-.246c-.933-.802-4.159-2.97-4.872-3.447a.14.14%200%200%201-.058-.096c-.01-.05.044-.113.044-.113s5.617-4.993%205.767-5.517c.011-.04-.032-.06-.091-.043-.373.137-6.84%204.222-7.554%204.672a.34.34%200%200%201-.159.01z'/%3e%3c/g%3e%3c/svg%3e");
    mask-image: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%3e%3cg%20fill='none'%20stroke='%23000'%3e%3cpath%20d='m4.497%208.927%201.47%204.095s.19.395.394.395'/%3e%3cpath%20d='m6.464%209.882-.293%203.112s-.123.954.83%200%201.665-1.524%201.665-1.524'/%3e%3cpath%20d='M4.469%208.95%201.33%207.928s-.375-.152-.254-.497c.024-.071.075-.132.225-.236.695-.485%2012.868-4.86%2012.868-4.86s.343-.116.546-.039a.3.3%200%200%201%20.202.22%201%201%200%200%201%20.027.277c0%20.081-.01.156-.018.273-.074%201.196-2.293%2010.124-2.293%2010.124s-.133.522-.608.54a.87.87%200%200%201-.635-.246c-.933-.802-4.159-2.97-4.872-3.447a.14.14%200%200%201-.058-.096c-.01-.05.044-.113.044-.113s5.617-4.993%205.767-5.517c.011-.04-.032-.06-.091-.043-.373.137-6.84%204.222-7.554%204.672a.34.34%200%200%201-.159.01z'/%3e%3c/g%3e%3c/svg%3e")
}

.article__related-title.svelte-1w55t0d {
    margin-top: 100px
}

.article__related.svelte-1w55t0d {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin: 0 -20px;
    padding: 0 20px 20px;
    overflow-x: auto;
    list-style: none
}

@media(min-width: 80em) {
    .article__related.svelte-1w55t0d {
        margin-right:0;
        margin-left: 0;
        padding-right: 0;
        padding-left: 0
    }
}

.article__related-link.svelte-1w55t0d {
    display: block;
    padding: 12px;
    border-radius: 12px;
    color: inherit;
    text-decoration: none;
    background-color: var(--bg-quaternary);
    transition: background-color .15s ease-in-out
}

.article__related-link.svelte-1w55t0d:hover {
    background-color: var(--bg-tertiary)
}

.article__related-image.svelte-1w55t0d {
    display: block;
    width: 200px;
    max-width: none;
    margin: 0;
    aspect-ratio: 1200 / 630;
    pointer-events: none
}

video.svelte-21lmpi {
    width: 100%;
    aspect-ratio: 1.7766497461928934
}

.container.svelte-1l6vlq4 {
    position: relative;
    height: 0;
    padding-bottom: 50%
}

.container__inner.svelte-1l6vlq4 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex
}

.preview.svelte-1l6vlq4 {
    display: inline-block;
    margin-top: 12px;
    padding: .2em .4em;
    border-radius: .4em;
    background: var(--bg-tertiary);
    border: 1px solid var(--text-fill-03)
}

img.svelte-1l6vlq4 {
    margin: 0
}

input.svelte-1l6vlq4 {
    accent-color: #4eb0da
}

.container__block.svelte-1l6vlq4 {
    position: relative;
    width: 50%;
    margin: 0;
    border: 1px solid currentColor
}

.container__test-image.svelte-1l6vlq4 {
    background: no-repeat 50% 50% url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDx0ZXh0IHg9IjY0Ljk1MjMxNiIgeT0iMzA0LjQ2OTk0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNDRweCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHN0eWxlPSJmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LWVhc3QtYXNpYW46bm9ybWFsO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHRzcGFuIHg9IjY0Ljk1MjMxNiIgeT0iMzA0LjQ2OTk0IiBmaWxsPSIjNGViMGRhIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMzMuMzNweCIgc3R5bGU9ImZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtZWFzdC1hc2lhbjpub3JtYWw7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsIj5IVE1MPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=);
    background-position: calc(100% * (var(--x) / (512 - var(--size)))) calc(100% * (var(--y) / (512 - var(--size))));
    background-size: calc(100% / (var(--size) / 512))
}

.container__full-image.svelte-1l6vlq4 {
    display: block;
    width: 100%;
    height: 100%;
    max-width: none
}

.container__highlight.svelte-1l6vlq4 {
    position: absolute;
    left: calc(100% * var(--x) / 512);
    top: calc(100% * var(--y) / 512);
    width: calc(100% * var(--size) / 512);
    height: calc(100% * var(--size) / 512);
    border: 2px solid var(--accent);
    cursor: crosshair;
    touch-action: none
}

        </style>
        <!--12qhfyh-->
        <link rel="icon" href="../favicon.ico" sizes="32x32"/>
        <link rel="icon" href="../favicon.svg" type="image/svg+xml"/>
        <link rel="apple-touch-icon" href="../apple-touch-icon.png"/>
        <link href="/rss.xml" type="application/rss+xml" title="Блог 4eb0da" rel="alternate"/>
        <!---->
        <!--1w55t0d-->
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Блог 4eb0da"/>
        <meta property="og:locale" content="ru_RU"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <!---->
        <!--3lsjij-->
        <meta property="og:image" content="/_app/immutable/assets/share.CppPOT6a.png"/>
        <meta property="og:title" content="Медиа-фрагменты — ещё один способ использования якорных ссылок"/>
        <meta name="description" content="Медиа-фрагменты позволяют поменять начало и конец видео, обрезать изображения и кое-что ещё"/>
        <meta property="og:description" content="Медиа-фрагменты позволяют поменять начало и конец видео, обрезать изображения и кое-что ещё"/>
        <!---->
        <title>Медиа-фрагменты — ещё один способ использования якорных ссылок</title>
        <script>
            ( () => {
                const media = matchMedia('(prefers-color-scheme: dark)');

                const upd = () => {
                    document.documentElement.classList.toggle('app_dark', media.matches);
                }
                ;

                upd();
                media.addListener(upd);
            }
            )();
        </script>
    </head>
    <body>
            <!--[-->
            <!--[-->
            <!---->
            <main class="svelte-12qhfyh">
                <header class="svelte-12qhfyh">
                    <div class="header__left svelte-12qhfyh">
                        <a href="/" class="link svelte-12qhfyh">4eb0da</a>
                        <a href="/about" class="link svelte-12qhfyh">Обо мне</a>
                    </div>
                    <!--[-->
                    <button class="header__menu svelte-12qhfyh">
                        <div class="visually-hidden">Меню страницы</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40">
                            <path d="M0 0h40v8H0zm0 32h40v8H0zm0-16h40v8H0z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <!--]-->
                </header>
                <article class="svelte-12qhfyh">
                    <!--[-->
                    <!---->
                    <div class="article__layout svelte-1w55t0d">
                        <!---->
                        <h1>Медиа-фрагменты — ещё один способ использования якорных ссылок</h1>
                        <p class="info">28.12.2025 • html</p>
                        <nav class="toc">
                            <ol class="toc-level toc-level-1">
                                <li class="toc-item toc-item-h2">
                                    <a class="toc-link toc-link-h2" href="#вступление">Вступление</a>
                                </li>
                                <li class="toc-item toc-item-h2">
                                    <a class="toc-link toc-link-h2" href="#временные-якорные-ссылки">Временные якорные ссылки</a>
                                </li>
                                <li class="toc-item toc-item-h2">
                                    <a class="toc-link toc-link-h2" href="#якорные-ссылки-на-главы-и-аудиовидео-дорожки">Якорные ссылки на главы и аудио/видео-дорожки</a>
                                </li>
                                <li class="toc-item toc-item-h2">
                                    <a class="toc-link toc-link-h2" href="#пространственные-якорные-ссылки-для-обрезки-изображений">Пространственные якорные ссылки для обрезки изображений</a>
                                </li>
                                <li class="toc-item toc-item-h2">
                                    <a class="toc-link toc-link-h2" href="#итого">Итого</a>
                                </li>
                            </ol>
                        </nav>
                        <h2 id="вступление">
                            Вступление
                            <a aria-hidden="true" tabindex="-1" href="#вступление">
                                <span class="icon icon-link"></span>
                            </a>
                        </h2>
                        <p>
                            Последние год-два на слуху были текстовые фрагменты — способ сделать ссылку на конкретный текст на странице сайта. Эта возможность начала попадать в контекстное меню браузера, ей начали пользоваться поисковые системы для генерации ссылок на конкретный участок сайта, появился <code>::target-text</code>
                            .
                        </p>
                        <p>Но всё это время рядом была другая спека аж 2012 года, которая тоже использует якорные ссылки и которая даже была частично реализована в браузерах, но лично для меня она прошла полностью мимо. Добро пожаловать, сегодня мы посмотрим на “медиа-фрагменты”.</p>
                        <h2 id="временные-якорные-ссылки">
                            Временные якорные ссылки
                            <a aria-hidden="true" tabindex="-1" href="#временные-якорные-ссылки">
                                <span class="icon icon-link"></span>
                            </a>
                        </h2>
                        <p>Для видео и аудио можно задать ссылки на отрезок, который нужно воспроизвести. Это может быть только одна точка (начало или конец), так и обе. Синтаксис выглядит так:</p>
                        <figure data-rehype-pretty-code-figure="">
                            <div data-language="null" data-theme="github-light github-dark">
                                <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292edisplay: grid;" tabindex="0" data-language="null" data-theme="github-light github-dark">
                                    <code>
                                        <span data-line="">
                                            <span>video.mp4#t=[npt:][timeStart][,timeEnd]</span>
                                        </span>
                                    </code>
                                </pre>
                                <button class="code-copy-button" title="Копировать"></button>
                            </div>
                        </figure>
                        <p>
                            <code>npt</code>
                            — это необязательная часть, означает <code>normal play time</code>
                            и сделана она с расчётом на будущие дополнения к спеке.
                        </p>
                        <p>Время может быть задано в разных форматах:</p>
                        <ul>
                            <li>
                                <code>s</code>
                                просто секунды
                            </li>
                            <li>
                                <code>mm:ss</code>
                                минуты и секунды
                            </li>
                            <li>
                                <code>hh:mm:ss</code>
                                часы, минуты, секунды
                            </li>
                        </ul>
                        <p>Итого получается примерно следующее:</p>
                        <figure data-rehype-pretty-code-figure="">
                            <div data-language="null" data-theme="github-light github-dark">
                                <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292edisplay: grid;" tabindex="0" data-language="null" data-theme="github-light github-dark">
                                    <code>
                                        <span data-line="">
                                            <span>big_buck_bunny_720p_surround.mp4#t=65,68</span>
                                        </span>
                                    </code>
                                </pre>
                                <button class="code-copy-button" title="Копировать"></button>
                            </div>
                        </figure>
                        <blockquote>
                            <p>‘Big Buck Bunny’ имеет лицензию CC 3.0 от Blender foundation. Расположено на хостинге archive.org</p>
                        </blockquote>
                        <video controls src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4#t=65,68" preload="auto" muted playsinline webkitplaysinline="" class="svelte-21lmpi"></video>
                        <!---->
                        <p>Это работает с Хрома 18, Сафари 6, Файерфокса 34.</p>
                        <p>Ещё один способ использования этого синтаксиса — svg и SMIL анимации. Эта возможность заявлена в 147 бета-версии Файерфокса.</p>
                        <h2 id="якорные-ссылки-на-главы-и-аудиовидео-дорожки">
                            Якорные ссылки на главы и аудио/видео-дорожки
                            <a aria-hidden="true" tabindex="-1" href="#якорные-ссылки-на-главы-и-аудиовидео-дорожки">
                                <span class="icon icon-link"></span>
                            </a>
                        </h2>
                        <p>Есть ещё несколько возможностей, например, перейти к нужной главе:</p>
                        <figure data-rehype-pretty-code-figure="">
                            <div data-language="null" data-theme="github-light github-dark">
                                <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292edisplay: grid;" tabindex="0" data-language="null" data-theme="github-light github-dark">
                                    <code>
                                        <span data-line="">
                                            <span>#id=&lt;id></span>
                                        </span>
                                    </code>
                                </pre>
                                <button class="code-copy-button" title="Копировать"></button>
                            </div>
                        </figure>
                        <p>Способ выбрать конкретный трек:</p>
                        <figure data-rehype-pretty-code-figure="">
                            <div data-language="null" data-theme="github-light github-dark">
                                <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292edisplay: grid;" tabindex="0" data-language="null" data-theme="github-light github-dark">
                                    <code>
                                        <span data-line="">
                                            <span>#track=&lt;track></span>
                                        </span>
                                    </code>
                                </pre>
                                <button class="code-copy-button" title="Копировать"></button>
                            </div>
                        </figure>
                        <p>Это позволяет, к примеру, воспроизвести именно русскую дорожку, а не английскую.</p>
                        <p>Завести обе эти конструкции у меня не получилось, но, возможно, я что-то упустил.</p>
                        <h2 id="пространственные-якорные-ссылки-для-обрезки-изображений">
                            Пространственные якорные ссылки для обрезки изображений
                            <a aria-hidden="true" tabindex="-1" href="#пространственные-якорные-ссылки-для-обрезки-изображений">
                                <span class="icon icon-link"></span>
                            </a>
                        </h2>
                        <p>Начиная с Файерфокса 147, появилась возможность обрезать изображение (crop) прямо в урле:</p>
                        <figure data-rehype-pretty-code-figure="">
                            <div data-language="null" data-theme="github-light github-dark">
                                <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292edisplay: grid;" tabindex="0" data-language="null" data-theme="github-light github-dark">
                                    <code>
                                        <span data-line="">
                                            <span>test.svg#xywh=[unit:]xCoord,yCoord,width,height</span>
                                        </span>
                                    </code>
                                </pre>
                                <button class="code-copy-button" title="Копировать"></button>
                            </div>
                        </figure>
                        <p>
                            <code>unit</code>
                            может быть <code>pixel</code>
                            и <code>percent</code>
                            (<code>pixel</code>
                            используется по дефолту). Проценты пока что работают не как задумано и рекомендуется их избегать.
                        </p>
                        <div class="container svelte-1l6vlq4" style="--x: 200; --y: 200; --size: 200;">
                            <div class="container__inner svelte-1l6vlq4">
                                <div class="container__block svelte-1l6vlq4">
                                    <img class="container__full-image svelte-1l6vlq4" alt="Тестовое изображение" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDx0ZXh0IHg9IjY0Ljk1MjMxNiIgeT0iMzA0LjQ2OTk0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNDRweCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHN0eWxlPSJmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LWVhc3QtYXNpYW46bm9ybWFsO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHRzcGFuIHg9IjY0Ljk1MjMxNiIgeT0iMzA0LjQ2OTk0IiBmaWxsPSIjNGViMGRhIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMzMuMzNweCIgc3R5bGU9ImZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtZWFzdC1hc2lhbjpub3JtYWw7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsIj5IVE1MPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo="/>
                                    <div class="container__highlight svelte-1l6vlq4"></div>
                                </div>
                                <div class="container__block container__test-image svelte-1l6vlq4"></div>
                            </div>
                        </div>
                        <div class="preview svelte-1l6vlq4">#xywh=200,200,200,200</div>
                        <div>
                            <label>
                                <div>x</div>
                                <input type="range" value="200" min="0" max="312" class="svelte-1l6vlq4"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <div>y</div>
                                <input type="range" value="200" min="0" max="312" class="svelte-1l6vlq4"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <div>width &amp;height</div>
                                <input type="range" value="200" min="1" max="312" class="svelte-1l6vlq4"/>
                            </label>
                        </div>
                        <!---->
                        <p>
                            Данный синтаксис можно использовать для тегов <code>&lt;img></code>
                            , так и для <code>background-image</code>
                            .
                        </p>
                        <p>Можно заметить, что похожий эффект можно достигнуть с помощью обрезки фона. Однако пространственные ссылки могут быть удобнее, особенно, если картинка должна занимать не весь элемент или если для картинки необходимо повторение.</p>
                        <p>
                            Также это работает и для data-uri! Общая конструкция выглядит так: <code>data:image/svg+xml;base64,&lt;data>#xywh=&lt;x>,&lt;y>,&lt;w>,&lt;h></code>
                            .
                        </p>
                        <p>Теперь о минусах:</p>
                        <ol>
                            <li>Работает только с SVG</li>
                            <li>Непонятки с соотношением сторон. Текущая реализация в Файерфоксе не искажает картинку (что полезно в ряде ситуаций). Но при этом отображение работает не очень очевидным образом</li>
                        </ol>
                        <h2 id="итого">
                            Итого
                            <a aria-hidden="true" tabindex="-1" href="#итого">
                                <span class="icon icon-link"></span>
                            </a>
                        </h2>
                        <p>Временные якорные ссылки можно использовать уже сейчас, и это было бы полезно для начала видео с нужной главы и подобного. Для SVG пока что мало применений, да и их можно реализовать с помощью JS.</p>
                        <p>Пространственные якори пока что работают только в одном браузере, только в SVG и имеют не так много применений.</p>
                        <p>Посмотрим, возможно, всё это — оживление старого стандарта и нас ждут новые варианты в будущем?</p>
                        <!---->
                        <!---->
                        <a class="discuss svelte-1w55t0d" href="http://t.me/blog_4eb0da" target="_blank">
                            <span class="icon icon_telegram svelte-1w55t0d"></span>
                            Обсудить в Telegram
                        </a>
                        <!--[-->
                        <h4 class="article__related-title svelte-1w55t0d">Почитать ещё посты</h4>
                        <ul class="article__related svelte-1w55t0d">
                            <!--[-->
                            <li class="article__related-post">
                                <a href="/posts/out-of-viewport" class="article__related-link svelte-1w55t0d">
                                    <img class="article__related-image svelte-1w55t0d" alt="За пределы вьюпорта мобильного браузера" src="/_app/immutable/assets/share.BCuEedOM.png"/>
                                </a>
                            </li>
                            <li class="article__related-post">
                                <a href="/posts/float-in-modern-css" class="article__related-link svelte-1w55t0d">
                                    <img class="article__related-image svelte-1w55t0d" alt="Нужен ли float в 2026м году?" src="/_app/immutable/assets/share.NOu3HTX1.png"/>
                                </a>
                            </li>
                            <li class="article__related-post">
                                <a href="/posts/origin-api" class="article__related-link svelte-1w55t0d">
                                    <img class="article__related-image svelte-1w55t0d" alt="Origin API" src="/_app/immutable/assets/share.f9isaOXe.png"/>
                                </a>
                            </li>
                            <li class="article__related-post">
                                <a href="/posts/type-branding-type-flavoring" class="article__related-link svelte-1w55t0d">
                                    <img class="article__related-image svelte-1w55t0d" alt="Type Branding и Type Flavoring" src="/_app/immutable/assets/share.jTGTyagV.png"/>
                                </a>
                            </li>
                            <li class="article__related-post">
                                <a href="/posts/temporal" class="article__related-link svelte-1w55t0d">
                                    <img class="article__related-image svelte-1w55t0d" alt="Работа с датами, временем и Temporal" src="/_app/immutable/assets/share.CAL9WjuP.png"/>
                                </a>
                            </li>
                            <!--]-->
                        </ul>
                        <!--]-->
                    </div>
                    <!---->
                    <!--]-->
                    <!---->
                </article>
                <footer class="svelte-12qhfyh">
                    2025-2026 <a class="link svelte-12qhfyh" href="https://github.com/4eb0da/4eb0da.github.io" target="_blank">Исходник сайта</a>
                </footer>
            </main>
            <!---->
            <!--]-->
            <!--[!-->
            <!--]-->
            <!--]-->
    </body>
</html>`;

export async function GET() {
    return new Response(content, {
        headers: {
            'Content-Type': 'text/html'
        }
    });
}
