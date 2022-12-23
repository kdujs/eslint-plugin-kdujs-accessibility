import type { AST } from "kdu-eslint-parser";

import getElementAttributeValue from "./getElementAttributeValue";

function isPresentationRole(node: AST.KElement) {
  const role = getElementAttributeValue(node, "role");
  return role === "presentation" || role === "none";
}

export default isPresentationRole;
