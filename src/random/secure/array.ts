import type { Radix } from "../array.ts";

/**
 * The `RandomU8Array` class provides utilities for representing
 * and encoding cryptographically secure random unsigned integer arrays in various
 * string formats.
 *
 * @example
 * ```typescript
 * const r = RandomU8Array.ofLength(2);
 * // or
 * // const r = new RandomU8Array(2);
 * console.log(r.toHex()); // "ff10"
 * ```
 *
 * @remarks String output does **not** include prefix (e.g., `0b`, `0o`, `0x`).
 */
export class RandomU8Array extends Uint8Array {
	static ofLength(length: number): RandomU8Array {
		return new RandomU8Array(length);
	}

	constructor(length: number) {
		super(length);
		this.randomize();
	}

	/**
	 * @remarks **Mutates the underlying buffer.**
	 * @returns the same RandomU8Array with each element randomized to a new random u8 value.
	 */
	randomize(): this {
		return crypto.getRandomValues(this);
	}

	/**
	 * @returns A binary-encoded string (e.g. `"10001000"`).
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
	 * @param radix The base radix to use. Must be between`2` and `36` inclusive.
	 * @returns A string representation of the underlying buffer in an arbitrary radix.
	 */
	toBaseN(radix: Radix): string {
		let s = "", i = 0;
		for (; i < this.length; i++) {
			s += this[i].toString(radix);
		}
		return s;
	}
}
/**
 * The `RandomU16Array` class provides utilities for representing
 * and encoding cryptographically secure random 16-bit unsigned integer arrays in
 * various string formats.
 *
 * @example
 * ```typescript
 * const r = RandomU16Array.ofLength(2);
 * // or
 * // const r = new RandomU16Array(2);
 * console.log(r.toHex()); // "ff10"
 * ```
 *
 * @remarks String output does **not** include prefix (e.g., `0b`, `0o`, `0x`).
 */
export class RandomU16Array extends Uint16Array {
	static ofLength(length: number): RandomU16Array {
		return new RandomU16Array(length);
	}

	constructor(length: number) {
		super(length);
		this.randomize();
	}

	/**
	 * @remarks **Mutates the underlying buffer.**
	 * @returns the same RandomU16Array with each element randomized to a new random u16 value.
	 */
	randomize(): this {
		return crypto.getRandomValues(this);
	}

	/**
	 * @returns A binary-encoded string (e.g. `"10001000"`).
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
	 * @param radix The base radix to use. Must be between`2` and `36` inclusive.
	 * @returns A string representation of the underlying buffer in an arbitrary radix.
	 */
	toBaseN(radix: Radix): string {
		let s = "", i = 0;
		for (; i < this.length; i++) {
			s += this[i].toString(radix);
		}
		return s;
	}
}
/**
 * The `RandomU32Array` class provides utilities for representing
 * and encoding cryptographically secure random 4-byte
 * arrays in various string formats.
 *
 * @example
 * ```typescript
 * const r = RandomU32Array.ofLength(2);
 * // or
 * // const r = new RandomU32Array(2);
 * console.log(r.toHex()); // "ff10"
 * ```
 *
 * @remarks String output does **not** include prefix (e.g., `0b`, `0o`, `0x`).
 */

export class RandomU32Array extends Uint32Array {
	static ofLength(length: number): RandomU32Array {
		return new RandomU32Array(length);
	}

	constructor(length: number) {
		super(length);
		this.randomize();
	}

	/**
	 * @remarks **Mutates the underlying buffer.**
	 * @returns the same RandomU32Array with each element randomized to a new random u32 value.
	 */
	randomize(): this {
		return crypto.getRandomValues(this);
	}

	/**
	 * @returns A binary-encoded string (e.g. `"10001000"`).
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
	 * @param radix The base radix to use. Must be between`2` and `36` inclusive.
	 * @returns A string representation of the underlying buffer in an arbitrary radix.
	 */
	toBaseN(radix: Radix): string {
		let s = "", i = 0;
		for (; i < this.length; i++) {
			s += this[i].toString(radix);
		}
		return s;
	}
}
