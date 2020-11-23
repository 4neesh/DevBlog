---
title: 'xxx'
date: 2020-09-28 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
subtitle: 'xxx'
time: 'xx'
tags:
- DevOps

---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)

<br>
<h4>DevOps Academy</h4>
<p>
My prior experience consisted of creating a CICD pipeline following a tutorial from PluralSight, and reading the well-endorsed book 'The Phoenix Project'.

Consists of attending 4 virtual sessions and completing my own self-study.
day 1 is self-study
day 2 is expert connect
day 3 is knowledge checks and share learn
day 4 is expert connect
day 5 is teach back 

We are split into groups and have to present upon a topic that is required.
I am in group C with Kamil, Khaled, Odd Eirik, Thomas. 
In our team, we are designated a topic which we are to teach-back to the other groups. 
We are teaching on CICD pipeline or importance of SCM in DevOps
20 mins teachback including a 5 minute Q & A. 

Very comprehensive academy which includes involvement with 
</p>
<p>
Why DevOps is important at Accenture.
competitive advantage for accenture
manage complexity of clients business and providing tangible results (new features, realise efficiencies and benefits faster)
It is a discipline of optimizing engineering and operations to realise efficiency of changes. It helps organisation deliver safety with speed. 
DevOps helps IT and service provider to implement changes with speed with shorter feedback loops to reduce wasted time in issue resolution. 
</p>

<br>
<h4>Day 1</h4>
<p>
started with introductions from the faculty and participants. This was attended by accenture staff all across Europe, from Poland, Germany, Czech Republic, Sweden and UK. 
Faculty were from India and South America. 
Complete pre-assessment and the D2L content. 
Complete 4 modules: 
- Delivering Services from the cloud
- Applying software configuration management
- Implementing Continuous delivery
- Ensuring code quality
</p>
<h5>Delivering services from the cloud</h5>
<p>
Development and Operations are often siloed in an organisation. Devs implement new features as fast as possible, Ops objective is to ensure systems are stable and impact of changes are minimised. 
The teams are integrated together, to share the objective to lower costs, deliver products faster and reduce risk of delivery to increase throughput. 
</p>
<p>
DevOps was first coined in 2009 by Patrick Debois. Combining Development and operations. 
It is about optimizing the building and running of software. 
</p>
<p>
The Accenture DevOps Platform (ADOP) is an environment for testing, releasing and maintaining applications. It consists of ADOP core of pre-configured tools, Cartridges for standardised packaging and reuse of software delivery assets and Platform extensions for extending the core with new tools these are most advanced part of the DevOps platform. 
</p>

<h5>Applying software configuration management</h5>
<p>
SCM comprises the tools and techniques for managing software assets. The tools automate the manual SCM processes to support large scale SCM. The tools provide transparency, governance, compliance and security to SCM. 
Version control is used to track changes made to the asset such as what change was made, by who and when. There are two types of version controls, centralsied and distributed. 
Git is a VCS written in C. It is distributed  and treats data as a set of snapshots in a mini file system. 
Branching is used to enable parallel development between teams. It allows development to be isolated and integrated. 
</p>
<p>
A software consists of many components that must all be version controlled together. If a part of the software changes, it must be tested as a whole. 
The infrastructure we use is treated as code. Therefore we must be able to test upon it, destroy it and recreate it reliably. Known as 'phoenixing'. This provides confidence in CD. 
</p>
<p>
The goal of lean is to sustainably deliver the maximum amount of value to the customer in the shortest possible lead time. It focuses on continous flow, identifying delays, reducing delays and valueless activities and reducing waste in excess inventory. 
</p>
<p>
To summarise, differences between lean, agile and DevOps. Lean is about reducing waste. Agile is about culture of agility and flexibility. DevOps unites Dev and Ops while embracing Lean and Agile. 
</p>


<h5>Implementing continuous delivery</h5>
<p>
Converting ideas to values. Waterfall takes ideas into products and deploy them to market. This is value stream .
Multiple ideas are placed into a release. Therefore value is realised after release. Challenges faced are due to lifecycle of development process. Release is delayed and value not returned until late. 
Flaws ideas are therefore implemented and add little or no value. 
Failure of ideas are wasting time and resources. Only 1/3 of ideas actually offer a return as expected. 
Releases get bigger as more ideas are included. CICD make the challenges of releasing easier. 
CI. aim to delivery ideas/changes in small amounts. Smaller features = easier releases (increments). 
CI advantages: smaller batch = faster value, faster feedback, provides agility for changing direction of delivery. Leads to smaller size of changes, risk of changes and waste. 
CD. Taking the latest build from CI and delivering it to users. It provides many functional tests for review before delivery.
Benefits of CD: simplified coordinaton, max efficiency of standardisation, optimise globally to reduce bottlenecks, eliminate waste. detect problems faster
</p>
<p>
CICD tools orchestrate with other tools. Changes are identified from SCM to begin CI. Code is passed through Code Quality gates, Build is performed and deployment is made to environments. 
</p>

<h5>Ensuring code quality</h5>
<p>
Software testing is used to create an acceptance criteria. It offers a way to measure software quality. Testing is a process of test execution, planning, design, analysis and implementation. 
It makes sure code is fit for purpose, and standards are defined. 
Tests however controbute to maintenance cost, technical debt and more people to read code. 
There is often a centralised QA capability after development and before ops to assume ownership of automation of E2E testing. 
The cost of finding a bug rises as it is goes undetected later into deployment stages (integration, system, acecptance, regression). 
</p>
<p>
There are many quality gates which set conditions for whether a build passes quality tests. These are checkpoints:
Static: Reporting on number of lines, blocks, methods covered by unit testing
Unit: this stage involves committing code and pushing branches for review and merging. This triggers a unit testing framework
Functional: Black box testing of behaviour
Non-functional: performance, usability, reliability, 
Canary: Verify all is ready to avoid wasting time investigating code
</p>
<p>
BDD uses natural language to describe behaviours and outcomes. It uses 'Given, when, then' scenarios. 
TDD is where requirements are translated into test cases and then the software is tested against them. 
</p>
<p>
DevSecOps aims to integrate security of applications with DevOps pipelines. this is broken into static and dynamic testing. 
In static, source code is scanned for bugs, vulnerabilities and insecure coding practices. Using SonarQube and HP Fortify.
In dynamic testing, web apps and APIs are scanned for cross-site scripting, SQL injection and command injection using HP WebInspect and OWASP ZAP. 

</p>

<br>
<h4>Day 2</h4>
<p>
ADOP is used as a platform for the academy
</p>
<p>
ADOP core has many components. Core, cartridges and platform extensions. 
cartridge is a mini sample project (one for terrform, sap, salesforce). It is just a sample project with the basic needs (pipeline, git repo)
We use java cartridge in the academy. It is a spring application. 
Using Spring petclinic project. This is a cartridge. ADOP is set of tools. Platform extensions is for using a specific tool that is not available in a platform. 

</p>

<br>
<h4>Day 3</h4>
<p>


</p>

<br>
<h4>Day 4</h4>
<p>


</p>

<br>
<h4>Day 5</h4>
<p>


</p>

<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>