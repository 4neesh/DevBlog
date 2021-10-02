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
1. create new folder
2. ng new {enter name of project}
3. No to routing and css for styling
4. open project in vscode
5. add bootstrap to the application in the angular.json file by referncing the styles in the build to the min.css file in the nodemodules downloaded bootstrap folder. 
6. use npm install --save bootstrap@3 to download

</p>
<p>
NgModule
bootstrap decorator is used for starting the index.html file
declarations: what components are in the application?
imports: add modules to the module. 
</p>
<p>
Create a new component with
ng g c {name} or ng generate component {name}
The component will be added to the imports of the app.module automatically and then the app-root will be able to refer to the selector in the html. If you manually create a component, you will need to register it to the app.module imports manually. 
By convention, components are exported with the naming convention of ExampleNameComponent, the Component suffix
</p>
<p>
Data binding
You can create a variable in the component and then reference it directly in the component html with {{ }}
e.g

name : string = 'aneesh'
then in the html:

```html
<p>Name is: {{ name }}</p>
```

You can also obtain the value from a method with:

getAge(){
    return this.age;
}
and in the html:

```html
<p>Age is: {{ getAge() }}</p>
```
</p>
<p>
property binding: 
You can bind a property (such as a boolean) to an element with speech-marks.
e.g.

isButtonActive : boolean = false;

in the html:

```html
<button [disabled]="isButtonActive"></button>
```
</p>
<p>
The text shown for an element, such as a paragraph, can be defined within the tags:

```html
<p>text here</p>

```
or using the 'innerText' property:

```html

<p innerText="nameOfString"></p>
```
</p>

<p>
Reacting to events
All html attributes have available evenets. Such as a button, which has click. Or others which have hover. 
We can bind a function to an event by adding it to the property in the html. 

```html
<button (click)="doClickMethod()"></button>

```
So this is done in three steps:
1. create method
2. define event in parentheses
3. call method in speech marks with parentheses 

You can find out all the events that can be bound to for a given html property by searching {property} properties or {property} events in google. See mozilla developer network
</p>

<p>
$event is used within a html property to pass in the data emitted from the event.
So for an input text field, $event represents the inputted text. 
</p>

<p>
So far we have two different ways of one way data binding. 
[property] is used for binding the component to the view. For example, using a boolean in the component to make a button disabled. 

and (event) to take an action from the html and to call a function in the component. 

These are both 1 way data binding.
</p>
<p>
Two way data binding. Event binding + property binding. Responding to events and binding a property to a value. 

we can bind data two ways. What this means, is that in the past, when a user types into a typebox, we are updating the server information. 
The second way data is bound is from the server to the html. This means that if the server is accessed by other servers, it will be updated. 

We can implement two way databinding with a DOM element by using 
```ts
[(ngModel)]="propertyName"
```
so if propertyName = "hello", the DOM will = hello on startup. This is because the dom value is taken from the server. It allows you to react to changes in the server and to take the value from the server. Think about forms, this is useful here. 
</p>

<p>
Directives - instructions in the DOM

there are a few built in directives that are useful to us. 
They provide the ability to instruct angular from the DOM. 

ngIf is a directive. 
ngIf is a structural directive - it changes the structure of the dom as it will add or not add to the html based on a condition. Therefore we add a * before it: *ngIf
then pass in a boolean

*ngIf="booleanExample"
</p>
<p>
You can add an else statement with *ngIf:

*ngIf="booleanExample; else doSomething".

In the example above, doSomething refers to an ng-template that is marked as doSomething, and will be structurally used as the else statement:

```html
<ng-template #doSomething>
    <p>Paragraph for else statement</p>
</ng-template>

```
</p>

<p>
Attribute directives are the other type of directives. No need for asterisk as they are not structural. 

we can style component conditionally with ngStyle directive.
First we need to mark ngStyle in squared brackets to tie it to the DOM. 
e.g.

```html
<p [ngStyle] = "{backgroundColor : getColor()}"> text </p>
```
The getColour method will return a colour in a String based upon a boolean or some other logic. 
</p>

<p>
ngStyle is for dynamically assigning a style, we can also use ngClass is for adding or removing css classes. 
We can define a class of style:

```css
.on{
    color:white;
    background-color:black;
}
``` 
Then this can be assigned using logic: 

```html
<p [ngClass] ="{on : serverCreated === true}"></p>
```
The argument takes a key value pair where the key is the class, and the value is the condition to be met when to apply the class. 
</p>

<p>
Directive: *ngFor. We once again use an asterisk as the ngFor is structural
We use "let x of y" followed by *ngFor where y is an array and x is the item used to reference it:

```html
<p *ngFor="let apple of appleArray">{apple}</p>
```

</p>

<p>
You can also extract the index of the current iteration with the reserved word: index:

