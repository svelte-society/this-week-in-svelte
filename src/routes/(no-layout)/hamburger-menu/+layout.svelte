<script>
	import '$lib/reset.css'
	import HamburgerNav from './HamburgerNav.svelte'
</script>

<svelte:head>
	<title>Hambuger menu demonstration</title>
</svelte:head>

<header>
	<HamburgerNav />
</header>

<main>
	<slot />
</main>

<footer id="footer">
	There is where I would put my footer. If I had one!
</footer>

<style>
	main,
	footer {
		padding: 0.75rem;
	}
</style>
