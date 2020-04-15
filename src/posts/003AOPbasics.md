---
title: 'Implementing AOP in your Spring Application'
date: 2020-04-22 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/03Rio.png
subtitle: 'Applying aspect-orientated programming to your application to support additional behaviours of your methods'
time: '10'
tags:
- Spring
- Java
---

<strong>Key Takeaways</strong>
&#8226; AOP is useful for separating cross-cutting concerns<br>
&#8226; PointCut Expressions enable fine-grained AOP implementations<br>
&#8226; Spring AOP incorporates light-weight AspectJ AOP classes and methods<br>

<br>
<h4>What is time complexity?</h4>


Aspect-orientated programming provides a tool we can implement in our applications to provide modular separation of cross-cutting concerns. Cross-cutting concerns depend upon core elements of a system, but do not fit appropriately into design. For example, you may consider logging within your application. It wouldn’t be long before you realise the logging of methods being called, or results being returned can quickly clutter your source code thus impeding the reading experience. Other uses for AOP may be for exception logging or audit trails. Spring AOP provides a lightweight AOP implementation that uses AspectJ annotations and classes, it is best practice to use AOP for cheap operations and short functions to run.<br>
Advice is a particular action taken by an aspect at a particular joinpoint. 

```java{numberLines: true}
@Configuration
@EnableAspectJAutoProxy
@ComponentScan("com.aneesh.aopdemo")
public class SpringConfig {

}

```

We then create the class which the AOP will act upon. The class will included @Component at the top to ensure it is scanned upon by the Configuration class.



```java{numberLines: true}
@Component
public class FootballGame {
	
	public void playGame() {
		System.out.println("Game has started.");
	}
	
}
```

The main class, which is used to call the method, will include two key classes: AnnotationConfigApplicationContext, which is used to import the Configuration class, and identify the components to scan. The Context will then be used to obtain a Spring bean to which it will call actions upon. 

```java{numberLines: true}

public static void main(String[] args) {
		
		AnnotationConfigApplicationContext context
		= new AnnotationConfigApplicationContext(SpringConfig.class);

		FootballGame footballGame = context.getBean("footballGame", FootballGame.class);

		footballGame.playGame();
		
		context.close();
		
	}

```

The Aspect class is used to define the methods we would like to call at the respective advice point. 
We acknowledge the class with the @Aspect annotation which defines it as a class that contains Advice.

```java{numberLines: true}

@Aspect
@Component
public class footballAspect {

	
}
```

..advice and pointcut experssions



<small style="float: right;" >Picture: Rio De Janeiro, Brazil by <a target="_blank" href="https://unsplash.com/@phaelnogueira">Raphael Nogueira</small></a><br>