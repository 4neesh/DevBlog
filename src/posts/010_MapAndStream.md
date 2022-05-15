---
title: 'Collecting a map in the Stream API'
date: 2020-06-08 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/010Bastrop.jpg
subtitle: 'Use the Stream API from Java 8 to navigate and transform a Map collection.'
time: '8'
tags:
- Java
- Data Structures
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand the advantages of using the Stream API.<br>
&#8226; Transform a Map into another Map using a stream.<br>
&#8226; Explore the 3 overloaded <code language="java">toMap()</code> methods of the Collector class.<br>

<br>
<h4>Introduction to the Stream API</h4>
<p>
The Stream API creates a pipeline to process and transform data in bulk operations. Stream introduces functional programming capabilities to Java where data is collectively resolved. 
</p>

<p>
Stream operations are categorised as either <strong>terminal</strong> or <strong>intermediate</strong>:

&#8226; <strong>Intermediate operations</strong> will listen to elements being passed within the stream and will perform a function on the data. Together, intermediate operations form a pipeline for which the data is processed.<br>
&#8226; <strong>Terminal operations</strong> will invoke the intermediate operations of a stream to return a single result.<br>
All streams <u>must</u> contain a single terminal operation and zero or more intermediate operations.
</p>

<br>
<h4>Stream API features</h4>
<p>
The Stream API introduces 4 features for processing data in bulk operations:<br>
</p>
<p>
<strong>Short circuiting</strong> allows an infinite size data source be processed within finite boundaries. The following methods demonstrate short circuiting behaviour:<br>
&#8226; <code language="java">limit(n)</code> is an intermediate operation to define the number (n) of elements to process.<br>
&#8226; <code language="java">findFirst</code> and <code language="java">matchAny</code> operations are terminal and return the value once a condition is satisfied.
</p>

<p>
<strong>Map Reduce</strong> enables a data source can be transformed and aggregated within the stream:<br>
&#8226; <code language="java">map()</code> is an intermediate operation to transform the data into a new stream.<br>
&#8226; <code language="java">filter()</code> is an intermediate operation to remove elements after passing them through a boolean condition.<br>
&#8226; <code language="java">reduce()</code> is a terminal operation to evaluate all elements of the stream into a single element.<br>
</p>

<p>
<strong>Parallel operations</strong> can be obtained through the Stream API without the complexity of defining threads and operations:<br>
&#8226; <code language="java">parallel()</code> is an intermediate operation to utilise the multiple cores that are available.
</p>

<p>
<strong>Lazy evaluation</strong> describes each stream as intermediate operations are only used when a terminal operation is called. The stream pipeline will accumulate further streams from intermediate operations and traverse through them only if a terminal operation is called.<br>
</p>
<br>
<h4><strong>Obtaining elements from a Map</strong></h4>
<p>
Each Map instance crated has three key collections that can be derived from the key-value pairs:<br>
&#8226; entrySet() returns the key-value pairs as a Set of Map.Entry casted to the key and value types.<br>
&#8226; keySet() returns the keys in a Set casted to the key type.<br>
&#8226; values() returns the values as a Collection casted to the value type.<br>
</p>
<br>
<h4><strong>Transforming a Map</strong></h4>
<p>
The <code language="java">Collectors.toMap()</code> method is a terminal operation that will pass the stream into a Map. The <code language="java">toMap()</code> method is overloaded three ways to support different aggregations of the Map. To demonstrate how the <code language="java">toMap()</code> method can be used, the below Map of United States Presidents and their age at inauguration will be used:

```java{numberLines:true}
    Map<String, Integer> presidentMap = new HashMap<>();
        presidentMap.put("Washington", 57);
        presidentMap.put("Adams", 61);
        presidentMap.put("Jefferson", 57);
        presidentMap.put("Madison", 57);
        presidentMap.put("Monroe", 58);
        presidentMap.put("Q. Adams", 57);
        presidentMap.put("Jackson", 61);
        presidentMap.put("Van Buren", 54);
        presidentMap.put("Harrison", 68);
        presidentMap.put("Tyler", 51);
```
</p>

