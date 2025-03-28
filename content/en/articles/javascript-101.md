---
title: "JavaScript 101: General Concepts"
date: 22/06/2023
description: The 101 Concepts Every JavaScript Developer Should Know and Their Explanations.
tags:
  - Development
  - Productivity
image: https://furkansahin.tr/articles/launch-your-porfolio.jpg
readingTime: "23"
published: true
---

## Introduction

In this article, I have listed and explained 101 general concepts of JavaScript, which form the foundation of the front-end ecosystem, providing value for those aiming to develop themselves in this field.

![preview](/articles/js-101.jpg)

### 1. Web Browser

Browsers are software applications that allow internet users to connect to servers where websites are stored, process the content, display it, and store the content locally.

### 2. Browser API’s

Browser APIs are programming interfaces provided by web browsers that enable web applications to run on the browser. These APIs allow interaction with the browser through JavaScript code and can be used to perform various functions like user interface manipulation, network requests, data storage, timers, events, and more.
### 3. WebAssembly (WASM)

WebAssembly is a software that allows us to write code in almost any programming language, such as C, C++, Rust, and others, to be executed in our web browsers alongside JavaScript.

### 4. ECMAScript
ECMAScript is a standard for scripting languages like JavaScript, published by Ecma International in the ECMA-262 document and updated annually.

### 5. HTML
HyperText Markup Language is the standard text markup language used to create web pages. It allows the creation of visual and dynamic sites when combined with CSS and JavaScript.

### 6. High Level
High Level and Low Level refer to the proximity of programming languages to machine code (“0,1”). JavaScript is a High-Level programming language.

### 7. Interpreter
An interpreter is a program that translates and executes high-level programming languages line by line into machine code.

### 8. Scripting Language
Scripting languages are interpreted languages that do not require compilation and are easier to learn. JavaScript and Python are examples of such languages.

### 9. Runtime
The runtime of JavaScript refers to the period during which the code is executed in the browser, and the browser contains a JavaScript engine to run the code. For example, Google Chrome’s JavaScript engine is V8, while Mozilla Firefox’s JavaScript engine is SpiderMonkey.

### 10. V8 Engine
The V8 engine is a high-performance JavaScript engine used to execute JavaScript code. It compiles code to run quickly.

### 11.	Browser Dev Tools

Browser Dev Tools are tools used to inspect web pages, debug errors, analyze performance, and perform many other functions.

### 12.	Just-In-Time Compilation

JavaScript is typically an interpreted programming language. However, to improve performance, many JavaScript engines use Just-In-Time (JIT) compilation technology. JIT compilation converts JavaScript code directly into machine code for execution rather than interpreting it.

### 13.	Script Tag

A Script Tag is used to define a script, such as JavaScript, to be executed on the client-side. JavaScript code is typically written between  tags at the end of the HTML code.

### 14.	Src Attribute

The “src” attribute specifies the URL of an external script file. We can add an external JavaScript file to our page by using the src attribute in the  tag.

### 15.	Console Log

Console Log is a function found in web browsers’ developer tools, used for finding errors in JavaScript code, tracking the execution of code, and displaying specific messages in the console panel.

### 16.	Dynamically Typed

Dynamically Typed refers to a type system where the data types can change. This means that variables are not required to be declared with a specific data type, and they can hold different types of data at different points.

### 17.	Primitive

Primitive refers to the basic data types in programming languages. These types are the most commonly used data types, and other data types are combinations of these primitives. In programming languages like JavaScript, there are seven primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

### 18.	Mutable

Mutable means that a data type can be changed. This implies that the properties or elements of a data structure, such as an object or array, can be altered at any point in the program.

### 19.	Undefined

Undefined refers to a variable’s value that has not been assigned or does not exist. This value is automatically assigned to a variable when it is declared but not initialized with a value.

### 20.	Null

Null refers to the intentional assignment of “no value” or “nothing.” This value can be assigned when a variable is separated from a data structure, such as an object or array, or when a value is consciously deleted.

