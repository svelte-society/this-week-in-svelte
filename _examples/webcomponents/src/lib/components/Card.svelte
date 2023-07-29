<svelte:options
	customElement={{
		tag: 'twis-card',
		props: {
			complex: {
				type: 'Object',
				reflect: true
			}
		}
	}}
/>

<script lang="ts">
	import Button from './Button.svelte';

	export let title = '';
	export let complex: { number: number };
</script>

<section>
	<h1>{title}{complex?.number}</h1>
	<hr />
	<slot />
	<div>
		<Button on:click>Select</Button>
	</div>
</section>

<style>
	section {
		--padding: 2rem;
		box-shadow: 0 0 1rem 0 rgba(0 0 0 / 0.3);
		padding: var(--padding);
		font-family: sans-serif;
		border-radius: 0.5rem;
	}
	hr {
		margin-inline: calc(-1 * var(--padding));
		margin-block: var(--padding);
	}
	h1 {
		margin: 0;
	}
	div {
		margin-block-start: var(--padding);
	}
</style>
