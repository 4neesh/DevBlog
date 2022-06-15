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
- converts a class from a regular typescript class into an Angular module
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

Where ActivatedRoute is imported from @angular/router.

If we were to add a forward-slash at the start, it will be an absolute path:

```ts
onReload(){
    this.router.navigate(['/server'])
}
```

so If we are already on /server page, it will not do anything. If we remove the forward-slash, it will work fine with the navigate method. Unlike the routerLink, the navigate method doesnt know which link you are in. RouterLink however knows the component and link you are in. 
The navigate method can find out where we are by using {relativeTo:ActiveRoute} so it knows where we are. We get the route by injecting private route: ActivatedRoute to the constructor. 

```ts
onReload(){
    this.router.navigate(['/server'], {relativeTo:this.route})
}
```
</p>

<p>
Loading routes with parameters. 
We can add a dynamic section to our routes

```ts
const appRoutes: Routes = [
    { path: '', component:HomeComponent }
    { path: 'users', component:UsersComponent }
    { path: 'servers', component:ServersComponent }
    { path: 'users:id', component:UserComponent }
]
```

Where anything after users/ will load the user component. 
We can access the data in the url through the component with the snapshot and params:

```ts

constructor(private route: ActivatedRoute){}

ngOnInit(){
    this.id = this.route.snapshot.params['id']
}
```

The snapshot means Angular will not reload the component if we navigate back to the same url even with different parameters. 
Therefore if we change the url params, it will not update the data. 
Instead, we can use this.route.params, which is an Observable, which allows for asynchronous tasks (such as changing the url params).
We therefore need to subscribe to the params:

```ts
ngOnInit(){
    this.route.params
    .subscribe(
        (params: Params) => {
            this.user.id = params['id'];
            this.user.name = params['name'];
        }
    );
}

```
The subscribe is just safety catching against the component being reloaded when within the same component. Otherwise always use the subscribe. 
</p>
<p>
We can use the RouterLink to navigate to different routes from a HTML button by using the routerlink:

```html
<a [routerLink]="['server',5,'ad']"></a>

```
Which will go to /server/5/ad

</p>
<p>
Query parameters can also be used within the route such as '?name=alex' rather than just /alex etc. 

We use the [queryParams] property of the router link directive to pass in the JSON to define parameters added:

```html
<a [routerLink]="['server',5,'ad']"
[queryParams]="{edit: '1' & to:'2'}"></a>

```
will return: server/5/ad?edit=1?to:2

Fragments can also be added:

```html
<a [routerLink]="['server',5,'ad']"
[queryParams]="{edit: '1' & to:'2'}"
fragment="loading"></a>

```
will return: server/5/ad?edit=1?to:2#loading

We can set these dynamically within the component when we want to use router.navigate. Below is an example of how a routerlink can be constrcuted.
It an be made dynamically by passing in parameters such as id when looping through users or items etc. 

```ts

this.router.navigate(['server',id,'edit'], {queryParams: {edit:'1', fragment:'loading'}})

```

The query parameters and fragments can then be retrieved:
The ActivatedRoute needs to be imported to the component retrieving the query parameters and fragment:

```ts
constructor(private route: ActivatedRoute){}
```
Then we can access the queryParams and fragment:

```ts
this.route.snapshot.queryParams
this.route.snapshot.fragment

```
Alternatively, you can subscribe to these to react to their changes as above:

```ts
this.route.queryParams.subscribe()
this.route.fragment.subscribe()
```
If the parameter is a number, start the call with + to translate the string number to number type.
</p>
<p>
Nested routes

We can add children routes, to transform our routes in the app component from:

```ts
const appRoutes: Routes=[
    { path: '', component: HomeComponent},
    { path: 'users', component: UsersComponent},
    { path: 'users/:id', component: UserComponent},
    { path: 'servers', component: ServersComponent},
    { path: 'servers/:id', component: ServerComponent},
    { path: 'servers/:id/edit', component: ServerEditComponent}
]
```

Into:

```ts
const appRoutes: Routes=[
    { path: '', component: HomeComponent},
    { path: 'users', component: UsersComponent},
    { path: 'users/:id', component: UserComponent},
    { path: 'servers', component: ServersComponent}, children:[
        { path: ':id', component: ServerComponent},
        { path: ':id/edit', component: ServerEditComponent}
    ]}
]

```

Now our router-outlet can no longer see the children routes, so we need to add them into the serversComponent, where they are used. 
In the Servers component html, I will need to add a new router-outlet. This is used for all child routes of the ServersComponent. 
This is why subscribing to changes in a component is important. as the larger component (servers) will not always reload, but just the sub-component. 
</p>
<p>
We can use relative routing in our ts component:

```ts
constructor(private router: Router){}

onSelect(){
    this.router.navigate(['edit', {relativeTo: this.route}])
}

```

Query params and fragments can be obtained through the subscribe() method from the ActivatedRoute in the component. 
The value can then be assigned to a variable:

```ts

this.route.queryParams
.subscribe(queryParams: Params) => this.allowEdit = queryParams['allowEdit'] === '1';

```
</p>
<p>
Preserving query parameters when loading a new component


When we use this.router.navigate, we can merge query params into the current url:

```ts
onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route})
}

```
The above will remove all query params when selected. It will just go to /edit using the relative path. 
By using queryParamsHandling: 'preserve', we are telling JavaScript to preserve the query params:
```ts
onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
}

```

</p>
<p>
Handling errors and redirecting when the page is not existing. 

```ts
{ path: 'not-found', component:PageNotFoundComponent}.
{ path: '**', redirectTo: '/not-found'}

```

