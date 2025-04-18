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
        {
          id: "react-9",
          title: "9. What are higher-order components in React?",
          answer: {
            text: `A higher-order component (HOC) is a function that takes a component and returns a new component. HOCs are used to share common functionality between components without repeating code.

Key points:
- HOCs are functions that return components
- They are used for code reuse
- They can add props or behavior to components
- They follow the composition pattern
- They should not modify the original component

Common use cases:
- Authentication
- Logging
- Data fetching
- Styling
- Error handling`,
            example: `// HOC for authentication
function withAuth(WrappedComponent) {
  return function(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      // Check authentication status
      const checkAuth = async () => {
        const authStatus = await checkAuthStatus();
        setIsAuthenticated(authStatus);
      };
      checkAuth();
    }, []);

    if (!isAuthenticated) {
      return <div>Please log in to continue</div>;
    }

    return <WrappedComponent {...props} />;
  };
}

// Usage
const AuthenticatedComponent = withAuth(MyComponent);

// HOC for logging
function withLogger(WrappedComponent) {
  return function(props) {
    useEffect(() => {
      console.log('Component mounted:', WrappedComponent.name);
      return () => {
        console.log('Component unmounted:', WrappedComponent.name);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}`,
          },
        },
        {
          id: "react-10",
          title:
            "10. Explain useMemo and React.memo, and describe the differences between them.",
          answer: {
            text: `useMemo and React.memo are both optimization techniques in React, but they serve different purposes:

useMemo:
- A hook that memoizes the result of a function
- Prevents expensive calculations on every render
- Returns a memoized value
- Takes a function and dependencies array
- Runs the function only when dependencies change

React.memo:
- A higher-order component
- Prevents unnecessary re-renders of components
- Returns a memoized component
- Compares props using shallow comparison
- Can accept a custom comparison function

Key differences:
- useMemo memoizes values, React.memo memoizes components
- useMemo is a hook, React.memo is a HOC
- useMemo runs a function, React.memo prevents re-renders
- useMemo is used inside components, React.memo wraps components`,
            example: `// useMemo example
function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    // Expensive calculation
    return data.map(item => ({
      ...item,
      processed: heavyComputation(item)
    }));
  }, [data]); // Only recompute when data changes

  return <div>{processedData.map(item => <Item key={item.id} {...item} />)}</div>;
}

// React.memo example
const MemoizedComponent = React.memo(function MyComponent({ data }) {
  return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
});

// With custom comparison
const MemoizedComponent = React.memo(
  function MyComponent({ data }) {
    return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
  },
  (prevProps, nextProps) => {
    // Custom comparison logic
    return prevProps.data.length === nextProps.data.length;
  }
);`,
          },
        },
        {
          id: "react-11",
          title:
            "11. What are the use cases for useCallback and useMemo? Provide examples.",
          answer: {
            text: `useCallback and useMemo are both optimization hooks in React, but they serve different purposes:

useCallback:
- Memoizes functions
- Prevents unnecessary re-creation of functions
- Useful when passing callbacks to optimized child components
- Takes a function and dependencies array
- Returns a memoized callback

useMemo:
- Memoizes values
- Prevents expensive calculations
- Useful for complex computations
- Takes a function and dependencies array
- Returns a memoized value

Common use cases:
- Optimizing child components that rely on reference equality
- Preventing unnecessary re-renders
- Caching expensive calculations
- Maintaining stable function references`,
            example: `// useCallback example
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // Without useCallback, this function would be recreated on every render
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty dependency array means the function never changes

  return (
    <div>
      <ChildComponent onIncrement={increment} />
      <p>Count: {count}</p>
    </div>
  );
}

// useMemo example
function ComplexCalculation({ data }) {
  // Without useMemo, this calculation would run on every render
  const result = useMemo(() => {
    return data.reduce((acc, item) => {
      // Expensive calculation
      return acc + heavyComputation(item);
    }, 0);
  }, [data]); // Only recompute when data changes

  return <div>Result: {result}</div>;
}

// Combined example
function OptimizedComponent({ items }) {
  const [filter, setFilter] = useState('');

  // Memoized filtered items
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Memoized callback
  const handleFilterChange = useCallback((event) => {
    setFilter(event.target.value);
  }, []);

  return (
    <div>
      <input 
        type="text" 
        value={filter} 
        onChange={handleFilterChange} 
      />
      <ItemList items={filteredItems} />
    </div>
  );
}`,
          },
        },
        {
          id: "react-12",
          title:
            "12. How would you pass data from a child component to a parent component in React?",
          answer: {
            text: `In React, data flows unidirectionally from parent to child through props. To pass data from child to parent, you need to use callback functions. Here are the common approaches:

1. Callback Functions:
- Parent passes a function as a prop to child
- Child calls the function with data
- Parent receives the data in the callback

2. Context API:
- Create a context with a value and setter
- Child components can update the context
- Parent components can access the updated value

3. State Management Libraries:
- Redux, MobX, or other state management
- Child components dispatch actions
- Parent components subscribe to state changes

Key points:
- Data flow is always unidirectional
- Callbacks are the simplest approach
- Context is good for deep component trees
- State management is good for complex applications`,
            example: `// Callback approach
function ParentComponent() {
  const [data, setData] = useState('');

  const handleDataFromChild = (childData) => {
    setData(childData);
  };

  return (
    <div>
      <p>Data from child: {data}</p>
      <ChildComponent onDataChange={handleDataFromChild} />
    </div>
  );
}

function ChildComponent({ onDataChange }) {
  const handleClick = () => {
    onDataChange('Data from child');
  };

  return <button onClick={handleClick}>Send Data to Parent</button>;
}

// Context approach
const DataContext = React.createContext();

function ParentComponent() {
  const [data, setData] = useState('');

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div>
        <p>Data from child: {data}</p>
        <ChildComponent />
      </div>
    </DataContext.Provider>
  );
}

function ChildComponent() {
  const { setData } = useContext(DataContext);

  const handleClick = () => {
    setData('Data from child');
  };

  return <button onClick={handleClick}>Send Data to Parent</button>;
}

// Form example
function ParentForm() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
    // Process the form data
  };

  return (
    <div>
      <ChildForm onSubmit={handleFormSubmit} />
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}

function ChildForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ input });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`,
          },
        },
        {
          id: "react-13",
          title:
            "13. Why do we need to create a copy of the state when updating it in React?",
          answer: {
            text: `In React, state should be treated as immutable. This means we should never modify state directly, but instead create a new copy of the state with the desired changes. There are several important reasons for this:

1. React's State Update Mechanism:
- React uses shallow comparison to detect state changes
- Direct mutations might not trigger re-renders
- React batches state updates for performance

2. Predictable State Updates:
- Immutable updates make state changes predictable
- Easier to track state changes
- Better debugging experience
- Prevents side effects

3. Performance Optimization:
- Helps React's reconciliation process
- Enables efficient re-rendering
- Supports React.memo and other optimizations

4. Best Practices:
- Maintains data consistency
- Follows functional programming principles
- Makes state management more reliable`,
            example: `// Incorrect - Direct mutation
const [state, setState] = useState({ count: 0, items: [] });

// ❌ Wrong
state.count = 1;
state.items.push('new item');

// Correct - Creating a copy
const [state, setState] = useState({ count: 0, items: [] });

// ✅ Correct - Object spread
setState(prevState => ({
  ...prevState,
  count: prevState.count + 1
}));

// ✅ Correct - Array spread
setState(prevState => ({
  ...prevState,
  items: [...prevState.items, 'new item']
}));

// Complex state updates
const [user, setUser] = useState({
  name: 'John',
  profile: {
    age: 30,
    preferences: {
      theme: 'dark'
    }
  }
});

// ✅ Correct - Nested object update
setUser(prevUser => ({
  ...prevUser,
  profile: {
    ...prevUser.profile,
    preferences: {
      ...prevUser.profile.preferences,
      theme: 'light'
    }
  }
}));

// Array operations
const [items, setItems] = useState([1, 2, 3]);

// ✅ Correct - Array methods that return new arrays
setItems(prevItems => [...prevItems, 4]); // Add
setItems(prevItems => prevItems.filter(item => item !== 2)); // Remove
setItems(prevItems => prevItems.map(item => item * 2)); // Update`,
          },
        },
        {
          id: "react-14",
          title:
            "14. Why is a state management library, like Redux, often used in React applications?",
          answer: {
            text: `State management libraries like Redux are commonly used in React applications for several important reasons:

1. Centralized State Management:
- Single source of truth
- Predictable state updates
- Easier state debugging
- Better state organization

2. Complex State Logic:
- Handles complex state interactions
- Manages side effects
- Implements business logic
- Handles async operations

3. Component Communication:
- Avoids prop drilling
- Enables global state access
- Simplifies data sharing
- Reduces component coupling

4. Developer Experience:
- Time-travel debugging
- State persistence
- Middleware support
- DevTools integration

5. Scalability:
- Better code organization
- Easier testing
- Better performance
- Maintainable codebase`,
            example: `// Without Redux - Prop drilling
function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  
  return (
    <div>
      <Header user={user} theme={theme} />
      <Main user={user} theme={theme} setTheme={setTheme} />
      <Footer user={user} theme={theme} />
    </div>
  );
}

// With Redux - Clean component structure
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

// Redux store setup
import { createStore, combineReducers } from 'redux';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
};

const themeReducer = (state = 'light', action) => {
  switch (action.type) {
    case 'SET_THEME':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer
});

const store = createStore(rootReducer);

// Component using Redux
import { useSelector, useDispatch } from 'react-redux';

function ThemeToggle() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <button 
      onClick={() => dispatch({ 
        type: 'SET_THEME', 
        payload: theme === 'light' ? 'dark' : 'light' 
      })}
    >
      Toggle Theme
    </button>
  );
}`,
          },
        },
        {
          id: "react-15",
          title:
            "15. What are middlewares in Redux, and why are they important?",
          answer: {
            text: `Redux middleware is a way to extend Redux with custom functionality. It provides a third-party extension point between dispatching an action and the moment it reaches the reducer.

Key aspects of middleware:
1. Functionality:
- Intercept actions
- Transform actions
- Dispatch new actions
- Handle side effects
- Log actions

2. Common Use Cases:
- Logging
- Crash reporting
- API calls
- Async operations
- State persistence

3. Benefits:
- Extensible architecture
- Clean separation of concerns
- Reusable logic
- Better error handling
- Enhanced debugging

4. Popular Middleware:
- Redux Thunk (async actions)
- Redux Saga (complex async flows)
- Redux Logger (action logging)
- Redux Persist (state persistence)`,
            example: `// Custom middleware example
const loggerMiddleware = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

// Async middleware (similar to Redux Thunk)
const asyncMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

// Applying middleware
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, asyncMiddleware)
);

// Using middleware for async actions
const fetchUser = (userId) => {
  return async (dispatch, getState) => {
    dispatch({ type: 'FETCH_USER_REQUEST' });
    
    try {
      const response = await fetch(\`/api/users/\${userId}\`);
      const user = await response.json();
      
      dispatch({ 
        type: 'FETCH_USER_SUCCESS', 
        payload: user 
      });
    } catch (error) {
      dispatch({ 
        type: 'FETCH_USER_FAILURE', 
        payload: error.message 
      });
    }
  };
};

// Component using async action
function UserProfile({ userId }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);
  
  // ... rest of the component
}`,
          },
        },
        {
          id: "react-16",
          title:
            "16. How can you prevent a component from re-rendering in React?",
          answer: {
            text: `There are several techniques to prevent unnecessary re-renders in React components:

1. React.memo:
- Memoizes functional components
- Prevents re-renders when props haven't changed
- Can use custom comparison function
- Works with shallow prop comparison

2. useMemo:
- Memoizes expensive calculations
- Returns cached value until dependencies change
- Prevents recalculation on every render
- Useful for complex computations

3. useCallback:
- Memoizes functions
- Prevents function recreation
- Useful for callback props
- Maintains referential equality

4. shouldComponentUpdate (Class Components):
- Controls when component should update
- Receives next props and state
- Returns boolean to determine update
- Can implement custom comparison logic

5. PureComponent (Class Components):
- Implements shallow comparison
- Automatically prevents unnecessary updates
- Extends React.PureComponent
- Works with shallow prop/state comparison`,
            example: `// Using React.memo
const MemoizedComponent = React.memo(function MyComponent({ data }) {
  return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
});

// With custom comparison
const MemoizedComponent = React.memo(
  function MyComponent({ data }) {
    return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.data.length === nextProps.data.length;
  }
);

// Using useMemo
function ExpensiveComponent({ items }) {
  const processedItems = useMemo(() => {
    return items.map(item => ({
      ...item,
      processed: heavyComputation(item)
    }));
  }, [items]);

  return <div>{processedItems.map(item => <Item key={item.id} {...item} />)}</div>;
}

// Using useCallback
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <ChildComponent onIncrement={increment} />
      <p>Count: {count}</p>
    </div>
  );
}

// Class component with shouldComponentUpdate
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Custom comparison logic
    return this.props.data !== nextProps.data;
  }

  render() {
    return <div>{this.props.data}</div>;
  }
}

// Using PureComponent
class MyPureComponent extends React.PureComponent {
  render() {
    return <div>{this.props.data}</div>;
  }
}`,
          },
        },
        {
          id: "react-17",
          title: "17. What is the Context API in React? How does it work?",
          answer: {
            text: `The Context API is a React feature that enables sharing data across the component tree without explicitly passing props through every level. It's designed to solve the "prop drilling" problem.

Key aspects of Context API:
1. Components:
- Context.Provider: Supplies the context value
- Context.Consumer: Consumes the context value
- useContext hook: Modern way to consume context

2. How it works:
- Create a context using React.createContext()
- Provide a value using Context.Provider
- Consume the value using Context.Consumer or useContext
- Context updates trigger re-renders of consuming components

3. Use cases:
- Theme data
- User authentication
- Language preferences
- UI state
- Global settings

4. Best practices:
- Keep contexts focused and small
- Split contexts by domain
- Use multiple contexts when needed
- Consider performance implications`,
            example: `// Creating a context
const ThemeContext = React.createContext('light');

// Provider component
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={\`app \${theme}\`}>
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

// Consumer using useContext hook
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>My App</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </header>
  );
}

// Consumer using Context.Consumer (class components)
class Main extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <main className={\`content \${theme}\`}>
            <p>Current theme: {theme}</p>
          </main>
        )}
      </ThemeContext.Consumer>
    );
  }
}

// Multiple contexts
const UserContext = React.createContext(null);
const SettingsContext = React.createContext({});

function App() {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SettingsContext.Provider value={{ settings, setSettings }}>
        <div>
          <Header />
          <Main />
        </div>
      </SettingsContext.Provider>
    </UserContext.Provider>
  );
}`,
          },
        },
        {
          id: "react-18",
          title:
            "18. How would you share data across multiple components in React?",
          answer: {
            text: `There are several approaches to share data across multiple components in React:

1. Props Drilling:
- Pass data through component hierarchy
- Simple for shallow component trees
- Becomes cumbersome in deep trees
- Can lead to prop drilling issues

2. Context API:
- Share data without explicit prop passing
- Good for global or frequently used data
- Avoids prop drilling
- Can cause unnecessary re-renders

3. State Management Libraries:
- Redux, MobX, or Zustand
- Centralized state management
- Predictable state updates
- Good for complex applications

4. Custom Hooks:
- Share logic and state between components
- Encapsulate reusable functionality
- Can combine multiple hooks
- Follows React's composition model

5. Event Emitters/Pub-Sub:
- Custom event system
- Decoupled components
- Good for one-time events
- Less common in React`,
            example: `// Props Drilling
function Parent() {
  const [data, setData] = useState('shared data');
  return <Child data={data} />;
}

function Child({ data }) {
  return <GrandChild data={data} />;
}

function GrandChild({ data }) {
  return <div>{data}</div>;
}

// Context API
const DataContext = React.createContext();

function App() {
  const [data, setData] = useState('shared data');
  
  return (
    <DataContext.Provider value={{ data, setData }}>
      <ComponentA />
      <ComponentB />
    </DataContext.Provider>
  );
}

// Custom Hook
function useSharedData() {
  const [data, setData] = useState('shared data');
  
  const updateData = (newData) => {
    setData(newData);
  };
  
  return { data, updateData };
}

function ComponentA() {
  const { data } = useSharedData();
  return <div>{data}</div>;
}

function ComponentB() {
  const { updateData } = useSharedData();
  return <button onClick={() => updateData('new data')}>Update</button>;
}

// Redux Example
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <ComponentA />
      <ComponentB />
    </Provider>
  );
}

function ComponentA() {
  const data = useSelector(state => state.data);
  return <div>{data}</div>;
}

function ComponentB() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch({ type: 'UPDATE_DATA', payload: 'new data' })}>
      Update
    </button>
  );
}`,
          },
        },
        {
          id: "react-19",
          title:
            "19. What are some optimization techniques for React applications?",
          answer: {
            text: `React applications can be optimized using various techniques to improve performance and user experience:

1. Code Splitting:
- Split code into smaller chunks
- Load code on demand
- Reduce initial bundle size
- Improve load time

2. Memoization:
- Use React.memo for components
- Use useMemo for values
- Use useCallback for functions
- Prevent unnecessary re-renders

3. Virtualization:
- Render only visible items
- Use react-window or react-virtualized
- Handle large lists efficiently
- Improve scroll performance

4. Lazy Loading:
- Load components when needed
- Use React.lazy and Suspense
- Reduce initial load time
- Improve perceived performance

5. Performance Monitoring:
- Use React DevTools Profiler
- Monitor render times
- Identify performance bottlenecks
- Track component updates

6. Bundle Optimization:
- Minify and compress code
- Use code splitting
- Optimize images
- Remove unused code`,
            example: `// Code Splitting with React.lazy
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// Memoization
const MemoizedComponent = React.memo(function MyComponent({ data }) {
  return <div>{data}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  
  const expensiveValue = useMemo(() => {
    return computeExpensiveValue(count);
  }, [count]);
  
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  
  return (
    <div>
      <MemoizedComponent data={expensiveValue} />
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// Virtualization
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={50}
    >
      {({ index, style }) => (
        <div style={style}>
          {items[index]}
        </div>
      )}
    </FixedSizeList>
  );
}

// Performance Monitoring
function ProfiledComponent() {
  return (
    <Profiler
      id="MyComponent"
      onRender={(id, phase, actualDuration) => {
        console.log(\`\${id} took \${actualDuration}ms to render\`);
      }}
    >
      <MyComponent />
    </Profiler>
  );
}`,
          },
        },
        {
          id: "react-20",
          title:
            "20. How does lazy loading work in React? Implement an example of it.",
          answer: {
            text: `Lazy loading in React allows you to load components only when they are needed, improving the initial load time of your application. It's implemented using React.lazy() and Suspense.

Key aspects of lazy loading:
1. React.lazy():
- Dynamically imports components
- Returns a Promise
- Must render within Suspense
- Supports code splitting

2. Suspense:
- Handles loading states
- Shows fallback content
- Wraps lazy components
- Can be nested

3. Benefits:
- Faster initial load
- Smaller bundle size
- Better performance
- Improved user experience

4. Use cases:
- Route-based code splitting
- Heavy components
- Optional features
- Modal dialogs`,
            example: `// Basic lazy loading
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// Route-based code splitting
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./routes/Home'));
const About = React.lazy(() => import('./routes/About'));
const Contact = React.lazy(() => import('./routes/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
}

// Lazy loading with error boundaries
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
}

// Lazy loading with preloading
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  const [showComponent, setShowComponent] = useState(false);

  // Preload the component
  useEffect(() => {
    import('./LazyComponent');
  }, []);

  return (
    <div>
      <button onClick={() => setShowComponent(true)}>
        Show Component
      </button>
      
      {showComponent && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}`,
          },
        },
        {
          id: "react-21",
          title:
            "21. How would you prevent unnecessary re-renders of a component?",
          answer: {
            text: `There are several techniques to prevent unnecessary re-renders in React components:

1. React.memo:
- Memoizes functional components
- Prevents re-renders when props haven't changed
- Can use custom comparison function
- Works with shallow prop comparison

2. useMemo:
- Memoizes expensive calculations
- Returns cached value until dependencies change
- Prevents recalculation on every render
- Useful for complex computations

3. useCallback:
- Memoizes functions
- Prevents function recreation
- Useful for callback props
- Maintains referential equality

4. shouldComponentUpdate (Class Components):
- Controls when component should update
- Receives next props and state
- Returns boolean to determine update
- Can implement custom comparison logic

5. PureComponent (Class Components):
- Implements shallow comparison
- Automatically prevents unnecessary updates
- Extends React.PureComponent
- Works with shallow prop/state comparison

6. State Management:
- Keep state as local as possible
- Lift state up when needed
- Use context for global state
- Consider state management libraries`,
            example: `// Using React.memo
const MemoizedComponent = React.memo(function MyComponent({ data }) {
  return <div>{data}</div>;
});

// With custom comparison
const MemoizedComponent = React.memo(
  function MyComponent({ data }) {
    return <div>{data}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.data.length === nextProps.data.length;
  }
);

// Using useMemo
function ExpensiveComponent({ items }) {
  const processedItems = useMemo(() => {
    return items.map(item => ({
      ...item,
      processed: heavyComputation(item)
    }));
  }, [items]);

  return <div>{processedItems.map(item => <Item key={item.id} {...item} />)}</div>;
}

// Using useCallback
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <ChildComponent onIncrement={increment} />
      <p>Count: {count}</p>
    </div>
  );
}

// Class component with shouldComponentUpdate
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }

  render() {
    return <div>{this.props.data}</div>;
  }
}

// Using PureComponent
class MyPureComponent extends React.PureComponent {
  render() {
    return <div>{this.props.data}</div>;
  }
}`,
          },
        },
        {
          id: "react-22",
          title: "22. What are controlled components?",
          answer: {
            text: `Controlled components in React are components where form data is handled by the component's state. The React component that renders a form also controls what happens in that form on subsequent user input.

Key characteristics:
1. State Management:
- Form data is stored in component state
- State is the single source of truth
- Changes are handled through state updates
- Input values are controlled by React

2. Event Handling:
- onChange events update state
- State updates trigger re-renders
- Form submission uses state values
- Validation can be performed on state

3. Benefits:
- Predictable form behavior
- Easy form validation
- Controlled user input
- Better form management

4. Use cases:
- Form inputs
- Text areas
- Select dropdowns
- Checkboxes and radio buttons`,
            example: `// Controlled input
function ControlledInput() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Controlled form with multiple inputs
function ControlledForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}`,
          },
        },
        {
          id: "react-23",
          title: "23. What are controlled and uncontrolled inputs?",
          answer: {
            text: `In React, form inputs can be either controlled or uncontrolled, each with its own use cases and benefits.

Controlled Inputs:
1. Characteristics:
- Value is controlled by React state
- Changes are handled through state updates
- State is the single source of truth
- Form data is managed by React

2. Benefits:
- Predictable behavior
- Easy validation
- Controlled user input
- Better form management

Uncontrolled Inputs:
1. Characteristics:
- Value is managed by the DOM
- Uses refs to access values
- More similar to traditional HTML
- Form data is managed by the DOM

2. Benefits:
- Less code
- Better performance
- Easier integration
- Simpler implementation

3. When to use:
- Controlled:
  * Form validation needed
  * Dynamic form behavior
  * Complex form logic
  * Real-time updates

- Uncontrolled:
  * Simple forms
  * File inputs
  * Integration with non-React code
  * Performance-critical forms`,
            example: `// Controlled Input
function ControlledInput() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}

// Uncontrolled Input
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log('Input value:', inputRef.current.value);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        defaultValue="Initial value"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

// File Input (typically uncontrolled)
function FileInput() {
  const fileInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const file = fileInput.current.files[0];
    console.log('Selected file:', file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        ref={fileInput}
      />
      <button type="submit">Upload</button>
    </form>
  );
}`,
          },
        },
        {
          id: "react-24",
          title: "24. What is component composition?",
          answer: {
            text: `Component composition is a pattern in React where components are combined to create more complex components. It's a fundamental concept that promotes code reuse and maintainability.

Key aspects of component composition:
1. Composition Patterns:
- Containment (children prop)
- Specialization
- Higher-order components
- Render props

2. Benefits:
- Code reuse
- Better maintainability
- More flexible components
- Clearer component hierarchy

3. Composition Techniques:
- Props spreading
- Children prop
- Component injection
- Render props

4. Best Practices:
- Keep components small
- Use composition over inheritance
- Make components reusable
- Follow single responsibility principle`,
            example: `// Containment example
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>Card content</p>
    </Card>
  );
}

// Specialization example
function Dialog({ title, children }) {
  return (
    <div className="dialog">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <Dialog title="Welcome">
      <p>Thank you for visiting our website!</p>
    </Dialog>
  );
}

// Render props example
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <div>
          Mouse position: {x}, {y}
        </div>
      )}
    />
  );
}

// Higher-order component example
function withLogging(WrappedComponent) {
  return function(props) {
    console.log('Rendering:', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}

const LoggedComponent = withLogging(MyComponent);

// Component injection example
function Layout({ header, content, footer }) {
  return (
    <div className="layout">
      <div className="header">{header}</div>
      <div className="content">{content}</div>
      <div className="footer">{footer}</div>
    </div>
  );
}

function App() {
  return (
    <Layout
      header={<Header />}
      content={<MainContent />}
      footer={<Footer />}
    />
  );
}`,
          },
        },
        {
          id: "react-25",
          title:
            "25. What are the differences between functional components and class components?",
          answer: {
            text: `Functional and class components are two ways to create React components, each with its own characteristics and use cases.

Functional Components:
1. Characteristics:
- Defined as JavaScript functions
- Use hooks for state and lifecycle
- Simpler syntax
- Better performance
- Easier to test

2. Benefits:
- More concise code
- Better readability
- Easier to understand
- Better for simple components
- No 'this' keyword issues

Class Components:
1. Characteristics:
- Defined as ES6 classes
- Use lifecycle methods
- Have 'this' context
- Can use state
- More verbose syntax

2. Benefits:
- Built-in state management
- Lifecycle methods
- Error boundaries
- Legacy code support
- More features out of the box

3. Key Differences:
- Syntax and structure
- State management
- Lifecycle handling
- Performance
- Code organization`,
            example: `// Functional Component
function FunctionalComponent({ name }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []);

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// Class Component
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component unmounted');
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}`,
          },
        },
        {
          id: "react-26",
          title: "26. What is the life cycle of a component?",
          answer: {
            text: `The component lifecycle in React refers to the different stages a component goes through from creation to destruction. Understanding these stages is crucial for proper component management.

Class Component Lifecycle:
1. Mounting Phase:
- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

2. Updating Phase:
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

3. Unmounting Phase:
- componentWillUnmount()

4. Error Handling:
- static getDerivedStateFromError()
- componentDidCatch()

Functional Component Lifecycle (using Hooks):
1. Mounting:
- useState()
- useEffect() with empty dependency array

2. Updating:
- useState()
- useEffect() with dependencies

3. Unmounting:
- useEffect() cleanup function

4. Error Handling:
- No direct equivalent (use error boundaries)

Key Points:
- Lifecycle methods help manage side effects
- Different methods for different purposes
- Hooks provide similar functionality
- Error boundaries for error handling`,
            example: `// Class Component Lifecycle
class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    console.log('Render');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

// Functional Component Lifecycle (with Hooks)
function FunctionalLifecycle() {
  const [count, setCount] = useState(0);

  // Mounting and Updating
  useEffect(() => {
    console.log('Component mounted or updated');
    
    // Cleanup (Unmounting)
    return () => {
      console.log('Cleanup function');
    };
  }, [count]); // Dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
          },
        },
        {
          id: "react-27",
          title: "27. What are the rules to use hooks?",
          answer: {
            text: `Hooks are a powerful feature in React, but they come with specific rules that must be followed to ensure proper functionality.

1. Rules of Hooks:
- Only call hooks at the top level
- Only call hooks from React functions
- Follow the naming convention
- Use hooks in the correct order

2. Top Level Rule:
- Don't call hooks inside:
  * Loops
  * Conditions
  * Nested functions
  * Regular JavaScript functions

3. React Functions Rule:
- Call hooks from:
  * React function components
  * Custom hooks
- Don't call hooks from:
  * Class components
  * Regular functions
  * Event handlers

4. Naming Convention:
- Custom hooks should start with 'use'
- Follow React's naming patterns
- Be descriptive of their purpose

5. Order of Hooks:
- Hooks must be called in the same order
- Don't conditionally call hooks
- Keep hook calls consistent`,
            example: `// Correct usage
function CorrectComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// Incorrect usage
function IncorrectComponent() {
  // ❌ Don't call hooks conditionally
  if (someCondition) {
    const [count, setCount] = useState(0);
  }

  // ❌ Don't call hooks in loops
  for (let i = 0; i < 10; i++) {
    const [value, setValue] = useState(i);
  }

  // ❌ Don't call hooks in nested functions
  function handleClick() {
    const [count, setCount] = useState(0);
  }

  // ✅ Correct: Call hooks at the top level
  const [name, setName] = useState('');

  return <div>Hello</div>;
}

// Custom hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Using custom hook
function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,
          },
        },
        {
          id: "react-28",
          title: "28. Why is necessary to use key when rendering arrays?",
          answer: {
            text: `The 'key' prop is crucial when rendering lists of elements in React. It helps React identify which items have changed, been added, or been removed.

1. Purpose of Keys:
- Identify unique elements
- Track element changes
- Optimize re-rendering
- Maintain component state

2. Benefits:
- Performance optimization
- Correct state management
- Proper DOM updates
- Stable element identity

3. Key Requirements:
- Must be unique
- Should be stable
- Should be predictable
- Should be consistent

4. Best Practices:
- Use unique IDs
- Avoid array indices
- Keep keys stable
- Don't generate keys during render

5. Common Mistakes:
- Using array indices
- Generating random keys
- Using unstable values
- Missing keys in lists`,
            example: `// Correct usage with unique IDs
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

// Incorrect usage with array indices
function IncorrectList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}> {/* ❌ Avoid using array indices */}
          {item.name}
        </li>
      ))}
    </ul>
  );
}

// Correct usage with stable keys
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}

// Component with state preservation
function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {isEditing ? (
        <input defaultValue={todo.text} />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}

// Example of key importance
function ListWithState() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
  ]);

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}`,
          },
        },
        {
          id: "react-29",
          title: "29. What is props.children?",
          answer: {
            text: `props.children is a special prop in React that allows components to pass their children elements directly to their output. It's a powerful feature for component composition.

1. Understanding props.children:
- Special prop in React
- Contains child elements
- Can be any valid React element
- Supports composition patterns

2. Types of children:
- String literals
- React elements
- Arrays of elements
- Functions (render props)
- null or undefined

3. Use cases:
- Layout components
- Wrapper components
- Modal dialogs
- Higher-order components
- Composition patterns

4. Benefits:
- Flexible component structure
- Reusable components
- Clean component hierarchy
- Better code organization`,
            example: `// Basic usage
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>Card content</p>
    </Card>
  );
}

// Multiple children
function Layout({ children }) {
  return (
    <div className="layout">
      <header>{children[0]}</header>
      <main>{children[1]}</main>
      <footer>{children[2]}</footer>
    </div>
  );
}

// Conditional rendering
function Modal({ isOpen, children }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal">
      {children}
    </div>
  );
}

// Function as children (render props)
function MouseTracker({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {children(position)}
    </div>
  );
}

// Using MouseTracker
function App() {
  return (
    <MouseTracker>
      {({ x, y }) => (
        <div>
          Mouse position: {x}, {y}
        </div>
      )}
    </MouseTracker>
  );
}`,
          },
        },
        {
          id: "react-30",
          title: "30. How to create a react project? and a react component?",
          answer: {
            text: `Creating a React project and components involves several steps and best practices.

1. Creating a React Project:
- Using Create React App (CRA)
- Using Vite
- Using Next.js
- Manual setup with webpack

2. Project Structure:
- src/ directory
- public/ directory
- package.json
- node_modules/
- Configuration files

3. Creating Components:
- Functional components
- Class components
- Component organization
- File naming conventions

4. Best Practices:
- Component structure
- File organization
- Naming conventions
- Code splitting`,
            example: `// Creating a React project with Create React App
npx create-react-app my-app
cd my-app
npm start

// Creating a React project with Vite
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev

// Basic functional component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Class component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

// Component with hooks
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
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

// Project structure
my-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Header.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── index.jsx
├── package.json
└── README.md`,
          },
        },
        {
          id: "react-31",
          title: "31. What is package.json, package-lock.json",
          answer: {
            text: `package.json and package-lock.json are essential files in Node.js and React projects that manage dependencies and project configuration.

1. package.json:
- Project configuration file
- Lists project dependencies
- Defines scripts and commands
- Contains metadata
- Version management

2. Key sections in package.json:
- name and version
- description
- main entry point
- scripts
- dependencies
- devDependencies
- peerDependencies

3. package-lock.json:
- Locks dependency versions
- Ensures consistent installs
- Records exact versions
- Prevents version conflicts
- Improves security

4. Important fields:
- dependencies: Production dependencies
- devDependencies: Development dependencies
- scripts: NPM commands
- engines: Node/npm versions
- private: Package visibility`,
            example: `// Example package.json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "A React application",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "vite": "^4.0.0"
  },
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "test": "jest",
    "lint": "eslint ."
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

// Example package-lock.json (partial)
{
  "name": "my-react-app",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "my-react-app",
      "version": "1.0.0",
      "dependencies": {
        "react": {
          "version": "18.2.0",
          "resolved": "https://registry.npmjs.org/react/-/react-18.2.0.tgz",
          "integrity": "sha512-..."
        }
      }
    }
  }
}

// Common npm commands
npm install              # Install all dependencies
npm install package     # Install a package
npm install --save-dev  # Install dev dependency
npm update              # Update packages
npm audit               # Security audit
npm run script-name     # Run a script`,
          },
        },
        {
          id: "react-32",
          title: "32. What is JSX?",
          answer: {
            text: `JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It's a fundamental part of React development.

1. JSX Basics:
- Syntax extension for JavaScript
- HTML-like syntax
- Compiles to JavaScript
- Used in React components

2. JSX Features:
- Embed expressions
- Use JavaScript in JSX
- Conditional rendering
- List rendering
- Component composition

3. JSX Rules:
- Must return a single root element
- Use className instead of class
- Use htmlFor instead of for
- Close all tags
- Use camelCase for attributes

4. JSX Benefits:
- Readable code
- Component structure
- Easy to understand
- Better development experience`,
            example: `// Basic JSX
const element = <h1>Hello, world!</h1>;

// JSX with expressions
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// JSX with attributes
const element = (
  <div className="container">
    <img src={user.avatarUrl} alt={user.name} />
    <h2>{user.name}</h2>
  </div>
);

// Conditional rendering
function UserGreeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign in.</h1>
      )}
    </div>
  );
}

// List rendering
function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}

// Component composition
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

// JSX with styles
function StyledComponent() {
  const style = {
    color: 'blue',
    fontSize: '20px'
  };

  return <div style={style}>Styled content</div>;
}

// JSX with events
function Button() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <button onClick={handleClick}>
      Click me
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
