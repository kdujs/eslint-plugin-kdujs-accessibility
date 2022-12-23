import type { AST } from "kdu-eslint-parser";

import getAttributeValue from "./getAttributeValue";
import getElementAttribute from "./getElementAttribute";

function getElementAttributeValue(node: AST.KElement, name: string) {
  const attribute = getElementAttribute(node, name);
  return attribute && getAttributeValue(attribute);
}

export default getElementAttributeValue;
