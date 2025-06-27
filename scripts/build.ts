// ex. scripts/build_npm.ts
import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
	entryPoints: ["./mod.ts"],
	outDir: "./npm",
	shims: {
		deno: true,
	},
	compilerOptions: {
		lib: [
			"DOM",
			"ESNext",
		],
	},
	package: {
		name: "sui",
		version: Deno.args[0],
		description: "粋: A collection of personal JavaScript methods.",
		license: "MIT",
		repository: {
			type: "git",
			url: "git+https://github.com/whalderman/sui.git",
		},
		bugs: {
			url: "https://github.com/whalderman/sui/issues",
		},
	},
	postBuild() {
		// steps to run after building and before running the tests
		Deno.copyFileSync("LICENSE", "npm/LICENSE");
		Deno.copyFileSync("README.md", "npm/README.md");
	},
});
