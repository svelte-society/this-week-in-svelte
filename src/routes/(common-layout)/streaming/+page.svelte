<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Streaming with promises</title>
</svelte:head>

<h1>Streaming with promises!</h1>

<p>When JS is enabled, you'll see a preloader below:</p>

{#await data.streams.animals}
	<p>Loading...</p>
{:then animals}
	<ul>
		{#each animals as animal}
			<li>{animal}</li>
		{/each}
	</ul>
{/await}
