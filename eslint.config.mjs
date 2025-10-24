import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
	js.configs.recommended,
	{
		ignores: [
			"node_modules/**",
			".next/**",
			"out/**",
			"build/**",
			"next-env.d.ts",
		],
	},
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				// Browser globals
				window: "readonly",
				document: "readonly",
				console: "readonly",
				URL: "readonly",
				HTMLDivElement: "readonly",
				HTMLButtonElement: "readonly",
				// Node.js globals
				process: "readonly",
				setTimeout: "readonly",
				// React globals
				React: "readonly",
			},
		},
		plugins: {
			"@typescript-eslint": typescript,
		},
		rules: {
			// Basic rules to get started
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "warn",
			"no-console": "warn",
			"no-useless-escape": "warn",
		},
	},
];
