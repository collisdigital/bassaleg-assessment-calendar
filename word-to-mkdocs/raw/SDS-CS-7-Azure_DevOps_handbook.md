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

+--------------------------------------+-------+----------------------+
| APPROVAL / SCRUTINY ROUTE:           |       |                      |
|                                      |       |                      |
| Person/Committee/Group who have      |       |                      |
| received or considered this paper    |       |                      |
+======================================+=======+======================+
| COMMITTEE OR GROUP                   | DATE  | OUTCOME              |
+--------------------------------------+-------+----------------------+
| Lead Software Developers' Group      | 14/   | Approved             |
|                                      | 01/25 |                      |
+--------------------------------------+-------+----------------------+
| Technical Design Assurance Group     | 14/   | Approved             |
|                                      | 01/25 |                      |
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

[3 REFERENCES [5](#references)](#references)

[4 CONVENTIONS [5](#conventions)](#conventions)

[5 THE NEED FOR GUIDANCE
[5](#the-need-for-guidance)](#the-need-for-guidance)

[6 STANDARDS [6](#standards)](#standards)

[6.1 AZURE DEVOPS BASICS
[6](#azure-devops-basics)](#azure-devops-basics)

[6.2 JOINING AN EXISTING PROJECT
[8](#joining-an-existing-project)](#joining-an-existing-project)

[6.3 CREATING A NEW PROJECT
[10](#creating-a-new-project)](#creating-a-new-project)

[6.4 ADDING USERS AND TEAMS
[11](#adding-users-and-teams)](#adding-users-and-teams)

[6.5 PLANNING AND TRACKING WORK WITH AZURE BOARDS
[12](#planning-and-tracking-work-with-azure-boards)](#planning-and-tracking-work-with-azure-boards)

[6.6 MANAGING SOURCE CODE WITH AZURE REPOS
[16](#managing-source-code-with-azure-repos)](#managing-source-code-with-azure-repos)

[6.7 AUTOMATING BUILDS AND DEPLOYMENTS WITH AZURE PIPELINES
[18](#automating-builds-and-deployments-with-azure-pipelines)](#automating-builds-and-deployments-with-azure-pipelines)

[6.8 CONFIGURING AGENTS FOR AZURE PIPELINES
[20](#configuring-agents-for-azure-pipelines)](#configuring-agents-for-azure-pipelines)

[6.9 SHARING CODE WITH AZURE ARTIFACTS
[22](#sharing-code-with-azure-artifacts)](#sharing-code-with-azure-artifacts)

[6.10 DEFINING AND RUNNING TEST CASES WITH AZURE TEST PLANS
[25](#defining-and-running-test-cases-with-azure-test-plans)](#defining-and-running-test-cases-with-azure-test-plans)

[6.11 USING WIKIS [25](#using-wikis)](#using-wikis)

[6.12 CREATING AND MANAGING DASHBOARDS
[26](#creating-and-managing-dashboards)](#creating-and-managing-dashboards)

[6.13 MANAGING USER SETTINGS
[26](#managing-user-settings)](#managing-user-settings)

[6.14 PROJECT HOUSEKEEPING TASKS
[27](#project-housekeeping-tasks)](#project-housekeeping-tasks)

[6.15 SECURING YOUR PROJECTS
[27](#securing-your-projects)](#securing-your-projects)

[6.16 MANAGING COSTS [27](#managing-costs)](#managing-costs)

[6.17 SUPPORT AND TROUBLESHOOTING
[28](#support-and-troubleshooting)](#support-and-troubleshooting)

[6.18 ENABLING GITHUB ADVANCED SECURITY
[29](#enabling-github-advanced-security)](#enabling-github-advanced-security)

[6.19 CONNECTING DEFENDER FOR CLOUD DEVOPS
[29](#connecting-defender-for-cloud-devops)](#connecting-defender-for-cloud-devops)

[6.20 USING AZURE DEVOPS EXTENSIONS
[30](#using-azure-devops-extensions)](#using-azure-devops-extensions)

[6.21 DATA PRIVACY AND AVAILABILITY
[30](#data-privacy-and-availability)](#data-privacy-and-availability)

[6.22 ESSENTIAL GOOD PRACTICE CHECKLIST
[31](#essential-good-practice-checklist)](#essential-good-practice-checklist)

#  PURPOSE

This opinionated guide explains how to use Azure DevOps to manage
software projects. If you're new to Azure DevOps or DevOps in general,
start by reading the Ebook -- 'What is DevOps?'

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [What Is DevOps? - Azure DevOps Succinctly Ebook \|
  information](./media/image1.png){width="0.4638888888888889in"   Syncfusion](https://www.syncfusion.com/succinctly-free-ebooks/azure-devops-succinctly/what-is-devops)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -------------------------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

And for in-depth training use:

+------+---------------------------------------------------------------+
| !    | [Get started with Azure DevOps learning path - Training \|    |
| [Fur | Microsoft                                                     |
| ther | Learn](https://learn.micr                                     |
| rea  | osoft.com/en-gb/training/paths/evolve-your-devops-practices/) |
| ding |                                                               |
| and  | [Build applications with Azure DevOps learning path -         |
| i    | Training \| Microsoft                                         |
| nfor | Learn](https://learn.microsoft.co                             |
| mati | m/en-gb/training/paths/build-applications-with-azure-devops/) |
| on]( |                                                               |
| ./me | [Deploy applications with Azure DevOps learning path -        |
| dia/ | Training \| Microsoft                                         |
| imag | Learn](https://learn.microsoft.com                            |
| e1.p | /en-gb/training/paths/deploy-applications-with-azure-devops/) |
| ng){ |                                                               |
| widt | [Define and implement continuous integration - Training \|    |
| h="0 | Microsoft                                                     |
| .463 | Learn](https://learn.microsoft.com/en-gb/tra                  |
| 8888 | ining/paths/az-400-define-implement-continuous-integration/?n |
| 8888 | s-enrollment-type=Collection&ns-enrollment-id=8x18srwn4p8y4g) |
| 8888 |                                                               |
| 9in" | [AZ-400: Design and implement a dependency management         |
| he   | strategy - Training \| Microsoft                              |
| ight | Learn](https://learn.microsoft.com/en-gb/training/pa          |
| ="0. | ths/az-400-design-implement-dependency-management-strategy/?n |
| 4638 | s-enrollment-type=Collection&ns-enrollment-id=8x18srwn4p8y4g) |
| 8888 |                                                               |
| 8888 | [AZ-400: Design and implement a release strategy - Training   |
| 8889 | \| Microsoft                                                  |
| in"} | Learn](https://learn.microsoft.com/en                         |
|      | -gb/training/paths/az-400-design-implement-release-strategy/) |
|      |                                                               |
|      | [AZ-400: Implement CI with Azure Pipelines and GitHub         |
|      | Actions - Training \| Microsoft                               |
|      | Learn](https://learn.microsoft.com/en-gb/traini               |
|      | ng/paths/az-400-implement-ci-azure-pipelines-github-actions/) |
|      |                                                               |
|      | [How Microsoft develops with DevOps - Azure DevOps \|         |
|      | Microsoft                                                     |
|      | Learn](https://learn.micr                                     |
|      | osoft.com/en-gb/devops/develop/how-microsoft-develops-devops) |
+======+===============================================================+
+------+---------------------------------------------------------------+

# SCOPE

## IN-SCOPE

-   Good practices for using Azure DevOps core and advanced features.

-   Recommended conventions and naming standards.

-   [Good practice](#essential-good-practice-checklist) checklist.

## OUT-OF-SCOPE

-   Creating and configuring a new Azure DevOps organisation.

-   Adding external users to Azure DevOps projects and teams.

-   Integrating third-party software.

-   Foundational DevOps topics, such as branching strategies, continuous
    integration (CI) and continuous delivery (CD).

-   This guide offers links to detailed resources on Microsoft Learn
    rather than provide step-by-step instructions.

# REFERENCES

  -----------------------------------------------------------------------
  INDEX NUMBER      DOCUMENT NAME
  ----------------- -----------------------------------------------------
  SDS-GDN-1         Software development handbook

  SDS-GDN-4         How to request and manage software subscriptions

  SDS-CS-1          Using source control

  SDS-CS-4          RESTful API design and build standards

  SDS-CS-5          How to organise your software solution

  SDS-CS-6          General coding standards
  -----------------------------------------------------------------------

# CONVENTIONS

The key words \"**MUST**\", \"**MUST NOT**\", \"**REQUIRED**\",
\"**SHALL**\", \"**SHALL NOT**\", \"**SHOULD**\", \"**SHOULD**
**NOT**\", \"**RECOMMENDED**\", \"**MAY**\", and \"**OPTIONAL**\" in
this document are to be interpreted as described in [RFC
2119](https://www.ietf.org/rfc/rfc2119.txt).

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Practical tips
  tips](./media/image3.png){width="0.3937007874015748in"   
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            Examples of good practice...
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------
  ![Example of practices to                                    ...and practices to avoid
  avoid](./media/image7.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  -----------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           Links to further guides, information and work instructions. If
  information](./media/image1.png){width="0.4638888888888889in"   a hyperlink is missing, search for the document in our Document
  height="0.4638888888888889in"}                                  Management System.
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

# THE NEED FOR GUIDANCE

We use Azure DevOps to manage thousands of tasks, performed daily by
hundreds of staff. Following good practice is essential to ensure
consistent use across the organisation.

This standard is designed to help you plan, build and release software
in a way that enables seamless coordination across teams and boundaries.

# STANDARDS

These standards are organised into actionable steps, starting with
essential tasks and advancing to complex configurations such as [GitHub
Advanced Security](#enabling-github-advanced-security). But we begin by
introducing some basic concepts that will be useful throughout.

## AZURE DEVOPS BASICS

### CORE CONCEPTS AND TERMINOLOGY

  ----------------------------------------------------------------------------
  **Concept**        **Description**
  ------------------ ---------------------------------------------------------
  **Organisation**   The top-level container, representing a server instance.
                     Each organisation has its own configuration and owner.

  **Project**        A unit within an organisation that includes repositories,
                     planning tools, and Continuous Integration (CI) &
                     Continuous Delivery (CD) capabilities.

  **Team**           A subset of a project, enabling smaller groups to work on
                     specific features or components.

  **Access Levels**  These define the available features to a user, There are
                     three access levels: *Stakeholder*, *Basic* and *Basic +
                     Test Plans*.

  **Access           These control specific actions (e.g. read, write, delete)
  Permissions**      on resources within projects.

  **Security         These group users to manage permissions and apply
  Groups**           policies consistently.
  ----------------------------------------------------------------------------

### KEY FEATURES

  -------------------------------------------------------------------------
  **Concept**     **FUNCTION**
  --------------- ---------------------------------------------------------
  **Boards**      Track and prioritise work using tasks, sprints, and
                  backlogs.

  **Repos**       Manage and store source code in Git repositories.

  **Pipelines**   Automate code build, test and deployment processes.

  **Artifacts**   Store build outputs, like compiled binaries and packages.

  **Test Plans**  Define and execute test cases to ensure code quality.
  -------------------------------------------------------------------------

### COMMON SECURITY GROUPS

Azure DevOps organises user permissions into roles. Use the table below
to determine which role best suits your needs.

+------------+---------------------------------------------------------+
| **Role**   | **Description**                                         |
+============+=========================================================+
| **Con      | Daily users of Azure DevOps. Key tasks:                 |
| tributor** |                                                         |
|            | -   Cloning, pushing, and pulling code in repositories. |
|            |                                                         |
|            | -   Creating and managing work items, tasks, and bugs.  |
|            |                                                         |
|            | -   Participating in sprints and board activities.      |
|            |                                                         |
|            | -   Triggering and monitoring CI/CD pipelines.          |
+------------+---------------------------------------------------------+
| **Project  | Administers specific projects. Key responsibilities:    |
| Admin      |                                                         |
| istrator** | -   Assigning user permissions and configuring project  |
|            |     settings.                                           |
|            |                                                         |
|            | -   Setting up repositories, boards, and sprint         |
|            |     iterations.                                         |
|            |                                                         |
|            | -   Creating and maintaining CI/CD pipelines and        |
|            |     housekeeping tasks.                                 |
+------------+---------------------------------------------------------+
| **Project  | Oversees multiple projects. Key tasks:                  |
| Collection |                                                         |
| Admin      | -   Managing shared resources like package feeds and    |
| istrator** |     deployment agents.                                  |
|            |                                                         |
|            | -   Setting up pipelines that span projects.            |
+------------+---------------------------------------------------------+
| **Or       | Global administrator for the organisation.              |
| ganisation | Responsibilities include:                               |
| Owner**    |                                                         |
|            | -   Creating projects and configuring global policies.  |
|            |                                                         |
|            | ```{=html}                                              |
|            | <!-- -->                                                |
|            | ```                                                     |
|            | -   Managing billing, subscriptions and user accounts.  |
+------------+---------------------------------------------------------+

## JOINING AN EXISTING PROJECT

Whether you're new to Azure DevOps or arranging access for others, start
with these steps:

### FIND YOUR PROJECT

First, obtain your project URL. If needed, ask a colleague for help.
Here are some common URLs:

  ------------------------------------------------------------------------------------------------------------------------------
  **PROJECT URL**                                                                              **Description**
  -------------------------------------------------------------------------------------------- ---------------------------------
  <https://dev.azure.com/NHS-Wales-Digital/WCP>                                                Welsh Clinical Portal

  <https://dev.azure.com/DHCW-DSPP/>                                                           NHS App

  [[https://dev.azure.com/NHS-Wales/DMTP]{.underline}](https://dev.azure.com/NHS-Wales/DMTP)   Digital Medicines Transformation
                                                                                               Portfolio

  <https://dev.azure.com/NHS-Wales-CoE/>                                                       M365 Centre of Excellence
  ------------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              If you need to begin a project, see [Creating a
  tips](./media/image3.png){width="0.3937007874015748in"   Project](#creating-a-new-project).
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Connect to your organisation - Azure DevOps Services \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/organizations/accounts/organization-management?view=azure-devops#connect-to-your-organization)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### CHECK YOU HAVE THE RIGHT ACCESS LEVEL

Next, check your *Access level.* *Access levels* control which **Azure
DevOps** features you can use. If you don't have the right level you may
be blocked from using Repos, Pipelines or Test Plans. Contact the
*Organisation Owner* for more help.

  -----------------------------------------------------------------------
  **ACCESS LEVEL**   **FEATURES**
  ------------------ ----------------------------------------------------
  **Stakeholder**    Limited features for non-dev roles: create and view
                     work items, basic project management; no access to
                     Repos or Pipelines.

  **Basic**          Full access to Repos, Pipelines and Artifacts.

  **Basic + Test     All Basic features **plus** Azure Test Plans (Test
  Plans**            planning, execution and reporting).
  -----------------------------------------------------------------------

+-----+----------------------------------------------------------------+
| ![  | **Subscriptions that grant access automatically**              |
| Pra |                                                                |
| cti | Visual Studio Professional with GitHub Enterprise → **Basic**. |
| cal |                                                                |
| tip | GitHub Enterprise Cloud → **Basic.**                           |
| s]( |                                                                |
| ./m | Visual Studio Test Professional → **Basic + Test Plans**.      |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
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
| !    | SDS-GDN-4 How to request and manage software subscriptions    |
| [Fur |                                                               |
| ther | [Find or look up the organisation owner - Azure DevOps \|     |
| rea  | Microsoft                                                     |
| ding | Learn](https://learn.microsoft.com/en-gb/azure/devops/organiz |
| and  | ations/security/look-up-organization-owner?view=azure-devops) |
| i    |                                                               |
| nfor | [About access levels - Azure DevOps \| Microsoft              |
| mati | Learn](https://learn.microsoft.com/en-gb/azure/d              |
| on]( | evops/organizations/security/access-levels?view=azure-devops) |
| ./me |                                                               |
| dia/ | [Azure DevOps Basic usage included with GitHub Enterprise -   |
| imag | Azure DevOps                                                  |
| e1.p | Blog](https://devblogs.microsoft.com/devo                     |
| ng){ | ps/azure-devops-basic-usage-included-with-github-enterprise/) |
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

### VERIFY ACCESS

Finally, make sure you have the correct *Access permissions. Access
permissions* control what you can do in a project. Ask a Project
Administrator to update your access if needed.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              If you click the project URL without the right access, you may
  tips](./media/image3.png){width="0.3937007874015748in"   be prompted to request access. Your request will be sent to the
  height="0.3937007874015748in"}                           project administrator.
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | [Find a project administrator - Azure DevOps \| Microsoft     |
| [Fur | Learn](https://learn.m                                        |
| ther | icrosoft.com/en-gb/azure/devops/organizations/security/look-u |
| rea  | p-project-administrators?view=azure-devops&tabs=preview-page) |
| ding |                                                               |
| and  | [About permissions and security groups - Azure DevOps \|      |
| i    | Microsoft                                                     |
| nfor | Learn](ht                                                     |
| mati | tps://learn.microsoft.com/en-gb/azure/devops/organizations/se |
| on]( | curity/about-permissions?view=azure-devops&tabs=preview-page) |
| ./me |                                                               |
| dia/ | [Troubleshoot access, permission issues - Azure DevOps \|     |
| imag | Microsoft                                                     |
| e1.p | Learn](https://learn.microsoft.com/en-gb/azure/devops/organ   |
| ng){ | izations/security/troubleshoot-permissions?view=azure-devops) |
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

### ADDITIONAL STEPS

If you're committing code to Azure Repos you may need to take some extra
steps. See [Support & Troubleshooting](#support-and-troubleshooting) for
more details.

## CREATING A NEW PROJECT

### REQUEST A NEW PROJECT

Sometimes you may need to create a new project. Do so by making a
request to the Organisation Owner. When creating a new project the
following project property settings are **RECOMMENDED**:

  -----------------------------------------------------------------------
  **PROPERTY**       **VALUE**
  ------------------ ----------------------------------------------------
  **project name:**  Use the project acronym for shorter URLs. Avoid
                     spaces.

  **description:**   Provide a clear, searchable project description.

  **visibility:**    Private

  **version          Git
  control:**         

  **work item        Agile
  process:**         
  -----------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Find or look up the organisation owner - Azure DevOps \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/organizations/security/look-up-organization-owner?view=azure-devops)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### ASSIGN PROJECT ADMINS

Every project **SHOULD** have **two** project administrators. A project
administrator manages access, configures project settings and customises
boards for teams and workflows.

+-----+----------------------------------------------------------------+
| ![  | **Project Collection Administrator**                           |
| Pra |                                                                |
| cti | Depending on your requirements, it might be more suitable to   |
| cal | also assign *Project Collection Administrators*. Speak to the  |
| tip | Organisation Owner for more help.                              |
| s]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
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

[]{#_REMOVE_UNUSED_FEATURES .anchor}

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Find a project administrator - Azure DevOps \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/organizations/security/look-up-project-administrators?view=azure-devops&tabs=preview-page)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### REMOVE UNUSED FEATURES

The Project Administrator **SHOULD** disable any features or services
that are not required.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [[Turn a service on or off - Azure DevOps \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn]{.underline}](https://learn.microsoft.com/en-gb/azure/devops/organizations/settings/set-services?view=azure-devops)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### CHOOSE A PROJECT PROFILE IMAGE

Use a suitable DHCW sub brand logo If you intend to change the *Project
Profile Image.*

### DISABLE TELEMETRY AND DATA ACCESS

You **SHOULD** disable [extensions](#using-azure-devops-extensions) that
send telemetry or access repositories automatically in project settings
before using the project.

## ADDING USERS AND TEAMS

### ADD USERS

When adding users, you **MUST** grant only the minimum access level
necessary. Use built-in [security groups](#common-security-groups) for
easier management, avoiding broad groups unless essential.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Add users or groups to a team or project - Azure DevOps \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/organizations/security/add-users-team-project?view=azure-devops&tabs=preview-page)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### ADD ADDITIONAL TEAMS

Each project has a default team, "*\<Project Name\>* Team". You can add
teams for specific areas or products, each with its own backlogs,
sprints, and dashboards.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              When creating a team, use a clear, descriptive name that
  tips](./media/image3.png){width="0.3937007874015748in"   reflects its focus (e.g. feature or product), Avoid generic
  height="0.3937007874015748in"}                           terms like *"Developers".*
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            **Phoenix Portal Team:** Front-end UI and integration with
  practice](./media/image5.png){width="0.1968503937007874in"   back-end APIs.
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------
  ![Example of good                                            **Titan Mobile Team:** Mobile app and integration with back-end
  practice](./media/image5.png){width="0.1968503937007874in"   APIs.
  height="0.1968503937007874in"}                               

  ![Example of good                                            **Atlas Immunisations API Team:** Backend Immunisation APIs.
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  ![Example of good                                            **Helios Appointments Team**: Immunisations appointment
  practice](./media/image5.png){width="0.1968503937007874in"   scheduler microservice.
  height="0.1968503937007874in"}                               

  ![Example of practices to                                    **Developers**
  avoid](./media/image7.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               
  -----------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Create or add a team - Azure DevOps \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/organizations/settings/add-teams?view=azure-devops&tabs=preview-page)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### CONFIGURE AREA PATHS FOR TEAMS 

Create a new area path for each new Azure DevOps team. This keeps
backlogs, boards, and queries specific to each team while allowing
access to the shared backlog.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Define area paths and assign to a team - Azure Boards \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/organizations/settings/set-area-paths?view=azure-devops&tabs=browser)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## PLANNING AND TRACKING WORK WITH AZURE BOARDS

Following the practices described in this section aligns with *SDS-GDN-1
Software development handbook,* helping you deliver incremental changes
in time-boxed sprints.

+------+---------------------------------------------------------------+
| !    | SDS-GDN-1 Software development handbook                       |
| [Fur |                                                               |
| ther | [Agile Plan and Portfolio Management with Azure Boards -      |
| rea  | Training \| Microsoft                                         |
| ding | Learn](https://learn.mic                                      |
| and  | rosoft.com/en-gb/training/modules/plan-agile-github-projects- |
| i    | azure-boards/12-agile-plan-portfolio-management-azure-boards) |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e1.p |                                                               |
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

### BACKLOG NAMING CONVENTIONS

The backlog is a list of work to complete*.* Prioritise work items based
on business value, using parent-child relationships to maintain a clear
hierarchy.

Name items consistently to minimise misunderstandings and support
automatic release notes generation. The following conventions are
**RECOMMENDED**:

  ------------------------------------------------------------------------
  **WORK ITEM**    **TITLE CONVENTION**        **examples**
  ---------------- --------------------------- ---------------------------
  **Epic**         Use action-oriented verbs   *Redesign the
                   to describe a high-level    Authentication Flow for the
                   business initiative.        NHS Wales Patient Portal.*

  **FEATURE**      Use outcome-driven language *Implement Multi-Factor
                   to describe smaller,        Authentication for the NHS
                   deliverable functionality.  Wales Patient Portal
                                               login.*

  **USER STORY**   \"As a \[persona\], I want  *As a user, I want to enter
                   \[something\] so that       the SMS code I received so
                   \[some reason\]\"           I can complete the
                                               authentication.*

  **TASK**         Use action-oriented verbs   *Design UI for SMS code
                   to describe work needed for entry.*
                   a user story.               

  **BUG**          Focus on user impact and    *Username field doesn't
                   expected behaviour.         accept input after
                                               clicking, preventing
                                               login.*

  **ISSUE**        Clearly describe a problem  *Need approval for UI
                   or blocker.                 colours.*

  **TEST PLAN**    High-level testing          *Validate Multi-Factor
                   objectives, scope and       Authentication
                   activities.                 functionality, including
                                               SMS code input and error
                                               handling.*

  **TEST CASE**    A specific scenario to      *Verify SMS code input
                   test.                       field.*
  ------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | [Use backlogs to manage projects - Azure Boards \| Microsoft  |
| [Fur | Learn](https://learn.microsoft.com/en-gb/azur                 |
| ther | e/devops/boards/backlogs/backlogs-overview?view=azure-devops) |
| rea  |                                                               |
| ding | [Create your product backlog in Azure Boards - Azure Boards   |
| and  | \| Microsoft                                                  |
| i    | Learn                                                         |
| nfor | ](https://learn.microsoft.com/en-gb/azure/devops/boards/backl |
| mati | ogs/create-your-backlog?view=azure-devops&tabs=agile-process) |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e1.p |                                                               |
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

### REFINE USER STORIES

Capture requirements in User Stories. When doing so:

-   Provide a concise description from the user's perspective.

-   Include clear acceptance criteria using Gherkin syntax to define
    'done.'

  --------------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            ![An example User
  practice](./media/image5.png){width="0.1968503937007874in"   Story](./media/image9.png){width="5.751430446194226in"
  height="0.1968503937007874in"}                               height="4.634977034120735in"}
  ------------------------------------------------------------ -------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Manage requirements, Agile - Azure DevOps \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/cross-service/manage-requirements?view=azure-devops&tabs=agile-process)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### LINK SERVICE REQUESTS

For operational service requests, prefix a work item's title with the
request ID and add a link to the request in the '*All Links'* tab.

Alternatively consider using a custom process template with a *Change
Reference* field. Contact your Organisation Owner for details.

### MATCH WORK TO THE RIGHT AZURE BOARD

Use *Kanban Boards* (Boards \> Boards) for continuous or unplanned work
and *Task Boards* (Boards \> Sprints) for sprint tracking.

Use tags, custom fields or queries to simplify navigation and reduce
backlog clutter.

+------+---------------------------------------------------------------+
| !    | [Plan and track work in Azure Boards - Azure Boards \|        |
| [Fur | Microsoft                                                     |
| ther | Lear                                                          |
| rea  | n](https://learn.microsoft.com/en-gb/azure/devops/boards/get- |
| ding | started/plan-track-work?view=azure-devops&tabs=agile-process) |
| and  |                                                               |
| i    | [Manage columns on your board - Azure Boards \| Microsoft     |
| nfor | Learn](https://learn.microsoft.com/en-gb/a                    |
| mati | zure/devops/boards/boards/add-columns?view=azure-devops&tabs= |
| on]( | process-administrator#add-the-definition-of-done-to-a-column) |
| ./me |                                                               |
| dia/ | [Use your board - Azure Boards \| Microsoft                   |
| imag | Learn](https://learn.microsoft.com/en-gb/az                   |
| e1.p | ure/devops/boards/boards/kanban-quickstart?view=azure-devops) |
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

### BOARDS NAMING & STYLE CONVENTIONS

Use these conventions to maintain consistency in how work items are
represented:

+----------------+--------------------------+--------------------------+
| **COMPONENT**  | **CONVENTION / STYLE**   | **examples**             |
+================+==========================+==========================+
| **TAGS**       | *Use colours to indicate | *Blocked* (Red),         |
|                | meaning.*                |                          |
|                |                          | *External Dependency*    |
|                |                          | (Blue),                  |
|                |                          |                          |
|                |                          | *Discovery* (Yellow)     |
+----------------+--------------------------+--------------------------+
| **CARD STYLE** | Priority = 1: Highlight  | *Priority=1 (*Orange*)*  |
|                | high-priority items in   |                          |
|                | Orange.                  |                          |
+----------------+--------------------------+--------------------------+
| **COLUMN       | Standardise naming       | New, Active, Closed,     |
| NAMING**       | across boards.           | Test                     |
+----------------+--------------------------+--------------------------+

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Customize cards on a board - Azure Boards \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/boards/boards/customize-cards?view=azure-devops)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- --------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### IMPLEMENT YOUR DEFINITION OF DONE

Define shared criteria for each Board column and record it in the
\'*Definition of Done*\' field.

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            ![An example Definition of
  practice](./media/image5.png){width="0.1968503937007874in"   Done](./media/image10.png){width="2.800074365704287in"
  height="0.1968503937007874in"}                               height="3.6546423884514434in"}
  ------------------------------------------------------------ ----------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Add Definition of Done to a column - Azure Boards \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/boards/boards/add-columns?view=azure-devops#add-definition-of-done-to-a-column)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### SET-UP DELIVERY PLANS (OPTIONAL)

Delivery Plans track work across projects but are **NOT**
**RECOMMENDED** if using tools like Float.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Review team delivery plans in Azure Boards - Azure Boards \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/boards/plans/review-team-plans?view=azure-devops)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### DRIVE DEVELOPMENT FROM WORK ITEMS

Link work items to commits, branches, builds, and releases for better
traceability and alignment between code and tasks. See [Link Work items
to Builds](#link-work-items-to-builds) for more details.

### TRACK PROGRESS OF BUILDS AND RELEASES

Add status badges to a repos' README file to indicate code stability.

## MANAGING SOURCE CODE WITH AZURE REPOS

Following the practices in this section aligns with *SDS-CS-1 Using
Source Control*, improving traceability, linking work items to code
changes, and enhancing code quality.

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           SDS-CS-1 Using Source Control
  information](./media/image1.png){width="0.4638888888888889in"   
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

### HOW DO YOU BRANCH AND RELEASE?

You have freedom to choose your branching and release strategies, but
you **SHOULD** follow these key practices to maintain simplicity and
consistency:

-   **Use feature branches**: Develop new features and fix bugs in
    > dedicated branches.

-   **Merge through pull requests (PRs)**: Integrate changes into the
    > main branch using PRs.

-   **Keep the main branch clean**: Ensure the main branch is functional
    > & up to date.

-   **Git Tagging:** Tag the release commit to ensure traceability and
    > version identification.

### RECOMMENDED NAMING CONVENTIONS

Name Git repositories in lowercase with hyphens. Prefixing with the
Azure DevOps project or team name is **RECOMMENDED** but not required.

+----------------+--------------------------+--------------------------+
| **COMPONENT**  | **NAMING CONVENTION**    | **examples**             |
+================+==========================+==========================+
| **REPOSITORY** | Lowercase,               | wis-api                  |
|                | hyphens-separated\       |                          |
|                | \<pr                     | welshpas-web             |
|                | oject-name\>:\<purpose\> |                          |
|                |                          | wcp-integration-services |
+----------------+--------------------------+--------------------------+
| **TAG**        | \<Maj                    | 2.0.0                    |
|                | or\>.\<Minor\>.\<Patch\> |                          |
+----------------+--------------------------+--------------------------+

Use this convention for branch names. You may not need them all, it
depends on your strategy.

  -----------------------------------------------------------------------------------------------------
  **BRANCH TYPE**  **NAMING CONVENTION**                             **examples**
  ---------------- ------------------------------------------------- ----------------------------------
  **MAIN**         'main'                                            main

  **DEVELOP**      'develop'                                         develop

  **FEATURE**      feature/*\<work-item-number\>-\<feature-name\>*   feature/450447-add-cors-policy

  **RELEASE**      release/*\<version-number\>*                      release/2.0.0

  **BUGFIX**       bugfix/*\<issue-number\>-\<description\>*         bugfix/46627-fix-SMS-Input-Error

  **HOTFIX**       hotfix/*\<issue-number\>-\<description\>*         hotfix/67891-critical-patch
  -----------------------------------------------------------------------------------------------------

+-----+----------------------------------------------------------------+
| ![  | -   Always link branches to corresponding work items,          |
| Pra |                                                                |
| cti | -   Delete redundant feature branches.                         |
| cal |                                                                |
| tip |                                                                |
| s]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
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

### CONFIGURE REPOSITORY SETTINGS FOR COMMIT LINKING

You **SHOULD** ensure these settings are applied across all branches:

-   **Enable Commit Mention Linking:** Automatically link commits to
    work items by including the work item ID (e.g., #123) in the commit
    message.

-   **Ensure Work Item Resolution:** Automatically update work item
    status based on commit actions.

### CONFIGURE REPOSITORY POLICIES FOR EMAIL VALIDATION

-   **Commit author email validation**: Block pushes from emails not
    matching .\*@wales\\.nhs\\.uk\$

### CONFIGURE BRANCH POLICIES

Enable these settings on main and release branches to support effective
branching and release:

-   **Require a minimum number of reviewers:** Ensure pull requests are
    subject to code review.

-   **Require linked work items:** Ensure pull requests are linked to
    work items.

-   **Require comments resolution:** Address comments before merging
    pull requests.

```{=html}
<!-- -->
```
-   **Enable Build Validation**: Trigger a build pipeline on pull
    requests to validate code quality.

-   **Add a Code Coverage Status Check:** Ensure coverage targets are
    met before merging.

-   **Set Coverage Thresholds:** Define differential (diff) thresholds
    in *azurepipelines-coverage.yml* or *.runsettings* to match your
    *Definition of Done*.

-   **Address Insufficient Coverage:** Use the \"*Require comments
    resolution*\" policy to address any insufficient coverage before
    merging.

-   **Review Coverage Thresholds**: Regularly review thresholds to meet
    quality standards.

+-----+----------------------------------------------------------------+
| ![  | **Don't obsess over Code Coverage!**                           |
| Pra |                                                                |
| cti | Use it as a guide but focus on meaningful tests that ensure    |
| cal | your code works as expected.                                   |
| tip |                                                                |
| s]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
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

+-----+----------------------------------------------------------------+
| ![  | **Set Up Pipelines for Validation and Coverage**               |
| Pra |                                                                |
| cti | Configure a build pipeline for validation and code coverage    |
| cal | checks, In the next section, we'll show you how to set up      |
| tip | pipelines for testing & deployment.                            |
| s]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
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

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Set Git repository settings - Azure Repos \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/repos/git/repository-settings?view=azure-devops&tabs=browser)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## AUTOMATING BUILDS AND DEPLOYMENTS WITH AZURE PIPELINES

You **SHOULD** use Azure Pipelines to automate build, test, and
deployment processes, enabling Continuous Integration (CI) & Continuous
Deployment (CD).

### HOW DO YOU ORGANISE YOUR CODE?

Follow *SDS-CS-5: How to Organise your Software Solution* to maintain a
clean, modular codebase and keep build and deployment scripts separate
to reduce clutter.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Place pipeline YAML files in the build/scripts/ folder unless
  tips](./media/image3.png){width="0.3937007874015748in"   operational needs require a different location.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           SDS-CS-5 How to Organise your Software Solution
  information](./media/image1.png){width="0.4638888888888889in"   
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

### CORE PIPELINE CHARACTERISTICS

Follow [**Microsoft's baseline
architecture**](https://learn.microsoft.com/en-gb/azure/devops/pipelines/architectures/devops-pipelines-baseline-architecture?view=azure-devops)
to build repeatable, scalable Azure pipelines.

Key considerations:

-   **Use YAML:** Prefer YAML pipelines for version control and sharing
    configurations.

-   **Modular Design:** Create reusable templates & separate stages
    (e.g. Build, Test, Deploy).

-   **Gradual Deployment:** Use progressive strategies (e.g. DevTest \>
    UAT \> Prod).

-   **Integrate Security:** Include code analysis and vulnerability
    scanning.

-   **Automated Testing:** Run automated tests with coverage reporting.

-   **Approvals**

    -   Pre-approval checks are **RECOMMENDED** for DevTest and UAT.

    -   Pre-approval checks **SHOULD** be in place before deploying to
        Prod**.**

-   **Secure Secrets:** Use tools like Azure Key Vault to manage
    secrets.

-   **Store Artifacts:** Retain build outputs for traceability.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Not all pipelines need every feature; apply those relevant to
  tips](./media/image3.png){width="0.3937007874015748in"   the pipeline\'s purpose.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | [Azure Pipelines baseline architecture - Azure Pipelines \|   |
| [Fur | Microsoft                                                     |
| ther | Learn](https:                                                 |
| rea  | //learn.microsoft.com/en-gb/azure/devops/pipelines/architectu |
| ding | res/devops-pipelines-baseline-architecture?view=azure-devops) |
| and  |                                                               |
| i    | [Azure Pipelines documentation - Azure DevOps \| Microsoft    |
| nfor | Learn](https://learn.m                                        |
| mati | icrosoft.com/en-gb/azure/devops/pipelines/?view=azure-devops) |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e1.p |                                                               |
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

### PREFER YAML OVER CLASSIC RELEASE PIPELINES

Use YAML pipelines for improved version control, tracking, and auditing.

While Classic Release pipelines can still be useful, YAML deployment
jobs and Azure DevOps Environments are preferred for greater flexibility
and scalability.

Deployment groups may suit VM-based deployments but offer less control
than YAML.

### NAMING CONVENTIONS

+----------------+--------------------------+--------------------------+
| **COMPONENT**  | **NAMING CONVENTION**    | **example**              |
+================+==========================+==========================+
| **pipeline**   | \<repos                  | wis-api-pr               |
|                | itory-name\>-\<purpose\> |                          |
|                |                          | welshpas-web-ci          |
|                | *(purpose* = pr, ci, cd) |                          |
|                |                          | wcp                      |
|                |                          | -integration-services-cd |
+----------------+--------------------------+--------------------------+
| **Pipeline Run | \$                       | welshpa                  |
| \***           | (Build.DefinitionName)\_ | s-web-ci_main_20241203.1 |
|                |                          |                          |
| **(YAML        | \$(SourceBranchName)\_   |                          |
| name)**        |                          |                          |
|                | \$(                      |                          |
|                | Date:yyyyMMdd).\$(Rev:r) |                          |
+----------------+--------------------------+--------------------------+
| **STAGE**      | PascalCase, descriptive  | Build, Test,             |
|                |                          | DeployToProd             |
+----------------+--------------------------+--------------------------+
| **JOB**        | PascalCase, descriptive  | RunUnitTests,            |
|                |                          |                          |
|                |                          | BuildDockerImage,        |
|                |                          |                          |
|                |                          | DeployToProd             |
+----------------+--------------------------+--------------------------+
| *              | \<DevTest \| UAT \|      | DevTest, UAT, Prod       |
| *ENVIRONMENT** | PROD\>                   |                          |
+----------------+--------------------------+--------------------------+
| **DEPLOYMENT** | D                        | DeployToDevTest,         |
|                | eployTo\<E*nvironment*\> |                          |
|                |                          | DeployToUAT,             |
|                |                          |                          |
|                |                          | DeployToProd             |
+----------------+--------------------------+--------------------------+
| **VARIABLES**  | PascalCase, descriptive  | KeyVaultName             |
+----------------+--------------------------+--------------------------+
| **LIBRARY      | *Lib-\<name\>*           | Lib-ApiEndpoint          |
| VARIABLES**    |                          |                          |
+----------------+--------------------------+--------------------------+
| **LIBRARY      | *Kv-\<name\>*            | Kv-APIKey                |
| VARIABLES**    |                          |                          |
|                |                          |                          |
| **(LINKED TO   |                          |                          |
| KEY VALULT)**  |                          |                          |
+----------------+--------------------------+--------------------------+

+-----+----------------------------------------------------------------+
| ![  | Use clear, descriptive displayName values to clarify purpose   |
| Pra | and enhance readability.                                       |
| cti |                                                                |
| cal | \*When building Nuget packages, using version numbers as       |
| tip | pipeline run names is **RECOMMENDED**. See [Versioning         |
| s]( | conventions](#versioning-conventions).                         |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
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

### LINK WORK ITEMS TO BUILDS

**Automatically link work items included:** In Pipeline settings choose
to connect work items with each build result.

## CONFIGURING AGENTS FOR AZURE PIPELINES

Agents execute tasks in an Azure Pipeline and are available in two
types:

-   **Self-Hosted Agents**: Managed on your infrastructure.

-   **Microsoft-Hosted Agents**: Fully managed by Microsoft and
    available on demand.

### CHOOSE AN AGENT TYPE

Choosing the right agent type depends on your needs-- see below.

+----------------+--------------------------+--------------------------+
| **COMPONENT**  | **SELF-HOSTED**          | **MICROSOFT-HOSTED**     |
+================+==========================+==========================+
| **COST**       | Pay for VMs; build       | Pay per minute beyond    |
|                | minutes/parallel jobs    | free-tier usage.         |
|                | covered by Visual Studio |                          |
|                | Enterprise               |                          |
|                | subscriptions.           |                          |
+----------------+--------------------------+--------------------------+
| **MANAGEMENT** | Manual setup and         | Fully managed; no setup  |
|                | maintenance required.    | needed.                  |
+----------------+--------------------------+--------------------------+
| *              | Full control over tools  | Preconfigured            |
| *FLEXIBILITY** | and network              | environments; limited    |
|                | configuration.           | customisation.           |
+----------------+--------------------------+--------------------------+
| *              | Limited by VM capacity   | Scales on demand; no     |
| *SCALABILITY** | and no. of available     | infrastructure limits.   |
|                | Visual Studio Enterprise |                          |
|                | subscriptions.           |                          |
+----------------+--------------------------+--------------------------+
| **             | Restricted to DevTest VM | Available without        |
| AVAILABILITY** | uptime:                  | downtime.                |
|                |                          |                          |
|                | Mon--Fri: 7 PM--7 AM.    |                          |
|                |                          |                          |
|                | Sat & Sun: Unavailable.  |                          |
+----------------+--------------------------+--------------------------+

### OUR RECOMMENDATION

Use **Self-Hosted Agents** for cost-effective scaling with multiple
parallel jobs under our Visual Studio agreement.

Use **Microsoft-Hosted Agents** for occasional tasks or to avoid
management overheads and VM costs.

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Azure Pipelines Agents - Azure Pipelines \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/pipelines/agents/agents?view=azure-devops&tabs=yaml%2Cbrowser)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### SETTING UP A SELF-HOSTED AGENT

To configure a self-hosted agent:

-   Provision an Azure Virtual Machine.

-   Add the agent to an existing pool (create a new pool if needed).

-   Install and configure the agent software from Azure DevOps.

-   Run the agent as a service for automatic restarts.

### SECURING A SELF-HOSTED AGENT

To ensure agent security:

-   Use separate pools for different projects to reduce risk.

-   Assign a dedicated pool for production deployments.

-   Restrict access to the agent folder to authorised personnel.

-   Clean temporary files in the agent's build folder regularly.

-   Keep the agent software updated.

-   Run the agent under a service account (e.g., Network Service or
    Local Service).

-   Avoid using admin or high-privilege accounts.

### RECOMMENDED NAMING CONVENTIONS

Use clear, descriptive names for agents and pools to improve
readability.

+----------------+--------------------------+--------------------------+
| **COMPONENT**  | **NAMING CONVENTION**    | **example**              |
+================+==========================+==========================+
| **AGENT**      | \<team or project        | wis-api-self-hosted,     |
|                | name\>-\<agent type\>    | welshpas-web-ms-hosted   |
+----------------+--------------------------+--------------------------+
| **AGENT POOL** | \<team or project        | wis-api-build,           |
|                | name\>-\<purpose\>       |                          |
|                |                          | welshpas-web-deploy      |
+----------------+--------------------------+--------------------------+

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              When using [GitHub Advanced
  tips](./media/image3.png){width="0.3937007874015748in"   Security](#enabling-github-advanced-security) allow additional
  height="0.3937007874015748in"}                           URLs for the self-hosted agent to access data for *Dependency
                                                           Scanning*.
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | [Deploy an Azure Pipelines agent on Windows - Azure Pipelines |
| [Fur | \| Microsoft                                                  |
| ther | Learn](https://learn.microsoft.com/en-gb/a                    |
| rea  | zure/devops/pipelines/agents/windows-agent?view=azure-devops) |
| ding |                                                               |
| and  | [Enable TLS 1.2 on clients -- Configuration Manager \|        |
| i    | Microsoft                                                     |
| nfor | Learn](https://learn.microsoft.com/en-gb/m                    |
| mati | em/configmgr/core/plan-design/security/enable-tls-1-2-client) |
| on]( |                                                               |
| ./me | [Allowed address lists and network connections - Azure DevOps |
| dia/ | \| Microsoft                                                  |
| imag | Le                                                            |
| e1.p | arn](https://learn.microsoft.com/en-gb/azure/devops/organizat |
| ng){ | ions/security/allow-list-ip-url?view=azure-devops&tabs=IP-V4) |
| widt |                                                               |
| h="0 | [Configure GitHub Advanced Security for Azure DevOps -- Azure |
| .463 | Repos \| Microsoft                                            |
| 8888 | Learn](https://lear                                           |
| 8888 | n.microsoft.com/en-gb/azure/devops/repos/security/configure-g |
| 8888 | ithub-advanced-security-features?view=azure-devops&tabs=yaml) |
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

## SHARING CODE WITH AZURE ARTIFACTS

Azure Artifacts provide a reliable way to store, version and distribute
packages, like Nuget, across the organisation. You **SHOULD** follow
these practices when using Artifacts in your Azure DevOps workflows.

+------+---------------------------------------------------------------+
| !    | [[What is NuGet and what does it do? \| Microsoft             |
| [Fur | Learn]{.under                                                 |
| ther | line}](https://learn.microsoft.com/en-gb/nuget/what-is-nuget) |
| rea  |                                                               |
| ding | [Azure Artifacts documentation \| Microsoft                   |
| and  | Learn](https://learn.m                                        |
| i    | icrosoft.com/en-gb/azure/devops/artifacts/?view=azure-devops) |
| nfor |                                                               |
| mati | [Omit NuGet Packages in Source Control Systems\| Microsoft    |
| on]( | Learn](https://learn.microsoft.                               |
| ./me | com/en-gb/nuget/consume-packages/packages-and-source-control) |
| dia/ |                                                               |
| imag | [Project-scoped vs Organisation-scoped feeds - Azure          |
| e1.p | Artifacts \| Microsoft                                        |
| ng){ | Learn](https://learn.microsoft.                               |
| widt | com/en-gb/azure/devops/artifacts/feeds/project-scoped-feeds?v |
| h="0 | iew=azure-devops#project-scoped-vs-organization-scoped-feeds) |
| .463 |                                                               |
| 8888 | [Migrate from file shares - Azure Artifacts \| Microsoft      |
| 8888 | Learn](https://learn.microsoft.com/en-gb/azure/d              |
| 8888 | evops/artifacts/nuget/move-from-fileshares?view=azure-devops) |
| 9in" |                                                               |
| he   | [Configure pipeline permissions - Azure Artifacts \|          |
| ight | Microsoft                                                     |
| ="0. | Learn                                                         |
| 4638 | ](https://learn.microsoft.com/en-gb/azure/devops/artifacts/fe |
| 8888 | eds/feed-permissions?view=azure-devops#pipelines-permissions) |
| 8888 |                                                               |
| 8889 |                                                               |
| in"} |                                                               |
+======+===============================================================+
+------+---------------------------------------------------------------+

### CONSUMING PACKAGES

-   **Avoid Public Feeds**: Do not pull packages from public sources
    like nuget.org. Use a secondary feed, *DHCW_Global_Dependencies*,
    for shared or third-party dependencies.

-   **Minimise Duplication**: If a package is already in the
    organisation feed, do not duplicate it in your local feed. This
    saves storage costs and reduces redundancy.

-   **Keep Dependencies Updated**: Regularly check the
    *DHCW_Global_Dependencies* feed for updates to keep your
    dependencies current.

-   **Request Access Permissions**: If you need access to the
    organisation feed, ask the organisation owner to grant the Build
    Service User \'Contributor\' permissions. The Build Service User is
    the account running your Azure pipeline.

+-----+----------------------------------------------------------------+
| ![  | Granting access to an organisation feed is easier than a       |
| Pra | project feed, as it doesn't require first granting access to   |
| cti | the project.                                                   |
| cal |                                                                |
| tip | *DHCW_Global_Dependencies* is hosted in the NHS-Wales-Digital  |
| s]( | Azure DevOps Organisation but can be used by other             |
| ./m | Organisations in the same NHS Wales Entra tenant,              |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
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
| !    | [Restore NuGet packages in Azure Pipelines - Azure Pipelines  |
| [Fur | \| Microsoft                                                  |
| ther | Learn](https://learn.microso                                  |
| rea  | ft.com/en-gb/azure/devops/pipelines/packages/nuget-restore?vi |
| ding | ew=azure-devops&tabs=yaml#restore-nuget-packages-from-a-feed) |
| and  |                                                               |
| i    | [Find or lookup the organisation owner - Azure DevOps \|      |
| nfor | Microsoft                                                     |
| mati | Learn](https://learn.microsoft.com/en-gb/azure/devops/organiz |
| on]( | ations/security/look-up-organization-owner?view=azure-devops) |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e1.p |                                                               |
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

### PUBLISHING PACKAGES

Publishing packages to Azure Artifacts helps in:

-   Sharing secure, maintainable libraries (such as UI components).

-   Distributing validated third-party libraries without pulling from
    > public feeds.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Publish NuGet packages with Azure Pipelines - Azure Pipelines \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/pipelines/artifacts/nuget?toc=%2Fazure%2Fdevops%2Fartifacts%2Ftoc.json&bc=%2Fazure%2Fdevops%2Fartifacts%2Fbreadcrumb%2Ftoc.json&view=azure-devops&tabs=yaml)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[]{#_PUBLISHING_PACKAGES:_VERSIONING .anchor}

### HOW DO YOU VERSION YOUR CODE?

You **MUST** use Semantic Versioning (SemVer 2.0.0). See the following
for more details:

+------+---------------------------------------------------------------+
| !    | SDS-CS-1 Using Source Control                                 |
| [Fur |                                                               |
| ther | SDS-CS-4 RESTful API Design and Build Standards               |
| rea  |                                                               |
| ding | [Semantic Versioning 2.0.0 \| Semantic                        |
| and  | Versioning](https://semver.org/)                              |
| i    |                                                               |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e1.p |                                                               |
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

### VERSIONING CONVENTIONS

+----------------+-------------------------------------+---------------+
| **COMPONENT**  | **NAMING CONVENTION**               | **example**   |
+================+=====================================+===============+
| **VERSION      | \<Major\>                           | 1.0.0         |
| FORMAT**       | .\<Minor\>.\<Patch\>\[-\<prerelease |               |
|                | tag\>\]\[+\<Git commit \>\]         |               |
+----------------+-------------------------------------+---------------+
| **MAJOR**      | For breaking changes                | 2.0.0         |
+----------------+-------------------------------------+---------------+
| **MINOR**      | Backward-compatible changes.        | 2.1.0         |
+----------------+-------------------------------------+---------------+
| **PATCH**      | Bug Fixes                           | 1.0.1         |
+----------------+-------------------------------------+---------------+
| **PRE-RELEASE  | Optional \[-\<alpha \| beta \|      | 1.0.0-alpha   |
| TAG**          | rc\>\]                              |               |
+----------------+-------------------------------------+---------------+
| **ALPHA**      | Indicates unstable builds.          | 1.0.0-alpha   |
+----------------+-------------------------------------+---------------+
| **BETA**       | Feature complete but may contain    | 2.0.0-beta    |
|                | known bugs.                         |               |
+----------------+-------------------------------------+---------------+
| **RC**         | Release candidate                   | 2.1.0-rc      |
+----------------+-------------------------------------+---------------+
| **Git Commit** | Short Git hash added after +.       | 1.0.0-alp     |
|                | Identifies the build\'s source      | ha+26be44c37e |
|                | commit.                             |               |
|                |                                     | 2.0.0-        |
|                |                                     | beta+d8164225 |
+----------------+-------------------------------------+---------------+

+-----+----------------------------------------------------------------+
| ![  | Use the **Nerdbank.GitVersioning** dotnet tool to              |
| Pra | auto-generate SemVer compliant versions in Azure Pipelines.    |
| cti |                                                                |
| cal | Use extensions like **Generate Release Notes** in YAML         |
| tip | Pipeline features to auto-generate package release notes.      |
| s]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e3. |                                                                |
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
  ![Further reading and                                           <https://github.com/dotnet/Nerdbank.GitVersioning>
  information](./media/image1.png){width="0.4638888888888889in"   
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

### PACKAGE NAMING CONVENTIONS

Follow these naming conventions when publishing a package. Publish
reusable components the organisation shared feed.

  ------------------------------------------------------------------------------------------------
  **COMPONENT**     **NAMING CONVENTION**                            **example**
  ----------------- ------------------------------------------------ -----------------------------
  **Organisation    DHCW_Global_Dependencies                         DHCW_Global_Dependencies
  feed**                                                             

  **project feed**  \<Project Name\>                                 NHS Wales Patient Portal

  **package ID**    \[\<DHCW.\>\]\<ProjectName\>.\<ComponentName\>   DHCW.PortalUI.Validation

  **Package         See [Publishing Packages:                        1.1.0
  Version**         Versioning](#_PUBLISHING_PACKAGES:_VERSIONING)   

  **AUTHORS**       Team or developer name                           Phoenix Portal Team

  **DESCRIPTION**   A short description for UI display.              Validation library for UI
                                                                     components in the NHS Wales
                                                                     Patient Portal. This
                                                                     library.....

  **COPYright**     Copyright (c) DHCW \<Year\>                      Copyright (c) DHCW 2024

  **Project URL**   Link to the Azure DevOps project                 {base}/\_git/patient-portal

  **README**        Include a README markdown file                   *(overview of what the
                                                                     package does)*

  **REPOSITORY      A link to the source repository, including a     {base}/\_git/patient-portal
  URL**             'type' attribute (e.g., git).                    

  **TAGS**          Comma-separated list of keywords.                UI, validation, Portal, .Net

  **RELEASE NOTES** Description of changes in this release.          New release with added
                                                                     validation for SMS text
                                                                     input.
  ------------------------------------------------------------------------------------------------

### PUBLISHING TO SHARED ORGANISATION FEEDS

*DHCW_Global_Dependencies* (found in the NHS-Wales-Digital) uses only
the \@local feed as the shared repository for stable packages. This
simplifies package management.

Follow these rules When publishing to a shared feed**:**

1.  **No Pre-releases:** Packages with pre-release tags (e.g., -alpha,
    > -beta, -rc) **MUST NOT** be published to a shared feed. Use
    > separate feeds for testing.

2.  **Stable Versions Only:** Ensure packages are fully tested,
    > reviewed, and stable before publishing.

3.  **Follow Conventions:** Adhere to semantic versioning (e.g., 1.0.0
    > for stable releases).

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Automate checks in pipelines to block unstable versions from
  tips](./media/image3.png){width="0.3937007874015748in"   being published to the shared feed.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## DEFINING AND RUNNING TEST CASES WITH AZURE TEST PLANS

You **SHOULD** follow these practices when defining and running test
cases in Azure DevOps:

-   Create test plans to organise and manage test cases.

-   Link test cases to work items for better tracking.

-   Automate testing to improve consistency and efficiency.

-   Use charts to visualise test results and include them in Test
    Summary reports.

-   Regularly review and update test cases to maintain proper coverage.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              A **Visual Studio Test Professional** or **Azure DevOps Basic +
  tips](./media/image3.png){width="0.3937007874015748in"   Test Plans** subscription is needed to use Azure Test Plans.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | [What are Azure Test Plans? - Azure Test Plans \| Microsoft   |
| [Fur | Learn](https://learn.micr                                     |
| ther | osoft.com/en-gb/azure/devops/test/overview?view=azure-devops) |
| rea  |                                                               |
| ding | [Azure Test Plans documentation - Azure DevOps \| Microsoft   |
| and  | Learn](https://le                                             |
| i    | arn.microsoft.com/en-gb/azure/devops/test/?view=azure-devops) |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e1.p |                                                               |
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

## USING WIKIS

You **MAY** use Azure DevOps Wikis to record project information and
decisions, but you **MUST NOT** use them for information that should be
stored in a controlled document.

+------+---------------------------------------------------------------+
| !    | [Create a project wiki to share information - Azure DevOps \| |
| [Fur | Microsoft                                                     |
| ther | Learn](https://learn.microsoft.com/en-gb/azure/devops/        |
| rea  | project/wiki/wiki-create-repo?view=azure-devops&tabs=browser) |
| ding |                                                               |
| and  | [Share knowledge within teams - Training \| Microsoft         |
| i    | Learn](https://learn.micros                                   |
| nfor | oft.com/en-gb/training/modules/share-knowledge-within-teams/) |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e1.p |                                                               |
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

## CREATING AND MANAGING DASHBOARDS

Use dashboards to monitor key metrics like test results, build quality,
code coverage and burn-down rates. The following layout is
**RECOMMENDED**:

-   **Top row:** Display build metrics for quick visibility of build
    status.

-   **Middle row:** Show test results and code quality metrics to track
    code health.

-   **Bottom row**: Reserve for sprint and team performance metrics.

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            ![An example Azure Devops
  practice](./media/image5.png){width="0.1968503937007874in"   dashboard](./media/image11.png){width="3.7710269028871393in"
  height="0.1968503937007874in"}                               height="4.8127471566054245in"}
  ------------------------------------------------------------ ----------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Understand dashboards, charts, reports, and widgets - Azure DevOps \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/report/dashboards/overview?view=azure-devops)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -----------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

## MANAGING USER SETTINGS

Update your profile and interface preferences via the User settings icon
in the top right corner. You can also access preview features to stay up
to date.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Set your time zone to ***(UTC+00:00) Dublin, Edinburgh, Lisbon,
  tips](./media/image3.png){width="0.3937007874015748in"   London*** in *User Settings \> Time and Locale* to ensure
  height="0.3937007874015748in"}                           consistency.
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## PROJECT HOUSEKEEPING TASKS

Follow these **RECOMMENDED** practices to keep projects clean and
well-organised:

-   **Set artifact retention policies** Keep only the ***latest**,
    **previous*** and ***active*** releases versions to minimise storage
    costs.

-   **Pipeline run retention:** Retain only recent, relevant runs for
    debugging. Set retention policies to delete pipeline runs after
    ***30 days***.

-   **Delete obsolete branches**. Remove inactive or redundant branches
    to remove clutter.

-   **Clean agent pools**: Clean stale directories and repositories on
    > self-hosted agents **weekly** to avoid disk space issues.

-   **Keep agents updated**: Enable automatic updates for minor version
    > changes and manually upgrade for major updates.

## SECURING YOUR PROJECTS

You **MUST** follow these essential practices to ensure robust security:

-   Review permissions **monthly**, ensuring access follows the
    *least-privilege principle*.

-   Remove permissions **as soon as** users no longer need access.

-   Use fine-grained permissions to restrict access to what's necessary.

-   Prefer *Federated Identity* over *Service Connections* when
    possible.

-   Avoid *Personal Access Tokens (PATs)* but if used, recycle them
    every ***90 days***.

-   Limit access to the minimum required for each user.

+------+---------------------------------------------------------------+
| !    | [Security best practices - Azure DevOps \| Microsoft          |
| [Fur | Learn](https://learn.microsoft.com/en-gb/azure/devops/orga    |
| ther | nizations/security/security-best-practices?view=azure-devops) |
| rea  |                                                               |
| ding | [Other security considerations for Azure Pipelines - Azure    |
| and  | Pipelines \| Microsoft                                        |
| i    | Learn](https://learn.microsoft.com/                           |
| nfor | en-gb/azure/devops/pipelines/security/misc?view=azure-devops) |
| mati |                                                               |
| on]( | [Delete, remove users from team, project, organisation -      |
| ./me | Azure DevOps \| Microsoft                                     |
| dia/ | Learn](https                                                  |
| imag | ://learn.microsoft.com/en-gb/azure/devops/organizations/accou |
| e1.p | nts/delete-organization-users?view=azure-devops&tabs=browser) |
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

## MANAGING COSTS

To control and optimise costs Organisation Owners **SHOULD:**

-   **Monitor Azure DevOps costs**: Review consumption costs against
    your Azure subscription **weekly** to spot unexpected charges early.

-   **Downgrade or remove inactive users**: Downgrade inactive users to
    Stakeholder after **8 weeks.** Remove users who haven't used Azure
    DevOps for **6 months.**

-   **Set a monthly cost threshold:** Set alerts for when costs exceed a
    threshold and review cost breakdowns in the \"*Cost Management +
    Billing*\" section of the Azure portal.

+------+---------------------------------------------------------------+
| !    | [Manage paid access for users - Azure DevOps \| Microsoft     |
| [Fur | Learn](https://learn.microsoft.com/en-gb/azure/devops/organi  |
| ther | zations/billing/buy-basic-access-add-users?view=azure-devops) |
| rea  |                                                               |
| ding | [Billing FAQs (Frequently Asked Questions) - Azure DevOps \|  |
| and  | Microsoft                                                     |
| i    | Learn](https://learn.microsoft.com/en-gb/azur                 |
| nfor | e/devops/organizations/billing/billing-faq?view=azure-devops) |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e1.p |                                                               |
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

## SUPPORT AND TROUBLESHOOTING

Azure DevOps requires minimal support, but issues can still arise.
Follow these steps to get help:

### GENERAL SUPPORT

-   **Check Service Notifications**: For updates about issues or
    disruptions.

-   **Check Microsoft Service Status**: Visit [Azure DevOps -
    Status](https://status.dev.azure.com/) for service updates.

-   **Monitor the Developer Channel**: Check the [Visual Studio
    Developer Azure DevOps
    Channel](https://developercommunity.visualstudio.com/AzureDevOps) to
    upvote relevant issues.

-   **Ask a Project Admin**: Contact your Project Administrator if you
    need further help.

-   **Contact the Organisation Owner**: For help with unresolved issues,
    speak to the Organisation Owner who can raise a support request with
    Microsoft.

-   **Log a Service Request:** If the Organisation Owner is unavailable
    or your query is urgent, raise a service request (addressed to the
    *Corporate Application* team). This option is only available to
    users of the *NHS-Wales-Digital* Organisation.

+------+---------------------------------------------------------------+
| !    | [Find or lookup the organisation owner - Azure DevOps \|      |
| [Fur | Microsoft                                                     |
| ther | Learn](https://learn.microsoft.com/en-gb/azure/devops/organiz |
| rea  | ations/security/look-up-organization-owner?view=azure-devops) |
| ding |                                                               |
| and  | [Look up a project collection administrator - Azure DevOps \| |
| i    | Microsoft                                                     |
| nfor | Learn](https://                                               |
| mati | learn.microsoft.com/en-gb/azure/devops/organizations/security |
| on]( | /look-up-project-collection-administrators?view=azure-devops) |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e1.p |                                                               |
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

### UNABLE TO CLONE LARGE GIT REPOS

Raise a service request to join the *NWI_Zscaler_Allow_AzureDevops Entra
group* If you need to clone large repos. On approval, choose *Update
Policy* in your zscaler desktop application.

In the meantime, work around the issue using these commands:

mkdir *\<Repo Name\>*

cd *\<Repo Name\>*

git init

git remote add origin *\<Your repo URL\>*

git pull \# results in curl 56 failure.

git pull \# succeeds.

### FIXING ISSUES WITH SSL CERTIFICATES

Errors may occur if Git isn't configured to use the Windows Certificate
Store for SSL verification:

fatal: unable to access \'https://\<your-repo-url\>\': SSL certificate
problem: unable to get local issuer certificate

fatal: unable to access \'https://\<your-repo-url\>\': schannel
CertGetCertificateChain trust error CERT_TRUST_IS_PARTIAL_CHAIN

To fix them, run the following command in Git Bash. Alternatively, if
you're using Visual Studio set the *cryptographic network provider* to
*schannel* in the Git settings:

git config \--global http.sslBackend schannel

## ENABLING GITHUB ADVANCED SECURITY 

Enabling **GitHub Advanced Security** helps you find & fix security
issues in your code but does incur extra costs. So, check with your line
manager or Organisation Owner before enabling it.

The following practices are **RECOMMENDED**:

-   **Block Secrets on Push:** Enable the \"*Block secrets on push*\"
    setting to prevent accidental exposure of secrets in your code**.**

-   **Review and Resolve Flagged Secrets:** Address other secrets
    flagged by Azure DevOps (even if not blocked). E.g. by moving them
    to secure storage like Azure Key Vault.

-   **Conducting Dependency Scanning:** Add the Dependency Scanning task
    to your Azure Pipelines to identify vulnerabilities in third-party
    libraries.

-   **Code Scanning with CodeQL:** Add the CodeQL scanning task to your
    pipelines to identify security vulnerabilities and code quality
    issues**.**

-   **Microsoft Security DevOps Extension:** Install this to use static
    analysis tools like *ESLint*, *Checkov*, and *Terrascan* to scan for
    vulnerabilities in Azure Pipelines.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Security tools may flag valid code (false positives) or miss
  tips](./media/image3.png){width="0.3937007874015748in"   vulnerabilities (false negatives).
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | [Configure GitHub Advanced Security for Azure DevOps          |
| [Fur | features - Azure Repos \| Microsoft                           |
| ther | Learn](https://lear                                           |
| rea  | n.microsoft.com/en-gb/azure/devops/repos/security/configure-g |
| ding | ithub-advanced-security-features?view=azure-devops&tabs=yaml) |
| and  |                                                               |
| i    | [Implementing GitHub Advanced Security for Azure DevOps       |
| nfor | (youtube.com)](https://www.youtube.com/watch?v=Rdlo33QYvXk)   |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e1.p |                                                               |
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

## CONNECTING DEFENDER FOR CLOUD DEVOPS

Connecting Azure DevOps to Microsoft Defender for Cloud helps identify
and fix security issues. Check with your Organisation Owner and Cyber
Security team about potential costs first.

The following practices are **RECOMMENDED**:

-   **Connect to Defender for Cloud**: Organisation Owners **MAY** link
    > Azure DevOps to Defender for Cloud for security insights. This
    > will also install the *Defender for DevOps Container Mapping*
    > extension to protect containerized applications.

-   **Enable Pull Request Annotations**: Turn on annotations to
    > highlight security issues in pull requests, so they can be fixed
    > before merging.

-   **Review Alerts and Recommendations**: Regularly review Defender for
    Cloud alerts and follow recommendations to reduce risks.

+------+---------------------------------------------------------------+
| !    | [Microsoft Defender for Cloud DevOps Security Benefits \|     |
| [Fur | Microsoft                                                     |
| ther | Learn](https://learn.microsoft.com/en-                        |
| rea  | gb/azure/defender-for-cloud/defender-for-devops-introduction) |
| ding |                                                               |
| and  | [Connect Azure DevOps to Defender for Cloud \| Microsoft      |
| i    | Learn](https://learn.microsoft.                               |
| nfor | com/en-gb/azure/defender-for-cloud/quickstart-onboard-devops) |
| mati |                                                               |
| on]( | [Configure the Security DevOps Extension \| Microsoft         |
| ./me | Learn](https://learn.microso                                  |
| dia/ | ft.com/en-gb/azure/defender-for-cloud/azure-devops-extension) |
| imag |                                                               |
| e1.p | [Microsoft Security DevOps Extension for Azure DevOps \|      |
| ng){ | GitHub](https://gith                                          |
| widt | ub.com/microsoft/security-devops-azdevops?tab=readme-ov-file) |
| h="0 |                                                               |
| .463 | [Enable Pull Request Annotations \| Microsoft                 |
| 8888 | Learn](https://learn.microsoft.com/en                         |
| 8888 | -gb/azure/defender-for-cloud/enable-pull-request-annotations) |
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

## USING AZURE DEVOPS EXTENSIONS

Extensions add extra capabilities but require careful management. Follow
these practices to manage them safely:

-   **Evaluate First:** Before requesting an extension, evaluate it
    using Microsoft's criteria as extensions impact all users once
    installed.

-   **Request Approval:** Consult the Organisation Owner before
    requesting a new extension.

-   **Avoid Dependency:** Do not build critical workflows around
    extensions. They are unsupported and may be removed at any time,
    even if from Microsoft.

-   **Cybersecurity Approval:** Obtain approval from Cyber Security for
    extensions accessing code repos or exporting telemetry.

```{=html}
<!-- -->
```
-   **Disable telemetry:** Turn off telemetry and intrusive features.

-   **Audit Regularly:** Periodically review extensions to ensure
    > compliance with privacy and security policies.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              The Organisation Owner may notify you of new extensions via
  tips](./media/image3.png){width="0.3937007874015748in"   banner notifications.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | [Extensions overview - Azure DevOps \| Microsoft              |
| [Fur | Learn](https://learn.micros                                   |
| ther | oft.com/en-gb/azure/devops/extend/overview?toc=%2Fazure%2Fdev |
| rea  | ops%2Fmarketplace-extensibility%2Ftoc.json&view=azure-devops) |
| ding |                                                               |
| and  | [Extensions for Visual Studio family of products \| Visual    |
| i    | Studio                                                        |
| nfor | M                                                             |
| mati | arketplace](https://marketplace.visualstudio.com/azuredevops) |
| on]( |                                                               |
| ./me | [Find or look up the organisation owner - Azure DevOps \|     |
| dia/ | Microsoft                                                     |
| imag | Learn](https://learn.microsoft.com/en-gb/azure/devops/organiz |
| e1.p | ations/security/look-up-organization-owner?view=azure-devops) |
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

## DATA PRIVACY AND AVAILABILITY

Azure DevOps Services includes strong data protection, availability and
features:

-   **Data Availability:** Continuous access through data redundancy,
    even during failures.

-   **Service Availability:** High uptime with built-in availability
    mechanisms.

-   **Service Security**: Protection against threats and
    vulnerabilities.

-   **Data Privacy:** Compliance with privacy laws and best practices

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Data protection overview - Azure DevOps Services \| Microsoft
  information](./media/image1.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/azure/devops/organizations/security/data-protection?view=azure-devops)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              YOU **MUST NOT** store Personal Identifiable information (PII)
  tips](./media/image3.png){width="0.3937007874015748in"   in Azure DevOps!
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## ESSENTIAL GOOD PRACTICE CHECKLIST

  ---------------------------------------------------------------------------------------------------------------------------------------
  **No.**   **Checklist Item**                   **Guide or standard**                                                   **Exceptions**
  --------- ------------------------------- ---- ----------------------------------------------------------------------- ----------------
  1         You grant only the minimum      ☐    [Add Users](#adding-users-and-teams) & [Securing your                   
            access level necessary and           projects](#securing-your-projects)                                      
            follow the principle of lease                                                                                
            privilege.                                                                                                   

  2         You do NOT store Personal       ☐    [Data privacy and availability](#data-privacy-and-availability)         
            Identifiable Information (PII)                                                                               
            in Azure DevOps.                                                                                             

  3         You do NOT store controlled     ☐    [Using Wikis](#using-wikis)                                             
            document information in a wiki.                                                                              

  4         You do NOT publish packages          [Publishing to shared organisation                                      
            with pre-release tags to             feeds](#publishing-to-shared-organisation-feeds)                        
            organisation feeds.                                                                                          

  5         Projects have at least two      ☐    [Assign project admins](#assign-project-admins)                         
            Project Administrators                                                                                       

  6         You disable extensions that     ☐    [Disable telemetry and data access](#_DISABLE_TELEMETRY_AND)            
            send telemetry or access                                                                                     
            repositories.                                                                                                

  7         You remove unused features      ☐    [Remove unused features](#_REMOVE_UNUSED_FEATURES)                      

  8         You follow our conventions and  ☐    All                                                                     
            naming standards                                                                                             

  9         You tag releases and generate   ☐    [Package naming conventions](#package-naming-conventions)               
            automatic release notes                                                                                      

  10        You use Semantic Versioning     ☐    [How do you version your code?](#_HOW_DO_YOU)                           
            (SemVer 2.0.0).                                                                                              

  11        You follow a branching and      ☐    [How do you branch and release?](#how-do-you-branch-and-release)        
            release strategy                                                                                             

  12        You link work items to git      ☐    [Configure repository settings for commit                               
            commits.                             linking](#configure-repository-settings-for-commit-linking)             

  13        You use Azure Pipelines to      ☐    [Automating builds and                                                  
            automate build, test, &              deployments](#automating-builds-and-deployments-with-azure-pipelines)   
            deployments                                                                                                  

  14        Deployment to production        ☐    [Core pipeline characteristics](#core-pipeline-characteristics)         
            requires a pre-approval check.                                                                               

  15        You share code using Azure      ☐    [Sharing code](#sharing-code-with-azure-artifacts)                      
            Artifacts                                                                                                    
  ---------------------------------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------
  **No.**   **Checklist Item**                   **Guide or standard**                                            **Exceptions**
  --------- ------------------------------- ---- ---------------------------------------------------------------- ----------------
  16        You use Azure Test Plans to     ☐    [Defining and Running Test                                       
            store and manage manual tests        Cases](#defining-and-running-test-cases-with-azure-test-plans)   

  17        You control and manage costs    ☐    [Managing costs](#managing-costs)                                
  --------------------------------------------------------------------------------------------------------------------------------
