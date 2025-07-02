/**
 * @module regex/ja
 * Provides regular expressions and patterns for Japanese characters.
 * Commonly used in `HTMLInputElement` `pattern` attributes and for
 * custom verfication of HTML `form` elements.
 */

const hanRange: string = String.raw`\u3400-\u4DBF\u4E00-\u9FFF`;
/** @example /^[\u3400-\u4DBF\u4E00-\u9FFF]+$/u */
const hanOnly: RegExp = new RegExp(`^[${hanRange}]+$`, "u");
/** @example /[\u3400-\u4DBF\u4E00-\u9FFF]/u */
const han: RegExp = new RegExp(`[${hanRange}]`, "u");

const hiraRange: string = String.raw`\u3040-\u309F`;
/** @example /^[\u3040-\u309F]+$/u */
const hiraOnly: RegExp = new RegExp(`^[${hiraRange}]+$`, "u");
/** @example /[\u3040-\u309F]/u */
const hira: RegExp = new RegExp(`[${hiraRange}]`, "u");

const kanaFullWidthRange: string = String.raw`\u30A0-\u30FF`;
/** @example /^[\u30A0-\u30FF]+$/u */
const kanaFullWidthOnly: RegExp = new RegExp(`^[${kanaFullWidthRange}]+$`, "u");
/** @example /[\u30A0-\u30FF]/u */
const kanaFullWidth: RegExp = new RegExp(`[${kanaFullWidthRange}]`, "u");

const kanaHalfWidthRange: string = String.raw`\uFF65-\uFF9F`;
/** @example /^[\uFF65-\uFF9F]+$/u */
const kanaHalfWidthOnly: RegExp = new RegExp(`^[${kanaHalfWidthRange}]+$`, "u");
/** @example /[\uFF65-\uFF9F]/u */
const kanaHalfWidth: RegExp = new RegExp(`[${kanaHalfWidthRange}]`, "u");

const kanaRange = kanaFullWidthRange + kanaHalfWidthRange;
/** @example /^[\u30A0-\u30FF\uFF65-\uFF9F]+$/u */
const kanaOnly: RegExp = new RegExp(`^[${kanaRange}]+$`, "u");
/** @example /[\u30A0-\u30FF\uFF65-\uFF9F]/u */
const kana: RegExp = new RegExp(`[${kanaRange}]`, "u");

const romajiHalfWidthRange = "A-Za-z";
/** @example /^[A-Za-z]+$/ */
const romajiHalfWidthOnly: RegExp = new RegExp(`^[${romajiHalfWidthRange}]+$`);
/** @example /[A-Za-z]/u */
const romajiHalfWidth: RegExp = new RegExp(`[${romajiHalfWidthRange}]`, "u");

const romajiFullWidthRange: string = String.raw`\uFF21-\uFF3A\uFF41-\uFF5A`;
/** @example /^[\uFF21-\uFF3A\uFF41-\uFF5A]+$/u */
const romajiFullWidthOnly: RegExp = new RegExp(
	`^[${romajiFullWidthRange}]+$`,
	"u",
);
/** @example /[\uFF21-\uFF3A\uFF41-\uFF5A]/u */
const romajiFullWidth: RegExp = new RegExp(`[${romajiFullWidthRange}]`, "u");

const romajiRange = romajiHalfWidthRange + romajiFullWidthRange;
/** @example /^[A-Za-z\uFF21-\uFF3A\uFF41-\uFF5A]+$/u */
const romajiOnly: RegExp = new RegExp(`^[${romajiRange}]+$`, "u");
/** @example /[A-Za-z\uFF21-\uFF3A\uFF41-\uFF5A]/u */
const romaji: RegExp = new RegExp(`[${romajiRange}]`, "u");

const digitHalfWidthRange: string = String.raw`\d`;
/** @example /^\d+$/ */
const digitHalfWidthOnly: RegExp = /^\d+$/;
/** @example /\d/ */
const digitHalfWidth: RegExp = /\d/;

const digitFullWidthRange: string = String.raw`０-９`;
/** @example /^[０-９]+$/u */
const digitFullWidthOnly: RegExp = /^[０-９]+$/u;
/** @example /[０-９]/u */
const digitFullWidth: RegExp = /[０-９]/u;

const digitRange = digitHalfWidthRange + digitFullWidthRange;
/** @example /^[\d０-９]+$/u */
const digitOnly: RegExp = /^[\d０-９]+$/u;
/** @example /[\d０-９]/u */
const digit: RegExp = /[\d０-９]/u;

const whitespaceHalfWidthRange = " ";
/** @example /^ +$/ */
/** @example / / */
const whitespaceHalfWidth: RegExp = / /;

const whitespaceFullWidthRange: string = String.raw`\u3000`;
/** @example /\u3000/u */
const whitespaceFullWidth: RegExp = /\u3000/u;

const whitespaceRange: string = String
	.raw`\t\n\v\f\r \u0085\u00A0\u1680\u180E\u2000-\u200A\u2028-\u202F\u205F\u2060\u3000\uFEFF`;
/** @example /[\t\n\v\f\r \u0085\u00A0\u1680\u180E\u2000-\u200A\u2028-\u202F\u205F\u2060\u3000\uFEFF]/u */
const whitespace: RegExp =
	/[\t\n\v\f\r \u0085\u00A0\u1680\u180E\u2000-\u200A\u2028-\u202F\u205F\u2060\u3000\uFEFF]/u;

/**
 * An object containing predicate functions to test if a string consists
 * only of specific character sets.
 */
