---
title: 'Ready Set Golang'
date: 2020-12-10
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.png
subtitle: 'Visit the Go syntax and design patterns for creating a CRUD web service.'
time: '15'
tags:
- Go
- Microservices
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand how the syntax of Go differs, using Java as a reference.<br>
&#8226; Explore some of the key methods from the Go standard library for creating a web service.<br>
&#8226; Handle HTTP requests from a client to perform CRUD operations.<br>

<br>
<h4>Creating a Go web service</h4>
<p>
The benefit to using Go for web services extend from their small and fast nature. It compiles down a single binary file that can be deployed efficiently to docker or any 
other kind of container. This section will look over creating a web service with Go and exploring some of the 25 keywords that enable a developer to use it.
I will also reference the Spring framework as an alternative solution to create a reference for how this would otherwise be implemented with Java.
</p>
<p>
The Go web services use representational state transfer (REST) to achieve a separation of concern between different responsibilities to the application.
REST is used to respond to incoming HTTP requests where the sender of the request (client) uses an API uniform resource identifier (URI) to obtain and modify the state of the resource. 
In our case, the resource will be data that is typically persisted by the application datastore.
</p>
<p>
The REST service will consist of a request and response using the HTTP protocol.
The HTTP message will send a packet of information between the client and server that includes a start-line, header and body. 
HTTP is a stateless protocol as each request made within the system is executed independently without any knowledge of the other requests made around it. 
This means HTTP transactions are sent, completed, and closed in isolation to support huge scaling as sessions are unrelated to each other.
</p>
<p>
For the request, the start line will indicate the HTTP method performed (such as GET, POST, DELETE) along with information about the target server. 
The header in the request may include supporting information for processing the request such as authentication tokens. 
The body of a request will include JSON data that is required for processing. This is important for making PUT and POST requests. 

A response will use the start line to define a status code and text line to explain the result. Status codes are from 100 to 599. Codes in the 200s represent successful responses, 
codes in 300s represent redirected requests, codes in the 400s represent client-side error (such as 404), and codes in the 500s represent server-side errors.
The response header may provide information to support client-side processing such as a cache or cookies. 
The response body would consist of the requested data (such as for a GET request). 
</p>

<br>
<h4>Creating a web service</h4>
<p>
The process for creating a web service will include the creation of the following aspects as we would otherwise do with Java:
1. Create an entity class for storing the instances of the Object. 
2. Initialise the data store
3. Register a web service
4. Send GET requests upon the server
5. Send POST requests
6. Send PUT requests
7. Run the application

Before we begin writing the code, we must first create the file to store the code. 
The file will be named 'main.go', it will define its package as 'main' and will include a main method:

```go
package main

func main(){

}
```
</p>

<br>
<h4>1. Creating the entity class</h4>
<p>
Go defines 'struct' (short for structure) as a typed collection of fields for custom user-defined types to be used in the application. The struct is used to define records that are to be included in the application with certain properties.
Just like marking a class as @Entity and providing the specific fields, a struct can be defined as below:

```go
type person struct{
    Id int,
    Name string,
    Age int
}
```
</p>
<p>
A struct can be considered as a template that is used for creating data records. 
The definition of a struct will be completed using the keyword 'type' followed by the identifier of the struct followed by 'struct'.
Similar to the naming convention of identifiers, the struct fields are also accessible as per the capitalisation of their first letter. 
</p>
<p>
A struct can be defined in many ways:

Using direct assignments:
```go
var p Person
p.Id = 1
p.Name = "Alice"
p.Age = 25
```
Using a code block:
```go
p:= Person {
    Id : 1,
    Name : "Alice",
    Age : 25,	
}
```
Or in a single line:
```go
p:= Person {1, "Alice",25}
```

</p>
<br>
<h4>2. Initialise a data store</h4>
<p>
To initialise a storage of multiple Person instances, I will define a variable as an array of Person

```go
var personList []Person
```
The data storage will be populated by using a special function within Go called 'init'. 
Init functions are called for initialising variables, checking states and running other one-time computations. Despite how many times the package is referenced,
the init function will only ever be called once:

