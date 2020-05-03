---
title: 'Memory management techniques'
date: 2020-05-11 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/006California.png
subtitle: 'Exploring the different techniques and ways that a garbage collector can manage memory.'
time: '10'
tags:
- Java
- Performance
- Memory
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Memory management plays a vital role to speed and performance of an application.<br>
&#8226; Java uses a garbage collector to automatically manage memory on behalf of the developer.<br>
&#8226; There are six different types of garbage collectors.<br>

<br>
<h4>Automated memory collection in Java</h4>
<p>
Memory management is the process of assigning memory to Objects created by an application and releasing the memory when the object is no longer required.<br>
In languages such as C++ and C, the developer will need to manually allocate Objects memory using methods such as <code class="language-c++">malloc()</code> and <code class="language-c++">calloc()</code>. If the developer does not remember to release the Object from the memory, a <i>Memory Leak</i> could occur.<br>
<p>
<strong><i>Memory leak: when an Object continues to consume memory even after it is needed or when an Object stored in memory cannot be accessed by the program.</i></strong> 
</p>
Memory management can be completed with many different strategies to ensure the application efficiently frees and allocates memory during execution. Memory management techniques used within applications are primarily concerned with the performance requirements of the following factors:<br>
&#8226; <strong>Throughput</strong>: how quickly memory can be freed from Objects that are no longer required.<br>
&#8226; <strong>Stop the world events</strong>: a period when the application is completely stopped to allow the memory to be freed and assigned to all live Objects in the application. Stop the world events are an important consideration to make as they hold a large potential against the performance of an application.<br>
&#8226; <strong>Memory fragmentation</strong>: when memory is widely distributed across a memory block leaving gaps of unfilled memory between Objects. There is a cost-benefit analysis that may arise between the performance gain of using fragmented memory allocation against the cost of memory defragmentation to the application runtime.<br>
</p>

<br>
<h4>Garbage Collectors</h4>
<p>
Java makes use of garbage collectors to ensure that Objects that are later referenced within the application will not be deleted from memory. Problems can arise using other languages such as C++ where memory is manually allocated and removed. As a result, it is possible that a thread may obtain access to an Object reference and remove it's memory allocation thus resulting in a null pointer when the Object is referenced from a different thread.<br>
Garbage collectors resolve the null pointer problem through their one and only promise: live objects will not be collected from memory. A Live Object is defined as an Object that is later referenced in the code.
</p>
<br>
<h4>The different types of garbage collectors</h4>
<p>
There are 6 different types of garbage collectors that can be selectively used together to enable efficient memory management as per the use of the application. The different types of collectors allow an application to efficiently manage memory as designed against the individual importance of throughput, memory fragmentation, and stop the world event factors. 
</p>
<br>
<h5>Do nothing garbage collector</h5>
<p>
Do nothing collectors will guarantee that live objects are kept alive. The promise of the garbage collector is exercised. 
</p>
<h5>Reference counting garbage collector</h5>
<p>
Reference counting resolves the problem of having circular references within our code. As the Garbage Collector is responsible for collecting live (unreferenced) Objects, a circular reference, where two Objects reference each other, can create a condition whereby neither Object will be collected. Circular referencing exists in the example below:

```java{numberLines: true}
class One {
    private Two two;
     
    public void setTwo(Two two) {
        this.two = two;
    }
}
 
class Two {
    private One one;
     
    public void setOne(One one) {
        this.one = one;
    }
}
 
public class App {
    public static void main(String[] args) {
        //one instance of each class is created
        One instanceOne = new One();
        Two instanceTwo = new Two();
 
        // A circular reference is made between the two classes
        instanceOne.setTwo(instanceTwo);
        instanceTwo.setOne(instanceOne);
 
        // Although the classes are now null, their reference to each other
        // remains in the other's method, therefore preventing collection
        instanceOne = null;
        instanceTwo = null;
    }
}
```

</p>
<p>
Reference counting will resolve the problem of circular references through the increment and decrement of a counter to each Object as they are referenced and dereferenced. As a result, the 'live' counter assigned to each Object will allow the Garbage collector to identify Objects that are truly referenced by the running code.

</p>
<br>
<h5>Mark and sweep garbage collector</h5>
<p>
Mark and sweep performs three individual phases to Garbage Collection:<br>
&#8226; <strong>Mark</strong>: identify objects that are currently in use.<br>
&#8226; <strong>Sweep</strong>: remove unused Objects.<br>
&#8226; <strong>Compact</strong>: remove fragmentation that may occur from the sweep within the memory.<br>
</p>

<strong>Mark phase</strong>
<p>
During the mark phase, the objects that are reachable are identified by following the course of the root set.<br>
<strong><i>Root set: the initial set of objects from where the reachability of all the other Objects can be derived upon from when the Garbage Collector is called.</i></strong> <br>
In the image below, the identified Objects within the memory are marked as 'live', objects that reference each other without a root set reference will not be marked as live.
</p>

![Mark phase diagram](../../src/images/006Mark.png)

<br>
<strong>Sweep phase</strong>
<p>
During the sweep phase, the Objects that were not marked as 'live' during the mark phase are removed from the heap memory. As a result, the memory block contains only live Objects.
</p>

![Sweep phase diagram](../../src/images/006Sweep.png)


