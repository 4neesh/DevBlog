---
title: 'Inside Java: why it works everywhere'
date: 2021-06-07
author: 'Aneesh Mistry'
subtitle: 'Take a look under the hood of Java to understand how code is compiled, interpreted and executed within the machine.'
time: '8'
tags:
- Java
- JVM
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand how the Java engine works to interpret and execute code.<br>
&#8226; Review the stages of compilation and execution that support the type safety and memory management properties of Java.<br>

<br>
<h4>Java - a 30 year old language</h4>
<p>
Java programming language is one of the most popular programming languages in the world that is prevalent across industries and careers. You can gather an idea of
how diverse and important Java has been in shaping peoples lives by searching upon the hashtag #movedByJava on social media platforms such as Twitter. 
</p>
<p>
Until recently, Java had remained as one the two most highly used languages on GitHub since 2012; it has since been overtaken by the languages Python and JavaScript. 
One of the drivers to the popularity of Python and JavaScript is their syntax design that makes it easier to learn and build with.
</p>
<p>
As a compiled and statically typed language, Java enables faster runtime speeds than Python and JavaScript, despite this, it is still criticised for its runtime speed in 
comparison to other object-orientated programming languages such as C++. This blog will look 'under the hood' of Java to understand what happens to code when we run it and
why it may have a performance disadvantage to its other object-orientated counterparts.
</p>
<br>
<h4>Compiling vs Interpreting</h4>
<p>
When we write software code, we are, more-often-than-not, writing in a high-level language that is to be converted and understood by the computer.
The high-level code contains easy-to-read syntax that is then compiled into a lower level language (such as machine/binary code) that is to be executed by the CPU.
The process of taking the high-level code and translating it into a lower level is often a defining feature of a programming language that will 
underpin the performance and properties of the language.  
</p>
<p>
It is important to distinguish between the word 'compile' and 'interpret' before we begin exploring the Java engine. 'Compile' involves converting a language
into a different level of language (often down). Interpret however involves converting the language into a similar-level language.
A good analogy would be an English to French <i>interpreter</i> who simply converts one language into the other at the same level of understanding. 
</p>
<br>
<h4>The Java Compiler</h4>
<p>
Before Java code is processed by the Java engine, it is first compiled with the Java compiler.
The Java compiler will first inspect the code to ensure it can be processed by the Java engine. Code inspection includes checking for TypeErrors
(such as passing in the incorrect parameter to a method) and Syntax errors. Compile errors are usually captured by a modern IDE such as IntelliJ or Eclipse as it actively analyses code as it is written.
</p>
<p>
The Java compiler is later used to convert the high-level Java programming language code into a lower level 'bytecode' that is similar to machine code; 
as a result, the .java files are compiled into .class files of bytecode (see the /target directory of your project after creating a build). 
The bytecode is later received and processed by the Java engine.
</p>

<br>
<h4>Code Interpretation and Execution</h4>
<p>
The Java engine that performs the compilation and interpretation of code is known as the Java Virtual Machine (JVM).
The JVM resides within the RAM where it receives the bytecode following the first compilation step. 
The JVM acts as a runtime engine that enables Write Once Run Anywhere (WORA); unlike other languages such as C++, Java code is not converted explicitly for the operating
system that is running the code, but for the JVM which will be identically running the application regardless of the operating system. 
</p>
<p>
The JVM steps for processing code is split into 3 key sections:
1. Class loader - where the files are loaded into the JVM to be later stored and used. 
2. Runtime data area - where memory area is designated for classes to be stored for execution. 
3. Execution Engine - where bytecode is interpreted into machine code using the Just In Time Compiler and is executed.
</p>

<br>
<h4>Class loader</h4>
<p>
The Classloader is responsible for loading the .class bytecode files from the target directory into the JVM. This process is known as <i>loading</i>.
</p>
<p>
After loading, a second phase called <i>linking</i> begins. During linking, memory is designated for static variables of each class and the default values are assigned. 
The processing of linking is divided into three steps: first the type safety of Objects are verified, second, the memory required by the Object is allocated, and the final stage of resolution is the process of replacing the symbolic references of classes with real class references.  
</p>
<p>
The final stage of the class loader is called <i>initialisation</i>. Initialisation involves invoking the initialisation method of the class (use of the 'new' keyword) and the static blocks e.g:

