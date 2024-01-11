## **Activity 2**
### **Images**
![The Angular Version](angularVersion.jpg 'Angular Version')
![Testapp running](testapp.jpg 'TestApp Running')
![Title change in browser](newTitle.jpg 'New title in the browser')
![Message](message.jpg 'Display of message member with name')

### **Research**
***
##### Part A
###### The "node_modules" folder is used to hold all of the dependencies and packages used by the project. These dependencies were automatically imported when the project was created.

###### The "src" folder is below the "node_modules" folder. It holds the source code which is considered to be the root. It holds main folders such as the "app" folder and main files such as the html file.

###### The "app" folder is within the "src" folder. This holds the component, configuration, and routes files. These files are important for creating the foundation of the application as they hold the code, templates, and styles that are used.

###### The "assets" folder is also in the root folder. This folder would hold images that the application needs to use.

###### The "environments" folder holds configurations needed for the environment. If this folder is not created, then the project is set to a default environment.

###### Angular.json is used to "describe the Angular app to the app building tools" (Angular, n.d.)

###### Package.json is used by the node package manager in order to run the application.

###### Tsconfig.json is used to "describe the configuration to the TypeScript compiler" (Angular, n.d.)
***
##### Part B
###### When the application runs it starts with the "main.ts". In this file the boostrap application from Angular is imported and compiled. The "app.component" files are imported here as well from the "app" folder. The "app.component.ts" uses imports from angular that are used by the other component files. The "app.component.html" file holds the code for the stylesheet. Although empty in this project, styles in the html file are utilized from the "app.component.css" file. 

***
***

#### References
###### Angular(n.d.) Lesson 1: Hello World. https://angular.io/tutorial/first-app/first-app-lesson-01
