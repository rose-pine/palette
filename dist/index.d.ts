/**
 * Palette variants
 */
export namespace variants {
	/**
	 * Low-contrast dark variant
	 */
	const main: Roles<Color, AlphaColor>
	/**
	 * Mid-contrast dark variant
	 */
	const moon: Roles<Color, AlphaColor>
	/**
	 * Mid-contrast light variant
	 */
	const dawn: Roles<Color, AlphaColor>
}

/**
 * Palette roles
 */
export namespace roles {
	/**
	 * Background
	 * - Primary background
	 */
	const base: Variants<Color>
	/**
	 * Background
	 * - Elements directly atop {@link Roles.base }
	 */
	const surface: Variants<Color>
	/**
	 * Background
	 * - Elements directly atop {@link Roles.surface}
	 */
	const overlay: Variants<Color>
	/**
	 * Foreground
	 * - Low-contrast elements
	 * - Ignored git folders
	 */
	const muted: Variants<Color>
	/**
	 * Foreground
	 * - Mid-contrast elements
	 * - Comments, punctuation, etc.
	 */
	const subtle: Variants<Color>
	/**
	 * Foreground
	 * - High-contrast elements
	 * - Text, variables, etc.
	 */
	const text: Variants<Color>
	const love: Variants<Color>
	const gold: Variants<Color>
	const rose: Variants<Color>
	const pine: Variants<Color>
	const foam: Variants<Color>
	const iris: Variants<Color>
	/**
	 * Highlight background
	 * - Low-contrast selection
	 */
	const highlightLow: Variants<AlphaColor>
	/**
	 * Highlight background
	 * - Mid-contrast selection
	 */
	const highlightMed: Variants<AlphaColor>
	/**
	 * Highlight background
	 * - High-contrast selection
	 */
	const highlightHigh: Variants<AlphaColor>
}
export default palette

export type Color = {
	/**
	 * Formatted hex value
	 * @example #ebbcba
	 */
	hex: string
	/**
	 * Formatted rgb value
	 * @example [235, 188, 186]
	 */
	rgb: number[]
	/**
	 * Formatted hsl value
	 * @example [2, 55, 83]
	 */
	hsl: number[]
}

export type AlphaColor = {
	alpha: Color
} & Color

export type Roles<T, U> = {
	/**
	 * Background
	 * - Primary background
	 */
	base: T
	/**
	 * Background
	 * - Elements directly atop {@link Roles.base }
	 */
	surface: T
	/**
	 * Background
	 * - Elements directly atop {@link Roles.surface}
	 */
	overlay: T
	/**
	 * Foreground
	 * - Low-contrast elements
	 * - Ignored git folders
	 */
	muted: T
	/**
	 * Foreground
	 * - Mid-contrast elements
	 * - Comments, punctuation, etc.
	 */
	subtle: T
	/**
	 * Foreground
	 * - High-contrast elements
	 * - Text, variables, etc.
	 */
	text: T
	love: T
	gold: T
	rose: T
	pine: T
	foam: T
	iris: T
	/**
	 * Highlight background
	 * - Low-contrast selection
	 */
	highlightLow: U
	/**
	 * Highlight background
	 * - Mid-contrast selection
	 */
	highlightMed: U
	/**
	 * Highlight background
	 * - High-contrast selection
	 */
	highlightHigh: U
}

export type Variants<T> = {
	/**
	 * Low-contrast dark variant
	 */
	main: T
	/**
	 * Mid-contrast dark variant
	 */
	moon: T
	/**
	 * Mid-contrast light variant
	 */
	dawn: T
}

declare namespace palette {
	/**
	 * Palette variants
	 */
	const variants: Variants<Roles<Color, AlphaColor>>
	/**
	 * Palette roles
	 */
	const roles: Roles<Variants<Color>, Variants<Color>>
}
