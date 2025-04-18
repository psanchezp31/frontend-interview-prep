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
    // obj in heap is garbage collected if no references exist
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
          title:
            "19. What is the difference between scope and context in JavaScript?",
          answer: {
            text: `Scope and context are two fundamental concepts in JavaScript that are often confused:

Scope:
- Pertains to the visibility of variables
- Determines what variables you have access to
- Is function-based
- Created during the creation phase of execution context
- Types: global, function, and block scope

Context:
- Refers to the value of the 'this' keyword
- Determines which object a function belongs to
- Is object-based
- Set when a function is called
- Can be changed using call(), apply(), or bind()

Key differences:
- Scope is about variable access
- Context is about object ownership
- Scope is static (defined at creation)
- Context is dynamic (determined at call time)`,
            example: `// Scope example
const globalVar = 'global';

function outer() {
    const outerVar = 'outer';
    
    function inner() {
        const innerVar = 'inner';
        console.log(globalVar); // Accessible
        console.log(outerVar); // Accessible
        console.log(innerVar); // Accessible
    }
    
    inner();
}

// Context example
const obj = {
    name: 'John',
    greet: function() {
        console.log(\`Hello, \${this.name}!\`);
    }
};

obj.greet(); // Context is obj
const greet = obj.greet;
greet(); // Context is global (or undefined in strict mode)`,
          },
        },
        {
          id: "js-20",
          title:
            "20. What are lexical scope and lexical environments in JavaScript?",
          answer: {
            text: `Lexical Scope:
- The scope of a variable is determined by its location within the source code
- Inner functions can access variables from their outer scope
- Scope is defined at write time, not runtime
- Follows the nesting of functions in the code

Lexical Environment:
- A specification type used to define the association of identifiers to specific variables and functions
- Consists of two components:
  1. Environment Record: Stores variable and function declarations
  2. Reference to the outer environment: Links to the parent scope

Key points:
- Lexical scope is static
- Inner functions have access to outer variables
- Scope chain is created during function creation
- Variables are looked up through the scope chain`,
            example: `// Lexical scope
function outer() {
    const x = 10;
    
    function inner() {
        const y = 20;
        console.log(x + y); // Can access x from outer scope
    }
    
    inner();
}

// Lexical environment
function createCounter() {
    let count = 0; // Stored in environment record
    
    return function() {
        count++; // Can access count through scope chain
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2`,
          },
        },
        {
          id: "js-21",
          title:
            "21. What is the difference between context and execution context?",
          answer: {
            text: `Context and execution context are related but distinct concepts:

Context:
- Refers to the value of 'this'
- Determines which object a function belongs to
- Can be changed using call(), apply(), or bind()
- Is about object ownership

Execution Context:
- The environment in which JavaScript code is executed
- Created when a function is called
- Contains:
  1. Variable Object (VO)
  2. Scope Chain
  3. 'this' value
- Types: Global and Function execution contexts

Key differences:
- Context is about 'this'
- Execution context is about the entire environment
- Context is one part of execution context
- Execution context includes scope chain and variable object`,
            example: `// Context
const obj = {
    name: 'John',
    greet: function() {
        console.log(this.name);
    }
};

obj.greet(); // Context is obj

// Execution Context
function example() {
    const x = 10; // Stored in Variable Object
    
    function inner() {
        console.log(x); // Found through Scope Chain
    }
    
    inner();
}

example(); // Creates new execution context`,
          },
        },
        {
          id: "js-22",
          title: "22. How does JavaScript code get executed?",
          answer: {
            text: `JavaScript code execution follows a specific process:

1. Creation Phase:
- Global Execution Context (GEC) is created
- Variable and function declarations are hoisted
- Scope chain is established
- 'this' value is determined

2. Execution Phase:
- Code is executed line by line
- Variables are assigned values
- Functions are called
- New execution contexts are created for functions

Key points:
- JavaScript is single-threaded
- Code is executed synchronously
- Functions create new execution contexts
- Variables are hoisted during creation
- Scope chain is established at creation`,
            example: `// Execution example
console.log(x); // undefined (hoisted)
var x = 10;

function example() {
    console.log(y); // undefined (hoisted)
    var y = 20;
    console.log(x); // 10 (from outer scope)
}

example();

// Execution order
1. GEC created
2. x and example() hoisted
3. console.log(x) executed
4. x assigned 10
5. example() called
6. New execution context created
7. y hoisted
8. console.log(y) executed
9. y assigned 20
10. console.log(x) executed`,
          },
        },
        {
          id: "js-23",
          title: "23. What is the call stack in JavaScript?",
          answer: {
            text: `The call stack is a mechanism that keeps track of function calls in JavaScript:

Characteristics:
- Follows Last In, First Out (LIFO) principle
- Stores execution contexts
- Tracks the current position in code
- Has a maximum size limit
- Throws stack overflow error when full

How it works:
1. When a function is called, its execution context is pushed
2. When a function returns, its context is popped
3. The current context is always at the top
4. Global context is at the bottom

Key points:
- Single thread of execution
- Synchronous execution
- Stack overflow protection
- Error tracking
- Debugging aid`,
            example: `function first() {
    console.log('First');
    second();
}

function second() {
    console.log('Second');
    third();
}

function third() {
    console.log('Third');
}

first();

// Call stack visualization:
// 1. first() called
//    Stack: [global, first]
// 2. second() called from first
//    Stack: [global, first, second]
// 3. third() called from second
//    Stack: [global, first, second, third]
// 4. third() returns
//    Stack: [global, first, second]
// 5. second() returns
//    Stack: [global, first]
// 6. first() returns
//    Stack: [global]`,
          },
        },
        {
          id: "js-24",
          title: "24. What is the event loop in JavaScript?",
          answer: {
            text: `The event loop is a mechanism that handles asynchronous operations in JavaScript. The event loop constantly checks whether or not the call stack is empty. If it is empty, new functions are added from the event queue. If it is not, then the current function call is processed:

Components:
1. Call Stack
2. Web APIs
3. Callback Queue
4. Event Loop

How it works:
1. Synchronous code runs in the call stack
2. Async operations are handled by Web APIs
3. Callbacks are placed in the callback queue
4. Event loop moves callbacks to the stack when it's empty

Key points:
- Enables non-blocking operations
- Handles async callbacks
- Maintains single thread
- Processes events in order
- Prevents stack overflow`,
            example: `console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('End');

// Output:
// Start
// End
// Promise
// Timeout

// Execution order:
1. 'Start' logged
2. setTimeout scheduled
3. Promise resolved
4. 'End' logged
5. Call stack empty
6. Promise callback executed
7. Timeout callback executed`,
          },
        },
        {
          id: "js-25",
          title: "25. What are task queues in JavaScript?",
          answer: {
            text: `JavaScript has different types of task queues for handling asynchronous operations:

Types of Queues:
1. Task Queue (Macrotask Queue)
   - setTimeout
   - setInterval
   - setImmediate
   - I/O operations
   - UI rendering

2. Microtask Queue
   - Promise callbacks
   - MutationObserver
   - process.nextTick

Priority:
1. Microtasks have higher priority
2. All microtasks are executed before next macrotask
3. Event loop processes one macrotask at a time
4. Microtasks can create more microtasks

Key points:
- Different queues for different tasks
- Microtasks have priority
- Tasks are processed in order
- Queue processing is part of event loop`,
            example: `console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
}).then(() => {
    console.log('Promise 2');
});

console.log('End');

// Output:
// Start
// End
// Promise 1
// Promise 2
// Timeout

// Execution order:
1. Synchronous code runs
2. Microtasks (Promises) execute
3. Macrotasks (Timeout) execute`,
          },
        },
        {
          id: "js-26",
          title: "26. What is the difference between memory heap and stack?",
          answer: {
            text: `Memory Heap and Stack are two different memory allocation methods:

Memory Heap:
- Used for dynamic memory allocation
- Stores objects and functions
- Memory is allocated randomly
- Slower access
- No size limit
- Manual memory management

Stack:
- Used for static memory allocation
- Stores primitive values and references
- Memory is allocated in LIFO order
- Faster access
- Has size limits
- Automatic memory management

Key differences:
- Stack is for static allocation
- Heap is for dynamic allocation
- Stack is faster but limited
- Heap is slower but flexible
- Stack is automatically managed
- Heap requires garbage collection`,
            example: `// Stack memory
let number = 10; // Primitive stored in stack
let string = 'Hello'; // Primitive stored in stack
let reference = { name: 'John' }; // Reference stored in stack, object in heap

// Heap memory
function createObject() {
    return { 
        data: new Array(1000000).fill('x') // Large object stored in heap
    };
}

const largeObject = createObject(); // Reference in stack, object in heap

// Memory management
function example() {
    let localVar = 'Stack'; // Stack memory
    let obj = { data: 'Heap' }; // Heap memory
    
    // When function ends:
    // localVar is automatically removed from stack
    // obj reference is removed from stack
    // obj in heap is garbage collected if no references exist
}`,
          },
        },
        {
          id: "js-27",
          title: "27. What is a polyfill in JavaScript?",
          answer: {
            text: `A polyfill is a piece of code that provides functionality that is not natively supported by a browser or environment. It allows developers to use modern JavaScript features in older browsers.

Key points:
- Implements newer features in older environments
- Checks if feature exists before implementing
- Provides fallback functionality
- Helps maintain backward compatibility
- Can be loaded conditionally

Common use cases:
- Array methods (map, filter, reduce)
- Promise implementation
- Fetch API
- Object methods
- String methods`,
            example: `// Example: Array.prototype.includes polyfill
if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement, fromIndex) {
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }

        const o = Object(this);
        const len = o.length >>> 0;

        if (len === 0) return false;

        const n = fromIndex | 0;
        let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        while (k < len) {
            if (o[k] === searchElement) {
                return true;
            }
            k++;
        }
        return false;
    };
}`,
          },
        },
        {
          id: "js-28",
          title:
            "28. What are the advantages of Promise.all and when should it be used?",
          answer: {
            text: `Promise.all is a method that takes an array of promises and returns a single promise that resolves when all of the input promises have resolved, or rejects if any of the input promises reject.

Advantages:
- Parallel execution of multiple promises
- Single error handling point
- Maintains order of results
- Efficient resource utilization
- Cleaner code structure

When to use:
- Multiple independent API calls
- Data aggregation from different sources
- Parallel processing of data
- Batch operations
- When all promises must succeed

When not to use:
- When promises are dependent on each other
- When some promises can fail independently
- When order of execution matters
- When you need partial results`,
            example: `// Example: Fetching multiple API endpoints
const fetchUserData = fetch('/api/user');
const fetchPosts = fetch('/api/posts');
const fetchComments = fetch('/api/comments');

Promise.all([fetchUserData, fetchPosts, fetchComments])
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(([user, posts, comments]) => {
        console.log('User:', user);
        console.log('Posts:', posts);
        console.log('Comments:', comments);
    })
    .catch(error => {
        console.error('One of the requests failed:', error);
    });`,
          },
        },
        {
          id: "js-29",
          title: "29. What is throttling in JavaScript?",
          answer: {
            text: `Throttling is a technique that limits how often a function can be called over time. It ensures that a function is called at most once in a specified time period.

Key points:
- Limits function execution frequency
- Useful for performance optimization
- Prevents overwhelming the system
- Maintains consistent rate of execution
- Common use cases:
  - Scroll events
  - Resize events
  - Mouse movement
  - API rate limiting
  - Game loops`,
            example: `function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage
const throttledScroll = throttle(() => {
    console.log('Scroll event throttled');
}, 1000);

window.addEventListener('scroll', throttledScroll);`,
          },
        },
        {
          id: "js-30",
          title: "30. What is debouncing in JavaScript?",
          answer: {
            text: `Debouncing is a technique that delays the execution of a function until after a specified time period has elapsed since the last time it was called. It ensures that a function is only executed once after a series of rapid calls.

Key points:
- Delays function execution
- Groups multiple calls into one
- Useful for performance optimization
- Prevents unnecessary processing
- Common use cases:
  - Search input
  - Window resize
  - Form validation
  - Auto-save functionality
  - API calls on user input`,
            example: `function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage
const debouncedSearch = debounce((query) => {
    console.log('Searching for:', query);
    // API call or other expensive operation
}, 500);

searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});`,
          },
        },
        {
          id: "js-31",
          title: "31. What are callbacks in JavaScript?",
          answer: {
            text: `Callbacks are functions that are passed as arguments to other functions and are executed after some operation has been completed. They are a fundamental part of asynchronous programming in JavaScript.

Key points:
- Functions passed as arguments
- Executed after an operation completes
- Enable asynchronous programming
- Can be synchronous or asynchronous
- Common patterns:
  - Error-first callbacks
  - Promise-based callbacks
  - Event-based callbacks

Advantages:
- Simple to understand
- Flexible and powerful
- Widely supported
- Good for simple async operations

Disadvantages:
- Callback hell (nested callbacks)
- Error handling complexity
- Hard to maintain
- Difficult to debug`,
            example: `// Synchronous callback
function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

processArray([1, 2, 3], (item) => {
    console.log(item * 2);
});

// Asynchronous callback
function fetchData(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Error-first callback pattern
fetchData('https://api.example.com/data', (error, data) => {
    if (error) {
        console.error('Error:', error);
        return;
    }
    console.log('Data:', data);
});`,
          },
        },
        {
          id: "js-32",
          title:
            "32. What are some useful Chrome DevTools features for debugging JavaScript?",
          answer: {
            text: `Chrome DevTools provides several powerful features for debugging JavaScript:

1. Console:
- Console.log() and other console methods
- Console.table() for tabular data
- Console.time() for performance measurement
- Console.trace() for stack traces
- Console.assert() for assertions

2. Sources Panel:
- Breakpoints and conditional breakpoints
- Step through code execution
- Watch expressions
- Call stack inspection
- Scope variables inspection

3. Network Panel:
- Network request inspection
- Request/response headers
- Timing information
- Request blocking
- Throttling network speed

4. Performance Panel:
- CPU profiling
- Memory profiling
- Frame rate analysis
- Performance bottlenecks
- Timeline recording

5. Memory Panel:
- Heap snapshots
- Memory allocation timeline
- Memory leak detection
- Object allocation tracking

6. Application Panel:
- Local storage inspection
- Session storage
- IndexedDB
- Cookies
- Cache storage`,
            example: `// Console examples
console.table([
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
]);

console.time('operation');
// Some operation
console.timeEnd('operation');

// Debugging with breakpoints
function processData(data) {
    debugger; // Sets a breakpoint
    const result = data.map(item => {
        return item * 2;
    });
    return result;
}

// Performance measurement
performance.mark('start');
// Some operation
performance.mark('end');
performance.measure('operation', 'start', 'end');`,
          },
        },
        {
          id: "js-33",
          title: "33. How can you use Chrome DevTools to debug memory leaks?",
          answer: {
            text: `Chrome DevTools provides several tools to help identify and debug memory leaks:

1. Memory Panel:
- Take heap snapshots
- Compare snapshots
- Track object allocation
- Analyze memory usage
- Identify retained objects

2. Performance Panel:
- Record memory timeline
- Monitor memory usage
- Track garbage collection
- Identify memory spikes
- Analyze memory patterns

3. Common Memory Leak Patterns:
- Forgotten timers
- Event listeners
- DOM references
- Closures
- Cached data

4. Debugging Steps:
- Take initial heap snapshot
- Perform actions
- Take second snapshot
- Compare snapshots
- Analyze retained objects

5. Prevention Tips:
- Clear timers and intervals
- Remove event listeners
- Nullify references
- Use weak references
- Monitor memory usage`,
            example: `// Example of potential memory leak
class DataManager {
    constructor() {
        this.cache = new Map();
        this.listeners = new Set();
    }

    addListener(callback) {
        this.listeners.add(callback);
    }

    removeListener(callback) {
        this.listeners.delete(callback);
    }

    // Potential memory leak if listeners aren't removed
    cleanup() {
        this.cache.clear();
        this.listeners.clear();
    }
}

// Using Chrome DevTools to debug:
1. Open DevTools
2. Go to Memory panel
3. Take heap snapshot
4. Create and use DataManager
5. Take second snapshot
6. Compare snapshots
7. Look for retained objects`,
          },
        },
        {
          id: "js-34",
          title:
            "34. How can you use Chrome DevTools to monitor and improve performance?",
          answer: {
            text: `Chrome DevTools provides several tools for performance monitoring and optimization:

1. Performance Panel:
- Record and analyze runtime performance
- Identify bottlenecks
- View frame rate
- Analyze CPU usage
- Track memory usage

2. Network Panel:
- Monitor network requests
- Analyze load times
- Identify slow resources
- Check request priorities
- View waterfall charts

3. Lighthouse:
- Run performance audits
- Get optimization suggestions
- Check accessibility
- Analyze SEO
- Test PWA features

4. Memory Panel:
- Track memory usage
- Identify memory leaks
- Analyze heap snapshots
- Monitor garbage collection
- Track object allocation

5. Rendering Tools:
- Analyze paint operations
- Check layout shifts
- Monitor FPS
- Debug repaints
- Identify forced layouts

Key Performance Metrics:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)`,
            example: `// Performance monitoring in code
performance.mark('startOperation');

// Some operation
for (let i = 0; i < 1000000; i++) {
    // Intensive operation
}

performance.mark('endOperation');
performance.measure('operation', 'startOperation', 'endOperation');

// Using the Performance API
const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        console.log(entry.name, entry.duration);
    }
});

observer.observe({ entryTypes: ['measure'] });`,
          },
        },
        {
          id: "js-35",
          title: "35. What is Local Storage and how is it used in JavaScript?",
          answer: {
            text: `Local Storage is a web storage mechanism that allows websites to store data persistently in a user's browser. The data persists even after the browser is closed and reopened. Data in localStorage does not expire unless you remove it manually.

Key characteristics:
- Stores data as key-value pairs
- Data persists across sessions
- Storage limit of ~5-10MB
- Data is stored as strings
- Synchronous operations
- Same-origin policy applies

Common use cases:
- User preferences
- Caching data
- Offline functionality
- Form data persistence
- Application state

Methods:
- setItem(key, value)
- getItem(key)
- removeItem(key)
- clear()
- key(index)
- length

Limitations:
- No data expiration
- Synchronous API
- Limited storage space
- String-only storage
- No data encryption`,
            example: `// Storing data
localStorage.setItem('username', 'john_doe');
localStorage.setItem('theme', 'dark');

// Retrieving data
const username = localStorage.getItem('username');
const theme = localStorage.getItem('theme');

// Removing data
localStorage.removeItem('username');

// Clearing all data
localStorage.clear();

// Checking storage
const isAvailable = 'localStorage' in window;
const storageSize = JSON.stringify(localStorage).length;

// Storing objects
const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));
const storedUser = JSON.parse(localStorage.getItem('user'));`,
          },
        },
        {
          id: "js-36",
          title:
            "36. What is Session Storage and how does it differ from Local Storage?",
          answer: {
            text: `Session Storage is a web storage mechanism similar to Local Storage, but with data that persists only for the duration of the page session. The data is cleared when the tab or browser is closed.

Key differences from Local Storage:
- Data persists only for the session
- Data is cleared on tab close
- Storage is tab-specific
- Same storage limit (~5-10MB)
- Same API methods
- Same-origin policy applies

Use cases:
- Temporary form data
- Multi-step processes
- Shopping cart data
- Tab-specific state
- Sensitive data

Methods (same as Local Storage):
- setItem(key, value)
- getItem(key)
- removeItem(key)
- clear()
- key(index)
- length

Advantages over Local Storage:
- Better for sensitive data
- Automatic cleanup
- Tab isolation
- Reduced memory usage
- Better privacy

When to use:
- Temporary data storage
- Tab-specific data
- Sensitive information
- Multi-step forms
- Shopping sessions`,
            example: `// Storing session data
sessionStorage.setItem('formData', JSON.stringify({
    step: 1,
    name: 'John',
    email: 'john@example.com'
}));

// Retrieving session data
const formData = JSON.parse(sessionStorage.getItem('formData'));

// Updating session data
formData.step = 2;
sessionStorage.setItem('formData', JSON.stringify(formData));

// Checking session storage
const isAvailable = 'sessionStorage' in window;
const hasData = sessionStorage.length > 0;

// Clearing session data
sessionStorage.clear();

// Tab-specific storage
window.addEventListener('storage', (event) => {
    if (event.storageArea === sessionStorage) {
        console.log('Session storage changed in another tab');
    }
});`,
          },
        },
      ],
    },
    {
      id: "nodejs",
      title: "Node.js",
      questions: [
        {
          id: "node-1",
          title: "1. What is Node.js and what are its key features?",
          answer: {
            text: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside of a web browser, enabling server-side development.

Key features:
- Asynchronous and event-driven
- Single-threaded with event loop
- Non-blocking I/O
- Cross-platform
- NPM ecosystem
- Built-in modules
- Fast execution
- Scalable

Architecture:
- V8 Engine: Executes JavaScript code
- Libuv: Handles async I/O operations
- Event Loop: Manages async operations
- Node.js Bindings: Connects JavaScript to C/C++ libraries

Use cases:
- Web servers
- APIs
- Real-time applications
- Microservices
- Command-line tools
- Data streaming
- IoT applications`,
            example: `// Simple HTTP server
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Node.js!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// Using built-in modules
const fs = require('fs');
const path = require('path');

// Reading a file asynchronously
fs.readFile(path.join(__dirname, 'file.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});`,
          },
        },
        {
          id: "node-2",
          title: "2. How does Node.js work under the hood?",
          answer: {
            text: `Node.js operates on a single-threaded event loop architecture that enables non-blocking I/O operations.

Key components:
1. Event Loop:
   - Handles async operations
   - Manages callbacks
   - Processes events
   - Maintains execution order

2. Thread Pool:
   - Handles heavy operations
   - Default size of 4 threads
   - Used for file system operations
   - Crypto operations

3. V8 Engine:
   - Executes JavaScript code
   - Compiles to machine code
   - Manages memory
   - Handles garbage collection

4. Libuv:
   - Cross-platform async I/O
   - Event loop implementation
   - Thread pool management
   - File system operations

Execution flow:
1. Code execution starts
2. Async operations are delegated
3. Event loop processes callbacks
4. Thread pool handles heavy tasks
5. Results are returned to main thread`,
            example: `// Understanding the event loop
console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

setImmediate(() => {
    console.log('Immediate 1');
});

process.nextTick(() => {
    console.log('Next Tick 1');
});

console.log('End');

// Output order:
// Start
// End
// Next Tick 1
// Timeout 1
// Immediate 1`,
          },
        },
        {
          id: "node-3",
          title:
            "3. What is the difference between setImmediate() and process.nextTick()?",
          answer: {
            text: `setImmediate() and process.nextTick() are both used to schedule callbacks, but they operate in different phases of the event loop.

setImmediate():
- Executes in the "check" phase
- Runs after I/O events
- Lower priority than nextTick
- Better for I/O operations
- More predictable timing

process.nextTick():
- Executes before the next event loop phase
- Runs immediately after current operation
- Higher priority than setImmediate
- Can lead to starvation
- Used for cleanup

Key differences:
1. Priority:
   - nextTick: Highest priority
   - setImmediate: Lower priority

2. Phase:
   - nextTick: Runs between phases
   - setImmediate: Runs in check phase

3. Use cases:
   - nextTick: Error handling, cleanup
   - setImmediate: I/O operations, timeouts

4. Performance:
   - nextTick: Can block event loop
   - setImmediate: More efficient for I/O`,
            example: `// Priority demonstration
console.log('Start');

setImmediate(() => {
    console.log('Immediate 1');
});

process.nextTick(() => {
    console.log('Next Tick 1');
});

setImmediate(() => {
    console.log('Immediate 2');
});

process.nextTick(() => {
    console.log('Next Tick 2');
});

console.log('End');

// Output order:
// Start
// End
// Next Tick 1
// Next Tick 2
// Immediate 1
// Immediate 2

// Practical use cases
function processData(data, callback) {
    // Error handling with nextTick
    if (!data) {
        process.nextTick(() => {
            callback(new Error('No data provided'));
        });
        return;
    }

    // I/O operation with setImmediate
    setImmediate(() => {
        // Process data
        callback(null, processedData);
    });
}`,
          },
        },
        {
          id: "node-4",
          title: "4. What is NestJS and what are its main features?",
          answer: {
            text: `NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses TypeScript and is built with a modular architecture.

Key features:
- Modular architecture
- Dependency injection
- TypeScript support
- Express/Fastify integration
- Microservices support
- GraphQL support
- WebSocket support
- Testing utilities

Architecture components:
1. Modules:
   - Organize application
   - Define providers
   - Import/export functionality

2. Controllers:
   - Handle requests
   - Define routes
   - Process input/output

3. Providers:
   - Business logic
   - Services
   - Repositories
   - Factories

4. Middleware:
   - Request processing
   - Response transformation
   - Error handling

5. Guards:
   - Authentication
   - Authorization
   - Role-based access

6. Pipes:
   - Input validation
   - Data transformation
   - Type conversion`,
            example: `// Basic NestJS application
import { Module, Controller, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller('cats')
class CatsController {
    @Get()
    findAll() {
        return 'This action returns all cats';
    }
}

@Module({
    controllers: [CatsController],
})
class AppModule {}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

bootstrap();

// Using providers and dependency injection
@Injectable()
class CatsService {
    private cats: Cat[] = [];

    findAll(): Cat[] {
        return this.cats;
    }
}

@Controller('cats')
class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    findAll() {
        return this.catsService.findAll();
    }
}`,
          },
        },
        {
          id: "node-5",
          title:
            "5. What is a Backend-for-Frontend (BFF) pattern and how is it implemented in Node.js?",
          answer: {
            text: `Backend-for-Frontend (BFF) is an architectural pattern where a dedicated backend service is created for each frontend application or client type.

Key characteristics:
- Client-specific backend
- Aggregates multiple services
- Handles client-specific logic
- Optimizes data for clients
- Manages client state

Benefits:
- Better client optimization
- Reduced client complexity
- Improved performance
- Better security
- Easier maintenance

Implementation in Node.js:
1. API Gateway:
   - Routes requests
   - Handles authentication
   - Manages rate limiting
   - Caches responses

2. Service Aggregation:
   - Combines multiple APIs
   - Transforms data
   - Handles errors
   - Manages retries

3. Client Optimization:
   - Data formatting
   - Response compression
   - Caching strategies
   - Error handling

4. Security:
   - Authentication
   - Authorization
   - Input validation
   - Rate limiting`,
            example: `// Basic BFF implementation
const express = require('express');
const axios = require('axios');

const app = express();

// API Gateway
app.use('/api/*', async (req, res, next) => {
    // Authentication
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Rate limiting
    const clientId = req.headers['client-id'];
    if (await isRateLimited(clientId)) {
        return res.status(429).json({ error: 'Too many requests' });
    }

    next();
});

// Service aggregation
app.get('/api/user-profile', async (req, res) => {
    try {
        const [user, orders, preferences] = await Promise.all([
            axios.get('/users-service/user'),
            axios.get('/orders-service/orders'),
            axios.get('/preferences-service/preferences')
        ]);

        // Transform and combine data
        const profile = {
            user: user.data,
            orders: orders.data,
            preferences: preferences.data
        };

        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Client-specific optimization
app.get('/api/mobile/user-profile', async (req, res) => {
    const profile = await getUserProfile();
    
    // Optimize for mobile
    const mobileProfile = {
        ...profile,
        // Remove unnecessary data
        // Compress images
        // Format for mobile
    };

    res.json(mobileProfile);
});`,
          },
        },
        {
          id: "node-6",
          title:
            "6. What are the key differences between Node.js and Javascript?",
          answer: {
            text: `
            Concept       | JavaScript (Browser)            | Node.js
            Engine        | V8 (in Chrome, also in Node)    | V8
            Environment   | Browser APIs (DOM, fetch)       | Node APIs (fs, http, streams)
            Event Loop    | Yes                             | Yes
            Web APIs      | Yes (setTimeout, fetch)         | No (uses libuv instead)
            Async I/O     | Browser handles it              | Uses libuv for non-blocking I/O
            Global Object | window                          | global

1. Call Stack
Same in both. It's how JS keeps track of function calls.

2. Event Loop
Same in both. It's how JS handles asynchronous operations.

3. Web APIs
 In the Browser:
setTimeout, fetch, DOM events, etc. are powered by Web APIs (not JS itself).

In Node.js:
No Web APIs.
Instead, Node uses libuv, a C++ library that provides an event loop, async I/O, timers, etc.

4. Microtasks vs Macrotasks
Both environments handle microtasks (like Promise.then() or process.nextTick()) before the next macrotask (like setTimeout()).

But Node adds more complexity:

Task Type       | Browser                         | Node.js
Microtask Queue | Promise.then, MutationObserver  | Promise.then, process.nextTick
Macrotask Queue | setTimeout, setInterval         | setTimeout, setImmediate, I/O callbacks

In Node, process.nextTick() is even faster than Promises.

5. Timers
In the browser:

setTimeout(() => {}, 0); // waits for call stack to clear

In Node:

setTimeout(() => {}, 0);      // macrotask (timers phase)
setImmediate(() => {});       // macrotask (check phase)
process.nextTick(() => {});   // microtask (before next loop tick)

TL;DR

JavaScript's core engine behavior (call stack, event loop) is the same everywhere.

What differs is the environment: browsers vs Node.js offer different APIs, and Node adds some extra layers (like process.nextTick, setImmediate, libuv).

Both rely on the event loop, but what's inside that loop and how tasks are queued can differ.

            `,
            example: ``,
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
        {
          id: "html-5",
          title:
            "5. What are the most important HTML5 tags and their purposes?",
          answer: {
            text: `HTML5 introduced many new tags that improve semantics and functionality. Here are some of the most important ones:

1. Structural Tags:
- <header>: Contains introductory content
- <nav>: Navigation links
- <main>: Main content area
- <article>: Self-contained content
- <section>: Thematic grouping
- <aside>: Side content
- <footer>: Footer content

2. Media Tags:
- <video>: Embeds video content
- <audio>: Embeds audio content
- <canvas>: Drawing graphics
- <svg>: Scalable Vector Graphics
- <picture>: Responsive images
- <source>: Multiple media sources

3. Form Tags:
- <input>: Various input types
- <datalist>: Predefined options
- <output>: Calculation results
- <meter>: Scalar measurement
- <progress>: Progress indicator

4. Semantic Tags:
- <time>: Date/time
- <mark>: Highlighted text
- <figure>: Self-contained content
- <figcaption>: Figure caption
- <details>: Additional details
- <summary>: Details summary

5. Interactive Tags:
- <dialog>: Dialog box
- <menu>: Command menu
- <menuitem>: Menu items
- <template>: Content template`,
            example: `<!-- Structural tags -->
<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h1>Article Title</h1>
        <section>
            <p>Content...</p>
        </section>
    </article>
</main>

<!-- Media tags -->
<video controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<!-- Form tags -->
<form>
    <input list="browsers" name="browser">
    <datalist id="browsers">
        <option value="Chrome">
        <option value="Firefox">
    </datalist>
</form>

<!-- Semantic tags -->
<time datetime="2023-01-01">January 1, 2023</time>
<mark>Highlighted text</mark>`,
          },
        },
        {
          id: "html-6",
          title: "6. How can you optimize HTML for SEO?",
          answer: {
            text: `Search Engine Optimization (SEO) in HTML involves several best practices to improve a website's visibility in search results.

Key SEO practices:
1. Semantic HTML:
   - Use appropriate heading hierarchy
   - Implement semantic elements
   - Structure content logically
   - Use descriptive tags

2. Meta Tags:
   - Title tag: Concise, descriptive
   - Meta description: Compelling summary
   - Meta keywords: Relevant terms
   - Robots meta tag: Indexing control
   - Canonical tag: Prevent duplicate content

3. Content Structure:
   - Clear heading hierarchy
   - Proper paragraph structure
   - Meaningful link text
   - Alt text for images
   - Schema markup

4. Technical SEO:
   - Mobile responsiveness
   - Fast loading times
   - Clean URL structure
   - XML sitemap
   - Robots.txt

5. Accessibility:
   - ARIA attributes
   - Keyboard navigation
   - Screen reader compatibility
   - Color contrast
   - Text alternatives`,
            example: `<!-- SEO-optimized HTML structure -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Best Web Development Practices | Your Site</title>
    <meta name="description" content="Learn the best practices for web development, including HTML, CSS, and JavaScript tips and tricks.">
    <meta name="keywords" content="web development, HTML, CSS, JavaScript, best practices">
    <link rel="canonical" href="https://yoursite.com/web-development">
</head>
<body>
    <header>
        <nav aria-label="Main navigation">
            <ul>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h1>Web Development Best Practices</h1>
            <section>
                <h2>HTML Structure</h2>
                <p>Content about HTML structure...</p>
                <img src="structure.png" alt="HTML document structure diagram" width="600" height="400">
            </section>
        </article>
    </main>
</body>
</html>`,
          },
        },
        {
          id: "html-7",
          title:
            "7. What are the differences between block and inline elements in HTML?",
          answer: {
            text: `Block and inline elements are two fundamental types of HTML elements that behave differently in terms of layout and formatting.

Block Elements:
- Start on a new line
- Take full width available
- Can contain other block and inline elements
- Can have margins and padding
- Examples: <div>, <p>, <h1>-<h6>, <section>, <article>

Inline Elements:
- Do not start on a new line
- Take only necessary width
- Can only contain other inline elements
- Cannot have top/bottom margins
- Examples: <span>, <a>, <strong>, <em>, <img>

Key differences:
1. Layout:
   - Block: New line, full width
   - Inline: Same line, content width

2. Content:
   - Block: Can contain both types
   - Inline: Can only contain inline

3. Box Model:
   - Block: Full box model support
   - Inline: Limited box model

4. Default Display:
   - Block: display: block
   - Inline: display: inline

5. Common Uses:
   - Block: Structure, layout
   - Inline: Text formatting, links`,
            example: `<!-- Block elements -->
<div>
    <p>This is a paragraph inside a div.</p>
    <section>
        <h2>Section Title</h2>
        <p>Section content...</p>
    </section>
</div>

<!-- Inline elements -->
<p>
    This is <strong>bold text</strong> and this is <em>italic text</em>.
    Here's a <a href="#">link</a> and an <img src="icon.png" alt="icon">.
</p>

<!-- Mixed usage -->
<div>
    <p>This is a <span>span element</span> inside a paragraph.</p>
    <a href="#"><img src="button.png" alt="button"></a>
</div>`,
          },
        },
        {
          id: "html-8",
          title: "8. What are HTML forms and how do they work?",
          answer: {
            text: `HTML forms are used to collect user input and send it to a server for processing. They are essential for user interaction on the web.

Form Components:
1. Form Element:
   - <form>: Container for form elements
   - action: URL to send data
   - method: HTTP method (GET/POST)
   - enctype: Encoding type

2. Input Elements:
   - <input>: Various input types
   - <textarea>: Multi-line text
   - <select>: Dropdown list
   - <button>: Form submission
   - <label>: Input description

3. Input Types:
   - text: Single-line text
   - password: Masked text
   - email: Email address
   - number: Numeric input
   - date: Date picker
   - checkbox: Multiple selection
   - radio: Single selection
   - file: File upload
   - submit: Form submission

4. Form Validation:
   - required: Mandatory field
   - pattern: Regex validation
   - min/max: Range validation
   - maxlength: Character limit
   - type: Input type validation`,
            example: `<!-- Basic form -->
<form action="/submit" method="POST" enctype="multipart/form-data">
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </div>

    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>

    <div>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
    </div>

    <div>
        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
        </select>
    </div>

    <div>
        <input type="checkbox" id="subscribe" name="subscribe">
        <label for="subscribe">Subscribe to newsletter</label>
    </div>

    <button type="submit">Submit</button>
</form>`,
          },
        },
      ],
    },
    {
      id: "css",
      title: "CSS",
      questions: [
        {
          id: "css-1",
          title: "1. What are CSS selectors and what are the different types?",
          answer: {
            text: `CSS selectors are patterns used to select and style HTML elements. They are fundamental to CSS and come in various types:

1. Basic Selectors:
- Element selector: Selects elements by tag name (e.g., p, div)
- Class selector: Selects elements by class (e.g., .class)
- ID selector: Selects elements by ID (e.g., #id)
- Universal selector: Selects all elements (*)

2. Combinator Selectors:
- Descendant selector: Selects elements that are descendants (space)
- Child selector: Selects direct children (>)
- Adjacent sibling selector: Selects immediately following sibling (+)
- General sibling selector: Selects all following siblings (~)

3. Attribute Selectors:
- [attr]: Elements with attribute
- [attr=value]: Exact attribute value
- [attr~=value]: Contains word
- [attr|=value]: Starts with word
- [attr^=value]: Starts with string
- [attr$=value]: Ends with string
- [attr*=value]: Contains string

4. Specificity Rules:
- Inline styles: 1000
- ID selectors: 100
- Class/attribute/pseudo-class: 10
- Element/pseudo-element: 1`,
            example: `/* Basic selectors */
p { color: blue; }
.class { font-weight: bold; }
#id { background: red; }
* { margin: 0; }

/* Combinator selectors */
div p { color: green; } /* Descendant */
div > p { color: red; } /* Child */
h2 + p { margin-top: 0; } /* Adjacent sibling */
h2 ~ p { color: blue; } /* General sibling */

/* Attribute selectors */
[disabled] { opacity: 0.5; }
[type="text"] { border: 1px solid; }
[class~="warning"] { color: red; }
[lang|="en"] { font-family: Arial; }
[href^="https"] { color: green; }
[src$=".jpg"] { border: 1px solid; }
[title*="example"] { text-decoration: underline; }`,
          },
        },
        {
          id: "css-2",
          title: "2. What are pseudo-elements and pseudo-classes in CSS?",
          answer: {
            text: `Pseudo-elements and pseudo-classes are special keywords that allow styling of specific parts or states of elements.

Pseudo-elements (::):
- ::before: Inserts content before element
- ::after: Inserts content after element
- ::first-line: Styles first line of text
- ::first-letter: Styles first letter
- ::selection: Styles selected text
- ::placeholder: Styles input placeholder

Pseudo-classes (:):
1. State-based:
   - :hover: Mouse over element
   - :active: Element being activated
   - :focus: Element has focus
   - :visited: Visited link
   - :checked: Checked input
   - :disabled: Disabled element

2. Position-based:
   - :first-child: First child element
   - :last-child: Last child element
   - :nth-child(): Specific child position
   - :only-child: Only child element
   - :first-of-type: First of its type
   - :last-of-type: Last of its type

3. Form-related:
   - :valid: Valid form input
   - :invalid: Invalid form input
   - :required: Required input
   - :optional: Optional input
   - :in-range: Value in range
   - :out-of-range: Value out of range`,
            example: `/* Pseudo-elements */
p::before {
    content: "Note: ";
    font-weight: bold;
}

p::first-line {
    font-weight: bold;
}

::selection {
    background: yellow;
}

input::placeholder {
    color: #999;
}

/* Pseudo-classes */
a:hover {
    color: red;
}

input:focus {
    border-color: blue;
}

li:first-child {
    font-weight: bold;
}

li:nth-child(odd) {
    background: #f0f0f0;
}

input:valid {
    border-color: green;
}

input:invalid {
    border-color: red;
}`,
          },
        },
        {
          id: "css-3",
          title: "3. What are CSS preprocessors and what are their advantages?",
          answer: {
            text: `CSS preprocessors are scripting languages that extend CSS with features like variables, nesting, mixins, and functions, then compile into regular CSS.

Popular Preprocessors:
1. SASS/SCSS:
   - Variables: $variable
   - Nesting: Nested selectors
   - Mixins: Reusable code blocks
   - Functions: Custom functions
   - Control directives: @if, @for, @each
   - Partials: Modular CSS
   - Import: Combine files

2. LESS:
   - Similar to SASS
   - JavaScript-based
   - Client-side compilation
   - Simpler syntax

3. Stylus:
   - Flexible syntax
   - No required brackets
   - Built-in functions
   - Mixins and variables

Advantages:
1. Maintainability:
   - Modular code
   - Reusable components
   - Better organization
   - Easier updates

2. Productivity:
   - Faster development
   - Less repetition
   - Better code structure
   - Built-in functions

3. Features:
   - Variables
   - Nesting
   - Mixins
   - Functions
   - Math operations
   - Color manipulation`,
            example: `/* SCSS Example */
// Variables
$primary-color: #333;
$font-stack: Helvetica, sans-serif;

// Mixin
@mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    border-radius: $radius;
}

// Nesting
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        display: inline-block;
    }

    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
}

// Function
@function calculate-rem($size) {
    $rem-size: $size / 16px;
    @return #{$rem-size}rem;
}

// Usage
body {
    font: 100% $font-stack;
    color: $primary-color;
}

.button {
    @include border-radius(10px);
    font-size: calculate-rem(16px);
}`,
          },
        },
        {
          id: "css-4",
          title: "4. What is Flexbox and how does it work?",
          answer: {
            text: `Flexbox (Flexible Box Layout) is a CSS layout model that provides an efficient way to lay out, align, and distribute space among items in a container.

Key Concepts:
1. Flex Container:
   - display: flex
   - flex-direction: row/column
   - flex-wrap: wrap/nowrap
   - justify-content: main axis alignment
   - align-items: cross axis alignment
   - align-content: multi-line alignment

2. Flex Items:
   - flex-grow: growth factor
   - flex-shrink: shrink factor
   - flex-basis: initial size
   - order: display order
   - align-self: individual alignment

3. Main Properties:
   - flex-direction: row/row-reverse/column/column-reverse
   - justify-content: flex-start/flex-end/center/space-between/space-around
   - align-items: flex-start/flex-end/center/stretch/baseline
   - flex-wrap: nowrap/wrap/wrap-reverse
   - flex-flow: shorthand for flex-direction and flex-wrap

4. Common Use Cases:
   - Centering elements
   - Equal height columns
   - Responsive navigation
   - Card layouts
   - Form layouts`,
            example: `/* Flex Container */
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

/* Flex Items */
.item {
    flex: 1 1 200px; /* grow shrink basis */
    order: 1;
}

/* Common Layouts */
/* Centering */
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Equal Height Columns */
.columns {
    display: flex;
}

.column {
    flex: 1;
}

/* Responsive Navigation */
.nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.nav-item {
    flex: 1 1 auto;
}

/* Card Layout */
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 300px;
}`,
          },
        },
        {
          id: "css-5",
          title: "5. What is CSS Grid and how does it differ from Flexbox?",
          answer: {
            text: `CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns. It differs from Flexbox in several ways:

Key Differences:
1. Dimensionality:
   - Grid: Two-dimensional (rows and columns)
   - Flexbox: One-dimensional (row or column)

2. Layout Approach:
   - Grid: Explicit grid definition
   - Flexbox: Content-based layout

3. Control:
   - Grid: Precise control over both dimensions
   - Flexbox: Main axis control with limited cross-axis control

Grid Features:
1. Grid Container:
   - display: grid
   - grid-template-columns: Column sizes
   - grid-template-rows: Row sizes
   - grid-template-areas: Named areas
   - gap: Spacing between items

2. Grid Items:
   - grid-column: Column placement
   - grid-row: Row placement
   - grid-area: Area placement
   - justify-self: Horizontal alignment
   - align-self: Vertical alignment

3. Common Use Cases:
   - Complex layouts
   - Magazine-style layouts
   - Dashboard layouts
   - Image galleries
   - Form layouts`,
            example: `/* Grid Container */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

/* Grid Items */
.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.main {
    grid-area: main;
}

.footer {
    grid-area: footer;
}

/* Responsive Grid */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

/* Complex Layout */
.complex-layout {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: 100px 1fr 100px;
    min-height: 100vh;
}

/* Image Gallery */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
}

.gallery-item {
    aspect-ratio: 1;
    object-fit: cover;
}`,
          },
        },
        {
          id: "css-6",
          title: "6. What are CSS variables and how are they used?",
          answer: {
            text: `CSS variables (Custom Properties) allow you to store and reuse values throughout your stylesheet. They provide better maintainability and theming capabilities.

Key Features:
1. Declaration:
   - Syntax: --variable-name: value;
   - Scope: Global or local
   - Inheritance: Follows CSS cascade

2. Usage:
   - Syntax: var(--variable-name, fallback)
   - Fallback values
   - Dynamic updates
   - JavaScript interaction

3. Benefits:
   - Centralized values
   - Easy theming
   - Dynamic updates
   - Better maintainability
   - Reduced repetition

4. Common Use Cases:
   - Color schemes
   - Spacing systems
   - Typography scales
   - Breakpoints
   - Theme switching`,
            example: `/* CSS Variables */
:root {
    /* Colors */
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-color: #ffffff;
    --text-color: #212529;

    /* Typography */
    --font-family: system-ui, -apple-system, sans-serif;
    --font-size-base: 16px;
    --line-height-base: 1.5;

    /* Spacing */
    --spacing-unit: 8px;
    --spacing-xs: calc(var(--spacing-unit) * 0.5);
    --spacing-sm: var(--spacing-unit);
    --spacing-md: calc(var(--spacing-unit) * 2);
    --spacing-lg: calc(var(--spacing-unit) * 3);

    /* Breakpoints */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
}

/* Usage */
body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    color: var(--text-color);
    background-color: var(--background-color);
}

.container {
    padding: var(--spacing-md);
    max-width: var(--breakpoint-lg);
    margin: 0 auto;
}

.button {
    background-color: var(--primary-color);
    color: white;
    padding: var(--spacing-sm) var(--spacing-md);
}

/* Theme Switching */
[data-theme="dark"] {
    --background-color: #212529;
    --text-color: #ffffff;
}

/* JavaScript Interaction */
document.documentElement.style.setProperty('--primary-color', '#ff0000');`,
          },
        },
        {
          id: "css-7",
          title: "7. What are CSS animations and transitions?",
          answer: {
            text: `CSS animations and transitions allow you to create smooth, animated effects without JavaScript.

Transitions:
- Property changes over time
- Triggered by state changes
- Simple animations
- Limited control
- Better performance

Animations:
- Complex sequences
- Multiple keyframes
- Independent timing
- More control
- Reusable

Key Properties:
1. Transitions:
   - transition-property: Properties to animate
   - transition-duration: Animation length
   - transition-timing-function: Speed curve
   - transition-delay: Start delay

2. Animations:
   - animation-name: Keyframe name
   - animation-duration: Animation length
   - animation-timing-function: Speed curve
   - animation-delay: Start delay
   - animation-iteration-count: Repeat count
   - animation-direction: Play direction
   - animation-fill-mode: Final state
   - animation-play-state: Running/paused

3. Timing Functions:
   - ease: Default
   - linear: Constant speed
   - ease-in: Start slow
   - ease-out: End slow
   - ease-in-out: Both ends slow
   - cubic-bezier: Custom curve`,
            example: `/* Transitions */
.button {
    background-color: blue;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: red;
}

/* Complex Transition */
.element {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animations */
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in {
    animation: slideIn 0.5s ease-out;
}

/* Complex Animation */
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

.pulse {
    animation: pulse 2s infinite;
}

/* Animation with Multiple Properties */
@keyframes complex {
    0% {
        transform: translateY(0) rotate(0);
        opacity: 0;
    }
    50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 1;
    }
    100% {
        transform: translateY(0) rotate(360deg);
        opacity: 0;
    }
}

.complex {
    animation: complex 3s ease-in-out infinite;
}`,
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
