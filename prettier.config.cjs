/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    /**
     * If you're adding more plugins, keep in mind
     * that the Tailwind plugin must come last!
     */
    "prettier-plugin-tailwindcss",
  ],
  // semi: false,
};

module.exports = config;
