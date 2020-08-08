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

</p>
<p>
Next we need to add the name of the service to each of their application properties. I will also include a debug logger to enhance the feedback we receive for tracing.

</p>
<b>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>