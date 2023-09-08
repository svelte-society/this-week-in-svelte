import type { HTMLButtonAttributes } from 'svelte/elements'

export interface SharedButtonProps
	extends HTMLButtonAttributes {
	kind: 'primary' | 'secondary'
}
