<script lang="ts">
	import { deserialize } from '$app/forms'

	// easier to use the form export
	// export let form

	let response = 'Response goes here'

	const handleSubmit = async (e) => {
		console.log(e.target)
		const res = await fetch('/jsform', {
			method: 'POST',
			body: new FormData(e.target)
		})

		const parsedData = deserialize(await res.text())

		console.log({ parsedData })
		response = JSON.stringify(parsedData.data)
	}
</script>

<svelte:head>
	<title>JS Form</title>
</svelte:head>

<form method="POST" on:submit|preventDefault={handleSubmit}>
	<label for="pizza">Favourite Pizza</label>
	<input id="pizza" name="pizza" />
	<button>Tell the world, let them know</button>
</form>

<p>{response}</p>
