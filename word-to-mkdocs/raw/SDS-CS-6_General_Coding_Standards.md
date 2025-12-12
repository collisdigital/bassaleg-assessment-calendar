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

+-------------------------+--------------------------------------------+
| [DHCW QUALITY           | ISO 9001                                   |
| STANDAR                 |                                            |
| DS](https://informatics |                                            |
| .wales.nhs.uk/FinBus/Qu |                                            |
| al/SitePages/Home.aspx) |                                            |
+=========================+============================================+
| If more than one        |                                            |
| standard applies,       |                                            |
| please list below:      |                                            |
|                         |                                            |
| ISO 9001                |                                            |
|                         |                                            |
| ISO 27001               |                                            |
+-------------------------+--------------------------------------------+

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

+-------------------------------------+---------+----------------------+
| APPROVAL / SCRUTINY ROUTE:          |         |                      |
|                                     |         |                      |
| Person/Committee/Group who have     |         |                      |
| received or considered this paper   |         |                      |
+=====================================+=========+======================+
| COMMITTEE OR GROUP                  | DATE    | OUTCOME              |
+-------------------------------------+---------+----------------------+
| Lead Software Developers' Group     | 12/     | Approved             |
|                                     | 12/2022 |                      |
+-------------------------------------+---------+----------------------+
| Application Architecture Assurance  | 09/     | Approved             |
| Group                               | 12/2022 |                      |
+-------------------------------------+---------+----------------------+

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

