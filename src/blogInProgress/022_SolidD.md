---
title: 'Dependency inversion principle'
date: 2020-08-31 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/022_Winterthur.jpg
thumbnail: ''
subtitle: 'The dependency inversion principle represents the "S" in the 5 mnemonic acronym "SOLID" for design principles. Dependency inversion enables loose-coupling of services to promote reusable code and '
time: '5'
tags:
- Patterns
- Java
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>Dependency inversion principle</h4>
<p>
The dependency inversion principle aims to decouple the high level complex services from the low level classes that they use. In this post, I will walk through how what it looks like in an application to have high and low level classes, how their relationship can be tightly coupled, and how dependency inversion can be used to loosely couple the classes. We aim to loosely couple high and low level classes to remove the side-effects that can arise within the high level class when a change in the low-level class is made. The dependency inversion principle is closely linked to the liskov and open-closed principle of the SOLID design principles. 
<p>

<br>
<h4>High level and low level classes</h4>
<p>

</p>

<br>
<h4>Introducing dependency inversion</h4>
<p>
Dependency inversion relates to the liskov principle and the open-closed principle because the use of abstractions are used to create a consistency amongst class implementation. The Liskov substitution principle is important to consider as we may also use parent-child models to abstract the implementation of classes.
</p>
<p>
The use of dependency inversion is often associated to the following two rules:<br>
<br>
<i>"High level classes do not depend upon low level classes. They depend upon abstractions."</i><br>
<br>
<i>"Abstractions do not depend upon details; details depend upon abstractions."</i>
</p>
<p>
The two rules are telling us that the high level modules must use abstractions to obtain behaviours, not from the low level classes. The second rule then tells us that the details upon the low level classes are defined by the abstractions. Therefore the low level classes use the abstractions to define their own implementation. The two rules are beginning to paint the dependency inversion picture where we have an abstraction to sit between our high and low level classes.
</p>
<p>
To achieve dependency inversion, the high level must be abstracted away from the low level. What we are aiming to achieve is a design where a change in the low level class does not influence the high level class.
</p>
<br>
<h4>But isn't this similar to the open-closed principle?</h4>
<p>


</p>

<br>
<h4>Conclusion</h4>
<p>
I have previously written a blog on how you can use dependency injection with core Java and Spring, visit it <a href="" target="blank">here</a>. 

</p>

<br>
<small style="float: right;" >Picture by <a target="_blank" href="https://unsplash.com/@debidiemski">Deborah Diem</small></a><br>