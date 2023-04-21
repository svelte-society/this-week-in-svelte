<script>
	const obj = {}

	/** @type {string} */
	let fetchedMessage = ''

	const fetchSomething = async () => {
		let res = await fetch('/error-handling', {
			method: 'POST',
			headers: {
				accept: 'application/json'
			}
		})

		if (res.ok) {
			fetchedMessage = await res.json()
		} else {
			fetchedMessage = (await res.json()).message
		}
	}
</script>

<!-- <p>Error page! {obj.error.message}</p> -->
<p>Error page!</p>

<button on:click={fetchSomething}
	>I would like an expected error, please</button
>

<p>Response goes here: {fetchedMessage}</p>
