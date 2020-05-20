---
title: 'Java Strings'
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
&#8226; String literals are stored within a dedicated area within the heap.<br>
&#8226; String instances can be compared in different ways.<br>
&#8226; The StringBuffer and StringBuilder classes offer methods that allow String Objects to be handled as a mutable Object.<br>

<br>
<h4>Introduction to java.lang.String</h4>
<p>
The String class is used in Java to create an immutable sequence of unicode characters; each String Object is immutable and final, and therefore thread-safe. The following code sample demonstrates how a String can be instantiated with the <code language="java">new</code> operator or as a literal:
</p>

```java{numberLines:true}
    String stringOne = new String("Hello");
    String stringTwo = "World";
```
<p>
The way a String Object is stored within memory is dependent upon how it is instantiated. The <code language="java">new</code> operator will assign the String into the heap memory, the literal String, however, will be assigned into the <i>String pool</i>.
</p>
<p>
<strong>String pool</strong><br>
The String pool is a dedicated area within the heap memory for storing String Objects.  Before a String literal is created, the JVM will scan the String pool to check if the String value already exists; if the String already exists within the String pool, the String literal will point to the String Object within the String pool.<br>
The String pool is demonstrated using the below example:
</p>

```java{numberLines:true}
    String stringOne = new String("Hello");
    String stringTwo = "World";
    String stringThree = "World";

```
<p>
&#8226; When <code language="java">stringOne</code> is created, the String Object is created in the heap space.<br>
&#8226; When <code language="java">stringTwo</code> is created, the String is assigned to the String pool.<br>
&#8226; When <code language="java">stringThree</code> is created, the literal will point the existing String in the String pool.

</p>

![String pool diagram](../../src/images/009StringPool.png)

<p>
The immutable nature of a String Object means new Objects are created if the value of String is update. If Strings <code language="java">stringTwo</code> and <code language="java">stringThree</code> were assigned to different values, the JVM will create two new Objects. The String pool will retain the memory address of the value "World", however it will remain unreferenced in the pool:
</p>

```java{numberLines:true}
    String stringTwo = "World";
    String stringThree = "World";
    stringTwo = "Hello";
    stringThree = "Gosling";
```

![String pool diagram](../../src/images/009StringPoolUpdate.png)


<br>
<h4>Interning Strings</h4>
<p>
<code language="java">intern()</code> is a public method of the String class that is used to assign a String Object into the String pool. All literal instantiations of a String object call the intern() method by default. When a String is created with the <code language="java">new</code> operator, the <code language="java">intern()</code> method is not called and the String is only stored in the heap. Calling <code language="java">intern()</code> on a String Object that is instantiated with the <code language="java">new</code> operator will provide <strong>additional</strong> storage of the String into the String pool. As a result, two String can be compared using the <code language="java">==</code> operator as opposed to the <code language="java">.equals()</code> method which saves time in testing.<br>
The below example demonstrates the use of <code language="java">intern()</code>: <br>
&#8226; stringOne is created once: in heap memory<br>
&#8226; stringTwo is created twice: in the heap and String pool.<br>
</p>

```java{numberLines:true}
    String stringOne = new String("Hello");
    String stringTwo = new String("World").intern();

```

![String operator diagram](../../src/images/009StringOp.png)

<br>
<h4>Comparing Strings</h4>
<p>
String Objects can be compared with either <code language="java">==</code> or <code language="java">.equals()</code>. <code language="java">==</code> will compare the memory locations of the two Strings, whereas <code language="java">.equals()</code> will compare the value of the Strings.
The motivation for using the <code language="java">intern()</code> method, therefore, would be to ensure the <code language="java">==</code> comparator will return true when a new String Object is compared with any kind of String literal with the same value. Although the <code language="java">==</code> method is a more time efficient method for comparison, the purpose for using <code language="java">==</code> in the context of String Objects is not as frequent.<br>
The code sample below demonstrates how different String Objects can be compared using their memory address and value:
</p>

```java{numberLines:true}

    String stringOne = "Hello";
    String stringTwo = new String("Hello");
    String stringThree = new String("Hello").intern();

    System.out.println(stringOne == stringTwo);         //false
    System.out.println(stringOne == stringThree);       //true
    System.out.println(stringOne.equals(stringTwo));    //true
    System.out.println(stringOne.equals(stringThree));  //true
    System.out.println(stringTwo == stringThree);       //false

```

<h4>StringBuffer and StringBuilder</h4>
<p>
The StringBuffer and StringBuilder classes provide support to using Strings as mutable Objects. StringBuffer and StringBuilder Objects are created within the heap memory.
</p>
<p>
The StringBuffer and StringBuilder classes differ by their thread safety. StringBuffer Objects accessed through synchronized methods and can therefore only be accessed by a single thread at a single time. The StringBuilder Object is not thread-safe and can be accessed simultaneously by different threads. The StringBuilder class is often preferred due to its increased time performance, however the integrity of the data within a String must be considered on an application-by-application basis.
</p>
<p>
Both StringBuffer and StringBuilder Objects provide functions that enable a String to be manipulated and accessed in memory:<br>
&#8226; <code language="java">append(String)</code> to concatenate String Objects onto the StringBuffer/Builder<br>
&#8226; <code language="java">insert(int, String)</code> to insert the specified String within the StringBuffer/Builder at the <code language="java">int</code> position.<br>
&#8226; <code language="java">reverse()</code> to reverse a String.<br>
&#8226; <code language="java">delete(int, int)</code> to delete the characters from the start and end index defined by the two arguments.<br>
An additional benefit to using the StringBuffer and StringBuilder aligns to their resemblance of the builder pattern to enhance code readability:
</p>

```java{numberLines:true}
    public void createString(stringArg){
    
        StringBuilder sb = new StringBuilder();

        sb.append(stringArg);           //add argument to sb
        sb.insert(3,"__");              //add "__" at third position
        sb.deleteCharAt(sb.length()-1); //remove the final char
        return sb.toString();           //return sb as a String object

    }

```
<br>
<h4>Conclusion</h4>
<p>
The String class is uniquely handled by the JVM with an optimized pipeline and storage during instantiation. The immutability of a String means new Objects are created when the String value is modified. While it is unconventional, a String Object can be instantiated into the heap memory which effectively alters how the String Object is evaluated when compared to other String Objects. Lastly, the JVM offers two classes: StringBuffer and StringBuilder to provide functionality to String Objects as though they were a mutable Object.
</p>

<br>
<small style="float: right;" >Picture: Ayers Rock, Uluru by <a target="_blank" href="https://unsplash.com/@henriquefelix">Henrique Félix</small></a><br>