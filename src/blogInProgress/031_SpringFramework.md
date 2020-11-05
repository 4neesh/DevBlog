---
title: 'Why Spring Boot saves the developer'
date: 2020-10-09
author: 'Aneesh Mistry'
featuredImage: ../images/031_tokyo.jpg
subtitle: 'Understand how Spring Boot emerged as a solution to the challenges from the Spring Framework '
time: '10'
tags:
- Spring
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand why the Spring framework is popular and what it provides developers.<br>
&#8226; Review the main IOC containers provided with Spring.<br>
&#8226; Understand how Spring Boot Autoconfiguration enables convention over configuration.<br>

![Merge sort step 2](../images/011MergeSort2.png)

<br>
<h4>The Spring framework</h4>
<p>
<a href="https://spring.io/" target="_blank">Spring</a> is an open source application framework and inversion of control container for Java. 
Spring offers comprehensive support to the developer for building applications with functionalities including testing, data access, web frameworks and messaging support. 
The popularity of Spring, which is over 18 years old, has been realised as a from its light-weight design that supports organisation and control of modules with inversion of control.
</p>

<br>
<h4>Key features of the Spring framework</h4>
<p>
The inversion of control (IOC) container serves as the most valuable feature Spring offers the developer to support <strong>dependency injection</strong>.
The IOC container is complementary to the final principle in SOLID 'dependency inversion'. Dependency inversion creates loosely coupled classes within the application design. Loose coupling will ease the testing of components on their own as well as managing the growth of the application with new behaviours. You can read about the dependency inversion in more detail from my previous <a href="https://aneesh.co.uk/dependency-inversion-principle" target="_blank">blog</a>.
</p>
<p>
In addition to the IOC container, the Spring framework also provides out-of-the-box support for many features...
</p>
<strong>Aspect-orientated programming</strong>, also known as AOP, enables cross-cutting concerns to be injected for method calls within the application. With AOP, the process of calling methods can be broken down into parts where logic can be injected in a modular fashion. You can read more on AOP in my blog <a href="https://aneesh.co.uk/implementing-aop-in-a-spring-application" target="_blank">here</a>.
</p>
<p>
<strong>Security</strong> is provided by Spring for authentication, authorisation and other security features. Spring security provides support to authorisation protocols such as Kerberos, OAuth and SAML. The value with Spring security extends to the ease of implementation and customisation into enterprise applications. 
</p>
<p>
<strong>Transaction management</strong> is supported by Spring against the ACID principles of integrity and consistency. When an application makes a transaction to a database, the ACID principles of atomicity, consistency, isolation and durability are important to meet to ensure transactions are orderly, complete and correct. The Spring framework provides an abstract layer underpinning both local transactions in a centralised system and global transactions in a distributed system.
Spring provides an object relational mapping of data where support for integration with Hibernate, Java persistence API and data access object implementations can be configured for implementation in the IOC container.
</p>
<p>
<strong>Model-view controller framework</strong>, also known as MVC, is an industry-standard design pattern used for developing front-end interfaces that support scalable applications. MVC defines three components of the application: the view represents the interface that stores the controllers. The controllers accept a model of information from the view which is in-turn returned through an updated view or API call to the database. The controller acts as an interface between the model and view to process requests and logic from the user.
</p>

<br>
<h4>The Spring Beans and IOC</h4>
<p>
Spring achieves IOC by defining a 'container' to store the Objects that are later injected to the application. The Objects stored within the container are known as 'beans'.
The IOC container can exist in many different configurations, however they are largely divided into <strong>BeanFactory</strong> and <strong>ApplicationContext</strong>.
</p>
<h5>Spring Beans</h5>
<p>
A Spring Bean contains a set of instructions for creating an Object; by default, the Object is created as a singleton within the application. The bean is later injected as and when it is required by the application. 
The way which Spring Beans are defined is dependent on the IOC container that is used. Spring beans can be defined and injected using XML or annotations. For XML files, beans are defined within the configuration file, and are injected by defining an 'autowire' property to the class configuration. Alternatively, beans can be defined within a class marked as '@Configuration' and injected by using the '@Autowired' annotation. An example of the two methods exist below:

XML-based 

```
<beans>

    <bean id="car" class="com.f1.Car"/>

    <bean id="race" class="com.f1.Race" autowire="byName">
        <property colour="yellow">
    </bean>

</beans>
```

The race instance will obtain the car through an autowire property and assign it to the Car instance it references.

Annotation-based

