<script>
	import { enhance } from '$app/forms';

	export let form;
	$: console.log({ form });
</script>

<svelte:head>
	<title>Dynamic form!</title>
</svelte:head>

<h1>Dynamic form</h1>

<form method="POST" use:enhance>
	<label>
		Your name
		<input name="name" type="text" value={form?.items?.name ?? ''} />
	</label>

	<fieldset>
		<legend>How many pets do you have?</legend>

		<label>
			<input type="radio" name="pets" value="0" />
			0
		</label>
		<label>
			<input type="radio" name="pets" value="1" />
			1
		</label>
		<label>
			<input type="radio" name="pets" value="2" />
			2
		</label>
		<label>
			<input type="radio" name="pets" value="3" />
			3+
		</label>
	</fieldset>
	<br />
	<label>
		First pet's name
		<input type="text" name="petname-0" />
	</label>
	<button style="--color-link: #444;" formaction="?/addPetName">Add pet name</button>
	<button>Submit form!</button>
</form>
