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
&#8226; Understand the challenges of integrating code within teams of multiple developers.<br>
&#8226; Review the phases of an application build and the responsibilities of each phase.<br>
&#8226; Understand the benefits of creating a continuous integration pipeline for code builds.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>What is continuous delivery?</h4>
<p>
Continuous integration is a development practice that automates the compiling, building, testing and packaging of source code. As software is more and more frequently updated, the cost of integrating code into the latest package can be timely to the developer. Furthermore, the cooperation between teams of multiple developers and the presence of merge conflicts can make the integration of source code even more burdensome.
</p>
<p>

</p>
<p>
As a solution, continuous integration enables code builds to be performed autonomously. The process for compiling, testing, building and packaging code is performed through an automated pipeline that reduces the burden for the developers. As a result, continuous integration encourages the practice of small and frequent integrations amongst developers to lower the potential of  conflict from merge conflicts. Continuous integration encourages integrations to be made on a daily basis. 
</p>

<br>
<h4>Build tools</h4>
<p>
//introduce maven (mention Ant, Gradle etc.)

</p>

<br>
<h4>The lifecycle of a build</h4>
<p>
The lifecycle of a build takes source code and compiles it into a packaged artifact. The build contains three different in-built lifecycle: default, clean, and site.<br>
&#8226; default: handles project deployment.<br>
&#8226; clean: cleans the project by removing the files generated from the previous build.<br>
&#8226; site: creates the project's site documentation.<br>
</p>
<p>
The build lifecycle consists of multiple phases that enable the developer to have control over how the code is compiled:<br>
&#8226; validate: validate the project includes all the necessary information.<br>
&#8226; compile: compile the source code of the project.<br>
&#8226; test: test the compiles source code with the unit testing framework.<br>
&#8226; package: package the compiled code into a distributable format (such as a war or jar file).<br>
&#8226; verify: perform checks upon quality through integration tests.<br>
&#8226; install: install the package into the local repository.<br>
&#8226; deploy: copy the final package into the the remote repository to be shared.<br>

Each phase can be run individually, however the latter stages will always run the former stages before itself. Therefore the install phase will run the validate, compile, test, package and verify phases before install.
</p>

<p>
//go over compiling code
</p>

<p>
//go over testing code
</p>

<p>
// go over packaging code.
</p>

<br>
<h4>CICD tools</h4>
<p>
//introducing jenkins + bamboo

//building pipelines

//access to console output

//information on build times

//automating the build process
(poll scm or push from GitHub)

//shows all the changes made. 

//you can then configure email notifications to inform the user of the latest build success and failures (exception handling)
</p>
<p>

</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>