---
title: 'Architecture levels in Spring'
date: 2020-06-01 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.png
thumbnail: ''
subtitle: 'Understand the three layers of a  Spring application and the convenient annotations used to label classes of each layer. Compare the annotations against each other to understand why they add value to the application and for the developer.'
time: '10'
tags:
- Spring
- Patterns
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand the different layers to a Spring application.<br>
&#8226; Explore the role and importance of the Spring IoC container.<br>
&#8226; Understand the differences between the @Component, @Controller, @Service and @Repository class annotations.<br>

<br>
<h4>Spring application architecture</h4>
<p>
The architecture of a Spring application may refer to the organisation of packages and classes between each other and functions in and around each class. The Separation of Concern (SoC) design principle aims to achieve an architecture where delegated sections address related functions of the application. SoC greatly supports the long-term maintenance and growth of the application and discourages code rot.
</p>
<p>
The Spring framework architecture uses 3 layers to separate concerns between classes and functions based upon their responsibility.
Each layer is placed to communicate with the layer above and/or below it. The layers include:<br>
&#8226; API/Web layer. Used to accept and authenticate user input and handle HTTP requests. Spring MVC is used to separate the web view, the servlet controller and the model objects.<br>
&#8226; Service layer. Interacts with the API layer and model objects to provide authorization and custom business logic processing. <br>
&#8226; Data access/integration layer, also known as Repository layer. The basic CRUD operations are exposed in the data access layer to send operations to the database. Object to relational mapping (ORM) is used to integrate data to and from the database with DAO. <br>
</p>

<br>
<h4>Separating layers into a request and response</h4>
<p>
The diagram below illustrates the layers of a Spring application and how it would handle a request made by a user.
</p>

![Spring layers](../../src/images/015layers.png)

<p>
A user request is first intercepted by the API layer. The API layer is used to handle HTTP requests such as GET, PUT, DELETE and POST.
</p>
<p>
The request can then be processed by the service layer to implement business logic. Such logic may include checking authorisation, transforming the request or logging. 
</p>
<p>
The data access/integration layer transforms the request using ORM to interact with the database. The database is persisted outside the layer and will return a response that is then relayed back to the user.
</p>

<br>
<h4>Spring Inversion of Control Container</h4>
<p>
Before we look into the different Spring class annotations, we will review the Spring IoC container and the role of beans. Different class annotations will influence the automatic properties of the beans they create. The beans are customised to accommodate to the functions of the layer.
</p>
<p>
The Spring IoC Container is a core Spring Framework component. The IoC container is responsible for creating, wiring, managing and configuring objects to be used by the application. The components that make the application are injected by the framework using dependency injection.
</p>
<p>
There are two types of containers within the Spring Framework:<br>
&#8226; BeanFactory.<br>
&#8226; ApplicationContext.<br>
</p>
<p>
<strong>BeanFactory</strong><br>
The BeanFactory is responsible for maintaining the registry of different beans and their dependencies.<br>
Beans are then injected into the classes that depend upon them. 
</p>
<p>
<strong>ApplicationContext</strong><br>
The ApplicationContext container contains the same functionality of the BeanFactory, however it also includes functionality load file resources, to publish events to event listeners and to resolve messages for internationalisation support.
</p>

<br>
<h4>Spring class annotations</h4>
<p>
The Spring class-level annotations are used during automatic bean detection using the classpath scan of the Spring framework.
The class-level bean is then used within the IoC container of Spring to inject dependencies within the application.<br>
The following annotations are applied to a class according to layer they fall within. Each annotation carries certain benefits to the class implementation and to the developer for readability.
</p>
<strong>@Component</strong><br>
<p>
The @Component annotation is the parent annotation to the other layer-level annotations @Controller, @Service, and @Repository.<br>
Classes marked with @Component will be automatically detected by the Spring framework and added to the ApplicationContext.<br>
The @Controller, @Service, and @Repository annotations all use @Component in their definition, therefore their use also results in the class being added into the ApplicationContext.
</p>

<strong>@Controller</strong><br>
<p>
@Controller is a specialised version of @Component to be used for classes at the API/web layer. When a class is marked with @Controller, the Spring ApplicationContext will register the class as a bean, and the class will be looked upon differently for web-specific tools and services.
Dispatcher servlet will look for @RequestMapping annotated classes within all @Controller classes for instructions. 
</p>

<strong>@Service</strong><br>
<p>
@Service is a wrapper version of @Component and is used to mark the class as a service.
The service class will provide business logic functionality to process requests before passing them to the data access layer for persistence.
</p>
<p>
The @Service annotation does have any specific behaviour that is different to @Component, however service classes should be marked with @Service to mark the intent of the class to the service layer within the application.
</p>

<strong>@Repository</strong><br>
<p>
The @Repository annotation differs from @Component for the single purpose of catching persistence-specific exceptions.<br>
The @Repository annotation will import the DAO beans into the ApplicationContext container and change the unchecked exceptions eligible for translation into a DataAccessException.
The annotation provides enhanced functionality for exception handling.
</p>

<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>