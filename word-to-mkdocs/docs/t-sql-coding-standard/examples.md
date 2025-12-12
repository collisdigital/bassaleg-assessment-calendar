# Examples

## 7.1 insert statement

In this example we make sure to

-   Qualify table names with the schema name.

-   Specify INSERT columns.

!!! note "> >"
    [INSERT INTO SubscribingConsultant] > [VALUES (\'7A5\', \'C1234567\');]

    [INSERT INTO **dbo.**SubscribingConsultant**(Organisation, ConsultantId)**] > [VALUES(\'7A5\', \'C1234567\');]

## 7.2 select statement

In this example we make sure to

-   Qualify table names with the schema name.

-   Add a meaningful table alias name.

-   Use the field name in the ORDER BY clause rather than a constant.

!!! note "> >"
    [SELECT Report.Id, Report.SubjectGivenName AS FirstName, Report.SubjectFamilyName AS LastName] > [FROM Report] > [ORDER BY 1 ASC;]

    [SELECT Report.Id, Report.SubjectGivenName AS FirstName, Report.SubjectFamilyName AS LastName] > [FROM **dbo.**Report **AS Report**] > [ORDER BY **Report.Id** ASC;]

## 7.3 queries

In this next example, we will step through a query making sure to: -

1.  Expand wildcards searches.

2.  Qualify table names with the schema name.

3.  Add a meaningful table alias name.

4.  Qualify column names with table alias.

5.  Add a meaningful column alias name[^15].

6.  Alias the column name using the AS convention.

7.  Add the semi colon terminator.

|  | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > [SELECT \* FROM Report] |
| --- | --- | --- |
| > 1 | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > [SELECT **Report.Id, SubjectGivenName f, > Report.SubjectFamilyName**] > > [FROM Report] |
| > 2 | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > [SELECT Report.Id, SubjectGivenName f, > Report.SubjectFamilyName] > > [FROM **dbo**.Report] |
| > 3 | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > [SELECT Report.Id, SubjectGivenName f, > Report.SubjectFamilyName] > > [FROM dbo.Report **AS Report**] |
| > 4 | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > [SELECT Report.Id, **Report**.SubjectGivenName f, > Report.SubjectFamilyName] > > [FROM dbo.Report AS Report] |
| > 5 | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > [SELECT Report.Id, Report.SubjectGivenName > **FirstName**, Report.SubjectFamilyName] > > [FROM dbo.Report AS Report] |
| > 6 | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > [SELECT Report.Id, Report.SubjectGivenName **AS** > FirstName, Report.SubjectFamilyName] > > [FROM dbo.Report AS Report] |
| > 7 | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > [SELECT Report.Id, Report.SubjectGivenName AS > FirstName, Report.SubjectFamilyName] > > [FROM dbo.Report AS Report**;**] |

## 7.4 dates #1

In this example, we ensure that a query against a date field can use the
index.

!!! note "> >"
    [SELECT ObservationRequest.ReportId] > [FROM dbo.ObservationRequest ObservationRequest] > [WHERE CONVERT(VARCHAR(10), ObservationRequest.AuthorisedDateTime, 112) = \'2018-12-12\';]

    [SELECT ObservationRequest.ReportId] > [FROM dbo.ObservationRequest ObservationRequest] > [WHERE CAST(ObservationRequest.AuthorisedDateTime AS DATE) = \'2018-12-12\';]

## Dates #2

We step through the next example ensuring to

1.  Eliminate the DATEDIFF operator.

2.  Eliminate arithmetic operators against date fields.

|  | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > [SELECT ObservationRequest.ReportId] > > [FROM dbo.ObservationRequest > ObservationRequest] > > [WHERE > DATEDIFF(DAY,Observ ationRequest.AuthorisedDateTime,GETDATE())\<=30;] |
| --- | --- | --- |
| > 1 | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > [SELECT ObservationRequest.ReportId] > > [FROM dbo.ObservationRequest > ObservationRequest] > > [WHERE CAST(ObservationRequest.AuthorisedDateTime AS > DATE) \> GETDATE()-30;] |
| > 2 | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > [SELECT COUNT(DISTINCT > ObservationRequest.ReportId)] > > [FROM dbo.ObservationRequest > ObservationRequest] > > [WHERE CAST(ObservationRequest.AuthorisedDateTime AS > DATE) \>= DATEADD(DAY,-30,CAST(GETDATE() AS > DATE));] |

## Stored procedures #1

In this next example, we will step through a stored procedure making
sure to:

1.  Qualify the procedure name with the schema.

2.  Add BEGIN and END statements.

3.  SET NOCOUNT ON

4.  Return a value.

|  | ! [ E x a m p l e o f p r a c t i c e s t o a v o i d ]( . / m e d i a / i m a g e 6 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | [CREATE PROCEDURE prGetReportMasterId \@Id BIGINT] [AS] [SELECT] [Report.Id] [, Report.MasterReportId] [FROM] [dbo.Report AS Report] [ WHERE Report.Id = \@Id;] |
| --- | --- | --- |
| 1 | ! [ E x a m p l e o f p r a c t i c e s t o a v o i d ]( . / m e d i a / i m a g e 6 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | [CREATE PROCEDURE dbo.prGetReportMasterId \@Id BIGINT] [AS] [SELECT] [Report.Id] [, Report.MasterReportId] [FROM] [dbo.Report AS Report] [ WHERE Report.Id = \@Id;] |
| 2 | ! [ E x a m p l e o f p r a c t i c e s t o a v o i d ]( . / m e d i a / i m a g e 6 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | [CREATE PROCEDURE dbo.prGetReportMasterId \@Id BIGINT] [AS] [BEGIN] [SELECT] [Report.Id] [, Report.MasterReportId] [FROM] [dbo.Report AS Report] [ WHERE Report.Id = \@Id;] [END;] |
| 3 | ! [ E x a m p l e o f p r a c t i c e s t o a v o i d ]( . / m e d i a / i m a g e 6 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | [CREATE PROCEDURE dbo.prGetReportMasterId \@Id BIGINT] [AS] [BEGIN] [SET NOCOUNT ON;] [SELECT] [Report.Id] [, Report.MasterReportId] [FROM] [dbo.Report AS Report] [ WHERE Report.Id = \@Id;] [END;] |
| 4 | ! [ E x a m p l e o f g o o d p r a c t i c e ]( . / m e d i a / i m a g e 3 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | [CREATE PROCEDURE dbo.prGetReportMasterId \@Id BIGINT] [AS] [BEGIN] [SET NOCOUNT ON;] [SELECT] [Report.Id] [, Report.MasterReportId] [FROM] [dbo.Report AS Report] [ WHERE Report.Id = \@Id;] [RETURN 0;] [END;] |

## Stored procedures #2

In the following example, we will step through a stored procedure making
sure to:

1.  Specify length for VARCHAR parameters.

2.  Specify columns for INSERT statements.

3.  SET NOCOUNT ON, SET XACT_ABORT ON

4.  Add implicit transaction using BEGIN TRANSACTION and COMMIT

5.  Add Error Handling using TRY . . . CATCH blocks.

!!! note ">"
    [CREATE PROCEDURE dbo.InsertReferenceDataValue] > [\@ReferenceDataDomainId INT] > [, \@Code VARCHAR] > [, \@Rubric VARCHAR] > [, \@Active BIT] > [, \@ParentId INT = NULL] > [AS] > [BEGIN] > [INSERT dbo.ReferenceDataValue] > [VALUES] > [(] > [\@ReferenceDataDomainId] > [ , \@Code] > [ , \@Rubric] > [ , GETDATE()] > [ , \@Active] > [ , \@ParentId] > [);] > [RETURN 0;] > [END;]

| 1 | ! [ E x a m p l e o f p r a c t i c e s t o a v o i d ]( . / m e d i a / i m a g e 6 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | [CREATE PROCEDURE dbo.InsertReferenceDataValue] [\@ReferenceDataDomainId INT] [, \@Code VARCHAR**(50)**] [, \@Rubric VARCHAR**(200)**] [, \@Active BIT] [, \@ParentId INT = NULL] [AS] [BEGIN] [INSERT dbo.ReferenceDataValue] [VALUES] [(] [\@ReferenceDataDomainId] [ , \@Code] [ , \@Rubric] [ , GETDATE()] [ , \@Active] [ , \@ParentId] [);] [RETURN 0;] [END;] |
| --- | --- | --- |
| 2 | ! [ E x a m p l e o f p r a c t i c e s t o a v o i d ]( . / m e d i a / i m a g e 6 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | [CREATE PROCEDURE dbo.InsertReferenceDataValue] [\@ReferenceDataDomainId INT] [, \@Code VARCHAR(50)] [, \@Rubric VARCHAR(200)] [, \@Active BIT] [, \@ParentId INT = NULL] [AS] [BEGIN] [INSERT dbo.ReferenceDataValue] [(] [Id] [, ReferenceDataDomainId] [, Code] [, Rubric] [, DateTimeCreated] [, Active] [, ParentId] [)] [VALUES] [(] [\@ReferenceDataDomainId] [ , \@Code] [ , \@Rubric] [ , GETDATE()] [ , \@Active] [ , \@ParentId] [);] [RETURN 0;] [END;] |
| 3 | ! [ E x a m p l e o f p r a c t i c e s t o a v o i d ]( . / m e d i a / i m a g e 6 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | [CREATE PROCEDURE dbo.InsertReferenceDataValue] [\@ReferenceDataDomainId INT] [, \@Code VARCHAR(50)] [, \@Rubric VARCHAR(200)] [, \@Active BIT] [, \@ParentId INT = NULL] [AS] [BEGIN] [**SET NOCOUNT ON;**] [**SET XACT_ABORT ON;**] [INSERT dbo.ReferenceDataValue] [(] [Id] [, ReferenceDataDomainId] [, Code] [, Rubric] [, DateTimeCreated] [, Active] [, ParentId] [)] [VALUES] [(] [\@ReferenceDataDomainId] [ , \@Code] [ , \@Rubric] [ , GETDATE()] [ , \@Active] [ , \@ParentId] [);] [RETURN 0;] [END;] |
| 4 | ! [ E x a m p l e o f p r a c t i c e s t o a v o i d ]( . / m e d i a / i m a g e 6 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | [CREATE PROCEDURE dbo.InsertReferenceDataValue] [\@ReferenceDataDomainId INT] [, \@Code VARCHAR(50)] [, \@Rubric VARCHAR(200)] [, \@Active BIT] [, \@ParentId INT = NULL] [AS] [BEGIN] [SET NOCOUNT ON;] [SET XACT_ABORT ON;] [BEGIN TRANSACTION] [INSERT dbo.ReferenceDataValue] [(] [Id] [, ReferenceDataDomainId] [, Code] [, Rubric] [, DateTimeCreated] [, Active] [, ParentId] [)] [VALUES] [(] [\@ReferenceDataDomainId] [ , \@Code] [ , \@Rubric] [ , GETDATE()] [ , \@Active] [ , \@ParentId] [);] [COMMIT] [RETURN 0;] [END;] |
| 5 | ! [ E x a m p l e o f g o o d p r a c t i c e ]( . / m e d i a / i m a g e 3 . p n g ) { w i d t h = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " h e i g h t = " 0 . 1 9 6 8 5 0 3 9 3 7 0 0 7 8 7 4 i n " } | [CREATE PROCEDURE dbo.InsertReferenceDataValue] [\@ReferenceDataDomainId INT] [, \@Code VARCHAR(50)] [, \@Rubric VARCHAR(200)] [, \@Active BIT] [, \@ParentId INT = NULL] [AS] [BEGIN] [SET NOCOUNT ON;] [SET XACT_ABORT ON;] [BEGIN TRY] [ BEGIN TRANSACTION] [ INSERT dbo.ReferenceDataValue] [ (] [ Id] [ , ReferenceDataDomainId] [ , Code] [ , Rubric] [ , DateTimeCreated] [ , Active] [ , ParentId] [ )] [ VALUES] [ (] [ \@ReferenceDataDomainId] [ , \@Code] [ , \@Rubric] [ , GETDATE()] [ , \@Active] [ , \@ParentId] [ );] [ COMMIT] [END TRY] [BEGIN CATCH] [ DECLARE \@ErrorMsg VARCHAR(4000);] [ SET \@ErrorMsg = ERROR_MESSAGE();] [ \-- Rollback our transaction] [ IF @@TRANCOUNT\>0] [ ROLLBACK;] [ \--Re-raise the error to our application;] [ RAISERROR(@ErrorMsg, 16, 1);] [END CATCH;] [RETURN 0;] [END;] |

## 6.8 naming

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

| > 1 | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > SELECT SubjectGivenName, SubjectFamilyName, \[Hospital > Ward\] from tblPatients WHERE ID = \@int_ID and > SubjectGivenName = \@str_param2; |
| --- | --- | --- |
| > 2 | > {w idt h=" 0.1 968 503 937 007 874 in" > hei ght ="0 .19 685 039 370 078 74i n"} | > SELECT > > Patient.SubjectGivenName AS FirstName > > , Patient.SubjectFamilyName AS LastName > > , Patient.\[Hospital Ward\] AS HospitalWard > > FROM > > dbo.tblPatients AS Patient > > WHERE > > Patient.ID = \@PatientId > > AND Patient.SubjectGivenName = \@FirstName; |

