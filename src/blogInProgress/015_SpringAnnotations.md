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
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>Spring application architecture</h4>
<p>
The design architecture of an application is necessary to consider to ensure a the Separation of Concerns (SoC) principle is implemented. SoC is a design principle to ensure an application has delegated sections to address separate concerns. By using SoC, understanding where responsibilities lie within a complex application can be improved and handled more efficiently.<br>
The Spring framework offers 3 key layers that can be used to designate classes and functions of an application during the design phase.</p>
<p>
The Spring layered architecture is designed such that each layer can communicate with the layer either above or below it. The different layers include:<br>
&#8226; API layer. Used to authenticate and handle HTTP requests. This layer is concerned with the front-end interface of the application.<br>
&#8226; Service layer. Interacts with the API layer to provide authorization and processing of custom business logic. The business layer uses services to perform logic.<br>
&#8226; Persistence layer. Also known as the repository layer, the persistence later interacts between the service and database layer to translate service objects to and from the database.<br>
&#8226; Data access layer. Use to perform CRUD operations upon the database as requested by the persistance layer. <br>

</p>
<br>
<h4>Separating layers into a request and response</h4>
<p>
The below example illustrates the layers of an application and how it would be handled by a request made from a user.
</p>

<p>
When a user makes a request, it is first intercepted by the Presentation layer. The service 
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