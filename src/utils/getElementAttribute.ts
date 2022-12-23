import type { AST } from "kdu-eslint-parser";

function getElementAttribute(node: AST.KElement, name: string) {
  for (const attribute of node.startTag.attributes) {
    if (
      (!attribute.directive && attribute.key.name === name) ||
      (attribute.directive &&
        attribute.key.name.name === "bind" &&
        attribute.key.argument &&
        attribute.key.argument.type === "KIdentifier" &&
        attribute.key.argument.name === name)
    ) {
      return attribute;
    }
  }

  return null;
}

export default getElementAttribute;
