import type { Rule } from "eslint";
import type { AST } from "kdu-eslint-parser";

import {
  defineTemplateBodyVisitor,
  getElementAttributeValue,
  getElementType,
  makeDocsURL
} from "../utils";

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      url: makeDocsURL("iframe-has-title")
    },
    messages: {
      default: "<iframe> elements must have a unique title property."
    }
  },
  create(context) {
    return defineTemplateBodyVisitor(context, {
      KElement(node: AST.KElement) {
        if (getElementType(node) !== "iframe") {
          return;
        }

        const title = getElementAttributeValue(node, "title");

        if (title === null || !["string", "object"].includes(typeof title)) {
          context.report({ node: node as any, messageId: "default" });
        }
      }
    });
  }
};

export default rule;
