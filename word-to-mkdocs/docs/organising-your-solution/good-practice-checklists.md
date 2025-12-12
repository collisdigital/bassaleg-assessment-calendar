# Good practice checklists

Use this checklist to demonstrate you follow our coding standards.

We cross-reference each checklist item to a relevant section in our
standards and guides; Exceptions are noted where they may apply.

## Folder structure good practice

| **Item** |  |  | **Guide or standard** | **Exceptions** |
| --- | --- | --- | --- | --- |
| 1 | You use physical folders to separate logical areas of your software solution | ☐ | [*Use physical folders*](use-physical-folders.md) |  |
| 2 | You include a README markdown file, instructing others on how to build and deploy your software solution | ☐ | [*Provide a README file*](#provide-a-readme-file-rootfoldernamereadme.md) |  |
| 3 | You include a .editorconfig to allow your code style rules to be shared | ☐ | [*Provide a .editorconfig file*](#create-a-.editorconfig-file) |  |
| 4 | You include a *source* folder | ☐ | [*Include a source folder*](#create-a-source-folder-.rootfoldernamesrc) |  |
| 5 | You create subfolders to separate dependency layers | ☐ | [*Use additional subfolders for dependency layers*](use-additional-sub-folders-for-dependency-layers-srcdependencylayer.md) |  |
| 6 | You include a *documents* folder | ☐ | [*Include a documents folder*](#provide-a-documents-folder-.rootfoldernamespecsdocs) |  |
| 7 | You include folder for coded tests | ☐ | [*Include a test folder*](#provide-a-test-folder-.rootfoldernamespecstest) |  |
| 8 | You include a *builds* folder | ☐ | [*Include a build folder*](#provide-a-build-folder-.rootfoldernamebuild) |  |
| 9 | You include a *deploy* folder | ☐ | [*Include a deploy folder*](#provide-a-deploy-folder-.rootfoldernamedeploy) | May only be required if deploying to cloud |
| 10 | You provide examples with your solution | ☐ | [*Include an examples folder*](#provide-an-examples-folder-.rootfoldernameexamples) |  |

[^1]: For example, if you are building on published specs -- such HL7
    FHIR.

[^2]: .*exe, .ps1 .sql* and .*cmd* files for example.

