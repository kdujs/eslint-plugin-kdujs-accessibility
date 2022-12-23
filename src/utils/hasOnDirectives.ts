import type { AST } from "kdu-eslint-parser";

import hasOnDirective from "./hasOnDirective";

function hasOnDirectives(node: AST.KElement, names: string[]) {
  return names.some((name) => hasOnDirective(node, name));
}

export default hasOnDirectives;
