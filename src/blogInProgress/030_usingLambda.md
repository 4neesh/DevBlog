---
title: 'Using lambda expressions in Java'
date: 2020-10-26
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
subtitle: 'xxx'
time: '8'
tags:
- Java
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)
 
<br>
<h4>Lambda and Functional programming</h4>
<p>
Lambda functions were introduced to Java in Java 8 as a step towards functional programming within Java.
Functional programming enables a developer to pass functions around the application without having to create an Object to which the function belongs. The result, is dynamic and flexible code that can be used to perform algorithms upon inputs with minimalistic code.
</p>
<p>
Lambda functions in Java can be used to reduce the boilerplate code required for a functional interface. A functional interface is an interface with a single abstract method. The functional interface will therefore be implemented with a single overridden method. 
</p>
<p>
Introduce functional programming
</p>
<br>
<h4>Anonymous classes</h4>
<p>
An anonymous class is one that does not have a name. We often use anonymous classes to define an implementation of an interface to use within the body of our source code. 
The below example of an interface <code>Engine</code> has a single abstract method that defines the size of it from the method:
</p>

```java{numberLines:true}
public interface Engine{

    int getSize();
}

```
<p>
In our application, we can define an anonymous implementation of Engine within the application code:
</p>

```java{numberLines:true}

public void getProperties(){


    Engine engine = new Engine(){

            @Override
            public int getSize() {
                return 10;
            }
        };
    System.out.println("Engine size: " + engine.getSize());
}
```
<p>
The anonymous function is implemented by creating an instance of Engine with 
</p>

<br>
<h4>Lambda functions</h4>
<p>
Then show how the above function can be used with Lambda. Show what boilerplate code is removed. 

Show a diagram of how Lambda can be broken down (arg arrow block). mention block is only needed for multiple lines. 
</p>
<p>
then show how it can be adapted for multiple arguments and blocks of code. 

</p>
<br>
<h4>Lambda functions in the compiler</h4>
<p>
when created, it is matched to the abstract method and turned into a function that implements interface
Uses type inference from method declaration at compile time to know args provided and return type. 
</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>