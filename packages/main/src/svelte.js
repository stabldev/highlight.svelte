/*
Language: Svelte.js
Requires: xml.js, javascript.js, css.js, typescript.js (optional)
Inspiration from: Alexey Schebelev
Link: https://github.com/AlexxNB/highlightjs-svelte/blob/master/src/svelte.js
*/

export default function(hljs) {
  const common_patterns = [
    {
      begin: /\$([a-zA-Z_][\w-]*)\s*\(/,
      className: 'title function_',
      endsWithParent: true,
      variants: [
        {
          begin: /\$([a-zA-Z_][\w-]*)\s*\(/,
          end: /\(/,
          returnBegin: true,
          excludeEnd: true,
          relevance: 10,
        },
      ],
    },
    {
      begin: /\b(bind|use|transition|in|out|animate|class|style):/gm,
      className: 'variable',
      relevance: 10,
    },
  ];

  return {
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT('<!--', '-->', { relevance: 10 }),
      {
        begin: /<script(?!.*lang=["']ts["'])>/gm,
        end: /<\/script>/gm,
        subLanguage: 'javascript',
        excludeBegin: true,
        excludeEnd: true,
        contains: common_patterns,
      },
      {
        begin: /<script\s+lang=["']ts["']>/gm,
        end: /<\/script>/gm,
        subLanguage: 'typescript',
        excludeBegin: true,
        excludeEnd: true,
        contains: common_patterns,
      },
      {
        begin: /^(\s*)(<style.*>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: 'css',
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /\{/,
        end: /\}/,
        subLanguage: 'javascript',
        contains: [
          hljs.COMMENT(/\/\*/, /\*\//),
          { begin: /\{/, end: /\}/, skip: true },
          {
            begin: /[#@/][a-zA-Z_][\w-]*/,
            className: 'keyword',
            relevance: 10,
          },
        ],
      },
    ],
  };
}
