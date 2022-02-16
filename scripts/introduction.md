---
title: Introduction
description: 
published: 1
date: 2022-02-16T12:10:56.801Z
tags: 
editor: markdown
dateCreated: 2022-02-16T05:56:42.977Z
---

# Scripts

Scripts are very cool. They sometimes do things. Actions are comprised of a script with additional layers. 

## Conditional scripts

Some functionality uses "conditional scripts", which are scripts that are smaller and only intended to check things quickly. Conditional scripts cannot access certain expensive tags like {responder.send}, and are instead limited to basic functionality like `{#if;{user.bot};true;false}`.
