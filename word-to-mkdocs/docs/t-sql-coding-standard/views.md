# Views

You **SHOULD NOT: -**

-   Define nested views. Views that call or join to other views can
    result in complex query plans.

-   Use wildcards in view definitions as it can result in unexpected
    behaviour[^7].

-   Use ORDER BY in views. Use the ORDER BY clause only in the outermost
    query.

