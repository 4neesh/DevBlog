---
title: 'Testing the Entity Manager API'
date: 2021-12-13
author: 'Aneesh Mistry'
subtitle: 'Use matchers to improve the readability of assertions with the assertJ library'
time: '7'
tags:
- Java
- Testing
---

<br>
<h4>Testing the EntityManager</h4>
<p>

Use Mockito to create stubbed query responses when testing implementations of the Entity Manager API. 
The Entity Manager API is used to create instances for persistance that fall on the repository layer of a Spring Boot application. 
The Entity Manager will manage the lifecycle fo the entity instances for persistance, and can be highly important when persisting and managing data for an application.

This video will use Mockito to stub an EntityManager and Query to control the response of an EntityManager for testing a simple select query.

[![YouTube video link](../images/082_entityManager.jpg)](https://youtu.be/daHupokH4us )
</p>