### 21. String

A string is a data type in JavaScript that represents text. A string is an array of characters, consisting of one or more characters.

### 22.	Object

An object is a data type in JavaScript that represents a collection of properties and values. It is a structure that stores multiple values.

### 23. Semicolons

In JavaScript, semicolons (;) are used to separate statements. JavaScript is a semicolon-optional language, so it’s not mandatory to use them. However, using semicolons can make the code more readable and error-free.

### 24. Lexical Environment

The term “Lexical Environment” refers to a structure that keeps track of where variables, functions, and other identifiers are declared and what values they have within a code block. This structure is automatically created by the JavaScript engine, and each function has its own Lexical Environment.

### 25.	Global Scope

Global scope is the highest level of scope and is accessible to all functions and code blocks. Variables and functions defined in the global scope are accessible to all blocks and functions in the code.

### 26.	Local Scope

Local scope refers to variables that are defined within a code block or function and can only be accessed within that block or function. These variables are not accessible outside the block or function in which they were defined.

### 27.	Block Scope

Block scope refers to variables that are defined within a code block and can only be accessed within that block. These variables cannot be accessed outside the block or from other functions.

### 28.	Let

In JavaScript, let is used to declare a variable. Variables declared with let are block-scoped, meaning they are only valid within the block where they are defined.

### 29.	Const

In JavaScript, const is used to define a variable that can only be assigned once and its value cannot be changed. Like let, variables declared with const are block-scoped.

### 30.	Var

Var is used to declare a variable in JavaScript. Variables declared with var have function scope, meaning they are only valid within the function where they are defined and are not accessible from other code blocks outside of the function.

### 31.	Hoisting

Hoisting refers to the process in JavaScript where variables and functions are moved to the top of their scope before code execution. This allows a variable to be used before it is declared.

### 32.	Function

A function is a block of code designed to perform a specific task. A function can be executed when called, and it helps increase code reusability, making it easier to write readable and maintainable code.

### 33.	Parameters

Parameters are the variables declared in a function definition that receive values when the function is called.

### 34.	Arguments

Arguments are the actual values or data passed to a function when it is called.

### 35.	Return

The return keyword is used in functions to exit the function and optionally return a value. When a function encounters a return statement, it stops execution and sends a value back to the caller.

### 36.	Function Expressions

Functions can be defined by assigning them to a variable or property, or by passing them as arguments. These are known as function expressions.

### 37.	Higher Order Function

A higher-order function is a function that either takes one or more functions as arguments or returns a function. This means that functions can be used as data, allowing them to be passed around and manipulated like other values.

### 38.	Closures

A closure in JavaScript is a structure formed by nested functions that allows an inner function to retain access to variables and functions in its outer function’s scope, even after the outer function has finished execution.

### 39.	Call Stack

The call stack is a data structure that keeps track of function calls in JavaScript. It helps the engine remember the order in which functions were called and ensures they are executed in the correct order.

### 40.	Heap

The heap is an area of memory used to dynamically allocate memory blocks during the program’s runtime. This memory area typically stores objects and data structures that are needed during execution.

### 41.	This

In JavaScript, this refers to the object that is currently in context. In the global context, this refers to the global object, such as window in the browser or global in Node.js.

### 42.	Window or Global

The window or global object is the highest-level object in JavaScript runtime. In a browser environment, window represents the global object, while in environments like Node.js, global is used.

### 43.	Bind

The bind method is used to create a new function by assigning a specific context (this) and/or arguments to the original function. It allows a function to be called with a particular this value, regardless of how it is called.

### 44.	Arrow Function

Arrow functions, introduced in ES6 (ECMAScript 6), provide a shorter syntax for writing functions. They are written with an arrow (=>) and do not bind their own this, instead inheriting it from the surrounding scope.

### 45.	Anonymous

An anonymous function or object is one without a name. In JavaScript, anonymous functions and objects can be used directly without naming them, often for short-term or local use within code.

