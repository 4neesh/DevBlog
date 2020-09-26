---
title: 'How continuous delivery delivers value'
date: 2020-10-12 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
thumbnail: ''
subtitle: 'Understand how the value of continuous delivery can be realised amongst teams of multiple developers.'
time: '8'
tags:
- DevOps
- Jenkins
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand the processes .<br>
&#8226; .<br>
&#8226; .<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>What is continuous delivery?</h4>
<p>
Continuous delivery (CD) extends from continuous integration by ensuring the software artifact is always in a deployment-ready build to be sent into production. You can read about continuous integration from my previous blog <a href="" target="_blank">here</a>.
</p>
<p>
While CI aims to return feedback to the development team on new application builds, CD aims to manage the movement of the software through various testing environments and into production in a safe, sustainable and predictable manner. CD extends upon the unit testing performed within CI to assess the behaviour and compliance of the software to functional requirements. 
</p>
<p>
CD aims to automate the delivery of software through the testing environment to encourage the delivery of software. Just how CI automation encourages the frequent integration of source code to minimise the pain of merges and conflicts, CD encourages the frequent delivery of software components by reducing the manual intervention required before sending software as a release.
<br>
Continuous delivery is different from continuous deployment as it requires a manual approval stage to move the build into production whereas continuous deployment is fully automated end-to-end.
</p>

<br>
<h4>Testing functional requirements of software</h4>
<p>
The functional requirements of a system can be described as the behaviours for inputs and outputs the system is expected to produce. The functional requirements can encapsulate all areas of the system from data processing, technical outputs and use cases. The CD pipeline is responsible for carrying out multiple streams of testing to ensure the system build is robust including UI testing, load testing, integration tests and API testing. 
</p>

<p>
<strong>Integration testing</strong> involves the combination of software modules to be tested in unison. While unit testing involves the testing of individual components on their own, integration testing identifies dependent modules within the application and tests scenarios that occur between them. The main objective from integration testing is to test the interfaces between the modules. The value behind integration testing is to ensure each module can interact with other as expected and can identify inconsistencies between development teams for their contribution in the modules. Modules are also responsible for integrating with external modules that can also require testing.
</p>

<p>
<strong>API testing</strong> can fall under the integration testing umbrella where external APIs are tested to perform as expected for functionality, security and reliability. As modules may communicate with external systems, the API testing will cover the external layer of the system for communication. 
</p>

<p>
<strong>Load testing</strong> involves stress testing the system capabilities to handle increased levels of traffic and requests than expected. The typical expected usage of the software may be modelled and simulated as well as upper and lower levels of requests. The load testing can provide metrics for the quality of service provided by a system and identify potential bottlenecks or vulnerabilities of the system for certain traffic or use patterns.
</p>

<p>
<strong>User acceptance testing</strong> (UAT) is a process of verifying the software works for the user. UAT is used to assess if the system can support the day-to-day intended use of the system. The system requirements may be defined within a scope and tested upon both systematically and unsystematically to verify the outcome of the test.
</p>

//purpose here is to define the movement of code in different environments for testing.
<br>
<h4>Release management with continuous delivery</h4>
<p>
The release management for continuous delivery defines the (sometimes) multiple stages of deployment that are required for a system into different environments to test changes before moving the system updates into a production environment. The separation of a test environment from the production environment enables system changes to be phased into the production environment that is used by end-users with due diligence upon each system change and update.
</p>
<p>
The phased deployment, known as a rollout, of the system update will be sent through a number of environments to perform distinct testing phases. Unlike the production environment, which is used by the end user and supports each performance requirement of the system, test environments will vary in size and infrastructure to support testing. 
</p>
<p>
The common environments to be defined within release management include Development (DEV) for testing system integration tests, user acceptance testing for further infrastructure to test user interaction with the system, and Pre-production which will be a direct replica of Production for final testing. The purpose of the release management is to dedicate resources to test the various stages of testing of software before it is released.
</p>

<br>
<h4>The challenges of continuous delivery</h4>
<p>
Continuous delivery can constitute a lengthy process where multiple tests are completed across different purpose-built environments. The functional testing process remains largely unchanged despite the size and implication for the system update. As a result, the time constrain for continuous delivery is a fixed cost to the software delivery pipeline.
</p>
<p>
The complexity of functional testing further extends to the type of tests that are run across environments to verify the software update. Unlike unit tests, integration tests and other functional tests incorporate many modules together to cover wholely defined cases and behaviours of the system as a whole. The tests as stand alone functions therefore require greater levels of resources and inspection to verify. 
</p>
<p>
The configuration of the environments and the system to perform checks upon must remain consistent and reliable to test upon to limit the variables from the testing environment. While dedicated environments are used for specific testing, it becomes a challenge to 'clean' the environments for testing as and when is appropriate. The responsibility for ensuring tests are performed within a controlled environment introduces further challenges to continuous delivery.
</p>

<br>
<h4>Jenkins as a continuous delivery solution</h4>
<p>
<strong>Concurrent delivery</strong>

We can increase the node allocation to perform parallel integration testing.
When a new node is defined, it is possible for it to point to a different workspace (and therefore source code).
Therefore we need to guarantee the node will access the same workspace.
When a node is defined, you can remove the file in the there and use the stash. Agents, executors, labels.

</p>

<p>
<strong>Automated delivery pipeline</strong>
</p>

<p>
<strong>Consistent delivery configuration</strong>
A stash is a temporary archive in the pipeline. In this case, it is valuable to have for integration testing.
The code and dependencies can be stashed for faster testing and pipeline use.
The tests can be performed using integration testing frameworks and then to output the result. 
</p>

<br>
<h4>Conclusion</h4>
<p>
The continuous delivery pipeline extends from continuous integration to verify the system upgrade meets functional requirements before being deployed into a production environment. The testing of software is performed across different test environments that are designed to support functional testing and to replicate the production environment.
</p>
<p>
The importance of continuous delivery is to support a reliable, predictable and safe deployment of software into production on a frequent basis. The multitude of testing to be performed across environments for verification can create challenges of time consumption and intervention of testing before deploying system updates. Jenkins supports the continuous delivery pipeline by automating the functional testing of the system updates across different environments. Jenkins also supports continuous delivery with parallel processing with the agent node model.
</p>
<p>
Continuous delivery and continuous deployment play a major role in the modern software delivery cycle where code is integrated, built, tested and deployed rigorously without manual intervention to the production environment. The automation of continuous delivery speeds up the feedback loop from rigorous testing to support frequent, incremental and efficient upgrades to software system. 
</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>