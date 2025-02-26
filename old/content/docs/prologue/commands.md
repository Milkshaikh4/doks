---
title: "Commands"
description: "Doks comes with commands for common tasks."
lead: "Doks comes with commands for common tasks."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "prologue"
weight: 130
toc: true
---

## create

Create new content for your site:

{{< btn-copy text="npm run create" >}}

```bash
npm run create [path] [flags]
```

See also the Hugo docs: [hugo new](https://gohugo.io/commands/hugo_new/).

## lint

Check scripts, styles, and markdown for errors:

{{< btn-copy text="npm run lint" >}}

```bash
npm run lint
```

### scripts

Check scripts for errors:

{{< btn-copy text="npm run lint:scripts" >}}

```bash
npm run lint:scripts [-- --fix]
```

### styles

Check styles for errors:

{{< btn-copy text="npm run lint:styles" >}}

```bash
npm run lint:styles [-- --fix]
```

### markdown

Check markdown for errors:

{{< btn-copy text="npm run lint:markdown" >}}

```bash
npm run lint:markdown [-- --fix]
```

## clean

Delete temporary directories:

{{< btn-copy text="npm run clean" >}}

```bash
npm run clean
```

## start

Start local development server:

{{< btn-copy text="npm run start" >}}

```bash
npm run start
```

## build

Build production website:

{{< btn-copy text="npm run build" >}}

```bash
npm run build
```

### functions

Build Lambda functions:

{{< btn-copy text="npm run build:functions" >}}

```bash
npm run build:functions
```

### preview

Build production website including draft and future content:

{{< btn-copy text="npm run build:preview" >}}

```bash
npm run build:preview
```
