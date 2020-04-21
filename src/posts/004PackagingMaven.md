---
title: 'Running Applications from a JAR file'
date: 2020-04-27 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/004MachuPicchu.png
subtitle: 'Packaging your Spring project into a convenient JAR file and applying logging to them for feedback.'
time: '10'
tags:
- Spring
- Java
- Maven
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The Maven Build lifecycle consists of many stages that allow us to package our application<br>
&#8226; Maven-assembly-plugin provides the capability to package Maven projects and dependencies into a jar file<br>
&#8226; We can use Logging to debug and understand the application performance when executed remotely<br>


<h4>Running a Java application</h4>
<p>
I have recently been developing small applications that perform tasks on a daily basis. The applications are executed from a jar file
for convenience. The jar file also makes use of one of the advantages of Java's capability, which is to run independently across operating systems. As a result, my tool can be used for different purposes and configured through the properties.<br>
</p>

<p>
As a developer, I am constantly running my application through the IDE, often Eclipse or IntelliJ. However two methods I use less often
are through the command line as as an executable jar.<br>
To demonstrate a simple example, I will run the following code from the command line:
</p>


```java{numberLines:true}
public class Example{

public static void main(String[] args){

    System.out.println("Hello, from your Java application");
    }
}

```

<p>
By navigating to the appropriate directory, I am able to run the the application within the terminal:
</p>

```
javac Example.java

java Example
Hello, from your java application.

```
<p>
Alternatively, I am able to generate a jar from the IDE and execute the jar.<br>
In IntelliJ, you can package your application into a jar file with the following steps:<br>
1. Select <code>File</code>, <code>Project Structure</code><br>
2. Select <code>Artifacts</code>, then select <code>+</code><br>
3. Select <code>JAR</code>, then <code>from modules with dependencies</code><br>
4. Select the Main Class and select <code>OK</code> twice.
5. Select <code>Build</code>, <code>Build Artifacts...</code>, <code>Build</code>

</p>
<p>
IntelliJ would now have created a new <code>Out</code> directory that will store the JAR, as well as a new <code>src/META-INF/</code> 
<code>MANIFEST.MF</code> file.<br>
The Manifest file will store a version number and name of the class with the main function. The Manifest file contains information about the files within the JAR file, including which class holds the main thread. 
</p>

<p>
If we return to the command line, we can now run the java application through the jar file created in the out/artifcats/example/ directory:<br>

```
java -jar example.jar
Hello, from your java application.
```
</p>

<br>
<h4>Injecting dependencies to our jar file</h4>
<p>
More recently, I have run into the issue of returning a the following error message at the command line:

```
no main manifest attribute

```

There is a key plugin we must specify in our POM.xml file for Maven to include the correct dependencies:<br>


```
<plugin>
    <artifactId>maven-assembly-plugin</artifactId>
        <executions>
            <execution>
                <phase>package</phase>
                <goals>
                    <goal>single</goal>
                </goals>
            </execution>
        </executions>
        <configuration>
            <descriptorRefs>
                <descriptorRef>jar-with-dependencies</descriptorRef>
            </descriptorRefs>
            <archive>
                <manifestFile>src/main/java/META-INF/MANIFEST.MF</manifestFile>
            </archive>
    </configuration>
</plugin>
```

The above plugin enables the jar file to locate where the MANIFEST.MF file exists.<br>
Following this, we run Maven > Install to create the JAR file in the Target folder of our project.
</p>

<br>
<h5>What is the Maven lifecycle?</h5>
<p>
1. <strong>validate</strong> runs the plugin goals set out in the POM.xml to ensure they are correct.
2. <strong>compile</strong> compiles the source code.
3. <strong>test</strong> test the source code with the specified testing framework (if present).
4. <strong>package</strong> package the source code in the specified format, as specified by `<packaging>` in the POM.xml
5. <strong>verify</strong> run the integration tests to validate quality criteria
6. <strong>install</strong> installs the dependencies into the project
7. <strong>deploy</strong> completed in the build environment, copies the package into remote repositories

</p>
<p>
When we run Maven Install, we are referencing the Configuration Plugin to build the jar with dependencies JAR file with the 
manifest file location provided.<br>
As a result, we have built a Jar with the correct dependencies included.<br>
If we navigate to the taget directory, we can run the jar file from the terminal:<br>
</p>

```

java -jar example-jar-with-dependencies.jar
First name: Alice

```

<br>
<h5>Introduce logging to understand application outcome</h5>
<p>
In a real-life scenario, we may not be running the application from the command line, we will utilise the JAR and run it from a script, batch file, or by double clicking it.<br>
The problem we have, however, is that we can't see the println that we defined, so we cannot identify the verify the tool completion.<br>
Logging will provide a structured output to each run of the application that can be later referenced for such information<br>
</p>
<h6>Log4J</h6>
<p>
Log4J is a popular dependency that we can implement into our program to provide detailed context of the application.<br>
This will allow you to see what is going on inside the application and to perform debugging where possible.<br>
We will use Log4J to monitor the outcome and Exceptions that may be thrown by the application. The log files will be conveniently stored alongside the JAR file in a seperate directory.<br>

</p>



<small style="float: right;" >Picture: Machu Picchu, Peru by <a target="_blank" href="https://unsplash.com/@willianjusten">Willian Justen de Vasconcellos</small></a><br>