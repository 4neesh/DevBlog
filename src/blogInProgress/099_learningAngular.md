---
title: 'xxx'
date: 2021-06-01
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
subtitle: 'xxx'
time: 'xx'
tags:
- xxx
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>


<br>
<h4>Title</h4>
<p>
Angular files
tslint.json = used for coding rules and specifying common patterns used
tsconfig.json = compiling typescript into es5 or other target used by browser
protractor = end to end testing
package.json = dependencies 
package-lock.json = npm install libraries to ensure npm versions are consistent on machines
karma.conf = unit testing 
gitignore - what to ignore when checking code into git
.angular-cli.json = controls where source code is stored (project structure), where to put builds, and other fonts/images used by src
</p>
<p>
Typescript - superset of javascript with additional features
Components - building blocks to a website for visual components. Include code and html templates
Services - reusable code (data validation, processing, getting data)
directives/child components -> rendering
Modules - used to organise code. Components and services are registered with a module
Routes - used to show or hide components (such as pages)
</p>
<p>
Component
- used to build ui of angular
- selector = tag name for it to be used elsewhere
- includes imports for importing modules
- decorator = metadata about component
- class = get data in and out of the component

Decorator
- decorator start with @
- selector = tag name for the decorator
- templateUrl = the location of where the component is found
- it is metadata about the code

Class 
- export means another module/file can import the functionality to the file
- export class {className}

Declarations
- used to import certain components used by the parent component

Modules 
- organise components into reusable buckets

</p>
<p>
- app-root is the selector for the 1st page loaded. 
</p>
<p>
Modules are defined within the app.module.ts file
- this includes NgModule, a decorator to provide metadata for the module
- BrowserModule is used  as a directive

The bootstrap element of the ngModule will direct to the startup component (main method)
</p>
<p>
main.ts platformBrowserDynamic will direct the app to the module used (and then within that module we specify the main class to start through 
bootstrap element)
</p>
<p>
Generating a new component
- use command ng g c {component name} where g = generate and c = component
use -d for a dry run to see what would be output. 
You import the common module from angular/common instead of browsermodule as you only have browsermodule once (on main component)
need to import module to the root (app.module) and add it to the imports decorator 
</p>
<p>
Summary for adding a component
1. use ng g c {componentName} to create the component
- the component.html file stores the actual html rendered
- the component.ts file includes the metadata (tagname) for component and link to html and also data transformation
- the module.ts file is used to export the component to be used by other places (such as the app)
2. the app will then import the component and reference it within the @NgModule imports
</p>
<p>
Piping - allows us to process data from the dom such as formatting data
- use the shared folder to create the custom pipeline
- ensure the shared module can be accessed by those that require it by adding it to imports for the app.module.ts file
- then import it to the module that uses the pipeline by adding it to the imports array
- apply the pipeline using | where appropriate. 

</p>
<p>
Adding a filter
- Input and Output properties are used - need to use Input and Ouput decorator and EmitEvent
- we need to emit data from a child to the parent. 
-[(ngModel)] allows you to have two way communication of data to and from a component. 
    - requires FormsModule to be imported to the module.
- in the html, we use action (changed) and direct it to ="filter" which is the name of the method name. 
- in the html, we call the filter in the speech marks and pass in ($event) which is the event object that is passed to the filter to apply to the html. 

1. in the html we add the response to the action we want i.e clicked, changed surrounded by () for input or [] for output or both. this is about hooking the front end to the event
2. This is then pointed to a function which then takes in the value as expected. 
3. in the component, we add the function for the behaviour
4. 
</p>
<p>
RESTful calls
1. Observable from rxjs/Observable package is used for subscriptions of data with REST
2. Pipes are similar to streams in restful calls. Except we use pipes to handle errors to be handled. Use .pipe( -operator )
3. 

</p>

<br>
<h4></h4>
<p>


</p>

<br>
<h4>Summary</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>