## 2024-05-23 - Filter Bar Accessibility
**Learning:** Toggle buttons (like filters) need `aria-pressed` to communicate their state to screen readers. Visual cues (color change) are insufficient for non-sighted users.
**Action:** Always add `aria-pressed={isActive}` to button-based toggles.
