---
title: 'Spring cloud configuration'
date: 2020-06-01 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.png
subtitle: 'xxx'
time: 'xx'
tags:
- Spring
- Microservices
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

<br>
<h4>Spring Cloud</h4>
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
We use Spring Cloud Config server
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
In the server application.properties file, we are able to connect to the configuration files in github. <br>
In the application.yml file, the below lines are added:

</p>

```{numberLines:true}
server:
  port: 8888
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/4neesh/StockPriceMicroservice
          searchPaths:
          - Config*
          - ConfigFiles/tech*
```

<p>
Lines 1 and 2 set the server port to 8888, this is a conventional port number used for the configuration server.
The remaining lines allow the server to connect to the GitHub repository to obtain the config files.<br> 
The uri value is where the .git file exists within the repository. It is important to point directly to the area of the .git file as the configuration server will clone the repository before using it.<br>
The searchPaths include the sub-directories for the configuration files. In the github repository, the config files are stored in the ConfigFiles sub-directory. Further config files are stored in a directory called "tech". <br>
When defining the searchPaths, it is important to define them in order of granularity. If ConfigFiles/tech* was placed before Config*, the searchPaths would not perform as expected.
</p>

```

├── ConfigFiles
│   ├── application.properties
│   ├── application-dev.properties
│   └── tech
│         ├── acn.properties
│         └── acn-dev.properties


```

<br>
<h4>Browsing Config Files</h4>
<p>
The config server can be browsed by sending GET requests to the 8888 port.<br>
I am using the Postman API development tool to make the requests and to illustrate the different values that can be returned.
</p>
<p>
We are able to send a request to the port 8888 with the following name convention:<br>
localhost:8000/{application}/{profile}</p>
<p>
The application and profile variables are required parameters when making calls to the configuration server.<br>
The application specifies the first part of the file name that is reviewed. In this instance, the available names are "application" and "acn". By default, "application" is returned.</p>
<p>
The profile is used to specify the environment of the configuration file. The "default" profile will return the files without a profile, however if "dev" was entered, the dev property files will be returned. The profile tells the config server which files to prioritise when processing, however the application name is considered as the first place to look following the exact profile and application combination.</p>
<p>
For example, the following queries will return the following results:<br>
1. localhost:8888/acn/dev -> acn-dev.properties -> acn.properties -> application-dev.properties
2. localhost:8888/application/default -> application.properties
3. localhost:8888/acb/dev -> application-dev.properties -> application.properties
4. localhost:8888/acn/default -> acn.properties -> application.properties
</p>
<p>
As the config server works its way down the chain of files to review, it will populate config values that are not already populated.
</p>
<p>
By sending a request to: localhost:8888/acn/master, the configuration files returned will be the application.properties file and the acn.properties file.<br>
This means it will reach acn.properties first, then populate other configuration values from the application.properties file after.</p>
<p>
If an invalid application or profile name is entered, the returned values will be for the application.properties file.<br>
</p>

<br>
<h4>Consuming the configuration server</h4>
<p>

</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>