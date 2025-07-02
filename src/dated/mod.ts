/**
 * @module dated
 * Provides enums for easy `Date` `getDay`, `getUTCDay`, `getMonth`, and
 * `getUTCMonth` validation.
 */

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
