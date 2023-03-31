<svelte:head>
	<title>My blog</title>
</svelte:head>

<h1>My blog!</h1>

<main>
	<slot />
</main>

<footer>
	<a href="/">Home</a>
</footer>

<style>
	footer {
		margin-top: 2rem;
	}
</style>
