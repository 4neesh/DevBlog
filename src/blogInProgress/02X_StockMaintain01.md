---
title: 'Stock price microservice part one'
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
<h4>Project Outline</h4>
<p>
In this series of blog posts, I am going to create an application built with Microservices to read in stock data, to record it, and so act upon changes in stock price intervals.
</p>
<p>
The technologies I will use include:
Spring cloud task (port 8002)
Spring server config (port 8888 - conventional number)
</p>

<h4>The objective of the project</h4>
<p>
We will be collecting stock prices as they change.
Using intra-day (0900:1700) stock price of a certain Stock price for a company

</p>
<br>
<h4>Centralised configuration</h4>
<p>
Configuration in an enterprise environment can be used for different environments.
In this case, I will use the configuration to change the behaviour without having to change runtime behaviour.
One example may be to change the stock of the company that is being inspected.
Configuration is externalised for a modular architecture.
By centralising configuration, the risk of different environment relying on a local file or falling out of sync is reduced. Environment variables can be tracked and maintained across environments. Services may also require restarting if they rely on environment variables, whereas with a config server, they will not.

In this example, I will use GitHub to host the configuration server for remote configuration.
</p>

<br>
<h4>Adding the properties files</h4>
<p>
The properties files are added to the Git repository. They are used to find different stock symbols, that are passed into the code to return.
The Configuration properties folder is added to the Git repo and folders are held within it to store the default application.properties file, and the tech or automotive properties file depending on the stock to be analysed.
</p>
<br>
<h4>Configuring the server</h4>
<p>
@EnableConfigServer is an auto-configure annotation that instructs the service to behave as a configuration server, to connect to a configuration storage and to be used as a service such sense.
Spring cloud config dependency is needed.

To set up the config server, you need to add "enableConfigServer" to the main class.
What does this do?
The config server will act as an intermediary between the spring application and the configuration files.

</p>
<br>
<h4>Connecting the server to the configuration files</h4>
<p>
In the server application.properties file, we are able to connect to the configuration files in github. 

</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>