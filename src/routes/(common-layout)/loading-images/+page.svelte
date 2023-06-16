<script>
	import cat from '$lib/catty2.jpeg'

	/** @type {import('$lib/types').Pet[]} */
	const pets = [
		{
			species: 'cat',
			age: 10
		},
		{
			species: 'dog',
			age: 7
		}
	]

	const handler = () => {
		console.log('handled!')
	}
</script>

<button on:click={handler}>Example</button>

<h2>Pet samples</h2>

{#each pets as pet}
	<p>Pet species: {pet.species}<br />Pet age: {pet.age}</p>
{/each}

<h2>Some cat photos!</h2>

<figure>
	<img
		src="/catty1.jpeg"
		width="300"
		alt="A maine coon cat"
	/>
	<figcaption>
		Loaded as a static image! <br />Photo by
		<a
			href="https://unsplash.com/@alxndr_london?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			>Alexander London</a
		>
		on
		<a
			href="https://unsplash.com/images/animals/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			>Unsplash</a
		>
	</figcaption>
</figure>

<figure>
	<img src={cat} alt="An orange cat" width="300" />
	<figcaption>
		Loaded via import! <br />Photo by
		<a
			href="https://unsplash.com/es/@sadmax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			>Amber Kipp</a
		>
		on
		<a
			href="https://unsplash.com/images/animals/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			>Unsplash</a
		>
	</figcaption>
</figure>

<style>
	figcaption {
		margin-bottom: 2rem;
		color: #000;
	}
</style>
