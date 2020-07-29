---
title: 'Liskov substitution principle'
date: 2020-08-24 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
thumbnail: ''
subtitle: 'The Liskov substitution principle represents the 'L' in the 5 mnemonic acronym 'SOLID' for design principles. {enter brief desc}'
time: '5'
tags:
- Patterns
- Java
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand the importance of the Liskov substitution principle to inheritance and shared class behaviour.<br>
&#8226; Review the rules that ensure behaviour of subclasses are not .<br>
&#8226; Use tests to ensure the behaviour of a parent class is not modified by its subclasses.<br>

<br>
<h4>What is the Liskov Substitution Principle?</h4>
<p>
Introduced by Barbara Liskov, the Liskov substitution principle (LSP) is used to decide when to extend a class, and when to use other strategies of abstraction to achieve the goal of shared properties between classes. As we have seen in the previous <a href="www.aneesh.co.uk/open-closed-principle">blog</a>, the open-closed principle can be used to abstract the behaviours of a method; the Liskov substitution principle is used to extend upon the <i>design by contract</i> design where the behaviour of the class is the primary concern.
<p>

<p>
The Liskov substitution principle is used to make assertions upon the substitution of behaviours that are created by a subclass.
When a class is extended, we are in effect implying that the subclass "IS A" extension of the parent class. While the open-closed principle is a design principle for the structure of a class, LSP promotes strong <strong>behaviour</strong> sub-typing of classes to the parent class to ensure the expected behaviour of the methods are not changed from extension.
</p>
<p>
<i>"If it looks like a duck, quacks like a duck, but needs batteries - you probably have the wrong abstraction"</i>
</p>
<br>
<h4>Liskov Substitution by design</h4>
<p>
When we use inheritance to share class behaviour, we are implying that the subclass can be used to replace instances of the parent class as the subclass <i>IS A</i> variance of the parent class.<br>
The LSP asserts three rules when applying inheritance with subclasses:<br>
&#8226; The subclass cannot enforce stricter rules than the parent class.<br>
&#8226; The return value of a method can only be a subclass of the return type from the parent.<br>
&#8226; The subclass of a parent must be <u>completely</u> capable of substitution for its parent across each behaviour.
</p>

<br>
<h4>Implementing LSP by design</h4>
<p>
From the rules above, the first two can be checked through the Java compiler and are therefore inherent with Java.
The problem can arise with ensuring the behaviour of each method remains unchanged.
</p>
<p>
The below code example demonstrates how easily behaviour can be modified from intuition that a subclass IS A parent class. We can agree that in natural language, a Penguin is a Bird, and a Seagull is also a Bird. In our source code, we may therefore create the Seagull and Penguin as subtypes of Bird. 

![Image of the classes](../../src/images/011MergeSort2.png)

```java{numberLines:true}
class Bird{
    private boolean hasWings = true;

    public void fly(){

    }
    public boolean getWings(){
        return this.hasWings;
    }    
}

class Penguin extends Bird{

}
class Seagull extends Bird{

}
```
</p>
<p>
In our example above, we have confused the <u>properties</u> of the Bird class with the <u>behaviours</u> of the Bird class when sub-typing with the Penguin class. The Penguin is a bird because it has the properties of a bird: it has wings, lays hard-shelled eggs etc. However the Penguin does not <u>behave</u> like a bird in the sense that it cannot fly.
</p>
<p>
The LSP has been breached with the example of the Penguin and it can be checked with unit testing for the Bird class:

```java{numberLines:true}


```

</p>
<p>
The behaviour of subclasses can be checked by writing tests for each method and substituting in each subclass as an example.
The behaviour of each subclass must not change from the parent class, and therefore the substitution can be used in a repeated manner.
</p>
<br>
<h4>Conclusion</h4>
<p>
The LSP is important to consider when designing classes that have similar behaviours within an application. It is important to consider the <u>behaviour</u> of a class when using subtypes rather than the properties of the class.

</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>