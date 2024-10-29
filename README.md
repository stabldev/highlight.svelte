# <img src="https://svelte.dev/favicon.png" height="40"> highlight.svelte

**Svelte** Language Definition for highlight.js with Typescript support.

![NPM Version](https://img.shields.io/npm/v/highlight.svelte?style=for-the-badge)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/highlight.svelte?style=for-the-badge)

## Installation

```bash
npm i highlight.js highlight.svelte
```

## Importing the Lib

To use the Svelte language definition with `highlight.js`, you have two options for importing:

### 1. Optimized Imports (Recommended)

```js
// import core hljs api and register required languages
import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
// optional: if you are using 'lang="ts"'
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import svelte from 'highlight.svelte';

// register each language definition
hljs.registerLanguage([lang-name], [lang-module]);
```
### 2. Full Import (Less Optimal)

If you prefer to load all languages provided by `highlight.js`, you can use this approach. However, this may significantly increase your bundle size since it imports all available languages.

```js
import hljs from 'highlight.js';
import svelte from 'highlight.svelte';

hljs.registerLanguage('svelte', svelte);
```

## Usage

> Follow [optimized importing](#1-optimized-imports-recommended).\
Usage examples are based on [less optimal way](#2-full-import-less-optimal) to reduce docs length.

### Node.js / `require`

```js
const hljs = require('highlight.js');
hljs.registerLanguage('svelte', require('highlight.svelte'));

const highlightedCode = hljs.highlight(code, { language: 'svelte' }).value;
```

### ES6 Modules / `import`

```js
import hljs from 'highlight.js';
import svelte from 'highlight.svelte';

hljs.registerLanguage('svelte', svelte);
const highlightedCode = hljs.highlight(code, { language: 'svelte' }).value;
```

### Browser / `cdn`

```html
<script src="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js"></script>
<script src="https://unpkg.com/highlight.svelte@latest/dist/svelte.min.js"></script>

<script>hljs.highlightAll();</script>

<pre><code class="language-svelte">{code}</code></pre>
```

## Development

Project is powered by nx workspace.\
Follow basic steps:
1. clone repo
2. `cd` into dir
3. `npm i`

```bash
npm run dev
```

This will build package and spin up an example svelte-vite app with package installed.\
Visit: [localhost:5173](http://localhost:5173)

## Credits

Project is inspired from [AlexxNB's highlightjs-svelte](https://github.com/AlexxNB/highlightjs-svelte)
