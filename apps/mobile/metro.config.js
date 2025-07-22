const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const root = path.resolve(__dirname, "./"); 

const config = getDefaultConfig(__dirname);

config.watchFolders = [
  path.resolve(root, "node_modules"),
  path.resolve(__dirname, "node_modules"),
];

config.resolver = {
  ...config.resolver,
  extraNodeModules: new Proxy(
    {},
    {
      get: (_, name) => path.join(root, "node_modules", name),
    }
  ),
};

module.exports = withNativeWind(config, { input: "./global.css" });
