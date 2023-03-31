<svelte:head>
	<title>My blog</title>
</svelte:head>

<h1>My blog!</h1>

<main>
	<slot />
</main>

<footer>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/gallery">Gallery</a></li>
	</ul>
</footer>

<style>
	footer {
		margin-top: 2rem;
	}
</style>