```html
<p *ngFor="let apple of appleArray;   = index">{apple}</p>
```
</p>


<br>
<h4>First project build</h4>
<p>
Model
- a typescript file
- used to define how a class appears
- blueprint for Objects we create

- uses a constructor to instantiate the model with the new keyword. Takes in the properties and assigns as expected
</p>
<p>
Property binding is where you bind that value of your logic to a property of the html:

```html
[src]="abc"
```

String interpolation is where you use the string value of logic within html:
```html
src={{abc.getName}}
```

Both are the same if abc.name = "abc"
</p>

<p>
Debugging
- use the developer console and navigate to sources. Then select the main bundle and you can then open a debugger in the browser to hold the logical processes. 
</p>
<p>
Communication between components and data-binding

We will typically be communicating between components within components. Known as parent and child components. 
By default, all properties of a component are only accessible within the component. Therefore we need to be explicit to define which properties are publicly available outside the component. 
We can use @Input() from angular/core to expose a property to all parent components to use it. 

```ts
name: string = 'Hi'

```

Becomes:

```ts
@Input() name:string = 'Hi'
```
the parent would then bind to it using:
```html
[name]="xyz" 
```
In the parent component, you would be using a variable within html to assign name e.g:

```html
*ngFor(item a : items)
[name]="a"
```
So in the child, name will have @Input() to take in the item a for construction. 
</p>

<p>
How do we pass from child to parent? 
This is about emitting an event from the child to the parent.  
Ultimately this is the opposite of @Input()
In the child, we have a property that is emitted will be marked as new EventEmitter<>:

```ts
itemEmitted = new EventEmitter<{name: string, age: number}>();
```
This allows us to emit our own event. 
This enables the .emit() method call:

```ts
onClickEvent(){
    this.itemEmitted.emit({name: this.name, age: this.age})
}
```
To make itemEmitted to be listened upon outside of the component, we use the output decorator:

```ts
@Output() itemEmitted = new EventEmitter<{name:string, age:number}>();
```

</p>
<p>
This approach of component communication is also reviewed with services where it can be achieved differently. 
</p>
<p>
View encapsulation with Angular
Usually, css is applied to the website as a whole. Angular however gives CSS a modular behaviour, where it is
only applied to the component it belongs to. However it means CSS must be duplicated across components where necessary. 
</p>
<p>
If you want to apply the CSS globally, you can adjust the component ts file through the decorator of encapsulation to 'None':

```ts
@Component({
selector:'app-test',
encapsulation: ViewEncapsulation.None
})

```

Alternatively, you can use Native which gives you the same effect for selected browsers. 
</p>

<p>
Local references

These can be applied to any HTML element and is used to capture all the element information when processing it in the ts file.
For example, below we are using the input to set the name of 'newServerName' in the ts file, which is then processed by the button when clicking onAddServer:

```html
<input type="text" class="form-control" [(ngModel)] = "newServerName">
<button (click)="onAddServer()">Add Server</button>
```
But instead, we can cut out the middle man of newServerName, and just create a local reference of the input text and then pass it directly to the onAddServer method:
```html
<input type="text" class="form-control" #serverNameInput>
<button (click)="onAddServer(serverNameInput)">Add Server</button>
```
This only works within the HTML file and makes it easier to process the data. 
In the ts file, we are not receiving a string, we are receiving the input element itself. 
So to extract the value in the ts file, we need to do input.value
The type that is passed is a HTMLInputElement
</p>
<p>
You can pass the reference of the div element directly to the component rather than using the argument within the html. Above we have used serverNameInput as an argument in the click function. Insteda, you can use ViewChild below in the component to extract the div directly:

```ts
@ViewChild('serverNameInput') serverNameInput : ElementRef;
```
You can see above, it is of type ElementRef. You can get the underlying element with 
```ts
serverNameInput.nativeElement.value
```
Where nativeElement gives us the item itself. 
</p>
<p>
ng-content allows us to pass data around html code into a component. 
By default, in our html, if we pass any argument in the opening and closing of a dom e.e.g

```html
<app-server {here}>
```
is lost.
Instead, you can use ng-content to pass in html logic within the closing of the dom. 
The below is used within the html of app-server, whereas above is used in the calling html of app-server. 

```html
<ng-content></ng-content>
```
Some example of {here} could be:

```html
<ng-content 
<p>HelloWorld</p>
>
</ng-content>
```

This is a hook where Angular will now read in the html passed in after {here} above.
</p>
<p>
ContentChild is similar to ViewChild, but used for child components to access the content that is stored in another component, but passed via ng-content. 
So above, if it was changed to:

```html
<ng-content <p #x>Hello World</p>>

It can be accessed via the child component:

```ts
@ChildContent('x') childContent: ElementRef;

