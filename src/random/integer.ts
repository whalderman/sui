/**
 * @module random/integer
 * Provides utilities for generating random and pseudo-random integers.
 */

/**
 * Returns a pseudo-random integer between the specified `min` and `max`
 * values, inclusive of `min` and exclusive of `max`. If `min` and `max`
 * are equal, returns `min`. If `min` is greater than `max`, the values
 * are swapped.
 *
 * @param min - The lower bound of the range (inclusive). Default `0`.
 * @param max - The upper bound of the range (exclusive). Default `Number.MAX_SAFE_INTEGER`.
 * @returns A random integer between `min` (inclusive) and `max` (exclusive).
 */
export function intBetween(min = 0, max = Number.MAX_SAFE_INTEGER): number {
	if ((max - min) > Number.MAX_SAFE_INTEGER) {
		console.warn(
			`The range ${min}..${max} is greater than the maximum safe integer (${Number.MAX_SAFE_INTEGER}).`,
		);
	}
	if (min === max) {
		return min;
	}
	if (min > max) {
		[min, max] = [max, min];
	}
	const range = max - min;
	const randomNum = Math.random() * range;
	const randomNumWithinRange = min + randomNum;
	return Math.trunc(randomNumWithinRange);
}

/**
 * @returns A pseudo-random unsigned 8-bit integer.
 */
export function randomU8() {
	return Math.random() * 256 | 0;
}

/**
 * @returns A pseudo-random unsigned 16-bit integer.
 */
export function randomU16() {
	return Math.random() * 65536 | 0;
}

/**
 * @returns A pseudo-random unsigned 32-bit integer.
 */
export function randomU32() {
	return Math.random() * 4294967296 | 0;
}

/**
 * @remarks Generating a pseudo-random integer with an exponent `> 53` will result in lost accuracy. An exponent `>= 1024` will always return Infinity.
 *
 * @returns A random unsigned `n`-bit integer, or `Infinity`.
 */
export function randomUInt(n: number) {
	return Math.trunc(Math.random() * 2 ** n);
}