```go{numberLines:true}
func init(){

    personJson := `[
        {
            "Id" : 1,
            "Name":"Alice",
            "Age": 25,
        },
        {
            "Id" : 2,
            "Name":"Bob",
            "Age": 22,
        },
        {
            "Id" : 3,
            "Name":"Charlie",
            "Age": 23,
        }
    ]`
    err := json.Unmarshal([]byte(personJson), &personList)
    if err != nil{
        log.Fatal(err)
    }
}
```
</p>
<p>
So what have we achieved?
Firstly, the personJson declaration defines a JSON within back ticks. 
The JSON is used to initialise 3 people into the list with their Id, Name, and Age. 
From line 20, a second declaration is made to 'err' which transforms the JSON into the personList using the Unmarshal method.
</p>
<p>
The Unmarshal method parses JSON-encoded data and stores the result within the value pointed to by the second argument. The <a href="https://golang.org/pkg/encoding/json/#Unmarshal" target="_blank">documentation</a> defines two parameters and an error response:

```go
func Unmarshal(data []byte, v interface{}) error
```
The Unmarshal method performs the reverse of the Marshal method (later visited) by transforming the byte array 'data' into the interface 'v'. 
After line 20, we perform a check upon the response of the Unmarshal method by checking if the error is not equal to Nil. The following code 
block is frequently used with Go for checking errors:

```go
 if err != nil{
        log.Fatal(err)
    }
```
</p>

<br>
<h4>3. Handle requests</h4>
<p>
So far, we have created a type for data records and populated an array of records using the Unmarshal method for parsing JSON. 
We are able to explicitly register the different endpoints of the web service in one of two ways:

```go
http.Handle("/home",&Person{Name: "Steve"})
http.HandleFunc("/about", aboutHandler)
```
The Handle function allows us to register a handler that will service the request for the pattern that matches "/home". 
The HandleFunc allows us to assign a function to directly handle in the incoming request when the pattern matches "/about". 

The Handle interface from the documentation appears as following:

```go
func Handle(pattern string, handler Handler)
```
The Handler interface contains a single method: ServeHTTP(ResponseWriter, *Request) which uses a ResponseWriter and a pointer to a Request object.
To define our own implementation of Handler, we will hang the ServeHTTP method on the Person struct and by providing an implementation of the method.

```go{numberLines:true}
func (p *Person) ServeHTTP(w http.ResponseWriter, r *http.Request){

    w.Write([]byte(p.name))
}
```
On line 1, we first specify a new function with 'func', second, the '(p *Person)' section will specify the Person struct has the method hung from it. 
By convention, w is used to denote the http.ResponseWriter. The ResponseWriter is used to construct the http response from the server to the client. This is where we can specify the 
start line, headers, and body. 
The http.Request instance is denoted with 'r' by convention.
</p>
<p>
The HandlerFunc method allows us to handle HTTP method, however instead of taking a handler as a second argument, it takes a function that has the same singature as the ServeHTTP. 
The function must take a ResponseWriter and a pointer to a Request object:

```go{numberLines:true}
func main(){
    http.HandleFunc("/about", aboutHandler)
}

func aboutHandler(w http.ResponseWriter, r *http.Request){
    w.Write([]byte("About page"))
}

```
</p>
<p>
The HandleFunc is more simple to implement and as you can see, the signature of the ServeHTTP method is once again used by the aboutHandler function. 
</p>
<p>
A similar implementation of the above handle requests could be implemented in Java below. 
The getHome method will be requested upon a path of "/home" and will obtain a Person instance through the service layer and print their name. 

```java{numberLines:true}
@Controller
public class ControllerClass{

    @RequestMapping(value = "/home", method = RequestMethod.GET)
	public String getHome() {
        Person a = service.getPersonById(1);
	    return a.getName();
	}
    
}   
```
</p>

<br>
<h4>4. Send a GET request to the server</h4>
<p>
The list of people can be obtained through the web service by defining a handler to a GET request and return the PersonJson variable to the HTTP body.
First I will register the request to be handled with HandleFunc:

```go{numberLines:true}
http.HandleFunc("/people", peopleHandler)
```
</p>
<p>
Second, I will define the peopleHandler method to return the peopleJson in the body. 

