/* *******************************************************
 * @lydio/bubbles
 * 
 * 
 * Copyright (c) 2015-2025 Alex Stevovich. All Rights Reserved.
 *
 * No permission is granted to use, copy, modify, 
 * distribute, sublicense, or create derivative works 
 * of this software, in whole or in part, without explicit 
 * prior written permission from the copyright holder.
 *
 *
 * @meta
 *
 * package_name: @lydio/bubbles
 * file_name: gen/index.cjs
 * purpose: {{PURPOSE}}
 *  
 * @system
 *
 * generated_on: 2025-03-11T02:12:43.732Z
 * certified_version: 1.0.0
 * file_uuid: c4e9704a-00a0-4fc4-b9c9-155538331b3e
 * file_size: 2062 bytes
 * file_hash: 1af0a9c6f842d03b86713da879ca100b3c5efe7a6cb5b1216775ed6a2cc3db31
 * mast_hash: e23988001eb41af4695c616d3f8bb3caf34372072960defc582c45e818a0ce8e
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
********************************************************/ 
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  bemBubble: () => bemBubble,
  prefixClassBubble: () => prefixClassBubble,
  semanticClassBubble: () => semanticClassBubble
});
module.exports = __toCommonJS(index_exports);
function prefixClassBubble(namespace) {
  return (node) => {
    const originalClasses = [...node._classes];
    originalClasses.forEach((cls) => {
      node.cls(`${namespace}${cls}`);
    });
  };
}
function bemBubble(namespace) {
  return (node) => {
    const originalClasses = [...node._classes];
    originalClasses.forEach((cls) => {
      node.cls(`${namespace}__${cls}`);
    });
  };
}
function semanticClassBubble() {
  const SEMANTIC_TAGS = /* @__PURE__ */ new Set([
    "p",
    "li",
    "ul",
    "ol",
    "a",
    "img",
    "section",
    "main",
    "article",
    "header",
    "footer",
    "address",
    "nav",
    "aside",
    "figure",
    "figcaption",
    "blockquote",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
  ]);
  return (node) => {
    if (SEMANTIC_TAGS.has(node.tagName) && !node._classes.has(node.tagName)) {
      node.cls(node.tagName);
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  bemBubble,
  prefixClassBubble,
  semanticClassBubble
});
