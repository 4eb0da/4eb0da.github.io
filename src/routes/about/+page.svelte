<svelte:head>
    <title>Обо мне</title>
    <meta name="description" content="Блог Александра Нефедова про фронтенд-разработку">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Блог 4eb0da">
    <meta property="og:locale" content="ru_RU">
    <meta property="twitter:card" content="summary_large_image">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image" content="/share.png">
    <meta property="og:title" content="4eb0da">
    <meta property="og:description" content="Блог Александра Нефедова про фронтенд-разработку">
    <link rel="canonical" href="https://4eb0da.ru/about">
</svelte:head>

<main>
    <h1 class="header">
        Привет, я <span class="highlight">Александр Нефедов</span>, а это мой блог про <span class="highlight">фронтенд-разработку</span>
    </h1>

    <p>
        Я профессионально занимаюсь веб-разработкой с 2011го года, а через 2 с половиной года я пришёл трудиться в компанию Яндекс
    </p>

    <p>
        Мне интересны веб-технологии, новые фичи браузеров, 3д-графика, сборка, вёрстка, доступность и ещё куча всего =)
    </p>

    <p>
        Я участвую в Школе Разработки Интерфейсов Яндекса (которую сам и заканчивал когда-то), временами — в разных ролях
    </p>

    <p>
        А по случаю выступаю на разных мероприятиях (Яндекс Субботник, Holy.JS и некоторые другие)
    </p>

    <h3>Контакты:</h3>

    <address>
        <a href="mailto:i4eb0da@yandex.ru">
            <span class="icon icon_mail"></span>
            i4eb0da@yandex.ru
        </a>

        <br>

        <a href="https://github.com/4eb0da" target="_blank">
            <span class="icon icon_github"></span>
            @4eb0da
        </a>

        <br>

        <a href="http://t.me/blog_4eb0da" target="_blank">
            <span class="icon icon_telegram"></span>
            @blog_4eb0da
        </a>
    </address>
</main>

<style>
    @import '../media.css';

    main {
        margin: 0 auto;
        padding: 0 20px;
    }

    @media (--desktop-window) {
        main {
            max-width: 40rem;
        }
    }

    .header {
        font-size: 2.4rem;
        text-wrap: balance;
        text-wrap: pretty;
    }

    .highlight {
        color: var(--accent);
    }

    address {
        font-style: normal;
    }

    a {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--accent);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .icon {
        width: 24px;
        height: 24px;
        background: currentColor;
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
    }

    .icon_mail {
        mask-image: url(./mail.svg);
    }

    .icon_github {
        mask-image: url(./github.svg);
    }

    .icon_telegram {
        mask-image: url(./telegram.svg);
    }
</style>
