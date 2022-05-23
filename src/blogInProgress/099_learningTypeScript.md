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
<h3>Learning TypeScript</h3>
<h4>Introduction</h4>
<p>
A JavaScript superset, to provide additional benefits.
Compiler used to compile into JavaScript. 
The broswer cannot execute it, therefore we need to compile it into JS to be executed.
</p>
<p>
It provides nicer syntax than JavaScript. It adds types to the JS language to provide the developer to identify errors, earlier, in the development process. 
</p>
<p>
Why do we want to use TS?
JS can be confused between numbers and strings for example. It can add 2 + 3 into '23' in JS instead of 5. 
You can add validations in JS to ensure the type of the values are number and not strings, but this can be verbose. 

```js
function add(num1, num2){
    console.log(num1 + num2)
}
```
Prints 108 for 10 + 8. 
You can fix this:

```js
function add(num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    }
    else{
        return +num1 + +num2
    }
}
```
This is a poor way to handle the possible error as it can be handled by the developer at compile time, not at runtime as we have done in the if statment
** Handy note: adding a '+' before the variable in JS will return a numeric representation of an Object. 
</p>

<h4>Installing TypeScript</h4>
<p>
1. head to typescriptlang.org
And install with npm install -g typescript
We will also require node.js (along with node pacakge manager - npm). 

If using a mac, you will need to add 'sudo' on the terminal at the start to ensure the download is processed. 

```
sudo npm install -g typescript
```
The TS download includes the compiler that compiles TS into JS. 
</p>
<h4>TypeCasting</h4>
<p>
TS forces us to be explicit about what type of Objects we are creating. We do this using <b><i>TypeCasting</i></b>.
We can factor the JS code above into TS:

```ts
function add(num1: number, num2: number){
    console.log(num1 + num2)
}
```
</p>
<h4>Compile Checking</h4>
<p>
TypeScript serves the developer by providing compile-time checking on the TS code as it is written. In JS, if you were to write code that could not be compiled in the browser, you would only find out once you tried to run the code in the browser. Provided you are using an IDE (such as VSCode), you will be able to see the compile-error as you write the TS code. Lets look at an example:

```js
const input1 = document.getElementById("num1")
const input2 = document.getElementById("num2")

button.addEventListener("click", function(){
    console.log(add(input1.value, input2.value));
})

function add(num1, num2){
    return num1 + num2
}
```

If we refactor the add method using typescript:
```ts
const input1 = document.getElementById("num1")
const input2 = document.getElementById("num2")

button.addEventListener("click", function(){
    console.log(add(input1.value, input2.value));
})

function add(num1: number, num2: number){
    return num1 + num2
}
```
We we see a compile error on line 5. A compile error will usually appear as a single red squiggled line under the error. This error appears for 2 reason:
1. TypeScript does not know if 'input1' has a value property. So we need tell TS that the input1 will never return null, and will always point to an element in out HTML file. For this we will mark input 1 'as a HTMLElement'"
```ts
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

button.addEventListener("click", function(){
    console.log(add(input1.value, input2.value));
})

function add(num1: number, num2: number){
    return num1 + num2;
}
```
The explanation marks on line 1 and 2 are telling TS that the input1 and input2 will always be present. 
We will still have a compile error on line 5. Why? <br>
On line 5 we are trying to call the '.value' method on the HTMLInputElement, and to pass it into the function 'add'. Function 'add' now only expects the parameters to be a number, however the value from a HTMLInputElement is of type string. Therefore the add method will not accept the argument. So we fix this by adding a + to the start of the value.
```ts
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

button.addEventListener("click", function(){
    console.log(add(+input1.value, +input2.value));
})

function add(num1: number, num2: number){
    return num1 + num2;
}
```
</p>

<h4>Compilation</h4>
<p>
If we save the above code into a typescript file using the 'ts' suffix, lets say the file is called index.ts, we can now use the typescript compiler to turn it into JS code:

```
tsc index.ts
```
The 'tsc' command in the terminal will compile the ts file into a js file.

</p>
<p>
If we now take a look at the js file created:

```js
const input1 = document.getElementById("num1")
const input2 = document.getElementById("num2")

button.addEventListener("click", function(){
    console.log(add(input1.value, input2.value));
})

function add(num1, num2){
    return num1 + num2
}
```

We see the exact same JS code we wrote in the first place. 
The difference to us? It helps us to write cleaner, more readable and less error-prone code. Simple. 
</p>
<h4>Advantages</h4>
<p>
TS provides us with features such as type checking, there are also further next-gen JS features that we will explore. We can also add new features such as interfaces and generics. We also have meta-programming features such as decorators. 
</p>
<h4>TS Basics</h4>
<p>
The Core Types in JavaScript and TypeScript are:
- number: all numbers, inclusive of floats, integers etc
- string: all text values
- boolean: true and false

We specify the type of a variable using a colon and the type.
e.g

```ts
let name = 'Aneesh'
let gameNumber = 5;
```
TypseSript is statically typed, meaning we must explicitly say what the type is. JavaScript instead uses Dynamic types that are evaluated at Runtime. 
</p>
<p>
We do not explicitly state the type of a variable. 
We don't do this because TS has a built-in feautre called <strong><i>type inference</i></strong>. It knows that the below num1 will always be of type number as we assign a value of 4

```ts
let num = 4;
```
We can explicitly infer the type, however it is redundant code with TypeScript:

```ts
let num: number = 4;
```
If you do not assign a value to the variable, then it is a good idea to assign the type:
```ts
let num: number;
num = 4;
```
This summarises the job of TypeScript. To check types and tell us about it at compile time. 
</p>
<br>
<h4>TS Advanced Types</h4>
<h5>Objects</h5>
<p>
Similar to JavaScript, you can create Objects:

```ts
let human = {
    name: 'Aneesh',
    age: 27
}
```
TypeScript will also infer the type for each of our properties. Name is a string, and age is a number. 
If we tried to access the property of 'name' from the human, we will get a compile error from TypeScript. 
```ts
human.height
```
This is because no key of 'height' is assigned to the object of 'human'
</p>
<h5>Arrays</h5>
<p>
If we want to add an array data type, we can use a colon folowed by the type and the squared brackets:
```ts
let hobbies: string[];
```
Alternatively, the type inference of TypeScript will infer the type to be of string:
```ts
let human = {
    hobbies: ['Sport', 'Netflix']
}
```
A benefit is enabled from type inference when we loop through the hobbies and find all the methods of a string are now available:
```ts
for (const hobby of human.hobbies){
    console.log(hobby.toUpperCase())
    console.log(hobby.toLowerCase())
}
```
TypseScript knows with certainty that the 'hobby' variable is of type string. If we therefore tried to call the method '.map()' on the string, we will get a compile error.  