### 46.	Passed By Value

In JavaScript, primitive data types like numbers, strings, and booleans are passed by value. When these types are passed to a function, a copy of the value is passed, meaning the original value remains unchanged.

### 47.	Passed By Reference

For objects and arrays, JavaScript uses pass-by-reference. When an object or array is passed to a function, the reference to the original object or array is passed, so any changes made within the function affect the original object or array.

### 48.	Object Literal

An object literal is a syntax used to define an object directly in code. It is a convenient way to create an object with properties and values.

### 49.	Object Constructor

An object constructor is a function template used to create new objects. In JavaScript, we can define an object constructor to create a blueprint for objects and then instantiate new objects from that blueprint.

### 50.	Property

A property refers to the values or functions associated with an object. In JavaScript, objects are used in object-oriented programming, where properties are represented as key-value pairs.

### 51.	Prototype Chain

The prototype chain in object-oriented programming refers to the relationship between objects. JavaScript is a prototype-based object-oriented language, and relationships between objects are established through prototypes and the prototype chain.

### 52.	Inheritance

In object-oriented programming, inheritance refers to the ability of one object to inherit properties and methods from another object. An object can access and use the properties and methods of a previously defined object.

### 53.	OOP (Object-Oriented Programming)

Object-Oriented Programming (OOP) is an approach in software development that uses objects, which are the fundamental building blocks of the software. Each object contains data and methods (functions) that operate on that data.

### 54.	Classes

Since ECMAScript 2015 (ES6), JavaScript supports class-based programming using the class keyword. Classes in JavaScript allow for the creation of blueprints from which objects (instances) can be instantiated.

### 55.	Constructor

In JavaScript, a class has a constructor method that initializes an instance of the class and assigns initial values to the instance’s properties when the object is created.

### 56.	Get/Set

Get and Set are special functions in JavaScript used to control reading (get) or writing (set) properties of classes or objects. These functions allow for applying specific logic or operations when accessing or modifying properties.

### 57.	Instance Method

Instance methods belong to the instances (objects) of a class. They are called on the object level and are used to process data or behaviors that belong to a specific instance. Each instance has its own copy of the method.

### 58.	Static Method

Static methods belong to the class itself, rather than to the instances (objects) of the class. They are called directly on the class itself, without needing to create an instance of the class.

### 59.	Array

An array is a data type used to store multiple values in a single variable. An array holds values in an ordered collection, and you can access these values via indexes. Arrays are commonly used to represent complex data structures, process data sets, and store data in collections.

### 60.	Set

A Set is a collection object that stores unique values. A set does not allow duplicates and is unordered. It can store values of any data type (e.g., numbers, strings, booleans, objects). Unlike arrays, elements in a set are not accessed by index but by their direct value.

### 61.	Map

A Map is a collection object that stores key-value pairs. Unlike JavaScript objects, a Map allows any data type to be used as a key, whereas object keys are limited to strings or symbols. Map objects store values associated with keys, and these keys can be of any type, such as objects or primitive data types.

### 62.	Garbage Collection

Garbage Collection is the automatic process by which unused objects are removed from memory. It helps optimize memory usage by freeing up memory occupied by objects no longer in use and prevents memory leaks.

### 63.	Weakmap & Weakset

Weakmap and Weakset are collections that use weak references. These are special types of collections used for managing memory more effectively, and they interact differently with the garbage collection process compared to other collections.

### 64.	Event Loop

The Event Loop is a mechanism in JavaScript and other programming languages used to manage asynchronous operations and events. It allows non-blocking operations to be executed, enabling other tasks to run while waiting for async operations to complete.

### 65.	Sync

“Sync” is short for “synchronize,” referring to operations that happen at the same time or within the same time frame. In programming, “sync” indicates that operations are executed in sequence, and one operation must finish before the next one starts.

### 66.	Async

“Async” is short for “asynchronous,” referring to operations that do not occur at the same time but are instead triggered to run after some time or when an event is completed. In programming, async is used for non-blocking operations, allowing the program to continue running while waiting for an operation to finish.

