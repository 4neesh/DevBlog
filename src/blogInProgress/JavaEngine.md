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
<h4>How the JVM works</h4>
<p>
Java is type-safe meaning the data type must hold the correct type of data. 
Part of the Java compiler involves checking the types of the properties assigned
Java compiler is a bytecode compiler meaning it will create a .class file from the java file which is
strictly bytecode. The compiler will also check the access rights between methods with method calls.
The bytecode .class files are platform independent and allow teh JVM to run on any operating system.
</p>
<p>
The JVM takes the bytecode and interprets it into machine code. The JVM provides functionality to the 
application for example with exception handling, type conversion, Object creation. 
There are three main stages to the JVM for the execution of the bytecode in the .class files.
The first class loaded into the JVM will contain the psvm method. The later referenced classes by the 
psvm method will be loaded following this. 

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
<h4></h4>
<p>


</p>

<br>
<h4>Summary</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>