Using above, all paths that are unknown (**) are redirected to '/not-found', which loads a component called PageNotFound. Ensure ** is the last path defined in the Routes section in the app module. 
We will often have the Routes defined in their own module used by the AppModule, so routes do not intrude in the whole file too much

app-routing.module.ts

```ts
const appRoutes: Routes = [

    ...
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{


}
```
Exports tell you, if you were to import the module from another module, what components do we want to be accessible? 
</p>
<p>
Guards

Guards are the function/code that is executed before a route is loaded. This is useful for ensuring components are only available 
if a user is logged in etc. It would be inefficient to check authentication etc in the onInit section of each component. 
Instead, we use the 'canActivate' guard to protect routes. 

In the root, we add auth-guard.service.ts. 

```ts


export class AuthGuard implements CanActivate{
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

return this.authService.isAuthenticated()
.then(
    (authenticated: boolean) =>{
        if(authenticated){
            return true;
        }
        else{
            this.router.navigate(['/']);
        }
    }
)

    }
}

```

The Guard can work synchronously or asynchronously (and thus can return an observable/promise or a boolean itself)
In the App module, we define which route is protected by the guard. we add 'canActivate' with an array of guards to apply to the route:

```ts
{ path: 'servers', canActivate:[AuthGuard], component: ServersComponent, children:[]}
```
Rather than copying the canActivate to all the children routes, we can use canActivateChild and make a call to the canActivate method in the guard:

```ts
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

        return this.canActivate(route, state);
    }

```
And then use canActivateChild in the route to stream the guard down to all children. 

```ts
{ path: 'servers', canActivateChild:[AuthGuard], component: ServersComponent, children:[]}

```
</p>
<p>
Similar to canActivate, we can also use can Deactivate to control if we can leave a site.
We will want to deactivate is used to stop going to a certain route (such as confirming a form submission). 
We can create a canDeactivate Guard and reference it within the routes:

```ts
{ path: 'servers', canDeactivate:[CanDeactivateGuard], component: ServersComponent, children:[]}

```
If we have an update button, we will mark the changes as saved (true) and then navigate back a page.
If the user accidentally navigates back without changes saved, we need to ask them if they really want to leave.
 We will ned to access the guard in the ngOnit and the save changes method so we know whether or not to save the changes. 
 The guard must be a service, so  we need to 1. access the code in the component and 2. acces guard service.

 This is done through a new service

 ```ts


export interface CanComponentDeactivate{

    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{

    canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return component.canDeactivate();
    }
}
 ```
 the canDeactivate method in the CanDeactivateGuard will be called when the router tries to leave a route. 
 By using the above service, the angular route can call canDeactivate in the service, and can rely on the component having the canDeactivate method as well. 

 In the app routing module:

 ```ts

{path: 'servers', component: ServersComponent, canDeactivate:[CanDeactivateGuard]}

 ```
 So whenever we try to leave the component, the CanDeactivateGuard will be called. Lastly, the ServerComponent must implement CanComponentDeactivate interface, which will override the canDeactivate() method:

 ```ts
 export class ServersComponent implements CanComponentDeactivate{

     canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
         //logic run when the canDeactivateGuard is run by the guard
         if(changesSaved){
             return true;
         }
        if(this.serverName !== this.server.name && !changesSaved){
            return confirm('Do you want to save changes?')
        }else{
            return true;
        }
     }
 }
 ```
</p>
<p>
Passing static data to a route

You can pass static data from a route into a component through the route:

```ts
{ path: 'server', component: ServerComponent, data: {message: 'server page'}}
```
Then in the component, you can access the data:

```ts
this.message = this.route.snapshot.data['message'];
this.route.data.subscribe(
    (data : Data)=>{
        this.message = data['message'];
    }
)
```

</p>
<p>
Resolving dynamic data

A resolver allows us to run some code before a component is loaded. Also known as pre-loading, used to fetch data from a backend etc. 
This is about loading data before displaying a component
1. create a server-resolver.service.ts file

```ts

@Injectable()
export class ServerResolver implements Resolve<{id: number, name: string, status:string}>{

    constructor(private serverService: ServersService){ }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<id: number, name: string, status:string}> | Promise<{id: number, name: string, status:string}> | {id: number, name: string, status:string}{

        
        return serverService.getServer(+route.params['id'])

    }

}
```
In the above code, we have implemented the Resolve interface and overridden the resolve method appropriately. It will use the serverService to return the Server. 
Important to remember, using this service will be used for pre-loading a component when navigated to, so we will also provide logic in this part to get the data. 
We then use the resolver by adding it to the routing module:
```ts
{path: ':id', component:ServersComponent, resolve:{server:ServerResolver}}
```
Using above, the 'server' property is now available in the ServersComponent, and will contain the server from the ServerResolver. So in the ServersComponent, we no longer need to define the server object it has in ngOnInit, as it comes from the Resolver. 

```ts
ngOnInit(){
    this.route.data
    .subscribe(
        (data:Data) =>{
            this.server = data['server']
        }
    )
}
```
where 'server' is matching the resolve key from the route. Using a resolver is really useful when using asynchronous data in the backend that may be updated. 
</p>
<p>
Using Routing in the project (taking all routing instruction into the project)

