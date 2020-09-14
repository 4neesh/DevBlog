---
title: 'Data Access Object pattern'
date: 2020-09-07 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
thumbnail: ''
subtitle: 'Use the data access object pattern to isolate the business and persistance layers within a Spring application.'
time: '8'
tags:
- Java
- Spring
- Databases
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand what the DAO pattern is and when it is used.<br>
&#8226; Understand the benefits of using the DAO pattern for complex multi-tier applications.<br>
&#8226; Implement the DAO pattern to integrate with a MySQL database.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>The Data Access Object (DAO) pattern</h4>
<p>
The DAO pattern is used within software development to separate the service layer from the persistence layer of an application. The service layer of an application will apply business logic to a user request that is received from a controller and will send the request to the repository layer where it is persisted into a database. To learn more about the multiple layers of an application, I have written a blog about Spring annotations <a href="https://aneesh.co.uk/spring-architecture-layers">here</a>.
<p>

<p>
The DAO pattern uses dependency inversion to loosely couple the service layer from the persistence layer. As the application grows in complexity, the separation of the two layers can prove valuable as further logic is required to process requests and additional persistence capabilities are enabled. 
</p>

<p>
In this blog post, I will cover the two layers that make the DAO pattern in a demonstration using Spring for inversion of control and MySQL for persistence. I will also include the use of the entity class and controller for simple use of the layers.
</p>

<h4>A top-down view of the DAO pattern</h4>
<p>
The DAO pattern is split in half, where the business layer intercepts a request from the controller and passes it through to the persistence layer to interact with the database.
The request will flow between each layer according to the diagram below.

</p>

<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>