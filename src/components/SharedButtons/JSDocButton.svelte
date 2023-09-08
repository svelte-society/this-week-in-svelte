<button
	{...$$props}
	class:primary={$$props.kind === 'primary'}
	><slot /></button
>

<style>
	.primary {
		background-color: red;
		color: white;
	}
</style>
