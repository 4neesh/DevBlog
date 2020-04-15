---
title: 'Calculating the time complexity of Algorithms'
date: 2020-04-13 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/02Colombia.png
subtitle: 'A look into the Big O Notation, how it is applied to various data structures in Java and how it can be used to calculate the efficiency of an algorithm.'
time: '10'
tags:
- Java
- Algorithms
- Data Structures
---

<br>
<h4>What is Time Complexity?</h4>
<p>
The terms ‘Time Complexity’ and ‘Big O Notation’ are often used synonymously to describe the efficiency of an algorithm with respect to its number of input elements. Defining the efficiency of an algorithm can be difficult while accounting for variables such as memory, disk, and network usage; the Big O Notation provides a classification to define the upper-bound runtime that can be expected from an algorithm's CPU usage alone, therefore discarding the other variables from consideration. </p>
<p>
The Big O is part of a family of asymptotic notations, including Big Theta Θ and Big Omega Ω. The notations define the upper and lower asymptotic bounds for an algorithm. The Big O is only concerned with the approximate worst-case complexity of an algorithm, in other words, the guarunteed time an algorithm will complete within.</p>
<p>
Big O defines how the resources required (from the steps taken) in the algorithm scale as the input elements grow. The Big O does not reflect the performance of an algorithm, which otherwise would capture how much time or memory is consumed when the algorithm is executed.
The graph below highlights 5 classifications an algorithm can have:</p>


![Big O categorization](../../src/images/002Graph.png)

&#8226; <span style="background-color: rgb(0,176,80)">Constant time O(1)</span><br><br>
&#8226; <span style="background-color: rgb(146,208,80)">Logarithmic time O(log n)</span><br><br>
&#8226; <span style="background-color: #FFFF00">Linear time O(n)</span><br><br>
&#8226; <span style="background-color: rgb(237,125,49)">N logarithmic time O(n log (n))</span><br><br>
&#8226; <span style="background-color: rgb(255,0,0)">Polynomial time O(n&sup2;) / Exponential time O(2<sup>n</sup>)</span><br>


<br>
<h4>Defining the Big O of each operation within an algorithm</h4>
<p>

We are able to identify the Big O classification of each operation with the help of the Big O Cheat Sheet found on <a target="_blank" href="https://www.bigocheatsheet.com/">bigocheatsheet.com</a><br>
Below are two examples of algorithms that capture a classifcation themselves from a single operation:<br>

<span style="background-color: rgb(0,176,80)">Constant O(1)</span> translates to ‘Order of 1’. The resources required to complete the operation will not change as the input size grows. The below example illustrates an O(1) operation:<br>
</p>

```java{numberLines: true}
public void algorithm(List<Integer> values){
    System.out.println(values.get(0));
}
```

<p>
<span style="background-color: #FFFF00">Linear complexity O(n)</span>, defines a linear growth of algorithm complexity in-line with the growth of elements. The below code snippet illustrates an operation of O(n)<br>
</p>

```java{numberLines: true}
public void algorithm(int n){
    for (int i = 0; i<n; i++){
        System.out.println("got the value: " + i);
    }
}

```
<p>
The remaining classifications follow the linear complexity pattern, where the resources required will inflate at the respective growth of n. For (n Log (n)), this would mean as the input elements increase, the resources required would approximately increase at the rate of (n log (n)), and so on.
</p>
<br>
<h4>Calculating the Big O of an algorithm</h4>
<p>
We will use the below example to calculate the Time Complexity of an algorithm:<br>
</p>

```java{numberLines: true}
public void calculateMaxValue(List<Integer> values){
    int max = 0;
    for(int i=0; i< values.size(); i++){
        if(values.get(i) > max){
            max = values.get(i);
        }
    }
    System.out.println("Max Value is: " + max);
}

```
<p>
Line 2 has a time complexity of O(1). When we initialise a variable, it is not influenced by the size of 'values' as the input.<br>
The code block from lines 3 to 7 will have a time complexity of O(n). This section of code will run for each value of the List.<br>
If the List values = {1,2,3,6,3}, the code block will run a total of 5 times to validate that it has defined the largest number under integer 'max'. It will run for the value of 1, followed by 2, 3, 6, and finally 3, creating total operations of 5, for a size of n of 5.<br>
Lastly, line 8 will have a time complexity of O(1). The operation will also have no influence from the size of input 'values'. 
</p>
<p>
As we account for the three operations within the algorithm, we have accumulated a time complexity of: O(1) + O(n) + O(1).<br>
The accumulation can be summarised into: 2 O(1) + O(n).<br>
One defining characteristic of the Big O is that it is not concerned with the <u>rate</u> of growth, but it is concerned with the <u>type</u> of growth. Big O will not claim how tightly an algorithm fits within the classification, but it will define the type of classification it falls within.</p>
As we understand that it is only the type of growth we will consider, we can remove the constants from the accumulated time complexity.<br>
As a result, 2 O(1) + O(n) is reduced to: O(1) + O(n).<br>
<p>
With multiple operations within an algorithm, we are able to obtain the Big O of an algorithm by releasing the non-dominant terms.<br>
Working from the least-efficient classifications of Exponential growth, back to Constant growth, we can identify the category the algorithm belongs as soon as any of its operations satisfies a classification.<br><br>
&#8226; Exponential/Polynomial time: &#10008;<br>
&#8226; N logarithmic time: &#10008;<br>
&#8226; Linear time: &#10003;<br>
&#8226; Logarithmic time: &#10008;<br>
&#8226; Constant time: &#10003;
</p>
<p>
As we can see from the above checklist, the algorithm satisfies the Linear time complexity first (due to the for-loop). It later satisfies the constant time, however this is discounted as it is not first satisfied classification. As a result, the algorithm has a Big O Notation of: O(n).<br>
</p>
<p>
The Big O notation enables us to better understand the potential CPU consumption of our algorithm as the input dataset grows.
By acknowledging the Big O when we design algorithms, we will begin to understand and utilise the efficiencies available to us from various data structures to create CPU-optimized algorithms. 
</p>
<br>
<small style="float: right;" >Picture: Cocora Valley, Salento by <a target="_blank" href="https://unsplash.com/@shawn_appel">Shawn Appel</small></a><br>