</p>
<h5>Tuple</h5>
<p>
A tuple data type is an array with a fixed number of elements, and a fixed type. 
If we know the exact length and type an array should be, a tuple provides an additional layer of strictness to the type inference.

```ts
let human = {
    securityCode: [1232, 'authorised']
}
```
Inference with a tuple is not completed as expected. Instead, we need to declare the types for the tuple:

```ts
let human: {
    securityCode: [number, string]
} ={
    securityCode: [1232, 'authorised']
}
```
If we try to reassign the securityCode of the human object with a different number of parameters, or a different order or type other than number/string, we will face a compile error. 
</p>
<h5>Enum</h5>
<p>
TypeScript enables us to use Enum to create an enumerated list of global constant identifiers. What are these? These are essentially a set of distinct values, either numerical or a string. 
Enums are assigned with a number by default. 
In JavaScript, we can define global constants, for example if we want to assign a variable of 'database-access' with either read_only, write_only and read_write_execute:

```js
const READ_ONLY = 0;
const WRITE_ONLY = 1;
const READ_WRITE_EXEUTE = 2;

let human = {
    dbAccess = WRITE_ONLY;
}
```
We can easily identify the db_access via a number. We can insead create an enum within TypeScript:

```ts
enum DbAccess{
    READ_ONLY, WRITE_ONLY, READ_WRITE_EXECUTE}
}
```
Each enum is assigned a number by default (READ_ONLY = 0, WRITE_ONLY = 1 etc). Then we can assign the enum to the dbAccess variable:

```ts
let human = {
    dbAccess = DbAccess.WRITE_ONLY
}
```
We can change the default behaviour of our Enums to be assigned a different value, such as a different number or string:
```ts
enum DbAccess{
    READ_ONLY=100,
    WRITE_ONLY=200,
    READ_WRITE_EXECUTE=300
}
```
Or

```ts
enum DbAccess{}
    READ_ONLY="READ",
    WRITE_ONLY="WRITE",
    READ_WRITE_EXECUTE="RWE"
}
```
That summarises enums, which we use when we require human-readable identifiers that are of a distinct set of values. 
</p>
<br>
<h5>Union Type</h5>
<p>
Union types allow us to pass different types of arguments into a method.
We can specify a union type within the application to tell TypeScript that we are happy with one or the other type of argument by using a pipe beteen the type :

```ts
function combineValues(input1: number | string, input2: number | string){

}
```
</p>
<p>
We can also use union types along with literal types to enforce a value passed into a method to be one of n values. For example, if we wanted to ensure the age category for a player was under or over the age of 10, we can specify what the exact string should be:

```ts
function playerCategory(category: 'under 10' | '10 and over'){

}
```
TypeScript will use type inference to ensure the values are sting, and will also throw a compile error if you try to pass in an argument that is not 'under 10' or '10 and over' to the method. 
</p>
<p>
Writing, and re-writing these union types can be cumbersome, so instead we can create our own type-aliases that represents them:

```ts
type StringOrNumber = number | string;
```
We can now update the function to use StringOrNumber:
```ts
function combineValues(input1: StringOrNumber, input2: StringOrNumber){

}
```
The same applies to literal types:
```ts
type AgeCategories = 'under 10' | '10 and over'
function playerCategory(category: AgeCategories){

}
```
</p>
<br>
<h5>Function return types</h5>
<p>
We can describe the return type of a function using a colon and return type:

```ts
function combineValues(input1: number, input2: number) : number{
    return input1 + input2;
}
```
TypeScript will infer the Type returned from a method if it is consistent. 
If a method does not return any type, it will return 'void' just as it would in Java. 

```ts
function sayHi() : void{
    console.log('Hi');
}
```
As a result, 'undefined' is returned from the sayHi method. 
If the method does however return a result to us, we will ignore the result as we otherwise expected the method to return void. 

</p>
<p>
Returning a function from a function?
This is also possible in TypeScript with type: Function.

```ts
function sayHi() : void{
    console.log('Hi');
}
let sayHiVar : Function
sayHiVar = sayHi;
sayHiVar();
```
We can increase the type strictness on the function by using a lambda expression, where the types of the parameters for the method are specified in the parentheses, and the return type of the method is to the right hand side of the arrow:

```ts
let  performCalculation: (num1: number, num2: number) => number;
```
We are saying that the variable 'performCalculation' must be a function that takes two parameters of number and number, and that returns a nuber. This allows us to specify, with much greater strictness, on the acceptable function for the variable. 
</p>
<br>
<h5>Unknown Type</h5>
<p>
We can mark a variable with the type of" 'unknown'.
Any value type can be stored into the variable without any error. 

Unknown differs to 'any' as the variable cannot hold any type of value, as we would otherwise specify with 'any'. Unknown is slightly more strict that 'any' in this way. 
If we try to assign the variable of name type string to an unknown variable, we will have a compile error as the type is literally unknown. But if we change the type to 'any', it will compile as type 'any' <i>can</i> be of type string

```ts
let input: unknown;
let name: string;

name = input
```
(Compile error on line 4 above as input is unknown)

```ts
let input: any;
let name: string;

name = input
```
Code compiles as input can be of type string.

</p>
<br>
<h5>Return type: Never</h5>
<p>
A function that returns never would be a function that throws an error. It effectively crashes the script. Therefore if we throw an error from a function, we can mark the function as returning 'never' as opposed to 'void'.

```ts
function getError(message: string) : never{
    throw { message: message};
}
```

</p>
<br>
<h5>Strict Null Checks</h5>
<p>
The Strict null check is performed by adding an explanation mark after an object declaration. It is used to assert that an object is not null.

```ts
function(human? : Human){
    verifyHumanExists(human);
    console.log(human!.name);
}
```
The verifyHumanExists method will take the human object and throw an error if it is null or undefined.
We now know the conditional human Object exists, and can asset on line 3 that the name can be obtained as the human is not null or undefined.
</p>

<br>
<h4>TS Compiler and Configuration</h4>
<p>
We are able to run the TypeScript compiler using the 'tsc app.ts' command from the command line. This will compile the TypeScript .ts file into a JavaScript .js file, that is then recognised and used by the browser. 
</p>
<p>
Rather than running this command after each change, we can take a shortcut. 
Wwe can use 'watch-mode' to tell TS to watch a file and automatically re-compile the file:

```
tsc app.ts --watch
```
You can also use -w as a short-hand form. 
</p>
<p>
If there are multiple TypeScript files, you will need to compile all of them as well. We can instruct TS to register the entire project:

```
tsc --init
```
The whole project will now be managed by TypeScript. A tsconfig.json file will be created in the project that will tell TypeScript the configuration in the project.
If you now run tsc from the command line:

