---
title: 'Inside Java: why it works everywhere'
date: 2020-09-28 16:34:00
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
&#8226; Understand how Java uses its own engine to interpret and execute code.<br>
&#8226; Review the multiple stages of compilation and execution that support the type safety and memory management properties of Java.<br>

<br>
<h4>Java - a 30 year old language</h4>
<p>
Java programming language is one of the most popular programming languages in the world that is prevalent across industries and careers. You can gather an idea of
how diverse and important Java has been in shaping peoples lives by searching upon the hashtag #movedByJava. 
</p>
<p>
Until recently, Java had remained as one the two most highly used languages on GitHub since 2012; it has since been overtaken by the languages Python and JavaScript. 
The popularity of Python and JavaScript, two scripting languages, is their syntax design is easier and more intuitive to use. Rapid prototyping is supported by the languages
and more importantly, without a typical engineering background to learn. 
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
into a different level (often down) that is later used in the engine. Interpret however involves converting the language into a similar-level language.
A good analogy would be an English to French <i>interpreter</i> who simply converts one language into the other at the same level. 
</p>
<br>
<h4>The Java Compiler</h4>
<p>
Before Java code is processed by the Java engine, it is first compiled with the Java compiler.
The Java compiler is used to convert the high-level Java programming language code into a lower level bytecode that is similar to machine code; 
as a result, the .java files will be compiled into .class files of bytecode (see the /target directory of your project). 
The bytecode is later received and processed by the Java engine.
</p>
<p>

Compilation doesn't just involve the conversion of the .java files into .class files.

The compiler will also check the access rights between methods with method calls.

The bytecode '.class' files are platform independent and allow the JVM to run equally on any operating system.
The bytecode is known as an assembly language, which is the only language understood by the Java engine for processing.
</p>

<br>
<h4>Code Interpretation and Execution</h4>
<p>
The Java engine that performs the compilation and interpretation of code is known as the Java Virtual Machine (JVM).
The JVM resides within the RAM where it receives the bytecode following compilation. 
The JVM acts as a runtime engine that enables Write Once Run Anywhere (WORA); unlike other languages such as C++, Java code is not converted explicitly for the operating
system that is running the code, but just for the JVM which will be identically running the application regardless of hardware or operating system. 
</p>
<p>
The JVM steps for processing code is divided into 3 key sections:
1. Class loader - where the files are loaded into the RAM of the operating system. 
2. Method area - where methods are run
3. Execution Engine - Where bytecode is interpreted into machine code using Just In Time Compiler. Interpreting differs to compiling as the code is converted at the same level, not into a different level of language. 
</p>

<br>
<h4>Class loader</h4>
Java is type-safe meaning the data type must hold the correct type of data. 
Part of the Java compiler involves checking the types of the properties assigned
<p>
<strong>Classloader</strong> the first component
it involves loading, linking, and initialising
loading: .java files are compiled with the Java Compiler to create the .class files. 
the class loader loads the .class files into the memory
There are 3 types of classloader, bootstrap, application, and extension. 
Bootstrap will load from runtime jar.  The runtime Jar is part of the JRE download. 

Extension classloader will load the files from the jre/lib/ext folder. Such as for external applications such as MQs, DBs. These jar files are added to the extension folder and loaded
THESE are loaded to the memory area

Application will load the application files into the memory. all the .class files are loaded into the runtime environment

</p>
<p>
Linking
This involves 3 key activities: verify, prepare and resolve

verify:
when class files are loaded to memory, the bytecode class files are verified to standards
Bytecode verifier
When the class files are loaded into the JVM, they are then verified to ensure they do not perform acts that may 
inhibit the execution of the program:
- variables must be initialised before being used
- the stack does not become overflowed
- variables fall within the stack at execution


Prepare: Memory allocated to static fields and methods and the default values are assigned

Resolve: symbolic reference are resolved with actual references. 

</p>
<p>
Initialisation
all static variables are assigned with actual values and static initialisers are executed

```java
public class App{

    static{
        System.out.println("Classloader initialisation phase");
    }

}

```
</p>
<br>
<h4>Method area</h4>
<p>
<strong>Method area</strong>
This is split into 5 areas:
1. method area for class level data 
Heap: all objects and instance viaraible
stack: local variable and execution stack
PC registrar: holds execution instructions
native method stacks: holds native method information
</p>

<br>
<h4>Execution engine</h4>
The first class loaded into the JVM will contain the public static void main method. The later referenced classes by the 
public static void main method will be loaded following this. 
<p>
3rd main part: Execution engine

Engine that converts bytecode to machine code and executes the instructions
consists of: interpreter, JIT compiler, java native method interface, garbage collector
</p>
<p>
Interpreter: reads the bytecode from the class files and executes it sequentially. bytecode is reinterpreted even if it is a method previously called
</p>
<p>
Java code is actually compiled twice: once with the java compiler from .java files into .class files, and second within the JVM with the JIT compiler. 
JIT compiler: resolves the problem of the interpreter that reinterepets executed code. JIT compiler will generate native machine code to 
improve performance for repeated method calls. it will use a profiler to find hotspots which are repeated methods within the stack
The final stage of the compilation uses the Just-In-Time compiler where the loaded bytecode is converted into machine code.
Rather than having the JVM repeatedly interpret the same code and to send it to the OS to execute the machine code, the
OS is able to repeatedly execute the same machine code when required.
The separation of the JVM with bytecode and the OS machine code means Java is platform independent. This same separation also creates a difference in the execution time of the program when compared to a platform-specific language that is completely compiled.

</p>
<p>
GC: removing unused objects
</p>
<p>
Java native method interface: makes native libraries available for the jvm
</p>

<br>
<h4>Summary of the JVM</h4>
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