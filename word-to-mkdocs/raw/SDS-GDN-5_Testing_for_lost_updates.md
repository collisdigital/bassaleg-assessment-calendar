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
| Test Team Principals                 | 23/   | Approved             |
|                                      | 09/22 |                      |
+--------------------------------------+-------+----------------------+
| Application Architecture Assurance   | 11/   | Approved             |
| Group                                | 10/22 |                      |
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

[4 REFERENCES [4](#references)](#references)

[5 HOW THIS GUIDE IS ORGANISED
[5](#how-this-guide-is-organised)](#how-this-guide-is-organised)

[6 GUIDANCE [6](#guidance)](#guidance)

[6.1 WHAT'S A LOST UPDATE
[6](#whats-a-lost-update)](#whats-a-lost-update)

[6.2 HOW DO YOU TEST FOR LOST UPDATES
[7](#how-do-you-test-for-lost-updates)](#how-do-you-test-for-lost-updates)

[6.3 FOLLOW A RISK BASED APPROACH
[8](#follow-a-risk-based-approach)](#follow-a-risk-based-approach)

[6.4 CONCURRENCY CONTROLS
[9](#concurrency-controls)](#concurrency-controls)

[6.5 locking [9](#locking)](#locking)

[6.6 no locking, but validation checks
[9](#no-locking-but-validation-checks)](#no-locking-but-validation-checks)

[6.7 NO CONCURRENCY CONTROLS
[10](#no-concurrency-controls)](#no-concurrency-controls)

[6.8 WRITE AND EXECUTE TESTS
[10](#write-and-execute-tests)](#write-and-execute-tests)

[6.9 EXAMPLE TEST SCRIPTS
[11](#example-test-scripts)](#example-test-scripts)

[6.10 FURTHER READING [11](#further-reading)](#further-reading)

#  PURPOSE

> To help you test for lost updates and other database concurrency bugs.
> You will learn -

-   How collaboration improves testing and why developers should also
    write test scripts.

-   How to follow our Test Framework and apply a risk-based approach.

-   Common patterns, architects and developers use to solve concurrency
    conflicts.

-   The types of tests you will need and examples of authentic test
    scripts.

# SCOPE

## IN-SCOPE

-   This guide helps you to test software and follow our Test Framework.

## OUT-OF-SCOPE

-   Post-deployment surveillance tests are not included in scope.

# ROLES & RESPONSIBILITIES

We write this for Test Analysts. But everyone has a part to play :-

-   Business analysts determine the need for concurrency in the
    requirements.

-   Architects and developers build concurrency control into the
    designs.

-   Developers and testers verify these designs beyond the user
    interface.

-   Support run surveillance scripts to continue testing after
    deployment.

-   Everyone takes part in sprint ceremonies. Because these interactions
    refine your approach, ensuring it's fit for purpose.

Only by doing this, will you have confidence to test for lost updates
and concurrency bugs.

# REFERENCES

  -----------------------------------------------------------------------
  INDEX NUMBER      DOCUMENT NAME
  ----------------- -----------------------------------------------------
  SDS-GDN-1         Software development handbook

  N/A               Test framework
  -----------------------------------------------------------------------

# HOW THIS GUIDE IS ORGANISED

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

## WHAT'S A LOST UPDATE

A lost update can occur when two or more *users* change a shared piece
of data at the same time. A *user* is a person or automated process.
Consider this hypothetical example:

1.  Dr Rick Dagless loads patient X's data onto a web form, to record
    their allergy to penicillin.

2.  Meanwhile, Dr Liz Asher also loads patient X's data. She clicks a
    checkbox to record that the patient lives alone and immediately
    saves her changes.

3.  Rick saves his changes with *lives alone* unchecked. In doing so he
    unknowingly overwrites Liz's change.

> ![Diagram Description automatically
> generated](./media/image9.png){width="5.759759405074366in"
> height="3.0192300962379703in"}

We call the action of loading and saving changes to data a
*transaction*. When the result of one transaction is dependent on the
sequence or timing of another, it's called a *concurrency conflict* or
*race condition*.

In our example, the result is the loss of a lasting record that the
patient lives alone. And this is a patient safety concern - imagine if
the checkbox indicated the need to refer the patient for urgent
treatment!

## HOW DO YOU TEST FOR LOST UPDATES

Rick and Liz call for a review into the application's safety. This leads
to a software change to prevent lost updates. How would you test it?

In a web app, you might mimic each user by opening a new browser tab.
Using Google Chrome's incognito mode for example. Or you might run the
application on two machines. How robust would these tests be?

And what if the *users* were software threads rather than people.
Triggered to send almost simultaneous database updates? You would need a
different test.

Use this guide to test such scenarios. It is a response to
recommendations found in a 2018 report.

+-----+----------------------------------------------------------------+
| ![  | **Welsh Admin Portal -- Root Cause Analysis**                  |
| Pra |                                                                |
| cti | An investigation into why some patients were not assigned to   |
| cal | waiting lists in the Welsh Patient Administration System       |
| tip | concluded that;                                                |
| s]( |                                                                |
| ./m | *'The design and implementation did not account for (or        |
| edi | handle) the potential for concurrency conflicts*...*Routine    |
| a/i | testing did not identify the issue'*                           |
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

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           RPT-231026APRIL18 -WAP Redirect RCA.docx
  information](./media/image7.png){width="0.4638888888888889in"   
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

## FOLLOW A RISK BASED APPROACH

When preparing your tests, identify when and where failure is most
likely to occur and where impact will be most severe. The system under
test will have some potential for concurrency conflicts it *must*
manage. But what else should you consider?

While **[not]{.underline}** an exhaustive list, nor a replacement for
your own expertise, this table sets out questions and tasks to consider.

+------------------------------------------+---------------------------+
| **Considerations**                       | **Tasks**                 |
+==========================================+===========================+
| **Is the code multi-threaded?**          | Ask the developers to     |
|                                          | walk you through their    |
| Most applications rely on                | stress tests              |
| multi-threading even before the          |                           |
| developer starts coding. But code that   |                           |
| creates its own threads, poses a         |                           |
| particular risk. Especially when writing |                           |
| an automated process that creates high   |                           |
| numbers of transactions.                 |                           |
+------------------------------------------+---------------------------+
| **How many *users* and *concurrent       | Ask Business Analysts to  |
| users* do you expect?**                  | walk you through the      |
|                                          | non-functional            |
| The potential for concurrency conflicts  | requirements.             |
| grows with the number of *users*,        |                           |
| particularly *concurrent* *users*.       | Make sure to record       |
|                                          | acceptance criteria in    |
|                                          | user stories,             |
|                                          | requirements              |
|                                          | specifications or the     |
|                                          | team's definition of      |
|                                          | done.                     |
+------------------------------------------+---------------------------+
| **How complicated is the approach?**     | Ask the developer or      |
|                                          | architect to walk you     |
| We call the design to handle concurrency | through the solution      |
| conflicts *concurrency control*. While   | architecture.             |
| there are common ways to approach this,  |                           |
| some are more difficult to reason about  |                           |
| and put in place.                        |                           |
+------------------------------------------+---------------------------+
| **How mature is the implementation?**    | Ask the developers to     |
|                                          | walk you through their    |
| You may have already implemented         | tests.                    |
| concurrency control. If so, there may be |                           |
| less risk of it failing for a new        | Check the team's          |
| feature. [^1]                            | *definition of done*.     |
+------------------------------------------+---------------------------+
| **How much support does the development  | Ask developers how much   |
| framework provide?**                     | bespoke code they have    |
|                                          | written and which         |
| Some frameworks provide much of the      | framework they use.       |
| heavy lifting to deal with concurrency   |                           |
| conflicts. Oracle Forms, although now    |                           |
| deprecated, is a good example. Entity    |                           |
| Framework's optimistic locking another.  |                           |
|                                          |                           |
| These frameworks are tried and tested    |                           |
| and can reduce the amount of testing     |                           |
| required.                                |                           |
+------------------------------------------+---------------------------+

## CONCURRENCY CONTROLS

The table shown below describes common approaches to concurrency
control.

+-------------+-----------------------------+--------------------------+
|             | **Pessimistic or            | **Coarse grained or Fine |
|             | Optimistic?**               | grained?**               |
+=============+=============================+==========================+
| **Locking** | *Pessimistic* - locks on    | *Coarse grained* --      |
|             | View/Edit.                  | locks the entire record. |
|             |                             |                          |
|             | *Optimistic* - Blocks on    | *Fine grained* -- locks  |
|             | save - not really a lock.   | the active field(s).     |
+-------------+-----------------------------+--------------------------+
| *           | Users may unknowingly       |                          |
| *Validation | overwrite changes with      |                          |
| checks**    | their own, but validity is  |                          |
|             | assured.                    |                          |
+-------------+-----------------------------+--------------------------+
| **No        | The specification limits    |                          |
| control**   | access to a single user per |                          |
|             | record at a time.           |                          |
+-------------+-----------------------------+--------------------------+

## locking

Locking prevents concurrency conflict, eliminating the potential for
lost updates. Locking designs take into consideration the chance of a
conflict occurring and the scope to which we should apply the lock.

### Pessimistic or Optimistic

***Pessimistic locks*** expect conflict, so they block access to one
user at a time. Whether you apply the lock on *View* or *Edit* depends
on the requirements. But other users must wait for the lock to release.

Applying *pessimistic* locking in our example means Liz must wait for
Rik to save changes before she can edit.

By contrast, ***Optimistic** **locking*** does not block access because
it does not expect a conflict to occur. But it does stop a user from
saving changes if the data has changed.

Applying this to our example, Rik is forced to reload the data (with
Liz's changes) and start again.

### Coarse or fine grained

Based on requirements, locks may apply to the entire patient record -
spanning many data entry forms. Or they may apply to a specific field or
fields[^2] - on an active part of a form for example.

Any locking strategy must also ensure data integrity. A locking strategy
that allows users to assign an invalid combination of GP and GP Practice
is still wrong!

## no locking, but validation checks

Rather than locking, applications may check updates are consistent with
existing data. Serializing database access and updating only the fields
that change is one approach.

## NO CONCURRENCY CONTROLS

Typically the system under test will need to manage concurrency
conflicts. But it may not always be necessary. Make sure to find out!

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Even if a requirements specification omits concurrency control
  tips](./media/image1.png){width="0.3937007874015748in"   it does not necessarily mean it is not needed. Encourage your
  height="0.3937007874015748in"}                           business analysts, architects and developers to record it in
                                                           their documentation!
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## WRITE AND EXECUTE TESTS

Use the table below, together with your own expertise, to determine the
types of tests you need.

+--------------+-------------------------------------------------------+
| **TEST       | **TYPE OF WORK PERFORMED**                            |
| TYPE**       |                                                       |
+==============+=======================================================+
| Functional   | Often manual tests. For example, to check locking     |
| GUI testing  | behaviour or determine what happens when a user logs  |
|              | in many times. The next page lists some authentic     |
|              | examples.                                             |
+--------------+-------------------------------------------------------+
| Functional   | Using tools like SQL Server Management Studio, to     |
| Data testing | check for accuracy as we load and save data in the    |
|              | GUI.                                                  |
|              |                                                       |
|              | For example, some tests on the next page check a      |
|              | table called *FunctionLock* to verify the lock        |
|              | requested in the user interface exists in the         |
|              | database.                                             |
|              |                                                       |
|              | Combined with functional GUI testing, functional data |
|              | testing is highly effective. But it has limitations.  |
|              | Consider the first 10 steps of [9045 Test             |
|              | Requesting](https://dev.                              |
|              | azure.com/NHS-Wales-Digital/WCP/_workitems/edit/9045) |
|              | What happens if both *User A* and *User B* choose the |
|              | same patient at the same time? Can you be sure who    |
|              | gets the lock? Both?                                  |
|              |                                                       |
|              | How do you guarantee the database commands execute    |
|              | concurrently to make sure both users are not allowed  |
|              | to lock the same patient record?                      |
|              |                                                       |
|              | For fine grained control you execute your functional  |
|              | data tests with code walk-throughs, debugging and     |
|              | unit tests.                                           |
+--------------+-------------------------------------------------------+
| Code         | Ask developers to walk you through their tests and    |
| w            | include these in your strategy and plans.             |
| alk-throughs |                                                       |
| and          |                                                       |
| debugging    |                                                       |
+--------------+-------------------------------------------------------+
| No           | The techniques above go a long way to providing       |
| n-functional | confidence. But also consider using stress tests,     |
| stress tests | particularly when writing an automated software       |
|              | process.                                              |
|              |                                                       |
|              | They need not be too involved. Developers can write   |
|              | simple tests using T-SQL -- see [FURTHER              |
|              | READING](#further-reading). Again, include them in    |
|              | your strategy and plans.                              |
+--------------+-------------------------------------------------------+
| Monitoring   | Post deployment monitoring and surveillance is beyond |
| and          | the scope of this guide. But teams should continue to |
| surveillance | test for lost updates and deadlocks after deployment. |
+--------------+-------------------------------------------------------+

## EXAMPLE TEST SCRIPTS

  ---------------------------------------------------------------------------------------------------------------------------------------------
  **ID**                                                                       **TEST CASE**
  ---------------------------------------------------------------------------- ----------------------------------------------------------------
  [9045](https://dev.azure.com/NHS-Wales-Digital/WCP/_workitems/edit/9045)     Lock 01 Test Requesting

  [9046](https://dev.azure.com/NHS-Wales-Digital/WCP/_workitems/edit/9046)     Lock 02 - Medicines

  [9047](https://dev.azure.com/NHS-Wales-Digital/WCP/_workitems/edit/9047)     Lock 03 Editing DAL

  [9667](https://dev.azure.com/NHS-Wales-Digital/WCP/_workitems/edit/9667)     Lock 04 - Referrals

  [9049](https://dev.azure.com/NHS-Wales-Digital/WCP/_workitems/edit/9049)     Lock 05 - Accessing and editing the orbeon forms from external
                                                                               applications

  [10486](https://dev.azure.com/NHS-Wales-Digital/WCP/_workitems/edit/10486)   Lock 06 - User having multiple sessions of WCP using different
                                                                               machines

  [16647](https://dev.azure.com/NHS-Wales-Digital/WCP/_workitems/edit/16647)   Lock 07 - Multiple Users Accessing Various Patient Records
                                                                               Simultaneously

  [35763](https://dev.azure.com/NHS-Wales-Digital/WCP/_workitems?id=35763)     Lock 08 - User tries to open multiple WCP sessions on same
                                                                               machine

  [64131](https://dev.azure.com/NHS-Wales-Digital/WCP/_workitems/edit/64131)   Lock 09 - Radiology Test Requesting

  [78270](https://dev.azure.com/NHS-Wales-Digital/WCP/_workitems/edit/78270)   GENERIC - Neonatal Details Screen - Record locking test case

  [83414](https://dev.azure.com/NHS-Wales-Digital/WCP/_workitems?id=83414)     DM+12c: Child Consents Screen - locking test
  ---------------------------------------------------------------------------------------------------------------------------------------------

## FURTHER READING

Defensive Database Programming with SQL Server, Chapter 10: **Alex
Kuznetsov, Simple Talk Publishing (2010)**

Patterns of Enterprise Application Architecture, Chapter 5: **Martin
Fowler**, **Addison-Wesley (2002)**

[^1]: For example, you may follow the *implicit lock pattern,* making it
    easier to add locks to new features.

[^2]: Although locking at field level is unlikely to be practical for
    Pessimistic locking.
