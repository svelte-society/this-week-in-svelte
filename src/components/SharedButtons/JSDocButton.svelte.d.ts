// Learn more: https://svelte.dev/docs/typescript#types-sveltecomponent
import type { SvelteComponent } from 'svelte'
import type { SharedButtonProps } from './types'

interface $$Props extends SharedButtonProps {}

export default class JSDocButton extends SvelteComponent<SharedButtonProps> {}