```java
public class MyClass{

    static{

        //static initialisation block

    }
}

```
</p>

<br>
<h4>Runtime data area</h4>
<p>
The runtime data area contains the compiled code as well as the methods and properties of classes that are used for execution. 
The sequential instructions (which piece of code to execute) of the application are followed within the runtime data area as Objects are managed and used accordingly.
</p>
<p>
The Runtime data area is split into 5 different areas with its own responsibility:<br>
1. Method Area: An area shared across all threads of the runtime environment, the method area stores static variables of each class.<br>
2. Heap Space: Stores the objects and instance variables being created and used at runtime. The area is managed using <a href="https://aneesh.co.uk/how-the-jvm-manages-memory">Garbage collection</a>.<br>
3. Stack Memory: Each thread contains its own stack memory. This is where <u>local</u> variables and memory from method calls are held. When the memory being held on the stack exceeds its limit, a <code>StackOverflowException</code> is thrown. <br>
4. Program Counter Register: Acts as a pointer to the current instruction of the program.<br>
5. Native method stack: Similar to the stack memory, however it is used for executing methods that are not written with Java. 
</p>

<br>
<h4>Execution engine</h4>
<p>
While the runtime data area manages the Objects and properties of our classes at runtime, the execution engine is responsible for executing the logic 
of the application with the computer, assisted by the various areas of the runtime data area. 
</p>
<p>
There are 3 main components to the engine:<br>
1. Interpreter: Responsible for reading the bytecode into machine code to be executed in a sequential manner.<br>
2. Just in time (JIT) compiler: Provides support to the interpreter. Rather than repeatedly interpreting the same bytecode from repeated method calls, the JIT will use its profiler to identify 'hotspot' areas within the application that are repeatedly executed. The JIT provides a performance enhancement for the interpreter.<br>
3. The garbage collector. Responsible for allocating and removing memory storage for the heap space Objects.
</p>

<br>
<h4>Why Java is perceived as 'slow'</h4>
<p>
The broadly incorrect reputation Java acquired from its earlier days with 'slow' processing speed came by its comparison with other object-orientated programming languages.
The present existence of Java (currently version 16) includes far greater performance optimisation than its first versions. 
Despite this, Java still retains certain 'slow' features that are embedded by its design and implementation. 
The 'slow' features include the following:<br>
</p>
<p>
1. Multiple-compilation<br>
The Java code we write is compiled twice: once with the Java compiler into .class files, and sometimes again within the JVM by the JIT compiler.
The JIT compiler acts as an optimizer, preventing the JVM from repeatedly interpreting code again and again. Instead, code is compiled to native machine code
that can then be executed. Compilation happens to be a major driver in execution times, and can therefore impact the overall speed of Java.
</p>
<p>
2. Java encourages code to be written for correctness and readability, rather than performance.<br>
The linking process of the ClassLoader creates a large startup time (known as warm-up time) as it allocates memory and assigns references to Objects for the application to begin. 
The process of linking occurs each time the application is run, however in other languages such as C, the linking process only occurs once following compilation. 
</p>
<p>
3. The Java String Object<br>
Java stores and handles Strings in a unique manner with their own memory area called the <a href="https://aneesh.co.uk/the-string-class">String constant pool</a>.
The combination of how Strings are handled as immutable Objects and their use of UTF-16 encoding, contributes to a large memory requirement and inhibition upon performance.
</p>

<br>
<h4>Summary</h4>
<p>
In this blog, we have taken a look at how the high-level code we write undergoes many transformations and movement within our CPU as it is executed.
Java, like all languages, has its own style and design to compiling and interpreting code that provides the developer with unique features such as WORA and static typing.
</p>
<p>
When comparing Java with other languages, there will always be arguments for and against where the properties of compilation time, execution time, syntax, and portability all play a 
vital role on a case-by-case basis. 
By understanding these concepts with reference to Java, you can begin to understand why certain technologies can be more appropriate to use in certain contexts, and when Java
can be the technology of choice for you.  
<br>
<small style="float: right;" >Picture: Nine Arches Bridge, Elle, Sri Lanka by <a target="_blank" href="https://unsplash.com/@egle_sidaraviciute">Egle Sidaraviciute</small></a><br>