
# @lydio/bubbles

**DISCLAIMER:**

#### 🚨This project is NOT open source. It is exposed to satisfy requirements related to my business.

_Thank you for your understanding._

Copyright © 2015-2025 Alex Stevovich. All Rights Reserved.
No permission is granted to use, copy, modify, distribute, sublicense, or create derivative works of this software, in whole or in part, without explicit prior written permission from the copyright holder.

See `LICENSE` and `TRADEMARK.md` for more.

---

**Recursive Transformations for Lydio Nodes**

Lydio Bubbles provide a powerful mechanism for **automated transformations** across an entire hierarchy of Lydio nodes. This package includes the **most commonly used bubbles**, with more being added as foundationally useful patterns emerge.

**Github:**
[https://github.com/alexstevovich/lydio-bubbles](https://github.com/alexstevovich/lydio-bubbles)

**Lydio (Core):**
[https://github.com/alexstevovich/lydio](https://github.com/alexstevovich/lydio)

## Installation

```js
npm install lydio
npm install @lydio/bubbles
```

**Note** lydio is required but not listed as a dependency to simplify installation on private package managers. Please ensure both are installed!

## What is a Lydio Bubble?

A **Bubble** is a core Lydio feature that **recursively applies transformations** across a hierarchy of Lydio nodes. Bubbles allow you to **modify, classify, or audit** elements in a structured way without manually iterating through them.

This package provides a collection of the most useful bubbles, including:  
✅ **BEM Bubble** – Applies Block-Element-Modifier naming conventions.  
✅ **Namespace Bubble** – Adds a prefix to all class names in a hierarchy.  
✅ **Semantic Class Bubble** – Assigns a class based on the element’s semantic tag.

## BEM Bubble

Applies **Block-Element-Modifier (BEM) naming conventions** to all elements in a hierarchy.

```js
import bubbles from '@lydio/bubbles';
lydioNode.bubble(bubbles.bemBubble('my-cmp'));
```

**example output:**

```html
<div class="component my-cmp__component">
    <p class="fancy-text my-cmp__fancy-text"></p>
</div>
```

## Namespace Bubble

Prefixes all class names in a hierarchy with a **namespace identifier**.

```js
import bubbles from '@lydio/bubbles';
lydioNode.bubble(bubbles.namespaceBubble('主'));
```

**example output:**

```html
<div class="component 主component">
    <p class="fancy-text 主fancy-text"></p>
</div>
```

## Semantic Class Bubble

```js
import bubbles from '@lydio/bubbles';
lydioNode.bubble(bubbles.semanticClassBubble());
```

**example output:**

```html
<div class="component">
    <p class="fancy-class p"></p>
</div>
```

## License

Copyright © 2015-2025 Alex Stevovich. All Rights Reserved.
No permission is granted to use, copy, modify, distribute, sublicense, or create derivative works of this software, in whole or in part, without explicit prior written permission from the copyright holder.

This project is **NOT** open source. It is exposed to satisfy requirements related to my business.
_Thank you for your understanding._

See `LICENSE` and `TRADEMARK.md` for more.
