import * as React from 'react';
import unified from 'unified';
import remarkBreaks from 'remark-breaks';
import remarkParse from 'remark-parse';
import rehypeRaw from 'rehype-raw';
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

import prismjsPlugin from '../../../lib/utils/psismjsPlugin';
import { MarkdownPreviewBlock } from './MarkdownPreview.styles';

interface IProps {
  markdown: string;
}

function MarkdownPreview({ markdown }: IProps) {
  const markdownToHtml = unified()
    .use(remarkBreaks)
    .use(remarkParse)
    .use(prismjsPlugin)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .processSync(markdown)
    .toString();

  return <MarkdownPreviewBlock dangerouslySetInnerHTML={{ __html: markdownToHtml }} />;
}

export default MarkdownPreview;
