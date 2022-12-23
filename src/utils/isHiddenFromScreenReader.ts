import type { AST } from "kdu-eslint-parser";

import getElementAttribute from "./getElementAttribute";
import getAttributeValue from "./getAttributeValue";

function isHiddenFromScreenReader(node: AST.KElement) {
  const attribute = getElementAttribute(node, "aria-hidden");
  if (!attribute) {
    return false;
  }

  const value = getAttributeValue(attribute);
  return (value || "").toString() !== "false";
}

export default isHiddenFromScreenReader;
