// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "BBC Air Quality",
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [
          // locales list
          "en-gb",
          "hi-in",
        ],
        pathAliases: {
          // path segment alias for each locales
          "en-gb": "en",
          "hi-in": "hi",
        },
        fallbackLocale: "en-gb", // fallback language
        defaultLocale: "en-gb", // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          "en-gb": require("./src/locales/en-gb.json"),
          "hi-in": require("./src/locales/hi-in.json"),
        },
      },
    },
  ],
};
