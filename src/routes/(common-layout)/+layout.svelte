<script>
	import mvp from '$lib/mvp.css?url'
	import './styles.css'
	import { page } from '$app/stores'
</script>

<svelte:head>
	{#if $page.data.globalStyles}
		<link rel="stylesheet" href={mvp} />
	{/if}
</svelte:head>

<header><a href="/">Return home</a></header>

<main id="main">
	<slot />
</main>
