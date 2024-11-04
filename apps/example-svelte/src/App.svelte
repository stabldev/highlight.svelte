<script lang="ts">
  import 'highlight.js/styles/github-dark.css';
  import hljs from 'highlight.js/lib/core';

  import javascript from 'highlight.js/lib/languages/javascript';
  import typescript from 'highlight.js/lib/languages/typescript';
  import css from 'highlight.js/lib/languages/css';
  import xml from 'highlight.js/lib/languages/xml';
  // import svelte definition from package
  import svelte from 'highlight.svelte';

  const code = `
<!-- highlight.svelte -->

<script lang="ts">
  let width = $state(0);
  const area = $derived(width * 2);

  $effect(() => {
    console.log(area);
  });
<\/script>

<ul>
  {#each Array(10).map((_, i) => i) as { 1, 2, 3 }, index (key) }
    <Component prop={Array.from([1, 2, 3])}  {...function_call(args) } />
  {/each}
</ul>

{@render value}`;

  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('typescript', typescript);
  hljs.registerLanguage('xml', xml);
  hljs.registerLanguage('css', css);
  // register definition
  hljs.registerLanguage('svelte', svelte);

  const html = hljs.highlight(code, { language: 'svelte' }).value;
</script>

<h1>highlight.svelte</h1>

<pre
  style="background-color: #151b23; color: #f0f6fc; font-weight: 600; margin: 0; padding: 1rem; width: max-content;">
  <code>
    {@html html}
  </code>
</pre>
