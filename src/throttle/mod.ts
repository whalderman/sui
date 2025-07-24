/**
 * @module throttle
 * Provides utilities for throttling asynchronous operations.
 */

import { intBetween } from "@wjh/random/integer";

/**
 * Creates an async generator that yields throttle intervals and allows dynamic adjustment of throttling strategy.
 *
 * This generator enforces a minimum delay (`throttleMillis`) between yields, which can be dynamically adjusted
 * using the provided strategies: "backoff", "speedup", or "override". The throttle interval increases with "backoff",
 * decreases with "speedup", or is set directly with "override". The generator ensures the interval stays within
 * the provided bounds.
 *
 * @param options - Configuration options for the throttle generator.
 * @param options.defaultThrottleMillis - The default throttle interval in milliseconds. Must be non-zero.
 * @param options.backoffMultiplier - The multiplier used to increase or decrease the throttle interval. Defaults to 2.
 * @param options.maxThrottleMillis - The maximum allowed throttle interval in milliseconds. Must be non-zero.
 *
 * @yields An object containing the latest throttle interval in milliseconds: `{ latestThrottleMillis: number }`.
 *         Yields `undefined` if no update is available.
 *
 * @param next - (via `.next()`) An optional object to adjust the throttling strategy:
 *   - `{ strategy: "backoff" | "speedup" }` to increase or decrease the interval.
 *   - `{ strategy: "override"; overrideMillis: number }` to set a specific interval.
 *   - `undefined` to reset to the default interval.
 *
 * @throws {Error} If `defaultThrottleMillis` or `maxThrottleMillis` is `undefined`, `0`, or less than `0`.
 *
 * @example
 * ```typescript
 * const throttle = create({ defaultThrottleMillis: 1000, maxThrottleMillis: 10000 });
 * for await (const { latestThrottleMillis } of throttle) {
 *   // Do work...
 *   // Optionally adjust throttle: throttle.next({ strategy: "backoff" });
 * }
 * ```
 */
export async function* create(
	{
		defaultThrottleMillis,
		backoffMultiplier = 2,
		maxThrottleMillis,
	}: CreateThrottleOptions,
): AsyncGenerator<
	{ latestThrottleMillis: number } | undefined,
	void,
	| { strategy: "backoff" | "speedup" }
	| { strategy: "override"; overrideMillis: number }
	| undefined
> {
	if (!defaultThrottleMillis || defaultThrottleMillis <= 0) {
		throw new Error(
			"defaultThrottleMillis is required and must be a positive number.",
		);
	}
	if (!maxThrottleMillis || maxThrottleMillis <= 0) {
		throw new Error(
			"maxThrottleMillis is required and must be a positive number.",
		);
	}

	let throttleMillis = defaultThrottleMillis;
	let lastYieldTimeMillis = 0;

	while (true) {
		const currentTimeMillis = Date.now();
		const millisSinceLastYield = currentTimeMillis - lastYieldTimeMillis;

		if (millisSinceLastYield >= throttleMillis) {
			lastYieldTimeMillis = currentTimeMillis;
		} else {
			const remainingThrottleMillis = throttleMillis -
				millisSinceLastYield;
			console.log(
				"Throttling for %s seconds...",
				(remainingThrottleMillis / 1000).toFixed(2),
			);
			await new Promise((res) => setTimeout(res, remainingThrottleMillis));
			lastYieldTimeMillis = Date.now();
		}
		const next = yield { latestThrottleMillis: throttleMillis };
		switch (next?.strategy) {
			case "backoff": {
				const backoffThrottleMillis = throttleMillis * backoffMultiplier +
					intBetween(1, 1000);
				throttleMillis = Math.min(
					maxThrottleMillis,
					backoffThrottleMillis,
				);
				break;
			}

			case "speedup": {
				const speedupThrottleMillis = throttleMillis / backoffMultiplier +
					intBetween(1, 1000);
				throttleMillis = Math.max(
					defaultThrottleMillis,
					speedupThrottleMillis,
				);
				break;
			}

			case "override":
				throttleMillis = next.overrideMillis;
				break;

			default:
				throttleMillis = defaultThrottleMillis;
				break;
		}

		throttleMillis = Math.trunc(throttleMillis);
	}
}

export { create as createThrottle };

export interface CreateThrottleOptions {
	defaultThrottleMillis: number;
	maxThrottleMillis: number;
	backoffMultiplier?: number;
}

export type ThrottleOptions =
	| "backoff"
	| "speedup"
	| { strategy: "backoff" | "speedup" }
	| { strategy: "override"; overrideMillis: number };
