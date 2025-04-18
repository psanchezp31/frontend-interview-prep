import { Book } from "@/types/interview";

export const interviewData: Book = {
  chapters: [
    {
      id: "javascript",
      title: "JavaScript",
      questions: [
        {
          id: "js-1",
          title: "1. What is object reference in JavaScript?",
          answer: {
            text: `Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object's location in memory. The variables don't actually contain the value.

When we use an object to do something, such as pushing a value to an array, the JavaScript engine goes to the location of the object in memory and works with the information stored there.

Assigning by Reference:
When you assign an object to a variable, you're actually copying the reference to the object, not the object itself.

Reassigning a Reference:
When you reassign a reference, you're changing what the variable points to, not modifying the original object.`,
            example: `const reference = [1];
const refCopy = reference; // We are copying the reference, the address of the original object

// If we alter the original reference, refCopy will see those changes
reference.push(2);
console.log(reference, refCopy); // [1, 2], [1, 2]

let obj = { first: 'reference' };
obj = { second: 'ref2' }; // The address stored in obj changes`,
          },
        },
        {
          id: "js-2",
          title: "2. What is hoisting in JavaScript?",
          answer: {
            text: `The interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. This happens in the creation phase of the Execution Context.

Function Hoisting:
With function declaration, the function is hoisted and can be called before its declaration.

With function expression, the function is not hoisted and cannot be called before its declaration.

Var Hoisting:
Variables declared with var are hoisted and initialized with undefined.

Let Hoisting:
Variables declared with let are hoisted but not initialized, resulting in a ReferenceError if accessed before initialization.`,
            example: `// Function declaration - works
catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}

// Function expression - error
sayHello(); // Error: sayHello is not defined

const sayHello = function() {
  console.log("Hello");
};

// Var hoisting
console.log(greeter); // undefined
var greeter = "say hello";

// Let hoisting
console.log(greeting); // ReferenceError: Cannot access 'greeting' before initialization
let greeting = "say Hello instead";`,
          },
        },
        {
          id: "js-3",
          title: "3. What are the differences between var, let, and const?",
          answer: {
            text: `Var:
- Function-scoped or globally scoped
- Can be redeclared and updated
- Hoisted and initialized with undefined
- Problems with var include scope issues and unexpected behavior in loops

Let:
- Block-scoped (only available within {})
- Can be updated but not redeclared
- Hoisted but not initialized
- Cannot be accessed before declaration

Const:
- Block-scoped
- Cannot be updated or redeclared
- Must be initialized at declaration
- Hoisted but not initialized

Similarities between let and const:
- Both are block-scoped
- Both cannot be accessed before declaration
- Both result in ReferenceError if accessed before initialization`,
            example: `// Var problems
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead";
}

console.log(greeter); // "say Hello instead" - The variable was redefined

// Let example
let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead"; // Different scope
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"

// Const example
const greeting = "say Hi";
// greeting = "say Hello instead"; // Error: Assignment to constant variable
// const greeting = "say Hello instead"; // Error: Identifier 'greeting' has already been declared`,
          },
        },
        {
          id: "js-4",
          title: "4. What are JavaScript types?",
          answer: {
            text: `The set of types in JavaScript consists of primitive values and objects.

Primitive Values (immutable):
- Boolean type
- Null type
- Undefined type
- Number type
- BigInt type
- String type
- Symbol type

Objects (collections of properties):
- Arrays
- Functions
- Objects
- Other built-in objects

Primitives are immutable and copied by value, while objects are copied by reference.`,
            example: `// Primitive immutability
var bar = "baz";
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase(); // BAZ

// Object mutability
const obj = { name: 'John' };
obj.name = 'Jane'; // Object can be mutated
console.log(obj); // { name: 'Jane' }`,
          },
        },
        {
          id: "js-5",
          title: "5. What is context in JavaScript?",
          answer: {
            text: `In JavaScript, "context" refers to an object. Within an object, the keyword "this" refers to that object (i.e. "self"), and provides an interface to the properties and methods that are members of that object.

Global Context:
In the GEC (outside of any function and object), this refers to the global object.

Function Context:
When a function is called, this refers to the global object (window in browsers, global in Node.js).

Object Context:
When a method is called on an object, this refers to that object.

Scope vs Context:
- Scope pertains to the visibility of variables
- Context refers to the object to which a function belongs
- Scope is function-based while context is object-based`,
            example: `// Global context
console.log(this === window); // true in browsers
console.log(this === global); // true in Node.js

var occupation = "Frontend Developer";
function addOne(x) {
    console.log(x + 1);
}

// Function context
var msg = "I will rule the world!";

function printMsg() {
    console.log(this); // Window object
    console.log(this.msg);
}

printMsg(); // "I will rule the world!"

// Object context
const Victor = {
    msg: "Victor will rule the world!",
    printMsg() {
        console.log(this); // Victor object
        console.log(this.msg);
    }
};

Victor.printMsg(); // "Victor will rule the world!"`,
          },
        },
        {
          id: "js-6",
          title: "6. What are closures in JavaScript?",
          answer: {
            text: `A closure is a function that has access to its outer function's variables, even after the outer function has returned. This is possible because the inner function maintains a reference to its outer scope.`,
            example: `function outerFunction() {
    const outer = 'I see the outer variable!';
    
    return function innerFunction() {
        console.log(outer);
    };
}

const inner = outerFunction();
inner(); // "I see the outer variable!"`,
          },
        },
        {
          id: "js-7",
          title: "7. What is type coercion in JavaScript?",
          answer: {
            text: `Type coercion is the automatic conversion of values from one type to another. It can be implicit (automatic) or explicit (manual).

Implicit Coercion:
- String concatenation
- Numeric operations
- Comparison operations

Explicit Coercion:
- Using Number(), String(), Boolean()
- Using parseInt(), parseFloat()
- Using toString()

Falsy Values:
- false
- 0
- "" (empty string)
- null
- undefined
- NaN

Truthy Values:
- true
- 1
- "hello"
- {}
- []

Key points:
- Implicit coercion happens automatically
- Explicit coercion is done manually
- Some operations trigger type coercion
- Falsy values are coerced to false
- Truthy values are coerced to true`,
            example: `// Implicit Coercion
// String concatenation
console.log(25 + '1'); // '251'

// Numeric operations
console.log(25 + true); // 26 (true is coerced to 1)
console.log(25 + false); // 25 (false is coerced to 0)
console.log(25 + null); // 25 (null is coerced to 0)
console.log(25 + undefined); // NaN

// Comparison
console.log('5' == 5); // true
console.log('5' === 5); // false

// Explicit Coercion
// String to Number
console.log(Number('123')); // 123
console.log(parseInt('123')); // 123
console.log(+'123'); // 123

// Number to String
console.log(String(123)); // '123'
console.log(123.toString()); // '123'
console.log(123 + ''); // '123'

// Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean('hello')); // true

// Falsy Values
if (false) console.log('false');
if (0) console.log('0');
if ('') console.log('empty string');
if (null) console.log('null');
if (undefined) console.log('undefined');
if (NaN) console.log('NaN');
// None of these will log

// Truthy Values
if (true) console.log('true');
if (1) console.log('1');
if ('hello') console.log('string');
if ({}) console.log('object');
if ([]) console.log('array');
// All of these will log`,
          },
        },
        {
          id: "js-8",
          title: "8. What are functions in JavaScript?",
          answer: {
            text: `In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are Function objects.

Key characteristics:
- Can be assigned to variables
- Can be passed as arguments to other functions
- Can be returned from other functions
- Can have properties and methods
- Can be stored in data structures

Function Types:
1. Function Declaration
2. Function Expression
3. Arrow Functions
4. Immediately Invoked Function Expressions (IIFE)
5. Generator Functions
6. Async Functions`,
            example: `// Function Declaration
function greet(name) {
    return 'Hello, ' + name;
}

// Function Expression
const greet = function(name) {
    return 'Hello, ' + name;
};

// Arrow Function
const greet = (name) => 'Hello, ' + name;

// IIFE
(function() {
    console.log('Immediately invoked!');
})();

// Generator Function
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

// Async Function
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

// Functions as first-class objects
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

// Function with properties
function counter() {
    counter.count = (counter.count || 0) + 1;
    return counter.count;
}`,
          },
        },
        {
          id: "js-9",
          title: "9. What are classes in JavaScript?",
          answer: {
            text: `Classes in JavaScript are "special functions". You can define them using either function expressions or function declarations.

Class Features:
- Constructor method
- Instance methods
- Static methods
- Getters and setters
- Inheritance
- Private fields
- Static initialization blocks

Key Points:
- Classes are syntactic sugar over constructor functions
- They provide a cleaner syntax for object-oriented programming
- They support inheritance through the extends keyword
- They can have static methods and properties
- They support private fields and methods
- They can have getters and setters`,
            example: `// Class Declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Instance method
    getArea() {
        return this.height * this.width;
    }

    // Static method
    static createSquare(side) {
        return new Rectangle(side, side);
    }

    // Getter
    get area() {
        return this.height * this.width;
    }

    // Setter
    set area(value) {
        this.height = Math.sqrt(value);
        this.width = Math.sqrt(value);
    }
}

// Class Expression
const Circle = class {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
};

// Inheritance
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

// Private fields
class Person {
    #name;
    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

// Static initialization blocks
class MyClass {
    static {
        console.log('Class initialized');
    }
}`,
          },
        },
        {
          id: "js-10",
          title: "10. What is scope in JavaScript?",
          answer: {
            text: `A scope in JavaScript defines what variables you have access to. There are two kinds of scope:

Global Scope:
- Variables declared outside all functions or curly braces ({})
- Accessible from anywhere in the code

Local Scope:
- Variables usable only in a specific part of your code
- Two kinds of local scope:
  1. Function scope: Variables declared in a function
  2. Block scope: Variables declared with const or let within curly braces

Key Points:
- var is function-scoped
- let and const are block-scoped
- Variables in outer scopes are accessible in inner scopes
- Inner scope variables shadow outer scope variables
- Global variables are properties of the global object`,
            example: `// Global scope
const globalVar = 'I am global';

function outerFunction() {
    // Function scope
    const outerVar = 'I am in outer function';
    
    function innerFunction() {
        // Inner function scope
        const innerVar = 'I am in inner function';
        console.log(globalVar); // Accessible
        console.log(outerVar); // Accessible
        console.log(innerVar); // Accessible
    }
    
    innerFunction();
    console.log(globalVar); // Accessible
    console.log(outerVar); // Accessible
    // console.log(innerVar); // Error: innerVar is not defined
}

// Block scope
{
    const blockVar = 'I am in a block';
    console.log(blockVar); // Accessible
}
// console.log(blockVar); // Error: blockVar is not defined

// Variable shadowing
const x = 1;
{
    const x = 2;
    console.log(x); // 2 (inner x shadows outer x)
}
console.log(x); // 1 (outer x is unchanged)

// var vs let/const
function varExample() {
    if (true) {
        var x = 1;
        let y = 2;
    }
    console.log(x); // 1 (var is function-scoped)
    // console.log(y); // Error: y is not defined (let is block-scoped)
}`,
          },
        },
        {
          id: "js-11",
          title: "11. What is the difference between memory heap and stack?",
          answer: {
            text: `Memory Heap:
- Used for dynamic memory allocation
- Stores objects and functions
- Memory is allocated randomly
- Slower access
- No size limit
- Manual memory management

Stack:
- Used for static memory allocation
- Stores primitive values and references
- Memory is allocated in a LIFO order
- Faster access
- Has size limits
- Automatic memory management

Key differences:
- Stack is used for static memory allocation
- Heap is used for dynamic memory allocation
- Stack is faster but has size limits
- Heap is slower but has no size limits
- Stack memory is automatically managed
- Heap memory requires garbage collection`,
            example: `// Stack memory
let number = 10; // Primitive value stored in stack
let string = 'Hello'; // Primitive value stored in stack
let reference = { name: 'John' }; // Reference stored in stack, object in heap

// Heap memory
function createObject() {
    return { 
        data: new Array(1000000).fill('x') // Large object stored in heap
    };
}

const largeObject = createObject(); // Reference in stack, object in heap

// Memory management
function memoryExample() {
    let localVar = 'I am in stack'; // Stack memory
    let obj = { data: 'I am in heap' }; // Heap memory
    
    // When function ends:
    // localVar is automatically removed from stack
    // obj reference is removed from stack
    // obj in heap is garbage collected if no other references exist
}`,
          },
        },
        {
          id: "js-12",
          title:
            "12. What are Web APIs in JavaScript and how can they be used?",
          answer: {
            text: `Web APIs are built-in interfaces that allow JavaScript to interact with the browser and the web. They are not part of the JavaScript language itself but are provided by the browser environment.

Common Web APIs:
- DOM API
- Fetch API
- Web Storage API
- Geolocation API
- Canvas API
- Web Audio API
- Web Workers API
- Service Workers API

Key points:
- Web APIs are provided by the browser
- They allow interaction with the browser and web
- They are asynchronous by nature
- They follow the same security model as JavaScript
- They are standardized by the W3C`,
            example: `// DOM API
document.getElementById('myElement');
document.querySelector('.myClass');
element.addEventListener('click', handler);

// Fetch API
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));

// Web Storage API
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');

// Geolocation API
navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude);
});

// Canvas API
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(10, 10, 100, 100);

// Web Audio API
const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.start();

// Web Workers API
const worker = new Worker('worker.js');
worker.postMessage('Hello');
worker.onmessage = event => console.log(event.data);

// Service Workers API
navigator.serviceWorker.register('sw.js')
    .then(registration => console.log('Service Worker registered'))
    .catch(error => console.log('Registration failed'));`,
          },
        },
        {
          id: "js-13",
          title: "13. What is the difference between Array and Set?",
          answer: {
            text: `Arrays and Sets are both used to store collections of values, but they have important differences:

Arrays:
- Can contain duplicate values
- Elements are ordered by index
- Can be modified using various methods
- Can contain any type of value
- Have a length property

Sets:
- Cannot contain duplicate values
- Elements are ordered by insertion
- Have specific methods for manipulation
- Can contain any type of value
- Have a size property

Key differences:
- Arrays allow duplicates, Sets don't
- Arrays are indexed, Sets are not
- Arrays have more built-in methods
- Sets are better for unique values
- Sets have better performance for certain operations`,
            example: `// Array
const arr = [1, 2, 3, 3, 4];
console.log(arr); // [1, 2, 3, 3, 4]
arr.push(5); // Add element
console.log(arr.length); // 5

// Set
const set = new Set([1, 2, 3, 3, 4]);
console.log(set); // Set {1, 2, 3, 4}
set.add(5); // Add element
console.log(set.size); // 5

// Set operations
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

// Union
const union = new Set([...set1, ...set2]);
console.log(union); // Set {1, 2, 3, 4}

// Intersection
const intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection); // Set {2, 3}

// Difference
const difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(difference); // Set {1}`,
          },
        },
        {
          id: "js-14",
          title: "14. What is the difference between Map and Object?",
          answer: {
            text: `Maps and Objects are both used to store key-value pairs, but they have important differences:

Objects:
- Keys must be strings or symbols
- Have prototype and default keys
- Size must be calculated
- Not directly iterable
- Better performance for small datasets

Maps:
- Keys can be any type
- No default keys
- Have size property
- Directly iterable
- Better performance for large datasets

Key differences:
- Map keys can be any type, Object keys must be strings/symbols
- Maps have size property, Objects don't
- Maps are directly iterable, Objects aren't
- Maps perform better with frequent additions/removals
- Objects have better performance for small datasets`,
            example: `// Object
const obj = {
    name: 'John',
    age: 30
};
console.log(obj.name); // 'John'
console.log(Object.keys(obj).length); // 2

// Map
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set(1, 'one'); // Number as key
map.set({}, 'object'); // Object as key

console.log(map.get('name')); // 'John'
console.log(map.size); // 4

// Map operations
const map1 = new Map([
    ['a', 1],
    ['b', 2]
]);

const map2 = new Map([
    ['b', 3],
    ['c', 4]
]);

// Iteration
for (const [key, value] of map1) {
    console.log(key, value);
}

// Converting to array
const arr = Array.from(map1);
console.log(arr); // [['a', 1], ['b', 2]]`,
          },
        },
        {
          id: "js-15",
          title:
            "15. What is the Intl API in JavaScript and how can it be used?",
          answer: {
            text: `The Intl API is a built-in JavaScript API that provides internationalization features for formatting numbers, dates, and strings according to different locales and languages.

Key features of the Intl API:
- Number formatting
- Date formatting
- String comparison
- Relative time formatting
- List formatting
- Plural rules
- Display names

Benefits:
- Built-in support for multiple locales
- Consistent formatting across browsers
- No need for external libraries
- Automatic handling of locale-specific rules
- Support for right-to-left languages
- Proper handling of different calendar systems`,
            example: `// Number formatting
const number = 1234567.89;
const germanNumber = new Intl.NumberFormat('de-DE').format(number);
console.log(germanNumber); // "1.234.567,89"

const indianNumber = new Intl.NumberFormat('en-IN').format(number);
console.log(indianNumber); // "12,34,567.89"

// Currency formatting
const usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(number);
console.log(usd); // "$1,234,567.89"

// Date formatting
const date = new Date();
const japaneseDate = new Intl.DateTimeFormat('ja-JP').format(date);
console.log(japaneseDate); // "2024/3/14"

// String comparison
const words = ['ä', 'a', 'z', 'å'];
const swedishSort = words.sort(new Intl.Collator('sv').compare);
console.log(swedishSort); // ["a", "å", "ä", "z"]

// Relative time formatting
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
console.log(rtf.format(-1, 'day')); // "yesterday"
console.log(rtf.format(2, 'week')); // "in 2 weeks"`,
          },
        },
        {
          id: "js-16",
          title: "16. What is the DOM in JavaScript?",
          answer: {
            text: `The DOM (Document Object Model) is an API that represents and interacts with HTML documents. It's a tree-like structure where each node represents part of the document.

DOM Manipulation:
- Selecting elements
- Creating elements
- Modifying elements
- Event handling
- Traversing the DOM

Key points:
- DOM represents HTML as a tree structure
- Nodes can be elements, text, comments, etc.
- DOM methods allow manipulation of the document
- Events allow interaction with the document
- DOM operations can be expensive, so optimize when possible`,
            example: `// Selecting elements
const element = document.getElementById('myId');
const elements = document.querySelectorAll('.myClass');

// Creating elements
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';

// Modifying elements
element.style.color = 'red';
element.classList.add('active');
element.setAttribute('data-id', '123');

// Event handling
element.addEventListener('click', (event) => {
    console.log('Clicked!', event.target);
});

// Traversing the DOM
const parent = element.parentNode;
const children = element.childNodes;
const nextSibling = element.nextSibling;
const previousSibling = element.previousSibling;

// DOM Events
function handler(event) {
    console.log(event.type); // Event type
    console.log(event.target); // Element that triggered the event
    console.log(event.currentTarget); // Element that the handler is attached to
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop event bubbling
}`,
          },
        },
        {
          id: "js-17",
          title: "17. What are Promises in JavaScript?",
          answer: {
            text: `Promises are objects that represent the eventual completion or failure of an asynchronous operation. They provide a cleaner way to handle asynchronous code.

Creating Promises:
- Using the Promise constructor
- Using Promise.resolve() and Promise.reject()
- Using async/await syntax

Promise Methods:
- then() - handles successful completion
- catch() - handles errors
- finally() - runs regardless of outcome
- Promise.all() - waits for all promises
- Promise.race() - waits for first promise
- Promise.any() - waits for first successful promise

Key points:
- Promises represent future values
- They can be in three states: pending, fulfilled, rejected
- They provide better error handling
- They avoid callback hell
- Async/await makes them easier to use`,
            example: `// Basic promise
const promise = new Promise((resolve, reject) => {
    // Async operation
    setTimeout(() => {
        resolve('Success!');
        // or
        // reject(new Error('Failure!'));
    }, 1000);
});

// Using promises
promise
    .then(result => {
        console.log(result); // 'Success!'
    })
    .catch(error => {
        console.error(error); // Error: Failure!
    })
    .finally(() => {
        console.log('Always executed');
    });

// Promise.all
const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
];

Promise.all(promises)
    .then(results => {
        console.log(results); // [1, 2, 3]
    })
    .catch(error => {
        console.error(error);
    });

// Promise.race
Promise.race(promises)
    .then(result => {
        console.log(result); // First resolved promise
    });

// Async/await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}`,
          },
        },
        {
          id: "js-18",
          title: "18. What is object copying in JavaScript?",
          answer: {
            text: `Object copying can be done in different ways, each with its own characteristics:

Shallow Copy:
- Copies only top-level properties
- Nested objects are still referenced
- Methods: Object.assign(), spread operator

Deep Copy:
- Copies all nested properties
- Creates completely new objects
- Methods: JSON.parse(JSON.stringify()), custom functions

Key points:
- Shallow copy only copies top-level properties
- Deep copy copies all nested properties
- JSON methods have limitations (no functions, dates, etc.)
- Custom deep copy functions can handle more cases
- Consider using libraries like lodash for complex cases`,
            example: `// Shallow copy
const original = { a: 1, b: { c: 2 } };

// Using spread operator
const shallowCopy = { ...original };

// Using Object.assign
const shallowCopy2 = Object.assign({}, original);

// Modifying shallow copy
shallowCopy.a = 3;
console.log(original.a); // 1 (unchanged)
shallowCopy.b.c = 4;
console.log(original.b.c); // 4 (changed!)

// Deep copy
// Using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying deep copy
deepCopy.a = 3;
deepCopy.b.c = 4;
console.log(original.a); // 1 (unchanged)
console.log(original.b.c); // 2 (unchanged)

// Custom deep copy function
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    
    const copy = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    
    return copy;
}`,
          },
        },
        {
          id: "js-19",
          title: "19. What is prototype in JavaScript?",
          answer: {
            text: `Prototypes are the mechanism by which JavaScript objects inherit features from one another. Every object has a private property that holds a link to another object called its prototype.

Prototype Chain:
- Objects inherit from other objects
- Properties are looked up through the chain
- The chain ends at Object.prototype
- null is the final link in the chain

Key points:
- Every object has a prototype
- Prototypes form a chain
- Properties are looked up through the chain
- Classes are syntactic sugar for prototypes
- Inheritance is achieved through the prototype chain`,
            example: `// Creating objects with prototypes
const personPrototype = {
    greet() {
        console.log(\`Hello, my name is \${this.name}!\`);
    }
};

function Person(name) {
    this.name = name;
}

Person.prototype = personPrototype;
Person.prototype.constructor = Person;

const person = new Person('John');
person.greet(); // 'Hello, my name is John!'

// Prototype chain
console.log(person.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true

// Class syntax (syntactic sugar for prototypes)
class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        console.log(\`Hello, my name is \${this.name}!\`);
    }
}

// Inheritance
class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
    
    study() {
        console.log(\`\${this.name} is studying.\`);
    }
}`,
          },
        },
        {
          id: "js-20",
          title: "20. What is inheritance in JavaScript?",
          answer: {
            text: `Inheritance in JavaScript is achieved through the prototype chain. Objects can inherit properties and methods from other objects.

Prototypal Inheritance:
- Objects inherit from other objects
- Properties are looked up through the chain
- The prototype chain is used for property lookup
- super() is used to call parent class constructor

Key points:
- JavaScript uses prototypal inheritance
- Objects inherit from other objects
- The prototype chain is used for property lookup
- Classes provide syntactic sugar for inheritance
- super() is used to call parent class constructor`,
            example: `// Prototypal Inheritance
// Parent object
const animal = {
    eat() {
        console.log('Eating...');
    },
    sleep() {
        console.log('Sleeping...');
    }
};

// Child object
const dog = Object.create(animal);
dog.bark = function() {
    console.log('Woof!');
};

// Using inherited methods
dog.eat(); // 'Eating...'
dog.sleep(); // 'Sleeping...'
dog.bark(); // 'Woof!'

// Checking inheritance
console.log(dog.__proto__ === animal); // true

// Class Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        console.log(\`\${this.name} is eating...\`);
    }
    
    sleep() {
        console.log(\`\${this.name} is sleeping...\`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    bark() {
        console.log('Woof!');
    }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.eat(); // 'Rex is eating...'
dog.sleep(); // 'Rex is sleeping...'
dog.bark(); // 'Woof!'`,
          },
        },
      ],
    },
    {
      id: "react",
      title: "React",
      questions: [
        {
          id: "react-1",
          title: "1. What is React?",
          answer: {
            text: `React is a JavaScript library for building user interfaces. It's component-based and uses a declarative paradigm, making it easier to reason about your application and aim for efficiency and flexibility.

Key features:
- Component-based architecture
- Virtual DOM for efficient updates
- Unidirectional data flow
- JSX syntax for templating
- Rich ecosystem and community`,
            example: `// Simple React component
import React from 'react';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="World" />`,
          },
        },
        {
          id: "react-2",
          title: "2. What is JSX?",
          answer: {
            text: `JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It's not required to use React, but it makes the code more readable and easier to write.

Key points:
- JSX is syntactic sugar for React.createElement()
- It allows mixing HTML and JavaScript
- It must have a single root element
- It uses className instead of class
- It uses htmlFor instead of for
- It uses camelCase for attributes`,
            example: `// Without JSX
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

// With JSX
const element = <h1 className="greeting">Hello, world!</h1>;

// After compilation
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);`,
          },
        },
        {
          id: "react-3",
          title: "3. What are React components?",
          answer: {
            text: `Components are the building blocks of React applications. They are reusable pieces of code that return React elements to be rendered to the page.

There are two types of components:
1. Function Components
2. Class Components

Key points:
- Components can be nested
- Components can be reused
- Components can accept props
- Components can have state
- Components can have lifecycle methods`,
            example: `// Function Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Usage
<Welcome name="Sara" />`,
          },
        },
        {
          id: "react-4",
          title: "4. What are props in React?",
          answer: {
            text: `Props (short for properties) are a way of passing data from parent to child components. They are read-only and help make components reusable.

Key points:
- Props are passed down from parent to child
- Props are immutable
- Props can be any JavaScript value
- Props can be destructured
- Props can have default values`,
            example: `// Parent component
function App() {
  return (
    <div>
      <User name="John" age={25} />
      <User name="Jane" age={30} />
    </div>
  );
}

// Child component
function User(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

// With destructuring
function User({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}`,
          },
        },
        {
          id: "react-5",
          title: "5. What is state in React?",
          answer: {
            text: `State is a built-in object in React that allows components to create and manage their own data. Unlike props, state is mutable and can be changed using setState().

Key points:
- State is mutable
- State changes trigger re-renders
- State is local to the component
- State can be passed as props
- State should be minimal`,
            example: `// Class Component with state
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Function Component with state (using Hooks)
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
          },
        },
        {
          id: "react-6",
          title: "6. What are React Hooks?",
          answer: {
            text: `Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8.

Common Hooks:
- useState: For managing state
- useEffect: For side effects
- useContext: For accessing context
- useReducer: For complex state logic
- useCallback: For memoizing functions
- useMemo: For memoizing values

Key points:
- Hooks can only be used in function components
- Hooks must be called at the top level
- Hooks can't be called conditionally
- Hooks can be custom`,
            example: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`,
          },
        },
        {
          id: "react-7",
          title: "7. What is the Virtual DOM?",
          answer: {
            text: `The Virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM.

How it works:
1. When state changes, React creates a new Virtual DOM tree
2. React compares this new tree with the previous one
3. React updates only the changed parts in the real DOM

Key points:
- Virtual DOM is faster than direct DOM manipulation
- Virtual DOM minimizes DOM updates
- Virtual DOM enables server-side rendering
- Virtual DOM makes React declarative`,
            example: `// Initial render
const element = <h1>Hello, world!</h1>;
ReactDOM.render(element, document.getElementById('root'));

// Update
const newElement = <h1>Hello, React!</h1>;
ReactDOM.render(newElement, document.getElementById('root'));

// React will only update the text content of the h1 element,
// not the entire DOM node`,
          },
        },
        {
          id: "react-8",
          title: "8. What is React Context?",
          answer: {
            text: `Context provides a way to pass data through the component tree without having to pass props manually at every level.

Key points:
- Context is designed to share data globally
- Context can be used to avoid prop drilling
- Context can be nested
- Context can be updated
- Context can be consumed using useContext hook`,
            example: `// Create a context
const ThemeContext = React.createContext('light');

// Provider component
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// Consumer component
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// Component using context
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button className={theme}>
      I am styled by theme context!
    </button>
  );
}`,
          },
        },
      ],
    },
    {
      id: "html",
      title: "HTML",
      questions: [
        {
          id: "html-1",
          title: "1. What is DOCTYPE in HTML?",
          answer: {
            text: `The DOCTYPE declaration is the first line of code required in every HTML or XHTML document. It tells the web browser what version of HTML the page is written in.

Key points:
- Must be the first line in HTML documents
- Not case sensitive
- Tells browser how to render the page
- Different DOCTYPEs for different HTML versions
- HTML5 uses the simplest DOCTYPE`,
            example: `<!DOCTYPE html>
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>`,
          },
        },
        {
          id: "html-2",
          title: "2. What are semantic elements in HTML5?",
          answer: {
            text: `Semantic elements clearly describe their meaning to both the browser and the developer. They make the code more readable and improve accessibility.

Common semantic elements:
- <header>: Introductory content
- <nav>: Navigation links
- <main>: Main content
- <article>: Self-contained content
- <section>: Thematic grouping
- <aside>: Side content
- <footer>: Footer content
- <figure>: Self-contained content with caption
- <figcaption>: Caption for figure
- <time>: Date/time
- <mark>: Highlighted text`,
            example: `<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h1>Article Title</h1>
        <section>
            <h2>Section Title</h2>
            <p>Content goes here...</p>
        </section>
    </article>

    <aside>
        <h3>Related Content</h3>
        <p>Sidebar content...</p>
    </aside>
</main>

<footer>
    <p>Copyright © 2023</p>
</footer>`,
          },
        },
        {
          id: "html-3",
          title: "3. What is accessibility in HTML?",
          answer: {
            text: `Accessibility (a11y) is the practice of making websites usable by as many people as possible. HTML provides several features to improve accessibility.

Key accessibility features:
- Semantic HTML elements
- ARIA attributes
- Proper heading structure
- Alt text for images
- Form labels and descriptions
- Keyboard navigation
- Color contrast
- Screen reader compatibility`,
            example: `<!-- Semantic structure -->
<nav aria-label="Main navigation">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
    </ul>
</nav>

<!-- Form accessibility -->
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required
           aria-describedby="name-help">
    <span id="name-help">Enter your full name</span>

    <button type="submit">Submit</button>
</form>

<!-- Image accessibility -->
<img src="logo.png" alt="Company Logo"
     width="200" height="100">

<!-- ARIA roles -->
<div role="alert" aria-live="assertive">
    Important message!
</div>`,
          },
        },
        {
          id: "html-4",
          title: "4. What are meta tags in HTML?",
          answer: {
            text: `Meta tags provide metadata about the HTML document. They are placed in the head section and are not displayed on the page.

Common meta tags:
- charset: Character encoding
- viewport: Mobile device settings
- description: Page description
- keywords: Search keywords
- author: Page author
- robots: Search engine instructions
- refresh: Page refresh
- social media: Open Graph tags`,
            example: `<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">
    
    <!-- Viewport settings -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Page description -->
    <meta name="description" content="Free Web tutorials">
    
    <!-- Keywords -->
    <meta name="keywords" content="HTML, CSS, JavaScript">
    
    <!-- Author -->
    <meta name="author" content="John Doe">
    
    <!-- Refresh page -->
    <meta http-equiv="refresh" content="30">
    
    <!-- Social media -->
    <meta property="og:title" content="My Page">
    <meta property="og:description" content="Description">
    <meta property="og:image" content="image.jpg">
    
    <!-- Robots -->
    <meta name="robots" content="index, follow">
</head>`,
          },
        },
      ],
    },
    {
      id: "vue",
      title: "Vue",
      questions: [
        {
          id: "vue-1",
          title: "1. What is Vue.js?",
          answer: {
            text: `Vue.js is a progressive JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model.

Key features:
- Declarative rendering
- Component system
- Reactivity
- Directives
- Lifecycle hooks
- Computed properties
- Watchers`,
            example: `// Basic Example
<div id="app">
    <h1>{{ message }}</h1>
    <button @click="increment">Count: {{ count }}</button>
</div>

<script>
const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    }
})

app.mount('#app')
</script>

// Component Example
// Child component
const TodoItem = {
    props: ['todo'],
    template: \`
        <li>
            {{ todo.text }}
            <button @click="\$emit('remove', todo.id)">X</button>
        </li>
    \`
}

// Parent component
const TodoList = {
    components: { TodoItem },
    data() {
        return {
            todos: [
                { id: 1, text: 'Learn Vue' },
                { id: 2, text: 'Build something' }
            ]
        }
    },
    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        }
    },
    template: \`
        <ul>
            <todo-item
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                @remove="removeTodo"
            />
        </ul>
    \`
}`,
          },
        },
        {
          id: "vue-2",
          title: "2. What is two-way data binding in Vue?",
          answer: {
            text: `Two-way data binding in Vue allows you to bind form inputs to component data. The v-model directive creates this binding.

Key points:
- v-model creates two-way binding
- Works with form inputs
- Can be used with custom components
- Supports modifiers (.lazy, .number, .trim)
- Under the hood, it's syntax sugar for :value and @input`,
            example: `// Basic form inputs
<template>
    <div>
        <!-- Text input -->
        <input v-model="message" placeholder="Type something">
        <p>Message: {{ message }}</p>

        <!-- Checkbox -->
        <input type="checkbox" v-model="checked">
        <p>Checked: {{ checked }}</p>

        <!-- Radio buttons -->
        <input type="radio" v-model="picked" value="one">
        <input type="radio" v-model="picked" value="two">
        <p>Picked: {{ picked }}</p>

        <!-- Select -->
        <select v-model="selected">
            <option value="">Choose</option>
            <option value="a">A</option>
            <option value="b">B</option>
        </select>
        <p>Selected: {{ selected }}</p>
    </div>
</template>

// Custom component with v-model
<template>
    <div>
        <custom-input v-model="searchText"></custom-input>
        <p>Searching for: {{ searchText }}</p>
    </div>
</template>

<script>
const CustomInput = {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    template: \`
        <input
            :value="modelValue"
            @input="\$emit('update:modelValue', \$event.target.value)"
        >
    \`
}

export default {
    components: { CustomInput },
    data() {
        return {
            searchText: ''
        }
    }
}
</script>`,
          },
        },
        {
          id: "vue-3",
          title: "3. What are lifecycle hooks in Vue?",
          answer: {
            text: `Lifecycle hooks are functions that allow you to execute code at specific stages of a component's lifecycle.

Key points:
- Hooks allow code execution at specific lifecycle stages
- created() is good for data fetching
- mounted() is good for DOM manipulation
- beforeUnmount() is good for cleanup
- Each hook has a specific purpose
- Hooks are called in a specific order`,
            example: `// Basic lifecycle hooks
export default {
    data() {
        return {
            message: 'Hello'
        }
    },
    
    // Before component is created
    beforeCreate() {
        console.log('beforeCreate')
    },
    
    // After component is created
    created() {
        console.log('created')
        // Can access data here
        console.log(this.message)
    },
    
    // Before component is mounted to DOM
    beforeMount() {
        console.log('beforeMount')
    },
    
    // After component is mounted to DOM
    mounted() {
        console.log('mounted')
        // Can access DOM here
        console.log(this.$el)
    },
    
    // Before component is updated
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    
    // After component is updated
    updated() {
        console.log('updated')
    },
    
    // Before component is destroyed
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    
    // After component is destroyed
    unmounted() {
        console.log('unmounted')
    }
}

// Common use cases
export default {
    data() {
        return {
            data: null,
            timer: null
        }
    },
    
    created() {
        // Fetch data when component is created
        this.fetchData()
    },
    
    mounted() {
        // Set up event listeners
        window.addEventListener('resize', this.handleResize)
        
        // Start timer
        this.timer = setInterval(this.updateTime, 1000)
    },
    
    beforeUnmount() {
        // Clean up
        window.removeEventListener('resize', this.handleResize)
        clearInterval(this.timer)
    },
    
    methods: {
        fetchData() {
            // API call
        },
        handleResize() {
            // Handle window resize
        },
        updateTime() {
            // Update time
        }
    }
}`,
          },
        },
        {
          id: "vue-4",
          title: "4. What is prop drilling in Vue?",
          answer: {
            text: `Prop drilling is the process of passing props through multiple levels of components. It can make the code harder to maintain.

Key points:
- Prop drilling can make code hard to maintain
- provide/inject can solve prop drilling
- Vuex/Pinia can also solve prop drilling
- Consider component composition
- Keep props shallow when possible`,
            example: `// Example of prop drilling
// Grandparent component
const Grandparent = {
    data() {
        return {
            user: {
                name: 'John',
                age: 30
            }
        }
    },
    template: \`
        <parent :user="user" />
    \`
}

// Parent component
const Parent = {
    props: ['user'],
    template: \`
        <child :user="user" />
    \`
}

// Child component
const Child = {
    props: ['user'],
    template: \`
        <grandchild :user="user" />
    \`
}

// Grandchild component
const Grandchild = {
    props: ['user'],
    template: \`
        <p>Name: {{ user.name }}</p>
        <p>Age: {{ user.age }}</p>
    \`
}

// Solution using provide/inject
// Grandparent component
const Grandparent = {
    data() {
        return {
            user: {
                name: 'John',
                age: 30
            }
        }
    },
    provide() {
        return {
            user: this.user
        }
    },
    template: \`
        <parent />
    \`
}

// Parent component
const Parent = {
    template: \`
        <child />
    \`
}

// Child component
const Child = {
    template: \`
        <grandchild />
    \`
}

// Grandchild component
const Grandchild = {
    inject: ['user'],
    template: \`
        <p>Name: {{ user.name }}</p>
        <p>Age: {{ user.age }}</p>
    \`
}`,
          },
        },
      ],
    },
    {
      id: "clean-code",
      title: "Clean Code Practices",
      questions: [
        {
          id: "clean-code-1",
          title: "1. What are clean code practices?",
          answer: {
            text: `Clean code practices are guidelines for writing maintainable and readable code. Here are some key principles:

Key principles:
- Use meaningful names
- Write small, focused functions
- Avoid comments when code is self-documenting
- Handle errors properly
- Follow consistent formatting
- Write tests
- Keep code DRY (Don't Repeat Yourself)
- Use appropriate design patterns`,
            example: `// Meaningful Names
// Bad
const d = 10; // What does d mean?
function fn(a, b) { return a + b; }

// Good
const daysInWeek = 7;
function calculateSum(num1, num2) { return num1 + num2; }

// Functions
// Bad
function processUserData(user) {
    // Too many responsibilities
    validateUser(user);
    saveUser(user);
    sendEmail(user);
    logActivity(user);
}

// Good
function validateUser(user) {
    // Single responsibility
    if (!user.name) throw new Error('Name required');
    if (!user.email) throw new Error('Email required');
}

function saveUser(user) {
    // Single responsibility
    database.save(user);
}

function notifyUser(user) {
    // Single responsibility
    emailService.send(user.email, 'Welcome!');
}

// Comments
// Bad
// Check if user is valid
if (user.age > 18 && user.hasLicense) {
    // Allow access
    allowAccess();
}

// Good
const isUserValid = user.age > 18 && user.hasLicense;
if (isUserValid) {
    allowAccess();
}

// Error Handling
// Bad
try {
    processData();
} catch (e) {
    console.log(e);
}

// Good
try {
    processData();
} catch (error) {
    if (error instanceof ValidationError) {
        handleValidationError(error);
    } else if (error instanceof NetworkError) {
        handleNetworkError(error);
    } else {
        handleUnexpectedError(error);
    }
}`,
          },
        },
      ],
    },
    {
      id: "rest-api",
      title: "REST API",
      questions: [
        {
          id: "rest-1",
          title: "1. What is a REST API?",
          answer: {
            text: `REST (Representational State Transfer) is an architectural style for designing networked applications. A REST API is an API that follows REST principles.

Key principles:
- Client-server architecture
- Stateless communication
- Cacheable responses
- Uniform interface
- Layered system
- Code on demand (optional)`,
            example: `// HTTP Methods
// GET - Retrieve resource
fetch('https://api.example.com/users/1')
    .then(response => response.json())
    .then(user => console.log(user));

// POST - Create resource
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John',
        email: 'john@example.com'
    })
});

// PUT - Update resource
fetch('https://api.example.com/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John Updated'
    })
});

// DELETE - Remove resource
fetch('https://api.example.com/users/1', {
    method: 'DELETE'
});

// Status Codes
// 2xx - Success
200 OK
201 Created
204 No Content

// 4xx - Client Error
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found

// 5xx - Server Error
500 Internal Server Error
503 Service Unavailable

// Common headers
{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123',
    'Accept': 'application/json',
    'Cache-Control': 'no-cache'
}`,
          },
        },
      ],
    },
  ],
};
