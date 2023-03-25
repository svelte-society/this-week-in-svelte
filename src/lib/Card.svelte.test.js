import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render } from '@testing-library/svelte'
import Card from './Card.svelte'

describe('Card.svelte', () => {
	afterEach(() => cleanup())

	it('mounts', () => {
		const { container } = render(Card)
		expect(container).toBeTruthy()
		expect(container.innerHTML).toMatchSnapshot()
	})

	it('renders purple', () => {
		// <Card kind="purple" />
		const { container } = render(Card, { kind: 'purple' })
		expect(container.innerHTML).toMatchSnapshot()
	})
})
