---
title: Introduction
description: 
published: 1
date: 2022-02-16T06:01:04.287Z
tags: 
editor: markdown
dateCreated: 2022-02-16T05:56:42.977Z
---

# Scripts

Scripts are very cool. They sometimes do things. Actions are comprised of a script with additional layers. 

## Conditional scripts

Some functionality uses "conditional scripts", which are scripts that are smaller and only intended to check things quickly. Conditional scripts cannot access certain expensive tags like {responder.send}, and are instead limited to basic functionality like `{#if;{user.bot};true;false}`.

## Importing actions

You can import actions using `{#import}`. Any action can be imported, however "Script" actions are intended as they cannot be run any other way. `{#import}` will inline the imported script, running any top-level code and exposing any functions defined in the script.

