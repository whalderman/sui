import { assertStrictEquals } from "@std/assert";
import * as calc from "./mod.ts";

Deno.test("sums correctly", async () => {
	assertStrictEquals(calc.sumCollect(1, 2, 3), 6);
	assertStrictEquals(calc.sumIterable([1, 2, 3]), 6);
	assertStrictEquals(
		await calc.sumAsyncIterable((async function* () {
			await Promise.resolve();
			yield 1;
			await Promise.resolve();
			yield 2;
			await Promise.resolve();
			yield 3;
		})()),
		6,
	);
	assertStrictEquals([1, 2, 3].reduce(calc.reducer.toSum), 6);
});

Deno.test("averages correctly", async () => {
	assertStrictEquals(calc.avgCollect(1, 2, 3), 2);
	assertStrictEquals(calc.avgIterable([1, 2, 3]), 2);
	assertStrictEquals(
		await calc.avgAsyncIterable((async function* () {
			await Promise.resolve();
			yield 1;
			await Promise.resolve();
			yield 2;
			await Promise.resolve();
			yield 3;
		})()),
		2,
	);
	assertStrictEquals([1, 2, 3].reduce(calc.reducer.toAvg), 2);
});
