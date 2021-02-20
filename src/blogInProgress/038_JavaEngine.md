---
title: 'Under the hood of the JVM'
date: 2020-09-28 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
subtitle: 'xxx'
time: 'xx'
tags:
- xxx
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)

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
<h4>Inside the JVM</h4>
<p>
A typical programming language will include an engine that is responsible for taking the written code and converting it into machine code that is then run by the operating system to create the application.
Java differs from these languages as it instead produces code for a virtual machine that resides within the RAM that will execute the code, the Java Virtual Machine. It is for this reason that Java achieves its unique property of Write Once Run Everywhere; your java code will execute in the same way regardless of operating system. Other language will otherwise require an operating-system specific compiler for depending on where it is run.
</p>
<p>
The JVM process for processing code is divided into many different sections:
1. Class loader - files are loaded into the RAM of the operating system. 
2. Method area
3. Heap
4. JVM Language Stacks
5. PC Registers
6. Native Method Stack
7. Execution Engine - Bytecode is interpreted into machine code using Just In Time Compiler. Interpreting differs to compiling as the code is converted at the same level, not into a different level of language. 
8. Native Method Interface
9. Native Method Libraries
</p>
<p>
Java is type-safe meaning the data type must hold the correct type of data. 
Part of the Java compiler involves checking the types of the properties assigned
The Java compiler is used to convert the high-level Java programming language into a lower level bytecode that is similar to machine code; this  will lead to the creation of a .class file from the java file which is
strictly bytecode. The compiler will also check the access rights between methods with method calls.
The bytecode '.class' files are platform independent and allow the JVM to run equally on any operating system.
</p>
<p>
The JVM takes the bytecode and interprets it into machine code. The JVM provides functionality to the 
application for example with exception handling, type conversion, Object creation. 
There are three main stages to the JVM for the execution of the bytecode in the .class files.
The first class loaded into the JVM will contain the public static void main method. The later referenced classes by the 
public static void main method will be loaded following this. 

</p>
<p>
<strong>Bytecode verifier</strong>
When the class files are loaded into the JVM, they are then verified to ensure they do not perform acts that may 
inhibit the execution of the program:
- variables must be initialised before being used
- the stack does not become overflowed
- variables fall within the stack at execution
</p>
<p>
The final stage of the compilation uses the Just-In-Time compiler where the loaded bytecode is converted into machine code.
Rather than having the JVM repeatedly interpret the same code and to send it to the OS to execute the machine code, the
OS is able to repeatedly execute the same machine code when required.
The separation of the JVM with bytecode and the OS machine code means Java is platform independent. This same separation also creates a difference in the execution time of the program when compared to a platform-specific language that is completely compiled.

</p>
<p>
The <i>relatively</i> slow start up time for the JVM is known as the 'warm-up time'. The warm-up time means 
the initial execution of the application may be slower than normal. 
During the warm-up, the initial classes for the application are loaded into JVM cache to be loaded as machine code. 
Once classes are loaded, the OS is able to re-use the classes during runtime. The initial load of the classes
create a slower experience as the JIT compiler loads classes as they are required. 
</p>
<br>
<h4>Criticism of Java</h4>
<p>
Dynamic linking is done at runtime and not compile time. Therefore it slows down execution.

Run-time interpreter for conversion of bytecode into machine code is also done at runtime. 
</p>

<br>
<h4>Summary</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>