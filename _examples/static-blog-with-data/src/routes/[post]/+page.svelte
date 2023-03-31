<script>
	/** @type {import('./$types').PageData} */
	export let data
</script>

<article>
	<h2>{data.post.title}</h2>

	{#each data.post.body[0].children as copy}
		<p>{copy.text}</p>
	{/each}
</article>

<style>
	article {
		border: 1px solid green;
		padding: 1rem 0.5rem;
	}
</style>
