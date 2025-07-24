export * as reducer from "./reducer.ts";

/**
 * Collects variadic arguments into a total sum.
 */
export function sumCollect(...numbers: number[]): number {
	let sum = 0, num: number;
	for (num of numbers) {
		sum += num;
	}
	return sum;
}

/**
 * Calculates the total sum of an iterable collection of numbers.
 */
export function sumIterable(iterable: Iterable<number>): number {
	let sum = 0, num: number;
	for (num of iterable) {
		sum += num;
	}
	return sum;
}

/**
 * Calculates the total sum of an async iterable collection of numbers.
 */
export async function sumAsyncIterable(
	asyncIterable: AsyncIterable<number>,
): Promise<number> {
	let sum = 0, num: number;
	for await (num of asyncIterable) {
		sum += num;
	}
	return sum;
}

/**
 * Calculates the combined average of an iterable collection of numbers.
 */
export function avgIterable(numbers: Iterable<number>): number {
	let avg = 0, num = 0, idx = 0;
	for (num of numbers) {
		avg = avg + (num - avg) / (idx + 1);
		idx++;
	}
	return avg;
}

/**
 * Collects variadic arguments into a combined average.
 */
export function avgCollect(...numbers: number[]): number {
	const combinedSum = sumCollect(...numbers);
	if (combinedSum <= Number.MAX_SAFE_INTEGER) {
		return combinedSum / numbers.length;
	}
	// combined sum greater than Number.MAX_SAFE_INTEGER, need to do running calculation to avoid accuracy loss
	return avgIterable(numbers);
}

/**
 * Calculates the combined average of an async iterable collection of
 * numbers.
 */
export async function avgAsyncIterable(
	numbers: AsyncIterable<number>,
): Promise<number> {
	let avg = 0, num = 0, idx = 0;
	for await (num of numbers) {
		avg = avg + (num - avg) / (idx + 1);
		idx++;
	}
	return avg;
}