```
tsc
```
The entire project will compile, all .ts files. If you run tsc -w or tsc --watch, the entire project will recompile each time it is changed. 
</p>
<p>
The tsconfig.json file tells TypeScript how to compile the project files. 
Within the json file we can provide configurations such as to exclude certain files from compilation:

```json
,
"exclude":[
    "randomfile.ts",
    "unrelatedFolder/**",
    "node_modules"
]
```
By default, node_modules will be excluded. 
Alternatively, you can specify the exact files to be compiled with the 'include' key. 
</p>
<p>
The compiler options in the json file allows us to control how the files are compiled. 
By default, each option comes with descriptions. While most options are less relevant to the majority of projects, some may be more valuable to adjust. 
The target of 'es5' is tells which JavaScript version we are compiling into.  This means all ts code is compiled down to es5 for older browser support. 
If we want to use only modern browsers, you can specify a different es versions (es2020, es6 etc).

modules

Lib is an option that we can specify which default objects typscript. If this is not set, it will use the JS Target features that are available with that version of JavaScript. These are the defaults required for TS to work in the browser. If we uncomment lib, the application will not compile as there are no default libraries available. Libraries are requierd for basic JS objects, such as 'document' and 'console' etc. 
If you want to specify the exact default setup:

```json
"lib": [
    "dom",
    "es6",
    "dom.iterable",
    "scripthost"
]
```
</p>
<p>
"sourceMap" : true will support debugging the application in the sources tab of the developer tools in the console. We can then apply breakpoints within the console to support debugging the application behaviour of the TypeScript code. 
</p>
<p>
The config file can also be used to support cleaner code practices. Config keys such as 'noUnusedLocals', 'noUnusedParameters' and 'noImplicitReturns' will flag an error where local variables and parameters are unused within a method, and when a function only returns a variable on a condition, and therefore may not always return a value. 
</p>
<p>
We can configure debugging in the configuration. First install 'Debugger for Chrome' in VS Code. Then in the config.json file, enable sourceMap: true, then select debug > start debugging. Then select Chrome, and the application will take you to the launch.json file to specify where the debug session will launch. Change the url to port 3000 and then the application will start. Reselect 'Start Debugging' and the application will take you to VSCode when it meets a break point.   
</p>
<p>
You can find further information on the default tsconfig.json properties <a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html">here</a>. The strict checks allow you to control where and when compile errors may be thrown for null, undefined and incoherent arguments. 
</p>

<br>
<h4>How TypeScript compiles Next-Generation features</h4>
<p>
The features we mention here are utilised in JavaScript as well, but they are modern and useful to know of when developing with TypeScript.
</p>
<br>
<h5>Let and Const</h5>
<p>
'let' and 'const' allow us to define variables that can (let) or cannot (const) be reassgined a value. Let differs from the depreceiated 'var' as the scope for a variable of 'let' is reduced to the scope of a block:

```ts
if(person.isStudent()){
    let studentId = person.id;
}

```
The scope of <code>studentId</code> is within the if-statement only. However if the variable was defined usin g 'var', then we would be able to access the variable (such as on line 4).
This forces you to write cleaner code where the scope of the variable is defined for the scope it is used.
</p>
<p>
It is wuite interesting how a const works, as they point to the same memory location of the object. Therefore changing a number or string will update the location of the memory, and cause a compile error. However, if we have a const array, we can actually push and pop from it. This is because the memory location of the array does not change. 
</p>
<br>
<h5>Arrow Functions</h5>
<p>
As we have seen earlier, we can construct a function and the body, capturing the parameters it accepts and logic it performs:

```ts
const addNumbers = (num1: number, num2: number) => {
    return num1 + num2;
}
```
We can write the logic in a single line, and without the braces if it fits on the line:
```ts
const addNumbers = (num1: number, num2: number) => return num1 + num2;
```
</p>

<br>
<h5>Default Arguments to Functions</h5>
<p>
We are able to assign a default value to a function. For example, if we want to get the product of two numbers, and want to default the numbers to 1, so that a value of 0 is never returned:

```ts
const product = (num1: number = 1, num2: number = 1) => num1 * num2;
```
We can now call the function with 0, 1 or 2 arguments. As the default value for any missing parameters has been defined. 
One note to make is that any non-default parameters must be defined in the function <u>before</u> any default parameters. For example the below will not compile:
```ts
const product = (num1: number = 1, num2: number) => num1 * num2;
```
JavaScript will not look at the funciton definition, it will adhere to the order of the parameters.
</p>
<br>
<h5>Spread Operator</h5>
<p>
When navigating an array, we can retrieve all elements of an array with the spread operator:

```ts
const names = ['Aneesh', 'Bob', 'Charlie'];
const names2 = ['Dean', 'Ellie', 'Frank']

names.push(...names2);
```
The spread operator (...) is a valid JS operator that allows us to extract all elements out of an array, and saves us having to individually extract them:

```ts
const names = ['Aneesh', 'Bob', 'Charlie'];
const names2 = ['Dean', 'Ellie', 'Frank']

names.push(names2[0], names2[1], names2[2]);
```

</p>

<br>
<h5>Rest Parameters</h5>
<p>
Lets say we have an addition method that adds as many numbers as we want together. 
We don't have to create individual methods with different paramter numbers.
We can use the spread operator and specify the type to say what type of parameters we expect, but not necessarily how many. 

```ts
function addManyNumbers(...numbers: number[]){
    return numbers.reduce((currentResult, currentValue) => {
            return currentResult + currentValue 
        }, 0);
}
```
</p>
<br>
<h5>Array and Object Destructuring</h5>
<p>
Destructuring involves pulling elements out of an array. 
Rather than extracting individual elements from an array into a new variable:

```ts
const names = ['Aneesh', 'Bob', 'Charlie'];
const name1 = names[0];
const name2 = names[1];
```
We can instead extract the array into new variables on a single line:


```ts
const names = ['Aneesh', 'Bob', 'Charlie'];
const [name1, name2, ...otherNames] = names;
```
The first name will be stored in a variable 'name1', the second into a variable 'name2', then all remaining names in the array 'names' will be stored in an array called 'otherNames'.
The arrats are ordered, therefore destructuring occurs in order. 
</p>
<p>
We can also destructure an object:

```ts
let shape = {
    height: 100,
    width: 20,
    sides: 7
}
```
We can extract the variables as we require from the shape object:

```ts
const { height, width } = shape;
```
Elements are obtained with the same property names as defined in the object. 
</p>

<br>
<h4>TS Classes, Interfaces</h4>
<br>
<h5>Constructors</h5>
<p>
TypeScript supports a few changes when creating classes in the application.
To create a class, we use the 'class' keyword. In the Person class, we will define two properties, a name of type string and an age of type number.

