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
The terms ‘Time Complexity’ and ‘Big O Notation’ are often used synonymously to describe the efficiency of an algorithm with respect to its number of input elements. Calculating the efficiency of an algorithm can be difficult to define with variables such as memory, disk, and network usage; the Big O Notation provides a classification to define the upper-bound runtime that can be expected from an algorithm CPU usage, therefore discarding the other variables. <br>
The Big O is part of a family of asymptotic notations, including Big Theta Θ and Big Omega Ω. The notations conceptualise what the upper and lower asymptotic bounds are for an algorithm. The Big O is only concerned with the approximate worst-case complexity of an algorithm.<br>
Big O defines the platform-independent complexity of the algorithm: how the resources required (from the steps taken) in the algorithm scale as the problem (input elements) grow. The Big O does not reflect the performance of an algorithm, which would encapsulate how much time or memory is consumed when the algorithm is executed.<br>
The Big O is particularly important to understand when assessing an algorithm that must handle large amounts of data as this will define the confines of algorithm complexity. 
The graph below defines 5 key classifications an algorithm can fall into:<br>
<ul style="list-style-type:disc">
<li> Constant time O(1)</li>
<li> Logarithmic time O(log n)</li>
<li> Linear time O(n)</li>
<li> N logarithmic time O(n log (n))</li>
<li> Polynomial time O(n&sup2;) / Exponential O(c&supn;) </li>
</ul>

<img src="../../002Graph.png"/>


<h4>Defining the Big O of each operation within an algorithm</h4>
The five classifications above describe the orders which an algorithm complexity can fall into.
Constant O(1) translates to ‘Order of 1’. The resources required to complete the algorithm will not change as input size grows.
The remaining 4 classifications describe how the resources required inflate with the growth of n. Linear complexity, O(n), defines a linear growth of algorithm complexity with the growth of n elements.<br>



<h4>Calculating the Big O of an algorithm</h4>
As we work through our algorithm, noting the time complexity of each operation, we can begin to understand the accumulative complexity of the algorithm as a whole.
As the Big O Notation is only concerned with the approximate worst-case complexity of the algorithm, we remove constants from the algorithm to capture the classification on it's own. 
The Big O Notation is not concerned with the <u>rate</u> of growth, but it is concerned with the <u>type</u> of growth. Big O will not claim how tightly an algorithm fits within the bracket, 
but it will categorize the bracket it falls.
<h5>Drop non-dominant terms</h5>
With multiple operations witin an algorithm, we are able to obtain the Big O Notation of an algorithm by releasing the non-dominant terms. Working from the least-efficient classifications of Exponential growth, back 
to Constant growth, we can identify the category the algorithm belongs as soon as any of its operations satisfies a bracket.