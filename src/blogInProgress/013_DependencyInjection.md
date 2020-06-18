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
The SchoolService Object is therefore injected into the Student Object to be used. Dependency injection falls under the broader design of 'inversion of control'. Inversion of control enforces the fifth principle of SOLID whereby a client is not responsible for injecting its own dependencies, but has delegated it to an injector class. Inversion of control transfers the control of Objects to a framework. 
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
The Student Object will create the ArtSchool at compile time, however a problem may arise if the we want the Student to instead attend the LiteratureSchool. The code will need to change its dependency accordingly:
</p>

```java{numberLines:true}

public Student(){
    schoolService = new LiteratureSchool();
}

```

<br>
<h4>The benefits of dependency injection</h4>
<p>
By using dependency injection, the application has delegated the responsibility of creating Objects away from the individual classes, and into a single framework. The task execution is decoupled from implementation and a further degree of modularity is achieved. Further benefits can be seen from unit-testing where components can be mocked and passed with dependency injection for more concise testing units.
</p>

<h4>Implementing dependency injection</h4>
<p>
By using dependency injection, the Student class will be refactored so that it references a pre-existing instance of the SchoolService rather than instantiating it itself.
</p>
<p>
The most common methods to implement dependency injection are through the constructor or by using the Spring framework:<br>
&#8226; Constructor injection: using the client constructor to take in the service injection as an argument.<br>
&#8226; Spring constructor injection: using a Spring bean and @Autowired to inject the bean as a dependency.<br>
&#8226; Spring setter injection: .<br>
</p>

<strong>Constructor dependency injection</strong>
<p>
A constructor parameter can take a dependency as an argument to be used by the class.
Rather than the Student class defining the type of SchoolService it depends upon, the responsibility is delegated to the class that instantiates the Student instance:
</p>

```java{numberLines:true}
public class Student{

        SchoolService schoolService;

        public Student(SchoolService schoolServiceArgument){
            this.schoolService = schoolServiceArgument;
        }
    }

```

<p>
As a result, the Student class will use the argument to define which schoolService it will depend upon.
</p>
<strong>Spring Constructor dependency injection</strong>
<p>
The Spring framework offers annotations that can inject dependencies into the class.<br>
Before using Spring for dependency injection, it is important to ensure the annotation-driven injection is enabled in the AnnotationConfigApplicationContext class:
</p>

```java{numberLines:true}

@Configuration
@ComponentScan("com.aneesh.studentPackage")
public class AppConfig{

    ...

```
<strong>The @AutoWired annotation</strong>
<p>
The AutoWired annotation is used in Spring 

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