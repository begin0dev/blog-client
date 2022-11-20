import { unified } from 'unified';
import remarkBreaks from 'remark-breaks';
import remarkParse from 'remark-parse';
import rehypeRaw from 'rehype-raw';
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

import prismPlugin from 'lib/utils/prism-plugin';
import { MarkdownPreviewWrapper } from './MarkdownPreview.styles';

interface Props {
  markdown: string;
}

function MarkdownPreview({ markdown }: Props) {
  const markdownToHtml = unified()
    .use(remarkBreaks)
    .use(remarkParse)
    .use(prismPlugin)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .processSync(markdown)
    .toString();

  return <MarkdownPreviewWrapper dangerouslySetInnerHTML={{ __html: markdownToHtml }} />;
}

export default MarkdownPreview;