[3 REFERENCES [5](#references)](#references)

[4 CONVENTIONS [5](#conventions)](#conventions)

[5 THE NEED FOR GUIDANCE
[5](#the-need-for-guidance)](#the-need-for-guidance)

[6 STANDARDS [6](#standards)](#standards)

[6.1 WRITE CLEAN CODE [6](#write-clean-code)](#write-clean-code)

[6.2 FOLLOW SOLID PRINCIPLES
[6](#follow-solid-principles)](#follow-solid-principles)

[6.3 FOLLOW MICROSOFT'S CODING CONVENTIONS
[7](#follow-microsofts-coding-conventions)](#follow-microsofts-coding-conventions)

[6.4 ANALYSE YOUR CODE [11](#analyse-your-code)](#analyse-your-code)

[6.5 EXCEPTIONS [16](#exceptions)](#exceptions)

[7 EXAMPLES [17](#examples)](#examples)

[7.1 UNECESSARY USING STATEMENTS
[17](#unecessary-using-statements)](#unecessary-using-statements)

[7.2 USE OUR NAMESPACE CONVENTIONS
[17](#use-our-namespace-conventions)](#use-our-namespace-conventions)

[7.3 CONSIDER YOUR USE OF VAR
[17](#consider-your-use-of-var)](#consider-your-use-of-var)

[7.4 NAME PARAMETERS [18](#name-parameters)](#name-parameters)

[7.5 PRIORITISE READABILITY OVER BREVITY
[18](#prioritise-readability-over-brevity)](#prioritise-readability-over-brevity)

[7.6 USE UNDERSCORES ONLY IN UNIT TEST NAMES
[18](#use-underscores-only-in-unit-test-names)](#use-underscores-only-in-unit-test-names)

[7.7 ENSURE BOOLEAN NAMES ARE PHRASED AS QUESTIONS
[18](#ensure-boolean-names-are-phrased-as-questions)](#ensure-boolean-names-are-phrased-as-questions)

[7.8 USE PREFIXES AND SUFFIXES ONLY WHEN SPECIFIED BY CONVENTIONS
[19](#use-prefixes-and-suffixes-only-when-specified-by-conventions)](#use-prefixes-and-suffixes-only-when-specified-by-conventions)

[7.9 USING BRACES [19](#using-braces)](#using-braces)

[7.10 CODE COMMENTS [20](#code-comments)](#code-comments)

[8 ESSENTIAL GOOD PRACTICE CHECKLIST
[21](#essential-good-practice-checklist)](#essential-good-practice-checklist)

#  PURPOSE

Describes the general coding standard for the Operations and Primary
Care & Mental Health directorates.

# SCOPE

## IN-SCOPE

-   Software development within the Operations and Primary Care and
    Mental Health directorates.

-   Recommended conventions and naming standards.

-   [Good practice](#essential-good-practice-checklist) checklist.

## OUT-OF-SCOPE

-   Developers not using C#.NET may need to adapt this guide or follow a
    local coding standard.

# REFERENCES

  -----------------------------------------------------------------------
  INDEX NUMBER      DOCUMENT NAME
  ----------------- -----------------------------------------------------
  SDS-CS-3          T-SQL Coding Standard

  SDS-CS-7          Azure DevOps handbook
  -----------------------------------------------------------------------

# CONVENTIONS

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

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           Links to further guides, information and work instructions. If
  information](./media/image7.png){width="0.4638888888888889in"   a hyperlink is missing, search for the document in our Document
  height="0.4638888888888889in"}                                  Management System.
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

# THE NEED FOR GUIDANCE

Use this standard to:

-   Write consistent code, making it easier to understand.

-   Create software that is maintainable, efficient, and secure.

# STANDARDS

## WRITE CLEAN CODE

Your code **SHOULD**:

-   Be concise, expressive and focused on doing one thing well.

-   Use short methods (20-40 lines) with a single purpose.

-   Include written tests, be self-documenting and easy to read.

-   Have classes with high cohesion, containing clearly related methods
    > that share class properties.

-   Prefer using or import statements instead of fully qualified type
    > names.

Your code **SHOULD NOT**:

-   Contain unused using (Java) or import (C#) statements.

+-----+----------------------------------------------------------------+
| ![  | Use the using static directive (C#6) to ensure method names    |
| Pra | are prefixed with their class for clarity.                     |
| cti |                                                                |
| cal | Consider global using directives and implicit usings to reduce |
| tip | clutter and improve readability.                               |
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
+-----+----------------------------------------------------------------+

+------+---------------------------------------------------------------+
| !    | [Create readable code with conventions, whitespace, and       |
| [Fur | comments in C# - Training \| Microsoft                        |
| ther | Learn](https://lear                                           |
| rea  | n.microsoft.com/en-gb/training/modules/csharp-readable-code/) |
| ding |                                                               |
| and  | [Welcome to C# 10 - .Net Blog                                 |
| i    | (Microsoft.com)]                                              |
| nfor | (https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/) |
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

##  FOLLOW SOLID PRINCIPLES

Following SOLID principles decouples code from dependencies, improving
testability and maintainability. You **SHOULD**:

-   Apply SOLID principles for object-oriented programming.

-   Ensure classes and methods have a single responsibility.

-   Code to interfaces where appropriate.

-   Use Inversion of Control (IoC) and IoC containers to decouple
    > implementations.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [[Class design guidelines for .NET - Framework Design Guidelines \| Microsoft
  information](./media/image7.png){width="0.4638888888888889in"   Learn]{.underline}](https://learn.microsoft.com/en-gb/dotnet/standard/design-guidelines/type)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -----------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------

## FOLLOW MICROSOFT'S CODING CONVENTIONS

Follow Microsoft's [C# coding
conventions](https://learn.microsoft.com/en-gb/dotnet/csharp/fundamentals/coding-style/coding-conventions)
and [Framework Design
Guidelines](https://learn.microsoft.com/en-gb/dotnet/standard/design-guidelines/).
There are a couple of exceptions, but we make these clear.

  -------------------------------------------------------------------------------------------------------------------------
  []{#_NAMING .anchor}![Practical                          If the conventions described here do not meet your team's needs
  tips](./media/image1.png){width="0.3937007874015748in"   and you want to create your own, please speak to the Software
  height="0.3937007874015748in"}                           Development Manager.
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

### NAMING

You **SHOULD**:

-   Follow Microsoft's naming conventions, considering our additional
    guidance.

-   Use Attribute and Exception suffixes only when they clarify intent.

-   Apply Roy Osherove's naming convention for tests, allowing
    underscores. See our
    [examples](#use-underscores-only-in-unit-test-names).

-   Use NhsWales for the company name in namespaces. See
    [examples](#use-our-namespace-conventions).

-   Name booleans to reflect true/false questions. See
    [examples](#ensure-boolean-names-are-phrased-as-questions).

You **SHOULD NOT**:

-   Use \"And\", \"Or\" or generic terms like \"Util\" or \"Common\" in
    class names.

-   Add prefixes or suffixes except where standard conventions apply.
    > See our
    > [examples](#use-prefixes-and-suffixes-only-when-specified-by-conventions).

+------+---------------------------------------------------------------+
| !    | [[C# Naming Conventions \| Microsoft                          |
| [Fur | Learn]{.un                                                    |
| ther | derline}](https://learn.microsoft.com/en-gb/dotnet/csharp/fun |
| rea  | damentals/coding-style/coding-conventions#naming-conventions) |
| ding |                                                               |
| and  | [[Naming Guidelines - Framework Design Guidelines \|          |
| i    | Microsoft                                                     |
| nfor | Learn]{.underline}](https://learn.microsoft.c                 |
| mati | om/en-gb/dotnet/standard/design-guidelines/naming-guidelines) |
| on]( |                                                               |
| ./me | [[Capitalisation Conventions - Framework Design Guidelines \| |
| dia/ | Microsoft                                                     |
| imag | Learn]{.underline}](https://learn.microsoft.com/en-gb/        |
| e7.p | dotnet/standard/design-guidelines/capitalization-conventions) |
| ng){ |                                                               |
| widt | [[General Naming Conventions - Framework Design Guidelines \| |
| h="0 | Microsoft                                                     |
| .463 | Learn]{.underline}](https://learn.microsoft.com/en-gb/        |
| 8888 | dotnet/standard/design-guidelines/general-naming-conventions) |
| 8888 |                                                               |
| 8888 | [[Names of Assemblies and DLLs - Framework Design Guidelines  |
| 9in" | \| Microsoft                                                  |
| he   | Learn]{.underline}](https://learn.microsoft.com/en-gb/do      |
| ight | tnet/standard/design-guidelines/names-of-assemblies-and-dlls) |
| ="0. |                                                               |
| 4638 | [[Names of Namespaces - Framework Design Guidelines \|        |
| 8888 | Microsoft                                                     |
| 8888 | Learn]{.underline}](https://learn.microsoft.com               |
| 8889 | /en-gb/dotnet/standard/design-guidelines/names-of-namespaces) |
| in"} |                                                               |
|      | [[Names of Classes, Structs, and Interfaces - Framework       |
|      | Design Guidelines \| Microsoft                                |
|      | Learn]                                                        |
|      | {.underline}](https://learn.microsoft.com/en-gb/dotnet/standa |
|      | rd/design-guidelines/names-of-classes-structs-and-interfaces) |
|      |                                                               |
|      | [[Names of Type Members - Framework Design Guidelines \|      |
|      | Microsoft                                                     |
|      | Learn]{.underline}](https://learn.microsoft.com/e             |
|      | n-gb/dotnet/standard/design-guidelines/names-of-type-members) |
|      |                                                               |
|      | [[Naming Parameters - Framework Design Guidelines \|          |
|      | Microsoft                                                     |
|      | Learn]{.underline}](https://learn.microsoft.c                 |
|      | om/en-gb/dotnet/standard/design-guidelines/naming-parameters) |
|      |                                                               |
|      | [[Naming Resources - Framework Design Guidelines \| Microsoft |
|      | Learn]{.underline}](https://learn.microsoft.                  |
|      | com/en-gb/dotnet/standard/design-guidelines/naming-resources) |
+======+===============================================================+
+------+---------------------------------------------------------------+

### LAYOUT

You **SHOULD:**

-   Follow Microsoft's layout conventions.

-   Use continuation lines to avoid excessive scrolling and indent with
    four spaces.

-   Indent wrapped statements to keep logically related segments
    aligned.

-   Use whitespace effectively to enhance readability.

-   Insert empty lines to separate code blocks.

-   Align curly braces vertically.

For C#, place each curly brace on a new line, aligned with the start of
the code block.

For JavaScript and Razor, place the opening curly brace on the same line
as the construct to prevent issues with automatic semicolon insertion.
Exceptions apply in specific cases.

You **SHOULD NOT:**

-   Use unnecessary vertical whitespace -- and so prevent extra
    scrolling.

-   Overuse indentation.

-   Omit optional curly braces, as this increases error risk. Use them
    > judiciously when it improves readability. See
    > [examples](#using-braces).

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [[C# Layout Conventions \| Microsoft
  information](./media/image7.png){width="0.4638888888888889in"   Learn]{.underline}](https://learn.microsoft.com/en-gb/dotnet/csharp/fundamentals/coding-style/coding-conventions#layout-conventions)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### COMMENTS

You **SHOULD**:

-   Follow Microsoft's commenting conventions.

-   Use comments to explain the problem your code solves, not the code
    > itself.

-   Write expressive, readable code.

-   Prefer automated tests rather than rely on code comments or
    > excessive documentation.

-   Remove unused code instead of commenting it out. See
    > [examples](#code-comments).

-   Add comments to code commits, following the Conventional Commits
    > specification.

-   Use well-named automated tests as part of your documentation (see
    > [naming](#naming) guidelines).

-   Use enumerations to self-document code and make it searchable in
    > Visual Studio.

-   Ensure comments are grammatically correct and properly punctuated.

You **SHOULD NOT**:

-   Comment to explain how C# or the .NET Class Library works.

-   Add unnecessary or redundant comments. For example, at the top of
    > methods or classes. Provide a concise summary instead.

+------+---------------------------------------------------------------+
| !    | [.NET Coding Conventions - C# - comment style \| Microsoft    |
| [Fur | Learn](https://learn.microsoft.com/en-gb/dotnet/cshar         |
| ther | p/fundamentals/coding-style/coding-conventions#comment-style) |
| rea  |                                                               |
| ding | [Conventional                                                 |
| and  | Commits](https://www.conventionalcommits.org/en/v1.0.0/)      |
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

### VARIABLES AND PARAMETERS

You **SHOULD**:

-   Declare C# variables close to where they are used.

-   Initialize variables at the point of declaration, when possible.

-   Declare JavaScript variables at the top of their scope and consider
    > using \'strict mode\' to prevent hoisting.

-   Order parameters consistently.

-   Use named parameters to improve code readability. See
    > [examples](#name-parameters).

-   Avoid methods with more than three parameters.

You **SHOULD NOT**:

-   Declare all variables at the beginning of a class out of habit.

+------+---------------------------------------------------------------+
| !    | [[Member Design Guidelines - Framework Design Guidelines \|   |
| [Fur | Microsoft                                                     |
| ther | Learn]{.underline}](https://learn.                            |
| rea  | microsoft.com/en-gb/dotnet/standard/design-guidelines/member) |
| ding |                                                               |
| and  | [Understanding Hoisting in JavaScript \|                      |
| i    | DigitalOcean](https://www.digitalocean.                       |
| nfor | com/community/tutorials/understanding-hoisting-in-javascript) |
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

### CONDITIONALS AND CONTROL FLOW STATEMENTS

You **SHOULD:**

-   Define conditionals in the positive (see examples).

```{=html}
<!-- -->
```
-   Prefer constants or enumerations over hard-coded numerical values
    ('magic numbers'). Use named constants to improve readability.

```{=html}
<!-- -->
```
-   Order case/switch statements logically and always include a default
    statement.

-   Ensure conditionals are clear and easy to understand.

```{=html}
<!-- -->
```
-   Minimise nested conditionals where possible.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Where practical, place enumerations in a namespace in their own
  tips](./media/image1.png){width="0.3937007874015748in"   code file.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [C# static code analysis- Magic numbers should not be
  information](./media/image7.png){width="0.4638888888888889in"   used](https://rules.sonarsource.com/csharp/RSPEC-109/)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

### EXCEPTION HANDLING AND DEFENSIVE CODING

You **SHOULD**:

-   Implement a global exception handler.

-   Move complex code out of try blocks into separate methods.

-   Handle exceptions locally, when possible, but avoid catching
    unresolvable exceptions---let them bubble up to the global handler.

-   Log exceptions with relevant details, including stack trace and
    context.

-   Use guard clauses to validate inputs early.

-   Use multiple return statements to avoid deep indentation.

-   Avoid silent exceptions---always log or rethrow as needed.

-   Catch specific, rather than generic, exceptions for precise
    handling.

-   Test exception handling to ensure proper behaviour, especially in
    > edge cases.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [[Best Practices for exceptions - .NET \| Microsoft
  information](./media/image7.png){width="0.4638888888888889in"   Learn]{.underline}](https://learn.microsoft.com/en-gb/dotnet/standard/exceptions/best-practices-for-exceptions)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## ANALYSE YOUR CODE

### CREATE A PLAN

You **MUST** conduct code analysis and address the issues you find.
Doing this in both your IDE and build & integration pipelines will
improve your code, making it easier to maintain, faster, and more
secure.

Code analysis can be complex, but this section outlines the steps you
**SHOULD** follow. Create a tailored plan for your team that you
regularly review and improve.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Use Redgate SQL Prompt to evaluate T-SQL. See the T-SQL coding
  tips](./media/image1.png){width="0.3937007874015748in"   standard for help.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | SDS-CS-3 T-SQL Coding Standard                                |
| [Fur |                                                               |
| ther | [[What is Static Analysis? An Explanation for Everyone -      |
| rea  | NDepend]{.underline}](ht                                      |
| ding | tps://blog.ndepend.com/static-analysis-explanation-everyone/) |
| and  |                                                               |
| i    | [[Enabling High-Quality Code in .NET \| Milan Milanović       |
| nfor | (milanovic.org)]{.underline}](https:/                         |
| mati | /milan.milanovic.org/post/enabling-high-code-quality-in-net/) |
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

### CALCULATE CODE METRICS TO SPOT PROBLEMS

Calculate code metrics for each project in your solution and address any
that exceed acceptable limits. The table below shows **RECOMMENDED**
levels for each metric.

  -----------------------------------------------------------------------------------------------------------------------------------------
                                                               **Maintainability   **Cyclomatic   **Depth of      **Class      **Lines of
                                                               Index**             Complexity**   Imheritance**   Coupling**   Executable
                                                                                                                               code**
  ------------------------------------------------------------ ------------------- -------------- --------------- ------------ ------------
  ![Example of good                                            20 - 100            \< 7           \< 5            \< 9         \< 40
  practice](./media/image3.png){width="0.1968503937007874in"                                                                   
  height="0.1968503937007874in"}                                                                                               

  -----------------------------------------------------------------------------------------------------------------------------------------

### CALCULATE CODE COVERAGE

Calculate test coverage and use the results to identify areas for
improvement.

Generate and publish a code coverage report in your pipelines.

+-----+----------------------------------------------------------------+
| ![  | Aim to cover a large portion of your code with tests. But      |
| Pra | prioritise integration tests for areas prone to regressions.   |
| cti | This may prove more effective than having unit tests for every |
| cal | method.                                                        |
| tip |                                                                |
| s]( | Note: Visual Studio's code coverage feature is available only  |
| ./m | in the Enterprise edition.                                     |
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
| !    | [[Calculate code metrics - Visual Studio (Windows) \|         |
| [Fur | Microsoft                                                     |
| ther | Learn]{.underline}](https://learn.microsoft.com/en-g          |
| rea  | b/visualstudio/code-quality/code-metrics-values?view=vs-2022) |
| ding |                                                               |
| and  | [[Selective Unit Testing -- Costs and Benefits                |
| i    | (stevensanderson.com)]{.underline}](http://blog.stevensanders |
| nfor | on.com/2009/11/04/selective-unit-testing-costs-and-benefits/) |
| mati |                                                               |
| on]( | [[Use code coverage for unit testing - .NET \| Microsoft      |
| ./me | Learn]{.underline}](https://learn.microsoft.com/en-gb         |
| dia/ | /dotnet/core/testing/unit-testing-code-coverage?tabs=windows) |
| imag |                                                               |
| e7.p | [[Code coverage testing - Visual Studio (Windows) \|          |
| ng){ | Microsoft                                                     |
| widt | Learn]{.underline}](https://learn.micr                        |
| h="0 | osoft.com/en-gb/visualstudio/test/using-code-coverage-to-dete |
| .463 | rmine-how-much-code-is-being-tested?view=vs-2022&tabs=csharp) |
| 8888 |                                                               |
| 8888 | [[Publish Code Coverage Results task - Azure Pipelines \|     |
| 8888 | Microsoft                                                     |
| 9in" | Learn]{.underl                                                |
| he   | ine}](https://learn.microsoft.com/en-gb/azure/devops/pipeline |
| ight | s/tasks/test/publish-code-coverage-results?view=azure-devops) |
| ="0. |                                                               |
| 4638 | [[Exercise - Perform code coverage testing - Training \|      |
| 8888 | Microsoft                                                     |
| 8888 | Learn]                                                        |
| 8889 | {.underline}](https://learn.microsoft.com/en-gb/training/modu |
| in"} | les/run-quality-tests-build-pipeline/6-perform-code-coverage) |
+======+===============================================================+
+------+---------------------------------------------------------------+

### CHECK CODE FOR STYLE AND QUALITY

Ensure your code follows the style ([naming](#_NAMING),
[layout](#layout), [language](#follow-microsofts-coding-conventions))
and quality conventions described or referenced in this document.

**Code Style Options and Analyser Rules**

Visual Studio offers a code style options box and Roslyn analyser code
style rules. With newer versions of Visual Studio and the .NET SDK, you
can run these rules at build time.

Use the dotnet format tool in your build and integration pipelines to
check for code style. See later in this section for details.

### USE ROSLYN ANALYSERS TO ENSURE .NET CODE QUALITY

Use Roslyn compiler analysers to check .NET code for style, quality,
maintainability and other issues. They are available from Microsoft and
third-party providers.

**How Roslyn Analysers work**:

-   **Design-Time Analysis**: Analysers run on open files in the IDE,
    providing immediate feedback.

-   **Build-Time Analysis**: Can be configured to run during builds to
    enforce consistent standards.

Use NuGet packages to integrate analysers directly in your code. Avoid
relying solely on IDE-specific tools like Visual Studio extensions,
ReSharper and SonarQube.

**Default Analysers in .NET SDKs**

The latest .NET SDKs include many Roslyn analysers pre-installed. The
image below shows the analysers available when creating an ASP.NET
project targeting .NET 8.0 in Visual Studio.

If using older SDKs, add analysers like
Microsoft.CodeAnalysis.NetAnalyzers NuGet package.

![A screenshot of a computer Description automatically
generated](./media/image9.png){width="2.5303226159230094in"
height="3.3044892825896763in"}

Figure 1 Use Roslyn analysers to check your code

**\
**

**Third-party Analysers**

Include a security analyser, such as SonarAnalyzer.CSharp or
SecurityCodeScan.VS2019. For assistance, ask the Software Development
Manager or Cyber Security team.

**Enabling Rules**

Roslyn analysers allow you to configure specific rules. In a .NET 6.0+
project, created with Visual Studio, only a few rules are enabled by
default. Enable all relevant rules, disabling only those that produce
false positives or are not relevant.

+-----+----------------------------------------------------------------+
| ![  | **Introducing Code Analysis**\                                 |
| Pra | Enabling code analysis with all rules on a large codebase can  |
| cti | be overwhelming. Start with a few rules and gradually add more |
| cal | until all are enabled.                                         |
| tip |                                                                |
| s]( | **Important:**\                                                |
| ./m | Code analysis may slow down your development environment.      |
| edi | Balance error detection with productivity. Consider running    |
| a/i | resource-intensive analysis in build or integration pipelines. |
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
| !    | [[Seven reasons that Roslyn-based Code Analysers are awesome  |
| [Fur | \| Tom Wrights Code                                           |
| ther | (tdwright.co.uk)]{.un                                         |
| rea  | derline}](https://blog.tdwright.co.uk/2018/12/10/seven-reason |
| ding | s-that-roslyn-based-code-analysers-are-awesome/?preview=true) |
| and  |                                                               |
| i    | [[The .NET Compiler Platform SDK (Roslyn APIs) \| Microsoft   |
| nfor | Learn]{.underline}]                                           |
| mati | (https://learn.microsoft.com/en-gb/dotnet/csharp/roslyn-sdk/) |
| on]( |                                                               |
| ./me | [[Code analysis documentation - Visual Studio (Windows) \|    |
| dia/ | Microsoft                                                     |
| imag | Learn]{.underline}](https://learn                             |
| e7.p | .microsoft.com/en-gb/visualstudio/code-quality/?view=vs-2022) |
| ng){ |                                                               |
| widt | [[Code analysers for .NET Framework \| Microsoft              |
| h="0 | Learn]{.underline}](https://le                                |
| .463 | arn.microsoft.com/en-gb/dotnet/framework/code-analyzers#main) |
| 8888 |                                                               |
| 8888 | [[Legacy analysis for managed code - Visual Studio (Windows)  |
| 8888 | \| Microsoft                                                  |
| 9in" | Learn]{.underline}                                            |
| he   | ](https://learn.microsoft.com/en-gb/visualstudio/code-quality |
| ight | /static-code-analysis-for-managed-code-overview?view=vs-2022) |
| ="0. |                                                               |
| 4638 | [[Retrofitting code analysis to legacy projects --            |
| 8888 | (tdwright.co.uk)]{.underline}](https                          |
| 8888 | ://blog.tdwright.co.uk/2018/12/13/retrofitting-code-analysis- |
| 8889 | to-legacy-projects-my-4-step-strategy-for-long-term-success/) |
| in"} |                                                               |
|      | [[Understanding the impact of Roslyn Analysers on build       |
|      | time - Meziantou\'s                                           |
|      | blog]{.underline}](https://www.meziantou.net/unders           |
|      | tanding-the-impact-of-roslyn-analyzers-on-the-build-time.htm) |
|      |                                                               |
|      | [[Favourite code analysis tools for .NET Core devs on Azure   |
|      | (zimmergren.net)]{.underline}](https://zimmergren.net/        |
|      | code-analysis-tools-for-azure-developers-coding-dotnet-core/) |
|      |                                                               |
|      | **Roslyn Team analysers**                                     |
|      |                                                               |
|      | [NuGet Gallery \| Microsoft.CodeAnalysis.NetAnalyzers         |
|      | 9.0.0](https://www.nuget.org/packag                           |
|      | es/Microsoft.CodeAnalysis.NetAnalyzers#dependencies-body-tab) |
|      |                                                               |
|      | [[NuGet Gallery \|                                            |
|      | Roslyn                                                        |
|      | Team]{.underline}](https://www.nuget.org/profiles/RoslynTeam) |
|      |                                                               |
|      | **Roslynator**                                                |
|      |                                                               |
|      | [NuGet Gallery \| Roslynator.Analyzers                        |
|      | 4                                                             |
|      | .12.10](https://www.nuget.org/packages/Roslynator.Analyzers/) |
|      |                                                               |
|      | **xUnit**                                                     |
|      |                                                               |
|      | [NuGet Gallery \| xunit.analyzers                             |
|      | 1.19.0](https://www.nuget.org/packages/xunit.analyzers/)      |
|      |                                                               |
|      | **Style Cop**                                                 |
|      |                                                               |
|      | [NuGet Gallery \| StyleCop.Analyzers                          |
|      | 1.1.118](https://www.nuget.org/packages/StyleCop.Analyzers/)  |
|      |                                                               |
|      | **Security source code analysers**                            |
|      |                                                               |
|      | [NuGet Gallery \| SonarAnalyzer.CSharp                        |
|      | 10.5.0.                                                       |
|      | 109200](https://www.nuget.org/packages/SonarAnalyzer.CSharp/) |
|      |                                                               |
|      | [[Static analysers - Training \| Microsoft                    |
|      | Learn]{.underline}](https://                                  |
|      | learn.microsoft.com/en-gb/training/modules/static-analyzers/) |
|      |                                                               |
|      | [[NuGet Gallery \| SecurityCodeScan.VS2019                    |
|      | 5.6.7]{.underli                                               |
|      | ne}](https://www.nuget.org/packages/SecurityCodeScan.VS2019/) |
|      |                                                               |
|      | [[Source Code Security Analysers \|                           |
|      | NIST]{.underline}](https://www.nist.gov/i                     |
|      | tl/ssd/software-quality-group/source-code-security-analyzers) |
|      |                                                               |
|      | [[Source Code Analysis Tools \| OWASP                         |
|      | Foundation]{.underline}                                       |
|      | ](https://owasp.org/www-community/Source_Code_Analysis_Tools) |
|      |                                                               |
|      | [[Code analysis \| ReSharper                                  |
|      | (jetbrains.com)]{.underline}](https:                          |
|      | //www.jetbrains.com/help/resharper/Code_Analysis__Index.html) |
+======+===============================================================+
| !    | **ASP.NET analysers**                                         |
| [Fur |                                                               |
| ther | [[Code analysis in ASP.NET Core apps \| Microsoft             |
| rea  | Learn]{.underline}](https://learn.microsoft.com/en-           |
| ding | gb/aspnet/core/diagnostics/code-analysis?view=aspnetcore-6.0) |
| and  |                                                               |
| i    | [[Analysers for ASP.NET Core in .NET 6                        |
| nfor | (andrewlock.net)]{.underline}](https://andrewlo               |
| mati | ck.net/exploring-dotnet-6-part-7-analyzers-for-minimal-apis/) |
| on]( |                                                               |
| ./me | **ReSharper**                                                 |
| dia/ |                                                               |
| imag | [[Code analysis \| ReSharper                                  |
| e7.p | (jetbrains.com)]{.underline}](https:                          |
| ng){ | //www.jetbrains.com/help/resharper/Code_Analysis__Index.html) |
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
+------+---------------------------------------------------------------+

### CONFIGURE CODE ANALYSIS RULES

Follow these steps when configuring code analysis:

+----------------------+-----------------------------------------------+
| **CONFIGURATION      | **Details**                                   |
| STEP**               |                                               |
+======================+===============================================+
| **ADD AN             | Place in the root of your solution and commit |
| .editorconfig FILE** | to source control to ensure consistent        |
|                      | settings across the team.                     |
+----------------------+-----------------------------------------------+
| **SET-UP INITIAL     | Generate settings using Visual Studio's code  |
| RULES**              | style options or a template (see further      |
|                      | reading).                                     |
|                      |                                               |
|                      | Adjust rules to align with team or            |
|                      | organisational conventions.                   |
+----------------------+-----------------------------------------------+
| **DEFINE RULE        | Set critical rules to *error* to ensure       |
| SEVERITY**           | violations fail the build.                    |
|                      |                                               |
|                      | Configure the Directory.build.props or        |
|                      | .csproj files (SDK-style projects) to enable  |
|                      | style and quality checks during builds.       |
+----------------------+-----------------------------------------------+
| **ENFORCE CODE       | Enforce code style checks during builds where |
| STYLE**              | your .NET version supports it.                |
+----------------------+-----------------------------------------------+
| **APPLY GOOD         | Treat warnings as errors to promote higher    |
| PRACTICE**           | code quality.                                 |
+----------------------+-----------------------------------------------+

+-----+----------------------------------------------------------------+
| ![  | Be mindful of the challenges with .editorconfig, including     |
| Pra | known Visual Studio UI limitations. Read this blog before you  |
| cti | start! --                                                      |
| cal |                                                                |
| tip | [[C# code style by EditorConfig in .NET 5 SDK and beyond \|    |
| s]( | Mews                                                           |
| ./m | Developers]{.underline}](https://developers.m                  |
| edi | ews.com/c-code-style-by-editorconfig-in-net-5-sdk-and-beyond/) |
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

You **MAY** develop team-specific styles if the provided conventions
don't meet your needs.

+------+---------------------------------------------------------------+
| !    | **.editorconfig**                                             |
| [Fur |                                                               |
| ther | [[How to enforce a consistent coding style in your projects - |
| rea  | Meziantou\'s                                                  |
| ding | blog]{.underline}](https://www.meziantou.net/h                |
| and  | ow-to-enforce-a-consistent-coding-style-in-your-projects.htm) |
| i    |                                                               |
| nfor | [[EditorConfig]{.underline}](https://editorconfig.org/)       |
| mati |                                                               |
| on]( | [[Code style options and code cleanup - Visual Studio         |
| ./me | (Windows) \| Microsoft                                        |
| dia/ | Learn]{.underline}](https://learn.microsoft.com/en-g          |
| imag | b/visualstudio/ide/code-styles-and-code-cleanup?view=vs-2019) |
| e7.p |                                                               |
| ng){ | [[Enforce code style rules - Visual Studio (Windows) \|       |
| widt | Microsoft                                                     |
| h="0 | Learn]{.underline}](https://learn.micros                      |
| .463 | oft.com/en-gb/visualstudio/ide/csharp-developer-productivity? |
| 8888 | source=recommendations&view=vs-2022#enforce-code-style-rules) |
| 8888 |                                                               |
| 8888 | [[.NET code style rule options - .NET \| Microsoft            |
| 9in" | Learn]{.underline}](https://learn.microsoft.com/en-           |
| he   | gb/dotnet/fundamentals/code-analysis/code-style-rule-options) |
| ight |                                                               |
| ="0. | [[C# editor formatting options - Visual Studio (Windows) \|   |
| 4638 | Microsoft                                                     |
| 8888 | Learn]{.un                                                    |
| 8888 | derline}](https://learn.microsoft.com/en-gb/visualstudio/ide/ |
| 8889 | reference/options-text-editor-csharp-formatting?view=vs-2022) |
| in"} |                                                               |
+======+===============================================================+
| []   | **.editorconfig templates**                                   |
| {#_R |                                                               |
| UN_C | [[EditorConfig settings - Visual Studio (Windows) \|          |
| ODE_ | Microsoft                                                     |
| ANAL | Learn]{.underline}](https://learn.microsoft.com/en-gb/visuals |
| YSIS | tudio/ide/create-portable-custom-editor-options?view=vs-2022) |
| .    |                                                               |
| anch | [[project-system/.editorconfig at main ·                      |
| or}! | dotnet/project-system ·                                       |
| [Fur | GitHub]{.underline}](http                                     |
| ther | s://github.com/dotnet/project-system/blob/main/.editorconfig) |
| rea  |                                                               |
| ding | [[roslyn/.editorconfig at main · dotnet/roslyn ·              |
| and  | GitHub]{.underlin                                             |
| i    | e}](https://github.com/dotnet/roslyn/blob/main/.editorconfig) |
| nfor |                                                               |
| mati | **.csproj config**                                            |
| on]( |                                                               |
| ./me | [[Code Analysis: MSBuild properties for Microsoft.NET.Sdk -   |
| dia/ | .NET \| Microsoft                                             |
| imag | Learn]{.underline}](https://learn.microsoft.com/en-gb/do      |
| e7.p | tnet/core/project-sdk/msbuild-props#code-analysis-properties) |
| ng){ |                                                               |
| widt | [[Enable NET Analyzers: MSBuild properties for                |
| h="0 | Microsoft.NET.Sdk - .NET \| Microsoft                         |
| .463 | Learn]{.underline}](https://learn.microsoft.com/en            |
| 8888 | -gb/dotnet/core/project-sdk/msbuild-props#enablenetanalyzers) |
| 8888 |                                                               |
| 8888 | [[C# Compiler Options - errors and warnings \| Microsoft      |
| 9in" | Learn]{.underline}](                                          |
| he   | https://learn.microsoft.com/en-gb/dotnet/csharp/language-refe |
| ight | rence/compiler-options/errors-warnings#treatwarningsaserrors) |
| ="0. |                                                               |
| 4638 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8889 |                                                               |
| in"} |                                                               |
+------+---------------------------------------------------------------+

### RUN CODE ANALYSIS IN YOUR PIPELINES AS WELL AS THE IDE

Run code analysis during builds catch issues early, using tools
like**MSBuild** & **dotnet format**.

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [[Enforce .NET code style in CI with dotnet format - Meziantou\'s
  information](./media/image7.png){width="0.4638888888888889in"   blog]{.underline}](https://www.meziantou.net/enforce-dotnet-code-style-in-ci-with-dotnet-format.htm#azure-pipelines)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### CHECK THIRD-PARY PACKAGES

Check for vulnerabilities and licence issues in third-party dependencies
by integrating tools like **GitHub Advanced Security for Azure DevOps**.

+------+---------------------------------------------------------------+
| !    | SDS-CS-7 Azure DevOps handbook                                |
| [Fur |                                                               |
| ther | [[Software Composition Analysis - Training \| Microsoft       |
| rea  | Learn]{.underline}](https://learn.microso                     |
| ding | ft.com/en-gb/training/modules/software-composition-analysis/) |
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

### PUBLISH AND REVIEW METRICS

Track code health by publishing metrics from analysis tasks to server
dashboards.

Regularly review these metrics and address problem areas to maintain
quality.

+------+---------------------------------------------------------------+
| !    | SDS-CS-7 Azure DevOps handbook                                |
| [Fur |                                                               |
| ther | [[Generate code metrics from the IDE or command line - Visual |
| rea  | Studio (Windows) \| Microsoft                                 |
| ding | Learn                                                         |
| and  | ]{.underline}](https://learn.microsoft.com/en-gb/visualstudio |
| i    | /code-quality/how-to-generate-code-metrics-data?view=vs-2022) |
| nfor |                                                               |
| mati | [[Publish Code Coverage Results task - Azure Pipelines \|     |
| on]( | Microsoft                                                     |
| ./me | Learn]{.underl                                                |
| dia/ | ine}](https://learn.microsoft.com/en-gb/azure/devops/pipeline |
| imag | s/tasks/test/publish-code-coverage-results?view=azure-devops) |
| e7.p |                                                               |
| ng){ | [[Exercise - Perform code coverage testing - Training \|      |
| widt | Microsoft                                                     |
| h="0 | Learn]                                                        |
| .463 | {.underline}](https://learn.microsoft.com/en-gb/training/modu |
| 8888 | les/run-quality-tests-build-pipeline/6-perform-code-coverage) |
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

###  

### RECAP

+------+---------------------------------------------------------------+
| ![   | **Recap: Analyse your code**                                  |
| Left |                                                               |
| B    | 1.  Create a plan.                                            |
| rain |                                                               |
| with | 2.  Calculate code metrics.                                   |
| s    |                                                               |
| olid | 3.  Calculate code coverage.                                  |
| fil  |                                                               |
| l](. | 4.  Check for code style and quality.                         |
| /med |                                                               |
| ia/i | 5.  Use Roslyn analysers.                                     |
| mage |                                                               |
| 10.p | 6.  Configure code analysis rules.                            |
| ng){ |                                                               |
| widt | 7.  Run code analysis in your build pipelines.                |
| h="0 |                                                               |
| .464 | 8.  Check third party packages.                               |
| 5669 |                                                               |
| 2913 | 9.  Publish metrics.                                          |
| 3858 |                                                               |
| 3in" |                                                               |
| he   |                                                               |
| ight |                                                               |
| ="0. |                                                               |
| 4645 |                                                               |
| 6692 |                                                               |
| 9133 |                                                               |
| 8583 |                                                               |
| in"} |                                                               |
+======+===============================================================+
+------+---------------------------------------------------------------+

## EXCEPTIONS

While there may be reasons to deviate from this guide, exceptions should
be rare and carefully considered.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Discuss with colleagues and hold code reviews to ensure a shared
  tips](./media/image1.png){width="0.3937007874015748in"   understanding of our standards.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | [[Giving code a good name - Kevlin Henney -                   |
| [Fur | YouTu                                                         |
| ther | be]{.underline}](https://www.youtube.com/watch?v=CzJ94TMPcD8) |
| rea  |                                                               |
| ding | [[Clean Coders Hate What Happens to Your Code When You Use    |
| and  | These Enterprise Programming Tricks -                         |
| i    | YouTu                                                         |
| nfor | be]{.underline}](https://www.youtube.com/watch?v=FyCYva9DhsI) |
| mati |                                                               |
| on]( | [[Seven ineffective coding habits of many programmers -       |
| ./me | Kevlin Henney -                                               |
| dia/ | YouTu                                                         |
| imag | be]{.underline}](https://www.youtube.com/watch?v=oyyFKHpzL0Q) |
| e7.p |                                                               |
| ng){ | [[Uses and misuses of implicit typing \| Microsoft            |
| widt | Learn]{.underline}](https://learn.microsoft.com/en-gb/a       |
| h="0 | rchive/blogs/ericlippert/uses-and-misuses-of-implicit-typing) |
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

# EXAMPLES

## UNECESSARY USING STATEMENTS

+---+------------------------------------------------------------------+
| ! | namespace Example                                                |
| [ |                                                                  |
| E | {                                                                |
| x |                                                                  |
| a | using System;                                                    |
| m |                                                                  |
| p | using System.Collections.Generic;                                |
| l |                                                                  |
| e | internal class BadClass                                          |
| o |                                                                  |
| f | {                                                                |
| p |                                                                  |
| r | static void Main(string\[\] args)                                |
| a |                                                                  |
| c | {                                                                |
| t |                                                                  |
| i | Console.WriteLine("I\'m using statements unnecessarily!");       |
| c |                                                                  |
| e | Console.WriteLine("I\'m bad, shamone!");                         |
| s |                                                                  |
| t | }                                                                |
| o |                                                                  |
| a | }                                                                |
| v |                                                                  |
| o | }                                                                |
| i |                                                                  |
| d |                                                                  |
| ] |                                                                  |
| ( |                                                                  |
| . |                                                                  |
| / |                                                                  |
| m |                                                                  |
| e |                                                                  |
| d |                                                                  |
| i |                                                                  |
| a |                                                                  |
| / |                                                                  |
| i |                                                                  |
| m |                                                                  |
| a |                                                                  |
| g |                                                                  |
| e |                                                                  |
| 5 |                                                                  |
| . |                                                                  |
| p |                                                                  |
| n |                                                                  |
| g |                                                                  |
| ) |                                                                  |
| { |                                                                  |
| w |                                                                  |
| i |                                                                  |
| d |                                                                  |
| t |                                                                  |
| h |                                                                  |
| = |                                                                  |
| " |                                                                  |
| 0 |                                                                  |
| . |                                                                  |
| 1 |                                                                  |
| 9 |                                                                  |
| 6 |                                                                  |
| 8 |                                                                  |
| 5 |                                                                  |
| 0 |                                                                  |
| 3 |                                                                  |
| 9 |                                                                  |
| 3 |                                                                  |
| 7 |                                                                  |
| 0 |                                                                  |
| 0 |                                                                  |
| 7 |                                                                  |
| 8 |                                                                  |
| 7 |                                                                  |
| 4 |                                                                  |
| i |                                                                  |
| n |                                                                  |
| " |                                                                  |
| h |                                                                  |
| e |                                                                  |
| i |                                                                  |
| g |                                                                  |
| h |                                                                  |
| t |                                                                  |
| = |                                                                  |
| " |                                                                  |
| 0 |                                                                  |
| . |                                                                  |
| 1 |                                                                  |
| 9 |                                                                  |
| 6 |                                                                  |
| 8 |                                                                  |
| 5 |                                                                  |
| 0 |                                                                  |
| 3 |                                                                  |
| 9 |                                                                  |
| 3 |                                                                  |
| 7 |                                                                  |
| 0 |                                                                  |
| 0 |                                                                  |
| 7 |                                                                  |
| 8 |                                                                  |
| 7 |                                                                  |
| 4 |                                                                  |
| i |                                                                  |
| n |                                                                  |
| " |                                                                  |
| } |                                                                  |
+===+==================================================================+
+---+------------------------------------------------------------------+

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Rule ID**                                                                                          **Rule Title**
  ---------------------------------------------------------------------------------------------------- -----------------------------------------------------------
  [IDE0005](https://learn.microsoft.com/en-gb/dotnet/fundamentals/code-analysis/style-rules/ide0005)   Using directive is unnecessary.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------

## USE OUR NAMESPACE CONVENTIONS

  -------------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            NhsWales.Wcp.Portal ​ 
  practice](./media/image3.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ------------------------------------------------------------------
  ![Example of practices to                                    DHCW.Wis.Reports
  avoid](./media/image5.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  -------------------------------------------------------------------------------------------------------------------------------

## CONSIDER YOUR USE OF VAR

  -------------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            var patient = new Patient();
  practice](./media/image3.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ------------------------------------------------------------------
  ![Example of good                                            Patient myPatient = new Patient();
  practice](./media/image3.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  ![Example of practices to                                    var patientCount = Ward.getPatientCount(); 
  avoid](./media/image5.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  ![Example of good                                            int patientCount = Ward.getPatientCount();
  practice](./media/image3.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  ![Example of practices to                                    var myPatient = Demographics.getPerson(NHSNumber);
  avoid](./media/image5.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  ![Example of good                                            Person myPatient = Demographics.getPerson(NHSNumber); 
  practice](./media/image3.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  -------------------------------------------------------------------------------------------------------------------------------

## NAME PARAMETERS

  -------------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            var permissions = getUsersAccessPermissions(\"ge000001\",
  practice](./media/image3.png){width="0.1968503937007874in"   isLoggedIn: true); ​ 
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ------------------------------------------------------------------
  ![Example of practices to                                    var permissions = getUsersAccessPermissions(\"ge000001\", true);
  avoid](./media/image5.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  -------------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Enable Visual Studio\'s inline parameter hints to show argument
  tips](./media/image1.png){width="0.3937007874015748in"   names before function call arguments
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## PRIORITISE READABILITY OVER BREVITY

  -------------------------------------------------------------------------------------------------------------------------------
  ![Example of practices to                                    SearchOnUserName(string id);
  avoid](./media/image5.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ------------------------------------------------------------------
  ![Example of practices to                                    SearchOnUsersFullName(string nadexID);
  avoid](./media/image5.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  ![Example of good                                            SearchOnUsersFullName(string activeDirectoryUserId);
  practice](./media/image3.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  -------------------------------------------------------------------------------------------------------------------------------

## USE UNDERSCORES ONLY IN UNIT TEST NAMES

  -----------------------------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            SearchOnUsersFullName_ValidActiveDirectoryUserIdProvided\_ReturnsUsersFullName()
  practice](./media/image3.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------------------------
  ![Example of practices to                                    Search_On_UsersFullName(string activeDirectoryUserId);
  avoid](./media/image5.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  -----------------------------------------------------------------------------------------------------------------------------------------------

## ENSURE BOOLEAN NAMES ARE PHRASED AS QUESTIONS

  -------------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            bool IsTrue;
  practice](./media/image3.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ------------------------------------------------------------------
  ![Example of practices to                                    bool condtionChecker;
  avoid](./media/image5.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  ![Example of good                                            bool IsOpen;
  practice](./media/image3.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  ![Example of practices to                                    bool open;
  avoid](./media/image5.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  ![Example of good                                            bool IsActive;
  practice](./media/image3.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  ![Example of practices to                                    bool status;
  avoid](./media/image5.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               
  -------------------------------------------------------------------------------------------------------------------------------

## USE PREFIXES AND SUFFIXES ONLY WHEN SPECIFIED BY CONVENTIONS

  ----------------------------------------------------------------------------------------------------------------------------
  ![Example of practices to                                 string strActiveDirectoryUserId;
  avoid](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                            
  --------------------------------------------------------- ------------------------------------------------------------------
  ![Example of practices to                                 int iPatientCount;
  avoid](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                            

  ![Example of practices to                                 var iPatientCount;
  avoid](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                            

  ![Example of practices to                                 GetUsersFullName(string p_activeDirectoryUserId);
  avoid](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                            
  ----------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------------------
                                                               **Prefix**   **Usage**                                       **Language**
  ------------------------------------------------------------ ------------ ----------------------------------------------- --------------
  ![Example of good                                            **I**        **Interface** definitions                       *C#*
  practice](./media/image3.png){width="0.1968503937007874in"                                                                
  height="0.1968503937007874in"}                                                                                            

  ![Example of good                                            **T**        Generic **Type** definitions. Simply use T if   *C#*
  practice](./media/image3.png){width="0.1968503937007874in"                only one Type is defined.                       
  height="0.1968503937007874in"}                                                                                            

  ![Example of good                                            **T**        Type definitions                                *Delphi*
  practice](./media/image3.png){width="0.1968503937007874in"                                                                
  height="0.1968503937007874in"}                                                                                            

  ![Example of good                                            **P**        **Pointers** to *Type* definitions              *Delphi*
  practice](./media/image3.png){width="0.1968503937007874in"                                                                
  height="0.1968503937007874in"}                                                                                            

  ![Example of good                                            **A**        Use to distinguish parameters with the same     *Delphi*
  practice](./media/image3.png){width="0.1968503937007874in"                name as private member variables.               
  height="0.1968503937007874in"}                                                                                            
  ----------------------------------------------------------------------------------------------------------------------------------------

## USING BRACES

+---+------------------------------------------------------------------+
| ! | if (isLoggedIn)\                                                 |
| [ | DisplayHomePage();                                               |
| E |                                                                  |
| x |                                                                  |
| a |                                                                  |
| m |                                                                  |
| p |                                                                  |
| l |                                                                  |
| e |                                                                  |
| o |                                                                  |
| f |                                                                  |
| p |                                                                  |
| r |                                                                  |
| a |                                                                  |
| c |                                                                  |
| t |                                                                  |
| i |                                                                  |
| c |                                                                  |
| e |                                                                  |
| s |                                                                  |
| t |                                                                  |
| o |                                                                  |
| a |                                                                  |
| v |                                                                  |
| o |                                                                  |
| i |                                                                  |
| d |                                                                  |
| ] |                                                                  |
| ( |                                                                  |
| . |                                                                  |
| / |                                                                  |
| m |                                                                  |
| e |                                                                  |
| d |                                                                  |
| i |                                                                  |
| a |                                                                  |
| / |                                                                  |
| i |                                                                  |
| m |                                                                  |
| a |                                                                  |
| g |                                                                  |
| e |                                                                  |
| 5 |                                                                  |
| . |                                                                  |
| p |                                                                  |
| n |                                                                  |
| g |                                                                  |
| ) |                                                                  |
| { |                                                                  |
| w |                                                                  |
| i |                                                                  |
| d |                                                                  |
| t |                                                                  |
| h |                                                                  |
| = |                                                                  |
| " |                                                                  |
| 0 |                                                                  |
| . |                                                                  |
| 1 |                                                                  |
| 9 |                                                                  |
| 6 |                                                                  |
| 8 |                                                                  |
| 5 |                                                                  |
| 0 |                                                                  |
| 3 |                                                                  |
| 9 |                                                                  |
| 3 |                                                                  |
| 7 |                                                                  |
| 0 |                                                                  |
| 0 |                                                                  |
| 7 |                                                                  |
| 8 |                                                                  |
| 7 |                                                                  |
| 4 |                                                                  |
| i |                                                                  |
| n |                                                                  |
| " |                                                                  |
| h |                                                                  |
| e |                                                                  |
| i |                                                                  |
| g |                                                                  |
| h |                                                                  |
| t |                                                                  |
| = |                                                                  |
| " |                                                                  |
| 0 |                                                                  |
| . |                                                                  |
| 1 |                                                                  |
| 9 |                                                                  |
| 6 |                                                                  |
| 8 |                                                                  |
| 5 |                                                                  |
| 0 |                                                                  |
| 3 |                                                                  |
| 9 |                                                                  |
| 3 |                                                                  |
| 7 |                                                                  |
| 0 |                                                                  |
| 0 |                                                                  |
| 7 |                                                                  |
| 8 |                                                                  |
| 7 |                                                                  |
| 4 |                                                                  |
| i |                                                                  |
| n |                                                                  |
| " |                                                                  |
| } |                                                                  |
+===+==================================================================+
| ! | if (isLoggedIn) DisplayHomePage();                               |
| [ |                                                                  |
| E |                                                                  |
| x |                                                                  |
| a |                                                                  |
| m |                                                                  |
| p |                                                                  |
| l |                                                                  |
| e |                                                                  |
| o |                                                                  |
| f |                                                                  |
| p |                                                                  |
| r |                                                                  |
| a |                                                                  |
| c |                                                                  |
| t |                                                                  |
| i |                                                                  |
| c |                                                                  |
| e |                                                                  |
| s |                                                                  |
| t |                                                                  |
| o |                                                                  |
| a |                                                                  |
| v |                                                                  |
| o |                                                                  |
| i |                                                                  |
| d |                                                                  |
| ] |                                                                  |
| ( |                                                                  |
| . |                                                                  |
| / |                                                                  |
| m |                                                                  |
| e |                                                                  |
| d |                                                                  |
| i |                                                                  |
| a |                                                                  |
| / |                                                                  |
| i |                                                                  |
| m |                                                                  |
| a |                                                                  |
| g |                                                                  |
| e |                                                                  |
| 5 |                                                                  |
| . |                                                                  |
| p |                                                                  |
| n |                                                                  |
| g |                                                                  |
| ) |                                                                  |
| { |                                                                  |
| w |                                                                  |
| i |                                                                  |
| d |                                                                  |
| t |                                                                  |
| h |                                                                  |
| = |                                                                  |
| " |                                                                  |
| 0 |                                                                  |
| . |                                                                  |
| 1 |                                                                  |
| 9 |                                                                  |
| 6 |                                                                  |
| 8 |                                                                  |
| 5 |                                                                  |
| 0 |                                                                  |
| 3 |                                                                  |
| 9 |                                                                  |
| 3 |                                                                  |
| 7 |                                                                  |
| 0 |                                                                  |
| 0 |                                                                  |
| 7 |                                                                  |
| 8 |                                                                  |
| 7 |                                                                  |
| 4 |                                                                  |
| i |                                                                  |
| n |                                                                  |
| " |                                                                  |
| h |                                                                  |
| e |                                                                  |
| i |                                                                  |
| g |                                                                  |
| h |                                                                  |
| t |                                                                  |
| = |                                                                  |
| " |                                                                  |
| 0 |                                                                  |
| . |                                                                  |
| 1 |                                                                  |
| 9 |                                                                  |
| 6 |                                                                  |
| 8 |                                                                  |
| 5 |                                                                  |
| 0 |                                                                  |
| 3 |                                                                  |
| 9 |                                                                  |
| 3 |                                                                  |
| 7 |                                                                  |
| 0 |                                                                  |
| 0 |                                                                  |
| 7 |                                                                  |
| 8 |                                                                  |
| 7 |                                                                  |
| 4 |                                                                  |
| i |                                                                  |
| n |                                                                  |
| " |                                                                  |
| } |                                                                  |
+---+------------------------------------------------------------------+
| ! | if (isLoggedIn)                                                  |
| [ |                                                                  |
| E | {                                                                |
| x |                                                                  |
| a | DisplayHomePage();                                               |
| m |                                                                  |
| p | }                                                                |
| l |                                                                  |
| e |                                                                  |
| o |                                                                  |
| f |                                                                  |
| g |                                                                  |
| o |                                                                  |
| o |                                                                  |
| d |                                                                  |
| p |                                                                  |
| r |                                                                  |
| a |                                                                  |
| c |                                                                  |
| t |                                                                  |
| i |                                                                  |
| c |                                                                  |
| e |                                                                  |
| ] |                                                                  |
| ( |                                                                  |
| . |                                                                  |
| / |                                                                  |
| m |                                                                  |
| e |                                                                  |
| d |                                                                  |
| i |                                                                  |
| a |                                                                  |
| / |                                                                  |
| i |                                                                  |
| m |                                                                  |
| a |                                                                  |
| g |                                                                  |
| e |                                                                  |
| 3 |                                                                  |
| . |                                                                  |
| p |                                                                  |
| n |                                                                  |
| g |                                                                  |
| ) |                                                                  |
| { |                                                                  |
| w |                                                                  |
| i |                                                                  |
| d |                                                                  |
| t |                                                                  |
| h |                                                                  |
| = |                                                                  |
| " |                                                                  |
| 0 |                                                                  |
| . |                                                                  |
| 1 |                                                                  |
| 9 |                                                                  |
| 6 |                                                                  |
| 8 |                                                                  |
| 5 |                                                                  |
| 0 |                                                                  |
| 3 |                                                                  |
| 9 |                                                                  |
| 3 |                                                                  |
| 7 |                                                                  |
| 0 |                                                                  |
| 0 |                                                                  |
| 7 |                                                                  |
| 8 |                                                                  |
| 7 |                                                                  |
| 4 |                                                                  |
| i |                                                                  |
| n |                                                                  |
| " |                                                                  |
| h |                                                                  |
| e |                                                                  |
| i |                                                                  |
| g |                                                                  |
| h |                                                                  |
| t |                                                                  |
| = |                                                                  |
| " |                                                                  |
| 0 |                                                                  |
| . |                                                                  |
| 1 |                                                                  |
| 9 |                                                                  |
| 6 |                                                                  |
| 8 |                                                                  |
| 5 |                                                                  |
| 0 |                                                                  |
| 3 |                                                                  |
| 9 |                                                                  |
| 3 |                                                                  |
| 7 |                                                                  |
| 0 |                                                                  |
| 0 |                                                                  |
| 7 |                                                                  |
| 8 |                                                                  |
| 7 |                                                                  |
| 4 |                                                                  |
| i |                                                                  |
| n |                                                                  |
| " |                                                                  |
| } |                                                                  |
+---+------------------------------------------------------------------+
| ! | if (isLoggedIn) { DisplayHomePage(); }                           |
| [ |                                                                  |
| E |                                                                  |
| x |                                                                  |
| a |                                                                  |
| m |                                                                  |
| p |                                                                  |
| l |                                                                  |
| e |                                                                  |
| o |                                                                  |
| f |                                                                  |
| g |                                                                  |
| o |                                                                  |
| o |                                                                  |
| d |                                                                  |
| p |                                                                  |
| r |                                                                  |
| a |                                                                  |
| c |                                                                  |
| t |                                                                  |
| i |                                                                  |
| c |                                                                  |
| e |                                                                  |
| ] |                                                                  |
| ( |                                                                  |
| . |                                                                  |
| / |                                                                  |
| m |                                                                  |
| e |                                                                  |
| d |                                                                  |
| i |                                                                  |
| a |                                                                  |
| / |                                                                  |
| i |                                                                  |
| m |                                                                  |
| a |                                                                  |
| g |                                                                  |
| e |                                                                  |
| 3 |                                                                  |
| . |                                                                  |
| p |                                                                  |
| n |                                                                  |
| g |                                                                  |
| ) |                                                                  |
| { |                                                                  |
| w |                                                                  |
| i |                                                                  |
| d |                                                                  |
| t |                                                                  |
| h |                                                                  |
| = |                                                                  |
| " |                                                                  |
| 0 |                                                                  |
| . |                                                                  |
| 1 |                                                                  |
| 9 |                                                                  |
| 6 |                                                                  |
| 8 |                                                                  |
| 5 |                                                                  |
| 0 |                                                                  |
| 3 |                                                                  |
| 9 |                                                                  |
| 3 |                                                                  |
| 7 |                                                                  |
| 0 |                                                                  |
| 0 |                                                                  |
| 7 |                                                                  |
| 8 |                                                                  |
| 7 |                                                                  |
| 4 |                                                                  |
| i |                                                                  |
| n |                                                                  |
| " |                                                                  |
| h |                                                                  |
| e |                                                                  |
| i |                                                                  |
| g |                                                                  |
| h |                                                                  |
| t |                                                                  |
| = |                                                                  |
| " |                                                                  |
| 0 |                                                                  |
| . |                                                                  |
| 1 |                                                                  |
| 9 |                                                                  |
| 6 |                                                                  |
| 8 |                                                                  |
| 5 |                                                                  |
| 0 |                                                                  |
| 3 |                                                                  |
| 9 |                                                                  |
| 3 |                                                                  |
| 7 |                                                                  |
| 0 |                                                                  |
| 0 |                                                                  |
| 7 |                                                                  |
| 8 |                                                                  |
| 7 |                                                                  |
| 4 |                                                                  |
| i |                                                                  |
| n |                                                                  |
| " |                                                                  |
| } |                                                                  |
+---+------------------------------------------------------------------+

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Rule ID**                                                                                                        **Rule Title**
  ------------------------------------------------------------------------------------------------------------------ -----------------------------------------------------------
  [[IDE0011]{.underline}](https://learn.microsoft.com/en-gb/dotnet/fundamentals/code-analysis/style-rules/ide0011)   Add braces to 'if' statement.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## CODE COMMENTS

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of practices to                                 ![A screenshot of a computer program Description automatically
  avoid](./media/image5.png){width="0.1968503937007874in"   generated](./media/image12.png){width="5.689381014873141in"
  height="0.1968503937007874in"}                            height="3.3645833333333335in"}
  --------------------------------------------------------- -------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------

# ESSENTIAL GOOD PRACTICE CHECKLIST

  -----------------------------------------------------------------------------------------------------------------------
  **Item**                                         **Guide or standard**                                 **Exceptions**
  ---------- -------------------------------- ---- ----------------------------------------------------- ----------------
  1          Your code is terse, expressive   ☐    [Write clean code](#write-clean-code)                 \-
             and underpinned with coded                                                                  
             tests.                                                                                      

  2          Classes follow SOLID principles. ☐    [Follow SOLID principles](#follow-solid-principles)   \-

  3          You follow Microsoft's C# coding ☐    [Follow Microsoft\'s coding                           *Unless you have
             conventions and Framework Design      conventions](#follow-microsofts-coding-conventions)   agreed to follow
             Guidelines.                                                                                 a local coding
                                                                                                         standard.*

  4          You handle exceptions and use    ☐    [Exception handling and defensive                     \-
             defensive coding techniques.          coding](#exception-handling-and-defensive-coding)     

  5          You calculate code metrics.      ☐    [Calculate code                                       
                                                   metrics](#calculate-code-metrics-to-spot-problems)    

  6          You calculate code coverage.     ☐    [Calculate code coverage](#calculate-code-coverage)   

  7          You analyse code for style and   ☐    [Check code for style and                             
             quality.                              quality](#check-code-for-style-and-quality)           

  8          You analyse code for security    ☐    [Analyse your code](#analyse-your-code)               
             vulnerabilities.                                                                            

  9          You share your analysis rules in ☐    [Analyse your code](#analyse-your-code)               
             source control.                                                                             

  10         You perform code analysis in     ☐    [Run code analysis in your                            
             build pipelines.                      pipelines](#_RUN_CODE_ANALYSIS)                       

  11         You check third party            ☐    [Check third-party                                    
             dependencies for security             packages](#check-third-pary-packages)                 
             vulnerabilities.                                                                            

  12         You publish metrics to your      ☐    [Publish and review                                   
             dashboards.                           ,metrics](#publish-and-review-metrics)                
  -----------------------------------------------------------------------------------------------------------------------
