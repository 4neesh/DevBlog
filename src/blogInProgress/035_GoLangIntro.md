---
title: 'An Introduction to Go'
date: 2020-12-15
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.png
subtitle: 'An introduction to using Go, the problems it is was built to resolve and its most valuable use cases.'
time: '10'
tags:
- Go
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand the motivations that led to the invention of Go.<br>
&#8226; Visit the syntax and configuration of Go to begin writing Go applications.<br>
&#8226; Review the most valuable use-cases for Go.<br>

<br>
<h4>Intro to Go programming language</h4>
<p>
Go (often referred to as 'Golang') was created by 3 engineers, Ken Thompson, Rob Pike and Robert Griesemer who worked together at Google during 2009. 
Go came about as a programming language used to tackle some of the persistent issues of compilation faced by developers of large servers and distributed applications at Google. 
Go has since been developed from its inception as an open source language and is used with many major platforms including Docker, Kubernetes and Terraform. But what makes Go so great?
</p>
<p>
The key motivation behind the inception of Go was to resolve the excessive compilation time required for application builds. As a result, Go is the only programming language to serve all 3 sought-after capabilities:<br>
&#8226; Efficient compilation.<br>
&#8226; Efficient execution.<br>
&#8226; Ease of programming.<br>
</p>
<p>
Languages such as Java and C++ provide efficient compilation and execution, languages such as JavaScript and Python are able to provide ease of programming with efficient compilation, however there had
not been a language to offer all three. 
Golang aims to achieve this tri-standard.

![Golang motivation](../images/033_golangVenn.png)

</p>
<p>
Go is a statically typed, compiled and highly optimised programming language. The properties of Go extend beyond the rapid compilation to provide developer support with a 
shallow learning curve, backward compatibility and packaged support for features including web services and testing.<br>
The extended benefits of Go can be categorised into 4 key areas:<br>
&#8226; Simplicity of implementation.<br>
&#8226; Concurrency support.<br>
&#8226; Out-of-the-box experience.<br>
&#8226; Cross-system performance.<br>
</p>

<br>
<h4>Simplicity of implementation</h4>
<p>
Go is able to pair high sophistication, rich features with an equally simple and straightforward approach to language design.
The framework for testing and profiling Go is also provided as default. This supports multiple types of testing. 
</p>
<p>
Go support a multi-paradigm programming language where paradigm such as OOP and procedural code can be used as required by the developer.
</p>
<p>
Go does not use generics or templates to remove the requirement for understanding.
</p>
<p>
Go contains its own runtime library and is deployed as single executable. As a single executable, Go eliminates the potential for version or dependency mis-match. 
</p>
<p>
Go versions are backward-compatible. Upgrading the version of Go can rely on previous versions working as expected with the exception of security patches and bugs. 
</p>
<p>
Go removes the potential difficulty of using expressions as components to a statement. 
Instead, statements are expressed as entire units on their own.
The objective of Go simplicity is to make the code as clear to how it works.
Go is backwards compatible to make implementations of Go safer to withstand the language updates. 
</p>


<br>
<h4>Concurrency</h4>
<p>
Go was developed during a modern period of computer hardware where the presence of multiple cores to a system became standard. Go places the management of multiple cores within its design 
where other languages may fault around the challenges of maintaining database connections and managing caches. Go achieves its capacity for concurrency through the use of <i>goroutines</i>, a lightweight
alternative to threads that support the huge scaling of Go applications.
</p>
<p>
Go features its own network awareness where threads can be executed in a thread-safe manner. Go includes a package called 'net/http' which provides web application support.
The package allows the developer to build HTTP services with compositional constructs. 
GO features support for multi-threaded development with <strong>goroutines</strong> which are functions that run concurrently. A goroutine is a lightweight thread that can be run with 
thousands of other goroutines.
Goroutines are able to safely communicate with each other through channels using the go schedular to assign threads to tasks. Channels prevent the potential for race conditions when multiple 
goroutines access shared memory. 
</p>


<br>
<h4>Out of the box experience</h4>
<p>
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
Go contains an in-built framework for testing for efficient testing of the source code. The testing framework encapsulates multiple areas for testing for simplicity.
</p>
<p>
The Go CLI offers further support for an out-of-the-box experience. The CLI provides support for project initialisation, building, code generation, dependency retrieval, documentation and web server hosting. The test suite also allows the developer to test code. The application profile also performs analysis upon the application consumption of CPU, network, goroutines and requirements. 
</p>


<br>
<h4>System performance</h4>
<p>
Being statically typed, the type safety of Go is verified by the program to offer an optimisation to the compiled binary output. 
The compiler to Go is well depended upon as it provides support to the developer for optimisation in a C-inspired manner.
All in all, Go offers improved compilation and reduced clutter as a statically typed language.
Beyond the compiler, Go uses garbage collection for efficient memory allocation and management for the developer and also uses multiple paradigms.

