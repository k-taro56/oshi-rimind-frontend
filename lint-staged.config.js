module.exports = {
  "*.{js,jsx,ts,tsx}": [
    () => "tsc -p tsconfig.json --noEmit",
    () => "prettier --write .",
  ],
};
