import type { AST } from "kdu-eslint-parser";

function getAttributeName(node: AST.KAttribute | AST.KDirective) {
  if (!node.directive) {
    return node.key.name;
  }

  const { key } = node;
  if (
    key.name.name === "bind" &&
    key.argument &&
    key.argument.type === "KIdentifier"
  ) {
    return key.argument.name;
  }

  return null;
}

export default getAttributeName;