```go{numberLines:true}
func peopleHandler(w http.ResponseWriter, r *http.Request){

    personJson, err := json.Marshal(personJson)
    if err != nil{
        w.WriteHeader(http.StatusInternalServerError)
        return
    }
    w.Header().Set("Content-Type", "application/json")
    w.Write(personJson)
}
```
On line 1, the peopleHandler function is defined with the same signature as the ServeHTTP implementation from the Handler interface.
On line 3, the personJson response is defined by calling the json.Marshal method.
The json.Marshal interface is defined in its documentations with the below signature:

```go
func Marshal(v interface{}) ([]byte, error)
```
The Marshal method will do the opposite of the Unmarshal and return the JSON encoding of the interface v. The response from Marshal is the JSON data in a byte array and an error.
On lines 4 to 7, the error is handled with a HTTP start line of StatusInternalServerError.
On line 8, where a good response is expected, we set the header to return content type of JSON and on line 9 we write the response body to be the JSON returned from the Marshal method.
</p>
<p>
In Java, the same can be achieved from the controller where the jackson serializer hides much of the complexity regarding JSON response body:

```java
@Service
public class ServiceImpl{

    @Autowired
    RepositoryImpl repository;

    public List<People> findAll(){
        return repository.findAll();
    }
}

@RestController
public class Controller{

    @Autowired
    ServiceImpl service;

    @GetMapping("/people")
    public List<People> getPeople(){

        return service.findAll();

    }
}
```
</p>

<br>
<h4>5. Send POST requests</h4>
<p>
The standard call made a REST endpoint is a GET request where information is requested. We are able to map multiple types of HTTP requests to the same URI to be managed by the handler.
A POST request will add to the array of Person instances. 
In the peopleHandler function, we can decide how to process the request by assessing the request header. For this, a switch statement can address the different types of methods:

```go{numberLines:true}
func peopleHandler(w http.ResponseWriter, r *http.Request){

    switch r.method{
    case http.MethodGet:
        personJson, err := json.Marshal(personJson)
        if err != nil{
            w.WriteHeader(http.StatusInternalServerError)
            return
        }
        w.Header().Set("Content-Type", "application/json")
        w.Write(personJson)
    case http:MethodPost:
        var newPerson Person
        personDetails, err := ioutil.ReadAll(r.body)
        if err != nil{
            w.WriteHeader(http.StatusBadRequest)
            return
        }
        err = json.Marshal(personDetails, &newPerson)
        if err != nil{
            w.WriteHeader(http.StatusBadRequest)
            return
        }
        if newPerson.Id != 0{
            w.WriteHeader(http.StatusBadRequest)
            return
        }
        newPerson.Id = nextId()
        personList = append(personList, newPerson)
        w.WriteHeader(http.StatusCreated)
        return
    }
}
```
</p>
<p>
From line 3, the switch statement begins where the method from the request, r, is cycled upon. 
From lines 4 to 11, the GET request from step 5 is captured in its own block for the http,MethodGet.
From lines 12 to 33, the POST request handler is defined. This method appears fairly long due to the multiple error checks performed at each stage.
On line 13 a new Person instance is defined.
On line 14, the ioutil.ReadAll() method is used to read in the request body and to pass it into a new variable defined as <code>personDetails</code>. 
The error from this method call is reviewed before the personDetails JSON from the request body is passed into the newPerson instance <code>&newPerson</code>.
The error returned is evaluated before evaluating the Person Id is defaulted to 0. The Id is later assigned using a method <code>nextId()</code> to find the highest Id from the list
and to increment upon it. 
Lastly, the personList is updated to append the newPerson to the list and a response is returned consisting of a 201 code for Status created. 
</p>

<br>
<h4>6. Send PUT requests</h4>
<p>
Before we can send a PUT request, we need to create a new handler and pattern. When we need to update a user, we must specify exactly which one by a unique identifier (Id) and this will be passed into the URL for the request. 
In the <code>main()</code> method, I will therefore create a new HandleFunc for a pattern with a trailing forward-slash:

```go{numberLines:true}
http.HandleFunc("/people/", singlePersonHandler)

```
</p>
<p>
The <code>singlePersonHandler</code> method will be used to update the user from the peopleList accordingly:

