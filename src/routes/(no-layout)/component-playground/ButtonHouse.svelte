<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
</script>

<button
	on:click={() =>
		dispatch('cat', {
			name: 'tom'
		})}>Cat button</button
>
<button
	on:click={() => dispatch('mouse', { name: 'jerry' })}
	>Mouse button</button
>
