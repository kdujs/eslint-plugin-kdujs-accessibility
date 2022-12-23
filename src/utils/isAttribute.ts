import type { AST } from "kdu-eslint-parser";

function isAttribute(node: AST.KAttribute | AST.KDirective, name: string) {
  if (!node.directive) {
    return node.key.name === name;
  }

  return (
    node.key.name.name === "bind" &&
    node.key.argument &&
    node.key.argument.type === "KIdentifier" &&
    node.key.argument.name === name
  );
}

export default isAttribute;