```ts
class Person{
    name: string;
    age: number;
}
```
We can instantiate the Person class with the constructor, a reserved word for classes:

```ts
class Person{
    name: string;
    age: number;

    constructor(nameArg: string, ageArg: number){
        this.name = nameArg;
        this.age = ageArg;
    }
}
```

We can create a new instance of the person with the 'new' keyword and using the constructor:

```ts
const me = new Person('Aneesh', 27);
```
</p>
<br>
<h5>Class functions</h5>
<p>
We can create functions within our class. 

```ts
class Person{
    name: string;
    age: number;

    constructor(nameArg: string, ageArg: number){
        this.name = nameArg;
        this.age = ageArg;
    }

    sayHi(){
        console.log("hello, I am " + this.name;)
    }
}
```
The method 'sayHi()' is written just like a regular function, however we do not specify the function declaration at the start. The 'this' keyword is used to reference to the exact instance of the object to obtain the name from. 
</p>

<br>
<h5>Access Modifiers</h5>
<p>
We can assign methods and variables as 'private' so they are only accessible from within the class.
We can force the access of a variable. 
By default, all prooperties and methods are 'public' and accessible from anywhere. 
</p>

<br>
<h5>Shorthand Initialisation</h5>
<p>
We have written a fairly long way to initialise our variables through the constructor. 
Rather than defining all the fields, and instantiating them through the constructor, we can simple specify all the variables, and their access modifier within the constructor parameters:

```ts
constructor(private name: string, private age: number){ }
```
Instead of:

```ts
    name: string;
    age: number;

    constructor(nameArg: string, ageArg: number){
        this.name = nameArg;
        this.age = ageArg;
    }
```
</p>

<br>
<h5>Read-only properties</h5>
<p>
The read-only keyword is introduced with TypeScript to ensure a property is initialised once and is not changed afterwards:

```ts
constructor(private readonly name: string, private age: number){ }
```
The name of the person is readonly as it will never change. This enhances type-safety and makes it very clear the intent of the code. 
</p>

<br>
<h5>Inheritance</h5>
<p>
We can use inheritance to allow classes to obtain similar 'base' properties from other classes. This can prevent us re-writing code that we have in other classes. 
For example, if we have a new class, called TallPerson who also has a name and age, instead of creating the class like this:

```ts
class TallPerson{

    constructor(private readonly name: string, private age: number){ }
}
```
We can extend the Person class to obtain all the properties it already has:

```ts
class TallPerson extends Person{

}
```
The constructor of the Person can now be used for the TallPerson.
If the TallPerson class has a further attribute, we can instantiate it through the constructor. We must first call the constructor of the parent class 'Person' using the <i>super</i> keyword before we can update the TallPerson class:

```ts
class TallPerson extends Person{
    
    private height: number;

    constructor(heightArg: number){
        super('Aneesh', 27);
        this.height = heightArg;
    }
}
```
</p>

<br>
<h5>Overriding Methods and Protected Access Modifier</h5>
<p>
Using inheritance, we can override the methods from the parent class. 

```ts
class TallPerson extends Person{

    sayHi(){
        console.log("hello, I am a tall person named " + this.name)
    }
}
```
We may be facing a compile error on the 'this.name' section of the console log. If we look at the Person class, the 'name' property may be private, and therefore inaccessible to any class outside of it. 

```ts
class Person{

    construtor(private readonly name: string, private age: number){}
}
```
We can change the access-modifier to <i>protected</i> to resolve this problem. Protected means the property is accessible to the class itself and <u>anay</u> class that extends it. We are very slightly expaning the scope for which the variable can be accessed:

```ts
class Person{

    construtor(protected readonly name: string, private age: number){}
}
```
</p>
<br>
<h5>Getters and Setters</h5>
<p>
When setting private and protected access modifiers to variables, we can control which classes are able to get and set these variables by creating getters and setters. 
A getter will return the variable.
It follows the convention of 'get' followed by the method name.

```ts
class Person{
    private name: string;

    get name(){
        return this.name;
    }
}
```
The method is then accessed without using the parenthesis as we would otherwise expect for any other method. 

```ts
console.log(person.name)
```
</p>
<p>
When creating a setter, we use a similar pattern:

```ts
set name(nameArg: string){
    this.name = nameArg;
}
```
We can call the method:

```ts
person.name('Aneesh');
```

A further benefit to having methods for getting and setting values is that we can also add some logic to the method to ensure the value is not null, or any other type of validation we would require:


```ts
set name(nameArg: string){

    if(!nameArg){
        throw new Error('Name cannot be empty');
    }
    this.name = nameArg;
}
```
</p>

<br>
<h5>Static properties</h5>
<p>
Static functions are mapped (or grouped) to a class, and can be accessed without creating an instance of the class (with the new keyword).
One example we alreday use may be Math.abs() or Math.pow(). We can access these methods without creating a new instance of Math. 
</p>
<p>
For example, lets say we want to add a method to the Person class called 'getPlanet'. All Person objects will come from the same planet, and we can do this using the 'static' keyword before the method or property:

```ts
class Person{

    static species = 'Homo sapien';

    static getPlanet(){
        return "Earth";
    }
}
```
We can then access the method and property without creating an instance of the class:

```ts
console.log(Person.species)
console.log(Person.getPlanet())
```
</p>

<br>
<h5>Abstract classes</h5>
<p>
As we saw earlier with inhertiance, we are able to override specific methods from the parent class. An abstract class is used to force the developer to provide their own implementation of a method whenever the parent class is extended. For example, lets say the Person class has a method called 'getUniqueFeature()'. Every class that extends 'Person' MUST override the method, as they will have a unique feature about the class. To enforce this behaviour, we mark the method with the keyword 'abstract' in the parent class, and we do not provide a method body to it:

```ts
abstract class Person{

    abstract getUniqueFeature(): void;
}
```
Notice we also need to mark the Person class as 'abstract' as it contains an abstract method. All classes that extend 'Person' will now have a compile error if they do not have their own implementation of 'getUniqueFeature' that returns void. 
</p>

<br>
<h5>Interfaces</h5>
<p>
Interfaces describe the <u>structure</u> of an object, and ultimately define a 'contract' for how a class will look like. Just how an abstract class enforces a class to override specific methods, an interface consists of only 'abstract' methods. An interface also contains the properties of the class:

```ts
interface Athlete{
    sport: string;
    level: string;

    playSport() : void;
}
```
We can now use the interface as a type, where it must contain the properties and implementation of the methods:

