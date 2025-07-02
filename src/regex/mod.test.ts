import { assertMatch, assertNotMatch } from "@std/assert";
import * as regex from "./mod.ts";

Deno.test("predefined only.han RegExp matches correctly", () => {
	assertMatch("天元突破", regex.predefined.only.han);
	assertNotMatch("お前のドリルで天を衝け", regex.predefined.only.han);
});

Deno.test("predefined han RegExp matches correctly", () => {
	assertMatch("お前のドリルで天を衝け", regex.predefined.han);
	assertNotMatch("てんをつけ", regex.predefined.han);
});

Deno.test("predefined only.hira RegExp matches correctly", () => {
	assertMatch("てんをつけ", regex.predefined.only.hira);
	assertNotMatch("お前のドリルで天を衝け", regex.predefined.only.hira);
});

Deno.test("predefined hira RegExp matches correctly", () => {
	assertMatch("お前のドリルで天を衝け", regex.predefined.hira);
	assertNotMatch("ドリル", regex.predefined.hira);
});

Deno.test("predefined only.fullWidth.kana RegExp matches correctly", () => {
	assertMatch("ドリル", regex.predefined.only.fullWidth.kana);
	assertNotMatch("ﾄﾞﾘﾙ", regex.predefined.only.fullWidth.kana);
	assertNotMatch(
		"お前のドリルで天を衝け",
		regex.predefined.only.fullWidth.kana,
	);
});

Deno.test("predefined fullWidth.kana RegExp matches correctly", () => {
	assertMatch("お前のドリルで天を衝け", regex.predefined.fullWidth.kana);
	assertNotMatch("天を衝け", regex.predefined.fullWidth.kana);
});

Deno.test("predefined only.halfWidth.kana RegExp matches correctly", () => {
	assertMatch("ﾄﾞﾘﾙ", regex.predefined.only.halfWidth.kana);
	assertNotMatch("ドリル", regex.predefined.only.halfWidth.kana);
	assertNotMatch("お前のﾄﾞﾘﾙで天を衝け", regex.predefined.only.halfWidth.kana);
});

Deno.test("predefined halfWidth.kana RegExp matches correctly", () => {
	assertMatch("お前のﾄﾞﾘﾙで天を衝け", regex.predefined.halfWidth.kana);
	assertNotMatch("ドリル", regex.predefined.halfWidth.kana);
});

Deno.test("predefined only.kana RegExp matches correctly", () => {
	assertMatch("ﾄﾞリル", regex.predefined.only.kana);
	assertNotMatch("天を衝け", regex.predefined.only.kana);
});

Deno.test("predefined kana RegExp matches correctly", () => {
	assertMatch("お前のﾄﾞﾘﾙで天を衝け", regex.predefined.kana);
	assertMatch("お前のドリルで天を衝け", regex.predefined.kana);
	assertNotMatch("天を衝け", regex.predefined.kana);
});

Deno.test("predefined only.halfWidth.romaji RegExp matches correctly", () => {
	assertMatch("drill", regex.predefined.only.halfWidth.romaji);
	assertNotMatch(
		"お前のdrillで天を衝け",
		regex.predefined.only.halfWidth.romaji,
	);
});

Deno.test("predefined halfWidth.romaji RegExp matches correctly", () => {
	assertMatch("お前のdrillで天を衝け", regex.predefined.halfWidth.romaji);
	assertNotMatch(
		"お前のｄｒｉｌｌで天を衝け",
		regex.predefined.halfWidth.romaji,
	);
});

Deno.test("predefined only.fullWidth.romaji RegExp matches correctly", () => {
	assertMatch("ｄｒｉｌｌ", regex.predefined.only.fullWidth.romaji);
	assertNotMatch(
		"お前のdrillで天を衝け",
		regex.predefined.only.fullWidth.romaji,
	);
});

Deno.test("predefined fullWidth.romaji RegExp matches correctly", () => {
	assertMatch("ｄｒｉｌｌ", regex.predefined.fullWidth.romaji);
	assertMatch(
		"お前のｄｒｉｌｌで天を衝け",
		regex.predefined.fullWidth.romaji,
	);
	assertNotMatch("お前のdrillで天を衝け", regex.predefined.fullWidth.romaji);
});

