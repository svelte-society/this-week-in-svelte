<script>
	/** @type {import('./$types').PageData} */
	export let data
</script>

<h2>Gallery</h2>

{#each data.images as image}
	<a href="/gallery/{image}"
		><img class="thumb" src="/{image}" alt="icon" /></a
	>
{/each}

<style>
	.thumb {
		width: 100px;
		height: 100px;
	}
</style>
