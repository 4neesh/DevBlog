---
title: 'Single responsibility principle'
date: 2020-08-10 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
thumbnail: ''
subtitle: 'The single responsibility principle represents the 'S' in the 5 mnemonic acronym 'SOLID' for design principles. Classes must have one defined responsibility to promote class modularity and cohesion.'
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

<br>
<h4>The SOLID principles of design</h4>
<p>
This blog post will be the first in a series of 5 posts that cover the SOLID principles of design. The SOLID principles were introduced by Robert C. Martin in his paper Design Principles and Design Patterns.
The SOLID acronym was later defined by Michael Feathers.</p>
<p>
The SOLID principles encourage the creation of maintainable software that prevents code rot from accumulating within object orientated programming. As software applications scale in size, the design principles from SOLID become more and more valuable to prevent complex issues from arising and to enable a more efficient process for application enhancement and bug fixes.
<p>
<p>
The SOLID acronym is defined accordingly:<br>
S - Single responsibility principle<br>
O - Open-closed principle<br>
L - Liskov substitution principle<br>
I - Interface segregation principle<br>
D - Dependency inversion principle<br>
</p>
<p>
This blog post will focus upon the single responsibility principle (SRP).
</p>

<br>
<h4>Single responsibility principle</h4>
<p>
The single responsibility principle asserts that any one class must have just one responsibility, and therefore just <strong>one reason to change</strong>. When classes are designed, component that all change for the same reason are grouped under the same responsibility under one class.<br>
The SRP defines classes to contain behaviours that always correlate back to their defined responsibility. Classes that use SRP will be able to correlate each function they have back to the single responsibility. Classes that have multiple responsibilities may contain many reasons to change, and as a result, may create unrelated behaviour or side effects when they are later updated.
</p>
<p>
The SRP creates classes that can be described as being <i>cohesive</i> and <i>robust</i>. A sign that a class has a well defined purpose and singular responsibility can arise when you are naming them against the responsibility. If you find it difficult to define a name of a class based upon its responsibility, it is likely the class has many responsibilities or is not clear to a single purpose. </p>
<br>
<h4>Class cohesion</h4>
<p>
The word <i>cohesion</i> describes the action of forming a united whole. In object orientated programming, classes are cohesive when they can be used together without conflict.
Class cohesion is achieved through the design and implementation of a class to a single purpose. Class cohesion facilitates greater potential for class reusability and implementations of the application. 
</p>
<p>
The implementation of class cohesion can be visually demonstrated through the blocks below:

![Non Cohesion](../../src/images/018_nonco.png)

![Cohesion](../../src/images/018_co.png)

</p>
<p>
While the blocks are only rotated on the x axis, it becomes evident that when classes consume just a single responsibility, they become more modular and can be combined with different classes together to form different outputs.
</p>
<br>
<h4>Implementing SRP by design</h4>
<p>
The implementation of SRP will be used to demonstrate how side effects can arise from changing a class with multiple responsibilities, and how the use of SRP can avoid such errors form occurring. 
</p>
<p>
In our example, the application will be used for renting a car. The class <code>Car</code> exists as an entity to be stored within a database of all cars to be rented. The class will also return properties of the car such as brand, colour and engine size. <br>
The Car class will also include a method called "rent" which sends a request to the database to rent the car.
</p>
<p>
The Car class has more than one responsibility. It is responsible for holding information about each car instance, but it is also responsible for managing the rental of the car with the database.

```java{numberLines:true}
public class Car {

    private String brand;
    private BigInteger price;
    private String colour;
    private String key;
    private InventoryService inventoryService;
    
    public void rent(){

        if(inventoryService.getInventory(key) > 0){
            
            ...

        }
        
    }

}
```
</p>
<p>
The <code>rent()</code> method will verify with the Inventory class (not demonstrated in this post) to check the car is available, and then connect with the database using object to relational mapping in a DAO pattern to reduce the number of cars available.
</p>
<p>
The following changes are made to the application:<br>
1. The number of cars has increased in the inventory.<br>
2. The renter must verify their credentials before renting a car.
</p>
<h5>Increasing the car inventory</h5>
<p>
The Car class uses the InventoryService to check how many cars are available for rent. When the number of inventory is increased, the Car class, which is responsible for holding information about a car instance should not be effected. After all, the number of instances of a car does not relate to the properties of a car. As a result, the InventoryService, which is responsible for managing the inventory of the car instances will be updated. This example demonstrates how SRP creates a single change in a single class that is responsible for a property.
</p>
<h5>Verify renter credentials before renting</h5>
<p>
The verification of user credentials is a pre-requisite before enabling a car to be rented. As a result, the Car class must use another service to access the credentials during the <code>rent()</code> method. The Car class, which is meant to be responsible for the car descriptive information, will now have the RenterDetails class to access information about the renter. 
</p>
<p>
The result of verifying credentials of a renter has created unexpected growth and unrelated dependency of the Car class upon the RenterDetails class. The additional responsibility of the <code>rent()</code> method in the Car class has created two further dependencies on the RenterDetails and InventoryManager classes that otherwise would be completely unrelated to the Car descriptive properties.
</p>
<h5>Reviewing SRP in the Car class</h5>
<p>


</p>

<br>
<h4>The benefits of SRP</h4>
<p>
Testing: Single responsibility classes have less testing required as there are fewer variations within the class to perform.

Loose-coupling: classes will have fewer dependencies upon other classes

Debugging: Smaller and well defined classes are easier to search and debug.
</p>
<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="https://unsplash.com/@xxx">xxx</small></a><br>