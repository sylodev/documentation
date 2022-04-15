// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Atlas Documentation",
  tagline: "Documentation for Atlas, the Discord bot.",
  url: "https://docs.atlas.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "sylo.digital", // Usually your GitHub org/user name.
  projectName: "atlas", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/sylo-digital/documentation",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Atlas Documentation",
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} sylo.digital, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/tutorials/migrating-to-slash-commands",
            to: "/topics/migrating-to-slash-commands",
          },
        ],
      },
    ],
  ],
};

module.exports = config;