Deno.test("predefined only.romaji RegExp matches correctly", () => {
	assertMatch("ｄｒｉｌｌ", regex.predefined.only.romaji);
	assertMatch("drill", regex.predefined.only.romaji);
	assertNotMatch("お前のｄｒｉｌｌで天を衝け", regex.predefined.only.romaji);
	assertNotMatch("お前のdrillで天を衝け", regex.predefined.only.romaji);
});

Deno.test("predefined romaji RegExp matches correctly", () => {
	assertMatch("ｄｒｉｌｌ", regex.predefined.romaji);
	assertMatch("お前のdrillで天を衝け", regex.predefined.romaji);
	assertNotMatch("お前のドリルで天を衝け", regex.predefined.romaji);
});

Deno.test("predefined only.halfWidth.digit RegExp matches correctly", () => {
	assertMatch("123", regex.predefined.only.halfWidth.digit);
	assertNotMatch("abc123", regex.predefined.only.halfWidth.digit);
	assertNotMatch("１２３", regex.predefined.only.halfWidth.digit);
});

Deno.test("predefined halfWidth.digit RegExp matches correctly", () => {
	assertMatch("abc123", regex.predefined.halfWidth.digit);
	assertNotMatch("abc１２３", regex.predefined.halfWidth.digit);
});

Deno.test("predefined only.fullWidth.digit RegExp matches correctly", () => {
	assertMatch("１２３", regex.predefined.only.fullWidth.digit);
	assertNotMatch("123", regex.predefined.only.fullWidth.digit);
	assertNotMatch("abc１２３", regex.predefined.only.fullWidth.digit);
});

Deno.test("predefined fullWidth.digit RegExp matches correctly", () => {
	assertMatch("１２３", regex.predefined.fullWidth.digit);
	assertMatch("abc１２３", regex.predefined.fullWidth.digit);
	assertNotMatch("123", regex.predefined.fullWidth.digit);
});

Deno.test("predefined only.digit RegExp matches correctly", () => {
	assertMatch("123１２３", regex.predefined.only.digit);
	assertNotMatch("abc123", regex.predefined.only.digit);
	assertNotMatch("abc１２３", regex.predefined.only.digit);
});

Deno.test("predefined digit RegExp matches correctly", () => {
	assertMatch("123", regex.predefined.digit);
	assertMatch("abc123", regex.predefined.digit);
	assertMatch("１２３", regex.predefined.digit);
	assertMatch("abc１２３", regex.predefined.digit);
	assertNotMatch("お前のドリルで天を衝け", regex.predefined.digit);
});

Deno.test("regular expressions are constructed correctly", () => {
	const hanStrictRe = regex.buildStrict("han");
	assertMatch("天元突破", hanStrictRe);
	assertNotMatch("天元突破グレンラガン", hanStrictRe);
	const hanKanaStrictRe = regex.buildStrict("han", "kana");
	assertMatch("天元突破グレンラガン", hanKanaStrictRe);
	assertNotMatch("お前のドリルで天を衝け", hanKanaStrictRe);
	const hanHiraKanaStrictRe = regex.buildStrict(
		"han",
		"hira",
		"kana",
	);
	assertMatch("お前のドリルで天を衝け", hanHiraKanaStrictRe);
	assertNotMatch("お前のドリルでten wo tsuke", hanHiraKanaStrictRe);
	const hanHiraKanaRomajiWhitespaceHalfWidthStrictRe = regex
		.buildStrict(
			"han",
			"hira",
			"kana",
			"romaji",
			"whitespaceHalfWidth",
		);
	assertMatch(
		"お前のドリルでten wo tsuke",
		hanHiraKanaRomajiWhitespaceHalfWidthStrictRe,
	);
	assertNotMatch(
		"お前のドリルでten wo tsuke!",
		hanHiraKanaRomajiWhitespaceHalfWidthStrictRe,
	);
	const hanHiraKanaRomajiRe = regex.build(
		"han",
		"hira",
		"kana",
		"romaji",
	);
	assertMatch("お前のドリルでten wo tsuke!", hanHiraKanaRomajiRe);
});
