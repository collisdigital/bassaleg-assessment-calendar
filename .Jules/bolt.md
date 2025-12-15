## 2024-05-22 - Calendar Grid O(N^2) Rendering
**Learning:** Found an O(N*M) lookup pattern in the calendar grid generation. For every day cell (42 per view), it was iterating the entire schedule array (300+ items) using `find` and string matching. This is effectively an N+1 query problem in the frontend.
**Action:** Use a `Map` or hash lookup for data that needs to be accessed by a key (date) inside a loop. Always check for nested loops where the inner loop iterates a large dataset.