```ts
let athlete1: Athlete;

athlete = {
    sport: 'Golf',
    level: '2',
    playSport() {
        console.log('Playing some golf at level 2')
    }
}
```
</p>
<br>
<h5>Using an interface with a class</h5>
<p>
An interface can be used to enforce the behaviour and structures of a class. By 'implementing' an interface, a class will be contracted to override the methods and to have a vaue present for the properties:

```ts
class Golfer implements Athlete{

    sport = 'golf',
    level = '2'
    playSport(){
        console.log('Playing golf')
    }
}
```
</p>
<p>
Note: we can implement multiple interfaces in a class, but can only ever extend 1.
</p>
<br>
<h5>Readonly in an Interfaces</h5>
<p>
We can define properties within an Interface can be marked with 'readonly'.

```ts
interface Athlete{
    readonly sport: string;
}
```
The implementation of 'Athlete' therefore must instatiate the variable in the constructor or in the class itself, and it cannot be reassigned.
</p>
<br>
<h5>Functional Interfaces</h5>
<p>
We can create functional interfaces (interfaces with a single abstract method) to create anonymous functions. We have seen already with TypeScript that we can just define a type along with the number and type of arguments and the return type:

```ts
type myFun = (a: number) => number;

myFun = (num1 : number) => {
    return num1*10;
}
```
And alternative way to do this is through a functional interface. Notice the return type is preceded by a colon, not an arrow:

```ts
interface MyFn{
    (a: number) : number;
}
```
And then we can create an anonymous function:

```ts
let myFnImplementation: MyFn;
myFnImplementation = (num1: number) => {
    return num1 * 20;
}
```

The custom type is a little bit shorter to write, and is often more often used than the functional interface. 
</p>

<br>
<h5>Optional Properties</h5>
<p>
We can tell TypeScript that some properties of an interface might exist in an implementing class, but it does have to. We specify this with a questionmark after the property name:

```ts
interface Sport{
    firstYearinOlympics?: string;
}
```
Therefore if a class doesn't have the property, it will still compile.
</p>

<br>
<h4>TS Advanced Types</h4>
<br>
<h5>Intersection Types</h5>
<p>
We are able to combine mutliple types together to create a combined type.
This is similar to defining mutliple interfaces and have them extend from a central interface. This is useful when we want to create a type that must obide by the contract of two more more types by using an ampersand between them in definition:


```ts
type Athlete = {
    name: string;
    sport: string;
}

type Coach = {
    coachLevel: number;
}

type PlayingCoach = Athlete & Coach;
```
We have defined the PlayingCoach as a combination of Athelte and Coach, which will therefore have 3 properties: name, sport and coachLevel;

```ts
const pc1: PlayingCoach = {
    name: 'Pep',
    sport: 'football',
    coachLevel: 5
}
```
</p>

<br>
<h5>Type Guards</h5>
<p>
Type Guards describe the apporach of checking if a property or method exists before we try to use it. 
We have seen earlier that you can create a union type:

```ts
type StringOrNumber: number | string;
```
When we use this type within a function, we may need to check what the type is before handling it:

```ts
function combine(a: StringOrNumber, b: StringOrNumber){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}
```
On line 2, we have defined a 'type guard' to check the type of our arguments. 
The typeof check is performed at runtime by JavaScript, therefore if our type check were to use a combination of Athlete and Coach from above, we would not be able to check the type properly. The type of Athelete and Coach would both equate to 'object', so how would we perform such a check?
</p>
<p>
We are able to check if the object passed in has a specific property, such as 'coachLevel', as a Coach would have, and an Athlete would not.

```ts
type CoachOrAthlete = Athlete | Coach;

function getStaffDetails(staff: CoachOrAthlete){
    if('coachLevel' in staff){
        console.log('Coach level: ' + staff.coachLevel)
    }
    else if('name' in staff){
        console.log('Name of Athlete: ' + staff.name)
    }
}
```

An alternative way to approach this is to use the 'instanceOf' keyword from the JavaScript library:

```ts
type CoachOrAthlete = Athlete | Coach;

function getStaffDetails(staff: CoachOrAthlete){
    if(staff instanceOf Coach){
        console.log('Coach level: ' + staff.coachLevel)
    }
    else if(staff instanceOf Athlete){
        console.log('Name of Athlete: ' + staff.name)
    }
}
```
</p>

<br>
<h5>Discriminating Union</h5>
<p>
Discriminted Union allows us to handle a Union type that consists of multiple classes or interfaces. 

```ts
interface Sport {
    competition: string;
}

interface Hobby{
    category: string;
}

type Activity = Sport | Hobby

function activityDetail(activity: Activity){
    
}
```
We are able to access the category of the Activity by checking if it is a Hobby:

```ts
if('category' in activity){
    console.log(activity.category)
}
```
But if our Activty type has many different types, this can be cumbersome to write. We would need to check all the different fields for each interface before calling it. 
</p>
<p>
A discriminated union makes it easier for us when navigating these types; we would require a common field across the interfaces that we can check upon and cycle through before accessing the Activity type. 
We can achieve this with a new parameter in all of our interfaces. I have called it type:

```ts
interface Sport {
    type: 'sport';
    competition: string;
}

interface Hobby{
    type: 'hobby';
    category: string;
}

```

After defining the common value across the interfaces, we are able to use a switch statement upon the Activity.type to ensure we are accessing the correct type:

```ts
switch(activty.type){
    case 'sport':
        console.log('Competition: ' + activity.competition)
        break;
    case 'hobby':
        console.log('Category: ' + activity.category)
}
```
</p>

<br>
<h5>Type Casting</h5>
<p>
Type Casting allows us to tell TS that an object is of a certain type.
When would we know that our Object is a certain type? A good example can be when accessing an element from the DOM, typically via document.querySelector, or document.getElementById. 
</p>
<p>
Let's say we have an element in our html that is of type paragraph:

```html
<p></p>
```
If we try to access the paragraph in the TypeScript file:
```ts
const para = document.querySelector('p')
```
We will see the type is of 'HTMLParagraphElement'. This gives us access to specific methods and tools specific to the class. 
</p>
<p>
If we change the html element and access it via an id:

```html
<p id = 'my-input'></p>
```

```ts
const para = document.getElementById('my-input')
```
The type is now of te more general type: HTMLElement. 
This is caused as TypeScript does not read into the HTML code to that depth.
All HTML types do not support the same properties, if we had an input element, we may want to pre-define the text in it:

```html
<input type="text" id="my-input">
```
The below code will not compile:

```ts
const myInputEl = document.getElementById('my-input');
myInputEl.value('hello')
```
As the HTMLElement does not support a value method. 
Instead, we can use type casting to tell TypeScript what type the object is. We will use angled brackets before the declaration with the type we expect. Now the below will compile as we have told TypeScript that the type is an InputElement
```ts
const myInputEl = <HTMLInputElement>document.getElementById('my-input');
myInputEl.value('hello')
```
</p>

