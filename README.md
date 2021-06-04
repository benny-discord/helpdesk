# Benny Helpdesk

## How to setup a local dev server

Node 14+ required

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:9000
$ npm run dev
```

## Editing pages.

1. Make a file in the `content/` folder that ends with `.md`, for example, `music-quiz.md`.

2. Add the following content to the top of your page, and adjust it for your needs.

```yml
---
title: Music Quiz
description: Benny's music quiz is a fun way to test your knowledge of a range of songs, covering various genres.
tags: 
  - music quiz
---
```

*This must match the EXACT formatting*

If your description becomes longer than one line, you should surround it with single quotes, like so: `'`.

If you're running the server locally, once doing this, you can edit it by going to http://localhost:9000 and double clicking on the body of your article.

The articles support normal markdown, so  you can use something like [this](https://markdown-editor.github.io) to edit it.
