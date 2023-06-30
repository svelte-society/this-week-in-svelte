<script>
	import { createAccordion } from '@grail-ui/svelte'
	import { getContext } from 'svelte'

	const { itemAttrs, contentAttrs } = createAccordion()

	// Needed to communicate state as a nested component
	const triggerAttrs = getContext('triggerAttrs')

	/** @type {string} */
	export let key
	/** @type {string} */
	export let title = ''
	/** @type {string} */
	export let content = ''
</script>

<li {...$itemAttrs(key)}>
	<button {...$triggerAttrs(key)}
		><slot name="title">{title}</slot></button
	>
	<div {...$contentAttrs(key)}>
		<slot name="content">{content}</slot>
	</div>
</li>

<style>
	/* I needed to add this */
	button[aria-expanded='false'] + div {
		display: none;
	}

	/* TODO: draw the rest of the owl */
	li {
		list-style: none;
		padding-left: 0;
	}
	button {
		appearance: none;
		background: white;
		border: 1px solid black;
		display: block;
		width: 100%;
		text-align: left;
		padding: 0.5em;
		font-size: 1.25rem;
	}
	button[aria-expanded='true'] {
		color: white;
		background: black;
	}

	button:hover {
		box-shadow: inset 0 -2px 0px -2px black;
	}

	button:focus {
		outline: 2px solid black;
		outline-offset: 2px;
	}

	div {
		margin-top: 0.5rem;
		text-align: left;
		background: linear-gradient(white, #eee);
		border: 1px solid black;
		padding: 0.5rem;
	}
</style>
