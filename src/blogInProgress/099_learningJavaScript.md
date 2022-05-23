---
title: 'xxx'
date: 2020-09-28
author: 'Aneesh Mistry'
subtitle: 'xxx'
time: 'xx'
tags:
- xxx
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

<br>
<h3>Learning JavaScript</h3>
<h4>Basics</h4>
<p>
When we define a variable, we use the keyword 'let'
functions are defined with keyword 'function'
</p>
<p>
DOM = document object model
HTML document, which is then turned into an Object, and is represented as a smaller model. 
DOM = how to use JS to modify websites
</p>
<p>
String is a text data type, there are also numbers data type
If you add a number and a string, it will become a string. 
4 + "10" = 410
You can use += to add to concatenate a string.  
</p>
<p>
For a button, we use onclick as a property to define the function called when a button is clicked. 
</p>
<p>
Variables: we define them with 'let' if they can be reassigned, or 'const' if they are not to be reassigned.

</p>
<h3>Maths</h3>
<p>

'===' means strictly equal
'=' is for assigning a value
'==' is a little less strict. So number 100 = String of "100". It ignores type. 
</p>
<p>
Random number: 

```js
Math.random();
```
</p>
<p>
Document

- use querySelector rather than getElementById to specify a broader group of document items to select. Use # before the name to specify an id
- if we are using a class rather than an id, we use a dot before the name for querySelector. 
- An id will only ever point to 1 element in a document, whereas a class can refer to multiple elements. 
- You can choose a html tag such as body, h1 as we normally would: querySelector("body")

</p>
<p>
Template Strings

These are used within JS to represent html creation. Rather tan having a long string that adds + signs:

```js
let myLink = "<li><a href='" + myString + "'> " + myString + "</a></li>"
```
Can be changed with template strings that extract JS objects:

```js
let myLink = `
<li><a href = ${myString}>${myString} </a></li>
`
```
</p>
<h3>Truthy and Falsey</h3>
<p>
Truthy values are values that translate to tru
Falsey values are values that translate to false

Falsey = false, 0, "", null, undefined, NaN.
Null is how a developer specifies emptiness, Undefined is how JS tells us something is empty. 

Truthy = values with content
</p>
<h3>Data structures</h3>
<p>
Arrays are pretty similar to java:

```js
let myArr = [1,2,3];
```

```java
Integer[] myArr = {1, 2, 3};
```
Arrays are store composite/complex data types so they store multiple types of data. 
Primitive types are supported: number, string and boolean

To add an item to the end of an array:

```js
myArr.push(4);
```
We can remove an element from the end of an array:
```js
myArr.pop();
```
</p>
<h3>Loops</h3>
<p>
Loops in JS are written in a similar way to that in Java

```js
for(let i = 0; i<10; i++){
    //do something
}
```
And with Java:
```java
for(int i = 0; i<10; i++){
    //do something
}
```
</p>
<h3>Ifs</h3>
<p>
If statements are identical to Java at a basic level:

```js
if(a === 10){

}
```
And in Java:
```java
if(a.equals(10)){

}
```
Just like Java, you can combine if statements with &&. 
</p>
<h3>Objects (Composite/Complex Data)</h3>
<p>
Just like java, we can create objects in JS.

```js
let player = {
    name: "Aneesh",
    value: 100
}
```
In Java:
```java
class Player{
    String name;
    Integer value;
}
```

You can access the items in JS:
```js
player.name
player.value
player["name"]
player["value"]
```
We have 2 ways to acecss variables above. The second way uses brack-notation that is less popular.

</p>
<h3>Event Listeners</h3>
<p>
We are able to separate the concerns between the html and js file for click listeners by defining an event listener in the js file.
Before we used html to define which function is called for event listeners:

```html
<button id="btn-a" onclick="myfunction()">
```
Now, we can remove the onclick listener and add it directly to js:

```js
let  buttonA = document.getElementById("btn-a");
buttonA.addEventListener("click", function(){
    console.log("my function")
})
```

</p>

<h2>CSS</h2>
<p>
If you want to apply styling to nested tags, for example an anchor within a list item, you can describe this with a space:

```css
li a {
    color: green
}
``` 
</p>
<br>
<h4>Summary</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>