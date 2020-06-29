---
title: 'xxx'
date: 2020-06-01 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.png
thumbnail: ''
subtitle: 'xxx'
time: 'xx'
tags:
- xxx
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>Obtaining the stock prices</h4>
<p>
The stock prices will be received into the microservice from AlphaVantage, an open API. 
The crazzyghost wrapper class is used to read into the API and obtain the latest value.
A Stock class is created as an entity and a controller class is used to post the instance to the database.

</p>


<br>
<h4>Connecting the task to the configuration server</h4>
<p>
To begin, I will connect the class to the configuration server.
This will be used to obtain a reference to the symbol we want to receive.
</p>
<h4>Storing runtime execution</h4>
<p>
I have written about connecting a Spring cloud task into a MySql database here.
If you are using MacOS, the following steps can be used for connecting to the MySQL CLI to create a database:<br>
1. Create an alias in the terminal: alias mysql=/usr/local/mysql/bin/mysql
2. Connect to MySQL CLI: mysql --user=root -p (enter password)
3. create database stockPriceTaskRun;
4. show databases;


</p>
<br>
<h4>Connecting the Task to the MySql Database</h4>
<p>
Important to have the following dependencies:<br>

```
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
    </dependency>
			
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-jdbc</artifactId>
    </dependency>

```
</p>
<p>

</p>

<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>