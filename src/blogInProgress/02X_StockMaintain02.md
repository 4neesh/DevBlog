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
<h4>The spring cloud task will be used to register a new customer to the hotel</h4>
<p>
The spring cloud task will be used to run an asynchronous activity.
It will need to connect with the config server to obtain the rates that they will have to pay.
It will also need to connect to a database to record the values that are received each time.
The users will be stored as arguments into the task.

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
Important to have the following dependencies: mysql connector, config client, spring data jdbc and spring cloud task:<br>

```
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
    </dependency>

    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-config</artifactId>
    </dependency>
            
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-jdbc</artifactId>
    </dependency>

    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-task</artifactId>
        <version>2.2.3.RELEASE</version>
    </dependency>
```
</p>
<p>

</p>

</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>