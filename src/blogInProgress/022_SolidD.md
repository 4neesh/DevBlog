---
title: 'Dependency inversion principle'
date: 2020-08-31 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/022_Winterthur.jpg
thumbnail: ''
subtitle: 'Dependency inversion enables loose-coupling of services to promote reusable modules and mitigate the risk of side effects from changes to low level classes.'
time: '8'
tags:
- Patterns
- Java
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; Compare .<br>
&#8226; Compare the open-closed principle and the dependency-inversion principle to each other.<br>

<br>
<h4>Dependency inversion principle</h4>
<p>
The dependency inversion principle aims to decouple the high level complex services from the low level classes that they use. In this post, I will walk through how what it looks like in an application to have high and low level classes, how their relationship can be tightly coupled, and how dependency inversion can be used to loosely couple the classes. We aim to loosely couple high and low level classes to remove the side-effects that can arise within the high level class when a change in the low-level class is made. The dependency inversion principle is closely linked to the liskov and open-closed principle of the SOLID design principles. 
<p>

<br>
<h4>High level and low level classes</h4>
<p>
So what are high level and low level classes? In short, high level classes <i>depend upon</i> or <i>use</i> low level classes to carry out their behaviours. We can see this in action with the following example of a class that is used to book flights:

```java{numberLines:true}

class FlightBookingService{

    EuropeFlights europeFlights = new EuropeFlights();
    AsiaFlights asiaFlights = new AsiaFlights();

    public void checkFlights(int flightNumber){

        if(europeFlights.getFlights().contains(flightNumber)){
            System.out.println("Flight to Europe exists");
        }
        else if(asiaFlights.getFlights().contains(flightNumber)){
            System.out.println("Flight to Asia exists");
        }

    }
}

```
</p>
<p>
The <code>FlightBookingService</code> is tightly coupled to the lower level classes of <code>EuropeFlights</code> and <code>AsiaFlights</code>. As a result of the tight-coupling, if the low level classes were to change (such as changing the signature of the getFlights() method), the FlightBookingService would break where the <code>getFlights()</code> method is called.

![Tightly coupled classes](../../src/images/011MergeSort2.png)


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
The two rules imply the high level classes must use abstractions to obtain behaviours, not through direct links with the low level classes. The second rule asserts that the details upon the low level classes are to be defined by the abstractions. Therefore the low level classes use the abstractions to define their own implementation.
</p>
<p>
To achieve dependency inversion, the high level classes must be abstracted away from the low level. What we are aiming to achieve is a design where a change in the low level class does not break the high level class.
</p>
<br>
<h4>Abstracting the dependency</h4>
<p>
To create the abstraction for the high level class, we must ask ourselves what 'contract' we want to enforce upon the low level classes. As we can see from the current state of the example, both the EuropeFlights and AsiaFlights class use the <code>getFlights()</code> method. Therefore I will create a new interface that has a single method <code>getFlights()</code> and I will have the EuropeFlights and AsiaFlights classes implement the interface.

```java{numberLines:true}

public interface WorldFlights{
    public List<Flights> getFlights();
}

public class EuropeFlights implements WorldFlights{

    List<Flights> flights;

    public List<Flights> getFlights(){
        return this.flights;
    }
}

public class Asia implements WorldFlights{

    List<Flights> flights;

    public List<Flights> getFlights(){
        return this.flights;
    }
}

```

</p>
<p>
The abstraction of the <code>WorldFlights</code> interface is now passed into the <code>FlightBookingService</code>:

```java{numberLines:true}
class FlightBookingService{

    WorldFlights worldFlights;


    public void checkFlights(int flightNumber){

        if(worldFlights.getFlights().contains(flightNumber)){
            System.out.println("Flight to Europe exists");
        }
        else if(asiaFlights.getFlights().contains(flightNumber)){
            System.out.println("Flight to Asia exists");
        }

    }
}
```
</p>


<br>
<h4>But isn't this similar to the open-closed principle?</h4>
<p>
Our use of abstractions with the DIP can sounds very familiar to the open-closed principle where we use abstractions to close a contract to modifications while leaving it open to extension of new implementations. Similar to the DIP, the OCP places an abstraction between two classes to enable the design to accommodate new behaviours.
</p>
<p>
If we take our example of the 
</p>

<br>
<h4>Conclusion</h4>
<p>
I have previously written a blog on how you can use dependency injection with core Java and Spring, visit it <a href="" target="blank">here</a>. 

</p>

<br>
<small style="float: right;" >Picture by <a target="_blank" href="https://unsplash.com/@debidiemski">Deborah Diem</small></a><br>