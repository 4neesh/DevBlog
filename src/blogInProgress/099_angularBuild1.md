---
title: 'xxx'
date: 2021-06-01
author: 'Aneesh Mistry'
subtitle: 'xxx'
time: 'xx'
tags:
- xxx
---
<br>
<p>
Building the project

ng new [project name]

Add bootstrap using npm install --save bootstrap@3. Add the reference to the dist/css/bootstrap.min.css file in the angular.json file under 'styles':
```json
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
```
Reuse ng serve to load these changes. 

</p>
<h1>Header</h1>
<p>

Navbar from bootstrap is used and good idea to learn some basic nav bar classes
- navbar header
- navbar collapse

</p>

<h1>Routing</h1>
<p>
Need to learn the basic const added for the routes

When creating a link from a button, we can use routerLink="/xyz" to link it. 
routerLinkActive="active" will make the button look activated when it is clicked. Useful tip
Need to practice ts routing. import Router and ActivatedRoute. Use router.navigate(['location],{relativeTo:route})
where route is ActivatedRoute in the constructor. 
</p>
<p>
@NgModule
- imports are used to import other modules of the application into the module using it. 
- exports make a module available to others
</p>
<h1>Model Class</h1>
<p>
- simply has a constructor with the fields it contains:
```ts
constructor(public x: string){}
```
</p>
<h1>Generic JavaScript</h1>
<p>
- A slice is used to return a shallow copy of an array. Changes to the original array are not returned.
- for an array, use push to add to it
- for an array, use splice(x,1) to remove the item at index x
</p>

<h1>Bootstrap</h1>
<p>
Use a container on the app.component.html when holding the routing-module
Container will store my grid layout in a responsive way. So the grid within will automatically scale with the screen. 
An alternate solution is container-fluid which keeps width at 100% all the time. 
</p>
<p>

</p>

<h1>Service pattern: to get, update and delete</h1>
<p>
We can create a shared service to deliver items around the application in an easy manner
When we update our shared service array, we need to inform the components that use them that it has been updated.
For this we use a Subject. Subjects are an Observable that are used to broadcast to multiple observers. When we call subject.next(x), we are broadcasting to all subscribers. 
The next() call is what sends an update to the subscribers. 
A subject is a special type of observable. EventEmitter requires us to wrap the callback. But with Subject it is actively obtained. We call 'next' to get the update. EventEmitter will inform us each time it is updated. 
What I don't understand is why in the component i need to assign it twice. 
</p>

<h1>Forms</h1>
<p>
Mark input fields with formNameControl
Mark the form with [formGroup]
Use this.form.reset() to clear it
Validators comes from 
</p>