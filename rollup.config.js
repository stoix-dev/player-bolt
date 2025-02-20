import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

// Use `createRequire` to load `package.json` in an ES module context
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

export default [
  {
    input: "src/main.tsx",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        allowImportingTsExtensions: true,
      }),
      terser(),
      postcss(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/main.tsx",
    output: [{ file: packageJson.types }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
