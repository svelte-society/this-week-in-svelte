<script>
	import { createAccordion } from '@grail-ui/svelte'

	const {
		useAccordion,
		itemAttrs,
		triggerAttrs,
		contentAttrs
	} = createAccordion()

	export let data = [
		{
			key: 'item-1',
			title: 'Button 1',
			content: 'Content for one.'
		},
		{
			key: 'item-2',
			title: 'Button 2',
			content: 'Content for two.'
		},
		{
			key: 'item-3',
			title: 'Button 3',
			content: 'Content for three.'
		}
	]
</script>

<ul use:useAccordion>
	{#each data as item}
		<li {...$itemAttrs(item.key)}>
			<button {...$triggerAttrs(item.key)}
				>{item.title}</button
			>
			<div {...$contentAttrs(item.key)}>{item.content}</div>
		</li>
	{/each}
</ul>

<style>
	/* I needed to add this */
	button[aria-expanded='false'] + div {
		display: none;
	}

	/* TODO: draw the rest of the owl */
</style>
