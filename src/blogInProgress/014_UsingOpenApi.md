---
title: 'Using an Open API'
date: 2020-07-06 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.png
thumbnail: ''
subtitle: 'Explore the use of Open APIs and how they can return data to a service with Spring Rest.'
time: 'xx'
tags:
- Spring
- Microservices
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand what an API is and how they work.<br>
&#8226; Use Spring to make GET requests to the API.<br>
&#8226; Explore how the GET request can be broken down and used within a service.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>What is an API?</h4>
<p>
An "application programming interface", abbreviated to "API" is a software intermediary between applications. I like to think of an API as the waiter between you (the client) and your meal (the data) in a restaurant.<br>
APIs allow applications to speak to each other. When an application request is made, it will send the data message to the server where it is interpreted and a response is returned. The application will then interpret the response and display the output to the user.<br>
APIs are all around us in the applications we use; they provide new bounds of opportunities for the information an application can retrieve and interact with.
</p>
<br>
<h4>RESTful APIs and CRUD</h4>
<p>
The term "REST" in computer systems stands for "Representational state transfer". A RESTful state is an API that uses HTTP requests to access and modify the data. As a result, RESTful APIs expose data to the be consumed by our applications.<br>
CRUD operations are the four basic functions of persistent storage. RESTful APIs allow CRUD operations to be performed given their sensitivity. The CRUD operations, and their HTTP request names are as follows:<br>
&#8226; CREATE: A new data entry can be made with the <strong>POST</strong> HTTP request.<br>
&#8226; READ: Data can be read with a <strong>GET</strong> HTTP request.<br>
&#8226; UPDATE: Data can be updated with a <strong>PUT</strong> HTTP request.<br>
&#8226; DELETE: Data can be deleted with a <strong>DELETE</strong> HTTP request.<br>

In the following example, I will send a GET request using the Spring framework to access a RESTful API service.
</p>
<br>
<h4>Performing a GET Request with Spring</h4>
<p>
In this example, I will be using the free RESTful API service by currencyapi.net to obtain the currency conversion rate for the USD. <br>
</p>
<strong><u>Setting up Spring</u></strong><br>
<p>
The Spring RestTemplate class offers template methods for making HTTP requests of RESTful API services. 
The RestTemplate class is obtained through the spring-boot-starter-web dependency:
</p>

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

```
<p>
In the main application class, I will create an instance of the RestTemplate in a bean to be later injected:
</p>

```java{numberLines:true}
@SpringBootApplication
public class CurrencyGetDemo {
	
	public static void main(String[] args) {
		SpringApplication.run(CurrencyGetDemo.class, args);
	}

	
	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}
}
```
<p>
The RestTemplate is injected into a class that contains a RestController. The API is then called upon with a GET Mapping:
</p>

```java{numberLines:true}
@RestController
public class APIController {

	@Autowired
	private RestTemplate restTemplate;
	
	@GetMapping("/currency-conversion")
	public String getPrices(){
		String key = "???";
		String url = "https://currencyapi.net/api/v1/rates?key=" + key;
		return this.restTemplate.getForObject(url, String.class);

	}
	
}

```

<p>
There quite a few points to take from the class above, so I will break it down line by line:
<br>
On line 1, the <strong>@RestController</strong> annotation is used to mark the class as a request handler. The annotation will be responsible for mapping request data to the defined request handler method.<br>
On line 4 and 5, the RestTemplate is injected into the class. The RestTemplate will be used as a service for making the GET request.<br>
On line 7, the <strong>@GetMapping</strong> annotation is used to map the request to the "/currency-conversion" handler. GetMapping was introduced in Spring 4.3 as an amalgamation of @RequestMapping and method=RequestMethod.GET.<br>
Lines 9 and 10 define the URL for the RESTful API. On line 9, I have entered my API key which can be obtained by signing up to <a target="_blank" href="https://currencyapi.net">https://currencyapi.net/</a>. An API key is a unique identifier to authenticate a user and define the type of requests they can make to the service. Premium services will enable higher frequency and different types of requests to be made.
<br>
Line 11 uses the RestTemplate instance by passing in the url and mapping the response to a String.
</p>

<p>
Once the class is set-up, we the Spring application can be run and the output from the API can be found on localhost:8080/currency-conversion.
</p>
The Spring web 
@RestTemplate

@getObjectAs


<br>
<h4>Parsing content into an Object</h4>
<p>


</p>
<br>
<h4>Conclusion</h4>
<p>
APIs have been a revelation to data consumption as they provide a predictable pattern to be consumed and operated upon.
The Spring framework offers convenient annotations in @

</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>