/**
 * @module random/bytes
 * Provides utilities for generating crytographically secure and random
 * byte arrays.
 */

/**
 * Generates a new `RandomByteArray` instance seeded with
 * cryptographically secure random bytes.
 *
 * @param length - The number of random bytes to generate.
 * @returns A `RandomByteArray` instance initialized with the generated
 * random bytes.
 */
export function generate(length: number): RandomByteArray {
	return new RandomByteArray(length);
}
export { generate as generateRandomBytes };

/**
 * The `RandomByteArray` class provides utilities for representing and
 * encoding random byte arrays in various string formats.
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
class RandomByteArray extends Uint8Array {
	constructor(length: number) {
		super(length);
		crypto.getRandomValues(this);
	}

	/**
	 * @returns A binary-encoded string (e.g. `"10010010100100101001001010101010"`).
	 * @remarks Does not include the `0b` prefix.
	 */
	toBinary(): string {
		let b = "", i = 0;
		for (; i < this.length; i++) {
			b += this[i].toString(2);
		}
		return b;
	}

	/**
	 * @returns An octal-encoded string (e.g. `"1776"`).
	 * @remarks Does not include the `0o` prefix.
	 */
	toOctal(): string {
		let o = "", i = 0;
		for (; i < this.length; i++) {
			o += this[i].toString(8);
		}
		return o;
	}

	/**
	 * @returns A hex-encoded string (e.g. `"faf0"`).
	 * @remarks Does not include the `0x` prefix.
	 */
	toHex(): string {
		let h = "", i = 0;
		for (; i < this.length; i++) {
			h += this[i].toString(16);
		}
		return h;
	}

	/**
	 * @param radix The base radix to use. Must be between`2` and `36`
	 * inclusive.
	 * @returns A hex-encoded string (e.g. `"faf0"`).
	 */
	toBaseN(radix: Radix): string {
		let s = "", i = 0;
		for (; i < this.length; i++) {
			s += this[i].toString(radix);
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
