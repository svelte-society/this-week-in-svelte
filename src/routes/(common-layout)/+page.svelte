<script>
	import { navigating } from '$app/stores'
</script>

<h1>This week in Svelte</h1>
<p>Demos</p>

{#if $navigating !== null}
	<p>Loading page...</p>
{/if}

<ul>
	<li><a href="/links">Links on a page</a></li>
	<li>
		<a href="/dynamic-form"
			>Progressively enhanced form that can add or remove
			inputs</a
		>
	</li>
	<li>
		<a href="/streaming"
			>Streaming promises from server `load`</a
		>
	</li>
	<li>
		<a href="/component-playground">Component playground!</a
		>
	</li>
	<li><a href="/error-handling">Error handling</a></li>
	<li><a href="/jsform">JS Form</a></li>
	<li>
		<a href="/loading-images"
			>Loading images (and reusable types)</a
		>
	</li>
	<li>
		<a href="/hamburger-menu">Hamburger menu</a>
	</li>
</ul>
