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
  [DOMAIN OF                                                                                          Effective
  QUALITY](https://nhswales365.sharepoint.com/sites/DHC_Quality/SitePages/The-Duty-of-Quality.aspx)   

  If more than one enabler / domain applies, please list below:                                       
  -------------------------------------------------------------------------------------------------------------------------------------------------

+-------------------------+--------------------------------------------+
| [EQUALITY IMPACT        | Date of submission: N/A                    |
| ASSESSMENT              |                                            |
| STATEMENT](htt          |                                            |
| ps://phw.nhs.wales/serv |                                            |
| ices-and-teams/equality |                                            |
| -impact-assessment-in-w |                                            |
| ales-practice-hub/equal |                                            |
| ity-impact-assessment/) |                                            |
+=========================+============================================+
| Choose an item.         | Outcome: N/A                               |
+-------------------------+--------------------------------------------+
| Statement:              |                                            |
|                         |                                            |
| This guidance supports  |                                            |
| best practice published |                                            |
| in our Software         |                                            |
| Development Handbook.   |                                            |
| This best practice was  |                                            |
| subject to an equality  |                                            |
| impact assessment.      |                                            |
+-------------------------+--------------------------------------------+

+--------------------------------------+-------+----------------------+
| APPROVAL / SCRUTINY ROUTE:           |       |                      |
|                                      |       |                      |
| Person/Committee/Group who have      |       |                      |
| received or considered this paper    |       |                      |
+======================================+=======+======================+
| COMMITTEE OR GROUP                   | DATE  | OUTCOME              |
+--------------------------------------+-------+----------------------+
| Test Team Principals                 | 10/   | Approved             |
|                                      | 06/24 |                      |
+--------------------------------------+-------+----------------------+
| Application Architecture Assurance   | 09/   | Approved             |
| Group                                | 07/24 |                      |
+--------------------------------------+-------+----------------------+

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

[2.1 IN-SCOPE [4](#in-scope)](#in-scope)

[2.2 OUT-OF-SCOPE [4](#out-of-scope)](#out-of-scope)

[3 ROLES & RESPONSIBILITIES
[4](#roles-responsibilities)](#roles-responsibilities)

[4 REFERENCES [5](#references)](#references)

[5 HOW THIS GUIDE IS ORGANISED
[5](#how-this-guide-is-organised)](#how-this-guide-is-organised)

[5.1 CONVENTIONS [5](#conventions)](#conventions)

[6 GUIDANCE [6](#guidance)](#guidance)

[6.1 WHEN TO CREATE A TEST SUMMARY REPORT
[6](#when-to-create-a-test-summary-report)](#when-to-create-a-test-summary-report)

[6.2 CHARACTERISTICS OF A GOOD TEST SUMMARY REPORT
[6](#characteristics-of-a-good-test-summary-report)](#characteristics-of-a-good-test-summary-report)

[6.3 COVER PAGE [7](#cover-page)](#cover-page)

[6.4 TABLE OF CONTENTS [8](#table-of-contents)](#table-of-contents)

[6.5 DOCUMENT LOCATION [8](#document-location)](#document-location)

[6.6 RELEVANT DOCUMENTS [8](#relevant-documents)](#relevant-documents)

[6.7 VERSION CONTROL [8](#version-control)](#version-control)

[6.8 REVIEWS AND APPROVALS
[8](#reviews-and-approvals)](#reviews-and-approvals)

[6.9 SUMMARY OF TESTING [9](#summary-of-testing)](#summary-of-testing)

[6.10 TEST METRICS [10](#test-metrics)](#test-metrics)

[6.11 FURTHER METRICS [10](#further-metrics)](#further-metrics)

[6.12 FILENAME [10](#filename)](#filename)

[6.13 LAYOUT AND FORMATTING
[10](#layout-and-formatting)](#layout-and-formatting)

[6.14 EXAMPLE REPORTS [10](#example-reports)](#example-reports)

[7 EXCEPTIONS PROVE THE RULE
[11](#exceptions-prove-the-rule)](#exceptions-prove-the-rule)

#  PURPOSE

A Test Summary Report tells readers whether your software needs
corrective action, can proceed to the next stage or is ready for
release. So it **SHOULD** provide a clear summary of the test process,
results, and key metrics.

This document instructs you on how to write a Test Summary Report. It is
guided by the ISO 29119-3:2013[^1] standard for writing a Test
Completion Report, although the headings used in the Test Summary Report
template vary.

When you are ready to start, base your report on the SDS-TEM-5 Test
Summary Report template.

# SCOPE

## IN-SCOPE

-   This guide **SHOULD** be followed by anyone asked to submit a Test
    Summary Report to the Welsh Informatics Assurance Group.

## OUT-OF-SCOPE

-   Other reports such as Test Progress and Test Defect reports are
    out-of-scope.

# ROLES & RESPONSIBILITIES

A Test Summary Report: -

-   **SHOULD** be written and signed by a *Test Analyst* or person with
    equivalent knowledge, skills and experience. If your circumstances
    differ, please contact the document author.

-   **MUST** be acknowledged as reviewed and signed as approved by a
    *Lead Test Analyst*, *Test Team Principal* or person with equivalent
    knowledge, skills and experience.

-   **MUST** be signed as approved by at least one of the following: -

    -   Product Specialist or person acting in that capacity.

    -   Application or Product Manager.

    -   A representative of a suitable Assurance Group or Project/
        > Programme Board.

# REFERENCES

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  INDEX NUMBER      DOCUMENT NAME
  ----------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------
  N/A               [RFC 2119: RFC Keywords (ietf.org)](https://www.ietf.org/rfc/rfc2119.txt)

  N/A               [DHCW Brand Guidelines Nov
                    2023.pdf](https://nhswales365.sharepoint.com/:b:/r/sites/DHCW_CORP_Graphics/DHCW%20New%20Brand%20Guide/DHCWBrandGuidelines-Nov2023.pdf?csf=1&web=1&e=KDlOnc)

  N/A               Test framework

  N/A               BS ISO/IEC/IEEE 29119-3:2013 Software and systems engineering --- Software testing Part 3: Test documentation

  SDS-TEM-5         Test Summary Report

  WIA-SOP-71        Wales Informatics Assurance Group (WIAG) Process

  N/A               [Writing checklist (sharepoint.com)](https://nhswales365.sharepoint.com/sites/DHC_ENG/SitePages/Writing-guidelines.aspx)
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# HOW THIS GUIDE IS ORGANISED

## CONVENTIONS

The key words \"**MUST**\", \"**MUST NOT**\", \"**REQUIRED**\",
\"**SHALL**\", \"**SHALL NOT**\", \"**SHOULD**\", \"**SHOULD**
**NOT**\", \"**RECOMMENDED**\", \"**MAY**\", and \"**OPTIONAL**\" in
this document are to be interpreted as described in [RFC
2119](https://www.ietf.org/rfc/rfc2119.txt).

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Practical tips
  tips](./media/image1.png){width="0.3937007874015748in"   
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            Examples of good practice...
  practice](./media/image3.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------
  ![Example of practices to                                    ...and practices to avoid
  avoid](./media/image5.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  -----------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | Links to further guides, information and work instructions.   |
| [Fur |                                                               |
| ther | If a hyperlink is missing, search for the document in the     |
| rea  | Document Management System.                                   |
| ding |                                                               |
| and  |                                                               |
| i    |                                                               |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e7.p |                                                               |
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

# GUIDANCE

## WHEN TO CREATE A TEST SUMMARY REPORT

You **SHOULD** draft a report at the end of a project, but you **MAY**
do so for the end of each testing cycle.  Typically, it will be written
for any new service, major change or new developments in existing
services, releases, procurements, proof of concepts and innovation
products[^2].

## CHARACTERISTICS OF A GOOD TEST SUMMARY REPORT

A Test Summary Report **SHOULD** have the following characteristics: -

  -------------------------------------------------------------------------------------------------------------------------
  **SHORT:**        As a rule of thumb, aim for no more than 8 -- 11 pages.
  ----------------- -------------------------------------------------------------------------------------------------------
  **CLEAR:**        Information should be clear. Read DHCW's [writing
                    checklist](https://nhswales365.sharepoint.com/sites/DHCW-Intranet/SitePages/Writing-style-guide.aspx)
                    for tips.

  **PRECISE:**      The information, though concise, should not be abstract as this will not help the reader draw clear
                    conclusions from it.

  **CONSISTENT:**   While content will differ, each report **SHOULD** use the same template.
  -------------------------------------------------------------------------------------------------------------------------

The remainder of this guide provides rules for drafting a report, using
the template.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              SDS-TEM-5 replaces the previous Test Summary Report and Test
  tips](./media/image1.png){width="0.3937007874015748in"   Certificate templates. The Test Certificate has been retired
  height="0.3937007874015748in"}                           with this guide\'s publication, and Test Certificates **SHOULD**
                                                           no longer be produced.
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## COVER PAGE

The report's cover page **MUST** contain the following elements: -

### Heading #1: "*DIGITAL HEALTH AND CARE WALES*".

### Heading #2: Name and Version of the System Under Test

You **SHOULD** include: -

-   The acronym (in parentheses) if you intend to use it in the report.

-   The version number, if applicable, prefixed with a 'v' for version
    or 'b' for build number.

### Heading #3: Name of Module or Component

Where appropriate you **SHOULD** include the name of the module or
component.

### Heading #4: "Test Summary Report"

### Heading #5: Test Phase

You **SHOULD** choose an appropriate value from those listed on pages 26
-- 30 of the Test Framework.

### Heading #6: Status

This reflects the status of the document and **MUST** be 'Draft',
'Draft-Update' or 'Issued'.

+-----+----------------------------------------------------------------+
| ![E | Welsh Immunisation System (WIS) v4.3.0.0                       |
| xam |                                                                |
| ple | Spring Boosters Campaign                                       |
| of  |                                                                |
| g   | Test Summary Report                                            |
| ood |                                                                |
| p   | Systems Integration Testing                                    |
| rac |                                                                |
| tic | Draft                                                          |
| e]( |                                                                |
| ./m | 6th March 2024                                                 |
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
+-----+----------------------------------------------------------------+

### Footer: Filename

The Template's footer was inserted as Quick Parts -\> Fields -\>
FileName. When you save the first copy of the report, right-click the
footer and choose 'Update Field' to update the [filename](#filename).

**\
**

## TABLE OF CONTENTS

You **MUST** include a Table of Contents.

## DOCUMENT LOCATION

Document Location **MUST** be a hyperlink to the original document.

## RELEVANT DOCUMENTS

You **SHOULD** include links to the Test Strategy, Test Plan and
Solutions Architecture Design document. And reference the Assurance
Quality Plan and Safety Case and Readiness Report where they exist. You
**SHOULD NOT** embed documents.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Use external links cautiously as they may become outdated or
  tips](./media/image1.png){width="0.3937007874015748in"   broken over time.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## VERSION CONTROL

You **SHOULD** include the present version and any predecessor versions
with brief accompanying notes describing changes and reasons for the
change.

Revision History statuses **SHOULD** be limited to *Draft, Draft-Update*
or *Issued.*

## REVIEWS AND APPROVALS

Recording reviewers and approvers using electronic signatures is
**RECOMMENDED**, but you **MAY** instead record the name and date of the
reviewer and approver. See also [Roles &
Responsibilities](#roles-responsibilities).

## SUMMARY OF TESTING

The Testing summary **MUST** contain the following headings: -

+------------------+---------------------------------------------------+
| **R              | Your recommendation based on the findings.        |
| ECOMMENDATION:** | Written in bold font.                             |
+==================+===================================================+
| **Observations   | Any noteworthy findings, deviations from expected |
| and Variances:** | results, and any observed variations.             |
|                  |                                                   |
|                  | It is essential to capture anything left untested |
|                  | together with an associated reason, for example,  |
|                  | limitations on availability of test devices.      |
+------------------+---------------------------------------------------+
| **Background:**  | A brief overview of the application, the features |
|                  | and components under test and any relevant        |
|                  | context.                                          |
+------------------+---------------------------------------------------+
| **Approach:**    | The testing strategy employed, including          |
|                  | automation, manual testing, or any specific       |
|                  | methodologies.                                    |
+------------------+---------------------------------------------------+
| **Entry          | Entry criteria are the specific conditions that   |
| Criteria:**      | must be met before testing can begin. Including   |
|                  | these criteria is useful, especially if you need  |
|                  | to explain any exceptions when proceeding.        |
+------------------+---------------------------------------------------+
| **Test Phase:**  | Specify the phase of testing covered in this      |
|                  | report. Be guided by 'Test Phases' in the 'Test   |
|                  | Framework' (pages 26 - 30).                       |
+------------------+---------------------------------------------------+
| **Test Types:**  | Enumerate the distinct types of testing           |
|                  | conducted. Be guided by 'Appendix 4' of the 'Test |
|                  | Framework' (pages 52 - 56) but you **MAY**        |
|                  | include others.                                   |
+------------------+---------------------------------------------------+
| **Test           | The technical setup and configurations used for   |
| Environment:**   | testing.                                          |
+------------------+---------------------------------------------------+
| **Dates:**       | Specify the duration of the testing period and    |
|                  | key milestones.                                   |
+------------------+---------------------------------------------------+
| **Test Tools:**  | The tools used for testing purposes.              |
+------------------+---------------------------------------------------+
| **In-Scope:**    | The features, components and interfaces           |
|                  | considered during testing.                        |
+------------------+---------------------------------------------------+
| *                | What was explicitly excluded from the testing     |
| *Out-of-scope:** | scope.                                            |
+------------------+---------------------------------------------------+
| **Exit           | The predetermined conditions that must be met for |
| criteria:**      | testing to be considered complete and successful. |
+------------------+---------------------------------------------------+

## TEST METRICS

The Testing summary **SHOULD** contain the following headings :-

  -----------------------------------------------------------------------
  **Execution        A snapshot of the test script execution, including
  Metrics:**         pass, fail, completion status, and any deferred or
                     not applicable scripts.
  ------------------ ----------------------------------------------------
  **Defect           Summarises the initial defects, total raised,
  Metrics:**         closed, and currently open defects, categorised by
                     severity.

  **Open Defects:**  Describes the currently open defects, with their
                     Azure DevOps ID and severity.
  -----------------------------------------------------------------------

## FURTHER METRICS

You **MAY** include additional metrics from sources like Extent Reports
or Azure DevOps dashboards to provide a more comprehensive perspective
on the testing process.

## FILENAME

The filename **SHOULD** be in the following format: -

Test Summary Report-\<*Name of System Under Test*\>-\<*Module or
Component Name*\>-\<*Version or Build number*\>

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            Test Summary Report-Welsh Immunisation System WIS-Spring
  practice](./media/image3.png){width="0.1968503937007874in"   Boosters Campaign 2024-v4.3.0.0.docx
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------
  ![Example of good                                            Test Summary Report-NHS Wales App-Public Beta-v1.0.0.docx
  practice](./media/image3.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  -----------------------------------------------------------------------------------------------------------------------------

## LAYOUT AND FORMATTING

For brevity, formatting rules such as, font, line spacing & paragraph
settings, headers and footers are omitted. You **SHOULD** keep to those
used in the blank template.

if you need to insert document references in the footer you **MAY**
remove the footer image to ensure the text is clearly visible.

You **SHOULD** strive to ensure the report displays well in Microsoft
Word on desktop and online.

## EXAMPLE REPORTS

You can find example reports from [Guides and standards
(sharepoint.com)](https://nhswales365.sharepoint.com/sites/DHC_SD/SitePages/Guides-and-Standards.aspx)
There might be slight variations in content and format compared to this
template, but they are a helpful starting point.

# EXCEPTIONS PROVE THE RULE

While this Test Summary Report template is designed to be suitable for
most situations, there may be cases where altering the format is
necessary and justifiable. These changes should be made only when they
add significant value for the reader.

However, it is important to maintain the integrity of the template, and
changes **SHOULD NOT** be made casually.

[^1]: And later versions.

[^2]: WIA-SOP-71 Wales Informatics Assurance GROUP (WIAG) Process,
    section 2 Scope.