### 67.	Single Threaded

A single-threaded program or system can only execute one operation at a time. This means that, in a single-threaded environment, the system processes one task before moving on to the next, without running multiple tasks concurrently.

### 68.	SetTimeout

setTimeout is a JavaScript function that allows you to execute a function after a specified amount of time has passed. It is commonly used to delay the execution of code.

### 69.	Callback

A callback is a function passed as an argument to another function, which is then executed once that function has completed or when a specific event occurs. It is a fundamental concept in asynchronous programming.

### 70.	Callback Hell

Callback Hell refers to the situation in JavaScript where multiple nested callback functions are used, making the code complex and difficult to read, maintain, and debug. This can lead to challenges in understanding the flow of execution and managing errors.

### 71.	Promise

A Promise is an object in JavaScript used to manage asynchronous operations. It represents the eventual completion (or failure) of an asynchronous operation. When the operation succeeds, the promise is resolved and returns a value. If the operation fails, the promise is rejected and returns an error.

### 72.	Then/Catch

Then and Catch are methods associated with Promise objects and are used to handle the results of asynchronous operations. Then is used to handle successful completion of the promise, while Catch handles errors or rejections from the promise.

### 73.	Await

Await is a keyword used in asynchronous functions to wait for the completion of an asynchronous operation. It can only be used inside functions marked with the async keyword. It allows you to wait for a promise to resolve without blocking the rest of the code execution.

### 74.	Try/Catch

Try and Catch are structures used for error handling. The try block contains code that might throw an error. If an error occurs, control is passed to the catch block, which handles the error, allowing the program to continue running.

### 75.	ES Modules

ES Modules (ECMAScript Modules) is a feature of JavaScript that allows for a modular approach to organizing code. It enables you to split your JavaScript code into independent modules, making it easier to share, reuse, and update code across different parts of your application.

### 76.	Default Import/Export

In JavaScript ES Modules, default import and default export refer to how a module’s primary object or function is exported and imported. A module can have one default export, which is imported without using curly braces. This simplifies the process of importing and exporting key components.

```
moduleFirst.js

export default function sayHello() {
  console.log("Hello!");
}

moduleSecond.js

import sayHello from './moduleFirst.js';

sayHello(); // Hello!
```

### 77.	Named Import/Export

In JavaScript ES Modules, the terms “named import” and “named export” refer to how specific objects or values are exported and imported within a module.

```
moduleFirst.js

export function sayHello() {
  console.log("Hello!");
}

export function sayGoodbye() {
  console.log("Good bye!");
}

moduleSecond.js

import { sayHello } from './moduleFirst.js';

sayHello(); // Hello!
sayGoodbye(); // Good bye!
```

### 78.	NPM

NPM (Node Package Manager) is a package manager used in JavaScript programming language. Node.js is a platform that allows JavaScript code to run on the server-side, and NPM simplifies the management of external packages used in Node.js projects.

### 79.	Yarn
Yarn is a package manager and dependency management tool for JavaScript code. While Yarn serves similar functions to npm (Node Package Manager), it offers some additional features and aims to provide a faster and more reliable package management experience.

### 80.	Pnpm

pnpm is a package manager and dependency management tool used for managing JavaScript code packages. Pnpm installs packages in individual folders for each package instead of a single “node_modules” folder at the project root. It can be used as an alternative to Yarn and npm.

### 81.	Node Modules

“node_modules” is a folder where the dependencies and packages used in Node.js projects are stored. Node.js is a platform used to run JavaScript code, and external libraries or modules are often used in projects. These libraries or modules provide additional functionality and are placed in the “node_modules” folder.

### 82.	Package.JSON

package.json is a file located in the root directory of a JavaScript project and contains meta-information about the project. It includes the project’s package dependencies, version numbers, project name, description, main developers, license, and other related project information. package.json simplifies the configuration and management of a JavaScript project and is often the starting point for a project.