<p>
<code language="java"><strong>toMap(Function key, Function value)</strong></code> takes two arguments that will transform the Collection into a new Map. Functions are used to determine the key and values to be added. A lambda expression can be used to obtain the entry set from the Map: <code language="java">entryInstance -> entryInstance.getKey()</code> will obtain the key from each entry. Similarly, <code language="java">entryInstance -> entryInstance.getValue()</code> can be used to obtain the entry value. It is possible to pass the entryInstance into a method that accepts and returns an int to perform business logic. In the below example, a function is used to double the value and assign it into the Map:


```java{numberLines:true}
    Map<String, Integer> collectedByKey = presidentMap
        .entrySet()
        .stream()
        .collect(Collectors.toMap(entryInstance -> entryInstance.getKey(), entryInstance -> entryInstance.getValue()*2));
```

Output:

```
    {
        Madison=114,
        Harrison=136,
        Adams=122,
        Jefferson=114,
        Monroe=116
        Q. Adams=114,
        Van Buren=108,
        Jackson=122,
        Tyler=102,
        Washington=114
    }
```
</p>
<br>
<p>
<code language="java"><strong>toMap(Function key, Function value, BinaryOperator merge)</strong></code> takes a third argument to merge the values of the Map into a new value. The <code language="java">BinaryOperator</code> functional interface will take two arguments of the same type and return the same type back. In the below example, a new Map is returned where the age (Integer) is the key and the president (String) is the value. As more than one president may map to each key, the BinaryOperator will concatenate the presidents as a value. 


```java{numberLines:true}
    Map<Integer,String> accumulateValues = presidentMap
        .entrySet()
        .stream()
        .collect(Collectors.toMap(entry -> entry.getValue(), entry -> entry.getKey(), (presidentOne, presidentTwo) -> presidentOne + ", " + presidentTwo));

```

Output:

```
    {
        51=Tyler,
        68=Harrison,
        54=Van Buren,
        57=Madison, Jefferson, Q. Adams, Washington,
        58=Monroe,
        61=Adams, Jackson
    }

```

</p>
<br>
<p>
<code language="java"><strong>toMap(Function key, Function value, BinaryOperator merge, Supplier mapSupplier)</strong></code> takes a fourth argument, a Supplier, to create a new Map. In this instance, the Supplier creates a LinkedHashMap to maintain the values after they are sorted on line 4. Other implementations of the Map Interface can be used such as a HashTable to ensure concurrent access. In the below example, the presidents are sorted based upon their values and placed into a new LinkedHashMap to maintain the insertion order of each entry.


```java{numberLines:true}
    Map<String,Integer> sortedByValue2 = presidentMap
        .entrySet()
        .stream()
        .sorted(comparingByValue())
        .collect(Collectors.toMap(Map.Entry::getKey,Map.Entry::getValue,(a,b) -> a,LinkedHashMap::new));

```

Output:

```
    {
        Tyler=51,
        Van Buren=54,
        Madison=57,
        Jefferson=57,
        Q. Adams=57,
        Washington=57,
        Monroe=58,
        Adams=61,
        Jackson=61,
        Harrison=68
    }

```
</p>
<br>
<h4>Conclusion</h4>
<p>
The Stream API introduces a new paradigm of functional programming that Java did not have prior to Java 8. The use of intermediate operations allow data to be aggregated and transformed before being collected into a new data structure. <br>
The <code language="java">Collectors.toMap()</code> method can been overloaded with 3 implementations to provide different levels of Map transformations.
The source code from the example in this blog can be found on GitHub <a target="_blank" href="https://github.com/4neesh/DeveloperBlogDemos/tree/master/StreamMap">here.</a>
</p>

<br>
<small style="float: right;" >Picture: Bastrop, United States by <a target="_blank" href="https://unsplash.com/@natalie_rhea">Natalie Rhea Riggs</small></a><br>