childContent.nativeElement.textContent;
```

</p>
<p>
Practice
1. If we want to access a variable from another component, we need to use @Output on the exported property so it is available. 
2. Now the html where the component is called can be caught. 
3. So if the app-component uses component-a:
```html
<component-a></component-a>
```
Component a can make its variable name visible to the app-component with:

```ts
@Output() event = new EventEmitter<string>();

onClickEvent(){
    this.name = 'Aneesh';
    this.event.emit({name: this.name})
}
```
and then accessed by the app-component with:
```html
<component-a (name)="doSomethingWithName($event)"></component-a>
```
Where doSomething is a method inside the app-component
<br>
Note. with EventEmitter, multiple items can be exported with:

```ts
new EventEmitter<{name: string, age: number}>
```
<br>

We can have a component receive a value with the @Input() annotation. 
This would then be bounded with property binding in the html code to be set when the component is created. e.g.

```ts
export class app-demo{
    @Input() name : string;
}
```
```html
<app-demo [name]="abc"></app-demo>
```
</p>

<p>
Creating a directive

Use the @Directive decorator from angular/core in a new .directive.ts file

```ts
@Directive({
    selector:'[appBasic]'
})

export class basicDirective{


    constructor(private element: ElementRef){
        this.element.nativeElement.style.backgroundColor = 'green'
    }

}
```
The square brackets mean it will be recognized when I add appBasic to an element that uses the directive.
the arguments passed into the constructor is injected by Angular. Marking it as private automatically assigns the value to a property of the directive. 
The element is passed into the constructor and above, we are making the background green. 

Before we can use it, we need to inform Angular of the new directive within the Declarations of the app.module file. 

Now it can be used in html:


```html
<p appBasicHighlight>Styled with new directive</p>

```
</p>
<p>
Renderer

In the above directive, we have accessed the backgroundColor directly which is a bad practice. 
In the constructor, rather than ElementRef, we inject renderer of type Renderer2:

```ts
constructor(private elRef: ElementRef, private renderer: Renderer2){

    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green');
}

```
We use Renderer2 as sometimes the dom may not be accessible through ElementRef and can throw an error. 
</p>
<p>
HostListener

There are many events that our DOMs can emit when they are being used. We can listen to these events with the @HostListener from the angular/core package. This is defined within the Directive created. 

```ts
@HostListener('mouseenter') actionMouseEnter(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green');
}
```
The above will only set the style when the mouse enters the DOM. Other events such as mouseleave can be used. 
</p>
<p>
HostBinding

Within our directive, we can also use HostBinding to avoid using the Renderer to make it even easier to change the background. HostBinding from angular/core

```ts
@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
```
The argument in the brackets are the host property that is bound to. Now, we no longer need the long this.renderer etc line in the HostListener:

```ts
@HostListener('mouseenter') actionMouseEnter(eventData: Event){
    this.backgroundColor = 'blue'
```
</p>
<p>
Bind to directive properties

In the above directive, we specify the exact colour of the background. It would be good to instead set this from a variable. 
Achieved with custom property binding:

```ts
@Input() defaultColor:string = 'transparent';
@Input() highlightColor:string = 'blue';
```
```html
<p directiveName [defaultColor]='blue' >
```
</p>
<p>
Custom structural directives

In practice, a structural directive is identical to using ng-template with the structural logic:

```html
<p *ngIf="booleanEx">
```

same as

```html
<ng-template 0ngIf]="booleanEx>
```
In the directive, we need to define the Input() which takes in the boolean and performs a method, rather than setting a property. It is important the method name is equal to the selector for the directive. For this, we use the set keyword to tell Angular to form logic:

```ts
@Input() set exampleIf(condition: boolean){

    if(!condition){

    }
    else{

    }
}
```

In the constructor, we pass in the templateRef and viewContainerRef as they are used to create the view.

```ts
@Input() set exampleIf(condition: boolean){

    if(!condition){
        this.vcRef.createEmbeddedView)this.templateRef);
    }
    else{
        this.vcRef.clear();
    }
}
```
</p>
<p>
ngSwitch

 ```html
<div [ngSwitch]="value">
    <p *ngSwitchCase="5">value is 5</p>
    <p *ngSwitchCase="10">value is 10</p>
    <p *ngSwitchCase="15">value is 15</p>
    <p *ngSwitchCase="20">value is 20</p>
    <p *ngSwitchCase="Default">value is default</p>
</div>
 ```

 Switch statement to be used as above
</p>
<p>
Dropdown Directive:

We can use HostListener to listen to the event and hostBinding to bind to a property 'class.open' as a boolean. Then in the HostListener, we can flip the boolean each time. 
</p>

<p>
Services
Used for shared code/centralised resource. e.g log service. Also really useful for component communication. 
Name of file is x.service.ts
Service is just a normal ts class, so no need for a decorator. For example below:

```ts
export class demoService{
    userList = ['Hello', 'World'];

}