### 83.	DOM

DOM stands for Document Object Model and is a programming interface used in web browsers. The DOM is an object-based model representing HTML or XML documents and is used to dynamically change or manipulate web pages.

### 84.	Document

The Document is an object that represents a web page. JavaScript, a programming language for interacting with HTML content on web pages, uses the Document object to represent the structure and content of the web page. It can be used by JavaScript code to make changes to the web page.

### 85.	QuerySelector

querySelector is a method used in JavaScript, working with the Document object. This method uses a specified CSS selector to return the first matching element on a web page.

### 86.	Selector

A “Selector” is an expression used in web technologies like CSS and JavaScript to target specific HTML elements or groups of elements. A selector is a pattern used to define one or more HTML elements.

### 87.	QuerySelectorAll

querySelectorAll is a method used in JavaScript, working with the Document object. This method uses a specified CSS selector to return all matching elements on a web page as a NodeList (a list of nodes).

### 88.	Element

An Element in JavaScript is an object that represents an HTML or XML tag in a document. An Element is a subclass of the Node class and represents nodes that are HTML or XML elements, providing a DOM interface.

### 89.	Event

An “Event” is an object that represents a specific occurrence, such as user interactions with a web page or changes in the state of an element. Events are used to detect user interactions (e.g., clicking, mouse movement, pressing keyboard keys) and other occurrences (e.g., when an element finishes loading).

### 90.	Imperative

“Imperative” refers to a programming approach where commands are given to indicate how something is done. This approach specifies the steps of a program in order and clearly defines the actions needed to achieve a particular result.

### 91.	Declarative

“Declarative” refers to a programming approach that defines what a program should do, without giving detailed instructions on how it should be done. In this approach, the desired outcome is declared, and the program automatically determines the necessary steps to achieve that result.

### 92.	Components

Components are independent and reusable blocks of code that are part of a software system or application and perform specific functions or tasks. Components are usually designed in a modular way and can interact with each other.

### 93.	Data Binding
Data binding is the mechanism by which data used in the user interface or application logic is automatically updated across user interface components or components in the application logic. It ensures that changes made in one component are automatically reflected in others.

### 94.	Module Bundling

Module bundling is the process of combining one or more modules, typically code chunks stored in separate files, into a single file. This approach is used in web applications or JavaScript-based projects and helps in the effective distribution, loading, and execution of code.

### 95.	Network Waterfall

“Network waterfall” is a term used in web performance analysis, referring to a graphic or report that visualizes the loading processes of a web page over a network in a timeline format. It shows network requests and responses, their sequence, timing variations, and delays during the page load process.

### 96.	Dynamic Imports

Dynamic imports refer to a mechanism that allows modules or pieces of code to be loaded and used dynamically at runtime, during the execution of the program. This enables the program to load and use the necessary modules or code chunks when required during runtime.

### 97.	Node.js

Node.js is a JavaScript-based platform and runtime environment that allows JavaScript code to run on the server side. It is based on the V8 JavaScript engine and is an open-source project developed by Google.

### 98.	Express

Express is a minimal and flexible web application framework used to develop web applications in a Node.js environment. Express provides a set of HTTP management functions and basic web application structures to speed up and simplify web application development.

### 99.	Metaframework

A “Metaframework” is a framework built on top of another framework. In other words, a metaframework takes another framework as its foundation and adds additional functionality to it.

### 100.	TypeScript

TypeScript is a JavaScript-based language developed by Microsoft. It is a superset of JavaScript that extends and enhances JavaScript. TypeScript offers static type checking and open-source features, providing developers with a more robust and type-safe development experience.

### 101.	ESLint

ESLint is an open-source JavaScript linter tool that analyzes JavaScript code for errors, style issues, and code quality problems. Linting is the process of checking if the code adheres to specific style guides, best practices, and code quality standards.

<img src="/assets/sign-light.svg" alt="preview" width="148" style="margin-left: auto; margin-top: 32px; margin-right: 64px;"/>
