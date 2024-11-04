<script lang="ts">
  import 'highlight.js/styles/github.css';
  import hljs from 'highlight.js/lib/core';

  import javascript from 'highlight.js/lib/languages/javascript';
  import typescript from 'highlight.js/lib/languages/typescript';
  import css from 'highlight.js/lib/languages/css';
  import xml from 'highlight.js/lib/languages/xml';
  // import svelte definition from package
  import svelte from 'highlight.svelte';

  const code = `
<script lang="ts">
  let count: number = 0;
  () => count++;
  Array.from([1, 2, 3]);
  ...function_call(1, true, 'hello')
  let props = $props();

  $effect(() => {
    console.log(props.hello);
  });
  
  $effect.pre(() => {
    console.log(props.hello);
  });

  $inspect(props);
  let state = $state('hello');
<\/script>

<button on:click={ ({hello}) => count++ }>Hello</button>

<h1>{ Array.from([{one: 1}, 2, 3]); }</h1>

<ul>
  {#each Array(10).map((_, i) => i) as { 1, 2, 3 }, index (key) }
      <Component prop={Array.from([1, 2, 3])}  {...function_call(args) } />
  {/each}
</ul>

{@debug value}

<style>
  ul {
    margin: 0;
    padding: 0;
  }
<\/style>`;

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
  style="background-color: lightcyan; margin: 0; padding: 1rem; width: max-content;">
  <code>
    {@html html}
  </code>
</pre>
