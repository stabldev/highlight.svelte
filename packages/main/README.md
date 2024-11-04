# <img src="https://svelte.dev/favicon.png" height="40"> highlight.svelte

**Svelte** Language Definition for highlight.js with Typescript support.

![NPM Version](https://img.shields.io/npm/v/highlight.svelte?style=for-the-badge)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/highlight.svelte?style=for-the-badge)

## Installation

```bash
npm i highlight.js highlight.svelte
```

## Usage

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

<script>
  hljs.highlightAll();
</script>

<pre><code class="language-svelte">{code}</code></pre>
```

## Inspiration

 - AlexxNB's [highlightjs-svelte](https://github.com/AlexxNB/highlightjs-svelte)