<br>
<h5>Index Properties</h5>
<p>
Index types allow us to create flexible types with regards to the properties that they hold. This would be most useful when we know the type of property we have in an interface, but not necessarily the name of the property, or the number of properties it will contain.
</p>
<p>
To create the index property in an interface, we need to say that we don't know the property name or count, but that we do know that it will contain properties of a specific type:

```ts
interface MyInterfce{
    [prop: string] : string;    
}
```
Within the square brackets, we are telling the interface that we will have many properties. After the colon, we saying all those properties will be of type string.
</p>
<p>
When we use index properties, out interface will only ever contain the same type as defined. We cannot have another property of a different type in there. We can then use the interface:

```ts
const myImplmentation: MyInterface = {
    name: 'Aneesh';
    location: 'London';
}
```
We are able to define the properties as strings as within the square brackets, we have said the property is of type string. The below would also work:

```ts
interface MyInterfce{
    [prop: number] : string;    
}
const myImplmentation: MyInterface = {
    1: 'Aneesh';
    2: 'London';
```
So that summarises how we can define a highly flexible interface that can store an unknown number of properties of the same type, even if we do not know the names of the properties we require. 
</p>

<br>
<h5>Optional Chaining</h5>
<p>
Optional chaining is a syntax design that allows us to check if an item exists before we try to access it. We do this by passing in a question mark after the object name and before the property of that object is obtained.
Lets look at an example:

```ts
const footballer = {
    name: 'Bamford';
    stats: { goals: 10, team: 'Leeds Utd'};
}
console.log(footballer.stats.goals)
```
</p>
<p>
The above code will compile just fine. But if we are obtaining the data from a separate service (such as a backend) and we do not know if the stats property, and the goals actually exist.
</p>
<p>
If the goals do not exist, we will have a runtime error from the code. Instead, we can protect ourselves to only try and access the goals if the stats exist:

```ts
console.log(footballer.stats?.goals)
```
and then we can take this a step further by only trying to acces the stats if the footballer exists:
```ts
console.log(footballer?.stats?.goals)
```
</p>
<br>
<h5>Nullish Coalescing</h5>
<p>
This is used for working with data, where we do not know if it is null, undefined, or valuable data. We can be faced with this situation when accessing data from a different source, such as an API or database. 
</p>
<p>
As we saw earlier, when we evaluated a property, it can be 'falsy' or 'truthy'. That means if we get an empty string or 0 value for example, we may evaluate it to false, even if it is the genuine value we want. Therefore checking for null/undefined/falsy value can lead to unwanted results when the value is just a genuined 0/empty string value.
We need a new way to check for null/undefined.

```ts
const myData = '';
const myDerivedValue = myData | 'My Data Default';
console.log(myDerivedValue);
```
Prints 'My Data Default'
</p>
<p>
The nullish coalescing operator can be used in this circumstance: ??. 
So here we will check if the value is ONLY null or undefined.

```ts
const myData = '';
const myDerivedValue = myData ?? 'My Data Default';
console.log(myDerivedValue);
```
Prints: ''
</p>

<br>
<h4>TS Generics</h4>
<p>
Generics are used in TypeScript, and not in JavaScript. These are used in other languages such as Java. 
</p>

<br>
<h5>What are Generics?</h5>
<p>
A generic type is one that is flexible and is connected with another type. These are used when we have an object that uses other types. 
When we define an array:

```ts
const scores: [11,22,13];
```
We are defining an array of number. We are building an array object, and marking all the items within it as a specific type. If we define an empty array:

```ts
const values: []
```
We have defined an array of type 'any'. 
</p>
<p>
The benefit of TypeScript defining the 'type' of items within our array after we populate it, is that we can now call specific methods that extend from the type of object. For example, we can split the value if they are of type string. When we define an array and popualte it, we are ultimately specifying to TypeScript what type of item we are storing within it. Using generics, we would denote this within angled brackets:

```ts
const scores: Array<number> = [11,22,13];
```
Generics allows for further type-checking where we use multiple types of data with out objects. 
</p>

<br>
<h5>Creating Generic Functions and Classes</h5>
<p>
We can create a generic function that merges two objects:

```ts
function merge(item1: object, item2: object){
    return Object.assign(item1, item2);
}

console.log(merge({name: 'Ted'}, {age:27}));
```
We will receive a combined object of:

```json
name: 'Ted',
age: 27
```
The problem we have with out output is that we cannot access individual components (name or age) directly as the type 'object' does not have these by default. We can use Generics here to map the value into a specific object that does contain both these properties:


```ts
function merge<T, U>(item1: T, item2: U){
    return Object.assign(item1, item2);
}
```
From the angled brackets above, we are saying this method defines two types. T and U.
</p>
<p>
TypeScript is now able to infer the types of result we will get from Object.assign(item1, item2) when we pass in the name and age. Before, when we used Object as an argument, TypeScript could not look into the arguments passed in, as object is highly generic and vague. When we told the function that it can expect a type T and U for the first and second argument, TypeScript is then instructed to look into these, and to infer what the result will be. 
</p>
<p>
TypeScript can now infer the result to be a combination of T and U to create a string property of name and a number property of number.
Now we can call the name and age information on the object:

```ts
function merge<T, U>(item1: T, item2: U){
    return Object.assign(item1, item2);
}

const obj1 = merge({name: 'Ted'}, {age:27});
console.log(obj1.name);
```
</p>
<p>
We are able to set the types of T and U dynamically when we call the function. Therefore the below examples will compile and run as we pass different types of values:

```ts
const obj1 = merge({name: 'Ted'}, {age:27});
const obj2 = merge({sport: 'golf'}, {level:'amateur'});
const obj3 = merge({hobby: 'TypeScript'}, {experienceYears:1});
```

</p>
<br>
<h5>Generic constraints</h5>
<p>
We are able to use Generics to pass in extra information to a function so that we can optimise the result obtained from the function. 
</p>
<p>
At the moment, we are telling our merge function that it can be any type passed in. But sometimes we may want to constrain what type of objects are being passed in. We can say that only objects that are of type object can be used. For example, a number does not extend object, but a custom object such as {name: 'aneesh'} does. This can help guarantee that our function will receive a specific type of argument, while providing flexibility of what type is pased in. We achieve the contraint by telling out type to extend a specific class:

```ts
function merge<T extends object, U extends object>(item1: T, item2: U){
    return Object.assign(item1, item2);
}
```
</p>
<p>
To provide a further example of the extenstion, we can define an interface with a method: play, and pass in objects that have that method:

