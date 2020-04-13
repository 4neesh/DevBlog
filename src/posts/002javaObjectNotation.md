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
The terms ‘Time Complexity’ and ‘Big O Notation’ are often used synonymously to describe the efficiency of an algorithm with respect to its number of input elements. Calculating the efficiency of an algorithm can be difficult to define with variables such as memory, disk, and network usage; the Big O Notation provides a classification to define the upper-bound runtime that can be expected from an algorithm's CPU usage alone, therefore discarding the other variables from consideration. </p>
<p>
The Big O is part of a family of asymptotic notations, including Big Theta Θ and Big Omega Ω. The notations categorise what the upper and lower asymptotic bounds are for an algorithm. The Big O is only concerned with the approximate worst-case complexity of an algorithm, therefore the complexity of the algorithm with larger sets of data will move it's complexity closer towards the Big O.</p>
<p>
Big O defines how the resources required (from the steps taken) in the algorithm scale as the input elements grow. The Big O does not reflect the performance of an algorithm, which otherwise would capture how much time or memory is consumed when the algorithm is executed. As larger sets of data are input to an algorithm, the time complexity of the algorithm will slowly approach its limiting asymptotic value. 
The graph below highlights 5 classifications an algorithm can fall into:</p>


![Graph image](../../src/images/002Graph.png)

&#8226; <span style="background-color: rgb(0,176,80)">Constant time O(1)</span><br><br>
&#8226; <span style="background-color: rgb(146,208,80)">Logarithmic time O(log n)</span><br><br>
&#8226; <span style="background-color: #FFFF00">Linear time O(n)</span><br><br>
&#8226; <span style="background-color: rgb(237,125,49)">N logarithmic time O(n log (n))</span><br><br>
&#8226; <span style="background-color: rgb(255,0,0)">Polynomial time O(n&sup2;) / Exponential time O(2<sup>n</sup>)</span><br>


<br>
<h4>Defining the Big O of each operation within an algorithm</h4>
<p>
The five classifications above describe the orders which an algorithm complexity can fall into.<br>
Each operation performed within an algorithm will consist of a method and a data structure. Using the Big O Cheat Sheet found on bigocheatsheet.com: <a target="_blank" href="https://www.bigocheatsheet.com/">here</a> we are able to categorise each operation within the Big O Notation Categories.
<span style="background-color: rgb(0,176,80)">Constant O(1)</span> translates to ‘Order of 1’. The resources required to complete the operation will not change as input size grows. The below example illustrates an O(1) operation:<br>

```
public void algorithm(List<Integer> values){
    System.out.println(values.get(0));
}

```

The remaining 4 classifications describe how the resources required inflate with the growth of n. <span style="background-color: #FFFF00">Linear complexity O(n)</span>, defines a linear growth of algorithm complexity with the growth of n elements. The below code snippet illustrates an operation of O(n)<br>
```
public void algorithm(int n){
    for (int i = 0; i<n; i++){
        System.out.println("got the value: " + i);
    }
}
```
</p>
<br>
<h4>Calculating the Big O of an algorithm</h4>
<p>
We will use the below example to calculate the Time Complexity of an algorithm:
</p>

```
public void calculateMaxValue(List<Integer> values){
    int max = 0;
    for(int i=0; i< values.size(); i++){
        if(values.get(i) > max){
            max = values.get(i);
        }
    }
    System.out.println("The largest value in the list is: " + max);
}
```
<p>
Line 2 has a time complexity of O(1). When we initialise a variable, it has no influence based upon the element input size.<br>
The Code block from lines 3 to 7 will have a time complexity of O(n). This section of code will run for each value of the List.<br>
If values = {1,2,3,6,3}, the code block will run a total of 5 times to obtain the largest number.<br>
Lastly, line 8 will have a time complexity of O(1). This will have no influence, again, by the size of input. 
</p>
<p>
As we account for the three operations within the algorithm, we have accumulated a time complexity of: O(1) + O(n) + O(1).<br>
The accumulation can be summarised into: 2 O(1) + O(n).<br>
The Big O Notation is only concerned with the approximate worst-case complexity of the algorithm, we must remove constants from the algorithm to capture the classification on it's own.<br>
As a result, the time complexity has been reduced to: O(1) + O(n).<br>
This process reminds us that The Big O Notation is not concerned with the <u>rate</u> of growth, but it is concerned with the <u>type</u> of growth. Big O will not claim how tightly an algorithm fits within the bracket, 
but it will categorize the bracket it falls.</p>
<p>
With multiple operations witin an algorithm, we are able to obtain the Big O Notation of an algorithm by releasing the non-dominant terms.<br>
Working from the least-efficient classifications of Exponential growth, back to Constant growth, we can identify the category the algorithm belongs as soon as any of its operations satisfies a bracket.<br><br>
&#8226; Exponential/Polynomial time: &#10008;<br>
&#8226; N logarithmic time: &#10008;<br>
&#8226; Linear time: &#10004;<br>
&#8226; Logarithmic time: &#10008;<br>
&#8226; Constant time: &#10004;
</p>
<p>
As we can see from the above checklist, the algorithm satisfies the Linear time complexity first, due to the for-loop. Therefore the algorithm has a Big O Notation of: O(n).<br>
With an understanding of what The Big O notation is, and how we can calculate it for our algorithms, it will allow us to better understand the potential cost of our algorithm to CPU usage as datasets become larger.
By practicing efficient design in algorithms, you will also begin to explore and utilise the various data structures available within Java and to understand their benefits and costs with a different perspective. 
</p>
<br>
<small style="float: right;" >Picture: Cocora Valley, Salento. </small><br>
<a target="_blank" href="https://unsplash.com/@shawn_appel"><small style="float: right;" >Image by: Shawn Appel</small></a><br>
