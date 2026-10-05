---
name: No Inline Styles
description: Rule to strictly enforce separating CSS from TSX
---

# Styling Rules
1. **Never use inline `style={{ ... }}` in `.tsx` files.**
2. Always create a `.module.scss` file for the component or page and apply classes using `className={styles.myClass}`.
3. This keeps the React components clean, enforces separation of concerns, and makes our designs easier to maintain.
4. When migrating a file, remove all inline `style` objects and map them to their respective SCSS classes.
