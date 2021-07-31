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
5. add bootstrap to the application in the index.html file:
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
6. use ng serve to run the application and see it on localhost 4200

</p>
<p>
In the app.module file, the bootstrap keyword is used to point to the first class loaded.
this is the AppComponent.ts file. 
In the app.component file, there are a few key parts:
@Component{} is used to define the component 'decorators' which are the component metadata.
- selector = name of the component when referenced outside
- templateUrl = link to the html for the component
- styleUrls = link to css for component
- template (can be used insteam of templateUrl) to inject html yourself in backticks. 

Each component will be exported to make it available for other components. This uses the words 'export class XXX' where XXX is the name of the module 
</p>
<p>
You can create a new module through the CLI. Use command:
```
ng generate component {name}
```
where name is the name of the component. This will create a component, html, css and spec class. The spec file is for testing. so delete/ignore for now. 

</p>
<p>
We want to define a load of teams and display them in a table on the form. 

The first step is to create a json file that will contain our data. In a file called 'teams.json' in the assets folder:
```json
[
    {
          "id": 1,
          "name": "Leeds United",
          "city": " Phoenix "

    },
    {
          "id": 2,
          "name": "Liverpool FC",
          "city": "Los Angeles "

    },
    {
          "id": 3,
          "name": "Brentford FC",
          "city": " Las Vegas "

    }
]

```

The json file will be processed by a data service. 

</p>
<p>
The structure of each team follows an id, name and city. The raw data will need to be mapped into a model class, which we can define as an interface. 
I will create a new folder within app called 'shared' and will keep the interfaces stored there. An interface does not contain any script, just a contract to a function (class) with respect to the arguments and type they contain. Much like an entity class. Interfaces typically start with a capital I to indicate they are an interface. The interface is exported: 

```ts
export interface ITeam {
    id: number;
    name: string;
    city: string;
}
```

</p>

<p>
Now that we have our data, and an interface which we can bind to it, we can create a data service that will obtain the json data and create a feed that can be bound to the constructor of any component that needs it. 
I will create a new folder called core to store the data service and any other service we may require for all other components. 
</p>
<p>

```typescript
@Injectable()
export class DataService{}
```

The @Injectable annotation is used to tell Angular that the class can be used within the dependency injection of the application. In other words, it can be passed into any component of the application through the constructor. 

```ts
constructor(private http: HttpClient){

    }
```
The HttpClient is imported from the angular/common/http package and instantiated through the constructor. The http client provides restful services to be used by the dataservice. 
Within the dataservice we will use the following functions to create a getter for the teams:

```ts
    getTeams(): Observable<ITeam[]> {
        return this.http.get<ITeam[]>(this.baseUrl + 'team.json')
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }
```

The getTeams method returns an ```Observable<ITeam[]>``` An Observable is used for event handling and asynchronous events within Angular. By using the Observable pattern, the subject (data) is maintained by the observer and notifies those services that use it when the data has been changed. it is therefore a dynamic way of obtaining and passing data across the application. Similar to the pub/sub design pattern. 
</p>
<p>
The http client is used to return an array of ITeam instances that are obtained from the teams json file. The baseUrl is instantiated away from the method to point to the assets directory. The catchError and Observable keywords are derived from the rxjs package that must be installed through the CLI with 
```
npm install --save rxjs-compat
```
</p>
<p>
So now we have the raw data that maps to an interface and a getter for the raw json file into an array of the interface that will automatically update as the json file is updated. 
We need to update the teams component to now use the getter to display the list of teams. 
</p>
<p>
Within the teams.component.ts file, we will define the constructor to use the getter to populate an array of teams within the components:

```ts

  teamsData : ITeam[] = [];

  constructor(private dataService: DataService) {

    this.dataService.getTeams().subscribe((teamArray: ITeam[]) => this.teamsData = teamArray);

   }

```
The teams data is defined outside of the constructor.
Within the constructor, the dataservice is passed in (thanks to the @Injectable() annotation) and is used  for the getTeams method. 
The method of 'subscribe' is used to trigger the call to the restful service where an array of ITeam is returned. The array is then used to be assigned to the teamsData array for the component. 
</p>

<p>
Now that we have the data within the component, we need to get it to the webpage. 
The first step involves getting the teams component to be accessed by the app component so it can be rendered within the webpage. Before we do that, the teams component must have a module that is used to export the data it contains to other components. 
</p>
<p>
Create a file called teams.module.ts in the teams directory. 
A module is used to collect components, services and other elements such as pipes and directives together that are linked to a collective purpose. A module is denoted with a @ngModule 'decorator' and contains key elements.
</p>
<p>
Within the @ngModule, we define a few parameters with values for the module:
1. declarations: declare which components/directives and pipes belong to the current module. therefore these elements know about each other. A directive can be structural to the view (NgFor/NgIf) or attribute directives (built-in NgStyle)
2. imports: which components from other modules are made available for this module
3. exports: which elements from this module are available to other modules to be imported. 
</p>
<p>
The app.module file is known as the root module which is responsible for importing all modules of the application to be used and run. In the imports, we must include all modules of the application so they are known to the root and loaded. 
</p>
<p>

<p>
How do we pass components from a parent to the child?
1. In the parent html, you will be referencing the child component
e.g

```html
<child></child>
```
2. import Input decorator to the child. 
You can do @Input variablename: any[];
ngOnChanges(changes: SimpleChanges){

}
to then update the array each time a change is made from the parent class. 
However we are only modifying one parameter from the parent into the child, so we will use getters and setters. 

3. In the child: 
private _variableName: Variable[] = [];
@Input() get customers(): ICustom[]{
    return this._variablename;
}

set customers(value: ICustomer[]){
    if(value){
        //call any intermediate operations with this.
       this._variable = value;

    }
}

4. the input annotation allows the child to read from the parent
so now we can update the parent html:
```html
<child [variables] = "variablename"></child>
```
</p>
</p>
<br>
<h4>Summary</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>