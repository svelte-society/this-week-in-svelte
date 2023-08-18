<script lang="ts">
	import { dev } from '$app/environment'
	import { enhance } from '$app/forms'
	import type { ActionData } from './$types'
	import { tick } from 'svelte'

	export let form: ActionData

	let summaryWrapper: HTMLElement
	const focus = async () => {
		await tick()
		summaryWrapper.focus()
	}
	$: {
		if (form?.success !== undefined) {
			focus()
		}
	}
	$: errors = form?.errors ?? {}

	// Form items
	$: items = Object.fromEntries(form?.items ?? [])

	let pets: Array<string> = ['']
	const formPetsUpdated = (formPets) => {
		console.log({ formPets })
		if (!formPets) return
		pets = formPets.map((el, i) => el.toString())
		console.log('reassign', pets)
	}
	$: formPetsUpdated(form?.pets)

	if (form?.success === true) {
		pets = ['']
	}

	const addPet = () => {
		console.log('add pet')
		pets = [...pets, '']
	}
</script>

<svelte:head>
	<title>Dynamic form!</title>
</svelte:head>

<h1>Dynamic form</h1>

{#if dev}
	<p>{JSON.stringify(form)}</p>
{/if}

<div
	class="review error"
	class:error={form?.success === false}
	style:display={form?.success === undefined
		? 'none'
		: 'block'}
	tabindex="-1"
	bind:this={summaryWrapper}
>
	{#if form?.success === true}
		<h2>Review</h2>
		<ul>
			{#each form.items as [key, value], i}
				{#if key === 'petname'}
					<li>
						Pet name {i}: {value}
					</li>
				{:else}
					<li>{key}: {value}</li>
				{/if}
			{/each}
		</ul>
	{/if}

	{#if form?.success === false}
		<h2>There were errors in your submission</h2>
		<ul>
			{#each Object.entries(errors) as [fieldname, message]}
				<li><a href="#{fieldname}-field">{message}</a></li>
			{/each}
		</ul>
	{/if}
</div>

<form
	method="POST"
	action="?/submit"
	use:enhance
	data-sveltekit-noscroll
>
	<!--
		Need to use `for` attribute otherwise error text
		may not get read!
	-->
	<label for="name-field">
		Your name
		{#if errors?.name}
			<br /><span class="inline-error">{errors.name}</span>
		{/if}
	</label>
	<input
		id="name-field"
		name="name"
		type="text"
		value={items.name ?? ''}
		aria-invalid={!!errors?.name}
	/>

	{#each pets as pet, i}
		{#if dev}
			<p>Pets {JSON.stringify(pets)}</p>
			<p>Pet {JSON.stringify(pet)}</p>
		{/if}
		<label for="petname-{i}">Pet #{i + 1}'s name</label>
		<input
			id="petname-{i}"
			type="text"
			name="petname"
			value={pet}
		/>
		<button class="remove" formaction="?/removePet&pet={i}"
			>Remove pet #{i + 1}</button
		>
	{/each}
	<div>
		<button
			style="--color-link: #444;"
			formaction="?/addPet"
			on:click|preventDefault={addPet}>Add pet name</button
		>
		<button>Submit form!</button>
	</div>
</form>

<style>
	.remove {
		padding: 0.5rem;
		--color-link: darkred;
	}
	input:has(+ .remove) {
		margin-bottom: 0.25rem;
	}
	input + .remove {
		margin-bottom: 1.5rem;
	}
	.review {
		background-color: lightgreen;
		padding: 0.5rem;
	}
	.error {
		background-color: rgba(255, 181, 192, 50%);
		border: 4px solid crimson;
	}
	.inline-error {
		color: crimson;
	}
</style>
