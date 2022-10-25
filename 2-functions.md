- Lesson 2: Functions
  - Basics
  - arguments
  - return values
  - built in functions (console.log)
  - dot notation
  - errors


When it comes to actually *doing* something with programming, you're going to need a *function*. A Function is simply a reusable chunk of code that carries out some action. You can write your own like this:

```js
// First, we must define a function
let square = (number) => {
  return number * number
}

// then we can CALL the function
square(4)
// This returns 16
```

Or you can use built in functions like `console.log` that are provided by JavaScript for us. `console.log` is how we can actually write out information to the console window.

```js
console.log('Hello there!')

// This logs
// Hello there!
// to the console
```



Right off the bat we can see that the first part with the name is just like our last lesson! That's on purpose. Think of a variable like a piece of twine on the wall. The variable name can point that line at anything it wants. It could be a piece of data, but it could also be a function. Though, if a variable points to a function, we just call it a function for clarity.

> The New Hotness
> There's actually an older way to define a function using a special function keyword
> But it has some secret bagage we don't want to deal with right now. So, we won't use it yet.
> You might see something like this in code examples online, just use the new way in your own code.

```js
// Here's the old way
function myOlderFunction (myParameter) {
  return myParameter
}

// Which is the same as this
const myNewFunction = (myParameter) => {
  return myParamenter
}
```

Fun fact, the new way is called an "Arrow Function" because we use a little arrow => when defining them.

## Part 1: Defining The Function
When creating a new function, we first have to define what it is. There are 4 main parts:
- The Name
- The Parameters/Arguments
- The Function body
- The Return Value

Here they are labeled:

SVG SVG SVG

### The Name
Strictly speaking, this is the exact same logic as our variable lesson. However, you might notice here that I'm using const instead of `let`. That's on purpose. While our variables *might* need to change so for now we just stick with `let`, a function should *never, ever* change. So, we're using `const` to keep those guardrails up. Think of it like easing into using `let` and `const` like the pros!

### Parameters
Parameters are like little mini variables that we only use in our function. They are not required, but they are the main way to get information into a function.

```js
const add = (num1, num2) => {
  return num1, num2
}

add(2,4)
```

Parameters need names, and they go inside the ( ) parentheses. When there's more than one you separate them out with commas. Parameters can be any value, and you reference them by using their name, just like variables. Parameters only exist inside the function, you can't use them outside the function they are defined in.

```js
const add = (num1, num2) => {
  return num1, num2
}

num1
NO THAT WILL BREAK
```
If you want to get a value outside a function, you have to set it as the `return value`.

### The function body
This is the actual meat of the function, it's anything within the { }. When we call the function, any of the code inside will be activated and run. However, it won't do anything *until* you call it, so keep that in mind!

To tell what is or isn't inside a function, always indent one level (that means hit the `tab` key on your keyboard once). Most editors will do this for you when you press enter actually.

### The return value
Functions don't have to return anything, but most of the time they do!

> One line efficiency
> Fun fact, if you have a single line function (like add), you can do an implicit return using the following syntax

```js
// explicitly using the return keyword
const add = (num1, num2) => {
  return num1 + num2
}

// implicitly returning the only value in the function
const add = (num1, num2) => num1 + num2
```

> This is a cool trick you might see in tutorials online, but don't feel pressured to use it. There's nothing wrong explicitly using the return keyword!