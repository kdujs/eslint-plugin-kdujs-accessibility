import type { AST } from "kdu-eslint-parser";

import getElementAttributeValue from "./getElementAttributeValue";

function hasAriaLabel(node: AST.KElement) {
  return (
    getElementAttributeValue(node, "aria-label") ||
    getElementAttributeValue(node, "aria-labelledby")
  );
}

export default hasAriaLabel;
