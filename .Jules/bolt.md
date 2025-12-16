## 2024-05-22 - Calendar Grid O(N^2) Rendering
**Learning:** Found an O(N*M) lookup pattern in the calendar grid generation. For every day cell (42 per view), it was iterating the entire schedule array (300+ items) using `find` and string matching. This is effectively an N+1 query problem in the frontend.
**Action:** Use a `Map` or hash lookup for data that needs to be accessed by a key (date) inside a loop. Always check for nested loops where the inner loop iterates a large dataset.

## 2025-05-22 - Optimizing React Render Loops
**Learning:** Found that `TimelineView` was creating new `Date` objects inside helper functions (`isToday`, `isFutureOrToday`) that were called inside a map loop. For a large dataset, this creates hundreds of temporary objects per render.
**Action:** Hoisted the "current date" calculation outside the component's render loop. Combined with `React.memo`, this ensures the heavy list component only re-renders when data actually changes.

## 2025-05-22 - Rebase and Ref Optimization
**Learning:** React Component definitions should never be nested inside other components. This forces React to unmount and remount the nested component on every render of the parent, killing performance and losing state.
**Action:** When rebasing or refactoring, always watch out for component definitions that might have been accidentally moved inside a function body. Move them to the top level.
