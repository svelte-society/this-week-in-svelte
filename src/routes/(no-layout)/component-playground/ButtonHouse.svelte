<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
</script>

<!-- 
	@component My ButtonHouse
 -->
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
