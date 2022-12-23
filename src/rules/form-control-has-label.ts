import type { Rule } from "eslint";
import type { AST } from "kdu-eslint-parser";

import {
  defineTemplateBodyVisitor,
  getElementAttributeValue,
  getElementType,
  hasAriaLabel,
  isAriaHidden,
  makeDocsURL
} from "../utils";

function isLabelElement(
  node:
    | AST.KElement
    | AST.KDocumentFragment
    | AST.KText
    | AST.KExpressionContainer
) {
  return node.type === "KElement" && getElementType(node) === "label";
}

function hasLabelElement(node: AST.KElement): boolean {
  const { parent } = node;

  return (
    [parent, ...parent.children].some(isLabelElement) ||
    (parent && parent.type === "KElement" && hasLabelElement(parent))
  );
}

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      url: makeDocsURL("form-has-label")
    },
    messages: {
      default:
        "Each form element must have a programmatically associated label element."
    }
  },
  create(context) {
    return defineTemplateBodyVisitor(context, {
      KElement(node) {
        const elementType = getElementType(node);
        if (!["input", "textarea"].includes(elementType)) {
          return;
        }

        if (elementType === "input") {
          const type = getElementAttributeValue(node, "type");

          if (
            !type ||
            ["hidden", "button", "image", "submit", "reset"].includes(
              type as any
            )
          ) {
            return;
          }
        }

        if (
          !isAriaHidden(node) &&
          !hasAriaLabel(node) &&
          !hasLabelElement(node)
        ) {
          context.report({ node: node as any, messageId: "default" });
        }
      }
    });
  }
};

export default rule;
