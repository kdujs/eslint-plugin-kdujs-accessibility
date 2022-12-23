import type { AST } from "kdu-eslint-parser";

function getLiteralAttributeValue(node: AST.KElement, name: string) {
  for (const attribute of node.startTag.attributes) {
    if (
      !attribute.directive &&
      attribute.key.name === name &&
      attribute.value
    ) {
      return attribute.value.value;
    }

    if (
      attribute.directive &&
      attribute.key.name.name === "bind" &&
      attribute.key.argument &&
      attribute.key.argument.type === "KIdentifier" &&
      attribute.key.argument.name === name &&
      attribute.value &&
      attribute.value.expression &&
      attribute.value.expression.type === "Literal"
    ) {
      return attribute.value.expression.value;
    }
  }

  return null;
}

export default getLiteralAttributeValue;
