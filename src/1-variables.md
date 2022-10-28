In programming, we need ways to save information. One way to do that is to take a small piece of data and store it in what we call a "variable". a variable must have a name, this is how you will reference it in your code. When declaring a variable in JS you have 2 choices

  If a variable can change, you would use the let keyword 

let myNumber = 99

this allows you to update the variable 

let myFavoriteNumber = 4
myFavoriteNumber = 11

Sometimes though you DON'T want a variable to change, in that case use the const keyword: 

const hoursInDay = 24

Variable naming rules 
In javascript there are some rules about js names. For now, you really just need to know a few 
- JS Variable names can include numbers and letters 
- the variable can't start with a number 
- No spaces allowed, so to tell words apart, capitalize each new word (The first letter stays lower case though)
```
likeThis
```

## Data types 

So, up until now we've exclusively used numbers for our variables, but that's not the only things we can store. In Programming, there are many different kinds of `data types` that we can store, but here are some of the simple ones 

numbers 
JavaScript lets us use numbers. And unlike other programming languages, it doesn't care if a number is a whole number (also called an `integer`) or a decimal (sometimes referred to as `floats`).

```JavaScript
12
14242.23
```

asdomasdj you can also do math with javascript, here are some of the basic operations 

```
+ = addition
- = subraction
/ = division 
* = multiplication 
```

### Strings 
In JavaScript a piece of text is called a string 

A string is a weird name for text, but thing about it like a piece of text is a bunch of individual characters strung along one after the other 

Strings are created by putting anything between either double or single quotes. Either one is fine, just make sure they match. 


```
const string = "I am a string"
const otherString = 'So Am i'
```
The only tricky thing with strings at this stage is making sure if you use a single quote for a word like "don't", be sure to use double quotes for the whole string so javascript will know you don't want the string to end 

```
"Well, I'm going to use double quotes"
```

> There's actually a *third* way to make strings you'll learn about later, stay tuned

### Booleans
That is a wonky name, but this is just what we call `true` and `false` in programming. Also called a `bool` . In javascript, bools are lowercase. And don't put them in quotes, they aren't text, they're actual values. 
let myBoolean = true
myBoolean = false 

### undefined 
Sometimes the value we want to save is ...no value. Just like with numbers, where it's useful to have a value for nothing 0, with variables you sometimes want to explicitly say a value is nothing. Not 0, but actually nothing. That's what undefined is. We won't use undefined 

```javascript
let nothing = undefined
```

That's all we need for now, there are more data types, but this is more than enough to get us started. Now, let's do something 


