<script lang="ts">
	import { dev } from '$app/environment'
	import { enhance } from '$app/forms'
	import type { ActionData } from './$types'

	export let form: ActionData

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

{#if form?.success === true}
	<div class="review">
		<h2>Review</h2>
		<ul>
			{#each form.items as [key, value], i}
				{#if key === 'petname'}
					{@const numOfPets = form.items.filter(
						(el) => el[0] === 'petname'
					).length}
					<li>
						Pet name {i}: {value}
					</li>
				{:else}
					<li>{key}: {value}</li>
				{/if}
			{/each}
		</ul>
	</div>
{/if}

<form
	method="POST"
	action="?/submit"
	use:enhance
	data-sveltekit-noscroll
>
	<label>
		Your name
		<input
			name="name"
			type="text"
			value={items.name ?? ''}
		/>
	</label>

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
</style>
