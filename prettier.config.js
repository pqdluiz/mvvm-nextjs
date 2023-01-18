module.exports = {
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: false,
  semi: true,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: [
    "^[./]",
    "^./src/data/(.*)$",
    "^./src/domain/(.*)$",
    "^./src/pages/(.*)$",
    "^./src/presentation/(.*)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