1. In our app routing module, the import under NgModule will readily configure the RouterModule with the const of appRoutes we define. Then to make it available to the app.module, we must export the RouterModule which is then readily available. The Components will now be displayed where we add the 'router-outlet' dom in the app-component html. 
2. You can also add a redirectTo: line to the appRoutes to define any pages that are to be redirected to. Use pathMatch:'full' to ensure only the full URL is redirected upon. 
3. To hook a button up to a link, you can simply add 'routerLink="/xyz"' to the DOM element in the HTML file. This can be improved with dynamic property url building
4. Use "routerLinkActive ="active"" on buttons to display CSS when a button is selected. 
5. To achieve a pointer cursor on a clickable item, use style="cursor:pointer" and avoid using href="#". Otherwise page will reload to /#. 
6. When creating a child route, the new path will already use the path of the parent with '/' appended. 
7. use ActivatedRoute to get the parameter from the url. use this.route.subscribe() to subscribe to the observable to get it as it changes. 
8. RouterLinkActive is a property for a dom where you can set the class of the style depending if the button is selected. routerLinkActive="active" is a common pattern. 
9. Use [routerLink]="[x]" to set the relative route of a button to a value. You can use @Input() to pass down the value from other components to then set the new url. For hard-coded route, use a click listener and Router with navigate: this.router.navigate(['new'], {relativeTo:this.route})
10. A more complex way of navigating would be to chain commands to the URL: this.router.navigate(['../'], this.id, ['edit']). This will go up one level, then add /[id]/edit
11. When defining routes, any non-dynamic child routes must be defined before (higher) in the list from the dynamic routes(that us :). 
</p>


<p>
Understanding Observables: Course Module
You can use pipe() to stream and transform a subscription before handling it. 
Look at pipe() operators to understand intermediate operations that can be performed on a data stream within a subscription
</p>
<p>
Subjects
Subjects offer a new approach to obtaining information between components. Rather than creating an event emitter within a service and subscribing to it, we can use a Subject<>().
Subjects differ from Observables as they are actively obtained using the next() method. Observables are passive, they provide data as it is readily available by internally calling next(). 
Subject can however be triggered to return the next() method and data that comes with it on demand, and in code. It is more efficient to use a Subject than an Observable when we only want to 
trigger when the data comes to us, and not to receive it all the time. 

This is a consideration to make when using the event emitter  vs a subject. Nothing else changes within the application. When you want to emit an event from the Subject, use 

```ts
this.service.subject.next(123);
```
to assign the value of 123 to the Subject. This is the only way Subject differs from Subscription, where Subscription would otherwise use 'emit' to send out data. 

Similar to a subscription, use onDestroy to unsubscribe from the Subject. 
Import Subscription from rxjs, assign the subject to the subscription within ngOnInit, then unsubscribe with the Destroy() method. 
</p>


<p>
Forms Module


Angular transforms forms into JSON with key-value pairs and metadata that can allow us to handle and process the forms within the app. 
There are two approaches, template driven (TD) and reactive. 
</p>
<p>
Template Driven Forms

Angular handles requests (HTTP) so we do not specify a post action on the form tag.

Creating a form
Import FormsModule in the app module
Angular does not detect input objects from a form. This is to provide more control on what is processed by Angular. Such as UI components to the form and 3rd party packages.
So I must tell Angular what is controlled within the form so it then becomes part of the JSON representation of the form. 
Example form:

```html
<form>
 <div id="user-data">
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" class="form-control">
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
 </div>
</form>
```

To pass control of the form to Angular, we add ngModel and name to the form item. We define a name as this is the key that will be assigned in the JSON object. The id on the input is used for only HTML purposes. 
```html
<form>
 <div id="user-data">
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" class="form-control" ngModel name="username">
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
 </div>
</form>
```
The ngModel is a directive available from the FormsModule. The name is added as the key value in the json form created. 

Obtaining the JSON data
When we submit a form, we can have a click listener on the form. We do not attach the click listener to the submit button as angular instead takes advantage of the in-built events that are triggered from submit that are in-built with HTML. So instead, attach the listener to the form, where the FormsModule and angular will process the JSON data accordingly. (ngSubmit) is an angular directive that is submitted on the form. 
```html
<form (ngSubmit) = "onSubmit()">
 <div id="user-data">
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" class="form-control" ngModel name="username">
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
 </div>
</form>
```
Where onSubmit() is a method in the component. 

To access the form created by angular, we need to get access to the form in html and to pass it into the submit method.
To get access, we define  #form and = it to "ngForm", then we pass form into the submit and accept and process it from the component. 
```html
<form (ngSubmit) = "onSubmit(form)" #form="ngForm">
 <div id="user-data">
    <div class="form-grou">
        <label for="username">Username</label>
        <input type="text" id="username" class="form-control" ngModel name="username">
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
 </div>
</form>
```

```ts

onSubmit(form: ngForm){
    console.log(form);
}

```
For creating a dropdown, you can create a select DOM element:

```html

<select id="gender" name="gender" ngModel class="form-control">
  <option value="Male">Male</option>
<option value="Female">Female</option>
</select>

```

You can default the selected item by using one-way binding of ngModel and defining it to a value within the component:

```html

<select id="gender" name="gender" [ngModel]="selectedGender" class="form-control">
  <option value="Male">Male</option>
<option value="Female">Female</option>
</select>
```

```ts
FormComponent{
    selectedGender = "Male"
}

```
The 1-way binding means that when the option is changed, the value in the component is not updated.

</p>

<p>
Adding prompts for validation

We already know we can make a field required and email specific with the keywords.
If we want the user to be prompted on a field, we can use do this accordingly:

```html
<input type="text" id="email" ngModel name="email" required email>
<span>Email must be present</span>
```

We can add a new local reference 'email':
```html
<input type="text" id="email" ngModel name="email" #email="ngModel" required email>
<span class="help-block" *ngIf="!email.valid && email.touched>Email must be present</span>
```

Then using ngIf to show the prompt if #email is touched and invalid. use help-block class on the span to give bootstrap styling

