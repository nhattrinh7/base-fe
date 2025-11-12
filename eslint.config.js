import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // 1. Không dùng dấu chấm phẩy
      semi: ["warn", "never"],

      // 2. Dùng single quote
      quotes: ["warn", "single", { avoidEscape: true }],

      // 3. Cấm khai báo biến không dùng
      "no-unused-vars": "warn",

      // 4. Cấm console.log, console.warn,...
      "no-console": "warn",

      // 5. Cấm if lồng trong else mà không có khối (lonly-if)
      "no-lonely-if": "warn",

      // 6. Cấm khoảng trắng thừa ở cuối dòng
      "no-trailing-spaces": "warn",

      // 7. Cấm nhiều khoảng trắng liên tiếp (trừ trong chuỗi và comment)
      "no-multi-spaces": "warn",

      // 8. Yêu cầu khoảng trắng trước khối { }
      "space-before-blocks": "warn",

      // 9. Khoảng trắng trong mảng: [ 1, 2, 3 ]
      "array-bracket-spacing": ["warn", "never"],

      // 10. Khoảng trắng trước/sau từ khóa (if, for, function, ...)
      "keyword-spacing": ["warn", { before: true, after: true }],

      // 11. Khoảng trắng trước/sau dấu phẩy
      "comma-spacing": ["warn", { before: false, after: true }],

      // 12. Khoảng trắng trước và sau mũi tên trong arrow function
      "arrow-spacing": ["warn", { before: true, after: true }],
    },
  },
]);