```java{numberLines:true}
public class Car{
    String colour;
}
```
```java{numberLines:true}
@Configuration
public class ConfigClass{

    @Bean
    public Car getCar(){
        return new Car();
    }
}
```
```java{numberLines:true}
@Component
public class Race{

    @Autowired
    Car carToRace;

}
```
</p>
<p>
The two most common IOC containers, the BeanFactory and ApplicationContext are determined by the developer in the Spring framework. The ApplicationContext is significantly more popular as recommended by the <a href="https://docs.spring.io/spring-framework/docs/2.5.x/reference/beans.html#context-introduction-ctx-vs-beanfactory">documentation</a>: <i>'use an ApplicationContext unless you have a really good reason for not doing so.'</i> The motivations for using the BeanFactory over the ApplicationContext are limited to only when memory usage is a valuable metric to the application as the BeanFactory can help reduce the memory-load of default ApplicationContext features.
</p>
<h5>BeanFactory</h5>
<p>
The BeanFactory is an interface that is most commonly used through the <code>XmlBeanFactory</code> implementation. The BeanFactory is instantiated within the application using the following dependency:

```
    <dependency>
	    <groupId>org.springframework</groupId>
	    <artifactId>spring-beans</artifactId>
	    <version>5.2.8.RELEASE</version>
	</dependency>

```

The instantiation of the BeanFactory  will take in a Resource instance to locate the configuration file of the beans:

```java{numberLines:true}
    Resource res = new ClassPathResource("beans.xml");
    BeanFactory beanFactory = new XmlBeanFactory(res);
```
The BeanFactory acts as a container and is responsible storing, configuring and managing beans. The dependencies between beans are partly configured within the BeanFactory, otherwise they are created at runtime. The BeanFactory will be responsible for managing the bean lifecycle and association between beans. 
</p>
<p>
The XmlBeanFactory will define bean definitions through xml which are later instantiated upon request by the client within the application. 
The below XML configuration will use the BeanFactory to create bean of the Person class:

```java{numberLines:true}
public class Person{
    
    public Person(String name, int age){
        this.name = name;
        this.age = age;
    }

    String name;
    int age;
}
```
beans.xml file:
```
<bean id="tigerWoods" class="com.sport.Person">
    <constructor-arg name="name" value="Tiger Woods"/>
    <constructor-arg name="age" value="41"/>
</bean>
```
The <strong>tigerWoods</strong> bean will create a Person of name "Tiger Woods" and of age 41.
The beanFactory can be used to obtain the bean:

```java{numberLines:true}
    Person person = (Person)beanFactory.getBean("tigerWoods");
```
</p>

<h5>ApplicationContext</h5>
<p>
The ApplicationContext is a an advanced Spring container available from Spring 3.0 that offers specific framework-orientated enterprise functionality as well as all BeanFactory features.
While the BeanFactory supports only xml-configuration of beans, the ApplicationContext differs as it additionally supports annotation-based configuration that can be applied within the application code. 
The ApplicationContext extends from the BeanFactory to provide further functionality of bean integration with application-layer features such as AOP, event propagation and message resource handling.
Functionality across the bean lifecycle is further enhanced with ApplicationContext Post Processor, Message Source access and Bean Post Processor registration. 
</p>
<p>
ApplicationContext can read textual messages from the properties and also to publish events to listeners.
</p>
<p>
The ApplicationContext container can be implemented by defining an instance of the interface with an implementation:

```java
ApplicationContext context = new ClassPathXmlApplicationContext();
```
adding a bean in the xml configuration file:
```
<bean id="tigerWoods" class="com.sport.Person">
    <constructor-arg name="name" value="Tiger Woods"/>
    <constructor-arg name="age" value="41"/>
</bean>
```
and retrieving the bean from the sourceCode:
```java
Person tiger = (Person)context.getBean("tiger");
```
Annotation-driven configuration can be defined in the application code:

Creating a bean within a configuration class:
```java
@Configuration
public class PersonConfig{
    
    @Bean
    Person getTiger(){
        return new Person("Tiger Woods", 41);
    }
}
```
and retrieving the bean with the <code>Autowired</code> annotation:
```java
@Autowired
Person person;
```
</p>

<br>
<h4>Spring's common pitfalls</h4>
<p>
The benefits of the Spring framework introduced new difficulties to the developer that were otherwise non-existent.
The problem of Object management and complex dependency injection had been replaced by excessive xml configuration, most of which was boilerplate code implementations. 
The complexity of the Spring framework and the modules it supported emphasised the time-consuming management of xml configurations to the developer. 
</p>
<p>
One example that captures the challenges of excessive xml configuration would be the MVC functionality. 
Before using Spring MVC, we are required to bootstrap the DispatcherServlet which is loaded during application start-up.
The DispatcherServlet is also responsible for loading the IOC container managing beans. In the WEB-INF/web.xml file, the developer will need to configure the DispatcherServlet:
</p>

```
<servlet>
    <servlet-name>servlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
       <param-name>contextConfigLocation</param-name>
       <param-value>/WEB-INF/spring/appServlet/servlet-context.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>

<servlet-mapping>
    <servlet-name>appServlet</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```
