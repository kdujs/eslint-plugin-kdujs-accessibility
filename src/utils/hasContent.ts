import type { AST } from "kdu-eslint-parser";

import getElementAttributeValue from "./getElementAttributeValue";
import getElementType from "./getElementType";
import hasAccessibleChild from "./hasAccessibleChild";
import isHiddenFromScreenReader from "./isHiddenFromScreenReader";

function hasDirective(node: AST.KElement, name: string) {
  return node.startTag.attributes.some(
    (attribute) =>
      attribute.directive && attribute.key.name.name === name.toLowerCase()
  );
}

function hasChildImageWithAlt(node: AST.KElement): boolean {
  return node.children.some((child) => {
    if (child.type === "KElement") {
      if (
        !isHiddenFromScreenReader(child) &&
        getElementType(child) === "img" &&
        getElementAttributeValue(child, "alt")
      ) {
        return true;
      }
      return hasChildImageWithAlt(child);
    }
  });
}

function hasAccessibleDirective(
  node: AST.KElement,
  accessibleDirectives: string[]
): boolean {
  return accessibleDirectives.some((directive) => {
    return hasDirective(node, directive);
  });
}

function hasContent(
  node: AST.KElement,
  accessibleChildTypes: string[],
  accessibleDirectives: string[]
) {
  return (
    hasAccessibleChild(node, accessibleChildTypes) ||
    hasAccessibleDirective(node, accessibleDirectives) ||
    hasDirective(node, "text") ||
    hasDirective(node, "html") ||
    hasChildImageWithAlt(node)
  );
}

export default hasContent;
