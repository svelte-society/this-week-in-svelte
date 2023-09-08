<script lang="ts">
	import type { SharedButtonProps } from './types'
	interface $$Props extends SharedButtonProps {}
</script>

<button
	{...$$props}
	class:primary={$$props.kind === 'primary'}
	><slot /></button
>

<style>
	.primary {
		background-color: green;
		color: white;
	}
</style>
