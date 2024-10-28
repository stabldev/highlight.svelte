<script lang="ts">
  import "highlight.js/styles/github.css";
  import hljs from "highlight.js/lib/core";

  import javascript from "highlight.js/lib/languages/javascript";
  import typescript from "highlight.js/lib/languages/typescript";
  import css from "highlight.js/lib/languages/css";
  import xml from "highlight.js/lib/languages/xml";
  import svelte from "$lib/index.js";

  const _source = `
<script lang="ts">
  let count: number = 0;
  () => count++;
  Array.from([1, 2, 3]);
  ...function_call(1, true, 'hello')
<\/script>

<button on:click={ ({hello}) => count++ }>Hello</button>

<h1>{ Array.from([{one: 1}, 2, 3]); }</h1>

<ul>
  {#each Array(10).map((_, i) => i) as { 1, 2, 3 }, index (key) }
      <Component prop={Array.from([1, 2, 3])}  {...function_call(args) } />
  {/each}
</ul>

{@debug value}`;

  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("typescript", typescript);
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("css", css);
  hljs.registerLanguage("svelte", svelte);

  const html = hljs.highlight(_source, { language: "svelte" }).value;
</script>

<svelte:head>
  <title>highlight.js-svelte</title>
</svelte:head>

<h1>highlight.js-svelte</h1>

<pre>
  <code>
    {@html html}
  </code>
</pre>
