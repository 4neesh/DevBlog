---
title: 'The value of Continuous integration'
date: 2020-10-05 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
thumbnail: ''
subtitle: 'Understand how the value of continuous integration can be realised amongst teams of multiple developers.'
time: '6'
tags:
- DevOps
- Jenkins
- Java
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand the challenges of integrating code within teams of multiple developers.<br>
&#8226; Review the phases of an application build and the responsibilities of each phase.<br>
&#8226; Understand the benefits of creating a continuous integration pipeline for code builds.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>What is continuous integration?</h4>
<p>
Continuous integration is a development practice that automates the combined actions of compiling, building, testing and packaging of source code into software. As software is more and more frequently updated, the cost of integrating code into the latest package can be timely to the developer. Furthermore, the cooperation between teams of multiple developers and the presence of merge conflicts can make the integration of source code even more burdensome.
</p>
<p>
Merge conflicts arise when multiple developers attempt to integrate code changes that are applied to the same file(s). Each developer may have a different idea for design and implementation of the class or method and therefore whether the code updates implement the same behaviour or not, a further stage of merge conflict must be manually reviewed before the code is updated. As integrations are performed for larger and larger updates at a single time, the potential for merge conflicts increase and the size of the conflicts can become larger and more complex across classes.</p>
<p>
As a solution, continuous integration enables code builds to be performed autonomously. The process for compiling, testing, building and packaging code is performed through an automated pipeline that reduces the burden for the developers. As a result, continuous integration encourages the practice of small and frequent integrations amongst developers to lower the potential of  conflict from merge conflicts. Continuous integration encourages integrations to be made on a daily basis. 
</p>

<br>
<h4>Build tools</h4>
<p>
Build tools automate the individual processes of creating executable applications from the source code. There are individual phases that are used within build tools to separately compile, build, test, package and deploy source code to applications. Some of the popular build tools used are: Ant, Maven and Gradle.
</p>

<br>
<h4>The lifecycle of a build</h4>
<p>
The build contains three different in-built lifecycle: default, clean, and site.<br>
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

Each phase can be run individually, however the latter stages will always run the former stages before itself. Therefore the install phase will run the validate, compile, test, package and verify phases before install.<br>
The continuous integration phases consist of compile, test and package. The phases are explained to a further depth for a java project.
</p>

<p>
<strong>Compile</strong> will take the source code of the .java files and compile them into bytecode (.class) files for the JVM to later execute at runtime. The JIT Java compiler will then convert the bytecode into machine code to be executed.
</p>
<p>
<strong>Test</strong> will compile the unit test code into bytecode and run each of the unit tests for the project.
</p>
<p>
<strong>Package</strong> will take the compiled code from the .class files and package them into a executable format such as a .jar file.
</p>

<br>
<h4>Continuous integration and continuous delivery tools</h4>
<p>
Continuous integration and continuous delivery (CICD) can be implemented through open tools to automate the individual phases of integrating code and delivering it to the various environments. Jenkins is an open source automation server that can be used to create pipelines for code integration and delivery. Another popular software tool is the Atlassian Bamboo tool. Both tools support the creation of automated pipelines to support continuous integration amongst teams of developers.
</p>
<p>
A continuous integration pipeline is used to stitch the various phases of the code integration into a sequential production line to integrate code to be delivered by the continuous delivery phase. The goal behind the pipelines is to support the constant flow of software updates from all members of the team, to reduce the time it takes to integrate the code, and thus to encourage the frequent updates of code by the team. A continuous pipeline, as offered by Jenkins and Bamboo however offers much more than just stitching  activities together. 
</p>
<p>
The CI platform is used as a centralised repository of build reports, status' and historical build updates for a project. Whereas before a CI platform was used, the console output and report from a build phase remained local to the developers machine, the console output is now available for review by all members of the team.

</p>
<p>
Jenkins can also offer support into the build times for each phase to help diagnose bottlenecks and to understand the evolution of build times for the project. Jenkins supports the use of concurrent builds and therefore can be evaluated by the team for faster build times.
In the Jenkins UI, the pipeline can be broken down visually to illustrate the most time-consuming activities to be later reviewed and addressed. You can define stages within the pipeline to segment the data pipeline for developers.

</p>
<p>
Jenkins can also be integrated with Git repositories to be initiated automatically from a git push or periodically on a daily basis. The shared control of project builds can be distributed to each developer while supporting team-wide visibility of the builds and updates as they are made.
The changes made by each build are then shown in the changes section of Jenkins.
</p>
<p>
Lastly, Jenkins and other CI platforms support the use of email configuration and other notification services to 
//you can then configure email notifications to inform the user of the latest build success and failures (exception handling)

</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>