```go{numberLines:true}
func singlePersonHandler(w http.ResponseWriter, r *http.Request){

    urlPathSegments := strings.Split(r.URL.path, "people/")
    personId, err := strconv.Atoi(urlPathSegments[len(urlPathSegments) -1])
    if err != nil{
        w.WriteHeader(http.StatusNotFound)
        return
    }
    person, listItemIndex := findPersonById(personId)
    if(person == nil){
        w.WriteHeader(http.StatusNotFound)
        return
    }

    var updatedPerson Person
    body, err := ioutil.ReadAll(r.body)
    if err != nil{
        w.WriteHeader(http.StatusBadRequest)
        return
    }
    err = json.Unmarshal(body, &updatedPerson)
    if err != nil{
        w.WriteHeader(http.StatusBadRequest)
        return
    }
    person = &updatedPerson
    personList[listItemIndex] = *person
    w.WriteHeader(http.StatusOK)
    return
}

func findPersonById(personId int) (*Person, int){

    for i, person := range personList{
        if person.Id == personId{
            return &person, i
        }
    }
    return nil, 0

}

```
</p>
<p>
The PUT function can be divided into 2 sections: lines 3 to 13 and lines 15 to 29. 
The first section will obtain the person instance from the list by extracting the id from the url and searching the list of users for the person.
On line 3, <code>urlPathSegments</code> is is obtained by splitting the url path from 'people/'.
The <code>personId</code> is then extracted by using the <code>strconv.Atoi</code> method to obtain the final parameter from the url. The error is handled accordingly on lines 5 to 8. 
On line 9, the person and their index position in the list are obtained through a method call to the function <code>findPersonById</code>. findPersonById will loop through the personList
to obtain the person instance and their index position i. 
The first section concludes by handling a nil person that would be returned by findPersonId if no such Id is found for a person in the personList.
</p>
<p>
The second section will create a new person instance <code>updatedPerson</code> and update the list of people with the new request.<br>
On line 16, the <code>ioutil.ReadAll</code> method is used to read the content of the body from the PUT request. The body of the put request will contain the JSON of the person update. 
Therefore the variable <code>body</code> contains the JSON for the updated user. An error is handled on lines 17 to 20.
The JSON body is then extracted into the updatedPerson variables by using the <code>json.Unmarshal</code> method. The error that is returned is then handled. 
The second section concludes where the person instance is overwritten with the <code>updatedPerson</code> and the index position in the personList is updated to the person.
A response header of StatusOK is returned. 
</p>
<p>
Section 2 can be converted into a switch statement to satisfy further HTTP methods requests to the url of 'person/' where a GET request would return a single person and a DELETE request would
remove the person from the personList:

```go{numberLines:true}
switch r.Method{

    case http.MethodGet:
        body, err := json.Marshal(person)
        if err != nil{
            w.WriteHeader(http.StatusInternalServerError)
            return
        }
        w.Header().set("Content-type", "application/json")
        return
    case http.MethodPut:
        var updatedPerson Person
        body, err := ioutil.ReadAll(r.body)
        if err != nil{
            w.WriteHeader(http.StatusBadRequest)
            return
        }
        err = json.Unmarshal(body, &updatedPerson)
        if err != nil{
            w.WriteHeader(http.StatusBadRequest)
            return
        }
        person = &updatedPerson
        personList[listItemIndex] = *person
        w.WriteHeader(http.StatusOK)
        return

    case http.MethodDelete:
        personList := remove(personList, listItemIndex)
        w.WriteHeader()

    default:
        w.WriteHeader(http.StatusMethodNotAllowed)
}

func remove(list []Person , index int) []Person{
    list[index] = list[len(list)-1]
    return list[:len(list)-1]
}
```
</p>
<br>
<h4>7. Run the application</h4>
<p>
Before the application can be executed, we need to specify a port for which the web service will be run. 
To do this, the <code>ListenAndServe</code> method from the http package is used. 
ListenAndServe takes two arguments, first a string literal as the address and second a handler.
The Handler is often placed as 'Nil' which will cause the handler to default to DefaultServeMux. 
</p>
<p>
DefaultServeMux is a HTTP multiplexer. The multiplexer is responsible for matching the url of the incoming request to the registered list of patterns
to which are served. 
</p>
<p>
The web service can be started using the following command from the terminal:

```go
go run .\main.go
```
</p>



</br>
<h4>Websockets with Go</h4>
<p>
Web sockets enable near real-time events-driven communication between applications. 

</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>