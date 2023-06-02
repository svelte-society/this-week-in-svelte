<script>
	import Card from '$lib/Card.svelte'
	import {
		GrailAccordion,
		GrailAccordionItem
	} from '$components/GrailAccordion'
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
