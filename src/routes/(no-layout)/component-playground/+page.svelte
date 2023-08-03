<script>
	import Card from '$lib/Card.svelte'
	import {
		GrailAccordion,
		GrailAccordionItem
	} from '$components/GrailAccordion'
	import ButtonHouse from './ButtonHouse.svelte'
</script>

<svelte:head>
	<title>Component playground!</title>
</svelte:head>

<Card kind="purple">How is this card?</Card>

<GrailAccordion>
	<GrailAccordionItem
		key="one"
		title="How do I export
	components as named exports?"
	>
		<svelte:fragment slot="content">
			<p>Use this:</p>
			<pre>export &lbrace; default as ComponentName &rbrace; from './ComponentName.svelte'</pre>
		</svelte:fragment>
	</GrailAccordionItem>
</GrailAccordion>

<ButtonHouse
	on:cat={(/** @type {{ detail: { name: 'tom' }}} */ e) =>
		console.log(e.detail)}
/>

{#if true}
	<!-- Show everyone the `as const` trick -->
	{@const person = { name: 'Piers' }}
	<p>Name is {person.name}</p>
{/if}
