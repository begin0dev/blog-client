import * as React from 'react';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import stringify from 'rehype-stringify';
import unified from 'unified';

function MarkdownPreview() {

  const markdownToHtml = unified().use(remarkParse).use(remark2rehype).use(stringify)

  return <div></div>;
}

export default MarkdownPreview;
