---
name: Use Style Dictionary Tokens
description: Rule to enforce a 3-layer architecture for Style Dictionary tokens
---

# Style Dictionary Rules
1. **Never hardcode CSS values** for colors, shadows, fonts, typography, etc., in `.scss` files.
2. **Use Style Dictionary**: Always rely on Style Dictionary tokens generated in `src/styles/variables.css`.
3. **3-Layer Architecture**:
   - **Primitives**: Define raw values (e.g., `#ffffff`, `#000000`) in primitive tokens (`tokens/color.json`).
   - **Semantics**: Create semantic aliases mapped to primitives (e.g., `color.background.surface`) in `tokens/semantic.json`.
   - **Components**: Create component-specific aliases mapped to semantics (e.g., `component.productCard.background`) in `tokens/components.json`.
4. If you need a new value, add it to the corresponding token layer and run `npm run tokens`.