Go supports building applications across different operating systems with the update of 2 variables to the compiler. 
The support of Go for cross-platform builds are that builds for different OS' can be made from the same OS and the update of 2 variables.
The benefits of Go as a compiled language can be realised from enhanced execution time where the operating system does not need to interpret the code at runtime. 
A key difference between Java and C++, and the enhanced execution time from C++ is that C++ is compiled and therefore removes the interpretation elements from execution of the binary file. 
The challenge of C++ with compile time however is crated from the time required for extracting variables. Go uses GC like Java, to provide the best of both worlds.
The configuration of Go into a compiled binary for a certain operating system resolves the issues otherwise experienced with C or C++. 
Further benefits are realised from Go as it uses the garbage collector for memory management. This example demonstrates how Go combines the benefits of GC from Java with the compile performance of C++ with 
enhanced simplicity for configuration. 
</p>


<br>
<h4>Use cases for Go</h4>
<p>
As previously mentioned, Go provides unison between some of the most popular languages, taking their best features and combining them into a relatively small and simple language.
The features of Go may make it seem appealing for all use-cases, however its library for use may limit its potential. Despite this, there are a few use-cases that really do emphasise 
the benefits to choosing Go as the language for development as they emphasise the problems of compilation, concurrency and simplicity that it addresses. Some benefits such as 
portability are similar to Java, however from a top-down view, Go can be best suited to the following cases:
</p>
<p>
The primary use cases for Go extend to web services, web applications, DevOps and machine learning. 
While Go is less associated directly with machine learning, the construct of the language appeals to the former 3 with strength.
</p>
<p>
Web Services are supported by Go through their concurrent threading, message delivery and network awareness.
Go has a built in 'http' package that can make creating web services very easy. 
</p>
<p>
Web applications are supported with user experience and html
</p>
<p>
Go also contains built in capabilities for <strong>multi-threading</strong>. 
The Go binary are considered to be much faster than other languages that are reknowned for speed, such as JavaScript and Python. Go is not as fast as C, however this difference is negligible. 

</p>

<br>
<h4>Creating a Go project</h4>
<p>
Before we start creating a Go project, it is important to understand how Go packages are referenced by the application.
We can create different packages with our application to divide the responsibilities of our classes to be injected as services.
Packages can hold many Go files that can be referenced within the same application, or installed into the utility package directory to be used by other applications. 
</p>
<p>
Packages can contain types, variables and functions that we want to use from other Go packages. 
We are only able to create packages that are scanned by our Go files in the Go workspace. The Go workspace 
When creating my first Go project, I found a few tips that will help later down the line when creating my own packages to be referenced within the application code.
Just how a Java class may reference another Class as a Service, Go enables classes to interact with each other provided they publicly accessible and imported correctly.
I faced an issue with creating the packages and referencing them across Classes which required me to look back at where I was creating my workspace and how Go creates the utility packages.
</p>
<p>
When creating a new Go project, it is important we first begin with where the Go package is installed on the machine. 
In the Go directory, there are 3 sub directories: pkg, src, and bin. The src folder may not exist so can be created.
Go workspaces can be created within the src folder. Create a sub-directory within this folder to act as a workspace, when we need to reference our own packages within the application code, 
the Go compiler will be able to locate the 'pkg' folder where it will store and reference new packages.
</p>



<br>
<h4>Golang syntax</h4>
<p>
When I review the Go syntax, I will often refer to how it would look in Java. With my confidence in Java, it is nice to be able to reflect upon how Go differs. 
</p>
<p>
As a developer who worked mostly with Java before Golang, there were some key distinctions in the syntax between the languages:

&#8226; Method names start capitalised (inherited from C#)<br>
&#8226; Functions are defined with func(). Function return type comes after the name.<br>
&#8226; Go does not handle explicit exceptions, only error values which are returned as values.
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

<br>
<h4>Packaging in Go</h4>
<p>
Utility packages in Go allow us to separate responsibilities of classes and to also create layers to the application. You may consider the repository-service-controller layout of web applications as one motivation for 
packaging utility functions away from each other to define the layers of an application. 
Our applications are able to use the 'utility packages' by installing the new utility packages into the 'pkg' folder to be referenced.
The below example demonstrates how a <code>main.go</code> file can access the <code>car.go</code> class as a service:

```go
package main

import "demo/car"

func main(){

    car.MakeSound()
}

```

```go
package car

import "fmt"

func MakeSound(){
    fmt.Print("vroom")
}
```
</p>
<p>
The current main class will show a compile error:

```
failed to import utility package "demo/car"
```
We can resolve this problem by installing the car package into the 'pkg' directory on the Go path. 
The below command will change into the car directory, then install the car package into the 'pkg' folder where it can be referenced.
```
cd car
go install
```
</p>
<p>
The compile error on the main class will no longer appear, and a new folder 'demo/car' will appear within the pkg folder with a <code>car.a</code> file. The package can then be used as a service 
for other Go applications. 
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
<h4>Summary</h4>
<p>
In this blog I have reviewed the value that Go brings to developers, the problem it resolves with rapid compilation <u>and</u> execution unlike languages such as Java and Python.

</p>
<p>
Getting started with Go can be 
In future blogs, I will begin to implement Go to create web services and multi-threaded applications through the use of the Go standard libraries.
</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>