```
Angular provides a way to access the service, rather than creating an instance of the service and using it in the class. 
This service can be injected with Dependency Injection through the constructor:

```ts
export class implementingClass{

constructor(private serviceExample: ServiceExample){}

}
```
This works as angular instantiates each component for us when we define the selector in the html. So if we define the argument in the constructor, angular will automatically provide us with the argument.
In order for this to work, we must <i>provide</i> the service within the component so angular knows how to create the component:

```ts
@Component({
    selector:'app-implementing-class',
    providers:[ServiceExample]
})
```
Now the function can be centralised and used as a service and used wherever. 

</p>
<p>
Hierarchial injection

Angular uses providers in a hierarchial fashion. So children also inherit providers. 
So if a service is provided in the AppModule, all components receive it. 
</p>
<p>
Creating a data service

Similar to above, you can use ngOnInit to initialise a data array from a service. 



</p>
<p>
A service can use another service by passing it in through the constructor in the service:

```ts
constructor(private otherService : OtherService){}
```
The metadata of the service is not passed into the service, therefore it can be attached by marking the service that is receiving the service with @Injectable. 

```ts
@Injectable()
export class service{

    constructor(private otherService: OtherService){}
}
```
Adding @Injectable is a good habit to perform on all services, if they are injecting other services or not. 

As a result, we no longer need to use Input/Output workflow for communicating between components.
We can instead use EventEmitter within the service and then subscribe to it in the components that require a response from it with:
```ts
this.service.methodName.subscribe((string: arg) => {});
```
</p>
<p>
The logic for processing data within the service can be handled from the component by passing down the request through a method call.

```ts
export class ExampleService{

    users: string[];

    updateUserString(name: string){
        users.push(name);
    }
}

@Injectable()
export class UserComponent{

    constructor(private exampleService: ExampleService){}

    onUpdateUser(name: string){
        this.exampleService.updateUserString(name);
    }

}
```
</p>
<p>
Cross Component Communication

Before, we have used @Output() to communicate between components when an item is selected. 
Rather than doing that, we can define an EventEmitter in the recipe service that is of the same type and emit the new item into that eventEmitter when the item is selected. 
Now the centralised EventEmitter contains the newly selected Item, we can subscribe to it where it is required:

```ts
this.service.item.subscribe((itemName: ItemType) => this.itemLocal = itemName)
```

</p>
<p>
Routing

Routes are configured in appModule.
a new constant appRoutes is defined in appModule of type Routes from @Angular/router.
The below pattern is used to specify the url suffix and the component to be loaded.

```ts
const appRoutes: Routes = [
    { path: '', component:HomeComponent }
    { path: 'users', component:UsersComponent }
    { path: 'servers', component:ServersComponent }
]
```
The routes are registered into the app through the imports of app module:

```ts
imports:[
    RouterModule.forRoot(appRoutes)
]

```
ForRoot will automatically register our routes into the app. 

Where is this rendered?
In the HTML, we add a directive: 

```html
<router-outlet></router-outlet>
```
</p>
<p>
We can navigate to different routes through links. 
We don't want to navigate via href as this sends a new request to the server, and reloads the page.
Therefore this is least efficient and reloads all the data. 

Instead we use routerLink to parse a string to tell angular to handle the link differently:
Router link prevents the default message to be sent to the server. It takes the string, parses it and checks if it fits a given route within the application. 

```html
<a routerLink="/router">Router</a>
```
</p>
<p>
Navigation paths

In routerLink, if we don't add the slash, it is a relative path.
'router' will append /router to current path. '/router' will go to /router path from the home page. 
'router' == './router'.
You can also navigate backwards in navigation: '../router' etc. 

CSS for active tabs
We can use routerLinkActive="active" to mark a tab as active in css if the url matches the navigation. 
This means / will always be marked as active, so we can use the routerLinkActiveOptions to mark home as only active when it is a perfect match

```html
<li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a routerLink="/">Home</a></li>
```
</p>
<p>
We can use buttons and logic to navigate to different paths. 
We will need to inject the Router to our component and use the navigate method, passing in an array of routes to return to. This approach does not know our current path, so what we pass in will be absolute:

```ts
constructor(private router: Router){}

onReload(){
    this.router.navigate(['server'])
}
```
We can tell the router to know our current location by passing in the configuration of relativeTo:


```ts
onReload(){
    this.router.navigate(['server'], {relativeTo:ActivatedRoute})
}
```

Where ActivatedRoute is imported from @angular/router
</p>
<p>
We can use .slice() to return a copy of an object, and not the object itself

Why we initialise within ngOnInit and not constructor
</p>
<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>