```ts
interface Game{
    length: number;
}

function merge<T extends Game, U extends Game>(item1: T, item2: U){
    return Object.assign(item1, item2);
}
console.log(merge('game 1', 'game2'))
```
As the string object has a length property, it will extend Game and will therefore be able to be passed into the merge function. 

</p>

<br>
<h5>Generic classes</h5>
<p>
We are also able to create generic classes. The classes we create will need to contain a specific type of data. For example we could have a class that stores Player objects:


```ts
class PlayerStore {
    private players = [];

    addPlayer(player) {
        this.players.push(player);
    }

    removePlayer(player) {
        this.players.splice(this.players.indexOf(player), 1);
    }

    getPlayers() {
        return [...this.players];
    }
}
```

We can convert our class to accept any type of object by placing a key (typically T) within angled brackets after the class name, and then casting the arguments of the methods to that type T. 

```ts
class PlayerStore <T>{
    private players: T[] = [];

    addPlayer(player: T) {
        this.players.push(player);
    }

    removePlayer(player: T) {
        this.players.splice(this.players.indexOf(player), 1);
    }

    getPlayers() {
        return [...this.players];
    }
}
```
Now we can create an instance of the PlayerStore and specify the type of object that is held, whether it be strings, or objects, or custom classes:


```ts
let myStore = new PlayerStore<string>();
myStore.addPlayer('Patrick');
myStore.addPlayer('Kalvin');
myStore.removePlayer('Kalvin');
console.log(myStore.getPlayers())
```
</p>
<p>
The benefit to having a generic class, is that we can change the type for how the players are stored. Perhaps we want to create a player class and store those objects within the store:

```ts
class Player{
    name: string;
    age: number;

    constructor(nameArg: string, ageArg: number){
        this.name = nameArg;
        this.age = ageArg;
    }
}

let player1 = new Player('Kalvin', 26);
let player2 = new Player('Patrick', 27);

let myPlayerStore = new PlayerStore<Player>();
myPlayerStore.addPlayer(player1);
myPlayerStore.addPlayer(player2);
console.log(myPlayerStore.getPlayers());
```
</p>

<br>
<h5>Generic Utility Types</h5>
<p>
<strong>Partial</strong><br>
Partial is a built-in type with TypeScript that allows us to define objects that are incomplete. 
If we have an interface of Player, and they have a name and age, we may want to create a player instance through a function tha accepts these parameters. 

```ts
function createPlayer(name: string, age: number) : Player{
    Player myPlayer: Player = {};
    myPlayer.name = name;
    myPlayer.age = age;
    return myPlayer;
}
```
You will see a compile error on line 2 as the Player cannot be empty.
If we change myPlayer of type Partial, we will remove the compile error. Partial is a built-in type with TypeScript that will nullify our properties of an object in the case they we do not instantiate it completely. 

```ts
function createPlayer(name: string, age: number) : Player{
    Player myPlayer: Partial<Player> = {};
    myPlayer.name = name;
    myPlayer.age = age;
    return myPlayer as Player;
}
```
We fix the return by using 'as Player' so the Player is returned and not a Partial of Player.
</p>
<p>
<strong>Readonly</strong><br>
Another type can be Readonly where we specify an object to be readonly:


```ts
const myNames = Readonly<string[]> = {'Aneesh', 'Bob'}
myNames.push('Jon')
```
Where we will see a compile error on line 2.
</p>

<br>
<h4>TS Decorators</h4>
<p>
Decorators are used for meta-programming. They do not have an impact on the user, but is used to support other developers when using TS. We are able to guarantee that methods are used as expected, classes are loaded as expected and to use some hidden details with out class that benefit the developer.
</p>

<br>
<h5>What are decorators?</h5>
<p>
Before we begin with decorators, we need to ensure they are enabled within the project. Head to the tsconfig.json file and ensure the below line is not commented out:

```json
,"experimentalDecorators": true
```
</p>
<p>
We can add a decorator to a simple class:

```ts
class Player {
    name = 'Aneesh';

    constructor(){
        console.log('Creating player...');
    }
}

const player = new Player();
console.log(player.name);
```
When we run this code, we will see the below output:

```
Creating player...
Aneesh
```

</p>
<p>
A decorator is just a function that is applied to a class

```ts
function MyDecorator() {
    console.log('calling the decorator')
}

@MyDecorator()
class Player {
    name = 'Aneesh';

    constructor(){
        console.log('Creating player...');
    }
}

const player = new Player();
console.log(player.name);
```

The annotation is used to mark the decorator on the class. Decorators receive arguments. When they are used on a class, we define the target in the arguments. The target is of type function, and when it is used with a class, that function will be the constructor:


```ts
function MyDecorator(target: Function) {
    console.log('calling the decorator')
}
```
If I run the code one more time:

```
calling the decorator
Creating player...
Aneesh
```
We can see the decorator has been called before creating the class. If we were to console log the target, we would see the class with the constructor printed to the console.

```ts
class Player {
    constructor(){
        console.log('Creating player...');
    }
}

```
Decorators are executed when the class is defined, not when it is instantiated. When the class definition is defined. 
</p>

<p>
Decorator factories allow us to define decorators in a configurable way. 
We can convert the decorator we have written above to return a function, this way we can pass in a value to configure how the decorator performs:


```ts
function MyDecorator(logMessage: string) {
    return function(target: Function){
        console.log(logMessage)
    };
}

@MyDecorator('Logging message')
class Player{
    ...
```
</p>

<br>
<h5>Building useful decorators</h5>
<p>
Given that we understand that decorators are executed during the class definition, we can actually use the decorators to render information into the dom.
If we take our html code and add a new div with the id: my-dec:

```html
<div id="my-dec"></div>
```
And we create a new decorator that accepts two strings: a template and a hookId. 
We can reach out to the element (my-dec) and we can update the innerHTML using the template:

```ts
function UpdateHTML(template: string, hookId: string){
    return function(target: Function){
        const myEl = document.getElementById(hookId);
        myEl.innerHTML = template;
    }
}

@UpdateHTML("Hello World", "my-dec")
class Player {
    ...
```
We can now see the power of decorators, we can render data from the decorator into the html. 
We could take this further by adding a html element:

```ts
@UpdateHTML("<h1>Hello world</h1>", "my-dec")
```

</p>
<p>
If we had multiple decorators on a single class, the creation of the decorators will be performed in the order they are written in the TS file (top to bottom). But they are executed from the botttom-up order on the class. 

```ts
function MyDecorator(logMessage: string) {
    console.log('Creating my decorator')
    return function(target: Function){
        console.log(logMessage)
    };
}

function UpdateHTML(template: string, hookId: string){
    console.log('Creating updateHTML')

    return function(target: Function){
        console.log('Update html method')
        const myEl = document.getElementById(hookId);
        myEl.innerHTML = template;
    }
}


@MyDecorator('Logging')
@UpdateHTML("Hello World", "my-dec")
class Player {
    ...

```
The example above, MyDecorator will be created first, and then the UpdateHTML. The console output will read:

