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
&#8226; Maven-assembly-plugin enables us to package Maven dependencies into an executable JAR file.<br>
&#8226; We can use Log4J to debug and understand the runtime context of our application as it is run from a server.<br>
&#8226; There are many ways that we can configure the format and layout of our logs to enhance readability.<br>


<br>
<h4>Running a Java application with a JAR</h4>
<p>

I have recently been developing applications that perform small and simple tasks to eliminate the repetitive work from my daily activity.
The applications are packaged into an executable JAR file and run on a rota through a batch job.<br>
Each time I create an application, I repeatedly deploy a similar project structure that allows me to include dependencies within the JAR and external logging of the runtime. The JAR is designed to be either run from a server and will provide debugging and context in the form of logging to the runtime execution.<br>
</p>

<p>
We will begin by running a simple Java class from the command line:
</p>


```java{numberLines:true}
public class Example{

public static void main(String[] args){

    System.out.println("Hello from your Java application");
    }
}

```

<p>
Once we have navigated to the directory of the class, we can compile and execute the main thread with the following lines:
</p>

```
javac Example.java

java Example
Hello from your Java application.

```
<p>
We can achieve the same result if we package our class into an executable JAR and run it from the command line.<br>
Using IntelliJ, you can package your application with the following steps:<br><br>
1. Select <strong>File</strong> > <strong>Project Structure</strong><br>
2. Select <strong>Artifacts</strong> > <strong>+</strong><br>
3. Select <strong>JAR</strong> > <strong>From modules with dependencies</strong><br>
4. Select <strong>Example Class (or class with the main thread)</strong> > <strong>OK</strong> > <strong>OK</strong>.<br>
5. Select <strong>Build</strong> > <strong>Build Artifacts...</strong> > <strong>Build</strong>

</p>
<p>
IntelliJ will create a new <strong>Out</strong> directory in your project structure that will contain the JAR file.<br>
IntelliJ will also create a new folder and file in the <strong>src</strong> folder: <strong>src/META-INF/MANIFEST.MF</strong> <br>
The Manifest file contains information about the project structure; the JAR will reference the Manifest file to locate the class with the main thread, thus making the JAR executable.<br>
If we return to the command line, we can now run our class through the JAR file that has been created in the <strong>out/artifacts/{project name}_jar/</strong> directory:<br>

```
java -jar example.jar
Hello from your Java application.
```
</p>

<br>
<h4>Injecting dependencies to our JAR file</h4>
<p>
Our current JAR file will compile the classes and run the main thread as per the Manifest file.<br>
I will now introduce a new Class that uses the <strong>jackson.databind</strong> dependency to convert JSON files to and from POJO's.<br>
The purpose of this example is to introduce a dependency into our application, but for your understanding, the main thread will simply create a POJO and return the 'firstName' property as per the JSON file.<br>
The pom.xml will include a new dependency:
</p>

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
<p>
The main method is also updated to use the dependency:
</p>

```java{numberLines:true}

    public static void main(String[] args) throws IOException {

        ObjectMapper mapper = new ObjectMapper();

        Student student = mapper.readValue(
                new File("data/student_a.json"), Student.class);

        System.out.println("First name: " + student.getFirstName());

    }

```

If we attempt to rebuild and run our JAR file with the new dependencies, we will receive the following error message from the command line:

```
no main manifest attribute

```
<br>
<p>
The error arises as the JAR file has not been generated through Maven and does not reference the dependencies.<br>
To resolve the problem, we can use <strong>maven-assembly-plugin</strong> from within our pom.xml file to include the dependencies and reference the location of the Manifest file:<br>
</p>

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

<p>
Within <strong>maven-assembly-plugin</strong>, there are a few key values that set the configuration of the JAR file creation:<br>
We define <strong>descriptorRef</strong> to the value '<strong>jar-with-dependencies</strong>'.<br>
The configuration of the <strong>descriptorRef</strong> will instruct Maven to create a JAR that contains the unpacked dependencies. 
The <strong>descriptorRef</strong> will subsequently append 'jar-with-dependencies' to our JAR filename.<br>
The <strong>execution</strong> block ensures the <strong>maven-assembly-plugin</strong> is included during the Maven build lifecycle. Therefore, the JAR file will be updated upon each build.<br>
The Manifest file is defined within the <strong>manifestFile</strong> property of the archive configuration; the JAR can now find and use the Manifest file properties.<br>
Once we have configured our pom.xml file, we can build our new JAR by selecting <strong>Maven</strong> > <strong>Install</strong> in the Maven Lifecycle menu on the right side of the IDE.
</p>
<p>
<strong>Maven Install</strong> will build a new JAR in the <strong>target</strong> directory with the dependencies included.<br>
Before we run the new JAR file, it is important to remember that any relative file locations you may specify in the application (such as a properties file) must also be
moved relative to where the JAR file is located, otherwise the JAR will not be able to resolve the location.<br>
If we navigate to the taget directory at the command line, we can run the JAR file to successfully include the dependencies and print the result:<br>
</p>

