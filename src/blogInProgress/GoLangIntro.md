---
title: 'Ready Set Go Lang'
date: 2020-12-15
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.png
subtitle: 'Using Go Lang, what it is for, and why it is so popular.'
time: '10'
tags:
- Go
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

<br>
<h4>Intro to Go programming language</h4>
<p>
Go (often referred to as 'Golang') was created by 3 engineers, Ken Thompson, Rob Pike and Robert Griesemer who worked together at Google during the time of the creation of Go.
Go is a programming language that was used to tackle some of the problems faced at Google, however it is not a Google product as-such.
Golang is an open source programming language designed to offer 3 levels of distinction from the existing market of programming languages.
Docker is currently used by major companies and is used to build platforms such as Docker, Kubernetes, Terraform and more. But what makes Golang so great?
</p>
<p>
The motivation behind Golang extends to 3 distinct features that otherwise were not sufficiently supported by most mainstream languages:<br>
&#8226; Efficient compilation.<br>
&#8226; Efficient execution.<br>
&#8226; Ease of programming.<br>
While languages such as Java provides efficient compilation and execution, languages such as JavaScript and Python are able to provide the ease of programming with efficient compilation, however without the efficient execution. 
Golang aims to achieve this tri-standard in a single language.

//to do below
![Golang motivation](../images/033_golangPie.png)

</p>

<h4>Language Properties</h4>
<p>
Go is a statically typed, compiled and highly optimised programming language. 
A goal of Go is to achieve rapid compilation. 
Being statically typed, the type safety of Go is verified by the program to offer an optimisation to the compiled binary output. 
As the compiler is not required to perform dynamic safety checks, Go is able to run faster than those which are.
The compiler to Go is well depended upon as it provides support to the developer for optimisation in a C-inspired manner.
All in all, Go offers improved compilation and reduced clutter as a statically typed language.
Beyond the compiler, Go uses garbage collection for efficient memory allocation and management for the developer and also uses multiple paradigms 
</p>
<p>
Go support a multi-paradigm programming language where paradigm such as OOP and procedural code can be used as required by the developer.
</p>
<p>
Go places its value across 5 key properties to the language:<br>
</p>
<p>
<strong>Simplicity</strong><br>
Go removes the potential difficulty of using expressions as components to a statement. Instead, statements are expressed as entire units on their own.
The objective of Go simplicity is to make the code as clear to how it works.

</p>
<p>
<strong>Concurrency</strong><br>
Go features its own network awareness where threads can be executed in a thread-safe manner. Go includes a package called 'net/http' which provides web application support.
The package allows the developer to build HTTP services with compositional constructs. 
GO features support for multi-threaded development with <strong>goroutines</strong> which are functions that run concurrently. A goroutine is a lightweight thread that can be run with 
thousands of other goroutines.
Goroutines are able to safely communicate with each other through channels using the go schedular to assign threads to tasks. Channels prevent the potential for race conditions when multiple 
goroutines access shared memory. 
</p>
<p>
<strong>Out of the box experience</strong><br>
Go achieves an enhanced user experience from its capacity to be used out of the box. 
You are not required to pull libraries to be used with Go as comprehensive support for tools are provided as default with Go. 
The Go standard library comes with exceptional support for core components including:<br>
&#8226; String manipulation.<br>
&#8226; Data compression.<br>
&#8226; Network APIs.<br>
&#8226; File manipulation.<br>
&#8226; Testing APIs.<br>
</p>
<p>
The Go CLI offers further support for an out-of-the-box experience. The CLI provides support for project initialisation, building, code generation, dependency retrieval, documentation and web server hosting. The test suite also allows the developer to test code. The application profile also performs analysis upon the application consumption of CPU, network, goroutines and requirements. 
</p>
<p>
<strong>Cross-platform use</strong><br>
Go supports building applications across different operating systems with the update of 2 variables to the compiler. 
The support of Go for cross-platform builds are that builds for different OS' can be made from the same OS and the update of 2 variables. 
</p>

<br>
<h4>Use cases for Go</h4>
<p>
The primary use cases for Go extend to web services, web applications, DevOps and machine learning. 
While Go is less associated directly with machine learning, the construct of the language appeals to the former 3 with strength.
</p>
<p>
Web Services are supported by Go through their concurrent threading, message delivery and network awareness.
</p>
<p>
Web applications are supported with user experience and html
</p>
<p>
Kubernetes is written in Go and supports DevOps. 
</p>

<br>
<h4>Creating a Go project</h4>
<p>
When creating a new Go project, it is important we first begin with where the Go package is installed. 
In the Go directory, there are 3 sub directories: pkg, src, and bin. The src folder may not exist so can be created.
Go workspaces can be created within the src folder. It is a good idea to begin like this as packaging further go files can be achieved as expected.
</p>

<br>
<h4>Packaging in Go</h4>
<p>
When we create Go applications, we may define utility packages that can be useful for separating responsibilities of classes, rather than having all the code in a single file.
Our applications are able to use the 'utility packages' by installing the new utility packages into the 'phg' folder to be referenced.
The below example demonstrates how a main.go file can access the car.go file for action:

```go
package main

install "demo/car"

func main(){

    car.MakeSound()
}

```

```go
package car

install "fmt"

func MakeSound(){
    fmt.Println("vroom")
}
```
</p>
<p>
As the main class exists, there will be an error:
```
failed to import utility package "demo/car"
```
We can resolve this problem by installing the car package into the 'pkg' directory on the go path. 
The below command will change the directory into the car folder, then install the car package into teh 'pkg' folder.
```
cd car
go install
```
</p>
<p>
The error on the main class will no longer appear, and a new folder 'demo/car' will appear within the pkg folder with a car.a file. 
</p>


<br>
<h4>Golang syntax</h4>
<p>
When I review the Go syntax, I will often refer to how it would look in Java. With my confidence in Java, it is nice to be able to reflect upon how Go differs. 
</p>
<p>
As a developer who worked mostly with Java before Golang, there were some key distinctions in the syntax between the languages:

Method names start capitalised (inherited from C#)

Functions are defined with func(). Function return type comes after the name.

Go does not handle explicit exceptions, only error values which are returned as values.

</p>
<p>
<strong>Creating functions</strong><br>
Functions in Go are marked with the keyword 'func' at the start and allow the developer to provide logic for an input and output. 
The function will be marked with the word 'func' followed by its name and arguments, and then lastly by the expected return. 
Unlike Java, Go functions can return more than 1 value, in fact it is very common for Go methods to return 2 items as errors, when necessary, will be thrown rather than handled. 
</p>
<p>
An example of a simple function in Go can appear below:

```go
func concatenate(string a, string b) (string){
    return a + b
}
```
The equivalent in Java would be:

```java{numberLines:true}
public String concatenate(String a, String b){
    return a + b;
}

```
</p>
<p>
Some methods will return an error and a response thus causing two outcomes to be handled by the code.
In Java, this is similar to having to call a try-catch block for a method call, instead with go, we will express the return as two arguments. 
The below example demonstrates the Marshal method which will return JSON for a person along with an error from the method call:

```go{numberLines:true}
json, err := json.Marshal(person)
if err != nil{
    w.WriteHeader(http.StatusInternalServerError)
    return
}
```
The above Go function is equivalent to a try-catch block as below, however the error does not have to be explicitly handled in Go:

```java{numberLines:true}
try{
    convertToJson(person);
}
catch(Exception e){
    System.out.println(e.getMessage())
}
```
</p>
<p>
<strong>Naming conventions</strong><br>
Go uses camelCase naming convention for identifiers. The first letter will also determine the visibility of the type.

The identifier you name things, such as 'person' 'object' etc, are accessible within and outside the package depending on its naming convention. 
Types can be accessed within their package or both within and outside. If it named with a capital letter (Person) it will be accessible outside the package. 
Otherwise it is accessed only within (person). 
</p>
<p>
<strong>Passing values</strong><br>
Go uses pass-by-value within the source code. This means when a parameter is passed between functions, it will always create a copy of the value and pass it through.
Go however defines two different types of parameters to be passed: the value or a reference.
As Java uses pass by value, where a copy of the Object reference is passed between the methods, the address of the Object is accessed by the calling method:

```java
Person alice = new Person("Alice");
changeName(alice, "Bob");
System.out.println(alice.getName());
```
prints:
```
Bob
```
The reference of alice is passed into the changeName method that updates the name to "Bob" of the Object. 
</p>
<p>
In Go, trying to achieve the same objective would not update the instance itself:

```go
func main(){
    person := Person{"Alice"}
    changeName(person)
    fmt.Println(person)
}
func changeName(p Person){
    p.name = "Bob"
}
```
returns:
```
{Alice}
```

Instead, to pass the actual reference of the instance to the <code>changeName</code> method, we need to use an ampersand (&) to send the reference of the instance, and an 
asterisk (*) to receive an address of the instance:

```go
func main(){
    person := Person{"Alice"}
    changeName(&person)
    fmt.Println(person)
}
func changeName(p *Person){
    p.name = "Bob"
}
```
returns:
```
{Bob}
```
The syntax behind the ampersand and asterisk is useful to remember for addressing instances within the application.
</p>
<p>
<strong>Packages</strong><br>
Just like Java, Go uses packages to define additional functions and utilities.
You are able to create utility functions which the executable package (main) will use to implement.
When we create the utility package, they will be stored in the Go $PATH variable for where Go was installed and will search the folder for the packages.
If you visit the Go path: Go/src/, you will be able to see all other utility packages (math, log, strings). Utility packages can be created by creating a new folder within 
this directory where it can be imported using import "{foldername}" in the calling package.
</p>

<br>
<h4>Go.mod</h4>
<p>
A module consists of Go packages stored in a file tree where go.mod is at the root. The go.mod file will be used to define the import path and dependencies to the build.
When we first create a Go project, use the command line to navigate to the directory, and then submit:
```
go mod init {name}
```
where {name} is the name of the module you would like to use. 
In this file, a dependencies will be stored and referred upon by the application. 
</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>