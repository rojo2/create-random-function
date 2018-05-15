import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
  {
    input: "src/create-random-function.js",
    output: [
      { file: pkg.browser, name: "lcg", format: "umd" }
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ["node_modules/**"]
      })
    ]
  },
  {
    input: "src/create-random-function.js",
    external: ["@rojo2/linear-congruential-generator"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [
      babel({
        exclude: ["node_modules/**"]
      })
    ]
  }
];
