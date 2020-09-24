---
title: 'Applying continuous delivery to teams'
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
In my previous <a target="_blank" href="">blog</a>, I have introduced continuous integration (CI) as a solution to automate the building and verification of code updates within teams of developers into software. Continuous delivery (CD) extends from CI for verifying the integration of the software into testing and production environments to be ready for deployment. CD ensures there is always a deployment-ready build to be sent into production. 
</p>
<p>
While CI aims to return feedback to the development team on new application builds, CD aims to manage the movement of the software through various testing environments and into production in a safe, sustainable and predictable manner. While CI ensures the code build has been tested to perform individually as operational units, the combined behaviour and performance of the software is evaluated within CD.
</p>
<p>
Similarly to the CI where code merges that are frequent and small are beneficial to minimise the pain of poor integrations, continuous delivery aims to minimise the pain to releases from code builds. <br>
Continuous delivery is different from continuous deployment as it requires a manual approval stage to move the build into production whereas continuous deployment is fully automated end-to-end.
</p>

<br>
<h4>The tests performed</h4>
<p>
CD enables development teams to automate testing beyond the unit tests of CI and to include UI testing, load testing, integration tests, API testing and more to ensure the build has been thoroughly tested to identify issues that may arise when used. 
</p>

<p>
<strong>Integration testing</strong> involves the combination of multiple software modules together to be tested in unison. While unit testing involves the testing of individual components together, 

</p>
<p>
User acceptance testing

</p>



plan

//talk about the different tests and environments that may be used
//talk about the value the tests provide to the team and to the company
//talk about the difficulty of this (time and effort to deploy)
//talk about the features of jenkins that support the automated delivery of software through the environments (stash, parallel execution, research for more)


<br>
<h4>Pipeline stash</h4>
<p>
A stash is a temporary archive in the pipeline. In this case, it is valuable to have for integration testing.
The code and dependencies can be stashed for faster testing and pipeline use.
The tests can be performed using integration testing frameworks and then to output the result. 

</p>

<br>
<h4>Execute parallel testing</h4>
<p>
We can increase the node allocation to perform parallel integration testing.
When a new node is defined, it is possible for it to point to a different workspace (and therefore source code).
Therefore we need to guarantee the node will access the same workspace.
When a node is defined, you can remove the file in the there and use the stash.

'unstash' will unload all the content in the workspace of the node to ensure consistency.

</p>

<br>
<h4>Pipeline agents</h4>
<p>
Here you can define new agents, executors, remote locations, labels and usage statistics. Within the node, you can pass in the label of different agent. 
</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>