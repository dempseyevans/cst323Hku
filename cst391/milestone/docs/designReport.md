## SoulJournal

#### Dempsey Evans
#### Grand Canyon University
#### CST-391
#### Professor Estey
#### January 14th, 2024
***

***
##### The following was the feedback from my first submission:
"Dempsey, what would be great is if you wrote this up as MARKDOWN and add to your docs directory."

I addressed this feedback by creating a markdown for my design report rather than continuing with the microsoft word document.

***
***
##### Design Updates:
###### The REST API's in the design report have been updated to match changes made to the API's when creating the application.
***


##### Introduction:
###### SoulJournal is an application that tracks a user’s response to prompts. These prompts can be generated or created by the user. These prompts are meant to guide the user through faith-based journaling. Prompts will cover topics such as what they are currently thankful for, prayers, and how they will worship God through their actions.

#### Functionality:
###### This application will allow the user to be able to choose or create a prompt and type a response to the prompt. The user will be able to add and delete entries as well as review and edit previous entries.

#### Database Design:
![ER Design](ER.jpg 'ER Design')

#### Initial UI Sitemap:
![UI Sitemap](Sitemap.jpg 'Sitemap')

#### UI Wireframe:
![UI Wireframe](WireFrame.jpg 'UI WireFrame')

#### Initial UML Classes
![UML Classes](UML.jpg 'UML Classes')

#### Risks:
###### One risk of this application is data security such as that through unauthorized access to a user’s account. The user may potentially put sensitive information in their entries so the security of the data must be strong. Like all applications there is also a risk of bugs that make the application unusable or hurts the user experience. This includes improper communication between the application and the database.

#### API 
###### This application will have four main entry points. To 'GET', the API will be "./entries", putting the user on the page with their entries.'UPDAET' will be "./entries/update" with the text page. 'POST' will be "./entries/prompts/newentry" with the user on the page to write their new entry. Another 'GET' will be "./entries/prompts" where the user is choosing a prompt.
