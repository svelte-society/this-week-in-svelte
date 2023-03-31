<script>
	export let data
</script>

{#each data.posts as post}
	<h2><a href="/{post.slug.current}">{post.title}</a></h2>
{/each}
