const hanRange = String.raw`\u4E00-\u9FFF\u3400-\u4DBF`;
/** @example /^[\u4E00-\u9FFF\u3400-\u4DBF]+$/u */
const hanOnly = new RegExp(`^[${hanRange}]+$`, "u");
/** @example /[\u4E00-\u9FFF\u3400-\u4DBF]/u */
const han = new RegExp(`[${hanRange}]`, "u");

const hiraRange = String.raw`\u3040-\u309F`;
/** @example /^[\u3040-\u309F]+$/u */
const hiraOnly = new RegExp(`^[${hiraRange}]+$`, "u");
/** @example /[\u4E00-\u9FFF\u3400-\u4DBF]/u */
const hira = new RegExp(`[${hiraRange}]`, "u");

const kanaFullWidthRange = String.raw`\u30A0-\u30FF`;
/** @example /^[\u30A0-\u30FF]+$/u */
const kanaFullWidthOnly = new RegExp(`^[${kanaFullWidthRange}]+$`, "u");
/** @example /[\u4E00-\u9FFF\u3400-\u4DBF]/u */
const kanaFullWidth = new RegExp(`[${kanaFullWidthRange}]`, "u");

const kanaHalfWidthRange = String.raw`\uFF65-\uFF9F`;
/** @example /^[\uFF65-\uFF9F]+$/u */
const kanaHalfWidthOnly = new RegExp(`^[${kanaHalfWidthRange}]+$`, "u");
/** @example /[\u4E00-\u9FFF\u3400-\u4DBF]/u */
const kanaHalfWidth = new RegExp(`[${kanaHalfWidthRange}]`, "u");

const kanaRange = kanaFullWidthRange + kanaHalfWidthRange;
/** @example /^[\u30A0-\u30FF\uFF65-\uFF9F]+$/u */
const kanaOnly = new RegExp(`^[${kanaRange}]+$`, "u");
/** @example /[\u4E00-\u9FFF\u3400-\u4DBF]/u */
const kana = new RegExp(`[${kanaRange}]`, "u");

const romajiHalfWidthRange = "A-Za-z";
/** @example /^[A-Za-z]+$/ */
const romajiHalfWidthOnly = new RegExp(`^[${romajiHalfWidthRange}]+$`);
/** @example /[\u4E00-\u9FFF\u3400-\u4DBF]/u */
const romajiHalfWidth = new RegExp(`[${romajiHalfWidthRange}]`, "u");

const romajiFullWidthRange = String.raw`\uFF21-\uFF3A\uFF41-\uFF5A`;
/** @example /^[\uFF21-\uFF3A\uFF41-\uFF5A]+$/u */
const romajiFullWidthOnly = new RegExp(
	`^[${romajiFullWidthRange}]+$`,
	"u",
);
/** @example /[\u4E00-\u9FFF\u3400-\u4DBF]/u */
const romajiFullWidth = new RegExp(`[${romajiFullWidthRange}]`, "u");

const romajiRange = romajiHalfWidthRange + romajiFullWidthRange;
/** @example /^[A-Za-z\uFF21-\uFF3A\uFF41-\uFF5A]+$/u */
const romajiOnly = new RegExp(`^[${romajiRange}]+$`, "u");
/** @example /[\u4E00-\u9FFF\u3400-\u4DBF]/u */
const romaji = new RegExp(`[${romajiRange}]`, "u");

const digitHalfWidthRange = String.raw`\d`;
/** @example /^\d+$/ */
const digitHalfWidthOnly = new RegExp(
	`^${digitHalfWidthRange}+$`,
);
/** @example /\d/ */
const digitHalfWidth = new RegExp(`[${digitHalfWidthRange}]`, "u");

const digitFullWidthRange = String.raw`\uFF10-\uFF19`;
/** @example /^[\uFF10-\uFF19]+$/u */
const digitFullWidthOnly = new RegExp(
	`^[${digitFullWidthRange}]+$`,
	"u",
);
/** @example /[\uFF10-\uFF19]/u */
const digitFullWidth = new RegExp(`[${digitFullWidthRange}]`, "u");

const digitRange = digitHalfWidthRange + digitFullWidthRange;
/** @example /^[\d\uFF10-\uFF19]+$/u */
const digitOnly = new RegExp(`^[${digitRange}]+$`, "u");
/** @example /[\d\uFF10-\uFF19]/u */
const digit = new RegExp(`[${digitRange}]`, "u");

const whitespaceHalfWidthRange = " ";
/** @example /^ +$/ */
/** @example / / */
const whitespaceHalfWidth = new RegExp(`${whitespaceHalfWidthRange}`, "u");

const whitespaceFullWidthRange = String.raw`\u3000`;
/** @example /\u3000/u */
const whitespaceFullWidth = new RegExp(`${whitespaceFullWidthRange}`, "u");

const whitespaceRange = String
	.raw`\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u180E\u2000-\u200A\u2028-\u202F\u205F\u2060\u3000\uFEFF`;
/** @example /[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u180E\u2000-\u200A\u2028-\u202F\u205F\u2060\u3000\uFEFF]/u */
const whitespace = new RegExp(`[${whitespaceRange}]`, "u");

export { predefined as regexPredefined };

const only = {
	han: hanOnly,
	hira: hiraOnly,
	kana: kanaOnly,
	romaji: romajiOnly,
	digit: digitOnly,
	fullWidth: {
		/** Equivalent to `only.han` */
		han: hanOnly,
		/** Equivalent to `only.hira` */
		hira: hiraOnly,
		kana: kanaFullWidthOnly,
		romaji: romajiFullWidthOnly,
		digit: digitFullWidthOnly,
	},
	halfWidth: {
		kana: kanaHalfWidthOnly,
		romaji: romajiHalfWidthOnly,
		digit: digitHalfWidthOnly,
	},
};

const halfWidth = {
	kana: kanaHalfWidth,
	romaji: romajiHalfWidth,
	digit: digitHalfWidth,
	whitespace: whitespaceHalfWidth,
};

const fullWidth = {
	han,
	hira,
	kana: kanaFullWidth,
	romaji: romajiFullWidth,
	digit: digitFullWidth,
	whitespace: whitespaceFullWidth,
};

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
type PredefinedRegExpName = keyof typeof regExpCharRangeByName | (string & {});

function buildRegex(
	...classNamesOrCustomRegExpStrings: PredefinedRegExpName[]
): string {
	let re = "";
	for (const rangeNameOrRegExpString of classNamesOrCustomRegExpStrings) {
		if (rangeNameOrRegExpString in regExpCharRangeByName) {
			// @ts-expect-error TypeScript can't handle this
			re += regExpCharRangeByName[rangeNameOrRegExpString];
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
export function build(
	...classNamesOrCustomRegExpStrings: PredefinedRegExpName[]
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
export function buildStrict(
	...namesOrRegExpStrings: PredefinedRegExpName[]
): RegExp {
	const reStr = `^[${buildRegex(...namesOrRegExpStrings)}]+$`;
	return new RegExp(reStr, "u");
}

export { build as buildRegExpToMatch, buildStrict as buildRegExpToMatchStrict };