```

java -jar example-1.0-SNAPSHOT-jar-with-dependencies.jar
First name: Alice

```

<br>
<h4>Introducing logging for our packaged application</h4>
<p>
Running our packaged application with Maven dependencies is the first step to creating simple and transparent applications, however in a production environment we may find some problems...<br>
&#8226; What happens if the application throws an exception?<br>
&#8226; How can we verify that the application is working as expected?<br>
&#8226; How can we debug our application if any unexpected results occur?<br>
The concerns outlined above can be resolved with logging which will provide us with a window into the runtime activity of our application.<br> 
Logging will provide a persisted and structured document from the application that can be referenced for debugging or runtime information. The log file can be generated at custom intervals such as each day, each hour, or each execution.<br>
</p>
<strong>Log4J</strong>
<p>
Log4J is a popular package that we can implement into our application to provide a detailed logging context.<br>
We will register Log4J to our application and append records to it throughout the life of the application. Each record will include information or debugging context from the application.<br>
We can format the log files to be conveniently stored alongside the JAR file in a seperate directory, named with the time and date for ease of access. 
Log4J will be included in our application with the following Maven dependency in our pom.xml file:<br>
</p>

```
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```
<p>
The runtime configuration for the log is defined in the properties file <strong>log4j.properties</strong>. 
Properties may include details such as where we log our files to and the format of the records:<br>
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
The above file makes use of the Log4J interfaces to define and create two different logs.<br>
On line 1, the <strong>rootLogger</strong> defines varibles that we will use to assign different logs.<br>
From line 3 onwards, we use the <strong>log4j.appender</strong> interface to create and design the layout of our logs:<br>
On lines 3 to 5, we are defining a pattern layout for a log to the console.<br>
On lines 7 to 10, we are creating a <strong>File</strong> for each log. The format for the log is also defined and the creation of the log will append the current date and time of the machine to the filename.
</p>

<p>
Once we have the properties configured, we can implement Log4J in our main class with a new static method and two lines to instantiate the logger and reference the properties file:<br>
</p>

```java{numberLines:true}
 static{
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyMMdd-hhmmss");
        System.setProperty("current.date.time", dateFormat.format(new Date()));
    }

    static Logger logger = Logger.getLogger(Example.class);

    public static void main(String[] args){

        PropertyConfigurator.configure("log4j.properties");
    
    ...

```

<p>
The <code class="language-java">static</code> block at the top of the main class will set the system property we define as <strong>current.date.time</strong>.<br>
You may recognise the system property from the properties file as it is used to append the date and time for log filenames.<br>
On line 6, we create an instance of the logger. As we may create many different loggers in our application, we name our logger after the class. 
Using the class name helps us to avoid name duplication and also provides descriptive detail in the log file for which logger within the application is being used.<br>
On line 10 we use the <code class="language-java">PropertyConfigurator</code> which allows our logger to be configured by an external file.
</p>
<p>
Now that the logger is successfully configured to the applicaiton, we can begin writing logger records that will provide information and debugging context to our log file:<br>
</p>

```java{numberLines:true}
 
 //inside the main method

logger.info("Starting the application");

 ...

 catch(IOException e){
            logger.fatal("Unable to find the json file");
        }

```

<br>
<p>
The output of our log file from a successful application run will appear as:
</p>

```
[main]  INFO    Application     - Starting the application
```
<br>
However, if an exception is thrown, we may see more detail:<br>

```
[main]  INFO    Application     - Starting the application
[main]  FATAL   Application     - Unable to find the JSON file
```


<br>
<h4>Conclusion</h4>
<p>
Packaging and logging are both frequent utilities to implement into our applications; they are two important foundations to any new application we build to enable transparency and ease of use to the application.<br>
The example we have used has only touched upon the various message types and formatting that is available with Log4J. I would encourage you to explore Log4J functionality 
 <a target = "_blank" href="https://logging.apache.org/log4j/2.x/manual/index.html">here</a> to enhance your logging to be succinct and effective.<br>
If you would like to implement logging across your application with enhanced control and structure, please visit my blog on aspect-orientated-programming <a target = "_blank" href="https://aneesh.co.uk/implementing-aop-in-your-spring-application">here</a>.<br>
Finally, you can find the source code from this blog via GitHub <a target = "_blank" href="https://github.com/4neesh/JavaToolBoilerplate">here</a>.
</p>

<br>
<small style="float: right;" >Picture: Machu Picchu, Peru by <a target="_blank" href="https://unsplash.com/@willianjusten">Willian Justen de Vasconcellos</small></a><br>