# JS Theory directory

## In this folder I will collect information about how I learned the theory of JavaScript.

### What I have learned I will write down in different folders and files, the names of which will indicate theoretical topics.

#

## File 'scope.js'. What I learned:

- Scoping asks the question “Where do variables live?” or “Where can we access a certain variable, and where not?”.
- There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks.
- Only 'let' and 'const' vaviables are block-scoped. Variables declared with 'var' end up it the closest function scope.
- In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written.
- Every scope always has access to all the variables from all its outer scopes. This is the scope chain.
- When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it’s looking for. This is called variable lookup.
- The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope.
- The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all.

#
