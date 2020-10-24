---
title: 'Using lambda for functional methods'
date: 2020-10-26
author: 'Aneesh Mistry'
featuredImage: ../images/030_paris.jpg
subtitle: 'Use lambda expressions to introduce functional programming with Java.'
time: '6'
tags:
- Java
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Understand how functional interfaces are designed and created.<br>
&#8226; Use anonymous classes to implement functional interfaces.<br>
&#8226; Understand how to create a lambda function for expressive implementations of functional interfaces.<br>
 
<br>
<h4>Lambda and functional programming</h4>
<p>
Lambda functions were introduced in Java 8 as a step towards functional programming within Java.
Functional programming enables a developer to pass functions around the application without assigning it to a specific instance of a class. With functional programming, lambda supports the creation of functional interface implementations that are dynamically created and executed at runtime.
</p>

<br>
<h4>Functional interfaces</h4>
<p>
A functional interface is defined as an interface with just a single abstract method. A functional interface can contain many other methods that are either Static or Default, however it must include just a single abstract method with no method body. If the interface contains more than one abstract method, it cannot be considered when creating lambda functions.
</p>
<p>
Prior to Java 8 (and the introduction of lambda functions), functional interfaces would be used through a class implementation where the abstract method is overridden:

```java{numberLines:true}
//functional interface
public interface CoffeeMachine{
    void makeCoffee();
}

```

```java{numberLines:true}
public class EspressoMachine implements CoffeeMachine{

    @Override
    public void makeCoffee(){
        System.out.println("Making an espresso");
    }
}
```
```java{numberLines:true}

EspressoMachine machine = new EspressoMachine();
machine.makeCoffee();

```
</p>
<p>
The creation of the <code>EspressoMachine</code> with a single method, and further instantiation of the EspressoMachine enables an implementation of the CoffeeMachine to be used. When we consider what is achieved for this implementation of just a single method, it can be seen as excessive boilerplate code.
</p>

<br>
<h4>Using anonymous classes for functional interfaces</h4>
<p>
Anonymous classes allow us to reduce the boilerplate code of implementing the interface into a class. As the name suggests, an anonymous class does not have a name as it is implemented in the method body of its implementation:

```java{numberLines:true}

CoffeeMachine espressoMachine = new CoffeeMachine(){

    @Override
    public void makeCoffee(){
        System.out.println("Making an espresso");
    }

};
```
</p>
<p>
The anonymous class enables local variables to the class to be defined and for further methods to be used for the <code>espressoMachine</code>.
</p>
<p>
Within the body of the anonymous class, the keyword <code>this</code> would refer to the implementation espressoMachine as the anonymous class represents an inner class at compile time. 
</p>

<br>
<h4>Functional interfaces as a lambda function</h4>
<p>
The <code>CoffeeMachine</code> can be implemented as a lambda function to further reduce the boilerplate code for each implementation. Let's look at what a lambda function might look like for the EspressoMachine implementation:

```java{numberLines:True}
CoffeeMachine espressoMachine = () -> {System.out.println("Making an espresso");}
```
Is that it? Yes!
</p>
<p>
The syntax of the lambda function may seem strange and the logic behind it may appear unclear. I will now break down the lambda function and explore how it can be adapted to cater for other types of functional interfaces. 
</p>
<p>
The lambda function is broken down into three areas: arguments, arrow, code block

//image of it.

The code block can wither exist within curly brackets or it can exist without given it is a single line. 
</p>
<p>
A lambda function is split into three sections: parameter, arrow separator, and expression. 

//insert image of this.

The parameter is used to take in the arguments as defined by the abstract method. The number of parameters can be any number as long as it reflects the abstract method. The arrow separator is used to instruct a lambda function. The final expression is used as the method body. The implementation of the Lambda function for the CoffeeMachine can exist as below:

```java{numberLines:true}
CoffeeMachine espresso = () -> System.out.println("Making an espresso");
```
</p>
<p>
The lambda function could be replaced to accommodate any number of arguments if the abstract method were to require them:
<br>
1 argument (int numberOfCoffee)

```java{numberLines:true}
CoffeeMachine espresso = (a) -> System.out.println("Making " + a + " espresso(s)");
```

2 arguments (int numberOfCoffee, String customer)
```java{numberLines:true}
CoffeeMachine espresso = (a, b) -> System.out.println("Making " + a + " espresso(s) for " + b);
```

</p>
<p>
The relative ease of creating lambda functions is enabled by the JVM as it infers the method call that is represented. There are three key properties to the lambda function that enable it to be inferred without compile error by the JVM:<br>
1. The expected representation of the lambda function must replace a functional interface. Therefore the implemented interface must have only a single abstract method.<br>
2. The abstract methods number of parameters must match the number of parameters and cast as represented by the lambda function.<br>
3. The return type of the abstract method must be equal to the return from the code block of the lambda function.
</p>
<p>
For the below functional interface, each of the three subsequent lambda functions will fail to compile in-line with the three rules above:

```java{numberLines:true}
public interface Vehicle{
    void getTypeOfVehicle();
}
```

The below lambda will not compile as an implementation of Driver is expected which is not a functional interface, not Vehicle.
```java{numberLines:true}

public String getDriverName(Driver driver){
    return driver.getName();
}

...
System.out.println(getDriverName(() -> {return "Vehicle is truck"};))
```

The below lambda will not compile as an argument is passed in when there should be 0 arguments.
```java{numberLines:true}
(10) -> {System.out.println("Vehicle is a truck");}
```

The below lambda will not compile as the code block returns a String when the return should be void.
```java{numberLines:true}
() -> {return "Vehicle is a truck";}
```
</p>
<br>
<h4>Anonymous vs Lambda</h4>
<p>
While Lambda expressions reduce the quantity of boilerplate code to write, they may not always be the best solution to implement. The considerations to make for an anonymous class extend to performance, readability and purpose/complexity of the function invoked.
</p>
<p>
The anonymous class is a class of itself and generates a new .class method from compilation that adds to the size of the jar executable file. A lambda function however uses <i>invokedynamic</i> bytecode instruction to bind the method dynamically to the encapsulating class. Therefore lambda expressions can improve time and performance of the application. 
</p>
<p>
An anonymous class is not bounded to implementation of just a functional interface. Therefore interfaces with more than one abstract method can be implemented by the anonymous class.
</p>
<p>
The anonymous class tends to be more verbose than the lambda expression. A redundant class body must be defined within the anonymous class and therefore must only be used when a class implementation is valuable. Unlike a lambda function, an anonymous class enables class-local variables to be defined as well as further functions for processing.
The anonymous class supports far more complexity and functionality within the class at the expense of more code and class compilation. 
</p>
<br>
<h4>Summary</h4>
<p>
Functional interfaces are interfaces with a single abstract method. Prior to Java 8, a functional interface would require verbose implementation within a class and instantiation to access behaviour.<br>
Anonymous functions offer a compiled implementation of interfaces within the calling method. The anonymous class is compiled at runtime and enables further complexity of behaviour to be implemented.<br>
Lambda functions introduce functional interface implementations that support behaviours of the application at runtime. The lambda function enables developers to reduce boilerplate code for implementations of functional interfaces using a unique three-part instruction.
</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>