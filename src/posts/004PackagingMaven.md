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
&#8226; We can run our Java applications from executable JAR files from remote servers as well as our IDE and command line.<br>
&#8226; Maven-assembly-plugin provides the capability to package Maven projects and dependencies into a jar file.<br>
&#8226; We can implement Log4J logging to debug and understand the runtime context of our application.<br>


<br>
<h4>Running a Java application</h4>
<p>
Recently, I have been developing applications that perform small and simple tasks. Essentially, they remove repetitive work from daily activity.<br>
The applications have been packaged into an executable JAR file and run on a scheduled time through a batch job.<br>
Using Java to automate small tasks in your everyday life can quickly add up to greater improvements to your daily routines, amongst this process of developing tools, I repeatedly deploy 
a similar project structure of creating a JAR file and appropriate logging as the skeleton of such a tool.<br>
I am writing this blog as a guide for using Maven dependencies and Log4J to package my a Java application that is to be run from a server and to provide transparency for the runtime execution.<br>
</p>

<p>
To introduce command line syntax, we will start by running a simple Java class:
</p>


```java{numberLines:true}
public class Example{

public static void main(String[] args){

    System.out.println("Hello, from your Java application");
    }
}

```

<p>
Once we have navigated to the appropriate directory we will run two lines to compile and run the class:
</p>

```
javac Example.java

java Example
Hello, from your Java application.

```
<p>
Alternatively, we are able to package the class into an executable JAR through the IDE.<br>
In IntelliJ, you can package your application with the following steps:<br><br>
1. Select <code>File</code> > <code>Project Structure</code><br>
2. Select <code>Artifacts</code> > <code>+</code><br>
3. Select <code>JAR</code> > <code>From modules with dependencies</code><br>
4. Select Example Class(Or class with the main thread) > <code>OK</code> > <code>OK</code>.<br>
5. Select <code>Build</code> > <code>Build Artifacts...</code> > <code>Build</code>

</p>
<p>
IntelliJ will create a new <code>Out</code> directory in your project structure that will contain the JAR file. <br>
IntelliJ will also create a new folder and file in the src folder: <code>src/META-INF/MANIFEST.MF</code> <br>
The Manifest file contains information about the project structure that the JAR file will reference. The Manifest file includes the name of class with the main thread and a version number.
</p>

<p>
If we return to the command line, we can now run our class through the JAR file that has been created in the out/artifacts/example/ directory:<br>

```
java -jar example.jar
Hello, from your java application.
```
</p>

<br>
<h4>Injecting dependencies to our JAR file</h4>
<p>
Our current JAR file will compile the class(es) and run the main thread as per the Manifest file.<br>
I will now introduce a new Class that uses the <code>jackson.databind</code> dependency to convert JSON files to and from Java POJO's.<br>
The purpose of this example is to introduce a dependency into our application.
The POM.xml will include a new dependency and the main class will use this dependency to read in a JSON file and create a Student object (a seperate class created):


```
<dependencies>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.11.0.rc1</version>
    </dependency>
</dependencies>

```
<br>

```java{numberLines:true}

    public static void main(String[] args) throws IOException {

        ObjectMapper mapper = new ObjectMapper();

        Student student = mapper.readValue(
                new File("data/student_a.json"), Student.class);

        System.out.println("First name: " + student.getFirstName());

    }

```

If we attempt to rebuild our JAR file with the new dependencies, we will receive the following error message when we try to run our jar file from the command line:

```
no main manifest attribute

```
<br>
The new JAR file is not able to locate the Manifest file because we have not specified the location within the POM.xml.<br>
To resolve the problem, we can use the <strong>maven-assembly-plugin</strong> from within our POM.xml file:<br>


```
<plugin>
    <artifactId>maven-assembly-plugin</artifactId>
    <configuration>
        <descriptorRefs>
            <descriptorRef>jar-with-dependencies</descriptorRef>
        </descriptorRefs>
        <archive>
            <manifestFile>src/main/java/META-INF/MANIFEST.MF</manifestFile>
        </archive>
    </configuration>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>single</goal>
            </goals>
        </execution>
    </executions>
</plugin>

```

<br>
Within <strong>maven-assembly-plugin</strong>, we set the <strong>descriptorRef</strong> to 'jar-with-dependencies'.<br>
The configuration of the descriptorRef will instruct Maven to create a JAR that contains the unpacked dependencies.<br>
The execution block ensures the plugin is included during the Maven build lifecycle. Therefore the JAR file will be updated upon each build.<br>
The descriptorRef will subsequently append 'jar-with-dependencies' to our JAR filename.<br>
We also specify the <strong>manifestFile</strong> location within the archive configuration so the JAR can use the Manifest file properties.<br>
Once we have configured our POM.xml file, we can build our new JAR by selecting <code>Maven</code> > <code>Install</code> in the Maven Lifecycle menu on the right side of the IDE screen.
</p>

<p>
Maven Install will build a new JAR in the <code>target</code> directory with the dependencies included.<br>
Before we run the new JAR file, it is important to remember that any relative file locations you may specify in the application (such as a properties file) must also be
moved relative to where the JAR file is located, otherwise the JAR will not be able to find these files.<br>
If we navigate to the taget directory at the command line, we can run the JAR file:<br>
</p>

