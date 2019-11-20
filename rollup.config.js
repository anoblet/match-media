import typescript from "rollup-plugin-typescript";

export default {
  input: "./src/index.ts",
  output: {
    dir: "dist/bundled/esm",
    format: "esm"
  },
  plugins: [typescript()]
};