<p>
The servlet will handle incoming requests to the application thanks to the Spring xml configuration we have written. 
</p>
<p>
In April 2014, the advent of Spring Boot came as a solution to resolve the heavy configuration required with the Spring IOC framework.
</p>

<br>
<h4>Introduction to Spring Boot</h4>
<p>
Spring Boot was introduced with a precendent to <i>convention over configuration</i> with the objective of reducing the number of decisions a developer needs to make when creating a Spring application. But what does this mean?<br>
The design paradigm of convention over configuration will only require the developer to specify <u>unconventional</u> configurations for the application. A 'sensible default' is however defined for all other implementations (including DispatcherServlet for MVC).
</p>

<br>
<h4>Spring Boot features</h4>
<p>
The Spring Boot <strong>Autoconfiguration</strong> is the key feature fo Spring Boot that makes it a valuable module of the Spring framework. 
Autoconfiguration
</p>
<p>
The Spring Boot Autoconfiguration provides the most valuable feature from Spring Boot as it attempts to configure the dependencies of the classpath for the developer. Spring Boot will first scan the jars from the classpath and begin building Beans within the ApplicationContext to be used by the application. 
</p>
<p>
The simple use of MVC would require us to manually configure component scan, dispatcher servlet, view resolver and web jars (for static content).
The same applies for Hibernate where we need to configure a data source, entity manager factory and others. This is all boilerplate code and typical for a Spring application. 
Rather than adding all this configuration ourselves, Spring Boot autoconfiguration will create the beans automatically upon recognition of the MVC jar in the class-path. Autoconfiguration is the process of checking the classpath and any existing configuration (that would override the classpath) then automatically creating the application configuration. 
When we add a starter jar in the application, the autoconfiguration will configure the beans and can be seen in the log when the service is run. The instructions for autoconfiguration is found in the spring-boot-autoconfigure jar. 
The autoconfiguration will use annotations such as <code>@ConditionalOnMissingBean</code> and <code>@ConditionalOnClass</code> to configure beans based on certain rules.
</p>

<p>
Spring Boot Autoconfiguration also plays a role in the type of IOC container that is used by the Spring Boot application. Spring Boot will use the AnnotationConfigApplicationContext. If, during the Autoconfiguration scan a web starter-project is identified, the IOC container will use the AnnotationConfigServletWebServerApplicationContext. The latter of the ApplicationContext types will create, initialise and run a webserver as required by the starter-projects. The selection of the ApplicationContext further extends the functionality of Autoconfiguration to support the 'convention over configuration' framework.
</p>
<p>
The Spring Boot starter dependencies act as a package dependency which includes the related technologies required by the application thus eliminating the need to add multiple related dependencies in the same POM.xml file. The starter-dependencies extend the convention-over-configuration of Spring Boot by further reducing the configuration required by the developer.
If you were to develop a RESTful application, you would require the MVC design pattern along with database connectivity and a web server. The <i>spring-boot-starter-web</i> dependency 
encapsulates all these requirements in a single dependency.<br>
Another example could be the <i>spring-boot-starter-data-jpa</i> which provides persistence support for H2, Hsqldb and Derby databases out of the box. 
</p>
<p>
Spring Boot provides an embedded server into the jar executable application as default. Without Spring Boot, the developer would be required to install a web server that the application artifact is later deployed to. Spring Boot provides an embedded server to make the server part of the application. Spring Boot offers a default embedded server of Tomcat, however alternatives such as Jetty and UnderTow are also available. Apache Tomcat is an open source web server designed to execute Java servlets and rendering the Java Server Pages. 
</p>
<p>
Spring Boot enables the use of externalised configuration. Beans can use the <code>@Value</code> annotation to obtain their value from an external <i>.properties</i> file that can vary for each environment or use of the application code. The application
</p>


<br>
<h4>Summary</h4>
<p>
The convenience of Spring Boot to configure and create production-ready applications out-of-the-box can be realised through the 'Spring initializer' at <a href="https://start.spring.io/">start.spring.io</a>. The Spring initializer can also be used through Spring tool suite and allows the developer to specify the starter-dependencies that create the auto-configured environment. 
</p>
<p>
The Spring framework was introduced as a lightweight solution for loose-coupling and management of Java Objects with an IOC container. 
Within Spring, developers are able to create beans to be stored within the IOC container which represent instructions for creating and managing Java Objects. 
The ApplicationContext IOC container introduced annotation-based configuration and enhanced IOC bean management features. 
Following the growth and popularity of Spring, the developer became overloaded with xml configuration when using the Spring framework. 
Spring Boot introduced Autoconfiguration that uses convention over configuration to reduce the amount of configuration required when using the Spring framework. 
As a result, Spring Boot enables the developer to create out-of-the-box production-ready applications with minimal configuration. 
</p>

<br>
<small style="float: right;" >Picture: Tokyo, Japan by <a target="_blank" href="https://unsplash.com/@geniequo">Heshan Perera</small></a><br>