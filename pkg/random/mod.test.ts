import { assertEquals, assertMatch } from "@std/assert";
import * as random from "./mod.ts";

Deno.test("bytes are generated with proper length", () => {
	const len = 8;
	const bytes = random.bytes.generate(len);
	assertEquals(bytes.length, len);
});

Deno.test("Random class string formatting is correctly formatted", () => {
	const bytes = random.bytes.generate(2);
	assertMatch(bytes.toBinary(), /[01]+/);
	assertMatch(bytes.toBaseN(4), /[0-3]+/);
	assertMatch(bytes.toOctal(), /[0-7]+/);
	assertMatch(bytes.toHex(), /[0-9a-f]+/);
});
