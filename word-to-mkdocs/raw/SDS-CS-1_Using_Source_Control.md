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
| development handbook.   |                                            |
| This best practice was  |                                            |
| subject to an equality  |                                            |
| impact assessment.      |                                            |
+-------------------------+--------------------------------------------+

+--------------------------------------+--------+----------------------+
| APPROVAL / SCRUTINY ROUTE:           |        |                      |
|                                      |        |                      |
| Person/Committee/Group who have      |        |                      |
| received or considered this paper    |        |                      |
+======================================+========+======================+
| COMMITTEE OR GROUP                   | DATE   | OUTCOME              |
+--------------------------------------+--------+----------------------+
| Lead Software Developers' Group      | 22     | Approved             |
|                                      | /02/23 |                      |
+--------------------------------------+--------+----------------------+
| Technical Design Assurance Group     | 06     | Approved             |
|                                      | /02/24 |                      |
+--------------------------------------+--------+----------------------+

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

[6.1 USE OUR SOURCE CONTROL SYSTEMS
[6](#use-our-source-control-systems)](#use-our-source-control-systems)

[6.2 WHAT TO INCLUDE IN SOURCE CONTROL
[6](#what-to-include-in-source-control)](#what-to-include-in-source-control)

[6.3 USE GIT [7](#use-git)](#use-git)

[6.4 ESTABLISH A CLEAR REPO STRUCTURE
[7](#establish-a-clear-repo-structure)](#establish-a-clear-repo-structure)

[6.5 COMMIT CHANGES EARLY AND OFTEN
[9](#commit-changes-early-and-often)](#commit-changes-early-and-often)

[6.6 WRITE CLEAR COMMIT MESSAGES
[9](#write-clear-commit-messages)](#write-clear-commit-messages)

[6.7 REVIEW YOUR CODE [11](#review-your-code)](#review-your-code)

[6.8 FOLLOW A BRANCHING STRATEGY
[12](#follow-a-branching-strategy)](#follow-a-branching-strategy)

[6.9 ADOPT TRUNK-BASED DEVELOPMENT AND CONTINUOUS INTEGRATION
[12](#adopt-trunk-based-development-and-continuous-integration)](#adopt-trunk-based-development-and-continuous-integration)

[6.10 IMPLEMENT A VERSIONING STRATEGY
[13](#implement-a-versioning-strategy)](#implement-a-versioning-strategy)

[6.11 KEEP YOUR REPO ORGANISED
[14](#keep-your-repo-organised)](#keep-your-repo-organised)

[6.12 ALWAYS DEPLOY FROM SOURCE CONTROL
[14](#always-deploy-from-source-control)](#always-deploy-from-source-control)

[6.13 SELECT AND CONFIGURE GIT CLIENTS
[14](#select-and-configure-git-clients)](#select-and-configure-git-clients)

[6.14 EXCEPTIONS [14](#exceptions)](#exceptions)

[7 ESSENTIAL GOOD PRACTICE CHECKLIST
[15](#essential-good-practice-checklist)](#essential-good-practice-checklist)

#  PURPOSE

A guide to working with source control. Following it helps you meet our
requirements for developing software described in our Software
development handbook.

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           SDS-GDN-1 Software development handbook
  information](./media/image1.png){width="0.4638888888888889in"   
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

# SCOPE

## IN-SCOPE

-   Good practices for using source control and conducting code reviews.

-   Strategies for organising Git repositories.

-   Strategies for branching and merging.

-   [Good practice checklist](#essential-good-practice-checklist).

## OUT-OF-SCOPE

-   In depth guidance for creating and configuring Git repos. See our
    Azure DevOps handbook for details.

-   This guide is for Azure DevOps users, specifically those using Azure
    Repos. GitHub users may find it helpful, but it is not tailored for
    them.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Some links in this handbook now point to GitHub resources - as
  tips](./media/image3.png){width="0.3937007874015748in"   Microsoft increasingly promotes GitHub in marketing and
  height="0.3937007874015748in"}                           training.
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

-   

# REFERENCES

  -----------------------------------------------------------------------
  INDEX NUMBER      DOCUMENT NAME
  ----------------- -----------------------------------------------------
  SDS-GDN-1         Software development handbook

  SDS-CS-4          RESTful API Design and Build Standards

  SDS-CS-5          How to Organise your Software Solution

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

Source control, or version control, helps you stay organised by tracking
changes to your files as you fix bugs or add features. It lets you
easily revert to earlier versions when needed,

Using our source control systems helps you comply with company Disaster
Recovery policies.

# STANDARDS

## USE OUR SOURCE CONTROL SYSTEMS

Any code not in source control is considered outside your project. You
**MUST** commit all code to our source control systems. You can find
more details from our Azure DevOps handbook.

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           SDS-CS-7 Azure DevOps handbook
  information](./media/image1.png){width="0.4638888888888889in"   
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

## WHAT TO INCLUDE IN SOURCE CONTROL

You **MUST** include:

-   Everything needed to build your project, including the database.

-   A README.md and CONTRIBUTING.md file. Other documentation **MAY** be
    > kept outside source control.

You **MUST NOT** include:

-   Sensitive information, such as API keys, passwords, or server names.
    Instead, use environment variables or key stores.

-   Personal Identifiable Information (PII).

You **SHOULD** exclude:

-   Compilation output and user settings files. Use a .gitignore file
    > (e.g., for Visual Studio) to manage exclusions.

Additional **RECOMMENDATIONS**:

-   Use Redgate Source Control to manage your database.

-   Use package management to avoid storing dependencies in source
    > control.

+-----+----------------------------------------------------------------+
| ![  | **Disaster Recovery**                                          |
| Pra |                                                                |
| cti | In 2017, a disaster recovery test revealed weaknesses in our   |
| cal | source control system, risking longer recovery times and data  |
| tip | loss. These issues **HAVE** since been resolved.               |
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

+------+---------------------------------------------------------------+
| !    | SDS-CS-5 How to Organise your Software Solution               |
| [Fur |                                                               |
| ther | [gitignore/VisualStudio.gitignore at main ·                   |
| rea  | github/gitignore](https://                                    |
| ding | github.com/github/gitignore/blob/main/VisualStudio.gitignore) |
| and  |                                                               |
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

## USE GIT

Visual Studio and Azure DevOps offer two source control tools through
Azure Repos: Team Foundation Version Control and Git (the default). You
**SHOULD** use Git. While it has a steeper learning curve, it is better
suited to help you follow these standards.

+------+---------------------------------------------------------------+
| !    | [Manage source control - Training \| Microsoft                |
| [Fur | Learn](https://learn.micr                                     |
| ther | osoft.com/en-gb/training/paths/az-400-manage-source-control/) |
| rea  |                                                               |
| ding | [Git Book](https://git-scm.com/book/en/v2)                    |
| and  |                                                               |
| i    | [Get started with Git and Visual Studio - Azure Repos \|      |
| nfor | Microsoft                                                     |
| mati | Learn](https://learn.microsoft.com/en-gb/azure/devops/repos   |
| on]( | /git/gitquickstart?tabs=visual-studio-2022&view=azure-devops) |
| ./me |                                                               |
| dia/ | [Azure Repos Git Documentation \| Microsoft                   |
| imag | Learn](https://learn.m                                        |
| e1.p | icrosoft.com/en-gb/azure/devops/repos/git/?view=azure-devops) |
| ng){ |                                                               |
| widt | [About Git in Visual Studio \| Microsoft                      |
| h="0 | Learn](https://learn.microsoft.com/en-gb/visu                 |
| .463 | alstudio/version-control/git-with-visual-studio?view=vs-2022) |
| 8888 |                                                               |
| 8888 | [Git and TFVC version control - Azure Repos \| Microsoft      |
| 8888 | Learn](https://learn.microsoft.com/en-gb/a                    |
| 9in" | zure/devops/repos/tfvc/comparison-git-tfvc?view=azure-devops) |
| he   |                                                               |
| ight | [Map TFVC actions to Git - Azure Repos \| Microsoft           |
| ="0. | Learn](ht                                                     |
| 4638 | tps://learn.microsoft.com/en-gb/azure/devops/repos/git/mappin |
| 8888 | g-my-tfvc-actions-to-git?tabs=command-line&view=azure-devops) |
| 8888 |                                                               |
| 8889 | [Change the Work Items page experience - Azure Boards \|      |
| in"} | Microsoft                                                     |
|      | Learn](https://learn.micro                                    |
|      | soft.com/en-gb/azure/devops/boards/work-items/set-work-item-e |
|      | xperience-vs?view=azure-devops&viewFallbackFrom=azure-devops) |
+======+===============================================================+
+------+---------------------------------------------------------------+

## ESTABLISH A CLEAR REPO STRUCTURE

### BEFORE CREATING YOUR REPO

You **MUST** have a clear plan for how to organise your repos. You have
three main options:

  ----------------------------------------------------------------------------------------------------------------------------------
                                                               **REPO TYPE**   **Description**
  ------------------------------------------------------------ --------------- -----------------------------------------------------
  ![Example of practices to                                    **MONOREPO**    A single repo for all our organisation\'s source
  avoid](./media/image7.png){width="0.1968503937007874in"                      code. We do not use this approach and it is **NOT
  height="0.1968503937007874in"}                                               RECOMMENDED** to have all teams share one Azure
                                                                               DevOps project.

  ![Example of good                                            **SINGLE REPO** Each team stores its code in the same repo. This is
  practice](./media/image5.png){width="0.1968503937007874in"                   the **RECOMMENDED** approach for most cases but
  height="0.1968503937007874in"}                                               requires automation to manage the process
                                                                               effectively.

  ![Example of practices to                                    **MULTIREPO**   Each application has its own repo. This may be
  avoid](./media/image7.png){width="0.1968503937007874in"                      necessary if you have specific constraints that make
  height="0.1968503937007874in"}                                               this approach better for your team.
  ----------------------------------------------------------------------------------------------------------------------------------

### MANAGING MULTIPLE APPLICATIONS IN THE SAME REPO

Your repos **MUST NOT** become a confusing mess. To keep them organised
you **MUST**:

-   Deploy applications only when code changes are made to that specific
    application.

-   Restrict access to distinct parts of your codebase when needed.

For example, the Single Record Product team might face these scenarios:

  -----------------------------------------------------------------------
  **PROBLEM**                            **SOLUTION**
  -------------------------------------- --------------------------------
  The Welsh Clinical Portal mobile and   Set up build pipelines to
  web apps share common libraries in the trigger only when code changes
  same repo, but changes to one app      occur in specific directories.
  should not trigger deployments of the  
  other.                                 

  Contractors working on the Welsh       Use branch policies or security
  Nursing Care Record form should not be settings to limit access.
  able to modify the Welsh Clinical      
  Portal apps.                           
  -----------------------------------------------------------------------

### CHOOSING BETWEEN SINGLE AND MULTIREPOS?

Using a *Single Repo* is **RECOMMENDED** for apps that share a release
cadence, like a desktop app and its back-end API. This approach is also
good for components that are deployed together.

If you choose a single repo, you **MUST** automate builds and
deployments and follow the folder structure outlined in *How to Organise
Your Software Solution.*

If your apps are each tied to their own Visual Studio .sln file,
*Multirepo* may be a better fit.

+-----+----------------------------------------------------------------+
| ![  | Even when using a single repo for common libraries, you        |
| Pra | **SHOULD** use package management to publish binaries.         |
| cti |                                                                |
| cal | Repos and branches serve a different purpose. See the Azure    |
| tip | DevOps handbook for details.                                   |
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

+------+---------------------------------------------------------------+
| !    | SDS-CS-5 How to Organise your Software Solution               |
| [Fur |                                                               |
| ther | SDS-CS-5 Azure DevOps handbook                                |
| rea  |                                                               |
| ding | [Structure your Git Repo - Training \| Microsoft              |
| and  | Learn](https://learn.m                                        |
| i    | icrosoft.com/en-gb/training/modules/structure-your-git-repo/) |
| nfor |                                                               |
| mati | [Working with a Monorepo - CSE Developer Blog                 |
| on]( | (microsoft.com)](https://de                                   |
| ./me | vblogs.microsoft.com/cse/2021/11/23/working-with-a-monorepo/) |
| dia/ |                                                               |
| imag | [Monorepos in Git \| Atlassian Git                            |
| e1.p | Tutorial](https://www.atlassian.com/git/tutorials/monorepos)  |
| ng){ |                                                               |
| widt | [Misconceptions about Monorepos: Monorepo !=                  |
| h="0 | Monolith](https://blog.nrwl.io/m                              |
| .463 | isconceptions-about-monorepos-monorepo-monolith-df1250d4b03c) |
| 8888 |                                                               |
| 8888 | [The Big Ball of Mud and Other Architectural Disasters        |
| 8888 | (codinghorror.com)](https://blog.codinghorro                  |
| 9in" | r.com/the-big-ball-of-mud-and-other-architectural-disasters/) |
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

## COMMIT CHANGES EARLY AND OFTEN

Committing code early and often provides several benefits:

-   It reduces the risk of losing code, e.g., due to local disk failure.

-   It encourages building smaller, modular components, simplifying
    rollback.

-   It makes integrating changes into the main or master branch easier.

You **MUST** commit changes to your main codebase as soon as possible,
regardless of whether you are using [trunk-based
development](#adopt-trunk-based-development-and-continuous-integration)
or [feature branches](#follow-a-branching-strategy).

You **SHOULD** commit related changes together and keep commits as small
as possible. Smaller commits make rollback easier and minimise
disruptions.

You **SHOULD NOT** commit large batches of unrelated work. It
complicates code reviews and rollbacks.

## WRITE CLEAR COMMIT MESSAGES

Commit messages are essential for understanding the history, context,
and purpose of code changes. Following these standards will:

-   Improve collaboration and communication across teams.

-   Make it easier to debug, trace changes and manage the codebase
    effectively.

-   Ensure consistency and professionalism in your projects.

You **MUST** write a commit message for every change.

Commit messages **MUST** be clear, concise, and follow a consistent
format.

You **SHOULD:**

-   Use the Conventional Commits specification to structure your
    messages.

-   Link commits to work items, bugs, or tasks using identifiers.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              In Visual Studio, include the work item ID, e.g., #123 , in your
  tips](./media/image3.png){width="0.3937007874015748in"   commit message. Visual Studio will automatically link the commit
  height="0.3937007874015748in"}                           to the corresponding work item.
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

Additional **RECOMMENDATIONS**:

-   Consider tools like VsCommitizen or commitlint to help enforce
    > standards.

-   Use branch policies to ensure commit messages comply with
    > requirements.

-   Use \"because\" in your message to clarify the reasoning behind
    > changes.

+------+---------------------------------------------------------------+
| !    | [Conventional Commits](https://www.conventionalcommits.org)   |
| [Fur |                                                               |
| ther | [VsCommitizen - Visual Studio                                 |
| rea  | Marketplace](https://marketplace.visual                       |
| ding | studio.com/items?itemName=mrluje.vs-commitizen&ssr=false#qna) |
| and  |                                                               |
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

### COMMIT MESSAGE STANDARD

Each commit message MUST follow this template:

+-----+----------------------------------------------------------------+
| ![E | *\<type**\>\[optional scope\]: description*                    |
| xam |                                                                |
| ple | *\[optional body\]*                                            |
| of  |                                                                |
| g   | *\[optional footers\]*                                         |
| ood |                                                                |
| p   |                                                                |
| rac |                                                                |
| tic |                                                                |
| e]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e5. |                                                                |
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

*\<type\>:* describes the purpose of the commit. You **MUST** append a !
to *\<type\>* if the commit introduces a breaking change (e.g. feat!).

  ---------------------------------------------------------------------------
  **TYPE**        **DESCRIPTION**
  --------------- -----------------------------------------------------------
  feat**:**       A new feature.

  fix**:**        A bug fix.

  build**:**      Changes to the build system or dependencies.

  chore**:**      Maintenance tasks that do not affect application
                  functionality.

  ci**:**         Changes to CI/CD pipelines or configuration.

  docs**:**       Documentation updates.

  style**:**      Code formatting changes (e.g., indentation, spacing)
                  without functional impact.

  refactor**:**   Code changes that improve structure & clarity without
                  changing behaviour.

  perf**:**       Performance improvements.

  test**:**       Adding or modifying tests
  ---------------------------------------------------------------------------

The *\<summary\>* **MUST**:

-   Be 50 characters or fewer.

-   Use the imperative mood (e.g. \"Add login validation\").

The *\<body\>* **SHOULD**:

-   Provide additional context (e.g. **why** a change was made).

-   Be wrapped at 72 characters per line for readability.

Additional **RECOMMENDATIONS**:

-   Avoid ending with punctuation.

+-----+----------------------------------------------------------------+
| ![E | *feat: Add support for user authentication*                    |
| xam |                                                                |
| ple | *Introduced OAuth-based login for secure access. Closes        |
| of  | Task#1234*                                                     |
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
| e5. |                                                                |
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
| ![E | *fix: Resolve API timeout issue on large datasets*             |
| xam |                                                                |
| ple | *Adjusted query execution to improve performance. Resolves     |
| of  | Bug#5678*                                                      |
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
| e5. |                                                                |
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
| ![E | *docs: Update README with deployment instructions*             |
| xam |                                                                |
| ple | *Added steps for configuring environment variables and         |
| of  | services*                                                      |
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
| e5. |                                                                |
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
| ![E | *Changeset 12345*                                              |
| xam |                                                                |
| ple |                                                                |
| of  |                                                                |
| pra |                                                                |
| cti |                                                                |
| ces |                                                                |
| to  |                                                                |
| a   |                                                                |
| voi |                                                                |
| d]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e7. |                                                                |
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
| ![E | *The best version EVER again!*                                 |
| xam |                                                                |
| ple |                                                                |
| of  |                                                                |
| pra |                                                                |
| cti |                                                                |
| ces |                                                                |
| to  |                                                                |
| a   |                                                                |
| voi |                                                                |
| d]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e7. |                                                                |
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
| ![E | *Second update*                                                |
| xam |                                                                |
| ple |                                                                |
| of  |                                                                |
| pra |                                                                |
| cti |                                                                |
| ces |                                                                |
| to  |                                                                |
| a   |                                                                |
| voi |                                                                |
| d]( |                                                                |
| ./m |                                                                |
| edi |                                                                |
| a/i |                                                                |
| mag |                                                                |
| e7. |                                                                |
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

+------+---------------------------------------------------------------+
| !    | [Conventional                                                 |
| [Fur | Commits](https://www.conventionalcommits.org/en/v1.0.0/)      |
| ther |                                                               |
| rea  | [commitlint/@commitlint/config-conventional at master ·       |
| ding | conventional-changelog/commitlint ·                           |
| and  | GitHub](https://github.com/conventional-change                |
| i    | log/commitlint/tree/master/%40commitlint/config-conventional) |
| nfor |                                                               |
| mati | [A Note About Git Commit                                      |
| on]( | Messages](https://t                                           |
| ./me | baggery.com/2008/04/19/a-note-about-git-commit-messages.html) |
| dia/ |                                                               |
| imag | [How to Write a Git Commit Message                            |
| e1.p | (cbea.ms)](https://cbea.ms/git-commit/)                       |
| ng){ |                                                               |
| widt | [How to Write Good Commit Messages: A Practical Git Guide     |
| h="0 | (freecodecamp.org)](https://www.freecodec                     |
| .463 | amp.org/news/writing-good-commit-messages-a-practical-guide/) |
| 8888 |                                                               |
| 8888 | [Writing Meaningful Commit Messages --- Beanstalk             |
| 8888 | (beanstalkapp.com)](https://blog.beanstalkapp.com/post/13     |
| 9in" | 4929320564/detailed-commit-messages-are-an-essential-part-of) |
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

## REVIEW YOUR CODE

Code reviews help improve code quality, increase team knowledge, and
develop coding skills, particularly for new team members. While it is
not always possible to have your code reviewed before committing to the
main branch, it is **RECOMMENDED**.

When implementing code reviews, you **MUST** ensure the following are
clearly documented in the project's README.md and CONTRIBUTING.md file.
or team wiki:

-   The purpose of code reviews and the coding standards your code must
    adhere to.

-   The minimum number of reviewers required to approve a commit. Two
    reviewers are **RECOMMENDED.**

Additional **RECOMMENDATIONS**:

-   Consider using *pair programming* for real-time code review and
    feedback.

-   Use *Pull Requests* to facilitate and track your code reviews.

+-----+----------------------------------------------------------------+
| ![  | **ISO 9001:2015 Audit Recommendation**                         |
| Pra |                                                                |
| cti | An external ISO 9001:2015 audit in 2020 recommnded that teams  |
| cal | define a minimum number of code reviewers rather than inviting |
| tip | the entire team to review a commit.                            |
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

## FOLLOW A BRANCHING STRATEGY

You **MUST** implement a branching strategy that fits your team\'s
needs. A clear strategy helps minimise risks like introducing bugs or
conflicts. While [Trunk-Based
Development](#adopt-trunk-based-development-and-continuous-integration)
is **RECOMMENDED**, select the approach best suited to your project.

Your branching strategy **MUST**:

-   Define a consistent branch naming convention. See the Azure DevOps
    handbook for details.

-   Be documented in the project's README.md and CONTRIBUTING.md file or
    > team wiki.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Use tools like Jakob Ehn's *GitFlow for Visual Studio* if they
  tips](./media/image3.png){width="0.3937007874015748in"   simplify branch management for your team.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | SDS-CS-5 Azure DevOps handbook                                |
| [Fur |                                                               |
| ther | [Patterns for Managing Source Code Branches                   |
| rea  | (martinfowler.com                                             |
| ding | )](https://martinfowler.com/articles/branching-patterns.html) |
| and  |                                                               |
| i    | [A successful Git branching model »                           |
| nfor | nvie.c                                                        |
| mati | om](https://nvie.com/posts/a-successful-git-branching-model/) |
| on]( |                                                               |
| ./me | [Introducing GitFlow for Visual Studio -                      |
| dia/ | blog.ehn.nu](https:                                           |
| imag | //blog.ehn.nu/2015/02/introducing-gitflow-for-visual-studio/) |
| e1.p |                                                               |
| ng){ | [GitFlow \| Visual Studio , Visual Studio                     |
| widt | Marketplace]                                                  |
| h="0 | (https://marketplace.visualstudio.com/search?term=gitflow&tar |
| .463 | get=VS&category=All%20categories&vsVersion=&sortBy=Relevance) |
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

## ADOPT TRUNK-BASED DEVELOPMENT AND CONTINUOUS INTEGRATION

Trunk-Based Development simplifies source control by deploying directly
from the trunk branch (e.g., main or master). You **SHOULD** adopt this
approach where feasible, as it minimises the complexity of managing
long-lived branches.

**RECOMMENDATIONS**:

-   Write a comprehensive suite of automated tests to keep branches
    deployable.

-   Aim for continuous integration and frequent deployments from the
    trunk.

**When to Consider Alternatives**:

If your project requires extensive experimentation or long-term feature
development, ensure robust practices for merging changes from feature
branches.

+------+---------------------------------------------------------------+
| !    | [It's Not Continuous Delivery If You Can't Deploy Right Now - |
| [Fur | YouTube](https://www.youtube.com/watch?v=po712VIZZ7M)         |
| ther |                                                               |
| rea  | [Git patterns and anti-patterns for successful developers -   |
| ding | YouTube](https://www.youtube.com/watch?v=t_4lLR6F_yk)         |
| and  |                                                               |
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

## IMPLEMENT A VERSIONING STRATEGY

A versioning strategy **MUST** define how you assign, increment, and
publish version numbers. It **SHOULD** integrate with your branching
strategy to streamline builds and deployments.

### USE SEMANTIC VERSIONING

The Semantic Versioning (SemVer 2.0.0) specification is **RECOMMENDED**
and **MUST** be used for public APIs and NuGet packages. SemVer makes it
easier for consumers to understand breaking, additive, or patch-level
changes.

### AUTOMATE VERSION NUMBERING

Use tools like **Nerdbank.GitVersioning** to generate SemVer compliant
versions during builds.

+-----+----------------------------------------------------------------+
| ![  | For .NET projects, NuGet 4.3.0+ supports SemVer 2.0.0.         |
| Pra |                                                                |
| cti | For APIs, include version numbers only if updates are          |
| cal | expected; omit them for static APIs.                           |
| tip |                                                                |
| s]( | For C# projects, use the obsolete attribute to warn about      |
| ./m | upcoming deprecations.                                         |
| edi |                                                                |
| a/i | Don't confuse semantic versioning, which reflects technical    |
| mag | compatibility, with product versions which often align with    |
| e3. | release schedules.                                             |
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
| !    | SDS-CS-4 RESTful API Design and Build Standards               |
| [Fur |                                                               |
| ther | SDS-CS-5 Azure DevOps handbook                                |
| rea  |                                                               |
| ding | [Semantic Versioning 2.0.0 \| Semantic                        |
| and  | Versioning](https://semver.org/)                              |
| i    |                                                               |
| nfor | [NuGet Package Version Reference \| Microsoft                 |
| mati | Learn](https://learn.microsoft.c                              |
| on]( | om/en-gb/nuget/concepts/package-versioning?tabs=semver20sort) |
| ./me |                                                               |
| dia/ | [Versioning and .NET libraries - .NET \| Microsoft            |
| imag | Learn](https://learn.mic                                      |
| e1.p | rosoft.com/en-gb/dotnet/standard/library-guidance/versioning) |
| ng){ |                                                               |
| widt | [API Versioning Options · dotnet/aspnet-api-versioning        |
| h="0 | Wiki](https://github.                                         |
| .463 | com/dotnet/aspnet-api-versioning/wiki/API-Versioning-Options) |
| 8888 |                                                               |
| 8888 | [API versioning misconceptions: When you need it and when you |
| 8888 | don\'t \| Google Cloud                                        |
| 9in" | Blog](https://cloud.google.com/blog/produc                    |
| he   | ts/api-management/common-misconceptions-about-api-versioning) |
| ight |                                                               |
| ="0. | [apigee-web-api-                                              |
| 4638 | design-the-missing-link-ebook.pdf](https://cloud.google.com/f |
| 8888 | iles/apigee/apigee-web-api-design-the-missing-link-ebook.pdf) |
| 8888 | (page 56)                                                     |
| 8889 |                                                               |
| in"} | [Breaking changes and .NET libraries - .NET \| Microsoft      |
|      | Learn](https://learn.microsoft                                |
|      | .com/en-gb/dotnet/standard/library-guidance/breaking-changes) |
|      |                                                               |
|      | [Attributes interpreted by the compiler: Miscellaneous - C#   |
|      | reference \| Microsoft                                        |
|      | Learn](https://learn.microsoft.com/en-gb/dotnet/csh           |
|      | arp/language-reference/attributes/general#obsolete-attribute) |
|      |                                                               |
|      | <https://github.com/dotnet/Nerdbank.GitVersioning>            |
|      |                                                               |
|      | [Versioning limitations in .NET \| Jon Skeet\'s coding        |
|      | blog](https://co                                              |
|      | deblog.jonskeet.uk/2019/06/30/versioning-limitations-in-net/) |
|      |                                                               |
|      | [Semantic Versioning and Patch 2.1.2 \| Alan Kent\'s          |
|      | Blog](https:/                                                 |
|      | /alankent.me/2016/09/20/semantic-versioning-and-patch-2-1-2/) |
|      |                                                               |
|      | [API Versioning Explained \| Lightboard                       |
|      | Series](https://www.youtube.com/watch?v=_WWr_eFRDeM)          |
+======+===============================================================+
+------+---------------------------------------------------------------+

## KEEP YOUR REPO ORGANISED

You **SHOULD** maintain clean, organised repositories by:

-   Removing stale or unused projects.

-   Reviewing & revoking unnecessary permissions with Windows Groups for
    access control.

Where possible, projects **SHOULD** be open for others to read and
contribute.

  --------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           SDS-CS-5 Azure DevOps handbook
  information](./media/image1.png){width="0.4638888888888889in"   
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ----------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------

## ALWAYS DEPLOY FROM SOURCE CONTROL

You **MUST** ensure all deployments originate from source control to
maintain traceability. Use Git tags or branches to track and manage
deployments.

You **MUST NOT** manually copy changes between environments.

+-----+----------------------------------------------------------------+
| ![  | **WPRS -- Prioritisation incident**                            |
| Pra |                                                                |
| cti | In 2016, a clinical incident review (ref. 58337) found a       |
| cal | missing table alias in a SQL Select statement as the root      |
| tip | cause of certain referrals which had been missed for           |
| s]( | assessment.                                                    |
| ./m |                                                                |
| edi | It found that had the code been deployed from source control,  |
| a/i | the risk of not spotting the error before going live would     |
| mag | have reduced.                                                  |
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

## SELECT AND CONFIGURE GIT CLIENTS

There are many Git clients available. However, Visual Studio is
**RECOMMENDED**, which includes a built-in Git client. Regardless of the
Git client, you **MUST**:

-   Ensure it is properly licenced.

-   Regularly apply the latest security patches.

-   Verify that your Git settings, both local and remote, reflect your
    > NHS Wales identity.

  --------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Git - GUI clients](https://git-scm.com/)
  information](./media/image1.png){width="0.4638888888888889in"   
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ----------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------

## EXCEPTIONS

While there may be reasons to deviate from this guide, exceptions should
be rare and carefully considered.

# ESSENTIAL GOOD PRACTICE CHECKLIST 

+---+------------------------------+---+---------------------+---------+
| * | **Checklist Item**           |   | **Guide or          | **Excep |
| * |                              |   | standard**          | tions** |
| N |                              |   |                     |         |
| o |                              |   |                     |         |
| . |                              |   |                     |         |
| * |                              |   |                     |         |
| * |                              |   |                     |         |
+===+==============================+===+=====================+=========+
| 1 | You store program code in    | ☐ | [Use our source     |         |
|   | our source control systems.  |   | control             |         |
|   |                              |   | sys                 |         |
|   |                              |   | tems](#use-our-sour |         |
|   |                              |   | ce-control-systems) |         |
+---+------------------------------+---+---------------------+---------+
| 2 | You have planned a clear     | ☐ | [Establish a clear  |         |
|   | repo structure.              |   | repo                |         |
|   |                              |   | structu             |         |
|   |                              |   | re](#establish-a-cl |         |
|   |                              |   | ear-repo-structure) |         |
+---+------------------------------+---+---------------------+---------+
| 3 | You follow a documented,     | ☐ | [Follow a branching |         |
|   | well-understood branching    |   | s                   |         |
|   | strategy.                    |   | trategy](#follow-a- |         |
|   |                              |   | branching-strategy) |         |
+---+------------------------------+---+---------------------+---------+
| 4 | You have a versioning        | ☐ | [Implement a        |         |
|   | strategy that clearly        |   | versioning          |         |
|   | indicates breaking changes   |   | strat               |         |
|   | in updated versions.         |   | egy](#implement-a-v |         |
|   |                              |   | ersioning-strategy) |         |
+---+------------------------------+---+---------------------+---------+
| 5 | Your write clear commit      | ☐ | [Write clear commit |         |
|   | messages following the       |   | m                   |         |
|   | conventional commits         |   | essages](#write-cle |         |
|   | specification.               |   | ar-commit-messages) |         |
+---+------------------------------+---+---------------------+---------+
| 6 | You use an automated build   | ☐ | [Always deploy from |         |
|   | and deployment pipeline that |   | source              |         |
|   | builds all components and    |   | contro              |         |
|   | includes validation checks,  |   | l](#always-deploy-f |         |
|   | such as unit tests, linting, |   | rom-source-control) |         |
|   | and schema validation.       |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 7 | You have an automated build  | ☐ | [Always deploy from |         |
|   | and deployment pipeline (or  |   | source              |         |
|   | re-runnable and              |   | contro              |         |
|   | source-controlled scripts)   |   | l](#always-deploy-f |         |
|   | for relevant environments,   |   | rom-source-control) |         |
|   | such as -                    |   |                     |         |
|   |                              |   |                     |         |
|   | *System Integration Testing* |   |                     |         |
|   | (sometimes called *Test* or  |   |                     |         |
|   | *QA*)                        |   |                     |         |
|   |                              |   |                     |         |
|   | *User Acceptance Testing*    |   |                     |         |
|   | (if applicable)              |   |                     |         |
|   |                              |   |                     |         |
|   | *Production*                 |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 8 | You manage deployments to    | ☐ | [Always deploy from |         |
|   | each environment using Git's |   | source              |         |
|   | branch and tag commands.     |   | contro              |         |
|   |                              |   | l](#always-deploy-f |         |
|   |                              |   | rom-source-control) |         |
+---+------------------------------+---+---------------------+---------+
