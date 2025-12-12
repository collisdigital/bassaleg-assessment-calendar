# Follow our naming rules (see also table design rules)

You **SHOULD: -**

-   Use descriptive names, favouring readability over brevity.

-   **Favour singular nouns over plurals for table names views and
    scalars** (columns, parameters and variables.) T**he use of a
    collective name is best.**

-   **Use a mix of verbs and nouns in the present tense for functions
    and stored procedure names**[^9]**.**

-   Use uppercase for all *Keywords, Built-in functions, built-in
    datatypes* and *Global Variables*[^10].
    

-   Use Pascal Casing (with the first letter and each subsequent
    concatenated word capitalized) consistently for all other
    names[^11].

-   **Use capitalization where common abbreviations**[^12] **are used.**

-   Use prefixes and underscores for the following common naming
    conventions (next page).

You **SHOULD NOT: -**

-   **Rely on** system generated named objects such as constraints or
    indexes.

-   Use abbreviations, spaces, or non-standard characters and reserved
    words. Doing so avoids the need to use square brackets.

-   **Prefix stored procedures with** sp\_ **Doing so impedes
    performance because SQL Server searches the master database first.**
    

-   Use prefixes (Hungarian notation), suffixes and underscores except
    where specific naming conventions exist (see the next page.)

|  | * * P r e f i x * * | > ** Usage** | > **Example** | > **Notes** |
| --- | --- | --- | --- | --- |
| > ! [ E x a m p l e > o f > g o o d > p r a c t i c e ]( . / m e d i a / i m a g e 3 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " > h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | * * p r * * | Stored Pr ocedure | > pr GetReportIDAndIdentifiers | > Optional, but use > must be consistent > within a database |
| > ! [ E x a m p l e > o f > g o o d > p r a c t i c e ]( . / m e d i a / i m a g e 3 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " > h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | * * f n * * | F unction | fnSaveNewPassword |  |
| > ! [ E x a m p l e > o f > g o o d > p r a c t i c e ]( . / m e d i a / i m a g e 3 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " > h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | * * t r * * | Trigger | trAuditChangeToNHSNumber |  |
| > ! [ E x a m p l e > o f > g o o d > p r a c t i c e ]( . / m e d i a / i m a g e 3 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " > h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | * * C I X \ _ * * | Cl ustered Index | CIX_Report_Id | Table name and indexes are also separated by an underscore. |
| > ! [ E x a m p l e > o f > g o o d > p r a c t i c e ]( . / m e d i a / i m a g e 3 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " > h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | * * P K \ _ * * | Primary Key | PK_Report | Table name |
| > ! [ E x a m p l e > o f > g o o d > p r a c t i c e ]( . / m e d i a / i m a g e 3 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " > h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | * * I X \ _ * * | Index | IX_Report_SubjectDoBFamil yNameGivenNameId_includes | Table name and indexes are also separated by an underscore. Use "includes" showing the index has included columns[^13]. |
| > ! [ E x a m p l e > o f > g o o d > p r a c t i c e ]( . / m e d i a / i m a g e 3 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " > h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | * * F K \ _ * * | Foreign Key | FK_Refer enceDataValue_ID_PlacerID | Table name, referenced field(s) and referencing field(s) also separated by an underscore |
| > ! [ E x a m p l e > o f > g o o d > p r a c t i c e ]( . / m e d i a / i m a g e 3 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " > h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | * * D F \ _ * * | Default con straint |  |  |
| > ! [ E x a m p l e > o f > g o o d > p r a c t i c e ]( . / m e d i a / i m a g e 3 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " > h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | * * C K \ _ * * | Check con straint |  |  |
| > ! [ E x a m p l e > o f > g o o d > p r a c t i c e ]( . / m e d i a / i m a g e 3 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " > h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | * * U Q \ _ * * | Unique con straint |  |  |

!!! info "Further reading and information"
    [Publicly Available Standards (iso.org)](https://standards.iso.org/ittf/PubliclyAvailableStandards/c060341_ISO_IEC_11179-5_2015.zip)

    [Reserved Keywords (Transact-SQL) - SQL Server \| Microsoft Learn](https://learn.microsoft.com/en-gb/sql/t-sql/language-elements/reserved-keywords-transact-sql?view=sql-server-ver16)

    [The 9 Most Common Database Design Errors \| Vertabelo Database Modeler](https://vertabelo.com/blog/the-9-most-common-database-design-errors/) (No. #4)

    [Ten Common Database Design Mistakes - Simple Talk (red-gate.com)](https://www.red-gate.com/simple-talk/databases/sql-server/database-administration-sql-server/ten-common-database-design-mistakes/)

