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
- Spring
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand what dependency injection is and why it is used.<br>
&#8226; Implement the three most common techniques for dependency injection.<br>
&#8226; Review the benefits and drawbacks to each type of dependency injection.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)

<br>
<h4>What is dependency injection?</h4>
<p>
Dependency injection is a technique used to decouple classes that depend upon each other within an application.
A class is deemed to be dependent on another class when it uses the functionality of the other class. 
Classes are deemed to have a <i>hard dependency</i> if their invocation creates a 'new' instance of another class. In the example below, the client, <code>Student</code> has a dependency on the <code>SchoolService</code>. 
The SchoolService Object is therefore injected into the Student Object to be used. Dependency injection falls under the broader design of 'Inversion of control'. Inversion of control states that a class's dependencies should not be hard coded, but instead injected. As a result, inversion of control enforces the fifth principle of SOLID whereby a client is not responsible for injecting its own dependencies, but has delegated it to an injector class.
Dependency injection is used when a class requires an instance of another class to be used 'as a service'. In the example below, the SchoolService is used to find the classes the student would have from the learn() method.
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
The Student Object above will create the ArtSchool at compile time, however a problem may arise if the we want the Student to instead attend the LiteratureSchool. The code will need to change its dependency accordingly:
</p>

```java{numberLines:true}

public Student(){
    schoolService = new LiteratureSchool();
}

```

<h4>Implementing dependency injection</h4>
<p>
Dependency injection will refactor the Student class so it references pre-existing instances rather than creating new Objects.
As a result, each class is no longer responsible for creating instances of other classes, and their dependency is instead <i>injected</i> through an argument.
</p>
<p>
A simple solution to the above code problem could be to inject the dependency as an argument. The Spring framework offers two other ways to inject dependency through the constructor and through a setter method:<br>
&#8226; Constructor injection: using the client constructor to take in the service injection as an argument.<br>
&#8226; Spring constructor injection: using a Spring bean and @Autowired to inject the bean as a dependency.<br>
&#8226; Spring setter injection: .<br>
</p>

<strong>Constructor dependency injection</strong>
<p>
A constructor parameter can take in a dependency as an argument to assign the Object to the class.
Rather than the Student class defining the type of SchoolService, the responsibility is delegated from the class that instantiates the Student to define.
</p>

```java{numberLines:true}
public class Student{

        SchoolService schoolService;

        public Student(SchoolService schoolServiceArgument){
            this.schoolService = schoolServiceArgument;
        }
    }

```
<strong>Spring Constructor dependency injection</strong>
<p>
The Spring framework offers annotations that, when used together, can inject dependencies into the application:<br>
Before using Spring for dependency injection, it is important to ensure the annotation0driven injection is enabled in the AnnotationConfigApplicationContext class:
</p>

```java{numberLines:true}

@Configuration
@ComponentScan("com.aneesh.studentPackage")
public class AppConfig{

    ...

```
<strong>The @Autowired annotation</strong>
<p>
The Autowired annotation is used in Spring 

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
Dependency injection improves code readability as boilerplate code for creating Object instances are delegated to the class that calls the method. 
</p>

<br>
<h4>Conclusion</h4>
<p>
Dependency injection 

</p>

<br>
<small style="float: right;" >Picture: Tissamaharama, Sri Lanka by <a target="_blank" href="https://unsplash.com/@roxannedesgagnes">Roxanne Desgagnés</small></a><br>