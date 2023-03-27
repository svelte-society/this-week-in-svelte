<script>
	/** @type {'purple' | 'green' | null} */
	export let kind = null
</script>

<div
	class="card"
	class:purple={kind === 'purple'}
	class:green={kind === 'green'}
>
	<slot />
</div>

<style>
	.card {
		padding: 1.5rem;
		border: 1px solid black;
	}
	.purple {
		background-color: purple;
		color: white;
	}
	.green {
		background-color: green;
		color: white;
	}
</style>
