import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render } from '@testing-library/svelte'
import Card from '$lib/Card.svelte'
import CardSlot from './CardSlot.svelte'

describe('thing', () => {
	afterEach(() => cleanup())

	it('mounts', () => {
		const { container } = render(CardSlot)
		console.log({
			container,
			children: container.innerHTML
		})
		expect(container).toBeTruthy()
		expect(container.innerHTML).toMatchSnapshot()
	})

	it('renders purple', () => {
		// <Card kind="purple" />
		const { container } = render(Card, { kind: 'purple' })
		expect(container.innerHTML).toMatchSnapshot()
	})
})
