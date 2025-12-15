## 2024-05-23 - Accessibility Patterns
**Learning:** This repo uses custom toggle buttons for filtering that lack semantic state information (`aria-pressed`), relying only on visual cues (color changes).
**Action:** When implementing custom toggle components, always ensure `aria-pressed` or `role="switch"` is used to communicate state to assistive technology.