```

java -jar example-jar-with-dependencies.jar
First name: Alice

```

<br>
<h5>Introducing logging for our packaged application</h5>
<p>
Running our packaged application with Maven dependencies is the first step to creating simple, easy-to-execute applications, however in a production environment we may find some problems...<br>
What happens if the tool throws an exception or if it begins to create unexpected results?<br>
As we are not running the tool from the IDE or console, we will require logging to provide a window into the runtime activity.<br> 
Logging will provide a structured document artefact from each run of the application that can be referenced for debugging or other information.<br>
</p>
<strong>Log4J</strong>
<p>
Log4J is a popular utility that we can implement into our application to provide a detailed logging context of the application.<br>
We will register Log4J to our application and append records to it throughout the life of the application when we feel it is appropriate.<br>
The log files will be conveniently stored alongside the JAR file in a seperate directory, tagged with the time and date for organisation and ease of access.<br>
Log4J will be included to our application with the Maven dependency in our POM.xml file:<br>
</p>

```
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```
<p>
With the Log4J dependency in our project, we will now define the runtime configurations for our log in a properties file.<br>
The properties file (log4j.properties) will include details such as where we log our files to and the layout of the file:<br>
</p>

```conf{numberLines:true}
log4j.rootLogger=DEBUG, consoleAppender, fileAppender

log4j.appender.consoleAppender=org.apache.log4j.ConsoleAppender
log4j.appender.consoleAppender.layout=org.apache.log4j.PatternLayout
log4j.appender.consoleAppender.layout.ConversionPattern=[%t] %-5p %c %x - %m%n

log4j.appender.fileAppender=org.apache.log4j.RollingFileAppender
log4j.appender.fileAppender.layout=org.apache.log4j.PatternLayout
log4j.appender.fileAppender.layout.ConversionPattern=[%t] %-5p %c %x - %m%n
log4j.appender.fileAppender.File=log/${current.date.time}_Application.log


```
<p>
In the above properties file, we make use of Log4J interfaces to define and create two different logs:<br>
On line 1, the rootLogger defines varibles that we will use to assign different logs.<br>
From line 3 onwards, we use the log4j.appender interface to create and design the layout of our logs:<br>
On lines 3 to 5, we are defining a pattern layout for the console (for when we run the JAR from the console or IDE).<br>
On lines 7 to 10, we are defining the layout, pattern, and the File creation for the log which will use the current date and time of the machine within the filename.
</p>

<p>
We will implement Log4J in our main class.<br>
For simplicity, we will start with one new method and two new lines:<br>
</p>

```java{numberLines:true}
 static{
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyMMdd-hhmmss");
        System.setProperty("current.date.time", dateFormat.format(new Date()));
    }

    static Logger logger = Logger.getLogger(Application.class);

    public static void main(String[] args){

        PropertyConfigurator.configure("log4j.properties");
    
    ...

```

<p>
The static method at the top of the main class will structure the system property we define as "current.date.time".<br>
You may recognise the system property from the properties file, this is used to apply the date and time for log filenames.<br>

On line 6 we create an instance of the logger. As we may create many different loggers in our application, we pass in the name as the class name.<br>
Using the class name helps us to avoid name duplication. The name of the logger used will appear in the log, therefore it is another variable that can assist with debugging.<br>
On line 10 we use the PropertyConfigurator which allows our Log4J logger to be configured by an external file (that is passed in as the argument).
</p>
<p>
We have successfully configured the logger into our application, we can begin writing logger statements that will provide information and exception handling to our log file:<br>

</p>

```java{numberLines:true}
 

logger.info("Starting the application");

 ...

 catch(IOException e){
            logger.fatal("Unable to find the json file");
        }

```

<br>
<p>
The output of our log file will look like:
</p>

```
[main]  INFO    Application     - Starting the application
```
<br>
or (if an exception is thrown)<br>

```
[main]  INFO    Application     - Starting the application
[main]  FATAL   Application     - Unable to find the JSON file
```
<br>
<p>
Our application is now executable from just a single file, with all the dependencies successfully included.<br>
I will reiterate a common mistake I make, which is to ensure the locality of all referenced files/directories to the JAR file location to ensure it works as expected.<br>
This example has only touched upon the various message types and formatting that is available with Log4J so I would encourage exploring such areas.<br>
</p>


<h5>Conclusion</h5>
<p>
Packaging and logging are both frequent and important utilities to implement into our applications, with the latter applying more often to all applications we create.<br>
We have been able to implement very simple funcitonality with logging into an application that will provide transparency into the runtime activity of our applications when launched from a server.<br>
If you would like to do this to a greater and transparent extent, visit my blog on AOP that can allow you to implement
 modular design patterns with logging <a href="https://aneesh.co.uk/implementing-aop-in-your-spring-application">here</a>
</p>


<small style="float: right;" >Picture: Machu Picchu, Peru by <a target="_blank" href="https://unsplash.com/@willianjusten">Willian Justen de Vasconcellos</small></a><br>