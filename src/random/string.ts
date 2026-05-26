/**
 * @module random/string
 * Provides utilities for generating pseudo-random strings.
 */

/**
 * Generates a new pseudo-random string of UTF-16 code units.
 *
 * @param n - The number of pseudo-random 16-bit code units to generate.
 * @returns A pseudo-random string of the specified length.
 */
export function ofLength(n: number): string {
	let s = "", i = n | 0;
	while (i--) {
		s += String.fromCharCode(Math.random() * 65536 | 0);
	}
	return s;
}

export { ofLength as randomStringOfLength };
