import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';


interface CodeHighlightProps {
  code: string;
  language?: string;
}

export async function CodeHighlight({ code, language = 'tsx' }: CodeHighlightProps) {
  const highlightedCode = await highlightCode(code, language);
  return (
    <section
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}

async function highlightCode(code: string, language: string) {
  // 将代码包装在 markdown 代码块中，指定语言
  const markdownCode = `\`\`\`${language}\n${code}\n\`\`\``;

  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: 'one-dark-pro',
      keepBackground: false,
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeStringify)
    .process(markdownCode);

  return String(file);
}

export default CodeHighlight;