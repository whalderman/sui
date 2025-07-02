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
export function generate(min = 0, max = Number.MAX_SAFE_INTEGER): number {
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

export { generate as generateInt, generate as generateInteger };
