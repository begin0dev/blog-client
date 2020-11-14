import 'prismjs/components';

import Prism from 'prismjs';
import {Node} from 'unist'
import visit from 'unist-util-visit';

const prismjsPlugin = () => {
  const visitor = (node: Node) => {

    // const code = Prism.highlight(value, Prism.languages[lang] || Prism.languages.markup);
  };
  return (tree: Node) => visit(tree, ['code', 'inlineCode'], visitor);
};

export default prismjsPlugin;
