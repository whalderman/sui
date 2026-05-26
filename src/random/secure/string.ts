/**
 * @module random/string
 * Provides utilities for generating cryptographically secure, random strings.
 */

/**
 * Generates a new cryptographically secure, random string of UTF-16 code units.
 *
 * @param n - The number of random 16-bit code units to generate.
 * @returns A random string of the specified length.
 */
export function ofLength(n: number): string {
	return String.fromCharCode(...crypto.getRandomValues(new Uint16Array(n)));
}
