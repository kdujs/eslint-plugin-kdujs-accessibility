import path from "path";
import type { Rule } from "eslint";
import type { AST } from "kdu-eslint-parser";

interface TemplateListener extends Rule.NodeListener {
  KAttribute?: (node: AST.KAttribute) => void;
  KElement?: (node: AST.KElement) => void;
  KText?: (node: AST.KText) => void;
}

// Taken directly from eslint-plugin-kdu
function defineTemplateBodyVisitor(
  context: Rule.RuleContext,
  templateVisitor: TemplateListener,
  scriptVisitor?: Rule.RuleListener
) {
  if (!context.parserServices.defineTemplateBodyVisitor) {
    if (path.extname(context.getFilename()) === ".kdu") {
      context.report({
        loc: { line: 1, column: 0 },
        message:
          "Use the latest kdu-eslint-parser. See also https://kdujs-eslint.web.app/user-guide/#what-is-the-use-the-latest-kdu-eslint-parser-error."
      });
    }

    return {};
  }

  return context.parserServices.defineTemplateBodyVisitor(
    templateVisitor,
    scriptVisitor
  );
}

export default defineTemplateBodyVisitor;
