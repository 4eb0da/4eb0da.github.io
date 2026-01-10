<script lang="ts">
    const { data } = $$props;

    const dateFormat = new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'long'
    });

    function getMonth(date: Date): string {
        return dateFormat.format(date).split(' ').find(it => !/[0-9]/.test(it[0])) || '';
    }
</script>

<svelte:head>
    <title>4eb0da</title>
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
    <link rel="canonical" href="https://4eb0da.ru/">
</svelte:head>

<main>
    <h1 class="header">
        Привет, я <span class="highlight">Александр Нефедов</span>, а это мой блог про <span class="highlight">фронтенд-разработку</span>
    </h1>
    <p>
        Последние посты:
    </p>
    <ul class="posts-list">
        {#each data.posts as post}
            <li>
                <a href="/posts/{post.name}" class="post">
                    <div class="post__date">
                        <div class="post__day">
                            {post.date.getDate()}
                        </div>
                        <div class="post__month">
                            {getMonth(post.date)}
                        </div>
                        <div class="post__year">
                            {post.date.getFullYear()}
                        </div>
                    </div>
                    <div class="post__info">
                        <div class="post__title">
                            {post.title}
                        </div>
                        {#if post.description}
                            <div class="post__description">
                                {post.description}
                            </div>
                        {/if}
                        {#if Array.isArray(post.tags) && post.tags.length}
                            <div class="post__tags">
                                {post.tags}
                            </div>
                        {/if}
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</main>

<style>
    @import './media.css';

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
        font-size: 1.6rem;
        text-wrap: balance;
        text-wrap: pretty;

        @media (--desktop-window) {
            font-size: 2.4rem;
        }
    }

    .highlight {
        color: var(--accent);
    }

    .posts-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .post {
        display: flex;
        color: inherit;
        text-decoration: none;
        transition: background-color .15s ease-in-out;

        &:hover {
            background: var(--text-fill-02);
        }
    }

    li + li .post {
        border-top: 1px solid var(--text-fill-02);
    }

    .post__date {
        box-sizing: content-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 45px;
        padding: 10px 20px 10px 10px;
        text-align: center;
    }

    .post__day {
        font-size: 3rem;
    }

    .post__month, .post__year {
        font-size: .8rem;
        color: var(--text-info);
    }

    .post__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1 1 auto;
        padding: 10px 10px 10px 0;
    }

    .post__title {
        margin-bottom: .4em;
        font-size: 1.46rem;
        text-wrap: balance;
        text-wrap: pretty;

        @media (--desktop-window) {
            font-size: 1.6rem;
        }
    }

    .post__description {
        margin-bottom: .4rem;
        text-wrap: balance;
        text-wrap: pretty;
    }

    .post__tags {
        font-size: .8rem;
        color: var(--text-info);
    }
</style>
