import type { AST } from "kdu-eslint-parser";

import isHiddenFromScreenReader from "./isHiddenFromScreenReader";

function isAriaHidden(node: AST.KDocumentFragment | AST.KElement): boolean {
  if (node.type !== "KElement") {
    return false;
  }

  return isHiddenFromScreenReader(node) || isAriaHidden(node.parent);
}

export default isAriaHidden;
