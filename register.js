const path = require("path");
const serverTsconfig = require("./tsconfig.json");

// use server ts-config for ts-node
require("ts-node").register({
  pretty: true,
  transpileOnly: true,
  project: path.join(__dirname, ".", "tsconfig.json")
});

// setup rewriting server paths
require("tsconfig-paths").register({
  baseUrl: path.resolve(__dirname, "."),
  paths: serverTsconfig.compilerOptions.paths || {}
});
