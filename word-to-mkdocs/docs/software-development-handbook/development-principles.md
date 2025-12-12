# Development principles

## Ahdere to a solutions architecture

Software **SHOULD** align with our API-first and Cloud-first strategies.
Follow a Solutions Architecture Design, reviewed by the Technical Design
Assurance Group, to meet these goals.

!!! info "Further reading and information"
    SDS-CS-4 RESTful API Design and Build Standards

    [Architectural principles \| Microsoft Learn](https://learn.microsoft.com/en-gb/dotnet/architecture/modern-web-apps-azure/architectural-principles)

## Write modular code

Build modular code using APIs and NuGet packages.

!!! info "Further reading and information"
    SDS-CS-7 Azure DevOps Handbook

!!! tip "Practical tips"
    Sharing validated, trusted code is a principle of secure coding.

## Use version control

Effective source control is essential. Follow our guide for help.

!!! note "**SDS-CS-1** **Using source control**"
    - Structure repositories for clarity and scalability.

    ```{=html} <!-- --> ``` - Use consistent branching and merging strategies.

    - Follow versioning conventions to track releases.

    - Write clear, conventional commit messages.

    - Conduct constructive code reviews.

!!! info "Further reading and information"
    SDS-CS-1 Using Source Control

    SDS-CS-4 RESTful API Design and Build Standards

    SDS-CS-7 Azure DevOps Handbook

    [What is Git? - Azure DevOps \| Microsoft Learn](https://learn.microsoft.com/en-gb/devops/develop/git/what-is-git)

!!! tip "Practical tips"
    Apply source control to databases and application code.

## Follow coding standards

Deliver reliable, maintainable software by adhering to these guides:

!!! note "**SDS-CS-3** **T-SQL standard**"
    Rules for table design, maintainable queries, procedures, and transaction handling.

!!! note "**SDS-CS-5 Organise your solution**"
    Guidance on project structure, folder conventions, documentation, and dependency layering.

!!! note "**SDS-CS-6 General coding standards**"
    Clean code, defensive coding, implementing SOLID principles and Microsoft formatting and naming standards.

!!! info "Further reading and information"
    SDS-CS-3 T-SQL Coding Standard

    SDS-CS-5 How to Organise your Software Solution

    SDS-CS-6 General Coding Standards

## Adopt contnuous integration (ci) and continuous delivery (cd)

All teams **MUST** use CI/CD to improve quality and accelerate the
frequency of deployment.

!!! info "Further reading and information"
    [Use continuous integration - Azure DevOps \| Microsoft Learn](https://learn.microsoft.com/en-gb/devops/develop/what-is-continuous-integration)

    [What is continuous delivery? - Azure DevOps \| Microsoft Learn](https://learn.microsoft.com/en-gb/devops/deliver/what-is-continuous-delivery)

    [Continuous Delivery vs Continuous Deployment - Continuous Deliv ery](https://continuousdelivery.com/2010/08/continuous-delivery-vs-continuous-deployment/#:~:text=While%20continuous%20deployment%20implies%20continuous,in%20the%20hands%20of%20IT.&text=That%20means%20no%20more%20testing,you're%20using%20Scrum)

    [What is DevOps? - Azure DevOps \| Microsoft Learn](https://learn.microsoft.com/en-gb/devops/what-is-devops?view=azure-devops)

For full guidance on how to implement CI/CD, refer to the references
below:

!!! info "Further reading and information"
    SDS-CS-1 Using Source Control

    SDS-CS-7 Azure DevOps Handbook

## Publishing as open source

The *Digital Service Standard for Wales* and the *Welsh Technical
Standards Board* encourage making source code open. But this guide does
not cover open-source publishing.

If you plan to make your source code open, you **SHOULD** obtain the
necessary approval and comply with any necessary organisational or legal
requirements.

!!! info "Further reading and information"
    [Digital Service Standards - Digital Public Service Wales (gov.wales)](https://digitalpublicservices.gov.wales/toolbox/digital-service-standards/#work-open)

    [Welsh Technical Standards Board \| A statement of p rinciples](https://standards.cymru/posts/2018-12-01-wtsb/#4-open-by-default-open-technical-standards-and-open-source-code)

    [Public Repos · GIGCymru/GitHub-GIG-Cymru Wiki](https://github.com/GIGCymru/GitHub-GIG-Cymru/wiki/Public-Repos)

!!! tip "Practical tips"
    Access to *github.com/GIGCymru/GitHub-GIG-Cymru/wiki/Public-Repos* requires a DHCW GitHub Enterprise account.

