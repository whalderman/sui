import { assert, assertMatch, assertStrictEquals } from "@std/assert";
import { RandomU8Array } from "./bytes.ts";

Deno.test("randomization mutates the underlying buffer", () => {
	const len = 1024;
	const bytes = RandomU8Array.ofLength(len);
	const bytesCopy = bytes.slice();
	const sameBytesRef = bytes.randomize();
	assertStrictEquals(bytes, sameBytesRef);
	// This can potentially return true, but is almost certainly not going to happen
	assert(bytes.some((byte, idx) => bytesCopy[idx] !== byte));

	const bytesSecure = RandomU8Array.ofLength(len);
	const bytesCopySecure = bytesSecure.slice();
	const sameBytesRefSecure = bytesSecure.randomize();
	assertStrictEquals(bytesSecure, sameBytesRefSecure);
	// This can potentially return true, but is almost certainly not going to happen
	assert(bytesSecure.some((byte, idx) => bytesCopySecure[idx] !== byte));
});

Deno.test("string formatting is correct", () => {
	const bytes = RandomU8Array.ofLength(2);
	assertMatch(bytes.toBinary(), /[01]+/);
	assertMatch(bytes.toOctal(), /[0-7]+/);
	assertMatch(bytes.toHex(), /[0-9a-f]+/);
	assertMatch(bytes.toBaseN(36), /[0-9a-z]+/);
});