const only = {
	/** Han (Kanji) characters. Equivalent to `fullWidth.han`. */
	han: hanOnly,
	/** Hiragana characters. Equivalent to `fullWidth.hira`. */
	hira: hiraOnly,
	/** Kana (Hiragana or Katakana) characters. */
	kana: kanaOnly,
	/** Romaji (Latin alphabet) characters. */
	romaji: romajiOnly,
	/** digit characters. */
	digit: digitOnly,
	/** An object containing predicates for full-width character sets: */
	fullWidth: {
		/** full-width Han characters. Equivalent to `only.han`. */
		han: hanOnly,
		/** full-width Hiragana characters. Equivalent to `only.hira`. */
		hira: hiraOnly,
		/** full-width Kana characters. */
		kana: kanaFullWidthOnly,
		/** full-width Romaji characters. */
		romaji: romajiFullWidthOnly,
		/** full-width digit characters. */
		digit: digitFullWidthOnly,
	},
	/** An object containing predicates for half-width character sets: */
	halfWidth: {
		/** half-width Kana characters. */
		kana: kanaHalfWidthOnly,
		/** half-width Romaji characters. */
		romaji: romajiHalfWidthOnly,
		/** half-width digit characters. */
		digit: digitHalfWidthOnly,
	},
};

/**
 * An object mapping character sets to their corresponding half-width
 * regular expressions.
 */
const halfWidth = {
	/** Half-width kana characters. */
	kana: kanaHalfWidth,
	/** Half-width romaji (Latin alphabet) characters. */
	romaji: romajiHalfWidth,
	/** Half-width digit characters. */
	digit: digitHalfWidth,
	/** Half-width whitespace characters. */
	whitespace: whitespaceHalfWidth,
};

/**
 * An object containing patterns for handling full-width character sets.
 */
const fullWidth = {
	/** Full-width Han (Chinese) characters. */
	han,
	/** Full-width Hiragana characters. */
	hira,
	/** Full-width Katakana characters. */
	kana: kanaFullWidth,
	/** Full-width Romaji (Latin) characters. */
	romaji: romajiFullWidth,
	/** Full-width digits. */
	digit: digitFullWidth,
	/** Full-width whitespace characters. */
	whitespace: whitespaceFullWidth,
};

/**
 * An object containing predefined character set constants for text processing.
 * Each property represents a specific character set or category, such as:
 */
export const predefined = {
	only,
	halfWidth,
	fullWidth,
	han,
	hira,
	kana,
	romaji,
	digit,
	whitespace,
};
export { predefined as regexPredefined };

const regExpCharRangeByName = {
	han: hanRange,
	hira: hiraRange,
	kanaFullWidth: kanaFullWidthRange,
	kanaHalfWidth: kanaHalfWidthRange,
	kana: kanaRange,
	romajiHalfWidth: romajiHalfWidthRange,
	romajiFullWidth: romajiFullWidthRange,
	romaji: romajiRange,
	digitHalfWidth: digitHalfWidthRange,
	digitFullWidth: digitFullWidthRange,
	digit: digitRange,
	whitespaceHalfWidth: whitespaceHalfWidthRange,
	whitespaceFullWidth: whitespaceFullWidthRange,
	whitespace: whitespaceRange,
};
type PredefinedRangeName = keyof typeof regExpCharRangeByName | (string & {});

function isPredefinedRangeName(
	s: string,
): s is keyof typeof regExpCharRangeByName {
	return s in regExpCharRangeByName;
}

function buildRegex(
	...classNamesOrCustomRegExpStrings: PredefinedRangeName[]
): string {
	let re = "";
	for (const rangeNameOrRegExpString of classNamesOrCustomRegExpStrings) {
		if (isPredefinedRangeName(rangeNameOrRegExpString)) {
			re += regExpCharRangeByName[
				rangeNameOrRegExpString
			];
		} else {
			re += rangeNameOrRegExpString;
		}
	}
	return re;
}

/**
 * Builds a Unicode regular expression that matches any character from
 * the provided class names or custom regular expression strings.
 *
 * @param classNamesOrCustomRegExpStrings - A list of class names or
 * custom regular expression strings to include in the character set.
 * @returns A `RegExp` object that matches any character from the
 * specified classes or custom patterns.
 */
export function create(
	...classNamesOrCustomRegExpStrings: PredefinedRangeName[]
): RegExp {
	const reStr = `[${buildRegex(...classNamesOrCustomRegExpStrings)}]`;
	return new RegExp(reStr, "u");
}

/**
 * Builds a strict regular expression that matches a string composed
 * entirely of characters from the specified Unicode range names or
 * custom regular expression strings.
 *
 * @param namesOrRegExpStrings - One or more Unicode range names or
 * custom regular expression strings to include in the character set.
 * @returns A `RegExp` instance that matches strings containing only the
 * specified characters.
 *
 * @example
 * ```typescript
 * const re = buildRegExpToMatchStrict('romaji', 'hira');
 * re.test('abc'); // true
 * re.test('ａｂｃ'); // true
 * re.test('えぃびぃしぃ'); // true
 * re.test('エィビィシィ'); // false
 * ```
 */
export function createStrict(
	...namesOrRegExpStrings: PredefinedRangeName[]
): RegExp {
	const reStr = `^[${buildRegex(...namesOrRegExpStrings)}]+$`;
	return new RegExp(reStr, "u");
}

export {
	create as createRegExpToMatch,
	createStrict as createStrictRegExpToMatch,
};
