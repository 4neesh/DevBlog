---
title: 'Build a CICD pipeline'
date: 2020-06-01 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.png
subtitle: 'Use Jenkins to create a CICD pipeline.'
time: '8'
tags:
- Devops
- Jenkins
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

<br>
<h4>Create an integration pipeline</h4>
<p>
Create new item
Select Pipeline job type
The pipeline is a script written in Groovy. 
Select the Pipeline syntax for support to create groovy
In the snippet generator, select sh:Shell Script to create the shell scripts necessary. The shell script is used for calling mvn from the command line. 
If using windows, select bat: Windows Batch Script.
Select generate groovy to generate the script.
</p>
<p>

```
sh 'mvn clean package'
```

</p>
<p>
set up the archiving by going to the syntax generator and selecting 'step: General Build Step' then 'Archive the artifacts'
Then specifying the archived artifacts as 'target/*.jar'

```
archiveArtifacts artifacts: 'target/*.jar', followSymlinks: false
```
</p>

<p>
Source control: select git: Git and enter the .git url and generate the Groovy script:

```
git 'https://github.com/4neesh/FPLManagementTool.git'
```
</p>

<p>
Master node

place all pipeline in node{

}
</p>
<p>
Build triggers: poll SCM

Then configure GitHub repo by passing in the url of Jenkins. If using localhost, then use ngrok for hosting a port on the internet. 

Then sending a push request to the repository will trigger the webhook from GitHub to be sent to Jenkins for the pipeline.
</p>

<br>
<h4>Sending email notifications</h4>
<p>

</p>

<h4>Create a delivery pipeline</h4>
<p>
First we want to define a temporary archive: stash

```
stash name: 'all',
        includes: '**',
        excludes: 'test/**'
```

</p>

<br>
<h4>Execute parallel testing</h4>
<p>
We can increase the node allocation 

```
node{

    sh 'ls'
    sh 'rm -rf * '
    unstash 'all'
    sh 'ls'

}
```
To start parallel working:
use parallel

```
parallel firstBranch: {

    

}, secondBranch: {

}

```

</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>