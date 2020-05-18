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
&#8226; String literals are stored within a dedicated storage area within the heap.<br>
&#8226; String instances can be compared in different ways.<br>
&#8226; The StringBuffer and StringBuilder classes offer methods that allow the developer to modify Strings as a mutable Object.<br>

<br>
<h4>Introduction to java.lang.String</h4>
<p>
The String class is used in Java to create String Objects; each String Object is immutable and final, and therefore thread-safe. The following code snippet demonstrates how a String can be instantiated with the 'new' operator or as a literal:
</p>

```java{numberLines:true}
String stringOne = new String("Hello");
String stringTwo = "World";

```
<p>
The String object is stored differently within memory depending on how it is instantiated. The 'new' operator will assign the String into the heap memory, the literal String, however, will be assigned into the String pool.<br>
</p>
<p>
<strong>String pool</strong><br>
The String pool is a dedicated area within the heap memory. The String pool is used to assign and obtain String memory addresses when a literal is created. Before a String literal is created, the JVM will scan the String pool to check if the String value already exists. If the String does exist in the String pool, the String literal will point to the Object within the String pool.<br>
The String pool is demonstrated using the below example:<br>
&#8226; When stringOne is created, the String Object is created in the heap space.<br>
&#8226; When stringtwo is created, the String is assigned to the String pool.<br>
&#8226; When stringThree is created, the literal will point the existing String in the String pool.
</p>

```java{numberLines:true}

String stringOne = new String("Hello");

String stringTwo = "World";

String stringThree = "World";

```

![String pool diagram](../../src/images/009StringPool.png)


<br>
<h4>Interning Strings</h4>
<p>
<code language="java">intern()</code> is a public method of the String class that is used to assign a String Object into the String pool. All literal instantiations of a String object call the intern() method by default. When a String is created with the 'new' operator, they are not, therefore <code language="java">intern()</code> can be used to <strong>additionally</strong> store the String in the String pool.<br>
In the example below, stringOne is created once, in the heap memory, and stringTwo is created twice: in the heap and String pool.
</p>

```java{numberLines:true}
String stringOne = new String("Hello");
String stringTwo = new String("World").intern();

```

![String operator diagram](../../src/images/009StringOp.png)

<br>
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
The String class in unique in its accessibility, comparability, and memory consumption. The JVM is optimized to store String Objects in an efficient manner, however 

</p>

<br>
<small style="float: right;" >Picture: Ayers Rock, Uluru by <a target="_blank" href="https://unsplash.com/@henriquefelix">Henrique Félix</small></a><br>