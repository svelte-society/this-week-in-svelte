<script>
	import hamburgerIcon from '$lib/hamburger.svg?raw'
	import { onMount } from 'svelte'
	/**
	 * @param {HTMLElement} node
	 */
	const js = (node) => {
		node.classList.add('has-js')
	}

	/** @type {HTMLElement} */
	let btn
	let open = false

	onMount(() => {
		const outClick = (e) => {
			if (e.target !== btn) {
				open = false
			}
		}
		document.addEventListener('click', outClick)

		return () => {
			document.removeEventListener('click', outClick)
		}
	})
</script>

<div class="wrapper" use:js>
	<div class="hamburger-wrapper">
		<!-- Fallback hamburger link -->
		<a href="#footer" class="hamburger"
			>{@html hamburgerIcon} Fancy restaurant
			<span class="a11y-hidden">menu</span></a
		>
		<!-- Enhanced hamburger button -->
		<button
			bind:this={btn}
			class="hamburger"
			aria-expanded={open}
			aria-controls="nav"
			on:click={() => (open = !open)}
			>{@html hamburgerIcon} Fancy restaurant
			<span class="a11y-hidden">menu</span></button
		>
	</div>

	<span class="title">Fancy restaurant</span>

	<nav
		aria-label="Main navigation"
		id="nav"
		class="nav"
		class:open
	>
		<ul role="list">
			<li><a href="#about">About</a></li>
			<li><a href="#food">Food</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
</div>

<style>
	.a11y-hidden {
		width: 1px;
		height: 1px;
		overflow: hidden;
	}
	.wrapper {
		background-color: black;
		color: white;
		padding: 0.5rem 0;
		position: relative;
	}

	.hamburger-wrapper {
		display: flex;
		flex-direction: row;

		@media (width > 540px) {
			display: none;
		}
	}

	.hamburger {
		appearance: none;
		background: none;
		border: 0;
		text-decoration: none;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		color: inherit;
	}
	.hamburger :global(svg) {
		fill: white;
		stroke: white;
		margin-right: 0.25rem;
		pointer-events: none;
	}
	.hamburger:hover {
		font-weight: 600;
	}

	.title {
		text-transform: uppercase;
		display: none;
		padding-left: 1.5rem;
		font-size: 1.5rem;

		@media (width > 540px) {
			display: inline-block;
		}
	}

	.nav {
		display: none;
		background-color: black;
		position: relative;
		color: white;

		@media (width > 540px) {
			display: block;
			padding-left: 0.75rem;
		}
	}
	.nav.open {
		@media (width <= 540px) {
			display: block;
			position: absolute;
			top: 4rem;
			left: 0;
			width: 100%;
		}
	}
	.nav ul {
		list-style: none;
		padding: 0;

		@media (width > 540px) {
			display: flex;
		}
	}
	.nav a {
		color: white;
		display: block;
		line-height: 1;
		padding: 1rem 0.75rem;
		text-decoration: none;
	}
	.nav a:hover {
		background-color: #333;
	}

	/* Switch out link for button when there's JS */
	.wrapper:global(.has-js) a.hamburger {
		display: none;
	}
	.wrapper:not(.has-js) button.hamburger {
		display: none;
	}
</style>
