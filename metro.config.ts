// metro.config.js (at your project root)
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    // Tell Metro “when you see 'firebase/auth/react-native',
    // resolve it to the RN build inside node_modules”
    config.resolver.extraNodeModules = {
        ...(config.resolver.extraNodeModules || {}),
        "firebase/auth/react-native": path.resolve(
            __dirname,
            "node_modules/firebase/auth/dist/rn/index.js"
        ),
    };

    return config;
})();
