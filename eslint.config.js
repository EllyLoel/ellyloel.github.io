import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";
import globals from "globals";
import js from "@eslint/js";
import path from "node:path";
import prettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	allConfig: js.configs.all,
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
});

export default [
	{
		ignores: ["**/.eslintrc.cjs", "**/rollup.config.js"],
	},
	...compat.extends("eslint:recommended", "plugin:prettier/recommended"),
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		plugins: {
			prettier,
		},
		rules: {
			"no-console": "warn",
			"no-prototype-builtins": "off",
			"no-unused-vars": "warn",
			"prettier/prettier": "error",
			"sort-imports": "error",
			"sort-keys": "error",
			"sort-vars": "error",
		},
	},
];
