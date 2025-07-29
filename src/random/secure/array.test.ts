import { assert, assertMatch, assertStrictEquals } from "@std/assert";
import { RandomU16Array, RandomU32Array, RandomU8Array } from "./array.ts";

Deno.test("randomization mutates the underlying buffer", () => {
	const len = 1024;

	const u8Arr = RandomU8Array.ofLength(len);
	const u8ArrCopy = u8Arr.slice();
	const u8ArrMutated = u8Arr.randomize();
	assertStrictEquals(u8Arr, u8ArrMutated);
	// This can potentially return true, but is almost certainly not going to happen
	assert(u8Arr.some((byte, idx) => u8ArrCopy[idx] !== byte));

	const u16Arr = RandomU16Array.ofLength(len);
	const u16ArrCopy = u16Arr.slice();
	const u16ArrMutated = u16Arr.randomize();
	assertStrictEquals(u16Arr, u16ArrMutated);
	// This can potentially return true, but is almost certainly not going to happen
	assert(u16Arr.some((byte, idx) => u16ArrCopy[idx] !== byte));

	const u32Arr = RandomU32Array.ofLength(len);
	const u32ArrCopy = u32Arr.slice();
	const u32ArrMutated = u32Arr.randomize();
	assertStrictEquals(u32Arr, u32ArrMutated);
	// This can potentially return true, but is almost certainly not going to happen
	assert(u32Arr.some((byte, idx) => u32ArrCopy[idx] !== byte));
});

Deno.test("string formatting is correct", () => {
	const u8Arr = RandomU8Array.ofLength(2);
	assertMatch(u8Arr.toBinary(), /[01]+/);
	assertMatch(u8Arr.toOctal(), /[0-7]+/);
	assertMatch(u8Arr.toHex(), /[0-9a-f]+/);
	assertMatch(u8Arr.toBaseN(36), /[0-9a-z]+/);
	const u16Arr = RandomU8Array.ofLength(2);
	assertMatch(u16Arr.toBinary(), /[01]+/);
	assertMatch(u16Arr.toOctal(), /[0-7]+/);
	assertMatch(u16Arr.toHex(), /[0-9a-f]+/);
	assertMatch(u16Arr.toBaseN(36), /[0-9a-z]+/);
	const u32Arr = RandomU8Array.ofLength(2);
	assertMatch(u32Arr.toBinary(), /[01]+/);
	assertMatch(u32Arr.toOctal(), /[0-7]+/);
	assertMatch(u32Arr.toHex(), /[0-9a-f]+/);
	assertMatch(u32Arr.toBaseN(36), /[0-9a-z]+/);
});
