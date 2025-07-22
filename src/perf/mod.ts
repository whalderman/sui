export class Timer {
	/**
	 * Creates and starts a new Timer.
	 */
	static start(label: string) {
		return new Timer(label);
	}

	constructor(readonly label: string) {
		console.time(this.label);
	}

	/**
	 * Logs data to the console, prefixed with with current timer value.
	 */
	log(...data: unknown[]) {
		console.timeLog(this.label, data);
		return this;
	}

	/**
	 * Stops the Timer.
	 */
	end() {
		console.timeEnd(this.label);
		return this;
	}
}

/**
 * Creates and starts a new `Timer`.
 *
 * This is equivalent to `Timer.start(label)` or
 * `new Timer(label).start()`.
 *
 * @param label A label for the Timer.
 * @returns A new Timer.
 *
 * @example
 * track("half-life")
 * // equivalent to
 * Timer.start("half-life")
 * new Timer("half-life")
 */
export function track(label: string) {
	return new Timer(label);
}
