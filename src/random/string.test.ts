import { assertNotStrictEquals, assertStrictEquals } from "@std/assert";
import * as string from "./string.ts";
import * as secure_string from "./secure/string.ts";

Deno.test("string.ofLength returns a string of the specified length", () => {
	const len = 8;
	const str = string.ofLength(len);
	assertStrictEquals(str.length, len);
});

Deno.test("secure.string.ofLength returns a string of the specified length", () => {
	const len = 8;
	const str = secure_string.ofLength(len);
	assertStrictEquals(str.length, len);
});

Deno.test("string.ofLength returns a string of random characters", () => {
	const len = 8;
	const str1 = string.ofLength(len);
	const str2 = string.ofLength(len);
	assertNotStrictEquals(str1, str2);
});
