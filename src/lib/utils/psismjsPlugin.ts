import Prism from 'prismjs';
import { Node } from 'unist';
import visit from 'unist-util-visit';

import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-css.min';
import 'prismjs/components/prism-sass.min';
import 'prismjs/components/prism-sql.min';
import 'prismjs/components/prism-ruby.min';
import 'prismjs/components/prism-java.min';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';
import 'prismjs/components/prism-yaml.min';
import 'prismjs/components/prism-swift.min';
import 'prismjs/components/prism-kotlin.min';
import 'prismjs/components/prism-python.min';

interface CodeNode extends Node {
  lang: string;
  value: string;
}

function prismjsPlugin() {
  return (tree: Node) =>
    visit(tree, ['code', 'inlineCode'], (node: CodeNode) => {
      let { lang, value, type } = node;

      const codeLang = Prism.languages[lang] ? lang : 'javascript';

      const code = Prism.highlight(value, Prism.languages[codeLang], codeLang);
      // eslint-disable-next-line no-param-reassign
      node.type = 'html';
      // eslint-disable-next-line no-param-reassign
      node.value =
        type === 'inlineCode'
          ? `<code class=”language-${lang}”>${code}</code>`
          : `<pre class=”language-${lang}”><code>${code}</code></pre>`;
    });
}

export default prismjsPlugin;
