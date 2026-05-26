/**
 * @module random
 * Provides utilities for generating random and pseudo-random integers
 * and byte arrays.
 */

export * from "./array.ts";
export * as integer from "./integer.ts";
export * as secure from "./secure/mod.ts";

import * as integer from "./integer.ts";

export function itemFrom<T>(array: ArrayLike<T>): T {
	return array[integer.between(0, array.length)];
}
