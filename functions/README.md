## What I have learned about functions:

- [Default parameters](#default-parametrs)
- [High-order functions](#high-order)
- [Callback functions](#callback)
- [Closures](#closures)

#

## Default-parameters

### What I learned:

- Sometimes it's useful to have functions where some parameters are set by default. This way we do not have to pass them in manually in case we don't want to change the default.
- The default values are can contain any expression.
- We can't skip arguments here when we called a function.

## High-order

### What I learned:

- First-Class fucntions are: values, special type of object.
- Any function have methods
- High-Order functions are functions that receive first-class functions as arguments (Callback) and may also return another functions.

## Callback

### What I learned:

- One of the main advantages of using callbacks is that we can split our code into many reusable and related parts.
- Callback functions allow us to create abstractions in this way. They create another level of abstraction. Using them, we can focus on solving the main task, abstracting from the details.

## Closures

### What I learned:

- A function has access to the variable environment (VE) of the execution context in which it was created.
- **Closure**: VE attached to the function, exactly as it was at the time and place the function was created
- A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone!
- A closure gives a function access to all the variables of its parent function,even after that parent function hasreturned.The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
- A closure makes sure that a function doesn’t loose connection to variables that existed at the function’s birth place.