```
Creating my decorator
Creating updateHTML
```
And then, because the Player Class has the oder of the annotations as MyDecorator on top, and then UpdateHTML below, it will execute the <i>functions</i> in the bottom-up order, so UpdateHTML first:

```
Update html method
Logging
```
</p>

<br>
<h5>Property Decorators</h5>
<p>
We are able to add a decorator to a property. Unlike a class decorator, as we have seen above, the property decorator will receive two arguments. The target (the object created) and the property name (a string). 

```ts
function MyLog(target: any, propertyName: string){
    console.log(propertyName);
}

class Player{
    @MyLog
    name: string;

    constructor(name: string){
        this.name = name;
    }
}
```
Will print:

```
name
```
We can see from above, that the property decorator is executed when the class is defined. We do not actually create an instance of the Player in the code snippet above, but to the console, we can see the proeprty decorator has been registered on the name property. 
</p>

<br>
<h5>Accessor and Parameter Decorator</h5>
<p>
An accessor, as discussed above can be a get or set method on a property in a class:

```ts
class Player{

    name: string;

    set name(val: string){
        this.name = val;
    }

    constructor(name: string){
        this.name = name;
    }
} 
```
We have a set method above that allows us to set the name property of the Player. 
We can create the decorator for this method, however we need to pass in 3 arguments: the target, just like before, the name of the method, and the descriptor of type PropertyDescriptor. The PropertyDescriptor comes from JavaScript and is used to describe a property on an Object. The fields included are 'configurable', a boolean to say if a value can be redefined, 'get' if the value can be obtained through a getter, 'set' if the value can be set through a setter.
<br>
We can create a property decorator as below:

```ts
function AccessorDeco(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(name);
    console.log(descriptor);
}
class Player{

    name: string;

    @AccessorDeco
    set name(val: string){
        this.name = val;
    }

    constructor(name: string){
        this.name = name;
    }
} 
```
We will see the below printed:
```
name
{get: undefined, enumerable: false, configurable: true, set: f}
```

</p>
<p>
A method decorator can also be created, taking in 3 arguments: target, name and descriptor, just as above. 

```ts
function MethodDeco(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(name);
    console.log(descriptor);
}
class Player{

    name: string;

    set name(val: string){
        this.name = val;
    }

    @MethodDeco
    function printTheName(){
        console.log('Name of player is: ' + this.name)
    }

    constructor(name: string){
        this.name = name;
    }
} 
```
Will print below:

```
printTheName
{writable: true, enumerable: false, configurable: true, value: f}
```
In the propertyDescriptor, the term 'writable' describes if the method can be modified. It is only specified if there is no get or set functions specified.
</p>
<p>
Lastly, we can add a descriptor to a parameter:

```ts
function ParamDeco(target: any, name: string, position: number){
    console.log(name);
    console.log(position);
}
```
It is important to note that the name is the method name.

```ts
class Player{

    name: string;

    function printTheName(@ParamDeco prefix: string){
        console.log(prefix + this.name)
    }
    constructor(name: string){
        this.name = name;
    }
} 
```
We can see the @ParamDeco has been added before the parameter for 'printTheName'. 
In the console, we will see:

```
printTheName
0
```
</p>

<br>
<h5>Using Decorators</h5>
<p>
So far we have seen where and how we can use decorators. But lets look at how it can be used. 
Decorators come in different forms, but they are run in a distinct order: Class, method, parameter decorators are all run during load-time when a class is defined. Not at runtime when a class is instantiated or used. this is a function that executes when the class is defined. 
</p>
<p>
They add extra functionality, behind the scenes. 
</p>

<br>
<h5>Class decorators - a use case</h5>
<p>
When we define a decorator for a class, we have previously used it to return a function. For a class decorator, we can specify that the function returned, itself returns something else. So for the class decorator, that can be a constructor, that will replace the class constructor. 
</p>
<p>

```ts
function ClassDeco(template: string, domHook: string){
    return function(originalConstructor: any){
        return class extends originalConstructor{
            constructor(){
                super();
                const hookEl = document.getElementById(domHook);
                hookEl.innerHTML = template;
            }
        }
    }
})

@ClassDeco('<h1>Hello</h1>', 'my-dec')
class Player{

    name: string;

    function printTheName(@ParamDeco prefix: string){
        console.log(prefix + this.name)
    }
    constructor(name: string){
        this.name = name;
    }
} 
```

Let's break this down. As we have seen before, the class decorator takes 2 parameters, a string template and a hookId which refers to a DOM element. Usually, the function of the decorator that is returned is exected when the class definition is defined. And before runtime. But we are now able to instead return a constructor that overrides the class constructor. The function call on line 2 already accepted the constructor of the class as an argument, I have named it originalConstructor to be clear. This function now returns a new class that extends the originalConstructor, essentially a constructor that is a child of our Player class. This constructor will now have its own constructor that MUST call super() as it is a child class. Then we define the hookElement and reassign the innerHTML. 
</p>
<p>
But what is the difference?
Now, we will ONLY call the inner DOM logic when the class is created. Not when it is defined. So it is now a runtime decorator!
</p>
<p>
There are still a couple compile errors we will face, and this is because the new constructor we 
defined due to the type of constructor that is returned from the decorator. 

```ts
function ClassDeco(template: string, domHook: string){
    return function<T extends {new (...args: any[]): {} }>(originalConstructor: T){
        return class extends originalConstructor{
            constructor(...args){
                super();
                const hookEl = document.getElementById(domHook);
                hookEl.innerHTML = template;
            }
        }
    }
})
```
On line 2, we have told the function to accept any type that can be instantiated with a new keyword. And we have said that the number of arguments for the constructor can be any, of any type. Then on line 4, we are passing this through to the constructor function that is returned. 
</p>

<br>
<h5>Other decorator return types</h5>
<p>
A method decorator and accessor decorator can return property descriptor. They both receive the propertyDescriptor in the method. PD is a JS Object that defines key properties of the class. They allow you to define a property in more detail. Writable = can be changed after created. Enumerable = shows up when we loop. Configurable: = config can be changed (property can be deleted). We can return a new descriptor that will return an updated property descriptor. 
</p>
<p>

</p>
<br>
<h4>TS Namespaces and Modules</h4>
<p>

</p>

<br>
<h4>TS and Webpack</h4>
<p>

</p>

<br>
<h4>TS and third-party libraries</h4>
<p>

</p>

<br>
<h4>Summary</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>