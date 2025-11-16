<script lang="ts">
	import faviconSvg from '$lib/assets/favicon.svg';
	import faviconIco from '$lib/assets/favicon.ico';
	import appleTouchIcon from '$lib/assets/apple-touch-icon.png';
    import './app.css';

	let { children } = $props();
	let menuToggled = $state(false);

	function onMenu(): void {
		menuToggled = !menuToggled;
	}

	function onArticleClick(event: MouseEvent): void {
		const target = event.target;
		if (target instanceof Element && target.closest('.toc-link')) {
			menuToggled = false;
		}
	}

	$effect(() => {
		document.body.classList.toggle('body_menu', menuToggled);
	});
</script>

<svelte:head>
	<link rel="icon" href={faviconIco} sizes="32x32" />
	<link rel="icon" href={faviconSvg} type="image/svg+xml" />
	<link rel="apple-touch-icon" href={appleTouchIcon}>
</svelte:head>

<main>
	<header>
		<a href="/" class="header__origin">
			4eb0da
		</a>

		<button class="header__menu" onclick={onMenu}>
			<div class="visually-hidden">Меню страницы</div>

			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40"><path d="M0 0h40v10H0zM0 30h40v10H0zM0 15h40v10H0z" fill="currentColor"/></svg>
		</button>
	</header>
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<article onclick={onArticleClick}>
		{@render children()}
	</article>
	<footer>
		2025
	</footer>
</main>

<style>
	@import './media.css';

	main {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}

	header {
		position: sticky;
		z-index: 1;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 0 0 auto;
		height: 50px;
		padding: 0 20px;
		background: var(--bg-secondary);
	}

	@media (--desktop-window) {
		header {
			height: 40px;
		}
	}

	.header__origin {
		color: inherit;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	.header__menu {
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
		cursor: pointer;
	}

	article {
		flex: 1 1 auto;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 0 0 auto;
		height: 50px;
		margin: 40px 0 0;
		padding: 0 20px;
		background: var(--bg-secondary);
	}

	@media (--desktop-window) {
		footer {
			height: 40px;
		}
	}

	@media (--desktop-window) {
		.header__menu {
			display: none;
		}
	}

	:global(.body_menu) {
		overflow: hidden;
	}
</style>
