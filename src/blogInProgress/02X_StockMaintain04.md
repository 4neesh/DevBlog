---
title: 'Using Sleuth and Zipkin to understand latency'
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
<h4>Understand where latency is happening</h4>
<p>
This allows us to see all the components in the microservice application
You can see the end-to-end latency 
therefore you can understand the actual behaviour of the application and all calls made to services between services

</p>

<h4>Spring Cloud Sleuth</h4>
<p>
Allows you to understand architecture and automating communication of channels.


</p>

<br>
<h4>Anatomy of a call</h4>
<p>
Span is the individual operation that happens (includes timestamps)
Trace is an end to end latency graph that is made up of spans
Annotation is a timestamp event:
- client sent (request has been made) start of a span
- server received (server obtained request). Server received - client sent = network latency
- Server sent: request has been processed and will return a response. server received - server sent = processing time.
- client received = response from server has been received.

Tracer = run inside the inside the app to create the span. Must be efficient and work out of band to not affect application. 
</p>

<br>
<h4>Adding Sleuth</h4>
<p>
Sleuth can be added with a dependency:
Spring cloud sleuth

{add dependency image}

and Also add the logger into the controller.
The logger will provide us with span id and trace id in the console.

make sure you add the logging information in the application.properties.



If we run the api from postman, we can see the INFO statements
```
CustomerDetailService,fff50ef1213e17ae,e5cc8762d33c514b,true
```
The class name, span id, trace id and if it is exported to zipkin.
The value of true will tell you if the trace is sent to Zipkin. It will automatically look for port 9411, but if you have a custom host you can set it in the application.properties.

```
spring.zipkin.baseUrl=http://localhost:8088
```
Zipkin automatically uses a sampler to only send a certain % of the traces to zipkin. This can be modified by the application.properties
```
spring.sleuth.sampler.percentage=1.0
```

</p>
<p>
Next we need to add the name of the service to each of their application properties. I will also include a debug logger to enhance the feedback we receive for tracing.

</p>

<br>
<h4>Visualising your traces from Sleuth with Zipkin</h4>
<p>
Our traces we have found in Sleuth can become very detailed. We are able to use Zipkin to visualise and trace the requests through the anatomy of the trace with Zipkin.
Before the 2.7 release of Zipkin, we were able to launch it as a microservice with Spring Boot. The microservice has since depreciated, therefore we can run Zipkin by following the installation instructions at <a href="https://zipkin.io/pages/quickstart" target="_blank">https://zipkin.io/pages/quickstart</a>. 
</p>
<p>
Download the latest release and store the jar file in a new directory for the Zipkin server. We can now launch the Zipkin server with:

```
java -jar zipkin.jar
```
</p>
<p>
The zipkin UI will now appear on localhost:9411
</p>
<p>
The Spring sleuth traces we were able to obtain can be sent to the Zipkin UI for visualisation of latency.
We will now link the microservices with Zipkin to achieve the appropriate visualisation. 

</p>
<p>
We can now send requests across the services and view them in the Zipkin UI.
Select the search button on Zipkin and see all the traces come in.
</p>
<b>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>