</p>

You can also access the form with @ViewChild rather than passing the form through the html

```ts

export class formComponent{

@ViewChild('form') submittedForm : ngForm;

onSubmit(){
    console.log(submittedForm)
}
}

```
Validating forms


Within an input box for html, you can use the term 'required' to ensure it is not empty. Angular will now check the validity of the box. If the input is an email, you can also use 'email' which is an in-built validator with Angular to check it is a valid email:

```html

<input id="email" ngModel name="email" type="text">

```

Becomes:

```html

<input type="text" id="email" ngModel name="email" required email>
```
</p>

<p>
Reactive approach to forms

In your component, create a variable of type FormGroup imported from Angular/forms
This property will hold the form.

The appModule does not need FormsModule, but it needs the ReactiveFormsModule from angular/forms in the imports. 

use the onInit method to initialise the form 

```ts

myForm : FormGroup;

onInit(){
    this.myForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gender': new FormControl('Male', Validators.required),
        'password': new FormControl(null)
    });
}
```
We place controls (key-value pairs) into the FormGroup
In the FormControl = initial state, second = validators such as Validators.required, in an array if multiple. 

This form can now be connected with the HTML code. 

```html
<form>
    <div class="form-group">
        <label for="mail">Mail</label>
        <input type="text" id="mail" class="form-control">
    </div>
</form>

```

To synchronize the form with the ts form, we bind the form tag with [formGroup] to the name of our form:

```html
<form [formGroup]="myForm">
    <div class="form-group">
        <label for="mail">Mail</label>
        <input type="text" id="mail" class="form-control">
    </div>
</form>
```
We then connect the controls using a directive: formControlName. FormControlName will map the value we pass into the form to the component formGroup. 

```html
<form [formGroup]="myForm">
    <div class="form-group">
        <label for="mail">Mail</label>
        <input type="text" id="mail" formControlName="mail" class="form-control">
    </div>
</form>
```

Submitting the form with the reactive approach:

Similar to the template approach, we use (ngSubmit) to the form. 

```html
<form (ngSubmit)="onSubmit()" [formGroup]="myForm">
    <div class="form-group">
        <label for="mail">Mail</label>
        <input type="text" id="mail" formControlName="mail" class="form-control">
    </div>
</form>
```

