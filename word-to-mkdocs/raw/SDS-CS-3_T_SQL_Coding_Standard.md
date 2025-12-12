  -----------------------------------------------------------------------
  STRATEGIC OBJECTIVE       Delivering High Quality Digital Services
  ------------------------- ---------------------------------------------

  -----------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [WELL-BEING OF FUTURE GENERATIONS                                                                                                     A healthier Wales
  ACT](https://gov.wales/sites/default/files/publications/2019-08/well-being-of-future-generations-wales-act-2015-the-essentials.pdf)   
  ------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------
  If more than one standard applies, please list below:                                                                                 

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------
  [DHCW QUALITY                                                                  ISO 9001
  STANDARDS](https://informatics.wales.nhs.uk/FinBus/Qual/SitePages/Home.aspx)   
  ------------------------------------------------------------------------------ ---------------------------------------------
  If more than one standard applies, please list below:                          

  ----------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------
  [DUTY OF QUALITY                                                                                    Leadership
  ENABLER](https://nhswales365.sharepoint.com/sites/DHC_Quality/SitePages/The-Duty-of-Quality.aspx)   
  --------------------------------------------------------------------------------------------------- ---------------------------------------------
  [DOMAIN OF                                                                                          Choose an item.
  QUALITY](https://nhswales365.sharepoint.com/sites/DHC_Quality/SitePages/The-Duty-of-Quality.aspx)   

  If more than one enabler / domain applies, please list below:                                       
  -------------------------------------------------------------------------------------------------------------------------------------------------

+-------------------------+--------------------------------------------+
| [EQUALITY IMPACT        | Date of submission:                        |
| ASSESSMENT              |                                            |
| STATEMENT](htt          |                                            |
| ps://phw.nhs.wales/serv |                                            |
| ices-and-teams/equality |                                            |
| -impact-assessment-in-w |                                            |
| ales-practice-hub/equal |                                            |
| ity-impact-assessment/) |                                            |
+=========================+============================================+
| No, (detail included    | Outcome:                                   |
| below as to reasoning)  |                                            |
+-------------------------+--------------------------------------------+
| Statement:              |                                            |
|                         |                                            |
| This guidance note      |                                            |
| provides additional     |                                            |
| information to support  |                                            |
| adherence to our policy |                                            |
| -- The Principles and   |                                            |
| Standards of Software   |                                            |
| Development. The policy |                                            |
| itself has an equality  |                                            |
| impact assessment.      |                                            |
+-------------------------+--------------------------------------------+

+--------------------------+-------------------------------------------+
| IMPACT ASSESSMENT        |                                           |
+==========================+===========================================+
| QUALITY AND SAFETY       | No, there are no specific quality and     |
|                          | safety implications related to the        |
| IMPLICATIONS / IMPACT    | activity outlined in this report.         |
+--------------------------+-------------------------------------------+
|                          |                                           |
+--------------------------+-------------------------------------------+
| LEGAL                    | No, there are no specific legal           |
|                          | implications related to the activity      |
| IMPLICATIONS / IMPACT    | outlined in this report.                  |
+--------------------------+-------------------------------------------+
|                          |                                           |
+--------------------------+-------------------------------------------+
| FINANCIAL                | No, there are no specific financial       |
|                          | implication related to the activity       |
| IMPLICATIONS / IMPACT    | outlined in this report                   |
+--------------------------+-------------------------------------------+
|                          |                                           |
+--------------------------+-------------------------------------------+
| WORKFORCE                | No, there is no direct impact on          |
|                          | resources as a result of the activity     |
| IMPLICATIONS / IMPACT    | outlined in this report.                  |
+--------------------------+-------------------------------------------+
|                          |                                           |
+--------------------------+-------------------------------------------+
| [SOCIO                   | No. there are no specific socio-economic  |
| ECON                     | implications related to the activity      |
| OMIC](https://www.gov.wa | outlined in this report                   |
| les/socio-economic-duty- |                                           |
| scrutiny-framework-html) |                                           |
|                          |                                           |
| IMPLICATIONS / IMPACT    |                                           |
+--------------------------+-------------------------------------------+
|                          |                                           |
+--------------------------+-------------------------------------------+
| RESEARCH AND INNOVATION  | No, there are no specific research and    |
|                          | innovation implications relating to the   |
| IMPLICATIONS / IMPACT    | activity outlined within this report.     |
+--------------------------+-------------------------------------------+
|                          |                                           |
+--------------------------+-------------------------------------------+

**TABLE OF CONTENTS**

[1 PURPOSE [4](#purpose)](#purpose)

[2 SCOPE [4](#scope)](#scope)

[3 CONventions [4](#conventions)](#conventions)

[4 THE NEED FOR GUIDANCE
[5](#the-need-for-guidance)](#the-need-for-guidance)

[5 sTANDARDS [5](#standards)](#standards)

[5.1 Avoid Using T-SQL to Execute Business Logic
[5](#avoid-using-t-sql-to-execute-business-logic)](#avoid-using-t-sql-to-execute-business-logic)

[5.2 Follow These Rules when using an Object Relational Mapper (ORM)
[5](#follow-these-rules-when-using-an-object-relational-mapper-orm)](#follow-these-rules-when-using-an-object-relational-mapper-orm)

[5.3 General Good Practice
[5](#general-good-practice)](#general-good-practice)

[5.4 Follow out Table design Rules: Schemes and Indexes
[7](#follow-out-table-design-rules-schemes-and-indexes)](#follow-out-table-design-rules-schemes-and-indexes)

[5.5 Follow our Table Rules: Columns and Datatypes
[8](#follow-our-table-rules-columns-and-datatypes)](#follow-our-table-rules-columns-and-datatypes)

[5.6 Apply Code Analysis Rules
[9](#apply-code-analysis-rules)](#apply-code-analysis-rules)

[6.7 Working with Transactions
[10](#working-with-transactions)](#working-with-transactions)

[5.8 TOp (N) and Order By
[10](#top-n-and-order-by)](#top-n-and-order-by)

[5.9 XML and JSON [11](#xml-and-json)](#xml-and-json)

[5.10 Date and Time [11](#date-and-time)](#date-and-time)

[5.11 Aliases [12](#aliases)](#aliases)

[5.12 Views [12](#views)](#views)

[5.13 Stored Procedures [12](#stored-procedures)](#stored-procedures)

[5.14 Handling Exceptions
[14](#handling-exceptions)](#handling-exceptions)

[5.15 Working with User Defined Functions (UDF)
[14](#working-with-user-defined-functions-udf)](#working-with-user-defined-functions-udf)

[5.16 Working with Triggers
[14](#working-with-triggers)](#working-with-triggers)

[5.17 Permissions [15](#permissions)](#permissions)

[5.18 Working with SQL Server Agent
[15](#working-with-sql-server-agent)](#working-with-sql-server-agent)

[5.19 Follow our Naming Rules (See also Table design rules)
[15](#follow-our-naming-rules-see-also-table-design-rules)](#follow-our-naming-rules-see-also-table-design-rules)

[5.20 Follow our Code Layout Rules
[19](#follow-our-code-layout-rules)](#follow-our-code-layout-rules)

[5.21 Code Comments [19](#code-comments)](#code-comments)

[6 Exceptions Prove the Rule
[19](#exceptions-prove-the-rule)](#exceptions-prove-the-rule)

[7 Examples [19](#examples)](#examples)

[7.1 INSERT Statement [19](#insert-statement)](#insert-statement)

[7.2 SELECT Statement [20](#select-statement)](#select-statement)

[7.3 Queries [20](#queries)](#queries)

[7.4 Dates #1 [21](#dates-1)](#dates-1)

[7.5 Dates #2 [21](#dates-2)](#dates-2)

[7.6 Stored procedures #1
[22](#stored-procedures-1)](#stored-procedures-1)

[7.7 sTORED pROCEDURES #2
[24](#stored-procedures-2)](#stored-procedures-2)

[6.8 nAMING [29](#naming)](#naming)

[8 sql pROMPT cONFIGURATION
[30](#sql-prompt-configuration)](#sql-prompt-configuration)

[8.1 sql pROMPT sETTINGS fILE
[30](#sql-prompt-settings-file)](#sql-prompt-settings-file)

[8.2 sql pROMPT fORMATTING sTYLE fILE
[31](#sql-prompt-formatting-style-file)](#sql-prompt-formatting-style-file)

[9 gOOD pRACTICE cHECKLISTS
[34](#good-practice-checklists)](#good-practice-checklists)

[9.1 gENERAL gOOD pRACTICE
[34](#general-good-practice-1)](#general-good-practice-1)

#  PURPOSE

-   Describes the Application Development and Support Directorate's
    coding standard for writing T-SQL.

-   Demonstrates the importance of following good practice by quoting
    examples of working practices that have contributed to clinical
    incidents.

# SCOPE

Software Developers have a responsibility to follow this guide.

-   Developers not using T-SQL may need to adjust to their version of
    SQL or consider the need for a local coding standard.

# CONventions

The key words \"MUST\", \"MUST NOT\", \"REQUIRED\", \"SHALL\", \"SHALL
NOT\", \"SHOULD\", \"SHOULD NOT\", \"RECOMMENDED\", \"MAY\", and
\"OPTIONAL\" in this document are to be interpreted as described in RFC
2119.

+-----+----------------------------------------------------------------+
| ![  | Practical tips                                                 |
| Pra |                                                                |
| cti |                                                                |
| cal |                                                                |
| tip |                                                                |
| s]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e1. |                                                                |
| png |                                                                |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.3 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| 015 |                                                                |
| 748 |                                                                |
| in" |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .39 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 740 |                                                                |
| 157 |                                                                |
| 48i |                                                                |
| n"} |                                                                |
+=====+================================================================+
| ![E | Examples of good practice...                                   |
| xam |                                                                |
| ple |                                                                |
| of  |                                                                |
| g   |                                                                |
| ood |                                                                |
| p   |                                                                |
| rac |                                                                |
| tic |                                                                |
| e]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
| png |                                                                |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.1 |                                                                |
| 968 |                                                                |
| 503 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| in" |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .19 |                                                                |
| 685 |                                                                |
| 039 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+-----+----------------------------------------------------------------+
| ![  | ...and practices to avoid.                                     |
| ](. |                                                                |
| /me | Indicates that this rule can be implemented using Redgate SQL  |
| dia | Prompt                                                         |
| /im |                                                                |
| age | +-----+----------------------------------------------------+   |
| 5.p | | ![F | Links to further guides, information and work      |   |
| ng) | | urt | instructions.                                      |   |
| {wi | | her |                                                    |   |
| dth | | r   | **Note** Links to SQL Server content in Microsoft  |   |
| ="0 | | ead | Learn© default to SQL Server 2022. Use its version |   |
| .13 | | ing | selector to tailor the website for other versions. |   |
| 541 | | and |                                                    |   |
| 666 | | i   |                                                    |   |
| 666 | | nfo |                                                    |   |
| 666 | | rma |                                                    |   |
| 666 | | tio |                                                    |   |
| in" | | n]( |                                                    |   |
| h   | | ./m |                                                    |   |
| eig | | edi |                                                    |   |
| ht= | | a/i |                                                    |   |
| "0. | | mag |                                                    |   |
| 179 | | e8. |                                                    |   |
| 166 | | png |                                                    |   |
| 666 | | ){w |                                                    |   |
| 666 | | idt |                                                    |   |
| 666 | | h=" |                                                    |   |
| 67i | | 0.4 |                                                    |   |
| n"} | | 638 |                                                    |   |
| ![E | | 888 |                                                    |   |
| xam | | 888 |                                                    |   |
| ple | | 888 |                                                    |   |
| of  | | 889 |                                                    |   |
| pra | | in" |                                                    |   |
| cti | | hei |                                                    |   |
| ces | | ght |                                                    |   |
| to  | | ="0 |                                                    |   |
| a   | | .46 |                                                    |   |
| voi | | 388 |                                                    |   |
| d]( | | 888 |                                                    |   |
| ./m | | 888 |                                                    |   |
| edi | | 888 |                                                    |   |
| a/i | | 89i |                                                    |   |
| mag | | n"} |                                                    |   |
| e6. | +=====+====================================================+   |
| png | +-----+----------------------------------------------------+   |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.1 |                                                                |
| 968 |                                                                |
| 503 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| in" |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .19 |                                                                |
| 685 |                                                                |
| 039 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+-----+----------------------------------------------------------------+

# THE NEED FOR GUIDANCE

Use this standard to -

-   write code in a consistent way. So that those who read it may draw
    on previous experience to understand it more quickly.

-   produce software that is based on good practice, is maintainable,
    performant and secure.

# sTANDARDS

## Avoid Using T-SQL to Execute Business Logic

As a rule, you **SHOULD NOT** place business logic in the database.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Should we use stored procedures or queries built in the app? - Brent Ozar
  information](./media/image8.png){width="0.4638888888888889in"   Unlimited®](https://www.brentozar.com/archive/2019/03/should-we-use-stored-procedures-or-queries-built-in-the-app/)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Follow These Rules when using an Object Relational Mapper (ORM)

You **MUST** consider this standard when using an Object-relational
mapping (ORM) tool such as Microsoft's Entity Framework. And to achieve
the best performance from your database: -

-   You **SHOULD** use stored procedures for data access. Support tools
    (such as those used for SQL Migrations) cannot identify issues with
    code that is not stored in the database.

-   You **SHOULD** follow good practice if working with ORMS. See ORM
    tips, below.

-   You **SHOULD NOT** use Entity Framework's code first approach to
    create and maintain database schemas.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [45 Database Performance Tips for Developers \| Redgate
  information](./media/image8.png){width="0.4638888888888889in"   (red-gate.com)](https://www.red-gate.com/library/45-database-performance-tips-for-developers)
  height="0.4638888888888889in"}                                  ORM Tips (pages 4 & 5)
  --------------------------------------------------------------- -----------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------

## General Good Practice

**You MUST store T-SQL scripts and database code in source control as a
'single source of truth. '**

You **SHOULD**: -

-   **Check your SQL application is performant. You may find your
    support team or Database Administrator (DBA)** may be able to help.

-   Review your code to address any issues, such as performance and
    security considerations.

-   **Share code using code snippets and a common repository.**

-   Conform to ANSI standards wherever possible.

-   Prefer CAST to CONVERT

-   Prefer SET to SELECT when assigning variables.

-   Prefer COALESCE to ISNULL

-   **Format and analyse your code using SQL Prompt before checking into
    source control.**

-   **Configure SQL Prompt using our config files. See** [SQL Prompt
    configuration](#_SQL_Prompt_configuration) **for help.**

**You SHOULD NOT: -**

-   Use deprecated features.

-   Use dynamic SQL. If you cannot avoid this then call it using
    sp_executesql rather than the EXECUTE statement.

-   Expect your DBA to performance tune your queries but do ask them for
    advice. Particularly what tools to use.

-   Use undocumented stored procedures.

-   **Create objects that flout the single responsibility pattern. Such
    as: -**

1.  **Entity-attribute-value tables.**

2.  **Generic stored procedures with no specific (or multiple) use
    > cases.**

3.  **Using a single table to hold all lookup values, metadata, and
    > domain or reference data.**

+-----+----------------------------------------------------------------+
| ![  | **WPRS -- Prioritisation incident**                            |
| Pra |                                                                |
| cti | In 2016, a failure to run SQL code analysis checks and deploy  |
| cal | from source control prevented referrals including those for    |
| tip | urgent suspected cancer being actioned.                        |
| s]( |                                                                |
| ./m | **WPRS -- WPAS (Welsh Patient Administration System) delayed   |
| edi | Urgent Suspected Cancer referral.**                            |
| a/i |                                                                |
| mag | In 2017, a failure to deploy the correct stored procedure led  |
| e1. | to a delay in referring a patient with urgent suspected        |
| png | cancer.                                                        |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.3 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| 015 |                                                                |
| 748 |                                                                |
| in" |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .39 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 740 |                                                                |
| 157 |                                                                |
| 48i |                                                                |
| n"} |                                                                |
+=====+================================================================+
+-----+----------------------------------------------------------------+

+------+---------------------------------------------------------------+
| !    | [How to Think Like the SQL Server Engine - Brent Ozar         |
| [Fur | Unlimited®](http                                              |
| ther | s://www.brentozar.com/training/think-like-sql-server-engine/) |
| rea  |                                                               |
| ding | [SQL Code Smells - Simple Talk                                |
| and  | (red-gate.com)](https://www.red-gate.com/simple-talk/databa   |
| i    | ses/sql-server/t-sql-programming-sql-server/sql-code-smells/) |
| nfor |                                                               |
| mati | [Discontinued database engine functionality - SQL Server \|   |
| on]( | Microsoft                                                     |
| ./me | Learn](https://lea                                            |
| dia/ | rn.microsoft.com/en-gb/sql/database-engine/discontinued-datab |
| imag | ase-engine-functionality-in-sql-server?view=sql-server-ver16) |
| e8.p |                                                               |
| ng){ |                                                               |
| widt |                                                               |
| h="0 |                                                               |
| .463 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 9in" |                                                               |
| he   |                                                               |
| ight |                                                               |
| ="0. |                                                               |
| 4638 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8889 |                                                               |
| in"} |                                                               |
+======+===============================================================+
+------+---------------------------------------------------------------+

## Follow out Table design Rules: Schemes and Indexes

You **SHOULD**: -

-   Specify a schema when creating a table from a script.

-   Ensure that each Primary Key comprises the column(s) that uniquely
    identify each row in the table.

-   Include the index type (clustered or non-clustered) when defining
    the Primary Key.
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Choose the most suitable column(s) for a clustered index[^1].

-   Use the Primary Key as the clustered index (it's the default and
    usually the prime candidate but not always!)

-   Include the table name and the indexed fields (ordered as specified
    in the index definition) in the index name.

-   **Use the** INCLUDE **clause of non-clustered indexes to cover
    columns returned in select clauses or used to join other tables.
    This prevents the query optimizer having to perform key-lookup
    operations.**

-   **Learn how the index column order in a multi-column index affects
    performance.**

-   **Define any necessary Foreign Key constraints on your tables.**

-   Include the table name, referenced field(s) and referencing field(s)
    in the Foreign Key name.

-   **Create an index on a foreign key's child table columns.**

-   **Review index reports**[^2] **with your support team. Remember that
    in high availability environments, such as an *Always On
    Availability Group*, the index usage is different on writable and
    read-only nodes.**

**You SHOULD NOT: -**

-   Create tables without defining a Primary Key or Clustered Index.

-   Use GUIDs (e.g. UNIQUEIDENTIFIER) for clustered keys, especially
    where the primary key is defined as the clustered index. This can
    result in performance problems. Rather use an alternative datatype,
    for example BIGINT, or use the function NEWSEQUENTIALID()to generate
    a GUID. This reduces fragmentation.

-   Use a column that is frequently updated in a clustered index.

-   **Create duplicate indexes. Remember, column order in the** INCLUDE
    **clause is *not* significant.**

+-----+----------------------------------------------------------------+
| ![  | **WCP (Welsh Clinical Portal) -- Missing Microbiology          |
| Pra | Results**                                                      |
| cti |                                                                |
| cal | In 2015, a database reference table allowing duplicates        |
| tip | contributed to the problem of missing electronic microbiology  |
| s]( | results.                                                       |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e1. |                                                                |
| png |                                                                |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.3 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| 015 |                                                                |
| 748 |                                                                |
| in" |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .39 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 740 |                                                                |
| 157 |                                                                |
| 48i |                                                                |
| n"} |                                                                |
+=====+================================================================+
+-----+----------------------------------------------------------------+

+------+---------------------------------------------------------------+
| !    | [SQL Server Best Practices -- Implementation of Database      |
| [Fur | Object Schemas \| Microsoft                                   |
| ther | Learn](https://learn.microsoft.com/en-                        |
| rea  | gb/previous-versions/sql/sql-server-2008/dd283095(v=sql.100)) |
| ding |                                                               |
| and  | [Handling Constraint Violations and Errors in SQL Server -    |
| i    | Simple Talk                                                   |
| nfor | (red-gate.com)](https://www.red-gate.c                        |
| mati | om/simple-talk/databases/sql-server/t-sql-programming-sql-ser |
| on]( | ver/handling-constraint-violations-and-errors-in-sql-server/) |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e8.p |                                                               |
| ng){ |                                                               |
| widt |                                                               |
| h="0 |                                                               |
| .463 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 9in" |                                                               |
| he   |                                                               |
| ight |                                                               |
| ="0. |                                                               |
| 4638 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8889 |                                                               |
| in"} |                                                               |
+======+===============================================================+
+------+---------------------------------------------------------------+

## Follow our Table Rules: Columns and Datatypes

You **SHOULD**: -

-   Specify the nullability on columns.
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Define column **data types (such as** VARCHAR and CHAR**)
    appropriately.**

-   **Specify the length of a character column, even if you want it to
    be one. This rule applies when also declaring or casting variable
    datatypes.**

-   Use **fixed-length datatypes rather than declaring variables as
    variable length of length 1 or
    2.**![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   **Include the precision and scale (when supported) when specifying
    numeric types. This prevents you being bound to the default
    values.**

-   Follow good database design practices. And if you consider yourself
    an 'Accidental DBA' be sure to read the 'Accidental DBA guide'!

You **SHOULD NOT**:-

-   **Use the** CHAR **or** NCHAR **data type for columns that permit
    NULL values.**

-   **Use** VARCHAR(MAX) **when unnecessary.**

-   Use the TEXT or NTEXT datatypes.

-   Declare variables without a datatype length. For example, DECLARE
    \@MyVar VARCHAR; is to be avoided.

-   Use inappropriate datatypes. For example, storing numbers or dates
    as VARCHAR.

+------+---------------------------------------------------------------+
| !    | [How to Get NULLs Horribly Wrong in SQL Server - Simple Talk  |
| [Fur | (red-gate.com)](https://www.                                  |
| ther | red-gate.com/simple-talk/databases/sql-server/t-sql-programmi |
| rea  | ng-sql-server/how-to-get-nulls-horribly-wrong-in-sql-server/) |
| ding |                                                               |
| and  | [Troubleshooting SQL Server: A Guide for Accidental DBAs \|   |
| i    | Redgate                                                       |
| nfor | (red-gate.com)](https://www.red-gate.com/li                   |
| mati | brary/troubleshooting-sql-server-a-guide-for-accidental-dbas) |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e8.p |                                                               |
| ng){ |                                                               |
| widt |                                                               |
| h="0 |                                                               |
| .463 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 9in" |                                                               |
| he   |                                                               |
| ight |                                                               |
| ="0. |                                                               |
| 4638 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8889 |                                                               |
| in"} |                                                               |
+======+===============================================================+
+------+---------------------------------------------------------------+

## Apply Code Analysis Rules

You **SHOULD**: -

-   Specify column names when using INSERT, even when inserting data
    into all columns.
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Expand the asterisk wildcard to explicitly define all columns.
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Qualify object names. Prefix each reference to a table with its
    schema (but not the database name) and each column to its parent
    table (or alias) in SELECT statements.
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Terminate all statements with a semi-colon and with no leading
    whitespace. ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Favour EXISTS or table joins over IN or COUNT where it's sensible to
    do so. ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   **Include an** ELSE **block with each** CASE expression.
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Prefer the use of SCOPE_IDENTITY() to @@IDENTITY.
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Use Common Table Expressions (CTEs) instead of non-correlated
    subqueries. A CTE is easier to read than a subquery and offers the
    same performance.

-   Use functions like ISNULL**,** IS NULL**,** ISNUMERIC**,**
    TRY_CONVERT**,** COALESCE **and** CAST **correctly.**

**You SHOULD NOT:-**

-   Use INSERT INTO ***\<table\>* with an** ORDER BY **clause. The order
    depends on the clustered index if one is
    defined.**![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   **Use** DELETE **without a** WHERE **or** INNER JOIN clause
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   **Use** UPDATE **without a** WHERE **or** INNER JOIN clause
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Use correlated sub-queries. (The exception to this is the use of
    EXISTS.)

-   **Define** JOIN **conditions in the** WHERE **clause.** Include the
    JOIN condition in the ON clause.
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   **Include** WHERE **clauses in** SELECT **statements**[^3] **to
    prevent defining Cartesian joins.**

-   **Use** ISNULL **in a** WHERE **or** JOIN **clause. Expressions need
    to use** IS \[NOT\] NULL **and the** COALESCE **function to handle**
    NULL **values appropriately.**
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   **Use comparison operators against a** NULL **value.**
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   **Use** DISTINCT where it is not required. Use a GROUP BY clause
    where possible and check JOIN conditions to eliminate duplicate
    rows.

-   Use wildcards (such as %) at the start of LIKE in WHERE clauses.
    Indexes *cannot* support wildcard queries at the start of a LIKE
    expression.

-   **Reference columns that do not have indexes in a** WHERE**,** JOIN
    **or** ORDER BY **clause.**

-   **Use system or user-defined scalar functions in a** WHERE **or**
    JOIN **clause. Functions are evaluated for each row in the result
    set. Any indexes cannot be used on the column the function is being
    performed on.**

-   Use the NOLOCK hint. It's safer to specify the correct isolation
    level instead.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              **Use Redgate** SQL Prompt to help you implement code analysis
  tips](./media/image1.png){width="0.3937007874015748in"   rules. See [Follow our code layout rules](#_Follow_our_code)
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | [Code Analysis - Product Documentation                        |
| [Fur | (re                                                           |
| ther | d-gate.com)](https://documentation.red-gate.com/codeanalysis) |
| rea  |                                                               |
| ding | [How to Get NULLs Horribly Wrong in SQL Server - Simple Talk  |
| and  | (red-gate.com)](https://www.                                  |
| i    | red-gate.com/simple-talk/databases/sql-server/t-sql-programmi |
| nfor | ng-sql-server/how-to-get-nulls-horribly-wrong-in-sql-server/) |
| mati |                                                               |
| on]( | [SQL Server Common Table Expression (CTE) Basics - Simple     |
| ./me | Talk                                                          |
| dia/ | (red                                                          |
| imag | -gate.com)](https://www.red-gate.com/simple-talk/databases/sq |
| e8.p | l-server/t-sql-programming-sql-server/sql-server-cte-basics/) |
| ng){ |                                                               |
| widt | [Lookup Table Madness --                                      |
| h="0 | SQLServerCentral](ht                                          |
| .463 | tps://www.sqlservercentral.com/articles/lookup-table-madness) |
| 8888 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 9in" |                                                               |
| he   |                                                               |
| ight |                                                               |
| ="0. |                                                               |
| 4638 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8889 |                                                               |
| in"} |                                                               |
+======+===============================================================+
+------+---------------------------------------------------------------+

## 6.7 Working with Transactions {#working-with-transactions .unnumbered}

You **SHOULD pair each** BEGIN TRANSACTION **with a** COMMIT **or**
ROLLBACK TRANSACTION **(and vice versa.) Open transactions can cause
applications to fail if left unchecked.**

**You SHOULD NOT: -**

-   **Perform cross database transactions even where SQL Server supports
    them.**

-   **Perform cross server queries (using linked servers or** OPENQUERY
    [^4]**.)**

-   Perform cross database queries in mirrored environments. They will
    fail should database failover occur[^5].

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Transactions: availability groups & database mirroring - SQL Server Always On \| Microsoft
  information](./media/image8.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-GB/sql/database-engine/availability-groups/windows/transactions-always-on-availability-and-database-mirroring?view=sql-server-ver16)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## TOp (N) and Order By

**You SHOULD** try to order result sets in the application layer.
Because qualifying statements with ORDER BY are expensive in SQL!

**You SHOULD NOT: -**

-   **Use** SET ROWCOUNT**. Prefer the** TOP(N) **syntax of the** SELECT
    **statement.** ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   U**se** TOP **in a** SELECT **list without using** ORDER BY
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"} It's clear and returns consistent
    results.

-   U**se constants in an** ORDER BY **clause; It's deprecated and makes
    code hard to
    read.**![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Avoid using constants in an ORDER BY clause \| Redgate
  information](./media/image8.png){width="0.4638888888888889in"   (red-gate.com)](https://www.red-gate.com/hub/product-learning/sql-prompt/avoid-using-constants-in-an-order-by-clause)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## XML and JSON

**You SHOULD** use SQL Server XML and JSON functions & methods[^6] to
build and consume XML and JSON data.

**You SHOULD NOT:-**

-   Build XML or JSON by concatenating strings. The loop construct
    hinders performance and can provide data in an invalid data format.

-   **Use XML or JSON data type methods and functions in a** WHERE
    **or** JOIN **clause, except when working with small result sets in
    a temporary table or table variable.**

## Date and Time

**You SHOULD: -**

-   Use a suitable date / time datatype. Their precision differs and
    affects the performance of your queries accordingly.

-   Express dates in ISO format to remove ambiguity. For example,
    12/04/2017 may be interpreted as 12^th^ April or 4^th^ December
    depending on your configuration.

+-----+----------------------------------------------------------------+
| ![E | > Use year, month day yyyymmdd format for a date alone (e.g.,  |
| xam | > 20171204)                                                    |
| ple |                                                                |
| of  |                                                                |
| g   |                                                                |
| ood |                                                                |
| p   |                                                                |
| rac |                                                                |
| tic |                                                                |
| e]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
| png |                                                                |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.1 |                                                                |
| 968 |                                                                |
| 503 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| in" |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .19 |                                                                |
| 685 |                                                                |
| 039 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+=====+================================================================+
| ![E | > Use year, month, day and time format yyyy-MM-ddThh:mm:ss.xxx |
| xam | > for a date & time (e.g. 2017-12-04T14:24:30.123)             |
| ple |                                                                |
| of  |                                                                |
| g   |                                                                |
| ood |                                                                |
| p   |                                                                |
| rac |                                                                |
| tic |                                                                |
| e]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
| png |                                                                |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.1 |                                                                |
| 968 |                                                                |
| 503 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| in" |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .19 |                                                                |
| 685 |                                                                |
| 039 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+-----+----------------------------------------------------------------+

-   **Cast** DATETIME **or** SMALLDATETIME **fields to** DATE **if
    you're interested only in the date part. SQL Server supports this.**

**You SHOULD NOT:-**

-   Use DATEDIFF when searching date ranges. As with other functions,
    this prevents the database engine making use of any indexes.

-   Use BETWEEN for searching datetime ranges. The start and end of the
    range can appear ambiguous. Use the operators \>*,* \<*,* \>=*,*
    \<=*,* = instead.

-   Use the *+* or *--* operators on date/time fields; It is unclear
    what unit is being applied. For example, it's not clear that
    GETDATE()+1) will return this time tomorrow. Newer datatypes such as
    DATE, DATETIME2 and DATETIMEOFFSET throw errors when used in this
    way.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [How to Get SQL Server Dates and Times Horribly Wrong - Simple Talk
  information](./media/image8.png){width="0.4638888888888889in"   (red-gate.com)](https://www.red-gate.com/simple-talk/databases/sql-server/t-sql-programming-sql-server/how-to-get-sql-server-dates-and-times-horribly-wrong/)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Aliases 

You **SHOULD:-**

-   Alias *ALL* table names using the convention AS *\<alias\>*.
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   **Use meaningful** alias names, following our naming conventions
    (see later in this document.)

-   **Qualify each column with the parent table or alias, especially
    where the parent table is part of a join or subquery.**
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

## Views

You **SHOULD NOT: -**

-   Define nested views. Views that call or join to other views can
    result in complex query plans.

-   Use wildcards in view definitions as it can result in unexpected
    behaviour[^7].

-   Use ORDER BY in views. Use the ORDER BY clause only in the outermost
    query.

## Stored Procedures

You **SHOULD: -**

-   **Use meaningful names to indicate the purpose of procedures &
    parameters. Be verbose if needed.**

-   **Match parameter datatypes to the underlying data to avoid implicit
    conversion.**

-   **Include a comment header to indicate the procedure's purpose and
    use. Include an example call if possible.**

-   **Enclose procedures with** BEGIN END **blocks after the** AS
    **keyword.** ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Add the SET NOCOUNT ON statement before any Data Manipulation
    Language statements unless you have good reason for not doing so.
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   **Use** SET XACT_ABORT ON**. It terminates and rollbacks the entire
    transaction when a T-SQL statement raises a run-time error.**

-   **Declare variables, table variables and temp tables at the start of
    a procedure**[^8]**.**

-   **Use** BEGIN **and** END **after** IF**, even if only one statement
    is covered. This makes the code clearer and avoids errors if further
    statements are added to the** IF **block later.**

-   **Use table variables for transitory tables with *less* than 1000
    rows.** ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   **Use temporary tables for transitory tables with *more* than 1000
    rows.** ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Use **explicit transactions when updating data.**

-   **Use SavePoints within a transaction. The use of SavePoint can
    allow you to rollback a series of statements within a transaction.**

-   Pass parameters explicitly to Stored Procedures and EXECUTE
    statements wherever possible**.**
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

You **SHOULD NOT: -**

-   **Set the** ANSI_NULLS **option. It should normally be set to ON and
    is deprecated by Microsoft and not supported for certain indexes.**
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   **Set the** QUOTED_IDENTIFIER **option. It has no effect and should
    normally be set to ON.**
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Declare **variables** you never use.
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Use CURSOR *s* and WHILE clauses.

-   Use Table Variables, Temporary Tables, Common Table Expressions and
    Subqueries without understanding their impact on performance.

-   **Use nested transactions. A** ROLLBACK **of a nested transaction
    can affect more than just the statements executed.**

-   **Return multiple result sets.**

-   **Supply stored procedures with a wide range of data parameters. SQL
    Server compiles these to a single query plan.**

+------+---------------------------------------------------------------+
| !    | [Discontinued database engine functionality - SQL Server \|   |
| [Fur | Microsoft                                                     |
| ther | Learn](https://lea                                            |
| rea  | rn.microsoft.com/en-gb/sql/database-engine/discontinued-datab |
| ding | ase-engine-functionality-in-sql-server?view=sql-server-ver16) |
| and  |                                                               |
| i    | [Temporary Tables in SQL Server - Simple Talk                 |
| nfor | (red-gate.com                                                 |
| mati | )](https://www.red-gate.com/simple-talk/databases/sql-server/ |
| on]( | t-sql-programming-sql-server/temporary-tables-in-sql-server/) |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e8.p |                                                               |
| ng){ |                                                               |
| widt |                                                               |
| h="0 |                                                               |
| .463 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 9in" |                                                               |
| he   |                                                               |
| ight |                                                               |
| ="0. |                                                               |
| 4638 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8889 |                                                               |
| in"} |                                                               |
+======+===============================================================+
+------+---------------------------------------------------------------+

## Handling Exceptions

You **SHOULD: -**

-   Manage exceptions in each stored procedure, but you **SHOULD NOT**
    mask the error from the calling application.

-   Use the TRY \... CATCH construct to handle errors in T-SQL.

-   **Use a log table to record errors handled. It helps with support
    and maintenance.**

-   Favour THROW over RAISERROR wherever possible (i.e. in database
    compatibility SQL 2012 and later.)

-   Return a result code.
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

## 5.15 Working with User Defined Functions (UDF) {#working-with-user-defined-functions-udf .unnumbered}

You **SHOULD:-**

-   **Use inline table valued functions instead of scalar functions
    where possible.**

-   **Use** WITH SCHEMABINDING **for non-data accessing scalar user
    defined functions. It forces SQL server to check data access is
    occurring at design time. Thus, preventing the need to do so during
    execution.**

You **SHOULD NOT: -**

-   **Use multi-statement table valued functions; these can impede
    performance**.

-   **Use side-effecting operators within a user defined function, for
    example** SELECT**,** PRINT**,** INSERT**,** UPDATE**,** TRY**,**
    CATCH

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [TSQL User-Defined Functions: Ten Questions You Were Too Shy to Ask - Simple Talk
  information](./media/image8.png){width="0.4638888888888889in"   (red-gate.com)](https://www.red-gate.com/simple-talk/databases/sql-server/learn/tsql-user-defined-functions-ten-questions-you-were-too-shy-to-ask/)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Working with Triggers

You **SHOULD NOT: -**

-   **Use triggers. They can affect performance and hide business logic.
    Consider moving the required logic to another part of the
    application. It makes support and maintenance easier!**

-   **Return data from a trigger using either** SELECT **or** PRINT**.**
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Triggers: Threat or Menace? - Simple Talk
  information](./media/image8.png){width="0.4638888888888889in"   (red-gate.com)](https://www.red-gate.com/simple-talk/databases/sql-server/t-sql-programming-sql-server/triggers-threat-menace/)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Permissions

You **SHOULD: -**

-   Define database roles for the specific type of database access
    required.

-   Grant database object permissions *only* to database roles.

-   Grant database access to Active Directory groups and service
    accounts via membership of database roles.

-   Record information about the accounts you create and the permissions
    you assign them in each environment.

You **SHOULD NOT: -**

-   Instinctively grant database owner (dbo) permissions.

-   Use SQL Server logins, unless working with a 3^rd^ party application
    that specifically requires their use.

-   Grant database access to individual user accounts.

## Working with SQL Server Agent

You **SHOULD: -**

-   Define job steps that call stored procedures.

-   Make sure jobs exist across all your high-availability SQL instances
    (e.g., both side of the mirror, availability group nodes.)

-   Add an initial step to jobs on mirrors to allow the job to stop with
    a warning rather than error.

-   Make use of the job categories

-   Use job categories or the description field to track temporarily
    disabled and retired jobs.

You **SHOULD NOT** define job steps with ad-hoc SQL; It hides
application logic, and you are unable to manage it using SQL Source
Control.

## Follow our Naming Rules (See also Table design rules)

You **SHOULD: -**

-   Use descriptive names, favouring readability over brevity.

-   **Favour singular nouns over plurals for table names views and
    scalars** (columns, parameters and variables.) T**he use of a
    collective name is best.**

-   **Use a mix of verbs and nouns in the present tense for functions
    and stored procedure names**[^9]**.**

-   Use uppercase for all *Keywords, Built-in functions, built-in
    datatypes* and *Global Variables*[^10].
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

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
    ![](./media/image5.png){width="0.13541666666666666in"
    height="0.17916666666666667in"}

-   Use prefixes (Hungarian notation), suffixes and underscores except
    where specific naming conventions exist (see the next page.)

+---+---+---------+---------------------------+----------------------+
|   | * | > **    | > **Example**             | > **Notes**          |
|   | * | Usage** |                           |                      |
|   | P |         |                           |                      |
|   | r |         |                           |                      |
|   | e |         |                           |                      |
|   | f |         |                           |                      |
|   | i |         |                           |                      |
|   | x |         |                           |                      |
|   | * |         |                           |                      |
|   | * |         |                           |                      |
+===+===+=========+===========================+======================+
| > | * | Stored  | > pr                      | > Optional, but use  |
|   | * | Pr      | GetReportIDAndIdentifiers | > must be consistent |
| ! | p | ocedure |                           | > within a database  |
| [ | r |         |                           |                      |
| E | * |         |                           |                      |
| x | * |         |                           |                      |
| a |   |         |                           |                      |
| m |   |         |                           |                      |
| p |   |         |                           |                      |
| l |   |         |                           |                      |
| e |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| o |   |         |                           |                      |
| f |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| g |   |         |                           |                      |
| o |   |         |                           |                      |
| o |   |         |                           |                      |
| d |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| p |   |         |                           |                      |
| r |   |         |                           |                      |
| a |   |         |                           |                      |
| c |   |         |                           |                      |
| t |   |         |                           |                      |
| i |   |         |                           |                      |
| c |   |         |                           |                      |
| e |   |         |                           |                      |
| ] |   |         |                           |                      |
| ( |   |         |                           |                      |
| . |   |         |                           |                      |
| / |   |         |                           |                      |
| m |   |         |                           |                      |
| e |   |         |                           |                      |
| d |   |         |                           |                      |
| i |   |         |                           |                      |
| a |   |         |                           |                      |
| / |   |         |                           |                      |
| i |   |         |                           |                      |
| m |   |         |                           |                      |
| a |   |         |                           |                      |
| g |   |         |                           |                      |
| e |   |         |                           |                      |
| 3 |   |         |                           |                      |
| . |   |         |                           |                      |
| p |   |         |                           |                      |
| n |   |         |                           |                      |
| g |   |         |                           |                      |
| ) |   |         |                           |                      |
| { |   |         |                           |                      |
| w |   |         |                           |                      |
| i |   |         |                           |                      |
| d |   |         |                           |                      |
| t |   |         |                           |                      |
| h |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| h |   |         |                           |                      |
| e |   |         |                           |                      |
| i |   |         |                           |                      |
| g |   |         |                           |                      |
| h |   |         |                           |                      |
| t |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| } |   |         |                           |                      |
+---+---+---------+---------------------------+----------------------+
| > | * | F       | fnSaveNewPassword         |                      |
|   | * | unction |                           |                      |
| ! | f |         |                           |                      |
| [ | n |         |                           |                      |
| E | * |         |                           |                      |
| x | * |         |                           |                      |
| a |   |         |                           |                      |
| m |   |         |                           |                      |
| p |   |         |                           |                      |
| l |   |         |                           |                      |
| e |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| o |   |         |                           |                      |
| f |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| g |   |         |                           |                      |
| o |   |         |                           |                      |
| o |   |         |                           |                      |
| d |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| p |   |         |                           |                      |
| r |   |         |                           |                      |
| a |   |         |                           |                      |
| c |   |         |                           |                      |
| t |   |         |                           |                      |
| i |   |         |                           |                      |
| c |   |         |                           |                      |
| e |   |         |                           |                      |
| ] |   |         |                           |                      |
| ( |   |         |                           |                      |
| . |   |         |                           |                      |
| / |   |         |                           |                      |
| m |   |         |                           |                      |
| e |   |         |                           |                      |
| d |   |         |                           |                      |
| i |   |         |                           |                      |
| a |   |         |                           |                      |
| / |   |         |                           |                      |
| i |   |         |                           |                      |
| m |   |         |                           |                      |
| a |   |         |                           |                      |
| g |   |         |                           |                      |
| e |   |         |                           |                      |
| 3 |   |         |                           |                      |
| . |   |         |                           |                      |
| p |   |         |                           |                      |
| n |   |         |                           |                      |
| g |   |         |                           |                      |
| ) |   |         |                           |                      |
| { |   |         |                           |                      |
| w |   |         |                           |                      |
| i |   |         |                           |                      |
| d |   |         |                           |                      |
| t |   |         |                           |                      |
| h |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| h |   |         |                           |                      |
| e |   |         |                           |                      |
| i |   |         |                           |                      |
| g |   |         |                           |                      |
| h |   |         |                           |                      |
| t |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| } |   |         |                           |                      |
+---+---+---------+---------------------------+----------------------+
| > | * | Trigger | trAuditChangeToNHSNumber  |                      |
|   | * |         |                           |                      |
| ! | t |         |                           |                      |
| [ | r |         |                           |                      |
| E | * |         |                           |                      |
| x | * |         |                           |                      |
| a |   |         |                           |                      |
| m |   |         |                           |                      |
| p |   |         |                           |                      |
| l |   |         |                           |                      |
| e |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| o |   |         |                           |                      |
| f |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| g |   |         |                           |                      |
| o |   |         |                           |                      |
| o |   |         |                           |                      |
| d |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| p |   |         |                           |                      |
| r |   |         |                           |                      |
| a |   |         |                           |                      |
| c |   |         |                           |                      |
| t |   |         |                           |                      |
| i |   |         |                           |                      |
| c |   |         |                           |                      |
| e |   |         |                           |                      |
| ] |   |         |                           |                      |
| ( |   |         |                           |                      |
| . |   |         |                           |                      |
| / |   |         |                           |                      |
| m |   |         |                           |                      |
| e |   |         |                           |                      |
| d |   |         |                           |                      |
| i |   |         |                           |                      |
| a |   |         |                           |                      |
| / |   |         |                           |                      |
| i |   |         |                           |                      |
| m |   |         |                           |                      |
| a |   |         |                           |                      |
| g |   |         |                           |                      |
| e |   |         |                           |                      |
| 3 |   |         |                           |                      |
| . |   |         |                           |                      |
| p |   |         |                           |                      |
| n |   |         |                           |                      |
| g |   |         |                           |                      |
| ) |   |         |                           |                      |
| { |   |         |                           |                      |
| w |   |         |                           |                      |
| i |   |         |                           |                      |
| d |   |         |                           |                      |
| t |   |         |                           |                      |
| h |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| h |   |         |                           |                      |
| e |   |         |                           |                      |
| i |   |         |                           |                      |
| g |   |         |                           |                      |
| h |   |         |                           |                      |
| t |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| } |   |         |                           |                      |
+---+---+---------+---------------------------+----------------------+
| > | * | Cl      | CIX_Report_Id             | Table name and       |
|   | * | ustered |                           | indexes are also     |
| ! | C | Index   |                           | separated by an      |
| [ | I |         |                           | underscore.          |
| E | X |         |                           |                      |
| x | \ |         |                           |                      |
| a | _ |         |                           |                      |
| m | * |         |                           |                      |
| p | * |         |                           |                      |
| l |   |         |                           |                      |
| e |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| o |   |         |                           |                      |
| f |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| g |   |         |                           |                      |
| o |   |         |                           |                      |
| o |   |         |                           |                      |
| d |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| p |   |         |                           |                      |
| r |   |         |                           |                      |
| a |   |         |                           |                      |
| c |   |         |                           |                      |
| t |   |         |                           |                      |
| i |   |         |                           |                      |
| c |   |         |                           |                      |
| e |   |         |                           |                      |
| ] |   |         |                           |                      |
| ( |   |         |                           |                      |
| . |   |         |                           |                      |
| / |   |         |                           |                      |
| m |   |         |                           |                      |
| e |   |         |                           |                      |
| d |   |         |                           |                      |
| i |   |         |                           |                      |
| a |   |         |                           |                      |
| / |   |         |                           |                      |
| i |   |         |                           |                      |
| m |   |         |                           |                      |
| a |   |         |                           |                      |
| g |   |         |                           |                      |
| e |   |         |                           |                      |
| 3 |   |         |                           |                      |
| . |   |         |                           |                      |
| p |   |         |                           |                      |
| n |   |         |                           |                      |
| g |   |         |                           |                      |
| ) |   |         |                           |                      |
| { |   |         |                           |                      |
| w |   |         |                           |                      |
| i |   |         |                           |                      |
| d |   |         |                           |                      |
| t |   |         |                           |                      |
| h |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| h |   |         |                           |                      |
| e |   |         |                           |                      |
| i |   |         |                           |                      |
| g |   |         |                           |                      |
| h |   |         |                           |                      |
| t |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| } |   |         |                           |                      |
+---+---+---------+---------------------------+----------------------+
| > | * | Primary | PK_Report                 | Table name           |
|   | * | Key     |                           |                      |
| ! | P |         |                           |                      |
| [ | K |         |                           |                      |
| E | \ |         |                           |                      |
| x | _ |         |                           |                      |
| a | * |         |                           |                      |
| m | * |         |                           |                      |
| p |   |         |                           |                      |
| l |   |         |                           |                      |
| e |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| o |   |         |                           |                      |
| f |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| g |   |         |                           |                      |
| o |   |         |                           |                      |
| o |   |         |                           |                      |
| d |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| p |   |         |                           |                      |
| r |   |         |                           |                      |
| a |   |         |                           |                      |
| c |   |         |                           |                      |
| t |   |         |                           |                      |
| i |   |         |                           |                      |
| c |   |         |                           |                      |
| e |   |         |                           |                      |
| ] |   |         |                           |                      |
| ( |   |         |                           |                      |
| . |   |         |                           |                      |
| / |   |         |                           |                      |
| m |   |         |                           |                      |
| e |   |         |                           |                      |
| d |   |         |                           |                      |
| i |   |         |                           |                      |
| a |   |         |                           |                      |
| / |   |         |                           |                      |
| i |   |         |                           |                      |
| m |   |         |                           |                      |
| a |   |         |                           |                      |
| g |   |         |                           |                      |
| e |   |         |                           |                      |
| 3 |   |         |                           |                      |
| . |   |         |                           |                      |
| p |   |         |                           |                      |
| n |   |         |                           |                      |
| g |   |         |                           |                      |
| ) |   |         |                           |                      |
| { |   |         |                           |                      |
| w |   |         |                           |                      |
| i |   |         |                           |                      |
| d |   |         |                           |                      |
| t |   |         |                           |                      |
| h |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| h |   |         |                           |                      |
| e |   |         |                           |                      |
| i |   |         |                           |                      |
| g |   |         |                           |                      |
| h |   |         |                           |                      |
| t |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| } |   |         |                           |                      |
+---+---+---------+---------------------------+----------------------+
| > | * | Index   | IX_Report_SubjectDoBFamil | Table name and       |
|   | * |         | yNameGivenNameId_includes | indexes are also     |
| ! | I |         |                           | separated by an      |
| [ | X |         |                           | underscore. Use      |
| E | \ |         |                           | "includes" showing   |
| x | _ |         |                           | the index has        |
| a | * |         |                           | included             |
| m | * |         |                           | columns[^13].        |
| p |   |         |                           |                      |
| l |   |         |                           |                      |
| e |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| o |   |         |                           |                      |
| f |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| g |   |         |                           |                      |
| o |   |         |                           |                      |
| o |   |         |                           |                      |
| d |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| p |   |         |                           |                      |
| r |   |         |                           |                      |
| a |   |         |                           |                      |
| c |   |         |                           |                      |
| t |   |         |                           |                      |
| i |   |         |                           |                      |
| c |   |         |                           |                      |
| e |   |         |                           |                      |
| ] |   |         |                           |                      |
| ( |   |         |                           |                      |
| . |   |         |                           |                      |
| / |   |         |                           |                      |
| m |   |         |                           |                      |
| e |   |         |                           |                      |
| d |   |         |                           |                      |
| i |   |         |                           |                      |
| a |   |         |                           |                      |
| / |   |         |                           |                      |
| i |   |         |                           |                      |
| m |   |         |                           |                      |
| a |   |         |                           |                      |
| g |   |         |                           |                      |
| e |   |         |                           |                      |
| 3 |   |         |                           |                      |
| . |   |         |                           |                      |
| p |   |         |                           |                      |
| n |   |         |                           |                      |
| g |   |         |                           |                      |
| ) |   |         |                           |                      |
| { |   |         |                           |                      |
| w |   |         |                           |                      |
| i |   |         |                           |                      |
| d |   |         |                           |                      |
| t |   |         |                           |                      |
| h |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| h |   |         |                           |                      |
| e |   |         |                           |                      |
| i |   |         |                           |                      |
| g |   |         |                           |                      |
| h |   |         |                           |                      |
| t |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| } |   |         |                           |                      |
+---+---+---------+---------------------------+----------------------+
| > | * | Foreign | FK_Refer                  | Table name,          |
|   | * | Key     | enceDataValue_ID_PlacerID | referenced field(s)  |
| ! | F |         |                           | and referencing      |
| [ | K |         |                           | field(s) also        |
| E | \ |         |                           | separated by an      |
| x | _ |         |                           | underscore           |
| a | * |         |                           |                      |
| m | * |         |                           |                      |
| p |   |         |                           |                      |
| l |   |         |                           |                      |
| e |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| o |   |         |                           |                      |
| f |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| g |   |         |                           |                      |
| o |   |         |                           |                      |
| o |   |         |                           |                      |
| d |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| p |   |         |                           |                      |
| r |   |         |                           |                      |
| a |   |         |                           |                      |
| c |   |         |                           |                      |
| t |   |         |                           |                      |
| i |   |         |                           |                      |
| c |   |         |                           |                      |
| e |   |         |                           |                      |
| ] |   |         |                           |                      |
| ( |   |         |                           |                      |
| . |   |         |                           |                      |
| / |   |         |                           |                      |
| m |   |         |                           |                      |
| e |   |         |                           |                      |
| d |   |         |                           |                      |
| i |   |         |                           |                      |
| a |   |         |                           |                      |
| / |   |         |                           |                      |
| i |   |         |                           |                      |
| m |   |         |                           |                      |
| a |   |         |                           |                      |
| g |   |         |                           |                      |
| e |   |         |                           |                      |
| 3 |   |         |                           |                      |
| . |   |         |                           |                      |
| p |   |         |                           |                      |
| n |   |         |                           |                      |
| g |   |         |                           |                      |
| ) |   |         |                           |                      |
| { |   |         |                           |                      |
| w |   |         |                           |                      |
| i |   |         |                           |                      |
| d |   |         |                           |                      |
| t |   |         |                           |                      |
| h |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| h |   |         |                           |                      |
| e |   |         |                           |                      |
| i |   |         |                           |                      |
| g |   |         |                           |                      |
| h |   |         |                           |                      |
| t |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| } |   |         |                           |                      |
+---+---+---------+---------------------------+----------------------+
| > | * | Default |                           |                      |
|   | * | con     |                           |                      |
| ! | D | straint |                           |                      |
| [ | F |         |                           |                      |
| E | \ |         |                           |                      |
| x | _ |         |                           |                      |
| a | * |         |                           |                      |
| m | * |         |                           |                      |
| p |   |         |                           |                      |
| l |   |         |                           |                      |
| e |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| o |   |         |                           |                      |
| f |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| g |   |         |                           |                      |
| o |   |         |                           |                      |
| o |   |         |                           |                      |
| d |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| p |   |         |                           |                      |
| r |   |         |                           |                      |
| a |   |         |                           |                      |
| c |   |         |                           |                      |
| t |   |         |                           |                      |
| i |   |         |                           |                      |
| c |   |         |                           |                      |
| e |   |         |                           |                      |
| ] |   |         |                           |                      |
| ( |   |         |                           |                      |
| . |   |         |                           |                      |
| / |   |         |                           |                      |
| m |   |         |                           |                      |
| e |   |         |                           |                      |
| d |   |         |                           |                      |
| i |   |         |                           |                      |
| a |   |         |                           |                      |
| / |   |         |                           |                      |
| i |   |         |                           |                      |
| m |   |         |                           |                      |
| a |   |         |                           |                      |
| g |   |         |                           |                      |
| e |   |         |                           |                      |
| 3 |   |         |                           |                      |
| . |   |         |                           |                      |
| p |   |         |                           |                      |
| n |   |         |                           |                      |
| g |   |         |                           |                      |
| ) |   |         |                           |                      |
| { |   |         |                           |                      |
| w |   |         |                           |                      |
| i |   |         |                           |                      |
| d |   |         |                           |                      |
| t |   |         |                           |                      |
| h |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| h |   |         |                           |                      |
| e |   |         |                           |                      |
| i |   |         |                           |                      |
| g |   |         |                           |                      |
| h |   |         |                           |                      |
| t |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| } |   |         |                           |                      |
+---+---+---------+---------------------------+----------------------+
| > | * | Check   |                           |                      |
|   | * | con     |                           |                      |
| ! | C | straint |                           |                      |
| [ | K |         |                           |                      |
| E | \ |         |                           |                      |
| x | _ |         |                           |                      |
| a | * |         |                           |                      |
| m | * |         |                           |                      |
| p |   |         |                           |                      |
| l |   |         |                           |                      |
| e |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| o |   |         |                           |                      |
| f |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| g |   |         |                           |                      |
| o |   |         |                           |                      |
| o |   |         |                           |                      |
| d |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| p |   |         |                           |                      |
| r |   |         |                           |                      |
| a |   |         |                           |                      |
| c |   |         |                           |                      |
| t |   |         |                           |                      |
| i |   |         |                           |                      |
| c |   |         |                           |                      |
| e |   |         |                           |                      |
| ] |   |         |                           |                      |
| ( |   |         |                           |                      |
| . |   |         |                           |                      |
| / |   |         |                           |                      |
| m |   |         |                           |                      |
| e |   |         |                           |                      |
| d |   |         |                           |                      |
| i |   |         |                           |                      |
| a |   |         |                           |                      |
| / |   |         |                           |                      |
| i |   |         |                           |                      |
| m |   |         |                           |                      |
| a |   |         |                           |                      |
| g |   |         |                           |                      |
| e |   |         |                           |                      |
| 3 |   |         |                           |                      |
| . |   |         |                           |                      |
| p |   |         |                           |                      |
| n |   |         |                           |                      |
| g |   |         |                           |                      |
| ) |   |         |                           |                      |
| { |   |         |                           |                      |
| w |   |         |                           |                      |
| i |   |         |                           |                      |
| d |   |         |                           |                      |
| t |   |         |                           |                      |
| h |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| h |   |         |                           |                      |
| e |   |         |                           |                      |
| i |   |         |                           |                      |
| g |   |         |                           |                      |
| h |   |         |                           |                      |
| t |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| } |   |         |                           |                      |
+---+---+---------+---------------------------+----------------------+
| > | * | Unique  |                           |                      |
|   | * | con     |                           |                      |
| ! | U | straint |                           |                      |
| [ | Q |         |                           |                      |
| E | \ |         |                           |                      |
| x | _ |         |                           |                      |
| a | * |         |                           |                      |
| m | * |         |                           |                      |
| p |   |         |                           |                      |
| l |   |         |                           |                      |
| e |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| o |   |         |                           |                      |
| f |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| g |   |         |                           |                      |
| o |   |         |                           |                      |
| o |   |         |                           |                      |
| d |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| p |   |         |                           |                      |
| r |   |         |                           |                      |
| a |   |         |                           |                      |
| c |   |         |                           |                      |
| t |   |         |                           |                      |
| i |   |         |                           |                      |
| c |   |         |                           |                      |
| e |   |         |                           |                      |
| ] |   |         |                           |                      |
| ( |   |         |                           |                      |
| . |   |         |                           |                      |
| / |   |         |                           |                      |
| m |   |         |                           |                      |
| e |   |         |                           |                      |
| d |   |         |                           |                      |
| i |   |         |                           |                      |
| a |   |         |                           |                      |
| / |   |         |                           |                      |
| i |   |         |                           |                      |
| m |   |         |                           |                      |
| a |   |         |                           |                      |
| g |   |         |                           |                      |
| e |   |         |                           |                      |
| 3 |   |         |                           |                      |
| . |   |         |                           |                      |
| p |   |         |                           |                      |
| n |   |         |                           |                      |
| g |   |         |                           |                      |
| ) |   |         |                           |                      |
| { |   |         |                           |                      |
| w |   |         |                           |                      |
| i |   |         |                           |                      |
| d |   |         |                           |                      |
| t |   |         |                           |                      |
| h |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| > |   |         |                           |                      |
|   |   |         |                           |                      |
| h |   |         |                           |                      |
| e |   |         |                           |                      |
| i |   |         |                           |                      |
| g |   |         |                           |                      |
| h |   |         |                           |                      |
| t |   |         |                           |                      |
| = |   |         |                           |                      |
| " |   |         |                           |                      |
| 0 |   |         |                           |                      |
| . |   |         |                           |                      |
| 1 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 6 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 5 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 9 |   |         |                           |                      |
| 3 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 0 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 8 |   |         |                           |                      |
| 7 |   |         |                           |                      |
| 4 |   |         |                           |                      |
| i |   |         |                           |                      |
| n |   |         |                           |                      |
| " |   |         |                           |                      |
| } |   |         |                           |                      |
+---+---+---------+---------------------------+----------------------+

+------+---------------------------------------------------------------+
| !    | [Publicly Available Standards                                 |
| [Fur | (iso.org)](https://standards.iso.org/ittf                     |
| ther | /PubliclyAvailableStandards/c060341_ISO_IEC_11179-5_2015.zip) |
| rea  |                                                               |
| ding | [Reserved Keywords (Transact-SQL) - SQL Server \| Microsoft   |
| and  | Learn](https://learn.microsoft.com/en-gb/sql/t-sql/language-e |
| i    | lements/reserved-keywords-transact-sql?view=sql-server-ver16) |
| nfor |                                                               |
| mati | [The 9 Most Common Database Design Errors \| Vertabelo        |
| on]( | Database                                                      |
| ./me | Modeler](https://                                             |
| dia/ | vertabelo.com/blog/the-9-most-common-database-design-errors/) |
| imag | (No. #4)                                                      |
| e8.p |                                                               |
| ng){ | [Ten Common Database Design Mistakes - Simple Talk            |
| widt | (red-gate.com)](https://                                      |
| h="0 | www.red-gate.com/simple-talk/databases/sql-server/database-ad |
| .463 | ministration-sql-server/ten-common-database-design-mistakes/) |
| 8888 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 9in" |                                                               |
| he   |                                                               |
| ight |                                                               |
| ="0. |                                                               |
| 4638 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8889 |                                                               |
| in"} |                                                               |
+======+===============================================================+
+------+---------------------------------------------------------------+

## Follow our Code Layout Rules

These rules apply to decorative changes that affect whitespace such as
tabs, spaces and line breaks. Nonetheless, it's important to adhere to a
standard, to help others understand the intent of code.

So, while SQL Prompt allows us to write code in a format, we find
comfortable, we must always apply our standard styling rules[^14] before
sharing code and checking it into source control.

You **SHOULD format and analyse your code using SQL Prompt before
checking into source control.**

You **SHOULD configure SQL Prompt with our rule. See** [SQL Prompt
configuration](#_SQL_Prompt_configuration) **for help with using our
standard SQL Prompt config files.**

+------+---------------------------------------------------------------+
| !    | [The Basics of Good T-SQL Coding Style - Simple Talk          |
| [Fur | (red-gate.com                                                 |
| ther | )](https://www.red-gate.com/simple-talk/databases/sql-server/ |
| rea  | t-sql-programming-sql-server/basics-good-t-sql-coding-style/) |
| ding |                                                               |
| and  | [Beyond Formatting: Improving SQL Code using SQL Prompt       |
| i    | Actions \| Redgate                                            |
| nfor | (red-gate.com                                                 |
| mati | )](https://www.red-gate.com/hub/product-learning/sql-prompt/b |
| on]( | eyond-formatting-improving-sql-code-using-sql-prompt-actions) |
| ./me |                                                               |
| dia/ | [The Redgate Guide to SQL Server Team-based Development \|    |
| imag | Redgate                                                       |
| e8.p | (red-gate.com)](https://www.red-gate.com/li                   |
| ng){ | brary/the-redgate-guide-to-sql-server-team-based-development) |
| widt |                                                               |
| h="0 | [Using multiple custom SQL formatting styles in SQL Prompt    |
| .463 | (red-gate                                                     |
| 8888 | .com)](https://www.red-gate.com/hub/product-learning/sql-prom |
| 8888 | pt/using-multiple-custom-sql-formatting-styles-in-sql-prompt) |
| 8888 |                                                               |
| 9in" |                                                               |
| he   |                                                               |
| ight |                                                               |
| ="0. |                                                               |
| 4638 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8889 |                                                               |
| in"} |                                                               |
+======+===============================================================+
+------+---------------------------------------------------------------+

## Code Comments

You **SHOULD** use the code headers provided in SQL Server Management
Studio's (SSMS) default templates to comment scripts, stored procedures,
functions and the like.

# Exceptions Prove the Rule

As with most standards, there are occasions when it's unwise to follow
"hard and fast" rules.

Principal and Lead software developers have discretion to do so but this
should be the exception rather than the rule.

# Examples

## 7.1 INSERT Statement  {#insert-statement .unnumbered}

In this example we make sure to

-   Qualify table names with the schema name.

-   Specify INSERT columns.

+-----+----------------------------------------------------------------+
| >   | > [INSERT INTO SubscribingConsultant]{.mark}                   |
| ![E | >                                                              |
| xam | > [VALUES (\'7A5\', \'C1234567\');]{.mark}                     |
| ple |                                                                |
| >   |                                                                |
|  of |                                                                |
| >   |                                                                |
| pra |                                                                |
| cti |                                                                |
| ces |                                                                |
| >   |                                                                |
|  to |                                                                |
| > a |                                                                |
| voi |                                                                |
| d]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e6. |                                                                |
| png |                                                                |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.1 |                                                                |
| 968 |                                                                |
| 503 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| in" |                                                                |
| >   |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .19 |                                                                |
| 685 |                                                                |
| 039 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+=====+================================================================+
| >   | > [INSERT INTO **dbo.**SubscribingConsultant**(Organisation,   |
| ![E | > ConsultantId)**]{.mark}                                      |
| xam | >                                                              |
| ple | > [VALUES(\'7A5\', \'C1234567\');]{.mark}                      |
| >   |                                                                |
|  of |                                                                |
| > g |                                                                |
| ood |                                                                |
| > p |                                                                |
| rac |                                                                |
| tic |                                                                |
| e]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
| png |                                                                |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.1 |                                                                |
| 968 |                                                                |
| 503 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| in" |                                                                |
| >   |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .19 |                                                                |
| 685 |                                                                |
| 039 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+-----+----------------------------------------------------------------+

## 7.2 SELECT Statement {#select-statement .unnumbered}

In this example we make sure to

-   Qualify table names with the schema name.

-   Add a meaningful table alias name.

-   Use the field name in the ORDER BY clause rather than a constant.

+-----+----------------------------------------------------------------+
| >   | > [SELECT Report.Id, Report.SubjectGivenName AS FirstName,     |
| ![E | > Report.SubjectFamilyName AS LastName]{.mark}                 |
| xam | >                                                              |
| ple | > [FROM Report]{.mark}                                         |
| >   | >                                                              |
|  of | > [ORDER BY 1 ASC;]{.mark}                                     |
| >   |                                                                |
| pra |                                                                |
| cti |                                                                |
| ces |                                                                |
| >   |                                                                |
|  to |                                                                |
| > a |                                                                |
| voi |                                                                |
| d]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e6. |                                                                |
| png |                                                                |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.1 |                                                                |
| 968 |                                                                |
| 503 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| in" |                                                                |
| >   |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .19 |                                                                |
| 685 |                                                                |
| 039 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+=====+================================================================+
| >   | > [SELECT Report.Id, Report.SubjectGivenName AS FirstName,     |
| ![E | > Report.SubjectFamilyName AS LastName]{.mark}                 |
| xam | >                                                              |
| ple | > [FROM **dbo.**Report **AS Report**]{.mark}                   |
| >   | >                                                              |
|  of | > [ORDER BY **Report.Id** ASC;]{.mark}                         |
| > g |                                                                |
| ood |                                                                |
| > p |                                                                |
| rac |                                                                |
| tic |                                                                |
| e]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
| png |                                                                |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.1 |                                                                |
| 968 |                                                                |
| 503 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| in" |                                                                |
| >   |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .19 |                                                                |
| 685 |                                                                |
| 039 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+-----+----------------------------------------------------------------+

## 7.3 Queries  {#queries .unnumbered}

In this next example, we will step through a query making sure to: -

1.  Expand wildcards searches.

2.  Qualify table names with the schema name.

3.  Add a meaningful table alias name.

4.  Qualify column names with table alias.

5.  Add a meaningful column alias name[^15].

6.  Alias the column name using the AS convention.

7.  Add the semi colon terminator.

+---+-----+-----------------------------------------------------------+
|   | >   | > [SELECT \* FROM Report]{.mark}                          |
|   | ![E |                                                           |
|   | xam |                                                           |
|   | ple |                                                           |
|   | >   |                                                           |
|   |  of |                                                           |
|   | >   |                                                           |
|   | pra |                                                           |
|   | cti |                                                           |
|   | ces |                                                           |
|   | >   |                                                           |
|   |  to |                                                           |
|   | > a |                                                           |
|   | voi |                                                           |
|   | d]( |                                                           |
|   | ./m |                                                           |
|   | edi |                                                           |
|   | a/i |                                                           |
|   | mag |                                                           |
|   | e6. |                                                           |
|   | png |                                                           |
|   | ){w |                                                           |
|   | idt |                                                           |
|   | h=" |                                                           |
|   | 0.1 |                                                           |
|   | 968 |                                                           |
|   | 503 |                                                           |
|   | 937 |                                                           |
|   | 007 |                                                           |
|   | 874 |                                                           |
|   | in" |                                                           |
|   | >   |                                                           |
|   | hei |                                                           |
|   | ght |                                                           |
|   | ="0 |                                                           |
|   | .19 |                                                           |
|   | 685 |                                                           |
|   | 039 |                                                           |
|   | 370 |                                                           |
|   | 078 |                                                           |
|   | 74i |                                                           |
|   | n"} |                                                           |
+===+=====+===========================================================+
| > | >   | > [SELECT **Report.Id, SubjectGivenName f,                |
|   | ![E | > Report.SubjectFamilyName**]{.mark}                      |
| 1 | xam | >                                                         |
|   | ple | > [FROM Report]{.mark}                                    |
|   | >   |                                                           |
|   |  of |                                                           |
|   | >   |                                                           |
|   | pra |                                                           |
|   | cti |                                                           |
|   | ces |                                                           |
|   | >   |                                                           |
|   |  to |                                                           |
|   | > a |                                                           |
|   | voi |                                                           |
|   | d]( |                                                           |
|   | ./m |                                                           |
|   | edi |                                                           |
|   | a/i |                                                           |
|   | mag |                                                           |
|   | e6. |                                                           |
|   | png |                                                           |
|   | ){w |                                                           |
|   | idt |                                                           |
|   | h=" |                                                           |
|   | 0.1 |                                                           |
|   | 968 |                                                           |
|   | 503 |                                                           |
|   | 937 |                                                           |
|   | 007 |                                                           |
|   | 874 |                                                           |
|   | in" |                                                           |
|   | >   |                                                           |
|   | hei |                                                           |
|   | ght |                                                           |
|   | ="0 |                                                           |
|   | .19 |                                                           |
|   | 685 |                                                           |
|   | 039 |                                                           |
|   | 370 |                                                           |
|   | 078 |                                                           |
|   | 74i |                                                           |
|   | n"} |                                                           |
+---+-----+-----------------------------------------------------------+
| > | >   | > [SELECT Report.Id, SubjectGivenName f,                  |
|   | ![E | > Report.SubjectFamilyName]{.mark}                        |
| 2 | xam | >                                                         |
|   | ple | > [FROM **dbo**.Report]{.mark}                            |
|   | >   |                                                           |
|   |  of |                                                           |
|   | >   |                                                           |
|   | pra |                                                           |
|   | cti |                                                           |
|   | ces |                                                           |
|   | >   |                                                           |
|   |  to |                                                           |
|   | > a |                                                           |
|   | voi |                                                           |
|   | d]( |                                                           |
|   | ./m |                                                           |
|   | edi |                                                           |
|   | a/i |                                                           |
|   | mag |                                                           |
|   | e6. |                                                           |
|   | png |                                                           |
|   | ){w |                                                           |
|   | idt |                                                           |
|   | h=" |                                                           |
|   | 0.1 |                                                           |
|   | 968 |                                                           |
|   | 503 |                                                           |
|   | 937 |                                                           |
|   | 007 |                                                           |
|   | 874 |                                                           |
|   | in" |                                                           |
|   | >   |                                                           |
|   | hei |                                                           |
|   | ght |                                                           |
|   | ="0 |                                                           |
|   | .19 |                                                           |
|   | 685 |                                                           |
|   | 039 |                                                           |
|   | 370 |                                                           |
|   | 078 |                                                           |
|   | 74i |                                                           |
|   | n"} |                                                           |
+---+-----+-----------------------------------------------------------+
| > | >   | > [SELECT Report.Id, SubjectGivenName f,                  |
|   | ![E | > Report.SubjectFamilyName]{.mark}                        |
| 3 | xam | >                                                         |
|   | ple | > [FROM dbo.Report **AS Report**]{.mark}                  |
|   | >   |                                                           |
|   |  of |                                                           |
|   | >   |                                                           |
|   | pra |                                                           |
|   | cti |                                                           |
|   | ces |                                                           |
|   | >   |                                                           |
|   |  to |                                                           |
|   | > a |                                                           |
|   | voi |                                                           |
|   | d]( |                                                           |
|   | ./m |                                                           |
|   | edi |                                                           |
|   | a/i |                                                           |
|   | mag |                                                           |
|   | e6. |                                                           |
|   | png |                                                           |
|   | ){w |                                                           |
|   | idt |                                                           |
|   | h=" |                                                           |
|   | 0.1 |                                                           |
|   | 968 |                                                           |
|   | 503 |                                                           |
|   | 937 |                                                           |
|   | 007 |                                                           |
|   | 874 |                                                           |
|   | in" |                                                           |
|   | >   |                                                           |
|   | hei |                                                           |
|   | ght |                                                           |
|   | ="0 |                                                           |
|   | .19 |                                                           |
|   | 685 |                                                           |
|   | 039 |                                                           |
|   | 370 |                                                           |
|   | 078 |                                                           |
|   | 74i |                                                           |
|   | n"} |                                                           |
+---+-----+-----------------------------------------------------------+
| > | >   | > [SELECT Report.Id, **Report**.SubjectGivenName f,       |
|   | ![E | > Report.SubjectFamilyName]{.mark}                        |
| 4 | xam | >                                                         |
|   | ple | > [FROM dbo.Report AS Report]{.mark}                      |
|   | >   |                                                           |
|   |  of |                                                           |
|   | >   |                                                           |
|   | pra |                                                           |
|   | cti |                                                           |
|   | ces |                                                           |
|   | >   |                                                           |
|   |  to |                                                           |
|   | > a |                                                           |
|   | voi |                                                           |
|   | d]( |                                                           |
|   | ./m |                                                           |
|   | edi |                                                           |
|   | a/i |                                                           |
|   | mag |                                                           |
|   | e6. |                                                           |
|   | png |                                                           |
|   | ){w |                                                           |
|   | idt |                                                           |
|   | h=" |                                                           |
|   | 0.1 |                                                           |
|   | 968 |                                                           |
|   | 503 |                                                           |
|   | 937 |                                                           |
|   | 007 |                                                           |
|   | 874 |                                                           |
|   | in" |                                                           |
|   | >   |                                                           |
|   | hei |                                                           |
|   | ght |                                                           |
|   | ="0 |                                                           |
|   | .19 |                                                           |
|   | 685 |                                                           |
|   | 039 |                                                           |
|   | 370 |                                                           |
|   | 078 |                                                           |
|   | 74i |                                                           |
|   | n"} |                                                           |
+---+-----+-----------------------------------------------------------+
| > | >   | > [SELECT Report.Id, Report.SubjectGivenName              |
|   | ![E | > **FirstName**, Report.SubjectFamilyName]{.mark}         |
| 5 | xam | >                                                         |
|   | ple | > [FROM dbo.Report AS Report]{.mark}                      |
|   | >   |                                                           |
|   |  of |                                                           |
|   | >   |                                                           |
|   | pra |                                                           |
|   | cti |                                                           |
|   | ces |                                                           |
|   | >   |                                                           |
|   |  to |                                                           |
|   | > a |                                                           |
|   | voi |                                                           |
|   | d]( |                                                           |
|   | ./m |                                                           |
|   | edi |                                                           |
|   | a/i |                                                           |
|   | mag |                                                           |
|   | e6. |                                                           |
|   | png |                                                           |
|   | ){w |                                                           |
|   | idt |                                                           |
|   | h=" |                                                           |
|   | 0.1 |                                                           |
|   | 968 |                                                           |
|   | 503 |                                                           |
|   | 937 |                                                           |
|   | 007 |                                                           |
|   | 874 |                                                           |
|   | in" |                                                           |
|   | >   |                                                           |
|   | hei |                                                           |
|   | ght |                                                           |
|   | ="0 |                                                           |
|   | .19 |                                                           |
|   | 685 |                                                           |
|   | 039 |                                                           |
|   | 370 |                                                           |
|   | 078 |                                                           |
|   | 74i |                                                           |
|   | n"} |                                                           |
+---+-----+-----------------------------------------------------------+
| > | >   | > [SELECT Report.Id, Report.SubjectGivenName **AS**       |
|   | ![E | > FirstName, Report.SubjectFamilyName]{.mark}             |
| 6 | xam | >                                                         |
|   | ple | > [FROM dbo.Report AS Report]{.mark}                      |
|   | >   |                                                           |
|   |  of |                                                           |
|   | >   |                                                           |
|   | pra |                                                           |
|   | cti |                                                           |
|   | ces |                                                           |
|   | >   |                                                           |
|   |  to |                                                           |
|   | > a |                                                           |
|   | voi |                                                           |
|   | d]( |                                                           |
|   | ./m |                                                           |
|   | edi |                                                           |
|   | a/i |                                                           |
|   | mag |                                                           |
|   | e6. |                                                           |
|   | png |                                                           |
|   | ){w |                                                           |
|   | idt |                                                           |
|   | h=" |                                                           |
|   | 0.1 |                                                           |
|   | 968 |                                                           |
|   | 503 |                                                           |
|   | 937 |                                                           |
|   | 007 |                                                           |
|   | 874 |                                                           |
|   | in" |                                                           |
|   | >   |                                                           |
|   | hei |                                                           |
|   | ght |                                                           |
|   | ="0 |                                                           |
|   | .19 |                                                           |
|   | 685 |                                                           |
|   | 039 |                                                           |
|   | 370 |                                                           |
|   | 078 |                                                           |
|   | 74i |                                                           |
|   | n"} |                                                           |
+---+-----+-----------------------------------------------------------+
| > | >   | > [SELECT Report.Id, Report.SubjectGivenName AS           |
|   | ![E | > FirstName, Report.SubjectFamilyName]{.mark}             |
| 7 | xam | >                                                         |
|   | ple | > [FROM dbo.Report AS Report**;**]{.mark}                 |
|   | >   |                                                           |
|   |  of |                                                           |
|   | > g |                                                           |
|   | ood |                                                           |
|   | > p |                                                           |
|   | rac |                                                           |
|   | tic |                                                           |
|   | e]( |                                                           |
|   | ./m |                                                           |
|   | edi |                                                           |
|   | a/i |                                                           |
|   | mag |                                                           |
|   | e3. |                                                           |
|   | png |                                                           |
|   | ){w |                                                           |
|   | idt |                                                           |
|   | h=" |                                                           |
|   | 0.1 |                                                           |
|   | 968 |                                                           |
|   | 503 |                                                           |
|   | 937 |                                                           |
|   | 007 |                                                           |
|   | 874 |                                                           |
|   | in" |                                                           |
|   | >   |                                                           |
|   | hei |                                                           |
|   | ght |                                                           |
|   | ="0 |                                                           |
|   | .19 |                                                           |
|   | 685 |                                                           |
|   | 039 |                                                           |
|   | 370 |                                                           |
|   | 078 |                                                           |
|   | 74i |                                                           |
|   | n"} |                                                           |
+---+-----+-----------------------------------------------------------+

## 7.4 Dates #1 {#dates-1 .unnumbered}

In this example, we ensure that a query against a date field can use the
index.

+-----+----------------------------------------------------------------+
| >   | > [SELECT ObservationRequest.ReportId]{.mark}                  |
| ![E | >                                                              |
| xam | > [FROM dbo.ObservationRequest ObservationRequest]{.mark}      |
| ple | >                                                              |
| >   | > [WHERE CONVERT(VARCHAR(10),                                  |
|  of | > ObservationRequest.AuthorisedDateTime, 112) =                |
| >   | > \'2018-12-12\';]{.mark}                                      |
| pra |                                                                |
| cti |                                                                |
| ces |                                                                |
| >   |                                                                |
|  to |                                                                |
| > a |                                                                |
| voi |                                                                |
| d]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e6. |                                                                |
| png |                                                                |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.1 |                                                                |
| 968 |                                                                |
| 503 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| in" |                                                                |
| >   |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .19 |                                                                |
| 685 |                                                                |
| 039 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+=====+================================================================+
| >   | > [SELECT ObservationRequest.ReportId]{.mark}                  |
| ![E | >                                                              |
| xam | > [FROM dbo.ObservationRequest ObservationRequest]{.mark}      |
| ple | >                                                              |
| >   | > [WHERE CAST(ObservationRequest.AuthorisedDateTime AS DATE) = |
|  of | > \'2018-12-12\';]{.mark}                                      |
| > g |                                                                |
| ood |                                                                |
| > p |                                                                |
| rac |                                                                |
| tic |                                                                |
| e]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
| png |                                                                |
| ){w |                                                                |
| idt |                                                                |
| h=" |                                                                |
| 0.1 |                                                                |
| 968 |                                                                |
| 503 |                                                                |
| 937 |                                                                |
| 007 |                                                                |
| 874 |                                                                |
| in" |                                                                |
| >   |                                                                |
| hei |                                                                |
| ght |                                                                |
| ="0 |                                                                |
| .19 |                                                                |
| 685 |                                                                |
| 039 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+-----+----------------------------------------------------------------+

## Dates #2

We step through the next example ensuring to

1.  Eliminate the DATEDIFF operator.

2.  Eliminate arithmetic operators against date fields.

+----+-----+----------------------------------------------------------+
|    | >   | > [SELECT ObservationRequest.ReportId]{.mark}            |
|    | ![E | >                                                        |
|    | xam | > [FROM dbo.ObservationRequest                           |
|    | ple | > ObservationRequest]{.mark}                             |
|    | >   | >                                                        |
|    |  of | > [WHERE                                                 |
|    | >   | > DATEDIFF(DAY,Observ                                    |
|    | pra | ationRequest.AuthorisedDateTime,GETDATE())\<=30;]{.mark} |
|    | cti |                                                          |
|    | ces |                                                          |
|    | >   |                                                          |
|    |  to |                                                          |
|    | > a |                                                          |
|    | voi |                                                          |
|    | d]( |                                                          |
|    | ./m |                                                          |
|    | edi |                                                          |
|    | a/i |                                                          |
|    | mag |                                                          |
|    | e6. |                                                          |
|    | png |                                                          |
|    | ){w |                                                          |
|    | idt |                                                          |
|    | h=" |                                                          |
|    | 0.1 |                                                          |
|    | 968 |                                                          |
|    | 503 |                                                          |
|    | 937 |                                                          |
|    | 007 |                                                          |
|    | 874 |                                                          |
|    | in" |                                                          |
|    | >   |                                                          |
|    | hei |                                                          |
|    | ght |                                                          |
|    | ="0 |                                                          |
|    | .19 |                                                          |
|    | 685 |                                                          |
|    | 039 |                                                          |
|    | 370 |                                                          |
|    | 078 |                                                          |
|    | 74i |                                                          |
|    | n"} |                                                          |
+====+=====+==========================================================+
| >  | >   | > [SELECT ObservationRequest.ReportId]{.mark}            |
|  1 | ![E | >                                                        |
|    | xam | > [FROM dbo.ObservationRequest                           |
|    | ple | > ObservationRequest]{.mark}                             |
|    | >   | >                                                        |
|    |  of | > [WHERE CAST(ObservationRequest.AuthorisedDateTime AS   |
|    | >   | > DATE) \> GETDATE()-30;]{.mark}                         |
|    | pra |                                                          |
|    | cti |                                                          |
|    | ces |                                                          |
|    | >   |                                                          |
|    |  to |                                                          |
|    | > a |                                                          |
|    | voi |                                                          |
|    | d]( |                                                          |
|    | ./m |                                                          |
|    | edi |                                                          |
|    | a/i |                                                          |
|    | mag |                                                          |
|    | e6. |                                                          |
|    | png |                                                          |
|    | ){w |                                                          |
|    | idt |                                                          |
|    | h=" |                                                          |
|    | 0.1 |                                                          |
|    | 968 |                                                          |
|    | 503 |                                                          |
|    | 937 |                                                          |
|    | 007 |                                                          |
|    | 874 |                                                          |
|    | in" |                                                          |
|    | >   |                                                          |
|    | hei |                                                          |
|    | ght |                                                          |
|    | ="0 |                                                          |
|    | .19 |                                                          |
|    | 685 |                                                          |
|    | 039 |                                                          |
|    | 370 |                                                          |
|    | 078 |                                                          |
|    | 74i |                                                          |
|    | n"} |                                                          |
+----+-----+----------------------------------------------------------+
| >  | >   | > [SELECT COUNT(DISTINCT                                 |
|  2 | ![E | > ObservationRequest.ReportId)]{.mark}                   |
|    | xam | >                                                        |
|    | ple | > [FROM dbo.ObservationRequest                           |
|    | >   | > ObservationRequest]{.mark}                             |
|    |  of | >                                                        |
|    | > g | > [WHERE CAST(ObservationRequest.AuthorisedDateTime AS   |
|    | ood | > DATE) \>= DATEADD(DAY,-30,CAST(GETDATE() AS            |
|    | > p | > DATE));]{.mark}                                        |
|    | rac |                                                          |
|    | tic |                                                          |
|    | e]( |                                                          |
|    | ./m |                                                          |
|    | edi |                                                          |
|    | a/i |                                                          |
|    | mag |                                                          |
|    | e3. |                                                          |
|    | png |                                                          |
|    | ){w |                                                          |
|    | idt |                                                          |
|    | h=" |                                                          |
|    | 0.1 |                                                          |
|    | 968 |                                                          |
|    | 503 |                                                          |
|    | 937 |                                                          |
|    | 007 |                                                          |
|    | 874 |                                                          |
|    | in" |                                                          |
|    | >   |                                                          |
|    | hei |                                                          |
|    | ght |                                                          |
|    | ="0 |                                                          |
|    | .19 |                                                          |
|    | 685 |                                                          |
|    | 039 |                                                          |
|    | 370 |                                                          |
|    | 078 |                                                          |
|    | 74i |                                                          |
|    | n"} |                                                          |
+----+-----+----------------------------------------------------------+

## Stored procedures #1

In this next example, we will step through a stored procedure making
sure to:

1.  Qualify the procedure name with the schema.

2.  Add BEGIN and END statements.

3.  SET NOCOUNT ON

4.  Return a value.

+---+---+-------------------------------------------------------------+
|   | ! | [CREATE PROCEDURE prGetReportMasterId \@Id BIGINT]{.mark}   |
|   | [ |                                                             |
|   | E | [AS]{.mark}                                                 |
|   | x |                                                             |
|   | a | [SELECT]{.mark}                                             |
|   | m |                                                             |
|   | p | [Report.Id]{.mark}                                          |
|   | l |                                                             |
|   | e | [, Report.MasterReportId]{.mark}                            |
|   | o |                                                             |
|   | f | [FROM]{.mark}                                               |
|   | p |                                                             |
|   | r | [dbo.Report AS Report]{.mark}                               |
|   | a |                                                             |
|   | c | [ WHERE Report.Id = \@Id;]{.mark}                           |
|   | t |                                                             |
|   | i |                                                             |
|   | c |                                                             |
|   | e |                                                             |
|   | s |                                                             |
|   | t |                                                             |
|   | o |                                                             |
|   | a |                                                             |
|   | v |                                                             |
|   | o |                                                             |
|   | i |                                                             |
|   | d |                                                             |
|   | ] |                                                             |
|   | ( |                                                             |
|   | . |                                                             |
|   | / |                                                             |
|   | m |                                                             |
|   | e |                                                             |
|   | d |                                                             |
|   | i |                                                             |
|   | a |                                                             |
|   | / |                                                             |
|   | i |                                                             |
|   | m |                                                             |
|   | a |                                                             |
|   | g |                                                             |
|   | e |                                                             |
|   | 6 |                                                             |
|   | . |                                                             |
|   | p |                                                             |
|   | n |                                                             |
|   | g |                                                             |
|   | ) |                                                             |
|   | { |                                                             |
|   | w |                                                             |
|   | i |                                                             |
|   | d |                                                             |
|   | t |                                                             |
|   | h |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | h |                                                             |
|   | e |                                                             |
|   | i |                                                             |
|   | g |                                                             |
|   | h |                                                             |
|   | t |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | } |                                                             |
+===+===+=============================================================+
| 1 | ! | [CREATE PROCEDURE dbo.prGetReportMasterId \@Id              |
|   | [ | BIGINT]{.mark}                                              |
|   | E |                                                             |
|   | x | [AS]{.mark}                                                 |
|   | a |                                                             |
|   | m | [SELECT]{.mark}                                             |
|   | p |                                                             |
|   | l | [Report.Id]{.mark}                                          |
|   | e |                                                             |
|   | o | [, Report.MasterReportId]{.mark}                            |
|   | f |                                                             |
|   | p | [FROM]{.mark}                                               |
|   | r |                                                             |
|   | a | [dbo.Report AS Report]{.mark}                               |
|   | c |                                                             |
|   | t | [ WHERE Report.Id = \@Id;]{.mark}                           |
|   | i |                                                             |
|   | c |                                                             |
|   | e |                                                             |
|   | s |                                                             |
|   | t |                                                             |
|   | o |                                                             |
|   | a |                                                             |
|   | v |                                                             |
|   | o |                                                             |
|   | i |                                                             |
|   | d |                                                             |
|   | ] |                                                             |
|   | ( |                                                             |
|   | . |                                                             |
|   | / |                                                             |
|   | m |                                                             |
|   | e |                                                             |
|   | d |                                                             |
|   | i |                                                             |
|   | a |                                                             |
|   | / |                                                             |
|   | i |                                                             |
|   | m |                                                             |
|   | a |                                                             |
|   | g |                                                             |
|   | e |                                                             |
|   | 6 |                                                             |
|   | . |                                                             |
|   | p |                                                             |
|   | n |                                                             |
|   | g |                                                             |
|   | ) |                                                             |
|   | { |                                                             |
|   | w |                                                             |
|   | i |                                                             |
|   | d |                                                             |
|   | t |                                                             |
|   | h |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | h |                                                             |
|   | e |                                                             |
|   | i |                                                             |
|   | g |                                                             |
|   | h |                                                             |
|   | t |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | } |                                                             |
+---+---+-------------------------------------------------------------+
| 2 | ! | [CREATE PROCEDURE dbo.prGetReportMasterId \@Id              |
|   | [ | BIGINT]{.mark}                                              |
|   | E |                                                             |
|   | x | [AS]{.mark}                                                 |
|   | a |                                                             |
|   | m | [BEGIN]{.mark}                                              |
|   | p |                                                             |
|   | l | [SELECT]{.mark}                                             |
|   | e |                                                             |
|   | o | [Report.Id]{.mark}                                          |
|   | f |                                                             |
|   | p | [, Report.MasterReportId]{.mark}                            |
|   | r |                                                             |
|   | a | [FROM]{.mark}                                               |
|   | c |                                                             |
|   | t | [dbo.Report AS Report]{.mark}                               |
|   | i |                                                             |
|   | c | [ WHERE Report.Id = \@Id;]{.mark}                           |
|   | e |                                                             |
|   | s | [END;]{.mark}                                               |
|   | t |                                                             |
|   | o |                                                             |
|   | a |                                                             |
|   | v |                                                             |
|   | o |                                                             |
|   | i |                                                             |
|   | d |                                                             |
|   | ] |                                                             |
|   | ( |                                                             |
|   | . |                                                             |
|   | / |                                                             |
|   | m |                                                             |
|   | e |                                                             |
|   | d |                                                             |
|   | i |                                                             |
|   | a |                                                             |
|   | / |                                                             |
|   | i |                                                             |
|   | m |                                                             |
|   | a |                                                             |
|   | g |                                                             |
|   | e |                                                             |
|   | 6 |                                                             |
|   | . |                                                             |
|   | p |                                                             |
|   | n |                                                             |
|   | g |                                                             |
|   | ) |                                                             |
|   | { |                                                             |
|   | w |                                                             |
|   | i |                                                             |
|   | d |                                                             |
|   | t |                                                             |
|   | h |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | h |                                                             |
|   | e |                                                             |
|   | i |                                                             |
|   | g |                                                             |
|   | h |                                                             |
|   | t |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | } |                                                             |
+---+---+-------------------------------------------------------------+
| 3 | ! | [CREATE PROCEDURE dbo.prGetReportMasterId \@Id              |
|   | [ | BIGINT]{.mark}                                              |
|   | E |                                                             |
|   | x | [AS]{.mark}                                                 |
|   | a |                                                             |
|   | m | [BEGIN]{.mark}                                              |
|   | p |                                                             |
|   | l | [SET NOCOUNT ON;]{.mark}                                    |
|   | e |                                                             |
|   | o | [SELECT]{.mark}                                             |
|   | f |                                                             |
|   | p | [Report.Id]{.mark}                                          |
|   | r |                                                             |
|   | a | [, Report.MasterReportId]{.mark}                            |
|   | c |                                                             |
|   | t | [FROM]{.mark}                                               |
|   | i |                                                             |
|   | c | [dbo.Report AS Report]{.mark}                               |
|   | e |                                                             |
|   | s | [ WHERE Report.Id = \@Id;]{.mark}                           |
|   | t |                                                             |
|   | o | [END;]{.mark}                                               |
|   | a |                                                             |
|   | v |                                                             |
|   | o |                                                             |
|   | i |                                                             |
|   | d |                                                             |
|   | ] |                                                             |
|   | ( |                                                             |
|   | . |                                                             |
|   | / |                                                             |
|   | m |                                                             |
|   | e |                                                             |
|   | d |                                                             |
|   | i |                                                             |
|   | a |                                                             |
|   | / |                                                             |
|   | i |                                                             |
|   | m |                                                             |
|   | a |                                                             |
|   | g |                                                             |
|   | e |                                                             |
|   | 6 |                                                             |
|   | . |                                                             |
|   | p |                                                             |
|   | n |                                                             |
|   | g |                                                             |
|   | ) |                                                             |
|   | { |                                                             |
|   | w |                                                             |
|   | i |                                                             |
|   | d |                                                             |
|   | t |                                                             |
|   | h |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | h |                                                             |
|   | e |                                                             |
|   | i |                                                             |
|   | g |                                                             |
|   | h |                                                             |
|   | t |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | } |                                                             |
+---+---+-------------------------------------------------------------+
| 4 | ! | [CREATE PROCEDURE dbo.prGetReportMasterId \@Id              |
|   | [ | BIGINT]{.mark}                                              |
|   | E |                                                             |
|   | x | [AS]{.mark}                                                 |
|   | a |                                                             |
|   | m | [BEGIN]{.mark}                                              |
|   | p |                                                             |
|   | l | [SET NOCOUNT ON;]{.mark}                                    |
|   | e |                                                             |
|   | o | [SELECT]{.mark}                                             |
|   | f |                                                             |
|   | g | [Report.Id]{.mark}                                          |
|   | o |                                                             |
|   | o | [, Report.MasterReportId]{.mark}                            |
|   | d |                                                             |
|   | p | [FROM]{.mark}                                               |
|   | r |                                                             |
|   | a | [dbo.Report AS Report]{.mark}                               |
|   | c |                                                             |
|   | t | [ WHERE Report.Id = \@Id;]{.mark}                           |
|   | i |                                                             |
|   | c | [RETURN 0;]{.mark}                                          |
|   | e |                                                             |
|   | ] | [END;]{.mark}                                               |
|   | ( |                                                             |
|   | . |                                                             |
|   | / |                                                             |
|   | m |                                                             |
|   | e |                                                             |
|   | d |                                                             |
|   | i |                                                             |
|   | a |                                                             |
|   | / |                                                             |
|   | i |                                                             |
|   | m |                                                             |
|   | a |                                                             |
|   | g |                                                             |
|   | e |                                                             |
|   | 3 |                                                             |
|   | . |                                                             |
|   | p |                                                             |
|   | n |                                                             |
|   | g |                                                             |
|   | ) |                                                             |
|   | { |                                                             |
|   | w |                                                             |
|   | i |                                                             |
|   | d |                                                             |
|   | t |                                                             |
|   | h |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | h |                                                             |
|   | e |                                                             |
|   | i |                                                             |
|   | g |                                                             |
|   | h |                                                             |
|   | t |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | } |                                                             |
+---+---+-------------------------------------------------------------+

## sTORED pROCEDURES #2

In the following example, we will step through a stored procedure making
sure to:

1.  Specify length for VARCHAR parameters.

2.  Specify columns for INSERT statements.

3.  SET NOCOUNT ON, SET XACT_ABORT ON

4.  Add implicit transaction using BEGIN TRANSACTION and COMMIT

5.  Add Error Handling using TRY . . . CATCH blocks.

+------+---------------------------------------------------------------+
| > !  | > [CREATE PROCEDURE dbo.InsertReferenceDataValue]{.mark}      |
| [Exa | >                                                             |
| mple | > [\@ReferenceDataDomainId INT]{.mark}                        |
| > of | >                                                             |
| > p  | > [, \@Code VARCHAR]{.mark}                                   |
| ract | >                                                             |
| ices | > [, \@Rubric VARCHAR]{.mark}                                 |
| > to | >                                                             |
| >    | > [, \@Active BIT]{.mark}                                     |
|  avo | >                                                             |
| id]( | > [, \@ParentId INT = NULL]{.mark}                            |
| ./me | >                                                             |
| dia/ | > [AS]{.mark}                                                 |
| imag | >                                                             |
| e6.p | > [BEGIN]{.mark}                                              |
| ng){ | >                                                             |
| widt | > [INSERT dbo.ReferenceDataValue]{.mark}                      |
| h="0 | >                                                             |
| .196 | > [VALUES]{.mark}                                             |
| 8503 | >                                                             |
| 9370 | > [(]{.mark}                                                  |
| 0787 | >                                                             |
| 4in" | > [\@ReferenceDataDomainId]{.mark}                            |
| > he | >                                                             |
| ight | > [ , \@Code]{.mark}                                          |
| ="0. | >                                                             |
| 1968 | > [ , \@Rubric]{.mark}                                        |
| 5039 | >                                                             |
| 3700 | > [ , GETDATE()]{.mark}                                       |
| 7874 | >                                                             |
| in"} | > [ , \@Active]{.mark}                                        |
|      | >                                                             |
|      | > [ , \@ParentId]{.mark}                                      |
|      | >                                                             |
|      | > [);]{.mark}                                                 |
|      | >                                                             |
|      | > [RETURN 0;]{.mark}                                          |
|      | >                                                             |
|      | > [END;]{.mark}                                               |
+======+===============================================================+
+------+---------------------------------------------------------------+

+---+---+-------------------------------------------------------------+
| 1 | ! | [CREATE PROCEDURE dbo.InsertReferenceDataValue]{.mark}      |
|   | [ |                                                             |
|   | E | [\@ReferenceDataDomainId INT]{.mark}                        |
|   | x |                                                             |
|   | a | [, \@Code VARCHAR**(50)**]{.mark}                           |
|   | m |                                                             |
|   | p | [, \@Rubric VARCHAR**(200)**]{.mark}                        |
|   | l |                                                             |
|   | e | [, \@Active BIT]{.mark}                                     |
|   | o |                                                             |
|   | f | [, \@ParentId INT = NULL]{.mark}                            |
|   | p |                                                             |
|   | r | [AS]{.mark}                                                 |
|   | a |                                                             |
|   | c | [BEGIN]{.mark}                                              |
|   | t |                                                             |
|   | i | [INSERT dbo.ReferenceDataValue]{.mark}                      |
|   | c |                                                             |
|   | e | [VALUES]{.mark}                                             |
|   | s |                                                             |
|   | t | [(]{.mark}                                                  |
|   | o |                                                             |
|   | a | [\@ReferenceDataDomainId]{.mark}                            |
|   | v |                                                             |
|   | o | [ , \@Code]{.mark}                                          |
|   | i |                                                             |
|   | d | [ , \@Rubric]{.mark}                                        |
|   | ] |                                                             |
|   | ( | [ , GETDATE()]{.mark}                                       |
|   | . |                                                             |
|   | / | [ , \@Active]{.mark}                                        |
|   | m |                                                             |
|   | e | [ , \@ParentId]{.mark}                                      |
|   | d |                                                             |
|   | i | [);]{.mark}                                                 |
|   | a |                                                             |
|   | / | [RETURN 0;]{.mark}                                          |
|   | i |                                                             |
|   | m | [END;]{.mark}                                               |
|   | a |                                                             |
|   | g |                                                             |
|   | e |                                                             |
|   | 6 |                                                             |
|   | . |                                                             |
|   | p |                                                             |
|   | n |                                                             |
|   | g |                                                             |
|   | ) |                                                             |
|   | { |                                                             |
|   | w |                                                             |
|   | i |                                                             |
|   | d |                                                             |
|   | t |                                                             |
|   | h |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | h |                                                             |
|   | e |                                                             |
|   | i |                                                             |
|   | g |                                                             |
|   | h |                                                             |
|   | t |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | } |                                                             |
+===+===+=============================================================+
| 2 | ! | [CREATE PROCEDURE dbo.InsertReferenceDataValue]{.mark}      |
|   | [ |                                                             |
|   | E | [\@ReferenceDataDomainId INT]{.mark}                        |
|   | x |                                                             |
|   | a | [, \@Code VARCHAR(50)]{.mark}                               |
|   | m |                                                             |
|   | p | [, \@Rubric VARCHAR(200)]{.mark}                            |
|   | l |                                                             |
|   | e | [, \@Active BIT]{.mark}                                     |
|   | o |                                                             |
|   | f | [, \@ParentId INT = NULL]{.mark}                            |
|   | p |                                                             |
|   | r | [AS]{.mark}                                                 |
|   | a |                                                             |
|   | c | [BEGIN]{.mark}                                              |
|   | t |                                                             |
|   | i | [INSERT dbo.ReferenceDataValue]{.mark}                      |
|   | c |                                                             |
|   | e | [(]{.mark}                                                  |
|   | s |                                                             |
|   | t | [Id]{.mark}                                                 |
|   | o |                                                             |
|   | a | [, ReferenceDataDomainId]{.mark}                            |
|   | v |                                                             |
|   | o | [, Code]{.mark}                                             |
|   | i |                                                             |
|   | d | [, Rubric]{.mark}                                           |
|   | ] |                                                             |
|   | ( | [, DateTimeCreated]{.mark}                                  |
|   | . |                                                             |
|   | / | [, Active]{.mark}                                           |
|   | m |                                                             |
|   | e | [, ParentId]{.mark}                                         |
|   | d |                                                             |
|   | i | [)]{.mark}                                                  |
|   | a |                                                             |
|   | / | [VALUES]{.mark}                                             |
|   | i |                                                             |
|   | m | [(]{.mark}                                                  |
|   | a |                                                             |
|   | g | [\@ReferenceDataDomainId]{.mark}                            |
|   | e |                                                             |
|   | 6 | [ , \@Code]{.mark}                                          |
|   | . |                                                             |
|   | p | [ , \@Rubric]{.mark}                                        |
|   | n |                                                             |
|   | g | [ , GETDATE()]{.mark}                                       |
|   | ) |                                                             |
|   | { | [ , \@Active]{.mark}                                        |
|   | w |                                                             |
|   | i | [ , \@ParentId]{.mark}                                      |
|   | d |                                                             |
|   | t | [);]{.mark}                                                 |
|   | h |                                                             |
|   | = | [RETURN 0;]{.mark}                                          |
|   | " |                                                             |
|   | 0 | [END;]{.mark}                                               |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | h |                                                             |
|   | e |                                                             |
|   | i |                                                             |
|   | g |                                                             |
|   | h |                                                             |
|   | t |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | } |                                                             |
+---+---+-------------------------------------------------------------+
| 3 | ! | [CREATE PROCEDURE dbo.InsertReferenceDataValue]{.mark}      |
|   | [ |                                                             |
|   | E | [\@ReferenceDataDomainId INT]{.mark}                        |
|   | x |                                                             |
|   | a | [, \@Code VARCHAR(50)]{.mark}                               |
|   | m |                                                             |
|   | p | [, \@Rubric VARCHAR(200)]{.mark}                            |
|   | l |                                                             |
|   | e | [, \@Active BIT]{.mark}                                     |
|   | o |                                                             |
|   | f | [, \@ParentId INT = NULL]{.mark}                            |
|   | p |                                                             |
|   | r | [AS]{.mark}                                                 |
|   | a |                                                             |
|   | c | [BEGIN]{.mark}                                              |
|   | t |                                                             |
|   | i | [**SET NOCOUNT ON;**]{.mark}                                |
|   | c |                                                             |
|   | e | [**SET XACT_ABORT ON;**]{.mark}                             |
|   | s |                                                             |
|   | t | [INSERT dbo.ReferenceDataValue]{.mark}                      |
|   | o |                                                             |
|   | a | [(]{.mark}                                                  |
|   | v |                                                             |
|   | o | [Id]{.mark}                                                 |
|   | i |                                                             |
|   | d | [, ReferenceDataDomainId]{.mark}                            |
|   | ] |                                                             |
|   | ( | [, Code]{.mark}                                             |
|   | . |                                                             |
|   | / | [, Rubric]{.mark}                                           |
|   | m |                                                             |
|   | e | [, DateTimeCreated]{.mark}                                  |
|   | d |                                                             |
|   | i | [, Active]{.mark}                                           |
|   | a |                                                             |
|   | / | [, ParentId]{.mark}                                         |
|   | i |                                                             |
|   | m | [)]{.mark}                                                  |
|   | a |                                                             |
|   | g | [VALUES]{.mark}                                             |
|   | e |                                                             |
|   | 6 | [(]{.mark}                                                  |
|   | . |                                                             |
|   | p | [\@ReferenceDataDomainId]{.mark}                            |
|   | n |                                                             |
|   | g | [ , \@Code]{.mark}                                          |
|   | ) |                                                             |
|   | { | [ , \@Rubric]{.mark}                                        |
|   | w |                                                             |
|   | i | [ , GETDATE()]{.mark}                                       |
|   | d |                                                             |
|   | t | [ , \@Active]{.mark}                                        |
|   | h |                                                             |
|   | = | [ , \@ParentId]{.mark}                                      |
|   | " |                                                             |
|   | 0 | [);]{.mark}                                                 |
|   | . |                                                             |
|   | 1 | [RETURN 0;]{.mark}                                          |
|   | 9 |                                                             |
|   | 6 | [END;]{.mark}                                               |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | h |                                                             |
|   | e |                                                             |
|   | i |                                                             |
|   | g |                                                             |
|   | h |                                                             |
|   | t |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | } |                                                             |
+---+---+-------------------------------------------------------------+
| 4 | ! | [CREATE PROCEDURE dbo.InsertReferenceDataValue]{.mark}      |
|   | [ |                                                             |
|   | E | [\@ReferenceDataDomainId INT]{.mark}                        |
|   | x |                                                             |
|   | a | [, \@Code VARCHAR(50)]{.mark}                               |
|   | m |                                                             |
|   | p | [, \@Rubric VARCHAR(200)]{.mark}                            |
|   | l |                                                             |
|   | e | [, \@Active BIT]{.mark}                                     |
|   | o |                                                             |
|   | f | [, \@ParentId INT = NULL]{.mark}                            |
|   | p |                                                             |
|   | r | [AS]{.mark}                                                 |
|   | a |                                                             |
|   | c | [BEGIN]{.mark}                                              |
|   | t |                                                             |
|   | i | [SET NOCOUNT ON;]{.mark}                                    |
|   | c |                                                             |
|   | e | [SET XACT_ABORT ON;]{.mark}                                 |
|   | s |                                                             |
|   | t | [BEGIN TRANSACTION]{.mark}                                  |
|   | o |                                                             |
|   | a | [INSERT dbo.ReferenceDataValue]{.mark}                      |
|   | v |                                                             |
|   | o | [(]{.mark}                                                  |
|   | i |                                                             |
|   | d | [Id]{.mark}                                                 |
|   | ] |                                                             |
|   | ( | [, ReferenceDataDomainId]{.mark}                            |
|   | . |                                                             |
|   | / | [, Code]{.mark}                                             |
|   | m |                                                             |
|   | e | [, Rubric]{.mark}                                           |
|   | d |                                                             |
|   | i | [, DateTimeCreated]{.mark}                                  |
|   | a |                                                             |
|   | / | [, Active]{.mark}                                           |
|   | i |                                                             |
|   | m | [, ParentId]{.mark}                                         |
|   | a |                                                             |
|   | g | [)]{.mark}                                                  |
|   | e |                                                             |
|   | 6 | [VALUES]{.mark}                                             |
|   | . |                                                             |
|   | p | [(]{.mark}                                                  |
|   | n |                                                             |
|   | g | [\@ReferenceDataDomainId]{.mark}                            |
|   | ) |                                                             |
|   | { | [ , \@Code]{.mark}                                          |
|   | w |                                                             |
|   | i | [ , \@Rubric]{.mark}                                        |
|   | d |                                                             |
|   | t | [ , GETDATE()]{.mark}                                       |
|   | h |                                                             |
|   | = | [ , \@Active]{.mark}                                        |
|   | " |                                                             |
|   | 0 | [ , \@ParentId]{.mark}                                      |
|   | . |                                                             |
|   | 1 | [);]{.mark}                                                 |
|   | 9 |                                                             |
|   | 6 | [COMMIT]{.mark}                                             |
|   | 8 |                                                             |
|   | 5 | [RETURN 0;]{.mark}                                          |
|   | 0 |                                                             |
|   | 3 | [END;]{.mark}                                               |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | h |                                                             |
|   | e |                                                             |
|   | i |                                                             |
|   | g |                                                             |
|   | h |                                                             |
|   | t |                                                             |
|   | = |                                                             |
|   | " |                                                             |
|   | 0 |                                                             |
|   | . |                                                             |
|   | 1 |                                                             |
|   | 9 |                                                             |
|   | 6 |                                                             |
|   | 8 |                                                             |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | } |                                                             |
+---+---+-------------------------------------------------------------+
| 5 | ! | [CREATE PROCEDURE dbo.InsertReferenceDataValue]{.mark}      |
|   | [ |                                                             |
|   | E | [\@ReferenceDataDomainId INT]{.mark}                        |
|   | x |                                                             |
|   | a | [, \@Code VARCHAR(50)]{.mark}                               |
|   | m |                                                             |
|   | p | [, \@Rubric VARCHAR(200)]{.mark}                            |
|   | l |                                                             |
|   | e | [, \@Active BIT]{.mark}                                     |
|   | o |                                                             |
|   | f | [, \@ParentId INT = NULL]{.mark}                            |
|   | g |                                                             |
|   | o | [AS]{.mark}                                                 |
|   | o |                                                             |
|   | d | [BEGIN]{.mark}                                              |
|   | p |                                                             |
|   | r | [SET NOCOUNT ON;]{.mark}                                    |
|   | a |                                                             |
|   | c | [SET XACT_ABORT ON;]{.mark}                                 |
|   | t |                                                             |
|   | i | [BEGIN TRY]{.mark}                                          |
|   | c |                                                             |
|   | e | [ BEGIN TRANSACTION]{.mark}                                 |
|   | ] |                                                             |
|   | ( | [ INSERT dbo.ReferenceDataValue]{.mark}                     |
|   | . |                                                             |
|   | / | [ (]{.mark}                                                 |
|   | m |                                                             |
|   | e | [ Id]{.mark}                                                |
|   | d |                                                             |
|   | i | [ , ReferenceDataDomainId]{.mark}                           |
|   | a |                                                             |
|   | / | [ , Code]{.mark}                                            |
|   | i |                                                             |
|   | m | [ , Rubric]{.mark}                                          |
|   | a |                                                             |
|   | g | [ , DateTimeCreated]{.mark}                                 |
|   | e |                                                             |
|   | 3 | [ , Active]{.mark}                                          |
|   | . |                                                             |
|   | p | [ , ParentId]{.mark}                                        |
|   | n |                                                             |
|   | g | [ )]{.mark}                                                 |
|   | ) |                                                             |
|   | { | [ VALUES]{.mark}                                            |
|   | w |                                                             |
|   | i | [ (]{.mark}                                                 |
|   | d |                                                             |
|   | t | [ \@ReferenceDataDomainId]{.mark}                           |
|   | h |                                                             |
|   | = | [ , \@Code]{.mark}                                          |
|   | " |                                                             |
|   | 0 | [ , \@Rubric]{.mark}                                        |
|   | . |                                                             |
|   | 1 | [ , GETDATE()]{.mark}                                       |
|   | 9 |                                                             |
|   | 6 | [ , \@Active]{.mark}                                        |
|   | 8 |                                                             |
|   | 5 | [ , \@ParentId]{.mark}                                      |
|   | 0 |                                                             |
|   | 3 | [ );]{.mark}                                                |
|   | 9 |                                                             |
|   | 3 | [ COMMIT]{.mark}                                            |
|   | 7 |                                                             |
|   | 0 | [END TRY]{.mark}                                            |
|   | 0 |                                                             |
|   | 7 | [BEGIN CATCH]{.mark}                                        |
|   | 8 |                                                             |
|   | 7 | [ DECLARE \@ErrorMsg VARCHAR(4000);]{.mark}                 |
|   | 4 |                                                             |
|   | i | [ SET \@ErrorMsg = ERROR_MESSAGE();]{.mark}                 |
|   | n |                                                             |
|   | " | [ \-- Rollback our transaction]{.mark}                      |
|   | h |                                                             |
|   | e | [ IF @@TRANCOUNT\>0]{.mark}                                 |
|   | i |                                                             |
|   | g | [ ROLLBACK;]{.mark}                                         |
|   | h |                                                             |
|   | t | [ \--Re-raise the error to our application;]{.mark}         |
|   | = |                                                             |
|   | " | [ RAISERROR(@ErrorMsg, 16, 1);]{.mark}                      |
|   | 0 |                                                             |
|   | . | [END CATCH;]{.mark}                                         |
|   | 1 |                                                             |
|   | 9 | [RETURN 0;]{.mark}                                          |
|   | 6 |                                                             |
|   | 8 | [END;]{.mark}                                               |
|   | 5 |                                                             |
|   | 0 |                                                             |
|   | 3 |                                                             |
|   | 9 |                                                             |
|   | 3 |                                                             |
|   | 7 |                                                             |
|   | 0 |                                                             |
|   | 0 |                                                             |
|   | 7 |                                                             |
|   | 8 |                                                             |
|   | 7 |                                                             |
|   | 4 |                                                             |
|   | i |                                                             |
|   | n |                                                             |
|   | " |                                                             |
|   | } |                                                             |
+---+---+-------------------------------------------------------------+

## 6.8 nAMING {#naming .unnumbered}

In our last example, we contrast a simple database query that does not
conform to our rules with one that does. The conformant query assumes
there is a constraint preventing any changes to the underlying database
schema.

The conformant query implements the following rules: -

-   Names are descriptive and singular.

-   Pascal Casing applied.

-   Prefixes and underscores removed.

-   All Keywords are uppercase.

-   Meaningful table alias name applied.

-   Columns qualified with Table alias and meaningful column alias
    applied.

-   Meaningful column alias and name applied.

-   SQL Prompt formatting style rule applied.

+----+-----+-----------------------------------------------------------+
| >  | >   | > SELECT SubjectGivenName, SubjectFamilyName, \[Hospital  |
|  1 | ![E | > Ward\] from tblPatients WHERE ID = \@int_ID and         |
|    | xam | > SubjectGivenName = \@str_param2;                        |
|    | ple |                                                           |
|    | >   |                                                           |
|    |  of |                                                           |
|    | >   |                                                           |
|    | pra |                                                           |
|    | cti |                                                           |
|    | ces |                                                           |
|    | >   |                                                           |
|    |  to |                                                           |
|    | > a |                                                           |
|    | voi |                                                           |
|    | d]( |                                                           |
|    | ./m |                                                           |
|    | edi |                                                           |
|    | a/i |                                                           |
|    | mag |                                                           |
|    | e6. |                                                           |
|    | png |                                                           |
|    | ){w |                                                           |
|    | idt |                                                           |
|    | h=" |                                                           |
|    | 0.1 |                                                           |
|    | 968 |                                                           |
|    | 503 |                                                           |
|    | 937 |                                                           |
|    | 007 |                                                           |
|    | 874 |                                                           |
|    | in" |                                                           |
|    | >   |                                                           |
|    | hei |                                                           |
|    | ght |                                                           |
|    | ="0 |                                                           |
|    | .19 |                                                           |
|    | 685 |                                                           |
|    | 039 |                                                           |
|    | 370 |                                                           |
|    | 078 |                                                           |
|    | 74i |                                                           |
|    | n"} |                                                           |
+====+=====+===========================================================+
| >  | >   | > SELECT                                                  |
|  2 | ![E | >                                                         |
|    | xam | > Patient.SubjectGivenName AS FirstName                   |
|    | ple | >                                                         |
|    | >   | > , Patient.SubjectFamilyName AS LastName                 |
|    |  of | >                                                         |
|    | > g | > , Patient.\[Hospital Ward\] AS HospitalWard             |
|    | ood | >                                                         |
|    | > p | > FROM                                                    |
|    | rac | >                                                         |
|    | tic | > dbo.tblPatients AS Patient                              |
|    | e]( | >                                                         |
|    | ./m | > WHERE                                                   |
|    | edi | >                                                         |
|    | a/i | > Patient.ID = \@PatientId                                |
|    | mag | >                                                         |
|    | e3. | > AND Patient.SubjectGivenName = \@FirstName;             |
|    | png |                                                           |
|    | ){w |                                                           |
|    | idt |                                                           |
|    | h=" |                                                           |
|    | 0.1 |                                                           |
|    | 968 |                                                           |
|    | 503 |                                                           |
|    | 937 |                                                           |
|    | 007 |                                                           |
|    | 874 |                                                           |
|    | in" |                                                           |
|    | >   |                                                           |
|    | hei |                                                           |
|    | ght |                                                           |
|    | ="0 |                                                           |
|    | .19 |                                                           |
|    | 685 |                                                           |
|    | 039 |                                                           |
|    | 370 |                                                           |
|    | 078 |                                                           |
|    | 74i |                                                           |
|    | n"} |                                                           |
+----+-----+-----------------------------------------------------------+

# sql pROMPT cONFIGURATION

## 8.1 sql pROMPT sETTINGS fILE {#sql-prompt-settings-file .unnumbered}

### How to import the settings {#how-to-import-the-settings .unnumbered}

1.  Download the *NWIS_STANDARD_SQLPROMPT_SETTINGS* file to a local
    directory.

> You can find the file from the *Software Development Standards* git
> repo under the *Software Development Standards* project on Application
> Development & Support's Azure DevOps instance.

2.  Open SQL Server Management Studio with Redgate SQL Prompt v9 or
    later installed and choose ***SQL Prompt*\>*Options.***

> Select ***Import*** to load the
> *NWIS_STANDARD_SQLPROMPT_SETTINGS.settings* file.

### The settings file explained {#the-settings-file-explained .unnumbered}

+---------------------+------------------------------------------------+
| **Suggestions**     |                                                |
+=====================+================================================+
| -   Behaviour       | Uses default settings                          |
+---------------------+------------------------------------------------+
| -   Connections     | Uses default settings with the following       |
|                     | exceptions:                                    |
|                     |                                                |
|                     | Unchecks the ***Load suggestions for linked    |
|                     | servers*** & ***Load suggestions for           |
|                     | synonyms*** options                            |
|                     |                                                |
|                     | > [Note]{.underline}: This is done to improve  |
|                     | > performance. Specifying the databases to     |
|                     | > load may further improve performance, but    |
|                     | > this will vary between teams.                |
+---------------------+------------------------------------------------+
| -   Join Conditions | Unchecks ***Columns with matching names**      |
|                     | **(not case-sensitive)***                      |
|                     |                                                |
|                     | Checks ***Individual columns in                |
|                     | multiple-column foreign keys***                |
+---------------------+------------------------------------------------+
| -   Snippets        | Uses default settings                          |
+---------------------+------------------------------------------------+
| -   Warnings &      | Checks all options other than '*Show warnings  |
|     highlighting    | for DROP statements*'                          |
+---------------------+------------------------------------------------+
| **Inserted Code**   |                                                |
+---------------------+------------------------------------------------+
| -   Objects and     | Uses default settings                          |
|     statements      |                                                |
+---------------------+------------------------------------------------+
| -   Qualification   | Checks all options                             |
+---------------------+------------------------------------------------+
| -   Aliases         | Checks **Assign aliases**                      |
|                     |                                                |
|                     | > [Note]{.underline}: Custom aliases should be |
|                     | > used to provide consistency across an        |
|                     | > application, but these cannot be defined     |
|                     | > here.                                        |
+---------------------+------------------------------------------------+
| -   Special         | Uses default settings                          |
|     characters      |                                                |
+---------------------+------------------------------------------------+
| **Format**          |                                                |
+---------------------+------------------------------------------------+
| -   Styles          | For formatting styles see [SQL Prompt          |
|                     | formatting style                               |
|                     | file](#_SQL_Prompt_formatting)                 |
|                     |                                                |
|                     | In addition to default settings checks         |
|                     |                                                |
|                     | > ***Expand wildcards***                       |
|                     | >                                              |
|                     | > ***Qualify object names***                   |
|                     | >                                              |
|                     | > ***Insert semicolons***                      |
|                     | >                                              |
|                     | > ***Apply column alias style***               |
|                     | >                                              |
|                     | > ***Column AS alias***                        |
|                     | >                                              |
|                     | > ***Add/remove square brackets***             |
|                     | >                                              |
|                     | > ***Remove unnecessary brackets***            |
|                     | >                                              |
|                     | > ***Add/remove AS keyword on alias definition |
|                     | > for tables and views***                      |
|                     | >                                              |
|                     | > ***Add AS keyword***                         |
+---------------------+------------------------------------------------+
| **Tabs**            |                                                |
+---------------------+------------------------------------------------+
| -   History         | Sets ***Maximum number of tabs to restore:***  |
|                     | to [5]{.underline}                             |
|                     |                                                |
|                     | Unchecks ***Automatically reconnect restored   |
|                     | tabs***                                        |
+---------------------+------------------------------------------------+
| -   Color           | Uses default settings                          |
|                     |                                                |
|                     | [Note]{.underline}: Colour can be used to      |
|                     | differentiate environments. However, separate  |
|                     | credentials (e.g. NatTd, GIGNWI) should be     |
|                     | used to connect to development and production  |
|                     | environments; these accounts can support their |
|                     | own SQL Prompt settings.                       |
+---------------------+------------------------------------------------+

## 8.2 sql pROMPT fORMATTING sTYLE fILE {#sql-prompt-formatting-style-file .unnumbered}

### How to import the style {#how-to-import-the-style .unnumbered}

1.  Download the *NWIS_STANDARD_SQLPROMPT_SETTINGS* file to a local
    directory.

> You can find the file from the *Software Development Standards* git
> repo under the *Software Development Standards* project on Application
> Development & Support's Azure DevOps instance.

2.  You have a choice of two versions. If using SQL Prompt v10.5 or
    later, choose the newer *.json* file extension. If using an earlier
    version, choose the *.sqlpromptstylev2* file type.

3.  With the correct style file selected, save it to "*\<Insert Drive
    Letter\>*:\\*Users*\\*\<Insert Test-Dev-NADEX-ID\>*
    *AppData\\Local\\Red Gate\\SQL Prompt \<Version\>\\StylesV2" or*
    "*\<Insert Drive Letter\>*:\\*Users*\\*\<Insert Test-Dev-NADEX-ID\>*
    *AppData\\Local\\Red Gate\\SQL Prompt \<Version\>\\Styles* [^16]

4.  Open SQL Server Management Studio with Redgate SQL Prompt v9 or
    later installed.

5.  From the menu choose ***SQL Prompt*\>*Active Styles\>Edit Formatting
    Styles***

6.  Under ***Your styles*** (top right), select the vertical ellipsis
    next to ***NWIS_Custom style indented, commas before*** and choose
    ***Set as active.***

**The style file explained**

Uses Redgate's ***Indented defaults*** as its base style with the
following customisations applied: -

+---------------------+------------------------------------------------+
| **GLOBAL**          |                                                |
+=====================+================================================+
| -   Whitespace      | ***Wrapping***                                 |
|                     |                                                |
|                     | > Sets ***Wrap lines longer than*** to *[160   |
|                     | > characters]{.underline}*                     |
+---------------------+------------------------------------------------+
| -   Lists           | ***Commas***                                   |
|                     |                                                |
|                     | > Checks ***Place commas before items***       |
|                     | >                                              |
|                     | > Sets ***Comma alignment*** to *[Before       |
|                     | > item]{.underline}*                           |
|                     | >                                              |
|                     | > Checks ***Add a space after comma***         |
+---------------------+------------------------------------------------+
| -   Casing          | > Sets ***Global variables*** to               |
|                     | > *[UPPERCASE]{.underline}*                    |
+---------------------+------------------------------------------------+
| **EXPRESSIONS**     |                                                |
+---------------------+------------------------------------------------+
| -   CASE            | Unchecks ***Place expressions on new line***   |
|                     |                                                |
|                     | ***WHEN***                                     |
|                     |                                                |
|                     | > Sets ***Place first WHEN on new line*** to   |
|                     | > *[If there's an input                        |
|                     | > expression]{.underline}*                     |
|                     | >                                              |
|                     | > Sets ***WHEN alignment*** to *[Indented from |
|                     | > CASE]{.underline}*                           |
|                     |                                                |
|                     | **THEN expressions**                           |
|                     |                                                |
|                     | > Unchecks ***Place THEN on new line***        |
|                     |                                                |
|                     | **ELSE**                                       |
|                     |                                                |
|                     | > Checks ***Place ELSE on new line***          |
|                     | >                                              |
|                     | > Checks ***Align ELSE to WHEN***              |
|                     |                                                |
|                     | **END**                                        |
|                     |                                                |
|                     | > Checks ***Place END on new line***           |
|                     | >                                              |
|                     | > Sets ***End alignment*** to *To CASE*        |
|                     |                                                |
|                     | **Short CASE expressions**                     |
|                     |                                                |
|                     | > Unchecks ***Collapse CASE expressions        |
|                     | > shorter than n characters***                 |
+---------------------+------------------------------------------------+

### Notes & explanation {#notes-explanation .unnumbered}

Commas before: -

-   clearly define a new column.

-   help identify when a comma is missing.

-   make it easier to comment out additional fields during development.

Indentation aids readability. However, long expressions may appear
distorted when wrapped. See the section [Exceptions prove the
rule](#_EXCEPTIONS_PROVE_THE).

# gOOD pRACTICE cHECKLISTS

Use this checklist to demonstrate you follow our coding standards.

We cross-reference each checklist item to a relevant section in our
standards and guides; Exceptions are noted where they may apply.

## 9.1 gENERAL gOOD pRACTICE {#general-good-practice-1 .unnumbered}

  ---------------------------------------------------------------------------------------------------
  **Item**                                         **Guide or standard**             **Exceptions**
  ---------- -------------------------------- ---- --------------------------------- ----------------
  1          You avoid placing business logic ☐    *T-SQL coding standard,           This is a
             in the database                       [7.1](#_Avoid_using_T-SQL)*       general rule.
                                                                                     But there may be
                                                                                     times when there
                                                                                     are good reasons
                                                                                     not to follow
                                                                                     it.

  2          You follow the coding            ☐    *T-SQL coding standard, All*      
             conventions described in this                                           
             standard                                                                

  3          You keep T-SQL scripts and       ☐    *T-SQL coding standard,           
             database code in source control       [7.3](#_General_good_practice)*   

  5          You analyse T-SQL against        ☐    *T-SQL coding standard,           
             Redgate code analysis rules           [7.6](#_Follow_Redgate’s_code)*   

  6          You format T-SQL using our       ☐    *T-SQL coding standard,           
             common configuration settings         [7.20](#_Follow_our_code)*        
  ---------------------------------------------------------------------------------------------------

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
