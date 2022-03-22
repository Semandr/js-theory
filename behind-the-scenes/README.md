## What I have learned:

- [Scope](#scope)
- [Hoisting and TDZ](#hoisting)
- ['this' keyword](#this)
- [Difference between regular and arrow functions](#functions)
- [Primitives vs. Objects](#primitives-vs-objects)

## Scope

### What I learned:

- Scoping asks the question “Where do variables live?” or “Where can we access a certain variable, and where not?”.
- There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks.
- Only 'let' and 'const' vaviables are block-scoped. Variables declared with 'var' end up it the closest function scope.
- In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written.
- Every scope always has access to all the variables from all its outer scopes. This is the scope chain.
- When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it’s looking for. This is called variable lookup.
- The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope.
- The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all.

#

## Hoisting

### What I learned:

- Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. “Variables lifted to the top of their scope”.
- Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.
- TDZ: Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided.
- Makes const variables actually work.
- NEVER use 'var'! But only 'const' or 'let'.
- First we need to declare varible and after use it.
- Call and use function after declaration.
- Const and led variables do not create properties in global Window object, such as 'var'.

#

## this

### What I learned:

- **this** keyword: Special variable that is created for every execution context (every function). Takes the value of (points to) the “owner” of the function in which the this keyword is used.
- **this** is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

#### **this** is very dinamic:

- **As Method** _this_ = Object that is calling the method
- **Simple function call** _this_ = undefined
- **Arrow functions** _this_ = _this_ of surrounding function (lexical _this_)
- **Event listener** _this_ = DOM element that the handler is attached to

#

## Functions

### What I learned:

- Good coding practice is to never use an arrow function as a method.
- The keyword "Arguments" - an array-like object exists only for regular functions, arrow functions do not have it, it is undefined there.

#

## Primitives-vs-Objects

### What I learned:

- Primitive values are simply primitive types that store all the data in that part of the JavaScript engine called the "Call stack". This process consists of three parts: an identifier, a memory address, and the value itself.
- Any objects are a reference data type. The data of these objects is stored in the "Heap" of the JavaScript engine.
- Only the name of the object is stored on the Call stack, and its value points to an address on the Heap.
- JS has a function for copying objects like **Object.assign()**, but it only copies the first level of values. If there is an object inside an object, it will not be copied, but will point to the same content on the Heap as before. For deep cloning, we are need to use external libraries.
