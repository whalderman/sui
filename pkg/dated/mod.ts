/**
 * An enum matching Weekday values as returned by methods in the `Date`
 * object.
 *
 * @privateRemarks
 * While a plain object is possible, enums allow for concise types.
 */
export enum Weekday {
	Sunday,
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
}

declare global {
	interface Date {
		getDay(): Weekday;
		getUTCDay(): Weekday;
	}
}

/**
 * An enum matching Month values as returned by methods in the `Date`
 * object.
 *
 * @privateRemarks
 * While a plain object is possible, enums allow for concise types.
 */
export enum Month {
	January,
	February,
	March,
	April,
	May,
	June,
	July,
	August,
	September,
	October,
	November,
	December,
}

declare global {
	interface Date {
		getMonth(): Month;
		getUTCMonth(): Month;
	}
}

export type ISO8601UTCString =
	`${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;

declare global {
	interface Date {
		getISOString(): ISO8601UTCString;
	}
}
