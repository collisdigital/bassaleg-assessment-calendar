# Examples

## Unecessary using statements

!!! danger "Examples of practices to avoid"
    namespace Example

    {

    using System;

    using System.Collections.Generic;

    internal class BadClass

    {

    static void Main(string\[\] args)

    {

    Console.WriteLine("I\'m using statements unnecessarily!");

    Console.WriteLine("I\'m bad, shamone!");

    }

    }

    }

| **Rule ID** | **Rule Title** |
| --- | --- |
| [IDE0005](https://learn.microsoft.com/en-gb/dotnet/fundamentals/code-analysis/style-rules/ide0005) | Using directive is unnecessary. |

## Use our namespace conventions

!!! example "Examples of good practice"
    NhsWales.Wcp.Portal ​

    DHCW.Wis.Reports

## Consider your use of var

!!! example "Examples of good practice"
    var patient = new Patient();

    Patient myPatient = new Patient();

    var patientCount = Ward.getPatientCount();

    int patientCount = Ward.getPatientCount();

    var myPatient = Demographics.getPerson(NHSNumber);

    Person myPatient = Demographics.getPerson(NHSNumber);

## Name parameters

!!! example "Examples of good practice"
    var permissions = getUsersAccessPermissions(\"ge000001\", isLoggedIn: true); ​

    var permissions = getUsersAccessPermissions(\"ge000001\", true);

!!! tip "Practical tips"
    Enable Visual Studio\'s inline parameter hints to show argument names before function call arguments

## Prioritise readability over brevity

!!! danger "Examples of practices to avoid"
    SearchOnUserName(string id);

    SearchOnUsersFullName(string nadexID);

    SearchOnUsersFullName(string activeDirectoryUserId);

## Use underscores only in unit test names

!!! example "Examples of good practice"
    SearchOnUsersFullName_ValidActiveDirectoryUserIdProvided\_ReturnsUsersFullName()

    Search_On_UsersFullName(string activeDirectoryUserId);

## Ensure boolean names are phrased as questions

!!! example "Examples of good practice"
    bool IsTrue;

    bool condtionChecker;

    bool IsOpen;

    bool open;

    bool IsActive;

    bool status;

## Use prefixes and suffixes only when specified by conventions

!!! danger "Examples of practices to avoid"
    string strActiveDirectoryUserId;

    int iPatientCount;

    var iPatientCount;

    GetUsersFullName(string p_activeDirectoryUserId);

|  | **Prefix** | **Usage** | **Language** |
| --- | --- | --- | --- |
|  | **I** | **Interface** definitions | *C#* |
|  | **T** | Generic **Type** definitions. Simply use T if only one Type is defined. | *C#* |
|  | **T** | Type definitions | *Delphi* |
|  | **P** | **Pointers** to *Type* definitions | *Delphi* |
|  | **A** | Use to distinguish parameters with the same name as private member variables. | *Delphi* |

## Using braces

!!! danger "Examples of practices to avoid"
    if (isLoggedIn)\ DisplayHomePage();

    if (isLoggedIn) DisplayHomePage();

    if (isLoggedIn)

    {

    DisplayHomePage();

    }

    if (isLoggedIn) { DisplayHomePage(); }

| **Rule ID** | **Rule Title** |
| --- | --- |
| [IDE0011](https://learn.microsoft.com/en-gb/dotnet/fundamentals/code-analysis/style-rules/ide0011) | Add braces to 'if' statement. |

## Code comments

-----------------------------------------------------------------------------------------------------------------------------
                              height="3.3645833333333335in"}
  --------------------------------------------------------- -------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------

