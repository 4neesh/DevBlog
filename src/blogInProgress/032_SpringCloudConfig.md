---
title: 'Centralising configuration within a distributed application'
date: 2020-11-23
author: 'Aneesh Mistry'
featuredImage: ../images/032_jordan.png
subtitle: 'Use Spring Cloud Config to create a configuration server and to use the values within the application'
time: '10'
tags:
- Spring
- Microservices
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Use Spring Cloud Config for externalised configuration in a distributed system.<br>
&#8226; Understand how to configure the server and how properties are scanned with priority.<br>
&#8226; Consume the config server to represent different environments.<br>

<br>
<h4>Centralised configuration</h4>
<p>
Configuration in an enterprise environment can be used for different environments.
In this case, I will use the configuration to change the behaviour without having to change runtime behaviour.
One example may be to change the location of servers of environment variables.
Configuration is externalised for a modular architecture.
By centralising configuration, the risk of different environment relying on a local file or falling out of sync is reduced. Environment variables can be tracked and maintained across environments. Services may also require restarting if they rely on environment variables, whereas with a config server, they will not.
We use configurations to represent all the changes that might take place between deployments. For example, this could include login credentials, connections to database versions, hostnames and also logging levels. Configurations for services within a Spring Boot application is often defined within the application.properties file. 
The externalised configuration provides a configuration to multiple services at the same time to reduce the repetitive configuration code that is required.
</p>
<p>
Spring Cloud Config is designed to store and server distributed configuration to its clients. 
It uses different storage medium, but is ideally version controlled with git. 
Services can later use the config server as a REST service to obtain values for their properties.
In this example, I will use GitHub to host the configuration server for remote configuration.
We use Spring Cloud Config server.

![Spring Config Server diagram from client to git](../images/032_configDiagram.png)

//insert diagram for it
</p>

<br>
<h4>Creating a Config Server</h4>
<p>
A Spring Config server can be created by using the Spring Config Server dependency:

```
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-config-server</artifactId>
</dependency>

```
The server can be activated through a single annotation in the main class:

```java{numberLines:true}
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigServerApplication.class, args);
	}

}
```

The <code>@EnableConfigServer</code> annotation will activate the server to act as a REST service to find key-value pairs from properties files to be included for reference by clients.
</p>

<br>
<h4>Configuring the server</h4>
<p>
The server valuescan use many different medium for storing the configuration values including JDBC, Redis, or AWS S3. The default storage is git as used in this demo.
The values of the configuration will scan a directory within the server to return a hierarchy of values:

```{numberLines:true}
server.port= 8888
spring.cloud.config.server.git.uri = https://github.com/4neesh/StockPriceMicroservice
spring.cloud.config.server.git.searchPaths=
          - Config*
          - ConfigFiles/tech*

```
The first line will host the Config server on port 8888.
Line 2 will specify where the server will look up the config git repository
Line 3 onwards defines the search paths to find the appropriate '.properties' files to be included in the configuration server.
</p>
<p>
The ConfigFiles/tech search path will search all properties files within the ConfigFiles/tech folder:
- /ConfigFiles//home-prod.properties
- /Config/home-prod.properties

It is important to point the spring.cloud.config.server.git.uri to the base of the git repository where the properties are stored. The search paths will later provide the appropriate search depth of the repository to find the appropriate files.
The Config* search path will retrieve all properties files within the /Config folder:
- /Config/garden-prod.properties
- /Config/garden-dev.properties
- /Config/home-prod.properties
- /Config/home-dev.properties

</p>
<br>
<h4>Adding the properties files</h4>
<p>
The properties files are added to the Git repository. They are used to define different values
The Configuration properties folder is added to the Git repo and folders are held within it to store the default application.properties file, and the tech or automotive properties file depending on the stock to be analysed.
</p>
<br>
<h4>Configuring the server</h4>
<p>
<code>@EnableConfigServer</code> is an auto-configure annotation that instructs the service to behave as a configuration server, to connect to a configuration storage and to be used as a service such sense.
Spring cloud config dependency is needed.

The config server will act as an intermediary between the spring application and the configuration files.

</p>
<br>
<h4>Connecting the server to the configuration files</h4>
<p>
In the server application.yml  file, we are able to connect to the configuration files in github. <br>
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
<h4>Navigating the Config server</h4>
<p>
The config server can be browsed by sending GET requests to the 8888 port.<br>
I am using the Postman API development tool to make the requests and to illustrate the different values that can be returned.
The naming convention for the config files will be {application name} - {active profile}.
</p>
<p>
We are able to send a request to the port 8888 with the following name convention:<br>
/{application}/{profile}
/{application}-{profile}
/{application}-{profile}.properties

</p>
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
Need to load the configuration server before the application uses its local properties by defining the server in the bootstrap.properties file.
That way the config server takes precedence over the local properties that are defined. 
</p>
<p>
Below property can be used to clone the server into the local service when it starts.
```
spring.cloud.config.server.git.clone-on-start
cloud.config.uri=
spring.application.name=
spring.profiles.active=default
```
//good one to use. 
</p>

<p>
The client can use a RestController to obtain the values from the config server:

```java{numberLines:true}
@RestController
public class ClientController{

  @Value
  public String home;

  @GetMapping("/home")
  public String getHome(){
    return home;
  }

}

```
</p>

<br>
<h4>Summary</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: Petra, Jordan by <a target="_blank" href="https://unsplash.com/@aqaisieh">Ahmad Qaisieh</small></a><br>