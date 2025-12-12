# Good practice checklists

Use this checklist to demonstrate you follow our coding standards.

We cross-reference each checklist item to a relevant section in our
standards and guides; Exceptions are noted where they may apply.

## 9.1 general good practice

| **Item** |  |  | **Guide or standard** | **Exceptions** |
| --- | --- | --- | --- | --- |
| 1 | You avoid placing business logic in the database | ☐ | *T-SQL coding standard, [7.1](#_Avoid_using_T-SQL)* | This is a general rule. But there may be times when there are good reasons not to follow it. |
| 2 | You follow the coding conventions described in this standard | ☐ | *T-SQL coding standard, All* |  |
| 3 | You keep T-SQL scripts and database code in source control | ☐ | *T-SQL coding standard, [7.3](#_General_good_practice)* |  |
| 5 | You analyse T-SQL against Redgate code analysis rules | ☐ | *T-SQL coding standard, [7.6](#_Follow_Redgate’s_code)* |  |
| 6 | You format T-SQL using our common configuration settings | ☐ | *T-SQL coding standard, [7.20](#_Follow_our_code)* |  |

[^1]: Based on your queries and performance considerations

[^2]: For example [Brent Ozar Blitz
    Index](https://www.brentozar.com/blitzindex/) makes use of SQL
    Server's Missing Index Dynamic Management Views (DMVs)

[^3]: If you need to perform a Cartesian join, use the newer syntax
    CROSS APPLY -- most likely when shredding XML/JSON data.

[^4]: This should be resolved in the application design.

[^5]: Although you may consider this an acceptable risk.

[^6]: Available in SQL Server 2016 onwards

[^7]: This is caused because SQL Server caches the view\'s output
    metadata but doesn\'t update the cache when underlying objects
    change.

[^8]: **Note**: This is contrary to the general coding standards. But
    Redgate discourages interweaving Data Definition Language (e.g.
    CREATE TABLE) and Data Manipulation Language statements (e.g.
    SELECT).

[^9]: But beware of situations where this is counterproductive. For
    example, having many procedures prefixed with 'Get' makes any
    specific stored procedure difficult to spot. See the section
    '[Exceptions prove the rule'](#_Exceptions_Prove_the).

[^10]: This rule raised the concern that we could end up with differing
    coding standards based on language and technology and we will.
    However, SQL is a set-based language -- it's acceptable that
    different rules apply.

[^11]: Be aware that Redgate SQL prompts adds aliases in lower case
    based on the leading letters in a camel case table name.

[^12]: Use abbreviations only when there can be no doubt as to their
    meaning.

[^13]: Included columns prevent a key-lookup in the query plan and so
    aid performance.

[^14]: In this regard, SQL prompt is necessary to implement the standard

[^15]: <https://documentation.red-gate.com/codeanalysis/code-analysis-for-sql-server/style-rules/st010>

[^16]: E.g. D:\\Users\\NatTD_ge080206\\*AppData\\Local\\Red Gate\\SQL
    Prompt 9\\StylesV2*

