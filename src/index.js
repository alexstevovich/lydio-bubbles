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
 * file_name: src/index.js
 * purpose: Core functionality and exports combined.
 *
 * @system
 *
 * generated_on: 2025-03-11T02:12:37.363Z
 * certified_version: 1.0.0
 * file_uuid: 3589d680-b5ef-429d-84c6-c00fa7bdfa67
 * file_size: 1935 bytes
 * file_hash: f245118a57c4b7e9cdb3f0a8367e6bef6ae90ff95377f3ce708e0f5ea120dbcd
 * mast_hash: 73144680127d0d6085677c334791e43b2c18d5d2500f1b91687c3adbad66024f
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
 ********************************************************/
export function prefixClassBubble(namespace) {
    return (node) => {
        const originalClasses = [...node._classes];
        originalClasses.forEach((cls) => {
            node.cls(`${namespace}${cls}`);
        });
    };
}

export function bemBubble(namespace) {
    return (node) => {
        const originalClasses = [...node._classes];
        originalClasses.forEach((cls) => {
            node.cls(`${namespace}__${cls}`);
        });
    };
}

export function semanticClassBubble() {
    const SEMANTIC_TAGS = new Set([
        'p',
        'li',
        'ul',
        'ol',
        'a',
        'img',
        'section',
        'main',
        'article',
        'header',
        'footer',
        'address',
        'nav',
        'aside',
        'figure',
        'figcaption',
        'blockquote',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
    ]);

    return (node) => {
        if (
            SEMANTIC_TAGS.has(node.tagName) &&
            !node._classes.has(node.tagName)
        ) {
            node.cls(node.tagName);
        }
    };
}
