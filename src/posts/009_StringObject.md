---
title: 'The String class in java'
date: 2020-06-01 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/009Uluru.jpg
thumbnail: '../images/009Uluru.png'
subtitle: 'A look into the properties of the String class, one of the most used classes across the Java API.'
time: '6'
tags:
- Java
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The String class is immutable and final.<br>
&#8226; The String class is unique due to its dependency across different Java APIs.<br>
&#8226; The StringBuffer and StringBuilder classes offer unique properties that allow the developer to use Strings in different ways.<br>

<br>
<h4>Introduction to java.lang.String</h4>
<p>
The String class is used in Java to create String objects; each String Object is immutable and final, and therefore thread-safe. The following two methods demonstrated how a String can be defined as either the 'new' operator or a literal:
</p>

```java{numberLines:true}
String stringOne = new String("Hello");

String stringTwo = "World";

```
<p>
<strong>String pool</strong><br>
When a String is created, the JVM will place the Object into the 'String pool', a dedicated memory area within the heap space. The String pool is a place in the heap space where other Strings may reference the same Object if they exist as the same value. Therefore, when a String is to be created, the JVM will first verify with the String pool that the String does not already exist. The String pool provides a performance enhancement to the JVM to prevent repeated Object creation.<br>
When stringOne is created, the Object is created in the heap space. When stringtwo is created, it is created in the String pool. When stringThree is created, it simply points to stringOne.

</p>

<p>
In the below code sample, the String Object <code language="java">stringOne</code> is first created as "Hello". In the second line, the Object appears to be changed into "World". In the JVM, two Objects are created in the String pool. When the second line has been run, the reference to the String "Hello" is lost, but the Object remains in the String pool. 
</p>

```java{numberLines:true}

String stringOne = new String("Hello");

String stringTwo = "World";

String stringThree = "Hello";

```

![String pool diagram](../../src/images/009StringPool.png)

<br>
<h4>Interning Strings</h4>
<p>
<code language="java">intern()</code> is a public method of the String class that is used to assign a String object into the String pool. All literal instantiations of a String object call the intern() method by default. In the example below, stringOne is created once, in the heap memory, and stringTwo is created twice: in the heap and String pool.
</p>

<h4>Comparing Strings</h4>
<p>
String objects can be compared with either <code language="java">==</code> or <code language="java">.equals()</code>. <code language="java">==</code> will compare the memory locations of the two Strings, whereas <code language="java">.equals()<code> will compare the value of the Strings. To demonstrate the function of the <code language="java">intern()</code> method, the <code language="java">==</code> comparator will return true when a new String Object applies the <code language="java">intern()</code> method to add it into the String pool. The <code language="java">intern()</code> method is only necessary when Strings need to be compared using <code language="java">==</code>. 
</p>

```java{numberLines:true}

String stringOne = "Hello";

String stringTwo = new String("Hello");
String stringThree = new String("Hello").intern();

System.out.println(stringOne == stringTwo);         //false
System.out.println(stringOne == stringThree);       //true
System.out.println(stringOne.equals(stringTwo));    //true
System.out.println(stringOne.equals(stringThree));  //true

```

<h4>StringBuffer and StringBuilder</h4>
<p>
The StringBuffer and StringBuilder classes provide different implementations for using Strings within an application. Both Objects are created in the heap memory and provide functions that enable a String to be manipulated and accessed in memory. 
</p>
<p>
The StringBuffer and StringBuilder come with many predefined methods that enable a String to be manipulated. An additional benefit is that their use can resemble a builder pattern to enhance code readability:
</p>

```java{numberLines:true}
    public void createString(stringArg){
    
        StringBuilder sb = new StringBuilder();

        sb.append(stringArg);           //add argument to sb
        sb.insert(3,"__");       //add "__" at third position
        sb.deleteCharAt(sb.length()-1); //remove the final char
        return sb.toString();           //return as a String object

    }

```
<p>
<strong>StringBuffer</strong> is a mutable Object. When a String object is created, its value cannot be changed. When a StringBuffer Object is created, its value can be changed. 
<br>
<strong>StringBuilder</strong> Objects are identical to StringBuffer except they are not thread-safe. The StringBuilder Object can be accessed simultaneously by different threads, which can create a performance enhancement at the potential cost of data integrity.
</p>

<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: Ayers Rock, Uluru by <a target="_blank" href="https://unsplash.com/@henriquefelix">Henrique Félix</small></a><br>