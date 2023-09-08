<script>
	import Card from '$lib/Card.svelte'
	import {
		GrailAccordion,
		GrailAccordionItem
	} from '$components/GrailAccordion'
	import ButtonHouse from './ButtonHouse.svelte'
	import CoolButton from '$components/SharedButtons/CoolButton.svelte'
	import Button from '$components/SharedButtons/Button.svelte'
	import JsDocButton from '$components/SharedButtons/JSDocButton.svelte'
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

<h2>Shared props examples.</h2>

<Button kind="primary">Regular button</Button>
<CoolButton kind="primary">Cool button</CoolButton>
<!-- TODO, fix type error -->
<JsDocButton>JSDoc Button</JsDocButton>

<h2>JSDoc 'as const' typing</h2>

{#if true}
	{@const person = /** @type {const} */ ({ name: 'Piers' })}
	<p>Name is {person.name}</p>
{/if}
