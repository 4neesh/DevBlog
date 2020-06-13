---
title: 'Using dependency injection'
date: 2020-06-29 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/013Tissamaharama.png
thumbnail: ''
subtitle: 'Dependency injection is a valuable pattern used to decouple classes within an application. Explore how dependency injection can be implemented.'
time: '8'
tags:
- Java
- Patterns
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The .<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>What is dependency injection?</h4>
<p>
Dependency injection is a technique used to decouple classes that depend upon each other within an application.
A class is deemed to be dependent on another class when it uses the functionality of the other class. 
Classes are deemed to have a <i>hard dependency</i> if their invocation creates a 'new' instance of another class. In the example below, the client, <code>Student</code> has a dependency on the <code>SchoolService</code>. The SchoolService Object is therefore injected into the Student Object to be used. Dependency injection falls under the broader design of 'Inversion of control' whereby a client is not responsible for injecting its own dependencies, but has delegated it to an injector class.
Dependency injection is used when a class requires an instance of another class to be used 'as a service'. In the example below, the SchoolService is used to find the classes the student would get.
</p>

```java{numberLines:true}
    public class Student{

        SchoolService schoolService;

        public Student(){
            schoolService = new ArtSchool();
        }

        public List<String> learn(){
            
            return schoolService.getClasses();

        }
    }
```

<p>
The Student Object above will create the ArtSchool at compile time, however a problem may arise if the we want the Student to instead attend the LiteratureSchool. The code will need to change its dependency to the following:
</p>

```java{numberLines:true}

public Student(){
    schoolService = new LiteratureSchool();
}

```

<h4>Implementing dependency injection</h4>
<p>
Dependency injection will refactor the code so that it no longer creates new Objects, but instead references pre-existing instances.
As a result, each class is no longer responsible for creating instances of other classes, and their dependency is instead <i>injected</i> through an argument.
There are four popular ways to implement dependency injection to our application:<br>
&#8226; Constructor injection: using the client constructor to take in the service injection as an argument.<br>
&#8226; Setter injection: exposing a setter method on the client to create inject the service .<br>
&#8226; Interface injection: .<br>
&#8226; Spring framework injection: .<br>


</p>

<strong>Constructor dependency injection</strong>
<p>
A constructor parameter can take in a dependency as an argument to assign the Object to the class.
</p>

```java{numberLines:true}
public class Student{

        SchoolService schoolService;

        public Student(SchoolService schoolServiceArgument){
            this.schoolService = schoolServiceArgument;
        }
    }

```
<strong>Setter dependency injection</strong>
<p>
Spring framework prioritises setter injections to prevent the code readability issues that arise with constructor injections.
</p>

```java{numberLines:true}
public class Customer{

        CustomerService customerService;

        public Customer(CustomerService customerServiceArgument){
            customerService = customerServiceArgument;
        }
    }

```

<strong>Spring annotations</strong>
<p>
Spring provides 

</p>

```java{numberLines:true}
public class Customer{

        CustomerService customerService;

        public Customer(CustomerService customerServiceArgument){
            customerService = customerServiceArgument;
        }
    }

```
<h4>Benefits of dependency injection</h4>
<p>
Dependency injection achieves a separation of concerns between the two classes while promoting code readability and reuse. 
Further benefits of dependency injection can be reaped during unit testing where classes can be individually mocked rather than creating a chain of Objects to create.

</p>

<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: Tissamaharama, Sri Lanka by <a target="_blank" href="https://unsplash.com/@roxannedesgagnes">Roxanne Desgagnés</small></a><br>