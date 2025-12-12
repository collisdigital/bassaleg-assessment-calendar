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
| Lead Software Developers' Group      | 05     | Approved             |
|                                      | /02/24 |                      |
+--------------------------------------+--------+----------------------+
| Technical Design Assurance Group     | 19     | Approved             |
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

[1 PURPOSE [6](#purpose)](#purpose)

[2 SCOPE [6](#scope)](#scope)

[2.1 IN-SCOPE [6](#in-scope)](#in-scope)

[2.2 OUT-OF-SCOPE [6](#out-of-scope)](#out-of-scope)

[3 REFERENCES [7](#references)](#references)

[4 CONVENTIONS [7](#conventions)](#conventions)

[5 THE NEED FOR GUIDANCE
[7](#the-need-for-guidance)](#the-need-for-guidance)

[6 GENERAL PRINCIPLES [8](#general-principles)](#general-principles)

[7 DEFINTIONS [9](#defintions)](#defintions)

[8 DESIGN STANDARDS [10](#design-standards)](#design-standards)

[8.1 FHIR (FAST HEALTHCARE INTEROPERABILITY STANDARDS)
[10](#fhir-fast-healthcare-interoperability-standards)](#fhir-fast-healthcare-interoperability-standards)

[8.2 DATA CLASSIFICATION
[10](#data-classification)](#data-classification)

[8.3 OPEN API SPECIFICATION
[10](#open-api-specification)](#open-api-specification)

[8.4 URL STRUCTURE [11](#url-structure)](#url-structure)

[8.5 RETRIEVING RELATED DATA
[12](#retrieving-related-data)](#retrieving-related-data)

[8.6 HTTP IMPLEMENTATION
[13](#http-implementation)](#http-implementation)

[8.7 PAYLOAD RULES [21](#payload-rules)](#payload-rules)

[8.8 JSON RESPONSE PAYLOAD STRUCTURE
[22](#json-response-payload-structure)](#json-response-payload-structure)

[8.9 PAGING [29](#paging)](#paging)

[8.10 FILTERING [33](#filtering)](#filtering)

[8.11 SORTING [36](#sorting)](#sorting)

[8.12 COMPOUND COLLECTION OPERATIONS
[36](#compound-collection-operations)](#compound-collection-operations)

[8.13 NAMING [37](#naming)](#naming)

[8.14 ERROR REPORTING [39](#error-reporting)](#error-reporting)

[8.15 PERFORMANCE AND RESPONSE TIMES
[39](#performance-and-response-times)](#performance-and-response-times)

[8.16 CONCURRENCY CONTROL
[40](#concurrency-control)](#concurrency-control)

[8.17 HANDLING TRANSIENT FAULTS
[41](#handling-transient-faults)](#handling-transient-faults)

[9 SECURITY STANDARDS [42](#security-standards)](#security-standards)

[9.1 API GATEWAY PATTERN
[42](#api-gateway-pattern)](#api-gateway-pattern)

[9.2 OWASP TOP 10 [42](#owasp-top-10)](#owasp-top-10)

[9.3 SECRETS AND CERTIFICATE MANAGEMENT
[42](#secrets-and-certificate-management)](#secrets-and-certificate-management)

[9.4 ENCRYPTION [42](#encryption)](#encryption)

[9.5 SECURITY HEADERS [43](#security-headers)](#security-headers)

[9.6 HTTP MESSAGE CACHING
[43](#http-message-caching)](#http-message-caching)

[9.7 AUTHENTICATION AND AUTHORISATION
[44](#authentication-and-authorisation)](#authentication-and-authorisation)

[10 API MANAGEMENT [47](#api-management)](#api-management)

[10.1 GENERATING AN API PROXY
[47](#generating-an-api-proxy)](#generating-an-api-proxy)

[10.2 PING AND SERVICE STATUS
[48](#ping-and-service-status)](#ping-and-service-status)

[10.3 API LIFECYCLE [48](#api-lifecycle)](#api-lifecycle)

[10.4 DEPLOYMENT [49](#deployment)](#deployment)

[10.5 VERSIONING [50](#versioning)](#versioning)

[10.6 CATALOGUING [52](#cataloguing)](#cataloguing)

[10.7 AUDITING, TRACING AND MONITORING
[52](#auditing-tracing-and-monitoring)](#auditing-tracing-and-monitoring)

[10.8 RATE LIMITING AND THROTTLING
[52](#rate-limiting-and-throttling)](#rate-limiting-and-throttling)

[11 TESTING [53](#testing)](#testing)

[11.1 SHIFT LEFT [53](#shift-left)](#shift-left)

[11.2 AUTOMATE AS MUCH AS YOU CAN
[53](#automate-as-much-as-you-can)](#automate-as-much-as-you-can)

[11.3 VALIDATE THE OPENAPI SPECIFICATION
[53](#validate-the-openapi-specification)](#validate-the-openapi-specification)

[11.4 UNIT TESTS [54](#unit-tests)](#unit-tests)

[11.5 FUNCTIONAL TESTS [54](#functional-tests)](#functional-tests)

[11.6 SECURITY TESTS [54](#security-tests)](#security-tests)

[11.7 PERFORMANCE TESTS [55](#performance-tests)](#performance-tests)

[11.8 USABILITY TESTS [55](#usability-tests)](#usability-tests)

[11.9 KEEP TESTS ORGANISED
[55](#keep-tests-organised)](#keep-tests-organised)

[11.10 TEST SUMMARY REPORT
[55](#test-summary-report)](#test-summary-report)

[11.11 TEST ENVIRONMENT [56](#test-environment)](#test-environment)

[12 TOOLING [56](#tooling)](#tooling)

[12.1 RECOMMENDED TOOLS [56](#recommended-tools)](#recommended-tools)

[13 DOCUMENTATION [57](#documentation)](#documentation)

[13.1 WRITING STYLE [57](#writing-style)](#writing-style)

[13.2 OPENAPI SPECIFICATION
[57](#openapi-specification)](#openapi-specification)

[13.3 DOCUMENT STRUCTURE [58](#document-structure)](#document-structure)

[13.4 DEVELOPER PORTAL [62](#developer-portal)](#developer-portal)

[13.5 SOFTWARE DEVELOPMENT KITS (SDKS)
[62](#software-development-kits-sdks)](#software-development-kits-sdks)

[13.6 EXCEPTIONS [62](#exceptions)](#exceptions)

[14 APPENDIX A: CLASSIFICATIONS
[63](#appendix-a-classifications)](#appendix-a-classifications)

[14.1 API TYPE [63](#api-type)](#api-type)

[14.2 DATA TYPE [64](#data-type)](#data-type)

[14.3 NETWORK ROUTING TYPE
[64](#network-routing-type)](#network-routing-type)

[14.4 CLIENT TYPE [65](#client-type)](#client-type)

[14.5 CLIENT AUTHENTICATION LEVEL
[66](#client-authentication-level)](#client-authentication-level)

[14.6 SERVICE LEVEL [66](#service-level)](#service-level)

[14.7 LIFECYCLE STATUS [67](#lifecycle-status)](#lifecycle-status)

[15 ESSENTIAL GOOD PRACTICE CHECKLIST
[68](#essential-good-practice-checklist)](#essential-good-practice-checklist)

#  PURPOSE

These standards:

-   Specify the requirements for designing and building RESTful APIs.

-   Provide guidance for aligning with our API Strategy & Roadmap.

They are intended for API producers but may also assist teams
integrating APIs into client applications.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              If you have production APIs, you need not introduce breaking
  tips](./media/image1.png){width="0.3937007874015748in"   changes solely to comply. Contact the author for support.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           The API Strategy & Roadmap
  information](./media/image3.png){width="0.4638888888888889in"   
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

# SCOPE

## IN-SCOPE

These standards apply to RESTful APIs designed and built for:

-   Internal use within the organisation.

-   External use by clients, partners, or third parties.

A [good practice checklist](#essential-good-practice-checklist) is also
included to assist teams in achieving compliance.

## OUT-OF-SCOPE

These standards do not apply to:

-   Non-RESTful APIs, including GraphQL, gRPC, and event-driven APIs
    (e.g. Azure Functions).

-   APIs designed primarily to handle large binary data (e.g. image or
    file delivery).

-   Topics outside API design and implementation, such as Domain-driven
    design or microservices architecture.

-   Infrastructure, networking, or Web Application Firewalls (WAF).

-   API publishing pipelines (e.g. via Apigee).

-   Telemetry, monitoring, or general software development practices.

# REFERENCES

  -----------------------------------------------------------------------
  INDEX NUMBER      DOCUMENT NAME
  ----------------- -----------------------------------------------------
  \-                The API Strategy and Roadmap

  SDS-GDN-1         Software development handbook

  SDS-GDN-5         Testing for lost updates

  SDS-GDN-6         How to write a Test Summary Report

  SDS-TEM-5         Test Summary Report template

  SDS-CS-1          Using Source Control

  SDS-CS-5          How to Organise your Software Solution

  SDS-CS-6          General Coding Standards

  IG-TEM-1          Data Protection Impact Assessment Form Template

  DHCW-POL-5        Service Level Target Policy
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
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------
  ![Example of practices to                                    ...and practices to avoid
  avoid](./media/image7.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  -----------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           Links to further guides, information and work instructions. If
  information](./media/image3.png){width="0.4638888888888889in"   a hyperlink is missing, search for the document in our Document
  height="0.4638888888888889in"}                                  Management System.
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

# THE NEED FOR GUIDANCE

Conforming to these standards helps you build APIs that are consistent,
easy to use, safe and secure.

+-----+----------------------------------------------------------------+
| ![  | **Integration as a 'war of attrition'**                        |
| Pra |                                                                |
| cti | Read about Mark Wardle's experience integrating applications   |
| cal | with NHS Wales systems. Mark is a Consultant Neurologist and   |
| tip | Chair of the Welsh Technical Standards Board.                  |
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

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [wardle/concierge: README \>
  information](./media/image3.png){width="0.4638888888888889in"   Background](https://github.com/wardle/concierge#readme)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

# GENERAL PRINCIPLES

The following principles guide these standards:

-   Prioritise user needs.

-   Treat APIs as products, with dedicated teams, lifecycles, and
    roadmaps.

-   Make APIs the primary interface for system interactions.

-   Build APIs that are easy to learn, use, reuse, and integrate.

```{=html}
<!-- -->
```
-   Enable portability with container technologies like Docker.

-   Adopt DevOps practices to deliver continuous value.

-   Build APIs that conform to HL7 FHIR as a foundational
    > interoperability standard.

-   Use REST as the default design style, although you **MAY** choose
    > alternatives when justified.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Appoint a dedicated API Product Owner to prioritise user needs.
  tips](./media/image1.png){width="0.3937007874015748in"   
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | The API Strategy & Roadmap                                    |
| [Fur |                                                               |
| ther | [HL7 FHIR as a foundational standard in all NHS Wales Bodies  |
| rea  | \|                                                            |
| ding | GOV.WALES](https://www.gov.wales/introduction-hl              |
| and  | 7-fhir-foundational-standard-all-nhs-wales-bodies-whc2023018) |
| i    |                                                               |
| nfor | [Fielding Dissertation: CHAPTER 5: Representational State     |
| mati | Transfer (REST)                                               |
| on]( | (uci.edu)](https://www                                        |
| ./me | .ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) |
| dia/ |                                                               |
| imag | [The API Product Mindset                                      |
| e3.p | (google.com)](https://cloud.                                  |
| ng){ | google.com/files/apigee/apigee-api-product-mindset-ebook.pdf) |
| widt |                                                               |
| h="0 | [The principles --- Good                                      |
| .463 | Services                                                      |
| 8888 | ](https://good.services/15-principles-of-good-service-design) |
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

# DEFINTIONS

  -----------------------------------------------------------------------
  **TERM(S)**         **DEFINITION**
  ------------------- ---------------------------------------------------
  API / Server /      A server-side API, including API gateways acting as
  Resource server     reverse proxies. Categorised as *Open, internal* or
                      *client specific.* See [Appendix
                      A](#appendix-a-classifications).

  API Consumer team / Individuals or teams integrating APIs into client
  Consumer            applications. Typically developers or software
                      professionals.

  API Platform team / Manages Apigee tools and standards, simplifying API
  Platform team       implementation.

  API Producer team   Develops backend APIs. Teams can be internal or
                      third-party.

  Authorisation grant Credential representing the end user's
                      authorisation of a client to access API resources.

  Breaking change     An update that causes existing dependent code to
                      fail or behave unexpectedly.

  Calling Application A software application making API requests. Clients
  / Client / Client   may be *Public* (e.g. Single Page Applications) or
  application         *Confidential* (e.g. server-side web applications).

  End User / Resource The user who controls access to specific API
  owner / User        resources.

  End User Delegation Allows users to grant clients permission to access
  / Delegation        API resources.

  Endpoint            The URL or URI representing a unique API resource.

  FHIR Profile        Defines constraints, extensions, and specific use
                      cases for FHIR resources tailored for healthcare
                      systems or domains.

  Namespace           A group of related endpoints providing specific
                      functionality or hierarchy, ensuring clarity and
                      avoiding naming conflicts.

  NHS Wales Identity  Secure Token Service issuing OAuth and OpenID
  Provider            Connect tokens for authentication and
                      authorisation.

  Proxy               Middleware enhancing security, analytics, and API
                      management, acting as a gateway to backend APIs.

  Resource(s) /       Data fields representing objects, accessible via
  resource model(s)   unique URLs or endpoints, forming the API\'s core.

  Service / System    A system exposing one or more API endpoints.
                      Sometimes used interchangeably with Namespace.
  -----------------------------------------------------------------------

# DESIGN STANDARDS

## FHIR (FAST HEALTHCARE INTEROPERABILITY STANDARDS)

APIs **MUST** conform to the FHIR R4 specification when a relevant FHIR
profile exists. Where no suitable profile is available, you may need to
model custom resources following FHIR principles.

FHIR R4 already addresses many fundamental aspects of RESTful API
design. If your API implementation is based on FHIR, you can jump
directly to the [Security](#security-standards) section.

  --------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Wales FHIR Implementation
  information](./media/image3.png){width="0.4638888888888889in"   Guide](https://simplifier.net/guide/fhir-standards-wales-implementation-guide?version=1.0.0)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ----------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------

## DATA CLASSIFICATION

You **MUST** classify resource data types according to the platform
team's data classification framework (see [Appendix
A](#appendix-a-classifications)).

Based on the classification, you **MUST** apply the appropriate security
controls.

For detailed guidance on implementing security measures, refer to the
[Authentication and Authorisation](#authentication-and-authorisation)
section.

## OPEN API SPECIFICATION

You **SHOULD** write an OpenAPI specification before generating
server-side code.

A design-first approach **SHOULD** be used to enable earlier testing and
validation. However, you **MAY** adopt a code-first approach where it
better suits the needs of your project. Refer to the
[Documentation](#documentation) section for further guidance.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Use the API platform team's Open API template to ensure your API
  tips](./media/image1.png){width="0.3937007874015748in"   includes required security schemas and essential operations like
  height="0.3937007874015748in"}                           [Ping and Status](#ping-and-service-status). 
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | [OpenAPI Specification - Version 3.1.0 \|                     |
| [Fur | Swagger](https://swagger.io/specification/)                   |
| ther |                                                               |
| rea  | [OpenAPI & .NET: You\'re Doing It Wrong - Mark Rendle - NDC   |
| ding | London 2023](https://www.youtube.com/watch?v=acGvHkl4uto)     |
| and  |                                                               |
| i    | [C# ASP.NET 5 - Designing Web APIs with Swagger aka OpenAPI   |
| nfor | Specification](https://www.youtube.com/watch?v=l-6cNIVMk6Q)   |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e3.p |                                                               |
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

## URL STRUCTURE

You **SHOULD** follow the structure below to ensure API endpoints are
predictable & hierarchical.

  -----------------------------------------------------------------------
  **HEADER**                   **DESCRIPTION**
  ---------------------------- ------------------------------------------
  Scheme / Protocol            **MUST** always be https://.

  Host / Domain                The platform team manages the domain
                               structure, which **MAY** include a global
                               API context in the fully qualified domain
                               name (FQDN), followed by an environment
                               and subdomain.

  Base path / Context          Represents a grouping of resource
                               endpoints. Sometimes referred to as a
                               Namespace.

  Version                      Versioning requirements and URL rules are
                               described in [Versioning](#versioning).

  Resource / Resource          Represents the primary resource or
  collection                   resource collection exposed by the API.

  Resource identifier          A placeholder for the unique identifier of
                               a resource within a collection.

  ?\[*Query parameters*\]      Used to filter and modify requests. Refer
                               to the [Query
                               Parameters](#query-parameters) section for
                               reserved names.
  -----------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            *https://api.test.wales.nhs.uk/appointmentsService/patients?sort=firstName *
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ---------------------------------------------------------------------------------------
  ![Example of good                                            *https://api.test.wales.nhs.uk/appointmentsService/patients/{id}/conditions *
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  ![Example of good                                            *https://api.test.wales.nhs.uk/appointmentsService/GPPractices/{id}/slots/{id} *
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  ![Example of good                                            *https://api.test.wales.nhs.uk/referenceData/v2/GPPractices/{id}/Practitioners/{id} *
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  ![Example of practices to                                    *https://api.test.wales.nhs.uk/appointmentsService/patients?sort=firstName *
  avoid](./media/image7.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               
  ----------------------------------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Further examples in this document shorten the full URL structure
  tips](./media/image1.png){width="0.3937007874015748in"   for brevity.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## RETRIEVING RELATED DATA

### USING SEPRARATE URLS FOR RELATED RESOURCES

Endpoints **SHOULD** return only primary resources by default.

To prevent overloading clients, the server **MAY** offer alternative
endpoints to fetch related data.

URLs **SHOULD NOT** exceed two levels of nesting to maintain readability
and usability.

If a resource can be independently accessed without its parent, it
SHOULD have its own top-level endpoint.

  -------------------------------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            *{base}/appointmentsService/patients*
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ------------------------------------------------------------------------------------
  ![Example of good                                            *{base}/appointmentsService/patients/{id}*
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  ![Example of good                                            *{base}/appointmentsService/patients/{id}/conditions*
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  ![Example of good                                            *{base}/appointmentsService/patients/{id}/conditions/{id}*
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  ![Example of practices to                                    *{base}*/appointmentsService/patients/*{id}*/encounters/*{id}*/observations/*{id}*
  avoid](./media/image7.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               
  -------------------------------------------------------------------------------------------------------------------------------------------------

### RETURNING RELATED RESOURCES USING QUERY PARAMETERS

The server **MAY** support include and expand query parameters to
optimise data retrieval.

include **MUST** return navigation links for the specified related
resources.

expand **MUST** embed related data directly within the response.

  -----------------------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            *{base}/appointmentsService/patients/{id}?include=conditions*
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------------------
  ![Example of good                                            *{base}/appointmentsService/patients/{id}?expand=practitioners,conditions*
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  -----------------------------------------------------------------------------------------------------------------------------------------

Additional **RECOMMENDATIONS**:

-   **Separate URLs vs Query Parameters**: Use query parameters only
    when they add value. For complex data retrieval, consider GraphQL.

-   **Balance Performance and Usability**: Overuse of expand can degrade
    performance, while excessive nesting complicates API navigation.

+------+---------------------------------------------------------------+
| !    | [REST Modelling: designing a future-friendly AP \|            |
| [Fur | LinkedIn](https://www.linkedin.com/puls                       |
| ther | e/rest-modeling-designing-future-friendly-api-david-hickey/)  |
| rea  |                                                               |
| ding | [Use links, not keys, to represent relationships in APIs \|   |
| and  | Google Cloud                                                  |
| i    | Blog](https://cloud.google.c                                  |
| nfor | om/blog/products/application-development/api-design-why-you-s |
| mati | hould-use-links-not-keys-to-represent-relationships-in-apis)  |
| on]( |                                                               |
| ./me | [Organise the API design around resources \| Microsoft        |
| dia/ | Learn]                                                        |
| imag | (https://learn.microsoft.com/en-gb/azure/architecture/best-pr |
| e3.p | actices/api-design#organize-the-api-design-around-resources)  |
| ng){ |                                                               |
| widt | [Extraneous Fetching antipattern - Azure Architecture Center  |
| h="0 | \| Microsoft                                                  |
| .463 | Learn](https://learn.microsoft.com                            |
| 8888 | /en-gb/azure/architecture/antipatterns/extraneous-fetching/)  |
| 8888 |                                                               |
| 8888 | [Chatty I/O antipattern - Performance antipatterns for cloud  |
| 9in" | apps \| Microsoft                                             |
| he   | Learn](https://learn.mic                                      |
| ight | rosoft.com/en-gb/azure/architecture/antipatterns/chatty-io/)  |
| ="0. |                                                               |
| 4638 |                                                               |
| 8888 |                                                               |
| 8888 |                                                               |
| 8889 |                                                               |
| in"} |                                                               |
+======+===============================================================+
+------+---------------------------------------------------------------+

## HTTP IMPLEMENTATION

APIs **MUST** follow standard HTTP semantics to ensure consistency,
predictability and interoperability. This section outlines good
practice, but refer to official specs when needed:

+------+---------------------------------------------------------------+
| !    | [RFC 9110: HTTP Semantics - Status Codes                      |
| [Fur | (rfc-editor.org)](h                                           |
| ther | ttps://www.rfc-editor.org/rfc/rfc9110.html#name-status-codes) |
| rea  |                                                               |
| ding | [API design best practices - Conform to HTTP semantics \|     |
| and  | Microsoft                                                     |
| i    | Learn](https://learn.microsoft.com/en-gb/azure/arch           |
| nfor | itecture/best-practices/api-design#conform-to-http-semantics) |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e3.p |                                                               |
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

### HYPERMEDIA (HATEOS)

A RESTful API **MUST** implement *Hypermedia as the Engine of
Application State (HATEOAS)* to be classified as *Richardson Level 3*.
HATEOAS allows clients to navigate and manipulate resources dynamically
without requiring prior knowledge of specific URIs.

However, *HATEOAS* is NOT required for APIs in this organisation**.**
But if implemented:

-   The API **MUST** provide hypermedia links to guide clients on
    available actions.

-   These links **SHOULD** use standard link relations where possible
    (e.g. as defined in RFC 8288) and **MUST** be documented in the
    API's OpenAPI definition.

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [RFC 8288: Web
  information](./media/image3.png){width="0.4638888888888889in"   Linking](https://www.rfc-editor.org/rfc/rfc8288.html)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

### HTTP VERBS AND RESOURCE OPERATIONS

APIs **MUST** use standard HTTP methods correctly to ensure predictable
behaviour.

-   APIs **MUST** only expose necessary HTTP methods and **MUST**
    document them in the [OpenAPI definition](#openapi-specification).

-   APIs **SHOULD** return 405 Method Not Allowed for unsupported HTTP
    methods instead of silently ignoring them.

-   APIs **MUST** adhere to the standard HTTP semantics defined in *RFC
    9110,* including idempotency rules.

-   Non-standard HTTP verbs **MUST NOT** be used.

  --------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [RFC 9110: HTTP Semantics - Status Codes
  information](./media/image3.png){width="0.4638888888888889in"   (rfc-editor.org)](https://www.rfc-editor.org/rfc/rfc9110.html#name-status-codes)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ----------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------

### STANDARD HTTP METHODS AND USAGE

  -----------------------------------------------------------------------------------------
  **OPERATION**    **HTTP     **PATH**            **REQUEST   **RESPONSE   **IDEMPOTENT**
                   VERB**                         BODY**      BODY**       
  ---------------- ---------- ------------------- ----------- ------------ ----------------
  **LIST**         GET        /resources          None        Collection   ✅Yes
                                                              Resource     

  **RETRIEVE**     GET        /resources/*{id}*   None        Resource     ✅Yes

  **CREATE**       POST       /resources          Resource    Resource     ❌ No

  **REPLACE**      PUT        /resources/*{id}*   Resource    Resource     ✅Yes

  **MODIFY**       PATCH      /resources/*{id}*   Partial     Resource     ❌ No
                                                  Resource                 

  **DELETE**       DELETE     /resources/*{id}*   None        None         ✅Yes

  **RETRIEVE       HEAD       /resources/*{id}*   None        None         ✅Yes
  HEADERS**                                                                

  **QUERY          OPTIONS    /resources          None        Allowed      ✅Yes
  CAPABILITIES**                                              Methods      
  -----------------------------------------------------------------------------------------

-   GET, HEAD, OPTIONS, and DELETE **MUST NOT** modify resources.

-   PUT and DELETE **MUST** be idempotent to ensure safe retries.

-   PATCH is NOT idempotent unless explicitly designed to be.

-   POST **MUST** be used for non-idempotent operations such as resource
    creation.

### HTTP REQUEST HEADERS

PIs **MUST** support and handle the following request headers:

  -----------------------------------------------------------------------
  **HEADER**          **DESCRIPTION**
  ------------------- ---------------------------------------------------
  Authorization       Used for authentication. APIs **MUST** validate
                      this header and reject malformed requests.

  Content-Type        **MUST** be included in requests with a body.
                      Allowed values: *application/json, application/xml,
                      multipart/form-data,
                      application/x-www-form-urlencoded*.

  Date                **MUST** be formatted as per RFC 5322, e.g. Tue,
                      *11 Oct 2022 09:27:30 GMT.*
  -----------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [RFC 5322 - Internet Message
  information](./media/image3.png){width="0.4638888888888889in"   Format](https://datatracker.ietf.org/doc/html/rfc5322)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

APIs **SHOULD** support the following request headers:

  -----------------------------------------------------------------------------------
  **HEADER**                      **DESCRIPTION**
  ------------------------------- ---------------------------------------------------
  Accept                          Specifies the response format. Default:
                                  *application/json*.

  Access-Control-Request-Method   Used in CORS preflight requests to indicate the
                                  intended HTTP method.
  -----------------------------------------------------------------------------------

APIs **MAY** support additional request headers:

+------------------+---------------------------------------------------+
| **HEADER**       | **DESCRIPTION**                                   |
+==================+===================================================+
| x-api-key        | A legacy authentication method. **MAY** be used   |
|                  | only when legacy support is required. Prefer      |
|                  | Authorization                                     |
+------------------+---------------------------------------------------+
| X-Audit-Consent  | JSON-encoded FHIR consent resource (base64, max   |
|                  | 8KB).                                             |
+------------------+---------------------------------------------------+
| X-Audit-Device   | FHIR identifier for the client device (base64,    |
|                  | max 8KB).                                         |
+------------------+---------------------------------------------------+
| X-Au             | FHIR identifier for the client organisation       |
| dit-Organisation | (base64, max 8KB).                                |
+------------------+---------------------------------------------------+
| X-Audit-User     | FHIR identifier for the authenticated user        |
|                  | (base64, max 8KB).                                |
+------------------+---------------------------------------------------+
| X-Au             | Identifies the client system for auditing.        |
| thenticated_User |                                                   |
+------------------+---------------------------------------------------+
| Cache-Control    | Controls caching (e.g. *no-store*).               |
+------------------+---------------------------------------------------+
| Connection       | Manages connection behaviour (e.g. *keep-alive*). |
+------------------+---------------------------------------------------+
| If-Match ,       | Used for optimistic concurrency control with      |
|                  | resource updates.                                 |
| If-None-Match    |                                                   |
+------------------+---------------------------------------------------+
| Origin           | If present, APIs **MUST** validate it against a   |
|                  | list of allowed origins to ensure security.       |
+------------------+---------------------------------------------------+
| X-Request-Id     | A unique identifier for the API request. If not   |
|                  | provided by the client, this identifier **MAY**   |
|                  | be generated in the API Gateway.                  |
+------------------+---------------------------------------------------+

### HTTP RESPONSE HEADERS

APIs **SHOULD** return the following response headers:

  -------------------------------------------------------------------------------
  **HEADER**                  **DESCRIPTION**
  --------------------------- ---------------------------------------------------
  Cache-Control               Controls caching (e.g. *no-store or private,
                              max-age=3600*).

  Content-Security-Policy     Defines security policies to mitigate XSS and
                              injection (e.g. *frame-ancestors \'none\'*).

  Content-Type                Specifies the response media type (e.g.
                              *application/json or application/xml*). Used only
                              if a message body is returned.

  Location                    On successful resource creation Post, the API
                              **MUST** return a 201 CREATED status and a Location
                              header with the new resource's relative URL.

  Request-Id                  Echoes the unique request identifier provided by
                              the client.

  Strict-Transport-Security   Enforces HTTPS (e.g. *max-age=31536000;
                              includeSubDomains*).

  WWW-Authenticate            Specifies the required authentication method (e.g.
                              *Bearer realm=\"nhswales365\",
                              authorization_uri=\"\...\").*

  X-Content-Type-Options      Prevents MIME sniffing (e.g. *nosniff*).

  X-Frame-Options             Prevents clickjacking (e.g. *SAMEORIGIN or DENY*).
  -------------------------------------------------------------------------------

The following optional response headers **MAY** apply:

  ---------------------------------------------------------------------------------
  **HEADER**                    **DESCRIPTION**
  ----------------------------- ---------------------------------------------------
  Access-Control-Allow-Origin   Specifies allowed origins for web access. If used,
                                the value **MUST** be non-wildcard (i.e., *not
                                \**).

  Content-Security-Policy       Restricts content sources (e.g. *default-src
                                \'none\'*).

  Date                          Response timestamp in RFC 5322 format (e.g. *Tue,
                                11 Oct 2022 09:27:31 GMT*).

  ETag                          Indicates the resource version. Used with If-Match
                                / If-None-Match for optimistic concurrency control.

  Expires                       The date/time after which the response is
                                considered stale (RFC 5322 format).

  Feature-Policy                Defines permitted client-side features (e.g.
                                *none*).

  Referrer-Policy               Specifies the level of referrer information to
                                include (e.g. *no-referrer*).

  Retry-After                   Indicates when a client should retry a failed
                                request (expressed in seconds or as a date - RFC
                                5322 format. RFC 5322 is **RECOMMENDED**.
  ---------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Additional headers **MAY** be added or modified by the API
  tips](./media/image1.png){width="0.3937007874015748in"   gateway to [deprecate or retire](#deprecation-and-retirement) an
  height="0.3937007874015748in"}                           API or apply [rate limiting](#rate-limiting-and-throttling), for
                                                           example. Speak to the platform team for more help.
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [RFC 5322 - Internet Message
  information](./media/image3.png){width="0.4638888888888889in"   Format](https://datatracker.ietf.org/doc/html/rfc5322)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

### RETURN HTTP STATUS CODES

The server **MUST** return the correct HTTP status code for each API
operation, as per RFC 9110. The table below lists common status codes,
but others **MAY** be used if needed.

-   Yes" means the status code applies to that operation.

-   An empty cell means the code is not usually used for that operation.

+---------------------+-------+-------+-------+-------+-------+-------+
| **HTTP STATUS       | **    | **    | **P   | **    | **PA  | **DEL |
| CODE**              | GET** | GET** | OST** | PUT** | TCH** | ETE** |
|                     |       |       |       |       |       |       |
|                     | *     | **(R  | *     | **(R  | **(R  | **(R  |
|                     | *(COL | ESOUR | *(COL | ESOUR | ESOUR | ESOUR |
|                     | LECTI | CE)** | LECTI | CE)** | CE)** | CE)** |
|                     | ON)** |       | ON)** |       |       |       |
+=====================+=======+=======+=======+=======+=======+=======+
| 200 OK              | ✅Yes | ✅Yes |       | ✅Yes | See   |       |
|                     |       |       |       |       | ca    |       |
|                     |       |       |       |       | veats |       |
|                     |       |       |       |       | below |       |
+---------------------+-------+-------+-------+-------+-------+-------+
| 201 CREATED         |       |       | ✅Yes |       |       |       |
+---------------------+-------+-------+-------+-------+-------+-------+
| 202 ACCEPTED        |       |       | ✅Yes | ✅Yes | ✅Yes | ✅Yes |
+---------------------+-------+-------+-------+-------+-------+-------+
| 304 NOT MODIFIED    | See   |       |       |       |       | ✅Yes |
|                     | ca    |       |       |       |       |       |
|                     | veats |       |       |       |       |       |
|                     | below |       |       |       |       |       |
+---------------------+-------+-------+-------+-------+-------+-------+
| 400 BAD REQUEST     | ✅Yes | ✅Yes |       |       |       |       |
+---------------------+-------+-------+-------+-------+-------+-------+
| 401 UNAUTHORIZED    | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes |
+---------------------+-------+-------+-------+-------+-------+-------+
| 403 FORBIDDEN       | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes |
+---------------------+-------+-------+-------+-------+-------+-------+
| 404 NOT FOUND       | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes |
+---------------------+-------+-------+-------+-------+-------+-------+
| 405 METHOD NOT      | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes |
| ALLOWED             |       |       |       |       |       |       |
+---------------------+-------+-------+-------+-------+-------+-------+
| 408 REQUEST TIMEOUT | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes |
+---------------------+-------+-------+-------+-------+-------+-------+
| 409 CONFLICT        |       |       | ✅Yes | ✅Yes |       |       |
+---------------------+-------+-------+-------+-------+-------+-------+
| 412 PRECONDITION    |       |       | ✅Yes | ✅Yes | ✅Yes | See   |
| FAILED              |       |       |       |       |       | ca    |
|                     |       |       |       |       |       | veats |
|                     |       |       |       |       |       | below |
+---------------------+-------+-------+-------+-------+-------+-------+
| 415 UNSUPPORTED     | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes |       |
| MEDIA TYPE          |       |       |       |       |       |       |
+---------------------+-------+-------+-------+-------+-------+-------+
| 422 UNPROCESSABLE   |       |       | ✅Yes | ✅Yes | ✅Yes |       |
| ENTITY              |       |       |       |       |       |       |
+---------------------+-------+-------+-------+-------+-------+-------+
| 428 PRECONDITIONS   |       |       | ✅Yes | ✅Yes | ✅Yes | See   |
| REQUIRED            |       |       |       |       |       | ca    |
|                     |       |       |       |       |       | veats |
|                     |       |       |       |       |       | below |
+---------------------+-------+-------+-------+-------+-------+-------+
| 429 TOO MANY        | See   |       |       |       |       |       |
| REQUESTS            | ca    |       |       |       |       |       |
|                     | veats |       |       |       |       |       |
|                     | below |       |       |       |       |       |
+---------------------+-------+-------+-------+-------+-------+-------+
| 500 INTERNAL SERVER | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes |
| ERROR               |       |       |       |       |       |       |
+---------------------+-------+-------+-------+-------+-------+-------+
| 501 NOT IMPLEMENTED | See   |       |       | ✅Yes | ✅Yes | ✅Yes |
|                     | ca    |       |       |       |       |       |
|                     | veats |       |       |       |       |       |
|                     | below |       |       |       |       |       |
+---------------------+-------+-------+-------+-------+-------+-------+
| 502 BAD GATEWAY     | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes |
+---------------------+-------+-------+-------+-------+-------+-------+
| 503 SERVICE         | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes |
| UNAVAILABLE         |       |       |       |       |       |       |
+---------------------+-------+-------+-------+-------+-------+-------+
| 504 GATEWAY TIMEOUT | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes | ✅Yes |
+---------------------+-------+-------+-------+-------+-------+-------+

**Caveats and edge cases**

-   While PATCH can return 200 OK with the updated resource, 202
    ACCEPTED is preferred for asynchronous processing. But some
    implementations **MAY** choose to return 200 OK instead.

-   304 NOT MODIFIED applies only when the API supports caching with
    conditional GET requests. The server **MAY** return 304 NOT MODIFIED
    if the client's cached version is still valid.

```{=html}
<!-- -->
```
-   Use 409 CONFLICT when there\'s a conflict with the current state of
    the target resource. Use 422 UNPROCESSABLE ENTITY when the server
    understands the request but can\'t process it due to semantic
    errors.

-   Use 409 CONFLICT when there\'s a conflict with the current state of
    the target resource. Use 422 UNPROCESSABLE ENTITY when the server
    understands the request but can\'t process it due to semantic
    errors.

-   While 415 UNSUPPORTED MEDIA TYPE is typically used for POST, PUT and
    PATCH, it **MAY** apply to GET if a body is sent with an unsupported
    media type --- although this is rare.

-   412 PRECONDITION FAILED and 428 PRECONDITIONS REQUIRED are typically
    used for POST, PUT and PATCH. However, some designs **MAY** also
    apply them to DETETE if preconditions are enforced.

> Use 428 PRECONDITIONS REQUIRED when the server requires the request to
> be conditional, typically to prevent the \"lost update\" problem. Use
> 412 PRECONDITION FAILED when a precondition specified in the request
> isn\'t met.

-   Typically our API platform will apply rate limiting and return 429
    TOO MANY REQUESTS when appropriate.

-   Some designs **MAY** extend the use of 501 NOT IMPLEMENTED to other
    methods if a particular method is not supported by the server.

  --------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [RFC 9110: HTTP Semantics - Status Codes
  information](./media/image3.png){width="0.4638888888888889in"   (rfc-editor.org)](https://www.rfc-editor.org/rfc/rfc9110.html#name-status-codes)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ----------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------

###  

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              **Note: Sections 8.1 to 8.14 don\'t apply to FHIR APIs. Follow
  tips](./media/image1.png){width="0.3937007874015748in"   the FHIR R4 spec instead.**
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## PAYLOAD RULES

Some rules in this section align with JSON API, while others differ. You
**MAY** follow the complete JSON API specification, but you **MUST**
carefully consider its impact.

### ENCODING AND CONTENT NEGOTIATION

For encoding, you **SHOULD** use \"UTF-8\".

Unicode **MUST** be used as the standard encoding for all text
representations of dates in APIs, and it is the default for JSON.

The server **SHOULD** represent resources in JSON (RFC 8259/ECMA-404) by
default, defined as application/json in the OpenAPI specification.

You **MAY** add extra media types, but they **MUST** be described in the
OpenAPI definition.

If your API can return multiple media types, it **SHOULD** return the
first supported type indicated in the HTTP Request's Accept header.

If the requested media types are unsupported, the server **SHOULD**
return an HTTP response with status 415 UNSUPPORTED MEDIA TYPE.

### DATE FORMATS

HTTP headers containing datetime values **MUST** use the RFC 5322
format:

-   ddd, dd MMM yyyy HH:mm:ss Z

Dates or timestamps in the JSON payload of the response MUST conform to
the RFC 3339 format:

-   YYYY-MM-DDTHH:mm:ssZ

### PAYLOAD SIZE

For performance reasons, the server **SHOULD** use [paging](#paging) for
large datasets or binary objects.\
The server **SHOULD** keep the total payload size below 2 MB and
**MUST** ensure that it does not exceed 10 MB, as this is a hard limit
for some platforms.

+------+---------------------------------------------------------------+
| !    | [JSON:API --- A specification for building APIs in            |
| [Fur | JSON](https://jsonapi.org/)                                   |
| ther |                                                               |
| rea  | [RFC 8259: The JavaScript Object Notation (JSON) Data         |
| ding | Interchange Format](https://www.rfc-editor.org/rfc/rfc8259)   |
| and  |                                                               |
| i    | [ECMA-404 - Ecma                                              |
| nfor | International](https://ecma-inte                              |
| mati | rnational.org/publications-and-standards/standards/ecma-404/) |
| on]( |                                                               |
| ./me | [RFC 5322 - Internet Message                                  |
| dia/ | Format](https://datatracker.ietf.org/doc/html/rfc5322)        |
| imag |                                                               |
| e3.p | [RFC 3339 - Date and Time on the Internet:                    |
| ng){ | Timestamps](https://datatracker.ietf.org/doc/html/rfc3339)    |
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

## JSON RESPONSE PAYLOAD STRUCTURE

### RESPONSE FORMAT

JSON response payloads **SHOULD** adhere to the following structure:

├── meta (Object, 0..1)

├── data (Object, 0..1)

├── links (Object, 0..1)

│ ├── href (String, 1..1)

│ └── rel (String, 1..1)

└── errors (Object, 0..1)

├── type (String, 1..1)

├── title (String, 1..1)

├── status (Number, 1..1)

├── detail (String, 1..1)

├── instance (String, 0..1)

└── invalidParams (Array, 0..1)

  ------------------------------------------------------------------------------------
  **ELEMENT**     **TYPE**   **CARDINALITY**   **DESCRIPTION**
  --------------- ---------- ----------------- ---------------------------------------
  meta            Object     0..1              Contains metadata (e.g. pagination
                                               details such as offset, pageOffset,
                                               pageSize, total)

  data            Object     0..1              Contains the primary resource or a
                                               resource collection. When returning a
                                               single resource, you **MAY** place the
                                               resource directly inside data without
                                               nesting.

  links           Object     0..1              Provides links to related resources or
                                               partial results. **SHOULD** only
                                               identify resources in the same
                                               versioned Namespace.

  errors          Object     0..1              Contains error details as per *RFC
                                               7807*. If present no other top-level
                                               objects should be returned..

  href            String     1..1              The URL to a nested resource or the
                                               next set of items.

  rel             String     1..1              Relation value. Use a standard Link
                                               Relation Type if available.

  type            1..1       String            URL to the API's error documentation.

  title           1..1       String            A short, human-readable summary of the
                                               error.

  status          1..1       Number            Status code (e.g. 400 BAD REQUEST).

  detail          1..1       String            Detailed error description for
                                               troubleshooting.

  instance        0..1       String            URL or path to the resource that caused
                                               the error.

  invalidParams   0..1       Array             Array of objects specifying invalid
                                               parameters and reasons.
  ------------------------------------------------------------------------------------

### GET OPERATION ON AN INDIVIDUAL RESOURCE

For a GET operation on an individual resource, the response **SHOULD**
enclose the primary resource within a data object. The outer property
name uses the singular form of the resource name.

+-----+----------------------------------------------------------------+
| ![E | GET /{base}/patients/9991234566                                |
| xam |                                                                |
| ple | // 200 OK                                                      |
| of  |                                                                |
| g   | Content-Type: application/json; charset=utf-8                  |
| ood |                                                                |
| p   | {                                                              |
| rac |                                                                |
| tic | \"data\": {                                                    |
| e]( |                                                                |
| ./m | \"NHSNumber\": \"9991234566\",                                 |
| edi |                                                                |
| a/i | \"firstName\": \"Humphrey\",                                   |
| mag |                                                                |
| e5. | \"lastName\": \"Appleby\"                                      |
| png |                                                                |
| ){w | }                                                              |
| idt |                                                                |
| h=" | }                                                              |
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

Direct

+-----+----------------------------------------------------------------+
| ![E | GET /{base}/patients/9991234566                                |
| xam |                                                                |
| ple | // 200 OK                                                      |
| of  |                                                                |
| g   | Content-Type: application/json; charset=utf-8                  |
| ood |                                                                |
| p   | {                                                              |
| rac |                                                                |
| tic | \"data\": {                                                    |
| e]( |                                                                |
| ./m | \"patient\": {                                                 |
| edi |                                                                |
| a/i | \"NHSNumber\": \"9991234566\",                                 |
| mag |                                                                |
| e5. | \"firstName\": \"Humphrey\",                                   |
| png |                                                                |
| ){w | \"lastName\": \"Appleby\",                                     |
| idt |                                                                |
| h=" | // \... other patient details \...                             |
| 0.1 |                                                                |
| 968 | }                                                              |
| 503 |                                                                |
| 937 | }                                                              |
| 007 |                                                                |
| 874 | }                                                              |
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

Nested

### GET OPERATION ON A COLLECTION OF RESOURCES

For a collection of resources, the response **SHOULD** enclose the
resource collection within a data object, using the plural form of the
resource name.

A collection with 0 items **SHOULD** return HTTP 200 OK rather than 404
NOT FOUND

+-----+----------------------------------------------------------------+
| ![E | GET /{base}/patients                                           |
| xam |                                                                |
| ple | // 200 OK                                                      |
| of  |                                                                |
| g   | Content-Type: application/json; charset=utf-8                  |
| ood |                                                                |
| p   | {                                                              |
| rac |                                                                |
| tic | \"data\": {                                                    |
| e]( |                                                                |
| ./m | \"patients\": \[                                               |
| edi |                                                                |
| a/i | {                                                              |
| mag |                                                                |
| e5. | \"NHSNumber\": \"9991234566\",                                 |
| png |                                                                |
| ){w | \"firstName\": \"Humphrey\",                                   |
| idt |                                                                |
| h=" | \"lastName\": \"Appleby\",                                     |
| 0.1 |                                                                |
| 968 | // \... other patient details \...                             |
| 503 |                                                                |
| 937 | },                                                             |
| 007 |                                                                |
| 874 | {                                                              |
| in" |                                                                |
| hei | \"NHSNumber\": \"9991234567\",                                 |
| ght |                                                                |
| ="0 | \"firstName\": \"Jim\",                                        |
| .19 |                                                                |
| 685 | \"lastName\": \"Hacker\",                                      |
| 039 |                                                                |
| 370 | // \... other patient details \...                             |
| 078 |                                                                |
| 74i | },                                                             |
| n"} |                                                                |
|     | // \... more patients \...                                     |
|     |                                                                |
|     | \]                                                             |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | }                                                              |
+=====+================================================================+
+-----+----------------------------------------------------------------+

Non-empty collection example

+-----+----------------------------------------------------------------+
| ![E | GET /*{base}/*patients                                         |
| xam |                                                                |
| ple | // 200 OK                                                      |
| of  |                                                                |
| g   | Content-Type: application/json; charset=utf-8                  |
| ood |                                                                |
| p   | {                                                              |
| rac |                                                                |
| tic | \"data\": \[\]                                                 |
| e]( |                                                                |
| ./m | }                                                              |
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

Empty collection - valid example

+-----+----------------------------------------------------------------+
| ![E | GET /*{base}/*patients                                         |
| xam |                                                                |
| ple | // 404 NOT FOUND                                               |
| of  |                                                                |
| pra | Content-Type: application/json; charset=utf-8                  |
| cti |                                                                |
| ces | {                                                              |
| to  |                                                                |
| a   | \"data\": \[\]                                                 |
| voi |                                                                |
| d]( | }                                                              |
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
+=====+================================================================+
+-----+----------------------------------------------------------------+

Empty collection - invalid example

[\
]{.mark}

### GET OPERATION ON NESTED RESOURCES

For nested resources, the response **SHOULD** either embed the nested
resources or provide navigable links in the links object. See also
[Returning related resources using query
parameters](#returning-related-resources-using-query-parameters).

+-----+----------------------------------------------------------------+
| ![E | GET                                                            |
| xam | /*{base}/*patients/9991234566?expand=practitioners,conditions  |
| ple |                                                                |
| of  | // 200 OK                                                      |
| g   |                                                                |
| ood | Content-Type: application/json; charset=utf-8                  |
| p   |                                                                |
| rac | {                                                              |
| tic |                                                                |
| e]( | \"data\": {                                                    |
| ./m |                                                                |
| edi | \"patient\": {                                                 |
| a/i |                                                                |
| mag | \"NHSNumber\": \"9991234566\",                                 |
| e5. |                                                                |
| png | \"firstName\": \"Humphrey\",                                   |
| ){w |                                                                |
| idt | \"lastName\": \"Appleby\",                                     |
| h=" |                                                                |
| 0.1 | // \... other patient details \...                             |
| 968 |                                                                |
| 503 | \"practitioner\": {                                            |
| 937 |                                                                |
| 007 | \"id\": \"123\",                                               |
| 874 |                                                                |
| in" | \"name\": \"Dr. Liz Asher\",                                   |
| hei |                                                                |
| ght | // \... other details of the primary care provider \...        |
| ="0 |                                                                |
| .19 | },                                                             |
| 685 |                                                                |
| 039 | \"conditions\": \[                                             |
| 370 |                                                                |
| 078 | {                                                              |
| 74i |                                                                |
| n"} | \"id\": \"1\",                                                 |
|     |                                                                |
|     | \"name\": \"Hypertension\",                                    |
|     |                                                                |
|     | // \... other details of the condition \...                    |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | {                                                              |
|     |                                                                |
|     | \"id\": \"2\",                                                 |
|     |                                                                |
|     | \"name\": \"Diabetes\",                                        |
|     |                                                                |
|     | // \... other details of the condition \...                    |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | // \... more condition records \...                            |
|     |                                                                |
|     | \]                                                             |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | }                                                              |
+=====+================================================================+
+-----+----------------------------------------------------------------+

Embedded resources example (using the expand parameter)

+-----+----------------------------------------------------------------+
| ![E | GET /*{base}/*patients?include=conditions,practitioners        |
| xam |                                                                |
| ple | // 200 OK                                                      |
| of  |                                                                |
| g   | {                                                              |
| ood |                                                                |
| p   | \"data\": {                                                    |
| rac |                                                                |
| tic | \"patient\": {                                                 |
| e]( |                                                                |
| ./m | \"NHSNumber\": \"9991234566\",                                 |
| edi |                                                                |
| a/i | \"firstName\": \"Humphrey\",                                   |
| mag |                                                                |
| e5. | \"lastName\": \"Appleby\",                                     |
| png |                                                                |
| ){w | // \... other patient details \...                             |
| idt |                                                                |
| h=" | }                                                              |
| 0.1 |                                                                |
| 968 | },                                                             |
| 503 |                                                                |
| 937 | \"links\": {                                                   |
| 007 |                                                                |
| 874 | \"practitioner\": {                                            |
| in" |                                                                |
| hei | \"href\": \"/practitioners/123\",                              |
| ght |                                                                |
| ="0 | \"rel\": \"practitioner\",                                     |
| .19 |                                                                |
| 685 | \"NHSNumber\": \"9991234566\"                                  |
| 039 |                                                                |
| 370 | },                                                             |
| 078 |                                                                |
| 74i | \"conditions\": \[                                             |
| n"} |                                                                |
|     | {                                                              |
|     |                                                                |
|     | \"href\": \"/conditions/1\",                                   |
|     |                                                                |
|     | \"rel\": \"condition\",                                        |
|     |                                                                |
|     | \"NHSNumber\": \"9991234566\"                                  |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | {                                                              |
|     |                                                                |
|     | \"href\": \"/conditions/2\",                                   |
|     |                                                                |
|     | \"rel\": \"condition\",                                        |
|     |                                                                |
|     | \"NHSNumber\": \"9991234566\"                                  |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | \]                                                             |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | }                                                              |
+=====+================================================================+
+-----+----------------------------------------------------------------+

Linked resources example (using the include parameter)

  -------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Link Relations
  information](./media/image3.png){width="0.4638888888888889in"   (www.iana.org)](https://www.iana.org/assignments/link-relations/link-relations.xhtml)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------

### DATA OPERATIONS (POST, PUT & PATCH)

For data operations such as POST, PUT, or PATCH, the request **SHOULD**
include the primary resource data. After a successful POST operation on
a collection, the server **SHOULD** create and return a unique resource
identifier.

+-----+----------------------------------------------------------------+
| ![E | POST /*{base}/*patients                                        |
| xam |                                                                |
| ple | Host: //some host                                              |
| of  |                                                                |
| g   | Content-Type: application/json; charset=utf-8                  |
| ood |                                                                |
| p   | {                                                              |
| rac |                                                                |
| tic | \"data\": {                                                    |
| e]( |                                                                |
| ./m | \"patient\": {                                                 |
| edi |                                                                |
| a/i | // \... patient details \...                                   |
| mag |                                                                |
| e5. | }                                                              |
| png |                                                                |
| ){w | }                                                              |
| idt |                                                                |
| h=" | }                                                              |
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

Example request

+-----+----------------------------------------------------------------+
| ![E | 201 Created                                                    |
| xam |                                                                |
| ple | Location Header: /{base}/patients/{9991234568}                 |
| of  |                                                                |
| g   | Content-Type: application/json; charset=utf-8                  |
| ood |                                                                |
| p   | {                                                              |
| rac |                                                                |
| tic | \"data\": {                                                    |
| e]( |                                                                |
| ./m | \"patient\": {                                                 |
| edi |                                                                |
| a/i | \"NHSNumber\": \"9991234568\", // The server-generated unique  |
| mag | identifier                                                     |
| e5. |                                                                |
| png | // \... other patient details \...                             |
| ){w |                                                                |
| idt | }                                                              |
| h=" |                                                                |
| 0.1 | }                                                              |
| 968 |                                                                |
| 503 | }                                                              |
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

Example response

### RETURNING AN ERROR

When returning an error, the server **SHOULD** follow the *RFC 7807*
format. This ensures that error information is provided in a consistent
and standardised manner. See [Error reporting](#error-reporting) for
more details.

+-----+----------------------------------------------------------------+
| ![E | POST /*{base}/*patients                                        |
| xam |                                                                |
| ple | Host: //some host                                              |
| of  |                                                                |
| g   | Content-Type: application/json; charset=utf-8                  |
| ood |                                                                |
| p   | {                                                              |
| rac |                                                                |
| tic | \"data\": {                                                    |
| e]( |                                                                |
| ./m | \"patient\": {                                                 |
| edi |                                                                |
| a/i | \"NHSNumber\": \"9991234568\",                                 |
| mag |                                                                |
| e5. | \"firstName\": \"Bernard\",                                    |
| png |                                                                |
| ){w | \"lastName\": \"Woolley\",                                     |
| idt |                                                                |
| h=" | \"dateOfBirth\": \"1942-01-06\",                               |
| 0.1 |                                                                |
| 968 | \"gender\": \"Male\",                                          |
| 503 |                                                                |
| 937 | // \... other patient details \...                             |
| 007 |                                                                |
| 874 | }                                                              |
| in" |                                                                |
| hei | }                                                              |
| ght |                                                                |
| ="0 | }                                                              |
| .19 |                                                                |
| 685 |                                                                |
| 039 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+=====+================================================================+
+-----+----------------------------------------------------------------+

Example request

+-----+----------------------------------------------------------------+
| ![E | HTTP/1.1 400 Bad Request                                       |
| xam |                                                                |
| ple | Content-Type: application/problem+json                         |
| of  |                                                                |
| g   | {                                                              |
| ood |                                                                |
| p   | \"type\": \"https://example.com/errors/id-not-allowed\",       |
| rac |                                                                |
| tic | \"title\": \"ID Not Allowed\",                                 |
| e]( |                                                                |
| ./m | \"status\": 400,                                               |
| edi |                                                                |
| a/i | \"detail\": \"Resource identifiers (IDs) are managed           |
| mag | exclusively by the server\",                                   |
| e5. |                                                                |
| png | \"instance\": \"/api/patients\",                               |
| ){w |                                                                |
| idt | \"invalidParams\": \[                                          |
| h=" |                                                                |
| 0.1 | {                                                              |
| 968 |                                                                |
| 503 | \"name\": \"NHSNumber\",                                       |
| 937 |                                                                |
| 007 | \"reason\": \"NHSNumber should not be provided in the client   |
| 874 | request.\"                                                     |
| in" |                                                                |
| hei | }                                                              |
| ght |                                                                |
| ="0 | \]                                                             |
| .19 |                                                                |
| 685 | }                                                              |
| 039 |                                                                |
| 370 |                                                                |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+=====+================================================================+
+-----+----------------------------------------------------------------+

Example response

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [RFC 7807 - Problem Details for HTTP
  information](./media/image3.png){width="0.4638888888888889in"   APIs](https://datatracker.ietf.org/doc/html/rfc7807)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

## PAGING

When performing a **GET** operation on a collection, the server **MAY**
return a partial result. The server **SHOULD** apply paging to
collections with an unbounded number of items.

### TOKEN-BASED PAGING (RECOMMENDED)

Token-based paging, where the server controls the paging sequence, is
**RECOMMENDED**. Common approaches include cursor, keyset, and seek
paging.

The server **SHOULD** supply a continuation token in the href field of
the [navigation link](#page-links) and assign it to a query parameter
named token. This token **MUST** be an encoded string.

If the client omits the token, the server **MUST** return the first
partial result, eliminating the need to include a page token in the URL
of the first link.

+-----+----------------------------------------------------------------+
| ![E | GET /{base}/patients?pageOffset=2&pageSize=10&total=true       |
| xam |                                                                |
| ple | // 200 OK                                                      |
| of  |                                                                |
| g   | Content-Type: application/json; charset=utf-8                  |
| ood |                                                                |
| p   | {                                                              |
| rac |                                                                |
| tic | \"meta\": {                                                    |
| e]( |                                                                |
| ./m | \"pageOffset\": 2,                                             |
| edi |                                                                |
| a/i | \"pageSize\": 10,                                              |
| mag |                                                                |
| e5. | \"total\": 40                                                  |
| png |                                                                |
| ){w | },                                                             |
| idt |                                                                |
| h=" | \"data\": {                                                    |
| 0.1 |                                                                |
| 968 | \"pageOffset\": 2,                                             |
| 503 |                                                                |
| 937 | \"pageSize\": 10,                                              |
| 007 |                                                                |
| 874 | \"patients\": \[                                               |
| in" |                                                                |
| hei | {                                                              |
| ght |                                                                |
| ="0 | \"NHSNumber\": \"9991234566\"                                  |
| .19 |                                                                |
| 685 | // \... other patient details \...                             |
| 039 |                                                                |
| 370 | },                                                             |
| 078 |                                                                |
| 74i | {                                                              |
| n"} |                                                                |
|     | \"NHSNumber\": \"9991234567\"                                  |
|     |                                                                |
|     | // \... other patient details \...                             |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | // \... 8 more patient records \...                            |
|     |                                                                |
|     | \]                                                             |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | \"links\": \[                                                  |
|     |                                                                |
|     | {                                                              |
|     |                                                                |
|     | \"href\": \"/patients?page=2&pageSize=10\",                    |
|     |                                                                |
|     | \"rel\": \"self\"                                              |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | {                                                              |
|     |                                                                |
|     | \"href\": \"/patients?page=1&pageSize=10\",                    |
|     |                                                                |
|     | \"rel\": \"first\"                                             |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | {                                                              |
|     |                                                                |
|     | \"href\": \"/patients?page=1&pageSize=10\",                    |
|     |                                                                |
|     | \"rel\": \"prev\"                                              |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | {                                                              |
|     |                                                                |
|     | \"href\": \"/patients?page=3&pageSize=10\",                    |
|     |                                                                |
|     | \"rel\": \"next\"                                              |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | {                                                              |
|     |                                                                |
|     | \"href\": \"/patients?page=4&pageSize=10\",                    |
|     |                                                                |
|     | \"rel\": \"last\"                                              |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | \]                                                             |
|     |                                                                |
|     | }                                                              |
+=====+================================================================+
+-----+----------------------------------------------------------------+

### CLIENT-DRIVEN PAGING

Allowing clients to control paging provides flexibility but may be less
efficient. The server **MAY** allow clients to supply an offset (or
pageOffset) integer value as the starting point.

If omitted, the server **MUST** use default values of offset=0 or
pageOffset=1. If the value is greater than or equal to the number of
resources, the server **MUST** return an empty collection.

If the value is invalid, the server **SHOULD** return a 400 BAD REQUEST
HTTP status code.

The server **SHOULD** include the offset values in the response ---
whether explicitly provided or not --- to maintain context for the
client.

+-----+----------------------------------------------------------------+
| ![E | GET /{base}/patients?pageOffset=2&pageSize=10&total=true       |
| xam |                                                                |
| ple | // 200 OK                                                      |
| of  |                                                                |
| g   | Content-Type: application/json; charset=utf-8                  |
| ood |                                                                |
| p   | {                                                              |
| rac |                                                                |
| tic | \"meta\": {                                                    |
| e]( |                                                                |
| ./m | \"pageOffset\": 2,                                             |
| edi |                                                                |
| a/i | \"pageSize\": 10,                                              |
| mag |                                                                |
| e5. | \"total\": 40                                                  |
| png |                                                                |
| ){w | },                                                             |
| idt |                                                                |
| h=" | \"data\": {                                                    |
| 0.1 |                                                                |
| 968 | \"pageOffset\": 2,                                             |
| 503 |                                                                |
| 937 | \"pageSize\": 10,                                              |
| 007 |                                                                |
| 874 | \"patients\": \[                                               |
| in" |                                                                |
| hei | {                                                              |
| ght |                                                                |
| ="0 | \"NHSNumber\": \"9991234566\",                                 |
| .19 |                                                                |
| 685 | // \... other patient details \...                             |
| 039 |                                                                |
| 370 | },                                                             |
| 078 |                                                                |
| 74i | {                                                              |
| n"} |                                                                |
|     | \"NHSNumber\": \"9991234567\",                                 |
|     |                                                                |
|     | // \... other patient details \...                             |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | // \... 8 x more patient records \...                          |
|     |                                                                |
|     | \]                                                             |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | \"links\": {                                                   |
|     |                                                                |
|     | \"self\": {                                                    |
|     |                                                                |
|     | \"href\": \"/patients?page=2&pageSize=10\",                    |
|     |                                                                |
|     | \"rel\": \"self\"                                              |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | \"first\": {                                                   |
|     |                                                                |
|     | \"href\": \"/patients?page=1&pageSize=10\",                    |
|     |                                                                |
|     | \"rel\": \"first\"                                             |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | \"prev\": {                                                    |
|     |                                                                |
|     | \"href\": \"/patients?page=1&pageSize=10\",                    |
|     |                                                                |
|     | \"rel\": \"prev\"                                              |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | \"next\": {                                                    |
|     |                                                                |
|     | \"href\": \"/patients?page=3&pageSize=10\",                    |
|     |                                                                |
|     | \"rel\": \"next\"                                              |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | \"last\": {                                                    |
|     |                                                                |
|     | \"href\": \"/patients?page=4&pageSize=10\",                    |
|     |                                                                |
|     | \"rel\": \"last\"                                              |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | }                                                              |
+=====+================================================================+
+-----+----------------------------------------------------------------+

### PAGING STABILITY

When implementing paging, the server **MUST** ensure the following:

-   The server **MUST** sort on a unique value. This may require sorting
    on an additional value (typically a primary key) if necessary.

-   Sorting and filtering parameters **MUST** be consistent across pages
    to maintain predictability.

-   Query options **MUST NOT** be changed while iterating over a partial
    result set.

(See the sections on [Filtering](#filtering), [Sorting](#sorting) and
[Compound Collections](#compound-collection-operations) for more
information.)

### PAGE LINKS

The server **MUST** indicate a partial result by including navigation
links as JSON objects within the links array. Each JSON object
**SHOULD** contain rel and href  fields.

The rel field **SHOULD** be restricted to the following values: self,
first, prev, next and last.

The absence of a next link indicates that there are no more results.

The absence of a prev link typically indicates the start of the result
set, although it **MAY** be omitted if reverse paging is expensive or
impractical.

Similarly, the server **MAY** omit the last link if providing it is
costly or impractical.

href fields in links **MUST** contain a URL with any appropriate query
parameters.

### PAGE SIZE

The server **MAY** allow clients to specify the number of items returned
using the pageSize query parameter. It **MUST** either use this value or
apply a default pageSize when none is specified.

The server **MUST** set a default pageSize and an upper limit
(maxPageSize) for each resource collection. These values **SHOULD** be
determined based on reasonable estimates of default and maximum request
times and payload sizes.

Clients MAY specify an integer value for pageSize or request the maximum
allowed by setting pageSize to maxPageSize.

If pageSize is not a non-negative integer or exceeds maxPageSize, the
server **SHOULD** return a 400 BAD REQUEST HTTP status code.

The server **MAY** return fewer items than specified by the pageSize
when returning the last page.

The server **SHOULD** include the pageSize value in the links object
within the response, regardless of whether it was explicitly provided or
set by default.

### TOTAL

The server **MAY** allow clients to request the total number of matches
by providing a total query parameter.

If the client specifies total=true, the server **SHOULD** return the
total number of matches in the total field at the root of the JSON
response.

By default, the total parameter **MUST** be set to false.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              total indicates the overall number of results that match the
  tips](./media/image1.png){width="0.3937007874015748in"   request, not the number of resources returned in the current
  height="0.3937007874015748in"}                           response..
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

### PAGING NESTED RESOURCES

The server **MAY** support client paging of nested resources and
**SHOULD** provide the necessary navigation links for such cases.

### PAGING IMPLEMENTATION

When implementing paging, the server **SHOULD** consider the following
key aspects:

-   Establish a method for handling updates to maintain data consistency
    and accuracy.

-   Implement efficient data retrieval mechanisms to minimise
    performance impact.

-   Ensure secure encoding of continuation tokens to protect client
    privacy and data integrity.

## FILTERING

### FIELD SELECTION

Endpoints **SHOULD** return a default set of fields, but the server
**MAY** allow clients to customise the response, using the fields query
parameter. This helps avoid retrieving unnecessary data.

However the server **MUST** always return mandatory fields specified in
the model schema, even if not requested. For example the conditions
field is returned even if not specified in the query.

+-----+----------------------------------------------------------------+
| ![E | GET                                                            |
| xam | /                                                              |
| ple | {base}/patients/9991234566?fields=NHSNumber,firstName,lastName |
| of  |                                                                |
| g   | // 200 OK                                                      |
| ood |                                                                |
| p   | Content-Type: application/json; charset=utf-8                  |
| rac |                                                                |
| tic | {                                                              |
| e]( |                                                                |
| ./m | \"patient\": {                                                 |
| edi |                                                                |
| a/i | \"NHSNumber\": \"9991234566\",                                 |
| mag |                                                                |
| e5. | \"firstName\": \"Humphrey\",                                   |
| png |                                                                |
| ){w | \"lastName\": \"Appleby \",                                    |
| idt |                                                                |
| h=" | \"conditions\": \[                                             |
| 0.1 |                                                                |
| 968 | {                                                              |
| 503 |                                                                |
| 937 | \"id\": \"1\",                                                 |
| 007 |                                                                |
| 874 | \"name\": \"Hypertension\"                                     |
| in" |                                                                |
| hei | }                                                              |
| ght |                                                                |
| ="0 | \]                                                             |
| .19 |                                                                |
| 685 | }                                                              |
| 039 |                                                                |
| 370 | }                                                              |
| 078 |                                                                |
| 74i |                                                                |
| n"} |                                                                |
+=====+================================================================+
+-----+----------------------------------------------------------------+

[\
]{.mark}

### SIMPLE FILTERING {#simple-filtering .unnumbered}

The server **MAY** allow clients to search specific fields by specifying
the field name in the query.

+-----+----------------------------------------------------------------+
| ![E | GET                                                            |
| xam | /{base}                                                        |
| ple | /patients?lastName=Appleby&fields=NHSNumber,firstName,lastName |
| of  |                                                                |
| g   | // 200 OK                                                      |
| ood |                                                                |
| p   | Content-Type: application/json; charset=utf-8                  |
| rac |                                                                |
| tic | {                                                              |
| e]( |                                                                |
| ./m | \"patients\": \[                                               |
| edi |                                                                |
| a/i | {                                                              |
| mag |                                                                |
| e5. | \"NHSNumber\": \"9991234566\",                                 |
| png |                                                                |
| ){w | \"firstName\": \"Humphrey\",                                   |
| idt |                                                                |
| h=" | \"lastName\": \"Appleby\",                                     |
| 0.1 |                                                                |
| 968 | \"conditions\": \[                                             |
| 503 |                                                                |
| 937 | {                                                              |
| 007 |                                                                |
| 874 | \"id\": \"1\",                                                 |
| in" |                                                                |
| hei | \"name\": \"Hypertension\"                                     |
| ght |                                                                |
| ="0 | },                                                             |
| .19 |                                                                |
| 685 | {                                                              |
| 039 |                                                                |
| 370 | \"id\": \"2\",                                                 |
| 078 |                                                                |
| 74i | \"name\": \"Diabetes\"                                         |
| n"} |                                                                |
|     | }                                                              |
|     |                                                                |
|     | \]                                                             |
|     |                                                                |
|     | },                                                             |
|     |                                                                |
|     | {                                                              |
|     |                                                                |
|     | \"NHSNumber\": \"9991234599\",                                 |
|     |                                                                |
|     | \"firstName\": \"Lady\",                                       |
|     |                                                                |
|     | \"lastName\": \"Appleby\",                                     |
|     |                                                                |
|     | \"conditions\": \[                                             |
|     |                                                                |
|     | {                                                              |
|     |                                                                |
|     | \"id\": \"1\",                                                 |
|     |                                                                |
|     | \"name\": \"Hypertension\"                                     |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | \]                                                             |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | \]                                                             |
|     |                                                                |
|     | }                                                              |
+=====+================================================================+
+-----+----------------------------------------------------------------+

The server **MAY** allow clients to combine search parameters and filter
by relational fields. This allows for advanced searches across related
data.

+-----+----------------------------------------------------------------+
| ![E | GET */{base}*/patients?lastName=Appleby&                       |
| xam | expand=conditions&condition.name=diabetes                      |
| ple |                                                                |
| of  | // 200 OK                                                      |
| g   |                                                                |
| ood | Content-Type: application/json; charset=utf-8                  |
| p   |                                                                |
| rac | {                                                              |
| tic |                                                                |
| e]( | \"patients\": \[                                               |
| ./m |                                                                |
| edi | {                                                              |
| a/i |                                                                |
| mag | \"NHSNumber\": \"9991234566\",                                 |
| e5. |                                                                |
| png | \"firstName\": \"Humphrey\",                                   |
| ){w |                                                                |
| idt | \"lastName\": \"Appleby\",                                     |
| h=" |                                                                |
| 0.1 | \"conditions\": \[                                             |
| 968 |                                                                |
| 503 | {                                                              |
| 937 |                                                                |
| 007 | \"id\": \"1\",                                                 |
| 874 |                                                                |
| in" | \"name\": \"Hypertension\"                                     |
| hei |                                                                |
| ght | },                                                             |
| ="0 |                                                                |
| .19 | {                                                              |
| 685 |                                                                |
| 039 | \"id\": \"2\",                                                 |
| 370 |                                                                |
| 078 | \"name\": \"Diabetes\"                                         |
| 74i |                                                                |
| n"} | }                                                              |
|     |                                                                |
|     | \]                                                             |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | \]                                                             |
|     |                                                                |
|     | }                                                              |
+=====+================================================================+
+-----+----------------------------------------------------------------+

### ADVANCED FILTERING

To enable more advanced filtering logic, the server **MAY** support
OData 4.0-compliant query parameters. These allow clients to specify
filtering expressions that are evaluated for each resource in the
collection, including only items where the expression evaluates to
*true*.

The following operators **MUST** be supported with the *filter* query:

  -------------------------------------------------------------------------
  **OPERATOR GROUP**  **OPERATOR**   **DESCRIPTION**
  ------------------- -------------- --------------------------------------
  **COMPARISON**      eq             Equal

                      ne             Not equal

                      gt             Greater than

                      ge             Greater than or equal

                      lt             Less than

                      le             Less than or equal

  **LOGICAL**         and            Logical and

                      or             Logical or

                      not            Logical negation

  **GROUPING**        ()             Precedence grouping
  -------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            GET *{base}*/patients?filter=lastName eq Appleby and age ge 53
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------

### ELASTICSEARCH AND LUCENE

When using Elasticsearch, Lucene, or equivalent search products, the
server **SHOULD** align with the syntax of the chosen product.
Alternatively, consider using well-documented, standardised mechanisms
such as OData filter syntax or a GraphQL service.

###  

## SORTING

The server **MAY** support sorting of result sets by accepting a
comma‐separated list of expressions via the sort query parameter. The
server **SHOULD** honour the client's preferences.

By default the server **SHOULD** sort in ascending order but **MAY**
sort in descending order if the client prefixes an expression with a
dash (-).

NULL values **MUST** be treated as less than non-NULL values.

Items **MUST** be sorted according to the order of expressions provided.
The first expression defines the primary sort order; for items with
identical values in the first expression, the second expression defines
the secondary order, and so on.

+-----+----------------------------------------------------------------+
| ![E | GET /*{base}/*patients?sort=-lastName                          |
| xam |                                                                |
| ple | // 200 OK                                                      |
| of  |                                                                |
| g   | Content-Type: application/json; charset=utf-8                  |
| ood |                                                                |
| p   | \"data\": {                                                    |
| rac |                                                                |
| tic | \"patients\": \[                                               |
| e]( |                                                                |
| ./m | {                                                              |
| edi |                                                                |
| a/i | \"NHSNumber\": \"9991234568\",                                 |
| mag |                                                                |
| e5. | \"firstName\": \"Bernard\",                                    |
| png |                                                                |
| ){w | \"lastName\": \"Woolley\",                                     |
| idt |                                                                |
| h=" | // \... other patient details \...                             |
| 0.1 |                                                                |
| 968 | },                                                             |
| 503 |                                                                |
| 937 | {                                                              |
| 007 |                                                                |
| 874 | \"NHSNumber\": \"9991234567\",                                 |
| in" |                                                                |
| hei | \"firstName\": \"Jim\",                                        |
| ght |                                                                |
| ="0 | \"lastName\": \"Hacker\",                                      |
| .19 |                                                                |
| 685 | // \... other patient details \...                             |
| 039 |                                                                |
| 370 | },                                                             |
| 078 |                                                                |
| 74i | {                                                              |
| n"} |                                                                |
|     | \"NHSNumber\": \"9991234566\",                                 |
|     |                                                                |
|     | \"firstName\": \"Humphrey\",                                   |
|     |                                                                |
|     | \"lastName\": \"Appleby\",                                     |
|     |                                                                |
|     | // \... other patient details \...                             |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | // \... more patients \...                                     |
|     |                                                                |
|     | \]                                                             |
|     |                                                                |
|     | }                                                              |
|     |                                                                |
|     | }                                                              |
+=====+================================================================+
+-----+----------------------------------------------------------------+

## COMPOUND COLLECTION OPERATIONS

When paging, filtering & sorting operations are performed together, the
evaluation order **MUST** be:

1.  **Filtering:** All filtering expressions, including range queries,
    **MUST** be applied using an AND operation.

2.  **Sorting:** The filtered list **MUST** be sorted according to the
    specified sort criteria.

3.  **Paging:** The sorted, filtered list **MUST** then be paged. This
    applies to both token-based and client-driven paging.

###  

## NAMING

### RESOURCE NAMES

Resource names **SHOULD** be clear, descriptive and written in
*lowerCamelCase*. Use plural nouns in URLs and to identify resource
collections in JSON payloads. Use the singular form to identify an
individual resource in a JSON payload.

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            */{base}*/patients/{id*}*
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------
  ![Example of practices to                                    */{base}*/Patient/{id*}*
  avoid](./media/image7.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  ![Example of practices to                                    */{base}*/getPatient/{id*}*
  avoid](./media/image7.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               
  -----------------------------------------------------------------------------------------------------------------------------

Prefer nouns to verbs, even if the noun is not immediately obvious.

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            */{base}*/uk-who/calculation
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------
  ![Example of practices to                                    */{base}*/uk-who/calculate
  avoid](./media/image7.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  -----------------------------------------------------------------------------------------------------------------------------

### RESOURCE IDENTIFIERS

Resource identifiers **MUST** serve as unique references for resources.
It is **RECOMMENDED** to use the field name \"*id*\" or to concatenate
the resource name with \"*Id*\" when referencing these identifiers.

Resource identifiers **MUST** be URL safe and not expose implementation
details such as database primary keys.

### RESOURCE FIELDS

Resource fields **MUST** be descriptive and use *lowerCamelCase*.

+-----+----------------------------------------------------------------+
| ![E | {                                                              |
| xam |                                                                |
| ple | \"data\": {                                                    |
| of  |                                                                |
| g   | \"patients\": \[                                               |
| ood |                                                                |
| p   | {                                                              |
| rac |                                                                |
| tic | \"firstName\": \"Humphrey\",                                   |
| e]( |                                                                |
| ./m | // \... other patient details \...                             |
| edi |                                                                |
| a/i | },                                                             |
| mag |                                                                |
| e5. | // \... more patients \...                                     |
| png |                                                                |
| ){w | \]                                                             |
| idt |                                                                |
| h=" | }                                                              |
| 0.1 |                                                                |
| 968 | }                                                              |
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

### QUERY PARAMETERS

Query parameters **SHOULD** be written in *lowerCamelCase*.

You **SHOULD NOT** define query parameters with names that differ only
in case.

The server **SHOULD NOT** be case sensitive when processing query
parameters.

When query parameters are treated as strings they present an opportunity
for injection attacks. To minimise risk, the server **SHOULD** constrain
the values of string filters to enumerations or regular expressions.

### RESERVED NAMES

You **SHOULD** adhere to the defined behaviour for query parameters as
described in this standard. These names are reserved for their intended
purposes and **MUST NOT** be repurposed.

  --------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Microsoft Graph REST API
  information](./media/image3.png){width="0.4638888888888889in"   Guidelines](https://github.com/microsoft/api-guidelines/blob/vNext/graph/GuidelinesGraph.md)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ----------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------

## ERROR REPORTING

[HTTP status codes](#return-http-status-codes) often provide sufficient
error information. But sometimes the client needs additional details.

If your APIs follow the FHIR standard, the server **MUST** return the
OperationOutcome resource.

For non-FHIR APIs, the server **SHOULD** follow RFC7807 or, where
applicable, the JSON API specification.

When returning error information, the server **MUST NOT** include
unnecessary or sensitive data that attackers could exploit. See also the
[OWASP 10](#owasp-top-10) & [Minimise Information
Disclosure](#minimise-information-disclosure) sections.

The server **MUST** use [HTTP status codes](#return-http-status-codes)
in the 5xx range to indicate server errors. For client errors, the
server SHOULD return a 4xx status code.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              ASP.NET Core's ProblemDetails formats errors according to
  tips](./media/image1.png){width="0.3937007874015748in"   RFC7807.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | [OperationOutcome - FHIR                                      |
| [Fur | v4.0.1](ht                                                    |
| ther | tps://hl7.org/fhir/R4/operationoutcome.html#operationoutcome) |
| rea  |                                                               |
| ding | [RFC 7807 - Problem Details for HTTP                          |
| and  | APIs](https://datatracker.ietf.org/doc/html/rfc7807)          |
| i    |                                                               |
| nfor | [JSON:API --- A specification for building APIs in            |
| mati | JSON](https://jsonapi.org/)                                   |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e3.p |                                                               |
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

## PERFORMANCE AND RESPONSE TIMES

You **MUST** define a maximum response time and specify any exceptions.

To improve performance and minimise network traffic, you **SHOULD**
consider the following options. Your choice depends on your use-case and
user needs:

-   Implement a server-side cache (for example, ASP.NET output caching)
    or a distributed cache (for example, Redis) for more complex
    scenarios.

-   Allow clients to cache responses (response caching) while taking
    care to mitigate any potential security risks; see [HTTP Messaging
    caching](#http-message-caching).

-   Avoid blocking calls. For example, ASP.NET web APIs **SHOULD** use
    > the async keyword.

-   Take advantage of [paging](#paging) and [filtering](#filtering) to
    limit the amount of data returned in responses.

-   Compress responses and minify JSON payloads.

You **MUST** monitor and analyse API performance and take corrective
actions if your APIs do not meet the performance thresholds defined in
your solutions architecture.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [ASP.NET Core Best Practices \| Microsoft
  information](./media/image3.png){width="0.4638888888888889in"   Learn](https://learn.microsoft.com/en-gb/aspnet/core/fundamentals/best-practices?view=aspnetcore-7.0)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -------------------------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## CONCURRENCY CONTROL

To prevent accidental overwrites of updates, design your concurrency
control model carefully to handle transient faults appropriately.

The server **SHOULD** ensure that clients include an If-Match header
when making changes to resources that might be updated concurrently.

When a client sends an If-Match header with a valid ETag value:

-   The server **MUST** check if the provided ETag matches the current
    ETag of the resource.

-   If they match, the server processes the request and returns a 2xx
    HTTP status code (for example, 200 OK) indicating success.

-   If they do not match, the server **MUST** return a 412 PRECONDITION
    FAILED status code to indicate a conflict.

If a client does not include the If-Match header:

-   The server **MUST** respond with a 428 PRECONDITION REQUIRED HTTP
    status code, indicating that the If-Match header is required.

-   The response **MUST** include a clear message instructing clients to
    include the If-Match header in future requests for the resource.

You **MUST** describe in your API documentation which resources require
the use of the If-Match header.

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           SDS-GDN-5 Testing for lost updates
  information](./media/image3.png){width="0.4638888888888889in"   
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

## HANDLING TRANSIENT FAULTS

APIs **MUST** be designed to handle transient faults caused by temporary
network issues, timeouts, or service disruptions. Clients **SHOULD**
implement retry strategies to maintain reliability without overwhelming
the system.

### IDENTIFYING TRANSIENT FAULTS

The API **MUST** clearly define transient faults and distinguish them
from permanent failures.

The API **MUST** specify which [HTTP status
codes](#return-http-status-codes) indicate transient faults that are
safe to retry:

-   5xx errors (e.g. 500 Internal Server Error) indicate server-side
    faults.

-   Some 4xx errors MAY also be transient and safe to retry, such as:

    -   429 Too Many Requests (after respecting Retry-After).

    -   408 Request Timeout, if caused by temporary network issues.

    -   409 Conflict, if due to a temporary resource state.

### RETRY STRATEGIES

Clients **MUST** ensure retries do not introduce unintended side
effects. APIs **MUST** be *idempotent* where possible.

If an API returns Retry-After, clients **MUST** wait before retrying.

Clients **SHOULD** use *exponential backoff* with *jitter* to avoid
spikes in retry traffic.

The API **SHOULD** document:

-   The m*aximum number of retry attempts* before a failure is
    considered permanent.

-   *Recommended wait times* between retries.

-   *Rate limits* to avoid excessive retries.

Additional **RECOMMENDATIONS**:

-   APIs **SHOULD** use *circuit breakers* to prevent repeated calls
    > when a service remains unavailable.

-   Clients **SHOULD** *randomise retries* to prevent simultaneous retry
    > bursts.

-   If the API is deployed on Apigee, it **MUST** integrate with
    > Apigee's transient fault handling features.

# SECURITY STANDARDS

## API GATEWAY PATTERN

APIs **SHOULD** be deployed behind a gateway. This ensures that the
security policies provided by the gateway are used rather than
implementing them directly in your back-end API.

Typically, deploy to Apigee or your own API gateway if building APIs
exclusively for your app. Consult the API platform and Cyber Security
teams for further advice.

## OWASP TOP 10

During assurance, you **MUST** provide evidence of adequate mitigations
against OWASP Top 10 API Security Risks -- 2023 in a Test Summary
report.

  --------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [OWASP Top 10 API Security Risks -- 2023 - OWASP API Security
  information](./media/image3.png){width="0.4638888888888889in"   Top
  height="0.4638888888888889in"}                                  10](https://owasp.org/API-Security/editions/2023/en/0x11-t10/)
  --------------------------------------------------------------- ----------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------

## SECRETS AND CERTIFICATE MANAGEMENT

You **SHOULD NOT** store secrets in clear-text storage.

Secrets and API keys **MUST** be stored and encrypted in a secrets
manager. Where secrets are injected from a secrets manager into a CI-CD
pipeline, they **MUST NOT** be logged.

## ENCRYPTION

The server **MUST** secure communications using at least TLS 1.2
(https).

The server **SHOULD**:

-   Use one of the TLS cipher suites recommended in *SOP-OSD-001
    Encryption in Transit* and *SS-OSD-006 Application Programming
    Interfaces (APIs)*

-   Use a TLS certificate signed by a chain ending with a trusted
    Certificate Authority (CA)

+------+---------------------------------------------------------------+
| !    | SOP-OSD-001 Encryption in Transit                             |
| [Fur |                                                               |
| ther | SS-OSD-006 Application Programming Interfaces (APIs)          |
| rea  |                                                               |
| ding |                                                               |
| and  |                                                               |
| i    |                                                               |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e3.p |                                                               |
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

## SECURITY HEADERS

Use [HTTP response headers](#http-response-headers) to specify security
controls in HTTP communications. These serve as an extra layer of
protection against common vulnerabilities and privacy risks.

### MINIMISE INFORMATION DISCLOSURE

You **SHOULD** remove unnecessary HTTP response headers that expose
details about the server and its underlying technologies. For example,
consider the following response which includes headers that reveal
server information:

+-----+----------------------------------------------------------------+
| ![E | *HTTP/1.1 201 Created*                                         |
| xam |                                                                |
| ple | *Content-Type: application/json; charset=utf-8*                |
| of  |                                                                |
| pra | *Location: /api/patients/9991234568*                           |
| cti |                                                                |
| ces | *Date: 2024-02-17T12:00:00Z*                                   |
| to  |                                                                |
| a   | *Server: Microsoft-IIS/10.0*                                   |
| voi |                                                                |
| d]( | *X-AspNet-Version: 6.0.0*                                      |
| ./m |                                                                |
| edi | *X-AspNetMvc-Version: 6.0.0*                                   |
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
+=====+================================================================+
+-----+----------------------------------------------------------------+

You **SHOULD** remove these sensitive headers. A valid response might
look like this:

+-----+----------------------------------------------------------------+
| ![E | *HTTP/1.1 201 Created*                                         |
| xam |                                                                |
| ple | *Content-Type: application/json; charset=utf-8*                |
| of  |                                                                |
| g   | *Location: /api/patients/9991234568*                           |
| ood |                                                                |
| p   | *Date: 2024-02-17T12:00:00Z*                                   |
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

## HTTP MESSAGE CACHING

Typically, you **SHOULD NOT** allow sensitive data, returned over an
authenticated (HTTPS) connection, to be cached. But if you do, you
**MUST** make sure there is no risk that network appliances cache data
in clear text. Speak to the Cyber security team for help.

## AUTHENTICATION AND AUTHORISATION

The server **SHOULD** enforce authentication and authorisation using
OAuth 2.0 and OIDC protocols as described below. Typically the API
Platform team will provide this service.

### CLIENT AUTHENTICATION

Authentication is enforced at one of the following levels.

  -----------------------------------------------------------------------
  **LEVEL**           **DESCRIPTION**
  ------------------- ---------------------------------------------------
  0                   No Authentication

  1                   API Key

  2                   Credentials

  3                   Access token (using Credentials)

  4                   Access token (using Public Key Cryptography)
  -----------------------------------------------------------------------

Authentication Levels

The server **MUST** enforce the minimum required level as determined by
the type of data accessed, client characteristics and network routing:

  ------------------------------------------------------------------------------------------------------------------------------------------
                                                           [**DATA                                                             
                                                           TYPE**](#data-type)                                                 
  ----------------------- -------------------------------- --------------------- ------------ ---------------- --------------- -------------
  [**CLIENT               [**NETWORK ROUTING               **PUBLIC (READ)**     **PUBLIC     **BUSINESS       **SENSITIVE**   **HIGHLY
  TYPE**](#client-type)   TYPE**](#network-routing-type)                         (WRITE)**    CONFIDENTIAL**                   SENSITIVE**

  Pre-Authorised          Internal                         0                     1            2                2               2

                          Peered                           0                     1            3                3               3

                          Internet                         1                     1            3                4               4

  Licenced                All                              1                     3 + End User 3 + End User     4 + End User    4 + End User
                                                                                 Delegation   Delegation       Delegation      Delegation

  Open                    All                              1                     3 + End User 3 + End User     *No access*     *No access*
                                                                                 Delegation   Delegation                       
  ------------------------------------------------------------------------------------------------------------------------------------------

Minimum Authentication Levels

### END USER DELEGATION

*Licenced* and *Open* clients requesting any access beyond reading
[public data](#data-type) **MUST** require users to delegate
permissions. Users **MUST** be authenticated by the NHS Wales Identity
Provider.

The server **MUST** implement [role-based access
controls](#role-based-access-control-scopes) to verify that end users
are authorised to grant the requested permissions to the client
application.

### ROLE-BASED ACCESS CONTROL (SCOPES)

APIs **SHOULD** define access controls as *scopes.* Speak to the
platform team for further help.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [App Launch: Scopes and Launch Context - SMART App Launch
  information](./media/image3.png){width="0.4638888888888889in"   v2.2.0](https://build.fhir.org/ig/HL7/smart-app-launch/scopes-and-launch-context.html#scopes-for-requesting-fhir-resources)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### AUTHORISATION GRANTS

For client authentication level 3 without End User Delegation, the
**RECOMMENDED** method is to use the OAuth 2.0 grant type
client_credentials to obtain a bearer token, as described in RFC 6749,
section 4.4.

For client authentication level 3 with End User Delegation, the
**RECOMMENDED** method is to use the OAuth 2.0 grant type
authorization_code to obtain a token. The client **MUST** use client_id
and client_secret to authenticate with the token endpoint, as described
in RFC 6749, sections 4.1 and 2.3.1.

For level 4 client authentication without End User Delegation, the
**RECOMMENDED** method is to use the OAuth 2.0 grant type
urn:ietf:params:oauth:grant-type:jwt-bearer, as described in RFC 7523,
section 2.1.

For level 4 client authentication with End User Delegation, the
**RECOMMENDED** method is to use the OAuth 2.0 grant type
authorization_code to obtain a token. The client **MUST** use a client
assertion to authenticate with the token endpoint, as described in RFC
7523, section 2.2.

+------+---------------------------------------------------------------+
| !    | [RFC 6749 - The OAuth 2.0 Authorization                       |
| [Fur | Framework](https://datatracker.ietf.org/doc/html/rfc6749)     |
| ther |                                                               |
| rea  | [RFC 7523 - JSON Web Token (JWT) Profile for OAuth 2.0 Client |
| ding | Authentication and Authorization                              |
| and  | Grants](https://datatracker.ietf.org/doc/html/rfc7523)        |
| i    |                                                               |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e3.p |                                                               |
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

### ACCESS TOKEN EXPIRY

When using authentication level 3 or above, access tokens **MUST**
expire within the following time frames:

-   For [Business Confidential data](#data-type): within 1 day.

-   For [Sensitive data](#data-type): within 1 hour.

-   For [Highly Sensitive data](#data-type): tokens **SHOULD** expire
    within 5 minutes but **MUST** expire within 1 hour.

### RESTRICTIONS ON DATA USE

+------------------+---------------------------------------------------+
| **ENVIRONMENT**  | **RESTRICTIONS ON DATA SENT TO AND FROM AN API**  |
+==================+===================================================+
| Development      | Data **SHOULD** be classified as                  |
|                  | "[Public](#data-type)" (e.g., synthetic test      |
|                  | data[^1])                                         |
|                  |                                                   |
|                  | Data **MUST NOT** be classified as                |
|                  | "[Sensitive](#data-type)" or "[Highly             |
|                  | Sensitive](#data-type)"                           |
|                  |                                                   |
|                  | Data **MUST NOT** be written to systems in        |
|                  | Production                                        |
+------------------+---------------------------------------------------+
| Sandbox          | Data **MUST** be classified as                    |
|                  | "[Public](#data-type)" (e.g., synthetic test      |
|                  | data)                                             |
+------------------+---------------------------------------------------+
| Systems          | Data **SHOULD** be classified as                  |
| Integration      | "[Public](#data-type)" (e.g., synthetic test      |
| Testing          | data)                                             |
|                  |                                                   |
|                  | Data **MUST NOT** be classified as                |
|                  | "[Sensitive](#data-type)" or "Highly Sensitive"   |
|                  |                                                   |
|                  | Data **MUST NOT** be written to systems in        |
|                  | Production                                        |
+------------------+---------------------------------------------------+
| User Acceptance  | Data **MUST NOT** be written to systems in        |
| Testing          | Production                                        |
+------------------+---------------------------------------------------+
| Production       | No restrictions apply; however, please refer to   |
|                  | the [API Security                                 |
|                  | standards](#security-standards).                  |
+------------------+---------------------------------------------------+

### INPUT VALIDATION

The server **MUST** validate all inputs to prevent code injection,
cross-site scripting (XSS) attacks and other malicious requests such as
overposting and mass assignment.

The server **SHOULD** restrict query parameter string filters to
enumerated values or regular expressions.

### BROWSER-BASED ACCESS AND CROSS-ORIGIN RESOURCE SHARING (CORS)

APIs **MUST NOT** be accessed directly from code running in a browser
unless they are limited to reading or writing public data.

If the server permits direct browser access then:

-   The outbound HTTP header Access-Control-Allow-Origin **MUST** be set
    to a specific value and **MUST NOT** be a wildcard.

-   The inbound HTTP header Origin **MUST** be validated against a list
    of permitted host names for authenticated applications.

# API MANAGEMENT

## GENERATING AN API PROXY

To publish an API, generate a proxy from your [Open API
specification](#open-api-specification) early in the development
process. Contact the platform team (see their process map below) for
details.

![A screenshot of a computer screen Description automatically
generated](./media/image9.png){width="6.5184908136482935in"
height="8.212685914260717in"}

## PING AND SERVICE STATUS

APIs **SHOULD** implement ping and status endpoints that return an HTTP
200 OK response. These endpoints allow the platform team to connect the
API platform to them.

## API LIFECYCLE

The stability of your API and the support you provide depend on its
[lifecycle status](#lifecycle-status). You **MUST** classify your API
using the [lifecycle status](#lifecycle-status) definitions described in
Appendix A.

### DEPRECATION AND RETIREMENT

You **MAY** deprecate and retire an API endpoint if it is:

-   Replaced by a new endpoint that provides equivalent or enhanced
    capabilities.

-   Not fit for purpose, for example it is insecure.

-   Unused or of limited usage.

### RETIREMENT TIMELINE

At the end of the deprecation period, the API endpoints reach
end-of-life and are taken out of service. At this point, the API
endpoint **MUST** no longer be available for use.

###  DEPRECATION POLICY

To deprecate an API endpoint you **MUST**:

-   Add a deprecation notice to your documentation stating the
    deprecation date.

-   Add a deprecation header with the deprecation date.

-   Email subscribed users with the deprecation date - as the date
    approaches, emails **SHOULD** be sent more frequently.

-   Keep the endpoint available for use and maintain normal service
    levels.

-   Permit no further integrations, although you **MAY** allow consumers
    in the latter stages of onboarding to complete sign-up.

You **SHOULD** make no further updates unless necessary.

### RETIREMENT POLICY

To retire an API endpoint, you **MUST**:

-   Add a retirement notice to your documentation stating the retirement
    date, giving no less than **6 months'** notice.

-   Add a sunset header with the retirement date.

-   Provide a migration guide where applicable.

-   Keep the endpoint available for use and maintain normal service
    levels.

-   Permit no further integrations.

You **SHOULD** make no further updates unless necessary.

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [RFC 8594 - The Sunset HTTP Header
  information](./media/image3.png){width="0.4638888888888889in"   Field](https://datatracker.ietf.org/doc/html/rfc8594)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

## DEPLOYMENT

API deployment **SHOULD** follow DevOps best practices and use
continuous integration and deployment (CI/CD). For more information see
our coding standards.

+------+---------------------------------------------------------------+
| !    | SDS-GDN-1 Software development handbook                       |
| [Fur |                                                               |
| ther | SDS-CS-1 Using Source Control                                 |
| rea  |                                                               |
| ding |                                                               |
| and  |                                                               |
| i    |                                                               |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e3.p |                                                               |
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

+-----+----------------------------------------------------------------+
| ![  | **API Platform Starter Project**                               |
| Pra |                                                                |
| cti | Developers can use the platform team's SDK --that comes with   |
| cal | pre-set ping and status policies and ready-made pipelines.     |
| tip | These pipelines automatically package your API proxy and       |
| s]( | deploy it to Apigee once approved.                             |
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

## VERSIONING

### SEMANTIC VERSIONING

APIs **MUST** follow the Semantic Versioning Specification 2.0.0. It
helps API consumers avoid using new versions with breaking changes. You
**SHOULD** avoid breaking changes where possible.

If you never apply a *breaking change*, simply use semantic versioning
to differentiate *minor* releases (with added functionality) from
*patch* releases.

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Semantic Versioning 2.0.0 \| Semantic
  information](./media/image3.png){width="0.4638888888888889in"   Versioning](https://semver.org/)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

### VERSIONING URLS FOR RELEASE VERSIONS

You **MUST** indicate *release* versions with *breaking changes* by
adding a higher *major version number,* preceded by a lowercase v*,* to
the URL. Exclude version 1.x.x. and m*inor* and *patch* version numbers.

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            */{base}/patients*
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------
  ![Example of good                                            *{*base}*/v2/patients*
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               

  ![Example of practices to                                    */{base}/v1/patients*
  avoid](./media/image7.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               

  ![Example of practices to                                    */{base}/v2.1.3/patients*
  avoid](./media/image7.png){width="0.1968503937007874in"      
  height="0.1968503937007874in"}                               
  -----------------------------------------------------------------------------------------------------------------------------

### VERSIONING URLS FOR PRE-RELEASE VERSIONS (ALPHA AND BETA)

Follow the same method for pre-release versions but include versions 0
and 1 and add the pre-release type (i.e. *alpha* or *beta*), preceded by
a dash.

Semantic versioning states that major version 0 is always pre-release;
therefore alpha/beta labels are not necessarily needed but they help
clarify API status. Here are some examples:

Version "0.1.3-alpha" published for pre-release testing to:

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            */{base}/v0-alpha/patients*
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------

And then version "1.0.0" published to:

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            */{base}/patients*
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------

Followed by version "1.1.0-beta" published for pre-release testing to:

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            /{base}/v1.1-beta/patients
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------

Finally, release version "1.1.0" (with no breaking changes) published to
the original URL:

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            */{base}/patients*
  practice](./media/image5.png){width="0.1968503937007874in"   
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              When deploying breaking changes to *beta* versions (i.e.
  tips](./media/image1.png){width="0.3937007874015748in"   versions used by early adopters), increment the minor version
  height="0.3937007874015748in"}                           and notify users who might be affected.
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## CATALOGUING

You **MUST** publish any release version *Open* API to the NHS Wales API
external product catalogue.

You **MAY** publish an *Open* API, not yet marked as a release, version
to the NHS Wales API external product catalogue.

You **SHOULD** publish a release version *inner* API to DHCW's internal
product catalogue.

You **MAY** publish an *inner* API, not yet marked as a release version,
to DHCW's internal product catalogue.

The catalogue entry **MUST** include the [lifecycle
status](#lifecycle-status). This makes it clear to consumers where each
version of your API is in its lifecycle.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Uncatalogued APIs run the risk of being forgotten and not
  tips](./media/image1.png){width="0.3937007874015748in"   monitored or protected by security tools. See also the [OWASP
  height="0.3937007874015748in"}                           TOP 10](#owasp-top-10) section.
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## AUDITING, TRACING AND MONITORING

If your API deals with [confidential or sensitive data](#data-type), you
**MUST** maintain a log that records details about access.

This log **SHOULD** be sent to our Security information and event
management system (SIEM) and National Intelligent Integrated Audit
Solution (NIIAS) via an [API gateway](#api-gateway-pattern).

To ensure compliance and for guidance on the log format and the minimum
standard fields, consult with the platform team or Cyber security team.

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [National Intelligent Integrated Audit Solution (NIIAS) -
  information](./media/image3.png){width="0.4638888888888889in"   Home](https://nhswales365.sharepoint.com/sites/DHC_IGNI)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

## RATE LIMITING AND THROTTLING

All APIs **SHOULD** set client usage quotas and rate limits. For
critical systems, this is a **MUST**. Speak to the platform team and
Cyber Security team for help.

### SPIKE ARRESTS

The platform team will help you handle sudden traffic spikes and keep
you API stable. Rate limiting, a key feature in Apigee, sets thresholds
on the number of requests within a specific period.

This ensures a controlled flow of traffic, preventing overloads and
optimising performance. No manual configuration is required; the API
platform team oversees Apigee, guaranteeing effective rate limiting for
a reliable and responsive API experience.

# TESTING

This section provides help for creating your API Test strategy and
plans.

## SHIFT LEFT

Test early in the API lifecycle and continue testing at every stage.
This \'shift left\' approach challenges you to develop T-shaped skills.
For testers, this may involve writing code for automated tests. For
developers, it means recognising that testing is a shared
responsibility.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [[What is Shifting Left Testing? \| Shift Left Meaning in Software
  information](./media/image3.png){width="0.4638888888888889in"   Testing]{.underline}](https://smartbear.com/learn/automated-testing/shifting-left-in-testing/)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------

## AUTOMATE AS MUCH AS YOU CAN

Test automation is crucial for shifting left and you **SHOULD** execute
tests as part of your CI/CD pipelines. This practice helps identify and
fix issues as they are introduced.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Consider automating tests for stories with frequent execution,
  tips](./media/image1.png){width="0.3937007874015748in"   critical functionality, stable requirements and variable data.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## VALIDATE THE OPENAPI SPECIFICATION

Check the [OpenAPI specification](#open-api-specification) for structure
and format to ensure the contract is correct. Use the *out-of-the-box*
rules provided by linting tools like *Spectral* or *Postman Linter* to
verify proper JSON and YAML formatting.

It is **RECOMMENDED** you write a custom ruleset to enforce the rules
described in this document.

You **SHOULD** Inspect the API contract for the following, adding these
checks to your CI/CD pipeline.

-   Endpoints are named correctly.

-   Resources and their types are accurate.

-   Relationships between resources are properly defined.

-   No functionality is missing or duplicated.

+------+---------------------------------------------------------------+
| !    | > [API linting with Spectral \| What is it and how does it    |
| [Fur | > work?](https://blog.axway.com/learning-center/apis/api      |
| ther | -design/api-linting-with-spectral#:~:text=Spectral%20allows%2 |
| rea  | 0automating%20some%20of,APIs%20follow%20the%20given%20rules.) |
| ding |                                                               |
| and  |                                                               |
| i    |                                                               |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e3.p |                                                               |
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

## UNIT TESTS

Write unit tests as you build your API to catch issues early. Start with
minimal tests and expand as necessary -- do not overcomplicate matters.

You **SHOULD** add these tests to your CI/CD pipeline and publish code
coverage metrics in a [Test Summary report](#test-summary-report).

## FUNCTIONAL TESTS

Functional tests **SHOULD** verify that:

-   The correct HTTP headers and [HTTP status
    codes](#return-http-status-codes) are returned.

-   The media type and its payload are correct, with appropriate field
    names, types and values.

-   Endpoints behave according to the specified business logic and
    requirements.

### TEST FOR FAILURE

Functional testing **SHOULD** include negative tests and check for valid
error responses. These **SHOULD** cover scenarios for handling transient
faults.

### BEHAVIOUR DRIVEN DEVELOPMENT (BDD)

Automate validation by incorporating BDD executable scenarios into your
functional tests. For example:

+-----+----------------------------------------------------------------+
| ![E | Scenario: Verify Successful Patient Retrieval                  |
| xam |                                                                |
| ple | Given the API endpoint for retrieving patient data             |
| of  |                                                                |
| g   | When a GET request is made with a valid patient ID             |
| ood |                                                                |
| p   | Then the API should return a 200 OK status code                |
| rac |                                                                |
| tic | And the response should include correct patient information    |
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

## SECURITY TESTS

Plan security testing with the API platform and cyber security teams.
While many tests are executed against the proxy, you **SHOULD** also
test the backend API for common vulnerabilities.

Refer to the [Security](#security-standards) section when planning your
tests. Examples of common security tests include:

-   Input validation tests to prevent SQL injection attacks.

-   Verifying that only authorised users can access patient data.

-   Data encryption checks to confirm that data is transmitted over
    HTTPS.

-   Rate limiting tests to detect and mitigate potential brute-force
    attacks.

## PERFORMANCE TESTS

You **MUST** check the [maximum response
time](#performance-and-response-times).

You **SHOULD** consider whether to conduct, baseline, load, stress, soak
and scalability tests.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Keep in mind that setting up the right environment can be
  tips](./media/image1.png){width="0.3937007874015748in"   challenging and that repeating tests consistently may be
  height="0.3937007874015748in"}                           difficult due to network variations.
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## USABILITY TESTS

You **SHOULD** test the entire API consumer journey including
documentation, authentication and code examples, to ensure usability for
users without prior knowledge of our systems.

## KEEP TESTS ORGANISED

Tests **MUST** be organised and named according to our coding standards.

+------+---------------------------------------------------------------+
| !    | > SDS-CS-5 How to Organise your Software Solution             |
| [Fur | >                                                             |
| ther | > SDS-CS-6 General Coding Standards                           |
| rea  |                                                               |
| ding |                                                               |
| and  |                                                               |
| i    |                                                               |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e3.p |                                                               |
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

## TEST SUMMARY REPORT

You **SHOULD** write a Test Summary report for every major, minor or
patch version of your API. The content **MAY** vary depending on the
version but you **SHOULD** consider including each of the following
headings.

+------+---------------------------------------------------------------+
| ![   | 1.  Static Analysis results (e.g. Spectral tests)             |
| Docu |                                                               |
| ment | 2.  Code Metrics (e.g. code coverage based on results from    |
| with |     automated tests)                                          |
| s    |                                                               |
| olid | 3.  Functional Tests                                          |
| fil  |                                                               |
| l](. | 4.  Security Tests (including references to any external pen  |
| /med |     test reports)                                             |
| ia/i |                                                               |
| mage | 5.  Performance Tests                                         |
| 10.p |                                                               |
| ng){ | 6.  Usability Tests                                           |
| widt |                                                               |
| h="0 |                                                               |
| .464 |                                                               |
| 5669 |                                                               |
| 2913 |                                                               |
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

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Some headings **MAY** be marked as "N/A" if not applicable for
  tips](./media/image1.png){width="0.3937007874015748in"   the version tested.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | > SDS-GDN-6 How to write a Test Summary report                |
| [Fur | >                                                             |
| ther | > SDS-TEM-5 Test Summary Report Template                      |
| rea  |                                                               |
| ding |                                                               |
| and  |                                                               |
| i    |                                                               |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e3.p |                                                               |
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

## TEST ENVIRONMENT

You **SHOULD** deploy APIs to a sandbox environment to allow client
testing. Contact the platform team for further assistance.

# TOOLING

When choosing your API toolset, you **SHOULD** consider open-source
options (e.g. Visual Studio Code). However, you **MAY** choose a
subscription-based alternative (e.g. Visual Studio) if the cost is
justified.

## RECOMMENDED TOOLS

+----------------------------------------+-----------------------------+
| **TOOL**                               | **CATEGORY**                |
+========================================+=============================+
| Enterprise Architect with OpenAPI      | API Design and              |
| Plug-in                                | Documentation               |
|                                        |                             |
| SwaggerHub                             |                             |
|                                        |                             |
| OpenAPI (Swagger) Editor Extension for |                             |
| VS Code                                |                             |
+----------------------------------------+-----------------------------+
| Visual Studio Code or Visual Studio    | Code Editors and IDEs       |
+----------------------------------------+-----------------------------+
| Firely.NET SDK                         | SDKs                        |
|                                        |                             |
| xUnit                                  |                             |
|                                        |                             |
| SpecFlow                               |                             |
|                                        |                             |
| RestSharp                              |                             |
|                                        |                             |
| apickli (NPM Package)                  |                             |
+----------------------------------------+-----------------------------+
| Postman / Newman                       | API Testing and Automation  |
|                                        |                             |
| ReadyAPI (formerly SoapUI)             |                             |
|                                        |                             |
| REST Client (VS Code Extension)        |                             |
|                                        |                             |
| Thunder Client VS Code Extension)      |                             |
+----------------------------------------+-----------------------------+
| Spectral Linter for VS Code Extension  | API Specification and       |
|                                        | Linting                     |
+----------------------------------------+-----------------------------+
| OWASP ZAP                              | Security Testing and        |
|                                        | Quality Analysis            |
| Burp Suite Pro                         |                             |
|                                        |                             |
| BrowserStack                           |                             |
|                                        |                             |
| SonarQube (Cloud, Server IDE)          |                             |
|                                        |                             |
| GitHub Advanced Security for Azure     |                             |
| DevOps                                 |                             |
|                                        |                             |
| Microsoft Security DevOps Azure DevOps |                             |
| extension                              |                             |
+----------------------------------------+-----------------------------+
| Azure DevOps                           | DevOps and Containerisation |
|                                        |                             |
| Docker Desktop                         |                             |
|                                        |                             |
| Podman                                 |                             |
+----------------------------------------+-----------------------------+

# DOCUMENTATION

Good documentation makes our APIs easier to use. Even without a
technical writer, this guide shows you how to create clear,
well-structured API docs.

+------+---------------------------------------------------------------+
| !    | [Documenting APIs -                                           |
| [Fur | GOV.UK](https://www.gov.uk/guidance/how-to-document-apis)     |
| ther |                                                               |
| rea  | [Documenting APIs: A guide for technical writers and          |
| ding | engineers](https://idratherbewriting.com/learnapidoc/)        |
| and  |                                                               |
| i    |                                                               |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e3.p |                                                               |
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

## WRITING STYLE

You **SHOULD** follow DHCW's Writing checklist, ensuring that you:

-   Write short sentences.

-   Talk directly to your user by using 'you' and active verbs.

-   Use the active voice and plain language.

-   Avoid using 'home-grown' terms that are not industry standard.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [DHCW Writing
  information](./media/image3.png){width="0.4638888888888889in"   checklist](https://nhswales365.sharepoint.com/sites/DHCW-Intranet/SitePages/Writing-style-guide.aspx)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- -------------------------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## OPENAPI SPECIFICATION

You **SHOULD**:

-   Describe your API using the OpenAPI (OAS) definition, version 3. OAS
    is a global standard for describing RESTful APIs in a human and
    machine-readable format.

-   Provide OpenAPI definitions in YAML, as described in the next
    section.

-   Add a monitored email address to the info object of the OpenAPI
    definition to allow consumers to contact you with issues or
    comments.

-   Include the full semantic version number in the info object of the
    OpenAPI definition.\
    Store your OpenAPI specification in source control and keep it up to
    date.

  -------------------------------------------------------------------------------------------------------------------------------
  ![Further reading and                                           [Semantic Versioning 2.0.0 \| Semantic
  information](./media/image3.png){width="0.4638888888888889in"   Versioning](https://semver.org/)
  height="0.4638888888888889in"}                                  
  --------------------------------------------------------------- ---------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------

## DOCUMENT STRUCTURE

You **SHOULD** organise your API documentation. This section provides a
**RECOMMENDED** structure:

+-----+----------------------------------------------------------------+
| ![E | ├── system.yml                                                 |
| xam |                                                                |
| ple | ├── {api-id}/                                                  |
| of  |                                                                |
| g   | │ ├── api.yml                                                  |
| ood |                                                                |
| p   | │ ├── spec/                                                    |
| rac |                                                                |
| tic | │ │ ├── open-api.yml or service.wsdl                           |
| e]( |                                                                |
| ./m | │ │ └── example-requests/                                      |
| edi |                                                                |
| a/i | │ └── user-guide/                                              |
| mag |                                                                |
| e5. | │ └── (see the user-guide section for more information)        |
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

### SYSTEM.YML

system.yml describes the underlying service that exposes the API
endpoints. Information that might otherwise be repeated across related
APIs can be added to the description. It contains the following fields:

  -------------------------------------------------------------------------
  **FIELD**           **MAX          **DESCRIPTION**
                      CHARACTERS**   
  ------------------- -------------- --------------------------------------
  short-name          10             Name or abbreviation to be used as a
                                     prefix when displayed in the API
                                     catalogue.

  description         150            What the service does.
  -------------------------------------------------------------------------

### API.YML

api.yml provides a brief overview of:

-   What your API does.

-   Whether your API is in the alpha, beta or in production.

-   Who can use your API, and any restrictions on using it or its data.

+------------------+------------+-------------------------------------+
| **FIELD**        | **MAX      | **DESCRIPTION**                     |
|                  | CH         |                                     |
|                  | ARACTERS** |                                     |
+==================+============+=====================================+
| title            | 80         | Name or abbreviation to be used as  |
|                  |            | a prefix when displayed in the API  |
|                  |            | catalogue.                          |
+------------------+------------+-------------------------------------+
| description      | 150        | What the service does.              |
+------------------+------------+-------------------------------------+
| overview         | 800        | Provide brief details for each of   |
|                  |            | the following:                      |
|                  |            |                                     |
|                  |            | -   ***What the API does*:** A more |
|                  |            |     detailed description with       |
|                  |            |     specifics about data sources    |
|                  |            |     and formats.                    |
|                  |            |                                     |
|                  |            | -   ***Who will use it and why*:**  |
|                  |            |     Provide examples of typical     |
|                  |            |     consumers and why they would    |
|                  |            |     use the API.                    |
|                  |            |                                     |
|                  |            | -   ***Where it's available***:     |
|                  |            |     Mention any restrictions on     |
|                  |            |     use.                            |
+------------------+------------+-------------------------------------+
| owner            | 30         | Email address for main point of     |
|                  |            | contact for information about the   |
|                  |            | API.                                |
+------------------+------------+-------------------------------------+
| type             | N/A        | FHIR , REST SOAP , HL7v2 , HL7v3    |
|                  |            | Solr or GraphQL                     |
+------------------+------------+-------------------------------------+
| status           | N/A        | Alpha , Beta Stable , Legacy ,      |
|                  |            | Deprecated or Retired               |
+------------------+------------+-------------------------------------+
| data type        | N/A        | Public , Business Confidential      |
|                  |            | Sensitive or Highly Sensitive       |
+------------------+------------+-------------------------------------+

### SPEC/OPEN-API.YML

Include an open-api.yml file in the spec folder. You **SHOULD** format
descriptions in markdown so that the platform team can generate HTML
documentation in the API [catalogue](#cataloguing).

You **SHOULD NOT** include the actual endpoint of your API server.
Replace it with *https://private.url*.

You **MAY** include examples in the open-api.yml file.

### SPEC/SERVICE.WSDL

If you are publishing a legacy SOAP service, you **SHOULD** provide a
service.wsdl document in the spec/example-requests folder. Contact the
platform team for more information.

### USER-GUIDE

Although documentation can be auto generated from the open-api.yml or
service.wsdl, you **MAY** enhance it by adding a user guide as markdown
files.

+-----+----------------------------------------------------------------+
| ![E | user-guide/                                                    |
| xam |                                                                |
| ple | ├── overview.md                                                |
| of  |                                                                |
| g   | ├── quickstart.md                                              |
| ood |                                                                |
| p   | ├── how-to/                                                    |
| rac |                                                                |
| tic | │ ├── 1-{description}.md                                       |
| e]( |                                                                |
| ./m | │ └── n-{description}.md                                       |
| edi |                                                                |
| a/i | ├── concepts/                                                  |
| mag |                                                                |
| e5. | │ ├── {concept}.md                                             |
| png |                                                                |
| ){w | │ └── {concept}.md                                             |
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

### OVERVIEW.MD -- INTRODUCE YOUR API

You **SHOULD** start with a brief overview that explains what the API
does and how it works. Focus on technical details suitable for
developers and emphasise any prerequisites or essential concepts.

+-----+----------------------------------------------------------------+
| ![E | *'A FHIR API that lets you retrieve ValueSets resources of     |
| xam | SNOMED concepts.'*                                             |
| ple |                                                                |
| of  | *//\...how it works*                                           |
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
| ![E | *'A SOAP API that triggers a questionnaire to be sent.'*       |
| xam |                                                                |
| ple | *//\...how it works*                                           |
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

### QUICKSTART.MD -- HOW TO GET STARTED

You **SHOULD** create a concise section that guides users through the
quickest and simplest method of obtaining an example response from your
API. Assume the reader is familiar with the necessary technology but
highlight any advanced or unconventional steps, including potential
pitfalls or important considerations.

### HOW-TO -- TASK-BASED GUIDES FOR COMMON SCENARIOS

You **SHOULD** provide task-based examples in a user-friendly style to
help users with common integration tasks. Write them in the same style
as the quickstart; however, these examples can be longer and more
complex. Examples **SHOULD** have the following characteristics:

-   Begin with a front-loaded title that starts with a verb.

-   Focus on helping users complete one task.

-   Tell users what they need to do, not how the system works.

-   Use numbered steps for clarity.

-   Include example code and descriptions for request parameters and
    response fields.

-   Provide links to any subsequent tasks the user needs to complete.

  -----------------------------------------------------------------------------------------------------------------------------
  ![Example of good                                            *'**Retrieve ValueSets resources of SNOMED concepts** -- using a
  practice](./media/image5.png){width="0.1968503937007874in"   FHIR API'*
  height="0.1968503937007874in"}                               
  ------------------------------------------------------------ ----------------------------------------------------------------
  ![Example of good                                            *'**Trigger the sending of a questionnaire** -- using a SOAP
  practice](./media/image5.png){width="0.1968503937007874in"   API'*
  height="0.1968503937007874in"}                               

  -----------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Avoid duplicating basic info about the API. Link to the '[Get
  tips](./media/image1.png){width="0.3937007874015748in"   started](#quickstart.md-how-to-get-started)' section instead.
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

### CONCEPTS

You **SHOULD** explain any essential concepts, such as document metadata
standards. If a concept refers to an external source you **SHOULD**
provide a link.

### ERROR RESPONSE CODES

You **SHOULD** place error responses near the endpoint documentation or
at the end of the API reference. Even if you anticipate only standard
responses, such as 400 NOT FOUND or 200 OK, you **MUST** clarify how
they relate to your API.

+-----+----------------------------------------------------------------+
| ![  | -   Store the OpenAPI definition in the docs folder of your    |
| Pra |     code repository.                                           |
| cti |                                                                |
| cal | -   Create custom tasks in your CI/CD pipeline to publish API  |
| tip |     documentation to Apigee.                                   |
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

## DEVELOPER PORTAL

We provide two developer portals for managing and publishing APIs:

  ----------------------------------------------------------------------------------------------------
  **FEATURE**         **DESCRIPTION**                 **URL**
  ------------------- ------------------------------- ------------------------------------------------
  Internal Developer  Allows developers to browse the <https://apim-apigee-test-nhswales.apigee.io/>
  Portal              internal API catalogue, obtain  
                      API keys, and test APIs before  
                      external publication.           

  External Developer  Central hub for publishing and  [Home - NHS Wales Digital
  Portal              managing API documentation.     Platform](https://digitalplatform.nhs.wales/)
                      Provides a user-friendly        
                      interface for API consumers.    
  ----------------------------------------------------------------------------------------------------

When you are ready to publish your API documentation, contact the
platform team for guidance.

## SOFTWARE DEVELOPMENT KITS (SDKS)

Creating a client-side SDK takes effort, but it can simplify integration
for your users. If you provide an SDK with your API, you MUST test it
thoroughly to ensure reliability.

  -------------------------------------------------------------------------------------------------------------------------
  ![Practical                                              Understand your users' needs. A .NET client might not be useful
  tips](./media/image1.png){width="0.3937007874015748in"   to a Java developer!
  height="0.3937007874015748in"}                           
  -------------------------------------------------------- ----------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------

## EXCEPTIONS

Standards provide valuable guidance, but there may be rare exceptions.
Principal and Lead Software Developers have discretion in such cases.

# APPENDIX A: CLASSIFICATIONS

## API TYPE

+------------------------+---------------------------------------------+
| **TYPE**               | **DEFINITION**                              |
+========================+=============================================+
| Open                   | Open APIs are made available to both        |
|                        | internal developers within DHCW and         |
|                        | external consumers. They are exposed and    |
|                        | managed on DHCW's API management platform,  |
|                        | Apigee and published on an external         |
|                        | catalogue.                                  |
|                        |                                             |
|                        | Examples include *Medicines & Allergies*,   |
|                        | *PIX and PDQ APIs*                          |
+------------------------+---------------------------------------------+
| Internal               | Internal APIs are accessible only to        |
|                        | internal developers within DHCW. They are,  |
|                        | typically, exposed and managed on DHCW's    |
|                        | API management platform, Apigee and         |
|                        | published on an internal catalogue. They    |
|                        | are not intended for external use.          |
+------------------------+---------------------------------------------+
| Client specific        | These APIs are restricted to a specific     |
|                        | client or team within DHCW. They are        |
|                        | usually managed independently through that  |
|                        | team\'s own API management tool. They are   |
|                        | not typically published on a central        |
|                        | catalogue.                                  |
+------------------------+---------------------------------------------+

[\
]{.mark}

## DATA TYPE

+------------------------+---------------------------------------------+
| **TYPE**               | **DEFINITION**                              |
+========================+=============================================+
| Public                 | Access restrictions are not required for    |
|                        | read-only access.                           |
|                        |                                             |
|                        | Examples: NHS Wales Data Dictionary items,  |
|                        | dummy data in a public test environment.    |
+------------------------+---------------------------------------------+
| Business confidential  | Access restrictions are set by              |
|                        | organisational policy, contracts, or        |
|                        | license agreements, but not by law.         |
|                        |                                             |
|                        | Examples: SNOMED CT, internal URLs, and     |
|                        | connection strings.                         |
+------------------------+---------------------------------------------+
| Sensitive              | Access restrictions are more stringent and  |
|                        | set by laws (e.g. GDPR legislation)         |
|                        |                                             |
|                        | Examples: "Personal" data types, as defined |
|                        | in the *Data Protection Impact Assessment   |
|                        | Form Template*.                             |
+------------------------+---------------------------------------------+
| Highly sensitive       | Access restrictions are specific to the     |
|                        | data items and higher than sensitive or     |
|                        | business confidential.                      |
|                        |                                             |
|                        | Examples: "Special category" and "Higher    |
|                        | sensitivity" data types, as defined in the  |
|                        | *Data Protection Impact Assessment Form     |
|                        | Template*.                                  |
|                        |                                             |
|                        | Examples: database passwords, private       |
|                        | encryption keys.                            |
+------------------------+---------------------------------------------+

+------+---------------------------------------------------------------+
| !    | > IG-TEM-1 Data Protection Impact Assessment Form Template    |
| [Fur |                                                               |
| ther |                                                               |
| rea  |                                                               |
| ding |                                                               |
| and  |                                                               |
| i    |                                                               |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e3.p |                                                               |
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

## NETWORK ROUTING TYPE

  -----------------------------------------------------------------------
  **TYPE**                 **DEFINITION**
  ------------------------ ----------------------------------------------
  Internal                 Data stays within NHS Wales Wide Area Network
                           (WAN).

  Peered                   Data stays within Health and Social Care
                           Network (HSCN), Public Sector Broadband
                           Aggregation (PSBA), or another secured link
                           (VPN or mTLS) to NHS Wales WAN.

  Internet                 Data travels across the public internet.
  -----------------------------------------------------------------------

## CLIENT TYPE

Take care to apply these classifications in context. For example, a
client may be *pre-authorized* to write patient prescription data but
only *licenced* for use in reading patient test results.

+------------------------+---------------------------------------------+
| **TYPE**               | **DEFINITION**                              |
+========================+=============================================+
| Pre-authorised         | Authorised to process the data and apply    |
|                        | appropriate access controls for end users.  |
|                        |                                             |
|                        | Typically, an application managed by an NHS |
|                        | Wales organisation or a contracted          |
|                        | supplier.                                   |
|                        |                                             |
|                        | Authorisation requires formal assurance by  |
|                        | an NHS Wales assurance group.               |
|                        |                                             |
|                        | Examples: Welsh Clinical Portal, GP         |
|                        | Systems, Clinical Workstation.              |
+------------------------+---------------------------------------------+
| Licenced               | Licenced ('*Trusted')* to process the data  |
|                        | if authorised end users supply or grant     |
|                        | access to it.                               |
|                        |                                             |
|                        | Typically, an application procured or under |
|                        | trial usage by an NHS Wales organisation.   |
|                        |                                             |
|                        | Licencing for use may require formal        |
|                        | assurance by an NHS Wales assurance group.  |
+------------------------+---------------------------------------------+
| Open                   | Has no formal NHS Wales approval or         |
|                        | contract licencing its use to process the   |
|                        | data.                                       |
|                        |                                             |
|                        | Typically, an application procured,         |
|                        | developed, or otherwise obtained by the     |
|                        | user.                                       |
|                        |                                             |
|                        | Examples: Postman, SOAP UI                  |
+------------------------+---------------------------------------------+

## CLIENT AUTHENTICATION LEVEL

+------------------------+---------------------------------------------+
| **LEVEL**              | **DEFINITION**                              |
+========================+=============================================+
| 0: No Authentication   | No authentication.                          |
+------------------------+---------------------------------------------+
| 1: API Key             | API Key is provided with each request.      |
|                        |                                             |
|                        | *Weak security as the key is both ID and    |
|                        | the credential*.                            |
+------------------------+---------------------------------------------+
| 2: Credentials         | Basic client credentials (Client ID and     |
|                        | Client Secret) are provided with each       |
|                        | request.                                    |
|                        |                                             |
|                        | *More secure as the secret can be omitted   |
|                        | when the Client ID is written to audit      |
|                        | logs.*                                      |
+------------------------+---------------------------------------------+
| 3: : Access token      | A time limited access token is first        |
| (using Credentials)    | obtained in an initial request, then        |
|                        | provided with each further request.         |
|                        |                                             |
|                        | To obtain the access token the client       |
|                        | supplies basic credentials (Client ID and   |
|                        | Client Secret).                             |
|                        |                                             |
|                        | *More secure as credentials are shared less |
|                        | frequently and only with the token          |
|                        | endpoint.*                                  |
|                        |                                             |
|                        | Licenced clients may use level 3.           |
+------------------------+---------------------------------------------+

## SERVICE LEVEL

  -----------------------------------------------------------------------
  **LEVEL**                **DEFINITION**
  ------------------------ ----------------------------------------------
  Critical                 As defined in *DHCW-POL-5 Service Level Target
                           Policy*, extended downtime is highly
                           disruptive.

  Standard                 As defined in *DHCW-POL-5 Service Level Target
                           Policy*, e.g. reporting and analytical
                           systems.
  -----------------------------------------------------------------------

+------+---------------------------------------------------------------+
| !    | > DHCW-POL-5 Service Level Target Policy                      |
| [Fur |                                                               |
| ther |                                                               |
| rea  |                                                               |
| ding |                                                               |
| and  |                                                               |
| i    |                                                               |
| nfor |                                                               |
| mati |                                                               |
| on]( |                                                               |
| ./me |                                                               |
| dia/ |                                                               |
| imag |                                                               |
| e3.p |                                                               |
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

## LIFECYCLE STATUS

+-----------+----------------------------------------+----------------+
| *         | **DEFINITION**                         | **RELEASE      |
| *STATUS** |                                        | VERSION**      |
+===========+========================================+================+
| **Alpha** | Pre-release version and subject to     | No             |
|           | *breaking changes*. Intended to be     |                |
|           | used only by those involved with the   |                |
|           | development.                           |                |
|           |                                        |                |
|           | ***SHOULD** not be available in a      |                |
|           | production environment.*               |                |
+-----------+----------------------------------------+----------------+
| **Beta**  | Pre-release version and subject to     | No             |
|           | *breaking changes*. Stable enough for  |                |
|           | use by early adopters to help you      |                |
|           | identify bugs and potential            |                |
|           | improvements.                          |                |
|           |                                        |                |
|           | ***MAY** be available in a production  |                |
|           | environment.*                          |                |
+-----------+----------------------------------------+----------------+
| *         | Release version. You **MUST NOT**      | Yes            |
| *Stable** | introduce breaking changes. Breaking   |                |
|           | changes **MUST** result in a new major |                |
|           | version.                               |                |
|           |                                        |                |
|           | ***SHOULD** be available in a          |                |
|           | production environment.*               |                |
+-----------+----------------------------------------+----------------+
| *         | The same as *stable*, available for    | Yes            |
| *Legacy** | use but no new integrations given it's |                |
|           | planned for *deprecation.*             |                |
|           |                                        |                |
|           | ***SHOULD** be available in a          |                |
|           | production environment for existing    |                |
|           | users.*                                |                |
+-----------+----------------------------------------+----------------+
| **Dep     | The same as *stable*, but existing     | Yes            |
| recated** | users should switch to a newer version |                |
|           | or alternative API*.* Not intended for |                |
|           | new users, given it's planned for      |                |
|           | *retirement.*                          |                |
|           |                                        |                |
|           | ***SHOULD** be available in a          |                |
|           | production environment until           |                |
|           | retirement.*                           |                |
+-----------+----------------------------------------+----------------+
| **        | No longer supported. APIs move into    | No             |
| Retired** | this category when all users have      |                |
|           | moved to a newer version or no longer  |                |
|           | subscribe.                             |                |
|           |                                        |                |
|           | ***MUST** not be available in any      |                |
|           | environments.*                         |                |
+-----------+----------------------------------------+----------------+

## 

# ESSENTIAL GOOD PRACTICE CHECKLIST 

+---+------------------------------+---+---------------------+---------+
| * | **Checklist Item**           |   | **Section Heading** | **Excep |
| * |                              |   |                     | tions** |
| N |                              |   |                     |         |
| o |                              |   |                     |         |
| . |                              |   |                     |         |
| * |                              |   |                     |         |
| * |                              |   |                     |         |
+===+==============================+===+=====================+=========+
| 1 | APIs conform to FHIR R4.     | ☐ | FHIR (Fast          | S       |
|   |                              |   | Healthcare          | uitable |
|   |                              |   | Interoperability    | FHIR R4 |
|   |                              |   | Standards)          | p       |
|   |                              |   |                     | rofiles |
|   |                              |   |                     | may be  |
|   |                              |   |                     | unava   |
|   |                              |   |                     | ilable. |
+---+------------------------------+---+---------------------+---------+
| 2 | You have identified the      | ☐ | Data Classification |         |
|   | resource data type.          |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 3 | You have an OpenAPI          | ☐ | OpenAPI             |         |
|   | specification kept in source |   | Specification       |         |
|   | control.                     |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 4 | You structure API endpoints  | ☐ | URL Structure       |         |
|   | for predictability.          |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 5 | You use HTTP verbs to define | ☐ | HTTP Implementation |         |
|   | operations.                  |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 6 | APIs return correct HTTP     | ☐ |                     |         |
|   | status codes.                |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 7 | You follow FHIR or our JSON  | ☐ | Payload Rules       | Unless  |
|   | payload rules and structure. |   |                     | fo      |
|   |                              |   | JSON Response       | llowing |
|   |                              |   | Payload Structure   | the     |
|   |                              |   |                     | FHIR    |
|   |                              |   |                     | specif  |
|   |                              |   |                     | ication |
+---+------------------------------+---+---------------------+---------+
| 8 | You apply Paging to          | ☐ | Paging              |         |
|   | collections with an          |   |                     |         |
|   | unbounded number of items.   |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 9 | You return errors in a       | ☐ | Error Reporting     |         |
|   | common format.               |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 1 | You publish a transient      | ☐ | Handling Transient  |         |
| 0 | fault contract..             |   | Faults              |         |
+---+------------------------------+---+---------------------+---------+
| 1 | You follow naming            | ☐ | Naming              |         |
| 1 | conventions and use standard |   |                     |         |
|   | query parameters.            |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 1 | You define a maximum         | ☐ | Performance and     |         |
| 2 | response time.               |   | Response Times      |         |
+---+------------------------------+---+---------------------+---------+
| 1 | You deploy APIs to an API    | ☐ | API Management      |         |
| 3 | gateway.                     |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 1 | API clients authenticate     | ☐ | Authentication and  |         |
| 4 | using OAuth and OIDC.        |   | Authorisation       |         |
+---+------------------------------+---+---------------------+---------+
| 1 | You apply the correct        | ☐ | Restrictions on     |         |
| 5 | restrictions on data usage.  |   | Data Use            |         |
+---+------------------------------+---+---------------------+---------+
| * | **Checklist Item**           |   | **Guide or          | **Excep |
| * |                              |   | standard**          | tions** |
| N |                              |   |                     |         |
| o |                              |   |                     |         |
| . |                              |   |                     |         |
| * |                              |   |                     |         |
| * |                              |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 1 | APIs implement *ping* and    | ☐ | Ping and Service    |         |
| 6 | service status endpoints.    |   | Status              |         |
+---+------------------------------+---+---------------------+---------+
| 1 | You follow our deprecation   | ☐ | Deployment          |         |
| 7 | and retirement policies.     |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 1 | API use semantic versioning. | ☐ | Versioning          |         |
| 8 |                              |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 1 | You publish APIs to an API   | ☐ | Cataloguing         |         |
| 9 | catalogue.                   |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 2 | You monitor APIs and apply   | ☐ | Auditing, Tracing   |         |
| 0 | rate limits where            |   | and Monitoring      |         |
|   | appropriate.                 |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 2 | You deploy API using CI / CD | ☐ | Deployment          |         |
| 1 | pipelines to an API gateway. |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 2 | You write Test reports for   | ☐ | Test Summary Report |         |
| 2 | every major, minor and patch |   |                     |         |
|   | version of your API.         |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 2 | Test reports include         | ☐ |                     |         |
| 3 | security testing and code    |   |                     |         |
|   | coverage metrics.            |   |                     |         |
+---+------------------------------+---+---------------------+---------+
| 2 | You follow our documentation | ☐ | Documentation       |         |
| 4 | recommendations.             |   |                     |         |
+---+------------------------------+---+---------------------+---------+

[^1]: Note Synthetic data should be useful and reflect the use-case of
    the API