<br>
<strong>Compact phase</strong>
<p>
The current memory block contains a fragmented distribution of Objects. During the compact phase, the physical memory address of each Object is changed. The Objects are rearranged in the memory block so that they are aligned next to each other. If a compact phase was not executed, Objects would need to fit within the fragmented spaces of the memory block if they are to be stored. Following the compact phase, the memory block has an open space to add Objects as they are assigned to the heap, thus allowing the full memory block to be utilised.
</p>

![Compact phase diagram](../../src/images/006Compact.png)


<h5>Copying garbage collector</h5>
<p>
The Copying Garbage Collector uses two memory blocks, named 'fromSpace' and 'toSpace'. During each garbage cycle, Objects will be stored in one of the blocks; when the block becomes full, a Mark and Sweep will be performed by the Garbage Collector, moving the Objects that remain after the Collection into the 'toSpace' memory block. The 'fromSpace' memory block will now become empty and will referenced as the 'toSpace' when the next garbage collection performs a Mark and Sweep on the newly assigned 'fromSpace' block.

![Copying diagram](../../src/images/006Copying.png)


</p>
<br>
<h5>Incremental garbage collector</h5>
<p>
An incremental garbage collector is a type of garbage collector that does not look at all the Objects during a cycle. The purpose of an incremental collector is to improve the performance and efficiency of a garbage collector. Similar to the copying garbage collector, the incremental will use different memory blocks to implement divide the distribution of Objects to be reviewed.
</p>
<br>

<h5>Generational garbage collector</h5>
<p>
A Generational garbage collectors is a form of incremental garbage collector. Generational collectors aim to improve the efficiency of a Mark and Sweep cycle by dividing Objects into sets (generations) according to when they were last used. As an Object survives a Mark Sweep cycle, they are promoted into an 'older' generation which holds a lower priority for the Objects to be reviewed. Different generational garbage collectors will implement rules that determine when an Object is promoted and when different generations are reviewed by the cycle. Once an Object is moved into the older generation, the younger generation is cleared to allow new Objects to be assigned memory. 
</p>

<br>
<h5>How the Java Virtual Machine uses garbage collection</h5>
<p>
The JVM uses generational, copying, and mark and sweep garbage collectors/ The JVM garbage collector consists of two generations: young and old. There are two types of garbage collections used: <strong>minor</strong> collections that occur within the young generation, and <strong>full</strong> collections that occur across both generations.<br>
The young generation has 3 different memory spaces within it: <br>
&#8226; <strong>Eden space</strong>: where new Objects are directly allocated memory into.<br>
&#8226; <strong>Survivor space 1 and 2</strong>: live Objects are assigned into one of the spaces following a minor collection. The two spaces are used for copying garbage collection and to compress memory fragmentation.
</p>
<p>
<strong>Garbage collection cycles within the JVM</strong><br>
1. New Objects are assigned to the Eden space when they are created.<br>
2. When the Eden space is full, a minor collection is run using a mark and sweep. <br>

![Eden space full](../../src/images/006Cycle1P1.png)


<p>
3. Objects that survive the mark and sweep are assigned into one of the survivor spaces.<br>

<p>
The marked objects from the Eden space are moved into the Survivor 1 memory block.
</p>

![Live objects into survivor 1](../../src/images/006Cycle1P2.png)

<p>
4. When the Eden space becomes full again, the minor collection will be performed on the Eden and Survivor 1 space. The Objects that survive the collection are moved and compressed into the Survivor Space 2.<br>
</p>

![Mark sweep survivor 1](../../src/images/006Cycle2P1.png)

<p>
The objects are moved into Survivor space 2 and compressed.
</p>

![Copy into survivor 2](../../src/images/006Cycle2P2.png)

<p>
5. The JVM can specify a number of cycles an object can survive before it is promoted into the old generation. In the example below, 3 cycles are used. When the survivor and eden space are full, Objects that meet the criteria for promotion are moved into the old generation. The old generation Objects will no longer be reviewed by the minor collection.
</p>

![Mark sweep survivor 2](../../src/images/006Cycle3P1.png)

<p>
Objects that have survived 3 cycles are promoted into the old generation.
</p>

![Copy into survivor 1 and old](../../src/images/006Cycle3P2.png)

<p>
6. When the old generation eventually becomes full, a <strong>full</strong> garbage collection is run. The full collection will scan both generations, perform a mark and sweep and remove dead Objects. 
</p>

</p>
<p>
The JVM garbage collector is designed using 'Turtle theory'. The theory assumes that Objects either live for a short time, or they live <i>forever</i>. By dividing the memory blocks into generations, the memory management system can utilise minor collections to identify and remove short-lived Objects while only using stop the world events sparingly through full collections.
</p>
<br>
<h4>Conclusion</h4>
<p>
Garbage collectors introduce different types of mechanisms for allocating and freeing memory within an application.
There are many variables that are involved with garbage collection and that require consideration. The decisions made, on how a garbage collector will work, can vary on an application-basis. The many types of implementations also allow the Garbage collector to leverage different styles to efficiently pick up loose memory. The review in this blog has only covered the very basic use of a garbage collector within Java. The multi-threaded environment of Java can enable concurrent garbage collectors that minimise the use of stop the world events and specify exactly when the garbage collector is run. The example visited in this blog describes the default parallel garbage collector, just one of four garbage collectors used in Java. Other collectors provide advantages and drawbacks that can be chosen as per the application behaviour: serial, concurrent mark sweep, and G1.
</p>

<br>
<small style="float: right;" >Picture: Golden Gate Bridge, San Francisco by <a target="_blank" href="https://unsplash.com/@mvdheuvel">Maarten van den Heuvel</small></a><br>