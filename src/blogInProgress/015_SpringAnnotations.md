---
title: 'Architecture levels in Spring'
date: 2020-06-01 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.png
thumbnail: ''
subtitle: 'The Spring framework covers several levels of architecture that are conveniently addressed through annotations. Explore the core annotations that direct the framework to the levels.'
time: '10'
tags:
- Spring
- Patterns
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand the key layers to a Spring application architecture.<br>
&#8226; Explore the role and importance of the Spring IoC container.<br>
&#8226; Understand the significance and differences between the @Component, @Controller, @Service and @Repository class annotations.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>Spring application architecture</h4>
<p>
The architecture of a Spring application relates to the organisation of classes and functions. The Separation of Concern (SoC) design principle is used to ensure an application has delegated sections to address separate concerns. By separating the different classes of an application based upon its responsibility, the overall architecture of the application supports the long-term maintenance and growth of the application and discourages code rot.<br>
The Spring framework architecture uses 3 key layers that can be used to designate classes and functions based upon their responsibility.</p>
<p>
Each layer within the architecture is designed to communicate with the layer above and/or below it. The layers include:<br>
&#8226; API/Web layer. Used to accept and authenticate user input and handle HTTP requests. Spring MVC is used to separate the web view, the servlet controller and the model objects which are later handled by the service layer.<br>
&#8226; Service layer. Interacts with the API layer to provide authorization and processing of custom business logic. <br>
&#8226; Data access/integration layer, also known as Repository layer. The basic CRUD operations are exposed in the data access layer to send operations to the database. Object to relational mapping (ORM) is used to integrate data to and from the database. <br>
</p>

<br>
<h4>Separating layers into a request and response</h4>
<p>
The below example illustrates the layers of a Spring application and how it would be handled by a request made by a user.
</p>

![Spring layers](../../src/images/015layers.png)

<p>
When a user makes a request, it is first intercepted by the API layer. The API layer is used to handle HTTP requests such as GET, PUT, DELETE and POST.
</p>
<p>
The request can then be processed by the service later to implement business logic. Such logic may include authorizing the request, transforming the request or logging. 
</p>
<p>
The data access/integration layer receives the request by the user and transforms the request using ORM to interact with the database. The database is persisted outside the layer and will return a response that is then relayed back to the user.
</p>

<br>
<h4>Spring IoC Container</h4>
<p>
Before we look into the different Spring class annotations, we will review the Spring IoC container and what beans are. The different class annotations define different type of beans with various automatic configurations to cater for their existence at a particular layer.
</p>
<p>
The Spring Inversion of Control Container is a core Spring Framework component. The IoC container is responsible for creating, wiring, managing and configuring objects to be used by the application. The components that make the application are injected by the framework using dependency injection.
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
@Service is used for the business logic
@Controller is used for the API layer
@Repository is used for the data access layer
</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>