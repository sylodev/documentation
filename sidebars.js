/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  sidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "README",
    },
    {
      type: "category",
      label: "Plugins",
      items: [
        "plugins/starboard",
        "plugins/tickets",
        "plugins/levels",
        "plugins/roles",
      ],
    },
    {
      type: "category",
      label: "Actions",
      items: [
        "actions/commands",
        "actions/messages",
        "actions/scripts",
        "actions/callbacks",
        "actions/menus",
        "actions/reactions",
        "actions/join-leave",
        "actions/roles",
        "actions/voice",
        "actions/boosts",
        "actions/webhooks",
      ],
    },
    {
      type: "category",
      label: "Scripts",
      items: [
        "scripts/arrays",
        "scripts/blocks",
        "scripts/comments",
        "scripts/functions",
        "scripts/imports",
        "scripts/objects",
        "scripts/options-and-parameters",
        "scripts/returning",
        "scripts/scopes",
        "scripts/variables",
      ],
    },
    {
      type: "category",
      label: "Tags",
      items: [
        {
          type: "category",
          label: "Plugin Tags",
          items: ["tags/plugins/suggestion", "tags/plugins/ticket"],
        },
        "tags/command-tags",
        "tags/channel",
        "tags/emoji",
        "tags/global",
        "tags/arrays-and-objects",
        "tags/message",
        "tags/responder",
        "tags/role",
        "tags/server",
        "tags/store",
        "tags/user",
      ],
    },
    {
      type: "category",
      label: "Topics",
      items: [
        "topics/migrating-to-slash-commands",
        "topics/command-syncing",
        "topics/action-locking"],
    },
  ],
};
