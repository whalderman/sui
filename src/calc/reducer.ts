/**
 * A reducer function for use in:
 * - `Array.reduce`
 * - `IteratorObject.reduce`
 * - etc.
 *
 * Reduces iterable numbers into a total sum.
 */
export function toSum(sum: number, num: number): number {
	return sum + num;
}

/**
 * A reducer function for use in:
 * - `Array.reduce`
 * - `IteratorObject.reduce`
 * - etc.
 *
 * Reduces iterable numbers into a total average.
 */
export function toAverage(avg: number, num: number, idx: number): number {
	return avg + (num - avg) / (idx + 1);
}
export { toAverage as toAvg };