The form already exists within the ts code, therefore we do not need a reference of the form from the html (#myForm) in reactive approach. 

Validation messages
We no longer need to add a reference to the input type when doing *ngIf on our blocks. 

```html
<form (onSubmit)="onSubmit()" [formGroup]="myForm">
    <div class="form-group">
        <label for="mail">Mail</label>
        <input type="text" id="mail" formControlName="mail" class="form-control">
    </div>
    <span class="help-block" *ngIf="!myForm.get('mail').valid">Please enter mail!</span>
</form>
```
So we just reference the form name with the getter for the item. Then we can use boolean on that value. 

We can define nested form groups in the ts where necessary:

```ts

myForm : FormGroup;

onInit(){
    this.myForm = new FormGroup({
        'userData' : new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gender': new FormControl('Male', Validators.required),
        }),
        'password': new FormControl(null)
    });
}
```
Then the accompanying html can be changed to group form data:
```html
<form (onSubmit)="onSubmit()" [formGroup]="myForm">
    <div formGroupName="userData" class="form-group">
        <label for="mail">Mail</label>
        <input type="text" id="mail" formControlName="mail" class="form-control">
    </div>
    <span class="help-block" *ngIf="!myForm.get('mail').valid">Please enter mail!</span>
</form>
```

Using an array to populate a field. we use a FormArray to have a number of items in a form:

```ts

myForm : FormGroup;

onInit(){
    this.myForm = new FormGroup({
        'userData' : new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gender': new FormControl('Male', Validators.required),
        }),
        'password': new FormControl(null),
        'hobby' : new FormArray([])
    });
}

```

Within the html, you will need to update the form. First surround the fields with a new div and use formGroupName to mention the new name (userData). 
Then where the field is referenced within the *ngIf statements, add the group name at the start. 

```html
<form (onSubmit)="onSubmit()" [formGroup]="myForm">
    <div formGroupName="userData" class="form-group">
        <label for="mail">Mail</label>
        <input type="text" id="mail" formControlName="mail" class="form-control">
    </div>
    <span class="help-block" *ngIf="!myForm.get('userData.mail').valid">Please enter mail!</span>
</form>
```

We can populate the hobby item:

```ts

onAddHobby(){
    const hobby = new FormControl(null, Validators.required)
    (<FormArray>this.myForm.get('hobby')).push(hobby);
}

```
In the html, we add formArrayName to the div holding the hobbies. 

```html
<div formArrayName="hobby">
    <div class="form-group" *ngFor="let hobby of myForm.get('hobby').controls let i = index">
    <input type="text" class="form-control" [formControlName] = "i">
</div>

```
Each time we run onAddHobby() a  new input field will appear. 
</p>
<p>
Reactive form custom validation. We return a JSON object with the key as a string, and value of boolean

```ts
customValidator(control: FormControl): {[s: string]: boolean}{

    if(this.listOfBadNames.indexOf(control.value) !== -1){
        return {'nameIsForbidden': true};
    }
    return null;

}

```

We return nothing or null if the validator is successful. This = valid. 
Then add the custom validator to the FormControl

```ts
'gender': new FormControl('Male', [Validators.required, this.customValidator.bind(this)]),
```
We use bind(this) to ensure 'this' refers to the Object of the typescript class. 

You can closely watch the value and status of a form using this.myForm.statusChanges.subscribe(() => {}); and this.myForm.valueChanges.subscribe(() => {});

</p>
<p>
Form arrays

This is used when populating or creating a form with an array of items (such as multiple items)

Create the form array with new FormArray([]);

</p>
<p>
reactive form pointers

1. use [formGroup]="x" in the form DOM element to link the form with the ts code
2. use formControlName on each input field to map the form in html to component ts
3. use [disabled]="!v.valid" on the submit button to check form is valid. 

</p>

<h1>Pipes</h1>
<p>
Pipes can be used with string interpolation e.g {{ name | uppercase}} or {{ cob | date }}

We can parameterize a pipe as well e.g. {{ cob | date:'fullDate'}}

Multiple parameters can be used too: {{ cob | date:'fullDate':'other'}}
Check the angular documentation for configurations to the built-in pipes.

Pipes can also be chained:
{{ cob | date:'fullDate' | uppercase }}
Where pipes are processed in-order of left to right. 

We can also create our own pipe:
1. create a new file with the name {name}.pipe.ts
2. add the Pipe decorator to the class. @Pipe({name:'x'})... use ng g p 'x' to generate a pipe at the cli
3. where x is the name of the pipe when used
4. export class that implements PipeTransform
5. override transform(value: any)
6. ensure the transform method returns something. 
7. add the pipe to declarations in the app.module (just like all other components)
8. use the pipe: {{name | x}} where x is the name value as according to the pipe decorator in step 2. 
9. You can accept arguments by changing the signature of 5:
10. transform(value: any, limit: number) which now accepts a second argument (to be used in the pipe)

Pipe can also be used for filtering an array as you type. First create the ngModel in [] and () input value and assign to a value. 
Then create a pipe that accepts the array of values and a parameter of the ngModel. Then filter the array and return it from a new array when the ngModel is updated. 

The pipe does not update the array piped on when it is changed, if active. The pipe is not re-run when the data changes. 
Changing the data does not re-trigger the pipe. This would be bad due to performance costs if it did. 
Therefore filtering is not useful for pipes. 

If we want to recalculate the pipe whenever the data changes, we can force the pipe to update. 
In the pipe decorator, add a property: pure:false
This will update the pipe each time the data changes. 
</p>

<h1>Persisting with Firebase</h1>
<p>
Create a realtime database in firebase

HTTP with Angular
We need the HTTPClient Module from @Angular/common/http in the AppModule. This is then imported within imports.

Posting data
Inject httpClient within the class using the request

```ts
this.http.post('URL', postData);
```
For the url, append 'posts.json' to the url. The postData is not json, it is a JavaScript object, which Angular will translate to JSON. 
Angular uses Observables for this, so we need to subscribe to the Observable that obtains the http request. 
Post returns an Observable that wraps the request:
```ts
this.http.post('URL', postData).subscribe(responseData => {
    console.log(responseData);
});
```


Getting data
```ts
this.http.get('URL').subscribe(posts => {
    console.log(posts);
})
```
The data needs to be transformed to a JavaScript Object data. 
We can use the pipe to funnel the observable data through operators. 
```ts
this.http.get('url')
.pipe(map(responseData => {
    const postsArray = [];
    for(const key in responseData){
        if(responseData.hasOwnProperty(key){
        postsArray.push(...responseData[key], id: key)
        })
    }
}))
.subscribe(data => {
    console.log(data);
})
```
Note that the spread separator ... will pull out all the key-value pairs in the responseData

You can attach the response to a Type:
```ts
this.http.get('url')
.pipe(map(responseData { [key: string]: Model}=> {
    const postsArray: Model[] = [];
    for(const key in responseData){
        if(responseData.hasOwnProperty(key){
        postsArray.push(...responseData[key], id: key)
        })
    }
}))
.subscribe(data => {
    console.log(data);
})
```
Where model is an interface:

```ts
export Interface Model{ name: string, age:number}
```

This can be modified using generics:
```ts
this.http.get<[key:string]: Model>('url')
.pipe(map(responseData => {
    const postsArray: Model[] = [];
    for(const key in responseData){
        if(responseData.hasOwnProperty(key){
        postsArray.push(...responseData[key], id: key)
        })
    }
}))
.subscribe(data => {
    console.log(data);
})
```
And again with posts:
```ts
this.http.post<{name: string}>('URL', postData).subscribe(responseData => {
    console.log(responseData);
});
```
</p>
<h1>Showing a loading screen while fetching data</h1>
<p>
Create a boolean called isFetching and mark it as false in the class.
Then set it as true at the start of the http request and set as false at the end of the subscribe
Then use *ngIf to show a certain paragraph to show fetching .
</p>

<h1>Connecting components to a service</h1>
<p>
We need to do this when fetching data with http as we need to pass data from service to a component.
A Subject is good for multiple components interested in the post
Instead we can just return the result from the service as an Observable
</p>

<h1>Handling subscriptions</h1>
<p>
It is a good idea to destroy subscriptions when a component doesn't need it. So implement onDestroy, create a private x: Subscription variable. 
In the subscription in onInit, assign the Subscription to the variable. 
In ngOnDestroy() call the subscription variable and call .unsubscribe(). 

</p>
<h1>Handling errors for HTTP</h1>
<p>
Errors can occur for many reasons such as url and authentication
we can add further functions to our subscribe() functional interface. 

```ts
this.balanceSheetService.balanceSheetChanged.subscribe((balanceSheetItems: Balance[]) => {
      this.balanceSheetItems = balanceSheetItems;
    })
```
Becomes

```ts
this.balanceSheetService.balanceSheetChanged.subscribe((balanceSheetItems: Balance[]) => {
      this.balanceSheetItems = balanceSheetItems;
    }, error => {

    })
```
</p>
<p>
An alternative way of handling errors is by using a Subject. 
You can store a Subejct: error = new Subject<string>() in the service that the http requests are made.
Then the component that use the subject can subscribe to it:

```ts
this.dataService.error.subscribe(errorMessage => {
  this.error = errorMessage;
})
```
</p>
<p>
We can also catch errors using catchError. 
Similar to catch, we can catchError in the same pattern to catch and throw errors. 
Perhaps for sending to analytics. 
</p>

<h1>HTTP Headers</h1>
<p>
When we make htttp request, we can use a second argument to attach header information to the request and for parameters:

```ts
this.http.get<{ [key: string]: Balance }>('https://ng-wheretoinvest-default-rtdb.firebaseio.com/balanceSheet.json')
```
```ts
this.http.get<{ [key: string]: Balance }>('https://ng-wheretoinvest-default-rtdb.firebaseio.com/balanceSheet.json'), 
{
  headers: new HttpHeaders({
    "CustomHeader" : 'hello'
  })
  params = new HttpParams().set('print', 'pretty')
}
```

If you have multiple params, you can define a variable with 'let' and 'append' a value to the HttpParams object then pass it into the params. 
</p>
<h1>Accessing more data on the HTTP Req</h1>
<p>
After we make a HTTP request:

```ts
  return this.http.get<{ [key: string]: Balance }>('https://ng-wheretoinvest-default-rtdb.firebaseio.com/balanceSheet.json')
```
We are able to change the response we receive with:

```ts
    return this.http.get<{ [key: string]: Balance }>('https://ng-wheretoinvest-default-rtdb.firebaseio.com/balanceSheet.json'),
    {
      observe: 'response'
    }
```
By default, the observe returned is 'body'

So now when we access the item of the response. we need to do response.body.message rather than response.body.

The benefit is that it now provides more information for us to access on the request.
Such as status code, and headers. 
</p>
<p>
You can also observe 'events' to then provide action against the request being sent and the response being received which are types under the HttpEventType enum. 
</p>

<h1>HttpInterceptor</h1>
<p>
The HttpInterceptor interface can be implemented and forces us to override an intercept method.
This gets two arguments, HttpRequest and a function that will forward the interceptor of type HttpHandler.

The method allows us to run code before the requet leaves the application. 
We return request.handle(next) to the pass the request on in the appl.

```ts

intercept(req: HttpRequest, next: HttpHandler){
    console.log('got the request')
    return next.handle(req);
}
```

We must first provide this interceptor service to the application. 
In app.module:


```ts
providers:[{provide: HTTP_INTERCEPTORS, useClass: InterceptorClass, multi=true}]
```
INTERCEPTORS is a token that can later be identified by angular for placing our interceptor.
Therefore we know that whereever the class is provided, it is an interceptor and therefore can run the intercept method
prior to making a request that leaves the application. 
</p>
<p>
The request can be modified by creating a new instance of the request. 
We are unable to modify the request itself. 

```ts
const modifiedRequest = req.clone({header: req.headers.append('Auth':'xyz')})
return next.handle(modifiedRequest);

```
</p>
<p>
As the next.handle returns an observable, we can pipe it and use tap (similar to peek) to look into the request.

```ts
return next.handle(modifiedRequest).pipe(tap(event => {
    console.log(event);
    if(event.type === HttpResponse){
        console.log(event.body);
    }
}))
```
Now we can see how to interact with the request before it is send and the response when it is received from the HTTP server.

If we have multiple interceptors, we simply update the app.module to:

```ts
providers:[
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorClass, multi=true},
    {provide: HTTP_INTERCEPTORS, useClass: NewClassInterceptor, multi=true}
]
```

Note. the order above determines the order they are executed, so this may be important. 
</p>

<h1>Resolver</h1>
<p>
A resolver can be added to the route modules to ensure that a certain piece of code is executed before a url is accessed.
This can be useful for fetching data to display for that url.
First create a class for the logic and implement Resolve from angular router. 
Pass in the Object that will be resolved as a generic to Resolve:

```ts
export class MyResolver implements Resolve<MyObject>{

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        //fetch data
    }

}
```
In the app-routing module, we now need to pass in the resolve key to the paths that require the reoslver, and pass in the resolver within the array value:

```ts
{ path='data-load', component: DataComponent, resolve: [MyResolver]}
```
</p>
<p>
An important note for the resolver is that it is called before a components ngOnInit() function. Therefore it cannot be used to load data into that component if the data is instantiated through on init. 
</p>

<h1>Authentication</h1>
<p>
JSON validation tokens are used for authentication. The server generates the token once authenticated to the server
The token is then used to validate validity of requests (if the person is allowed to request it) and responds appropriately.
Therefore the token is attached in the header of the http request.

We are not able to use sessions with the authenticated user as REST calls are stateless, they do not respons to specific sessions of a user.

The server knows more than the client (who is authenticated to make the request)
And we use the front end to allow users to authenticate and receive a token to make requests. 
</p>
<p>
Create a login page with a simple form
You can make the webpage automatically redirect to the login page if not logged in.
</p>
<p>
Submitting form to Firebase

Go to authention page

Go to the database, and then to rules
Change the rules from read: true and write: true
to:
read: auth != null and same for write. So only authenticated users can read/write data
 
 In authentication of firebase, select enable for email authentication (only top toggle)
 Go to the firebase documentation for the URL for the authentication sign up form and the parameters it requires (user, password, token). 
 Create a service for signup that has a signup function that accepts the username and password. Then you can define a post request using the above url
 and the API token (go to firebase settings to find api key).
 Create the body of the post request as json:

 ```ts
return this.http.post<AuthResponseInterface>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAa3QeNCluxMfMG4Ql3B65NC153HPzASD0', 
        {
            "user" : username,
            "password" : password,
            "returnSecureToken" : true
        });
 ```

 The returned value of AuthResponse is defined in the service as the values and types that are responded from the signup request. This will allow us to handle any responses. 
 ```ts
interface AuthResponseInterface{

    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn : string;
    localId: string;
}
 ```
 We need to send the data from the form to the service:

 ```ts
 if(!form.valid){
     return;
 }
const email = this.form.value.email;
const password = this.form.value.password;
this.authservice.signup(email, password).subscribe({res => {
    console.log(res);
}, error => {
    this.error = error.error.error.message;
}})
 ```
</p>
<p>
Error handling

Rather than handling errors within the component, we can use the pipe on the subscription. 

```ts
return this.http.post<AuthResponseInterface>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAa3QeNCluxMfMG4Ql3B65NC153HPzASD0', 
        {
            "email" : username,
            "password" : password,
            "returnSecureToken" : true
        })
        .pipe(catchError(error) => {
            let errorMessage = 'Unknown error'
            switch(error.error.error.message){
                case 'EMAIL_EXISTS':
                    errorMessage = "Email already exists"  
            }
            return throwError(errorMessage);
        })
```
</p>

<p>
Using user data:
need to store the user data in a model class:

```ts
export class User{

    constructor(public email: string, public id: string, private token: string, private tokenExpirationDate: Date){}

    get token(){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null; //return null if token expired
        }
        return this._token;
    }

}
```
</p>
<p>
When a user is created, we will need to store them. We can use the tap rxjs operator 

```ts
user = new Subject<User>;
---
 return this.http.post<AuthResponseInterface>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAa3QeNCluxMfMG4Ql3B65NC153HPzASD0', 
        {
            "email" : username,
            "password" : password,
            "returnSecureToken" : true
        })
        .pipe(
            catchError(error => {
                console.log(error);

            let errorMessage: string = this.handleError(error);
            return throwError(errorMessage);
        })
        ,
        tap(resData => {
            this.handleUser(resData.email, resData.localId, resData.idToken, resData.expiresIn)
            } 
        )

 private handleUser(email: string, localId: string, idToken: string, expiresIn: string){
    
            const expirationDate = new Date(
                new Date().getTime() + + expiresIn * 1000 //expiration date is time from 1970 in milliseconds + time in seconds * 1000
            )
            const user = new User(
                email,
                localId,
                idToken,
                expirationDate
            )
            this.user.next(user);
            console.log(this.user)
    }
```

</p>
<p>
We can use the subscription of the user subject to then manage the GUI. for example changing the header component
to reflect when the user is logged in, and therefore to show sign-up or other views. 

```ts
    private userSub: Subscription;
  isAuthenticated = false;

  constructor(private authService: AuthService) { }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    });
  }

```
Now when the user in the application changes, the authenticated boolean can be used with *ngIf to 
show/hide components or DOM elements. 
</p>
<p>
Storing the token

Once authenticated, we need to store the token to allow REST calls as required. 
We need to tell Firebase that a valid token exists, so we need to add the token to the requests that are outgoing
We don't really care everytime the user is updated, we just want to get the token that exists in the application.
So in the auth service, we need to store the token in a variable that provides data that is emitted, along with previously emitted values.
And for this we use a BehaviorSubject. This way we get the latest user

```ts
user = new BehaviorSubject<User>(null)

```
We need to get the latest user from this subject by using the keyword 'take' in the subscription pipe.
This will tell the subsription that we only want to take 1 value from it, and then to ubsibscribe:

```ts
this.authService.user.pipe(take(1)).subscribe(user => {

});
```
We do this so the latest user is obtained once, and only when we call the rest API. therefore we can 
get the latest user to log-in before we make the call, and to use their token for the request. 
</p>
<p>
Combining pipes. 

In the fetch to the rest endpoint, we need toc all two subscriptions. One to get the token, one to the http request.
We can use exhasustMap() from the rxjs operators to combine these subscriptions.
It awaits for the first to complete, the calls the second:

```ts
this.authService.user.pipe(
        take(1), //only takes the first one. It is not an ongoing subscription, it will unsubscribe on its own. So when we call this method, it will take the first token
        exhaustMap(userParam => { //exhaust map waits for the first observable to complete, and then uses this data in the new observable.
            return this.http.get<{ [key: string]: Balance }>('https://ng-wheretoinvest-default-rtdb.firebaseio.com/balanceSheet.json',
            {
                params: new HttpParams().set('auth', userParam.getToken())
            })//so we have now returned a new http request that has the params attached to the observable below
            .pipe(map(responseData => {
                const stockArr: Balance[] = [];

                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        stockArr.push({ ...responseData[key], id: key })
                    }
                }
                return stockArr;
            })
        );
    })
);

```
So we can see that first we extract the userParam from the user pipe Ibservable, then we use exhaustMap and pass that user into the next subscription that is made to the HTTP Get endpoint. 
As a result we can use the token obtained from the userParam and pass it into the get request. 

One note to make, is that the http request looks like this:

https://ng-wheretoinvest-default-rtdb.firebaseio.com/balanceSheet.json?auth=user.getToken();
But rather than hard-coding it in, we usse the params: 'auth', userParam.getToken() style to make it a little neater. 


</p>
<p>
So far we have used a fairly complicated way of adding the most recently available token to our request when it is made.
But lets say we have loads of these requests, that means a lot of repeated code. 
We can instead just add this logic to the interceptor on the requests. To extract the most recent live token and to add it to the request. 

1. create a new interceptor service. we do not provide in root, we provide it to http as later explained
2. As it is an interceptor, I have to implement HttpInterceptor
3. it will override the request of type HttpRequest and the handler HttpHandler. 
4. Then we add the constructor to the request and return it:


```ts
@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

    constructor(private authService: AuthService){ }

    intercept(req : HttpRequest<any>, next HttpHandler){
        
        //now we add the latest token to the request and pass it onward to the handler.
        this.authservice.user.pipe(
            take(1),
            exhaustMap(user => {
                const modifiedReq = req.clone(params: new HttpParams().set('auth', user.token))

                return next.handle(req);
            })
        )

    }
}
```
Within the app module we need to provide this service in a special way: 
```ts
{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
```
We say multi: true because it allows multiple interceptors to be used. 

Now we can remove the complexity of our request from exhaustMap from the service:

```ts
   return this.http.get<{ [key: string]: Balance }>('https://ng-wheretoinvest-default-rtdb.firebaseio.com/balanceSheet.json')
        .pipe(map(responseData => {
            const stockArr: Balance[] = [];

            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    stockArr.push({ ...responseData[key], id: key })
                }
            }
            return stockArr;
        })
    );
)
);
```
As we are using an interceptor with the token on the user, we will need to catch the login script which will be passing in null
as the token as the BehaviorSubject is null when we instantiate it. 
</p>
<h1>Logging out</h1>
<p>
All we need to do is change the user subject to null:

```ts
this.user.next(null);
```
</p>
<h1>Persist token so it is there after reloading app</h1>
<p>
The token is stored in memory and cleared when the application is restarted. 
We need to store the token in a persistence that can be written to and fetched from. 
Local storage is managed by the browser and will allow us to store data in key-value pairs that is retained by the browser. 
An alternative may also be a cookie. 

We can store data in the localStorage:

```ts
localStorage.setItem('userData', JSON.stringify(user))
```
Stringify will serialise a JS Object. 

We then need to create an autologin method that will check the localstorage and create a new user with the data whenever the page is loaded. 
We refresh the application and the app.component.html will always be created. 
So in the ts file, we will add an ngOnInit function and pass in a new function called autologin()
</p>
<p>
Autologin is a function we create in the auth service. 
It will use JSON.parse to parse the userData from the localStorage. Then it creates a new user from the data and loads it in:

```ts
autoLogin(){
        const userData: {
            email:string;
            id:string;
            _token:string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));

        if(!userData){
            return;
        }

        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if(!loadedUser.getToken()){
            return;
        }
        this.user.next(loadedUser);
    }
```
</p>
<h1>Auto logout</h1>
<p>
We have used localStorage to store user data when they are logged in. But we also want to ensure that the local storage is cleared when they log out.
So we will clear locaStorage on logout. 

```ts
localStorage.removeItem('userData')
```

Now we need an autologout to manage a timer to log the user out. 
First we define a new variable tokenExpirationTimer of type any. This will store the timer. 
Then, we have the autologout function that takes a number. When the timout has been reached, the logout function is called.
To ensure the timer is reset whenever the logout function is called, we will call clearTimeout and set the expiration timer to null in the logout fn.

```ts
private tokenExpirationTimer : any;

autoLogout(expirationDuration: number){
     this.tokenExpirationTimer = setTimeout(() => {
         this.logout();
        
     }, expirationDuration);
}

logout(){
    
    ...

    if(this.tokenExpirationTime){
        clearTimeout(this.tokenExpirationTimer)
    }
    this.tokenExpirationTimer = null;
}
```

We need to call autologout whenever a new user is added to our application. So we will need to do this when the user logs in, and when the
page is refreshed and the user is autologged in. 

```ts
handleAuthentication(){
    this.user.next(user);
    this.autologout(expiresIn * 1000)
}

autologin(){
    this.user.next(loadedUser);
    const expirationDuration = new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();
    this.autologout(expirationDuration);
}

```
</p>
<h1>Auth guard</h1>
<p>
Auth guard is used to prevent direct access to links without authentication.
We can use route guard to run logic before a route is loaded. 

```ts
@Injectable
export class Authguard implements CanActivate{

    constructor(private authService: AuthServiec){}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot) : boolean | Promise<boolean> | Observable<boolean>{

        //we return status as derive it from the auth service. 
        return this.authService.user.pipe(map => {
            return !!user;
        });
    }

}
```
In the app-routing module, we protect the paths we care about:

```ts
const appRoutes: Routes = [
    {
        path: 'hello',
        component: helloComponent,
        canActivate: [AuthGuard],

    }
]
```

We would also like to direct the user to the auth page when they try to manually go to a url by typing it in. 
The CanActivate method can allow redirecting.

```ts
canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot) : boolean | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{

        //we return status as derive it from the auth service. 
        return this.authService.user.pipe(
            take(1),
            map => {
            const isAuth = !!user;
            if(isAuth){
                return true;
            }
            return this.router.createUrlTree(['/auth'])
        });
    }
```
</p>

<h1>Dynamic Components</h1>
<p>
This allows us to load new components at runtime. 
First we create the new component. 
We can use ngIf to dynamically load a component
Alternatively, we can use a dynamic component loader
This is about creating a component in code, and manually attaching it. 
We control how it is instantiated and managed. 
</p>
<p>
We can use .slice() to return a copy of an object, and not the object itself

Why we initialise within ngOnInit and not constructor
what is _variable underscore for
</p>
