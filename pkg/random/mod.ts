/**
 * Generates a new `Random` instance seeded with cryptographically
 * secure random bytes.
 *
 * @param length - The number of random bytes to generate.
 * @returns A `Random` instance initialized with the generated random bytes.
 */
export function bytes(length: number): RandomByteArray {
	return new RandomByteArray(length);
}

/**
 * Returns a random integer between the specified `min` and `max`
 * values, inclusive of `min` and exclusive of `max`. If `min` and `max`
 * are equal, returns `min`. If `min` is greater than `max`, the values
 * are swapped.
 *
 * @param min - The lower bound of the range (inclusive).
 * @param max - The upper bound of the range (exclusive).
 * @returns A random integer between `min` (inclusive) and `max` (exclusive).
 */
export function intBetween(min: number, max: number): number {
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

export { bytes as randomBytes, intBetween as randomIntBetween };

/**
 * The `Random` class provides utilities for representing and encoding random byte arrays
 * in various string formats, such as binary, octal, hexadecimal, and arbitrary radix.
 *
 * @example
 * ```typescript
 * const r = new Random(new Uint8Array([255, 16]));
 * console.log(r.toHex()); // "ff10"
 * ```
 *
 * @remarks
 * - The class expects a `Uint8Array` as input.
 * - String output does **not** include prefix (e.g., `0b`, `0o`, `0x`).
 *
 * @public
 */
class RandomByteArray {
	static bytes = bytes;

	readonly array: Uint8Array;
	constructor(readonly length: number) {
		this.array = crypto.getRandomValues(new Uint8Array(length));
	}

	/**
	 * @returns A binary-encoded string (e.g. `"10010010100100101001001010101010"`).
	 * @remarks Does not include the `0b` prefix.
	 */
	toBinary(): string {
		let b = "", i = 0;
		for (; i < this.array.length; i++) {
			b += this.array[i].toString(2);
		}
		return b;
	}

	/**
	 * @returns An octal-encoded string (e.g. `"1776"`).
	 * @remarks Does not include the `0o` prefix.
	 */
	toOctal(): string {
		let o = "", i = 0;
		for (; i < this.array.length; i++) {
			o += this.array[i].toString(8);
		}
		return o;
	}

	/**
	 * @returns A hex-encoded string (e.g. `"faf0"`).
	 * @remarks Does not include the `0x` prefix.
	 */
	toHex(): string {
		let h = "", i = 0;
		for (; i < this.array.length; i++) {
			h += this.array[i].toString(16);
		}
		return h;
	}

	/**
	 * @param radix The base radix to use. Must be between`2` and `36` inclusive.
	 * @returns A hex-encoded string (e.g. `"faf0"`).
	 */
	toBaseN(radix: Radix): string {
		let s = "", i = 0;
		for (; i < this.array.length; i++) {
			s += this.array[i].toString(radix);
		}
		return s;
	}
}

type Radix =
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25
	| 26
	| 27
	| 28
	| 29
	| 30
	| 31
	| 32
	| 33
	| 34
	| 35
	| 36;
