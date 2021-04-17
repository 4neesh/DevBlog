---
title: 'Inside Java: why it works everywhere'
date: 2021-05-17
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
subtitle: 'Take a look under the hood of Java to understand how code is compiled, interpreted and executed within the machine.'
time: '8'
tags:
- Java
- JVM
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand how the Java engine works to interpret and execute code.<br>
&#8226; Review the multiple stages of compilation and execution that support the type safety and memory management properties of Java.<br>

<br>
<h4>Java - a 30 year old language</h4>
<p>
Java programming language is one of the most popular programming languages in the world that is prevalent across industries and careers. You can gather an idea of
how diverse and important Java has been in shaping peoples lives by searching upon the hashtag #movedByJava with social media platforms such as Twitter. 
</p>
<p>
Until recently, Java had remained as one the two most highly used languages on GitHub since 2012; it has since been overtaken by the languages Python and JavaScript. 
The popularity of Python and JavaScript, two scripting languages, is due to their syntax design that makes it easier to learn and build with.
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
The high-level code contains easy-to-read syntax that is then compiled into a lower level language (such as machine code) that is to be executed by the CPU.
The process of taking the high-level code and compiling it into a lower level is often a defining feature of a programming language that will 
underpin the performance and properties of the language.  
</p>
<p>
It is important to distinguish between the word 'compile' and 'interpret' before we begin exploring the Java engine. 'Compile' involves converting a language
into a different level of language (often down). Interpret however involves converting the language into a similar-level language.
A good analogy would be an English to French <i>interpreter</i> who simply converts one language into the other at the same level. 
</p>
<br>
<h4>The Java Compiler</h4>
<p>
Before Java code is processed by the Java engine, it is first compiled with the Java compiler.
The Java compiler will first inspect the code to ensure it can be processed by the Java engine. Code inspection includes checking for TypeErrors
(such as passing in the incorrect parameter to a method) and Syntax errors. Compile errors are usually captured with a modern IDE as it monitors for compile errors as code is written.
</p>
<p>
The Java compiler is later used to convert the high-level Java programming language code into a lower level 'bytecode' that is similar to machine code; 
as a result, the .java files will be compiled into .class files of bytecode (see the /target directory of your project after creating a build). 
The bytecode is later received and processed by the Java engine.
</p>

<br>
<h4>Code Interpretation and Execution</h4>
<p>
The Java engine that performs the compilation and interpretation of code is known as the Java Virtual Machine (JVM).
The JVM resides within the RAM where it receives the bytecode following compilation. 
The JVM acts as a runtime engine that enables Write Once Run Anywhere (WORA); unlike other languages such as C++, Java code is not converted explicitly for the operating
system that is running the code, but for the JVM which will be identically running the application regardless of hardware or operating system. 
</p>
<p>
The JVM steps for processing code is split into 3 key sections:
1. Class loader - where the files are loaded into the JVM to be later stored and used. 
2. Runtime data area - where memory area is designated for classes to be stored for execution. 
3. Execution Engine - where bytecode is interpreted into machine code using Just In Time Compiler and executed.
</p>

<br>
<h4>Class loader</h4>
<p>
<strong>Classloader</strong>
The Classloader is responsible for loading the .class bytecode files from the application into the JVM. This process is known as <i>loading</i>.
<br>
After loading, a second phase called <i>linking</i> begins. During linking, memory is designated for static variables of each class and the default values are assigned. The symbolic references of classes are replaced with actual class references that are then linked together to form a runtime state for the which the JVM can be later executed. The processing of linking involves building the relationships between classes. 
<br>
The final stage of the class loader is called <i>initialisation</i>. Initialisation involves assigning values to the static members of the classes so that they are ready to be used by the runtime execution and the execution of the static blocks of code within our classes e.g:

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
The <strong>Runtime data area</strong> is split into 5 different areas:<br>
1. Method Area: stores static variables of each class<br>
2. Heap Area: all objects and instance variables are stored.<br>
3. Stack Memory: holds data of latest execution block<br>
4. PC Register: holds execution instructions<br>
5. Native method stack: holds native method data.
</p>

<br>
<h4>Execution engine</h4>
The execution engine is responsible for the execution of teh bytecode by converting it to machine code to be executed. There are 4 main components to the engine.
The Interpreter will read the bytecode to be executed in a sequential manner. 
The JIT compiler will support the interpreter to repeatedly execute methods that are repeatedly called. The JIT will use its profiler to identify 'hotspots' which are areas within the application that are executed repeatedly. This provides a performance improvement, otherwise the interpreter would repeatedly compile the same methods over and over again. 
The garbage collector. Responsible for managing the heap space of objects. 
<p>
Java code is actually compiled twice: once with the java compiler from .java files into .class files, and second within the JVM with the JIT compiler. 
JIT compiler: resolves the problem of the interpreter that reinterepets executed code. JIT compiler will generate native machine code to 
improve performance for repeated method calls. it will use a profiler to find hotspots which are repeated methods within the stack
The final stage of the compilation uses the Just-In-Time compiler where the loaded bytecode is converted into machine code.
Rather than having the JVM repeatedly interpret the same code and to send it to the OS to execute the machine code, the
OS is able to repeatedly execute the same machine code when required.
The separation of the JVM with bytecode and the OS machine code means Java is platform independent. This same separation also creates a difference in the execution time of the program when compared to a platform-specific language that is completely compiled.
</p>

<br>
<h4>Why Java is perceived as 'slow'</h4>
<p>
Despite the advantages of Java as a compiled programming language, it is often thought to be a slow execution language due to two properties:<br>
1. The linking process during the class loader
2. The runtime interpreter that converts bytecode to machine code further slows down runtime. 

</p>
<br>
<h4>Summary</h4>
<p>
The <i>relatively</i> slow start up time for the JVM is known as the 'warm-up time'. The warm-up time means 
the initial execution of the application may be slower than normal. 
During the warm-up, the initial classes for the application are loaded into JVM cache to be loaded as machine code. 
Once classes are loaded, the OS is able to re-use the classes during runtime. The initial load of the classes
create a slower experience as the JIT compiler loads classes as they are required. 
Dynamic linking is done at runtime and not compile time. Therefore it slows down execution.

Run-time interpreter for conversion of bytecode into machine code is also done at runtime. 

</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>