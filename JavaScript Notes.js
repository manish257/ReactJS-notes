
F12 for developer tools
Developer tools allow us to see errors, run commands, examine variables, and much more.

If we have a lot of JavaScript code, we can put it into a separate file.

Script files are attached to HTML with the src attribute:

<script src="/path/to/script.js"></script>



put semicolon after each line of code
\\ is used for comments
 a line of code can be commented out by pressing the Ctrl+/ hotkey for a single-line comment and 
something like Ctrl+Shift+/ – for multiline comments (select a piece of code and press the hotkey).


"use strict";
for enabling the modifications
use at the start of the code

there is no way to cancel use strict

IN  Browser
<Enter> runs the code 
<Shift +Enter> takes to second line
if not make a function AND put it into a wrapper

Modern JavaScript supports “classes” and “modules” ,
that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.

So, for now "use strict"; is a welcome guest at the top of your scripts. 
Later, when your code is all in classes and modules, you may omit it.


VARIABLE
A variable is a “named storage” for data. 
To create a variable in JavaScript, use the let keyword.

The statement below creates (in other words: declares) a variable with the name “message”:

let message;


Now, we can put some data into it by using the assignment operator =:

o be concise, we can combine the variable declaration and assignment into a single line:

let message = 'Hello!';

var instead of let
In older scripts, you may also find another keyword: var instead of let


There are two limitations on variable names in JavaScript:

The name must contain only letters, digits, or the symbols $ and _.
The first character must not be a digit.

if we dont use 'use strict', we can use declare variable even without let and var


CONSTANT

To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = '18.04.1982';

There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

Such constants are named using capital letters and underscores.
const COLOR_RED = "#F00";


capital-named constants are only used as aliases for “hard-coded” values.

An extra variable is good, not evil.


VAR vs LET

var pierces through if, for or other code blocks like a global variable
“var” tolerates redeclarations

var works even if  is declared below the function where it is being used

People also call such behavior “hoisting” (raising), because all var are “hoisted” (raised) to the top of the function.

Declarations are hoisted, but assignments are not.
if there is var along with assignment, the var will work from top but the assignment will work from where it is assigned.


IIFE

immediately-invoked function expressions

NaN = not a number


DATA TYPES

Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

here, char doesnt exist like C and Java, use string instead

Boolean type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”

In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

use null instead of undefined

Objects and Symbols
The object type is special.

All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). 
In contrast, objects are used to store collections of data and more complex entities.

The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, 
but also postpone the details till we know objects.


The typeof operator
The typeof operator returns the type of the argument. 

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)



alert
This one we’ve seen already. It shows a message and waits for the user to press “OK”.
alert("Hello");

mini-window with the message is called a modal window



prompt
The function prompt accepts two arguments:

result = prompt(title, [default]);
It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

title
The text to show the visitor.
default
An optional second parameter, the initial value for the input field.


confirm
The syntax:

result = confirm(question);
The function confirm shows a modal window with a question and two buttons: OK and Cancel.

The result is true if OK is pressed and false otherwise.

For example:
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed



Boolean Conversion
The conversion rule:

Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.


The binary plus would add them as strings:

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
If we want to treat them as numbers, we need to convert and then sum them:

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5


Increment ++ increases a variable by 1
Decrement -- decreases a variable by 1

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )


A strict equality operator === checks the equality without type conversion.


The nullish coalescing operator is written as two question marks ??.

The important difference between them is that:

|| returns the first truthy value.
?? returns the first defined value.

The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

It’s used to assign default values to variables:

// set height=100, if height is null or undefined
height = height ?? 100;
The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

It’s forbidden to use it with || or && without explicit parentheses.



CONTINUE

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}

When a value is passed as a function parameter, it’s also called an argument.

Returning a value
A function can return a value back into the calling code as the result.

The simplest example would be a function that sums two values:

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3




The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

This code works as intended:

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now




Arrow functions, the basics
There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ..., argN) => expression;
This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right 
side with their use and returns its result.

Let’s see a concrete example:

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3



There are 8 data types:

number for both floating-point and integer numbers,
bigint for integer numbers of arbitrary length,
string for strings,
boolean for logical values: true/false,
null – a type with a single value null, meaning “empty” or “does not exist”,
undefined – a type with a single value undefined, meaning “not assigned”,
object and symbol – for complex data structures and unique identifiers, we haven’t learnt them yet.



Debugger command
We can also pause the code by using the debugger command in it, like this:

function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- the debugger stops here

  say(phrase);
}
That’s very convenient when we are in a code editor and don’t want to switch to the browser and 
look up the script in developer tools to set the breakpoint.


Logging
To output something to console from our code, there’s console.log function.

For instance, this outputs values from 0 to 4 to console:

// open console to see
for (let i = 0; i < 5; i++) {
  console.log("value,", i);
}
Regular users don’t see that output, it is in the console. To see it,
 either open the Console panel of developer tools or press Esc while in another panel: that opens the console at the bottom.

If we have enough logging in our code, then we can see what’s going on from the records, without the debugger.


Automated testing with Mocha

Automated testing means that tests are written separately, in addition to the code. 
They run our functions in various ways and compare results with the expected.

Behavior Driven Development or, in short, BDD.

BDD is three things in one: tests AND documentation AND examples.

The spec in action
Here in the tutorial we’ll be using the following JavaScript libraries for tests:

Mocha – the core framework: it provides common testing functions including describe and it and the main function that runs tests.
Chai – the library with many assertions. It allows to use a lot of different assertions, for now we need only assert.equal.
Sinon – a library to spy over functions, emulate built-in functions and more, we’ll need it much later.


how to make our modern code work on older engines that don’t understand recent features yet?

There are two tools for that:

Transpilers.
Polyfills.


Transpilers
A transpiler is a special piece of software that translates source code to another source code. 
It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.


Polyfills
New language features may include not only syntax constructs and operators, but also built-in functions.
A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations.

Two interesting libraries of polyfills are:

core js that supports a lot, allows to include only needed features.
polyfill.io service that provides a script with polyfills, depending on the features and user’s browser.



OBJECTS

We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. 
It’s easy to find a file by its name or add/remove a file.

An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

Usually, the figure brackets {...} are used. That declaration is called an object literal.

We can immediately put some properties into {...} as “key: value” pairs:

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

Property values are accessible using the dot notation:

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

The value can be of any type. Let’s add a boolean one:

user.isAdmin = true;

To remove a property, we can use delete operator:

delete user.age;

We can also use multiword property names, but then they must be quoted:

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

The last property in the list may end with a comma:

let user = {
  name: "John",
  age: 30,
}
That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.

There’s an alternative “square bracket notation” that works with any string:

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];


We can use more complex expressions inside square brackets:

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
Square brackets are much more powerful than the dot notation. They allow any property names and variables. But they are also more cumbersome to write.

So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.

Property names limitations
As we already know, a variable cannot have a name equal to one of language-reserved words like “for”, “let”, “return” etc.

But for an object property, there’s no such restriction:

// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6


There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as


Property existence test, “in” operator
A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property.
 There will be no error if the property doesn’t exist!

The syntax is:

"key" in object
For instance:

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist


For instance, let’s output all properties of user:

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow to take the key from a variable, like obj[varWithKey].
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.
What we’ve studied in this chapter is called a “plain object”, or just Object.

There are many other kinds of objects in JavaScript:

Array to store ordered data collections,
Date to store the information about the date and time,
Error to store the information about an error.
…And so on.
They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, 
but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.



Object references and copying
One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, 
whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.


When an object variable is copied, the reference is copied, but the object itself is not duplicated.

As you can see, there’s still one object, but now with two variables that reference it.

We can use either variable to access the object and modify its contents:

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference



Cloning and merging, Object.assign

we can use the method Object.assign for that.

The syntax is:

Object.assign(dest, [src1, src2, src3...])
The first argument dest is a target object.
Further arguments src1, ..., srcN (can be as many as needed) are source objects.
It copies the properties of all source objects src1, ..., srcN into the target dest. 
In other words, properties of all arguments starting from the second are copied into the first object.
The call returns dest.

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

Nested cloning
Until now we assumed that all properties of user are primitive. But properties can be references to other objects. What to do with them?

Like this:

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182

Garbage collection

Reachability
The main concept of memory management in JavaScript is reachability.

Simply put, “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.
There’s a background process in the JavaScript engine that is called garbage collector. 
It monitors all objects and removes those that have become unreachable.

object = null 
makes it empty and unreachable

Internal algorithms
The basic garbage collection algorithm is called “mark-and-sweep”.

The main things to know:

Garbage collection is performed automatically. We cannot force or prevent it.
Objects are retained in memory while they are reachable.
Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole.



When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.



“this” in methods

To access the object, a method can use the this keyword.

The value of this is the object “before dot”, the one used to call the method.

For instance:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John


“this” is not bound
In JavaScript, keyword this behaves unlike most other programming languages. 
It can be used in any function, even if it’s not a method of an object.


The rule is simple: if obj.f() is called, then this is obj during the call of f.

Constructor function
Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.

Return from constructors
Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

But if there is a return statement, then the rule is simple:

If return is called with an object, then the object is returned instead of this.
If return is called with a primitive, it’s ignored.
In other words, return with an object returns that object, in all other cases this is returned.

Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.



Optional chaining
The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

Here’s the safe way to access user.address.street using ?.:

let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

The optional chaining ?. syntax has three forms:

obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
As we can see, all of them are straightforward and simple to use.
 The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

A chain of ?. allows to safely access nested properties.

Still, we should apply ?. carefully, only where it’s acceptable that the left part doesn’t exist. 
So that it won’t hide programming errors from us, if they occur.


Symbols
A “symbol” represents a unique identifier.

A value of this type can be created using Symbol():

// id is a new symbol
let id = Symbol();

Symbols don’t auto-convert to a string
Most values in JavaScript support implicit conversion to a string. 
For instance, we can alert almost any value, and it will work. Symbols are special. They don’t auto-convert.

For instance, this alert will show an error:

let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string
That’s a “language guard” against messing up, because strings and symbols are fundamentally different and should not accidentally convert one into another.

If we really want to show a symbol, we need to explicitly call .toString() on it, like here:

let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works



Symbol.keyFor
For global symbols, not only Symbol.for(key) returns a symbol by name, 
but there’s a reverse call: Symbol.keyFor(sym), that does the reverse: returns a name by a global symbol.

For instance:

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id



What happens when objects are added obj1 + obj2, subtracted obj1 - obj2 or printed using alert(obj)?

In the chapter Type Conversions we’ve seen the rules for numeric, string and boolean conversions of primitives. 
But we left a gap for objects. Now, as we know about methods and symbols it becomes possible to fill it.

All objects are true in a boolean context. There are only numeric and string conversions.
The numeric conversion happens when we subtract objects or apply mathematical functions. 
For instance, Date objects (to be covered in the chapter Date and time) can be subtracted, 
and the result of date1 - date2 is the time difference between two dates.
As for the string conversion – it usually happens when we output an object like alert(obj) and in similar contexts.

toString/valueOf
If there’s no Symbol.toPrimitive then JavaScript tries to find methods toString and valueOf:

For the “string” hint: toString, and if it doesn’t exist, then valueOf (so toString has the priority for string conversions).
For other hints: valueOf, and if it doesn’t exist, then toString (so valueOf has the priority for maths).


Symbol.toPrimitive must return a primitive, otherwise there will be an error.

The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.

There are 3 types (hints) of it:

"string" (for alert and other operations that need a string)
"number" (for maths)
"default" (few operators)


There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

let billion = 1_000_000_000;
Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable. 
The JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes


toString(base)
The method num.toString(base) returns a string representation of num in the numeral system with the given base.

For example:

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number.
 A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter,
 for example to make a short url. Can simply represent it in the numeral system with base 36:

alert( 123456..toString(36) ); // 2n9c


Two dots to call a method
Please note that two dots in 123456..toString(36) is not a typo. 
If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it.

If we placed a single dot: 123456.toString(36), then there would be an error, 
ecause JavaScript syntax implies the decimal part after the first dot. 
And if we place one more dot, then JavaScript knows that the decimal part is empty and now goes the method.

Also could write (123456).toString(36).


alert( 0.1 + 0.2 == 0.3 ); // false
That’s right, if we check whether the sum of 0.1 and 0.2 is 0.3, we get false

The same issue exists in many other programming languages.

PHP, Java, C, Perl, Ruby give exactly the same result, because they are based on the same numeric format

Can we work around the problem? Sure, the most reliable method is to round the result with the help of a method toFixed(n):

let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // 0.30

They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. 
The function parseInt returns an integer, whilst parseFloat will return a floating-point number:

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:

alert( parseInt('a123') ); // NaN, the first symbol stops the process


In practice, that means a simple thing: for 32-bit integers ~n equals -(n+1).

For instance:

alert( ~2 ); // -3, the same as -(2+1)
alert( ~1 ); // -2, the same as -(1+1)
alert( ~0 ); // -1, the same as -(0+1)
alert( ~-1 ); // 0, the same as -(-1+1)

It’s the right choice if we need to test for the match, but don’t need its position:

alert( "Widget with id".includes("Widget") ); // true

Returns the part of the string from start to (but not including) end.

For instance:

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at

Strings in JavaScript are encoded using UTF-16.

16- bit Unicode Transformation Format)


The arr.forEach method allows to run a function for every element of the array.

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true

For example, we have an array of users, each with the fields id and name. Let’s find the one with id == 1:

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John

indexOf/lastIndexOf and includes
The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax 
and do essentially the same as their string counterparts, but operate on items instead of characters:

arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from) – same, but looks for from right to left.
arr.includes(item, from) – looks for item starting from index from, returns true if found.

ARRAY

A cheat sheet of array methods:

To add/remove elements:

push(...items) – adds items to the end,
pop() – extracts an item from the end,
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
concat(...items) – returns a new array: copies all members of the current one and adds items to it. 
If any of items is an array, then its elements are taken.
To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
includes(value) – returns true if the array has value, otherwise false.
find/filter(func) – filter elements through the function, return first/all values that make it return true.
findIndex is like find, but returns the index instead of a value.
To iterate over elements:

forEach(func) – calls func for every element, does not return anything.
To transform the array:

map(func) – creates a new array from results of calling func for every element.
sort(func) – sorts the array in-place, then returns it.
reverse() – reverses the array in-place, then returns it.
split/join – convert a string to array and back.
reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each 
element and passing an intermediate result between the calls.
Additionally:

Array.isArray(arr) checks arr for being an array.
Please note that methods sort, reverse and splice modify the array itself.

These methods are the most used ones, they cover 99% of use cases. But there are few others:

arr.some(fn)/arr.every(fn) check the array.

The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

These methods behave sort of like || and && operators: if fn returns a truthy value, 
arr.some() immediately returns true and stops iterating over the rest of items; if fn returns a falsy value, 
arr.every() immediately returns false and stops iterating over the rest of items as well.

We can use every to compare arrays:

function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arraysEqual([1, 2], [1, 2])); // true
arr.fill(value, start, end) – fills the array with repeating value from index start to end.

arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, 
at position target (overwrites existing).

arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.


Iterables and array-likes
Two official terms look similar, but are very different. Please make sure you understand them well to avoid the confusion.

Iterables are objects that implement the Symbol.iterator method, as described above.
Array-likes are objects that have indexes and length, so they look like arrays.


Map
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.


Map – is a collection of keyed values.

Methods and properties:

new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
map.set(key, value) – stores the value by the key, returns the map itself.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key, returns true if key existed at the moment of the call, otherwise false.
map.clear() – removes everything from the map.
map.size – returns the current element count.
The differences from a regular Object:

Any keys, objects can be keys.
Additional convenient methods, the size property.
Set – is a collection of unique values.

Methods and properties:

new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
set.add(value) – adds a value (does nothing if value exists), returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, 
but we can’t reorder elements or directly get an element by its number.


WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

That comes at the cost of not having support for clear, size, keys, values…

WeakMap and WeakSet are used as “secondary” data structures in addition to the “primary” object storage. Once the object is removed from the primary storage, 
if it is only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically.


Destructuring assignment
The two most used data structures in JavaScript are Object and Array.

Objects allow us to create a single entity that stores data items by key.
Arrays allow us to gather data items into an ordered list.

Destructuring” does not mean “destructive”.
It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.

Object destructuring
The destructuring assignment also works with objects.

To create a new Date object call new Date() with one of the following arguments:

new Date()


If we want a reliable benchmark of CPU-hungry function, we should be careful.

For instance, let’s measure two functions that calculate the difference between two dates: which one is faster?

Such performance measurements are often called “benchmarks”.


Date and time in JavaScript are represented with the Date object. We can’t create “only date” or “only time”: Date objects always carry both.
Months are counted from zero (yes, January is a zero month).
Days of week in getDay() are also counted from zero (that’s Sunday).
Date auto-corrects itself when out-of-range components are set. Good for adding/subtracting days/months/hours.
Dates can be subtracted, giving their difference in milliseconds. That’s because a Date becomes the timestamp when converted to a number.
Use Date.now() to get the current timestamp fast.
Note that unlike many other systems, timestamps in JavaScript are in milliseconds, not in seconds.

Sometimes we need more precise time measurements. JavaScript itself does not have a way to measure time in microseconds 
(1 millionth of a second), but most environments provide it. For instance, browser has performance.now() that gives the number
 of milliseconds from the start of page loading with microsecond precision (3 digits after the point):

alert(`Loading started ${performance.now()}ms ago`);
// Something like: "Loading started 34731.26000000001ms ago"
// .26 is microseconds (260 microseconds)
// more than 3 digits after the decimal point are precision errors, only the first 3 are correct
Node.js has microtime module and other ways. Technically, almost any device and environment allows to get more precision, it’s just not in Date.


JSON.stringify
The JSON (JavaScript Object Notation) is a general format to represent values and objects.

JSON.stringify can be applied to primitives as well.
JSON supports following data types:

Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null.


JSON.parse
To decode a JSON-string, we need another method named JSON.parse.

The syntax:

let value = JSON.parse(str, [reviver]);

JSON is a data format that has its own independent standard and libraries for most programming languages.
JSON supports plain objects, arrays, strings, numbers, booleans, and null.
JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
Both methods support transformer functions for smart reading/writing.
If an object has toJSON, then it is called by JSON.stringify.



Rest parameters ...
A function can be called with any number of arguments, no matter how it is defined.

function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert( titles[0] ); // Consul
  alert( titles[1] ); // Imperator
  alert( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");


Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.

When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

For Math.max:

let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

When we see "..." in the code, it is either rest parameters or the spread syntax.

There’s an easy way to distinguish between them:

When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
Use patterns:

Rest parameters are used to create functions that accept any number of arguments.
The spread syntax is used to pass an array to functions that normally require a list of many arguments.
Together they help to travel between a list and an array of parameters with ease.

All arguments of a function call are also available in “old-style” arguments: array-like iterable object.





In JavaScript, every running function, code block {...}, and the script as a whole have an
internal (hidden) associated object known as the Lexical Environment.


When the code wants to access a variable – the inner Lexical Environment is searched first, 
then the outer one, then the more outer one and so on until the global one.
A variable is updated in the Lexical Environment where it lives

Closure

A closure is a function that remembers its outer variables and can access them.
That is: they automatically remember where they were created using a hidden [[Environment]] property, 
and then their code can access outer variables.
that all functions in JavaScript are closures, and maybe a few more words about technical details:
the [[Environment]] property and how Lexical Environments work.


If a value is so important that you’d like to make it available globally, write it directly as a property:

// make current user information global, to let all scripts access it
window.currentUser = {
  name: "John"
};

// somewhere else in code
alert(currentUser.name);  // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); // John



The global object holds variables that should be available everywhere.

That includes JavaScript built-ins, such as Array and environment-specific values, such as window.innerHeight – the window height in the browser.

The global object has a universal name globalThis.

…But more often is referred by “old-school” environment-specific names, such as window (browser) and global (Node.js).

We should store values in the global object only if they’re truly global for our project. And keep their number at minimum.

In-browser, unless we’re using modules, global functions and variables declared with var become a property of the global object.

To make our code future-proof and easier to understand, we should access properties of the global object directly, as window.x.

Named Function Expression
Named Function Expression, or NFE, is a term for Function Expressions that have a name.

Functions are objects.

Here we covered their properties:

name – the function name. Usually taken from the function definition, but if there’s none, 
JavaScript tries to guess it from the context (e.g. an assignment).
length – the number of arguments in the function definition. Rest parameters are not counted.
If the function is declared as a Function Expression (not in the main code flow), 
and it carries the name, then it is called a Named Function Expression. The name can be used inside to reference itself, 
for recursive calls or such.

Also, functions may carry additional properties. Many well-known JavaScript libraries make great use of this feature.

They create a “main” function and attach many other “helper” functions to it. For instance, 
the jQuery library creates a function named $. The lodash library creates a function _, and then adds _.clone, _.keyBy 
and other properties to it (see the docs when you want to learn more about them). Actually, they do it to lessen their pollution 
of the global space, so that a single library gives only one global variable. That reduces the possibility of naming conflicts.

So, a function can do a useful job by itself and also carry a bunch of other functionality in properties.



Closure
Usually, a function remembers where it was born in the special property [[Environment]]. 

But when a function is created using new Function, its [[Environment]] is set to reference 
not the current Lexical Environment, but the global one.

Scheduling: setTimeout and setInterval
We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:

setTimeout allows us to run a function once after the interval of time.
setInterval allows us to run a function repeatedly, starting after the interval of time, 
then repeating continuously at that interval.


Methods setTimeout(func, delay, ...args) and setInterval(func, delay, ...args) 
allow us to run the func once/regularly after delay milliseconds.
To cancel the execution, we should call clearTimeout/clearInterval with the value returned 
by setTimeout/setInterval.
Nested setTimeout calls are a more flexible alternative to setInterval, allowing us to set 
the time between executions more precisely.
Zero delay scheduling with setTimeout(func, 0) (the same as setTimeout(func)) is used to 
schedule the call “as soon as possible, but after the current script is complete”.
The browser limits the minimal delay for five or more nested calls of setTimeout or for 
setInterval (after 5th call) to 4ms. That’s for historical reasons.


Transparent caching
Let’s say we have a function slow(x) which is CPU-heavy, but its results are stable. 
In other words, for the same x it always returns the same result.

If the function is called often, we may want to cache (remember) the results 
to avoid spending extra-time on recalculations.

But instead of adding that functionality into slow() we’ll create a wrapper function, 
that adds caching. As we’ll see, there are many benefits of doing so.

To summarize, there are several benefits of using a separate cachingDecorator instead of altering the code of slow itself:

The cachingDecorator is reusable. We can apply it to another function.
The caching logic is separate, it did not increase the complexity of slow itself (if there was any).
We can combine multiple decorators if needed (other decorators will follow).

The trick is called method borrowing.

We take (borrow) a join method from a regular array ([].join) and use [].join.call to run it in the context of arguments.

Why does it work?

That’s because the internal algorithm of the native method arr.join(glue) is very simple

Decorator is a wrapper around a function that alters its behavior. The main job is still carried out by the function.

Decorators can be seen as “features” or “aspects” that can be added to a function. We can add one or add many. And all this without changing its code!

To implement cachingDecorator, we studied methods:

func.call(context, arg1, arg2…) – calls func with given context and arguments.
func.apply(context, args) – calls func passing context as this and array-like args into a list of arguments.

The difference with debounce is that it’s completely different decorator:

debounce runs the function once after the “cooldown” period. Good for processing the final result.
throttle runs it not more often than given ms time. Good for regular updates that shouldn’t be very often.
In other words, throttle is like a secretary that accepts phone calls, but bothers the boss (calls the actual f) not more often than once per ms milliseconds.

Let’s check the real-life application to better understand that requirement and to see where it comes from.

For instance, we want to track mouse movements.



 Once a method is passed somewhere separately from the object – this is lost.
 
 The method setTimeout in-browser is a little special: it sets this=window for the function call (for Node.js, this becomes the timer object, but doesn’t really matter here). 
 So for this.firstName it tries to get window.firstName, which does not exist. In other similar cases, usually this just becomes undefined.
 
 Solution 1: a wrapper
 
 let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);
Now it works, because it receives user from the outer lexical environment, and then calls the method normally.

Solution 2: bind
Functions provide a built-in method bind that allows to fix this.

The basic syntax is:

// more complex syntax will come a little later
let boundFunc = func.bind(context);
The result of func.bind(context) is a special function-like “exotic object”, 
that is callable as function and transparently passes the call to func setting this=context.

In other words, calling boundFunc is like func with fixed this.

Convenience method: bindAll
If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop:

for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}
JavaScript libraries also provide functions for convenient mass binding , e.g. _.bindAll(object, methodNames) in lodash.

Partial functions
We can bind not only this, but also arguments. That’s rarely done, but sometimes can be handy.

The full syntax of bind:

let bound = func.bind(context, [arg1], [arg2], ...);
The call to mul.bind(null, 2) creates a new function double that passes calls to mul,
 fixing null as the context and 2 as the first argument. Further arguments are passed “as is”.

That’s called partial function application – we create a new function by fixing some parameters of the existing one.

Going partial without context
a function partial for binding only arguments can be easily implemented.

Like this:

function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

Method func.bind(context, ...args) returns a “bound variant” of function func that fixes the context this and first arguments if given.

Usually we apply bind to fix this for an object method, so that we can pass it somewhere. For example, to setTimeout.

When we fix some arguments of an existing function, the resulting (less universal) function is called partially applied or partial.

Partials are convenient when we don’t want to repeat the same argument over and over again. 
Like if we have a send(from, to) function, and from should always be the same for our task, we can get a partial and go on with it.

Arrow functions have no “this”
As we remember from the chapter Object methods, "this", arrow functions do not have this. If this is accessed, it is taken from the outside.

Arrow functions can’t run with new
Not having this naturally means another limitation: arrow functions can’t be used as constructors. They can’t be called with new.

rrow functions VS bind
There’s a subtle difference between an arrow function => and a regular function called with .bind(this):

.bind(this) creates a “bound version” of the function.
The arrow => doesn’t create any binding. The function simply doesn’t have this.
 The lookup of this is made exactly the same way as a regular variable search: in the outer lexical environment.
 
 Arrows have no “arguments”
Arrow functions also have no arguments variable.

That’s great for decorators, when we need to forward a call with the current this and arguments.

Arrow functions:

Do not have this
Do not have arguments
Can’t be called with new
They also don’t have super, but we didn’t study it yet. We will on the chapter Class inheritance
That’s because they are meant for short pieces of code that do not have their own “context”, 
but rather work in the current one. And they really shine in that use case.


Property flags
Object properties, besides a value, have three special attributes (so-called “flags”):

writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

The syntax is:

let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
obj
The object to get information from.
propertyName
The name of the property.
The returned value is a so-called “property descriptor” object: it contains the value and all the flags.



To change the flags, we can use Object.defineProperty.

The syntax is:

Object.defineProperty(obj, propertyName, descriptor)
obj, propertyName
The object and its property to apply the descriptor.
descriptor
Property descriptor object to apply.
If the property exists, defineProperty updates its flags. Otherwise, it creates the 
property with the given value and flags; in that case, if a flag is not supplied, it is assumed false.


Non-writable
Let’s make user.name non-writable (can’t be reassigned) by changing writable flag:

let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'
Now no one can change the name of our user, unless they apply their own defineProperty to override ours.

Non-enumerable
Now let’s add a custom toString to user.

Normally, a built-in toString for objects is non-enumerable, it does not show up in for..in. But if we add a toString of our own, then by default it shows up in for..in

If we don’t like it, then we can set enumerable:false. Then it won’t appear in a for..in

Non-configurable
The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.

A non-configurable property can’t be deleted, its attributes can’t be modified.

For instance, Math.PI is non-writable, non-enumerable and non-configurable:

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
So, a programmer is unable to change the value of Math.PI or overwrite it.


Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.

Please note: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.


Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.

Please note: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.

Object.defineProperties
There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties at once.

The syntax is:

Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});

Object.getOwnPropertyDescriptors
To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).

Together with Object.defineProperties it can be used as a “flags-aware” way of cloning an object:

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

Sealing an object globally
Property descriptors work at the level of individual properties.

There are also methods that limit access to the whole object:

Object.preventExtensions(obj)
Forbids the addition of new properties to the object.
Object.seal(obj)
Forbids adding/removing of properties. Sets configurable: false for all existing properties.
Object.freeze(obj)
Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
And also there are tests for them:

Object.isExtensible(obj)
Returns false if adding properties is forbidden, otherwise true.
Object.isSealed(obj)
Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
Object.isFrozen(obj)
Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.
These methods are rarely used in practice.



accessor properties
 They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.


Getters and setters
Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set:

let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};
The getter works when obj.propName is read, the setter – when it is assigned.

Accessor descriptors
Descriptors for accessor properties are different from those for data properties.

For accessor properties, there is no value or writable, but instead there are get and set functions.

That is, an accessor descriptor may have:

get – a function without arguments, that works when a property is read,
set – a function with one argument, that is called when the property is set,
enumerable – same as for data properties,
configurable – same as for data properties.

Smarter getters/setters
Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.



Prototypal inheritance
In programming, we often want to take something and extend it.

For instance, we have a user object with its properties and methods, and want to make admin and guest
 as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

Prototypal inheritance is a language feature that helps in that.

[[Prototype]]
In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), 
that is either null or references another object. That object is called “a prototype”:


When we read a property from object, and it’s missing, JavaScript automatically takes it from the
 prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study 
 many examples of such inheritance, as well as cooler language features built upon it.

The property [[Prototype]] is internal and hidden, but there are many ways to set it.

The property [[Prototype]] is internal and hidden, but there are many ways to set it.

One of them is to use the special name __proto__, like this:

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.

There are only two limitations:

The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
The value of __proto__ can be either an object or null. Other types are ignored.
Also it may be obvious, but still: there can be only one [[Prototype]]. An object may not inherit from two others.

Writing doesn’t use prototype
The prototype is only used for reading properties.

Write/delete operations work directly with the object.

this is not affected by prototypes at all.

No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

o, the setter call admin.fullName= uses admin as this, not user.

That is actually a super-important thing, because we may have a big object with many methods, and have objects that inherit from it. 
And when the inheriting objects run the inherited methods, they will modify only their own states, not the state of the big object.

Almost all other key/value-getting methods ignore inherited properties
Almost all other key/value-getting methods, such as Object.keys, Object.values and so on ignore inherited properties.

They only operate on the object itself. Properties from the prototype are not taken into account.


F.prototype
Remember, new objects can be created with a constructor function, like new F().

If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.


the example:

let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
Setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created, assign its [[Prototype]] to animal".

Default F.prototype, constructor property
Every function has the "prototype" property even if we don’t supply it.

The default "prototype" is an object with the only property constructor that points back to the function itself.

Like this:

function Rabbit() {}

/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

Everything is quite simple, just a few notes to make things clear:

The F.prototype property (don’t mistake it for [[Prototype]]) sets [[Prototype]] of new objects when new F() is called.
The value of F.prototype should be either an object or null: other values won’t work.
The "prototype" property only has such a special effect when set on a constructor function, and invoked with new.
On regular objects the prototype is nothing special:

let user = {
  name: "John",
  prototype: "Bla-bla" // no magic at all
};
By default all functions have F.prototype = { constructor: F }, so we can get the constructor of an object by accessing its "constructor" property.



Prototypes are global, so it’s easy to get a conflict. If two libraries add a method String.prototype.show, 
then one of them will be overwriting the method of the other.

So, generally, modifying a native prototype is considered a bad idea.

In modern programming, there is only one case where modifying native prototypes is approved. That’s polyfilling.


borrowing.
That’s when we take a method from one object and copy it into another

The __proto__ is considered outdated and somewhat deprecated (in browser-only part of the JavaScript standard).

The modern methods are:

Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.
These should be used instead of __proto__.

We can create an object without a prototype by Object.create(null). Such objects are used as “pure dictionaries”, 
they have no issues with "__proto__" as the key.

Class basic syntax
In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state
 (member variables) and implementations of behavior (member functions or methods).


Classes are a template for creating objects. They encapsulate data with code to work on that data. 

The “class” syntax
The basic syntax is:

class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// Usage:
let user = new User("John");
user.sayHi();



First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. 
So it’s not entirely the same as creating it manually.

The language checks for that property in a variety of places. For example, unlike a regular function, it must be called with new:

class User {
  constructor() {}
}

alert(typeof User); // function
User(); // Error: Class constructor User cannot be invoked without 'new'
Also, a string representation of a class constructor in most JavaScript engines starts with the “class…”

class User {
  constructor() {}
}

alert(User); // class User { ... }

Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".

That’s good, because if we for..in over an object, we usually don’t want its class methods.

Classes always use strict. All code inside the class construct is automatically in strict mode.

The important difference of class fields is that they are set on individual objects, not User.prototype:

class User {
  name = "John";
}

let user = new User();
alert(user.name); // John
alert(User.prototype.name); // undefined

The problem is called "losing this".

There are two approaches to fixing it, as discussed in the chapter Function binding:

Pass a wrapper-function, such as setTimeout(() => button.click(), 1000).
Bind the method to object, e.g. in the constructor.

The basic class syntax looks like this:

class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}
MyClass is technically a function (the one that we provide as constructor), while methods, getters and setters are written to MyClass.prototype.



The console. log() method outputs a message to the web console. 
The message may be a single string (with optional substitution values), or it may be any one or more JavaScript objects.


Class inheritance
Class inheritance is a way for one class to extend another class.

So we can create new functionality on top of the existing.


The syntax to extend another class is: class Child extends Parent.

Let’s create class Rabbit that inherits from Animal:

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!


Object of Rabbit class have access both to Rabbit methods, such as rabbit.hide(), 
and also to Animal methods, such as rabbit.run().

Internally, extends keyword works using the good old prototype mechanics. 
It sets Rabbit.prototype.[[Prototype]] to Animal.prototype. 
So, if a method is not found in Rabbit.prototype, JavaScript takes it from Animal.prototype.

As we can recall from the chapter Native prototypes, JavaScript itself uses prototypal inheritance for built-in objects. 
E.g. Date.prototype.[[Prototype]] is Object.prototype. That’s why dates have access to generic object methods.


Classes provide "super" keyword for that.

super.method(...) to call a parent method.
super(...) to call a parent constructor (inside our constructor only).


Arrow functions have no super
As was mentioned in the chapter Arrow functions revisited, arrow functions do not have super.

If accessed, it’s taken from the outer function. For instance:

class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
  }
}
The super in the arrow function is the same as in stop(), so it works as intended. If we specified a “regular” function here, there would be an error:

// Unexpected super
setTimeout(function() { super.stop() }, 1000);



Constructors in inheriting classes must call super(...), and (!) do it before using this.



In other words, the parent constructor always uses its own field value, not the overridden one.



JavaScript adds one more special internal property for functions: [[HomeObject]].

When a function is specified as a class or object method, its [[HomeObject]] property becomes that object.


As we’ve known before, generally functions are “free”, not bound to objects in JavaScript. 
So they can be copied between objects and called with another this.

The very existence of [[HomeObject]] violates that principle, because 
methods remember their objects. [[HomeObject]] can’t be changed, so this bond is forever.

The only place in the language where [[HomeObject]] is used – is super. 
So, if a method does not use super, then we can still consider it free and 
copy between objects. But with super things may go wrong


To extend a class: class Child extends Parent:
That means Child.prototype.__proto__ will be Parent.prototype, so methods are inherited.
When overriding a constructor:
We must call parent constructor as super() in Child constructor before using this.
When overriding another method:
We can use super.method() in a Child method to call Parent method.
Internals:
Methods remember their class/object in the internal [[HomeObject]] property. That’s how super resolves parent methods.
So it’s not safe to copy a method with super from one object to another.
Also:

Arrow functions don’t have their own this or super, so they transparently fit into the surrounding context.


Static properties and methods
We can also assign a method to the class function itself, not to its "prototype". Such methods are called static.

In a class, they are prepended by static keyword, like this:

class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true


tatic methods are used for the functionality that belongs to the class “as a whole”. It doesn’t relate to a concrete class instance.

For example, a method for comparison Article.compare(article1, article2) or a factory method Article.createTodays().

They are labeled by the word static in class declaration.

Static properties are used when we’d like to store class-level data, also not bound to an instance.

The syntax is:

class MyClass {
  static property = ...;

  static method() {
    ...
  }
}
Technically, static declaration is the same as assigning to the class itself:

MyClass.property = ...
MyClass.method = ...
Static properties and methods are inherited.

For class B extends A the prototype of the class B itself points to A: B.[[Prototype]] = A. So if a field is not found in B, the search continues in A.

Internal and external interface
In object-oriented programming, properties and methods are split into two groups:

Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
External interface – methods and properties, accessible also from outside the class.


In JavaScript, there are two types of object fields (properties and methods):

Public: accessible from anywhere. They comprise the external interface. Until now we were only using public properties and methods.
Private: accessible only from inside the class. These are for the internal interface.



In many other languages there also exist “protected” fields: accessible only from inside the class and 
those extending it (like private, but plus access from inheriting classes). They are also useful
 for the internal interface. They are in a sense more widespread than private ones, 
 because we usually want inheriting classes to gain access to them.

Protected fields are not implemented in JavaScript on the language level,
 but in practice they are very convenient, so they are emulated.


Protected properties are usually prefixed with an underscore _

Read-only “power”
For power property, let’s make it read-only. It sometimes happens that a
 property must be set at creation time only, and then never modified.


Protected fields are inherited
If we inherit class MegaMachine extends CoffeeMachine, then nothing prevents us from 
accessing this._waterAmount or this._power from the methods of the new class.

So protected fields are naturally inheritable. Unlike private ones that we’ll see below.

Private fields are not available as this[name]
Private fields are special.

As we know, usually we can access fields using this[name]:

class User {
  ...
  sayHi() {
    let fieldName = "name";
    alert(`Hello, ${this[fieldName]}`);
  }
}
With private fields that’s impossible: this['#name'] doesn’t work. That’s a syntax limitation to ensure privacy.

In terms of OOP, delimiting of the internal interface from the external one is called encapsulation.

It gives the following benefits:

Protection for users, so that they don’t shoot themselves in the foot
Imagine, there’s a team of developers using a coffee machine. It was made by the 
“Best CoffeeMachine” company, and works fine, but a protective cover was removed. So the internal interface is exposed.

All developers are civilized – they use the coffee machine as intended. 
But one of them, John, decided that he’s the smartest one, and made some tweaks in the coffee machine internals. 
So the coffee machine failed two days later.

That’s surely not John’s fault, but rather the person who removed the
 protective cover and let John do his manipulations.

The same in programming. If a user of a class will change things not 
intended to be changed from the outside – the consequences are unpredictable.

Supportable
The situation in programming is more complex than with a real-life coffee machine, 
because we don’t just buy it once. The code constantly undergoes development and improvement.

If we strictly delimit the internal interface, then the developer of the class can f
reely change its internal properties and methods, even without informing the users.

If you’re a developer of such class, it’s great to know that private methods can be safely renamed, t
heir parameters can be changed, and even removed, because no external code depends on them.

For users, when a new version comes out, it may be a total overhaul internally, but still simple to 
upgrade if the external interface is the same.

Hiding complexity
People adore using things that are simple. At least from outside. What’s inside is a different thing.

Programmers are not an exception.

It’s always convenient when implementation details are hidden, and a simple, well-documented external interface is available.

To hide an internal interface we use either protected or private properties:

Protected fields start with _. That’s a well-known convention, not enforced at the language level. 
Programmers should only access a field starting with _ from its class and classes inheriting from it.
Private fields start with #. JavaScript makes sure we can only access those from inside the class.
Right now, private fields are not well-supported among browsers, but can be polyfilled.


built-in classes are an exception. They don’t inherit statics from each other.
Important difference of inheritance between built-in objects compared to what we get with extends


Class checking: "instanceof"
The instanceof operator allows to check whether an object belongs to a certain class. 
It also takes inheritance into account.

Such a check may be necessary in many cases. For example, it can be used for building a
 polymorphic function, the one that treats arguments differently depending on their type

The syntax is:

obj instanceof Class
It returns true if obj belongs to the Class or a class inheriting from it.


Let’s summarize the type-checking methods that we know:

                                    works for	                        returns
typeof	                            primitives	                        string
			   
{}.toString	                        primitives, built-in objects, 
                                    objects with Symbol.toStringTag	    string
									
instanceof	                        objects	                            true/false

As we can see, {}.toString is technically a “more advanced” typeof.

And instanceof operator really shines when we are working with a class hierarchy and want to check
 for the class taking into account inheritance.


 mixin is a class containing methods that can be used by other classes without a need to inherit from it.
 
 
Mixin – is a generic object-oriented programming term: a class that contains methods for other classes.

Some other languages allow multiple inheritance. JavaScript does not support multiple inheritance, 
but mixins can be implemented by copying methods into prototype.

We can use mixins as a way to augment a class by adding multiple behaviors, 
like event-handling as we have seen above.

Mixins may become a point of conflict if they accidentally overwrite existing class methods. 
So generally one should think well about the naming methods of a mixin, to minimize the probability of that happening.


here’s a syntax construct try...catch that allows us to “catch” errors so the script can, instead of dying, do something more reasonable.

The “try…catch” syntax
The try...catch construct has two main blocks: try, and then catch:

try {

  // code...

} catch (err) {

  // error handling

try...catch only works for runtime errors

The errors that occur on the reading phase are called “parse-time” errors and 
are unrecoverable (from inside that code). That’s because the engine can’t understand the code.

try...catch works synchronously
If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it


The try...catch construct allows to handle runtime errors. It literally allows to “try” running the code and “catch” errors that may occur in it.

The syntax is:

try {
  // run this code
} catch (err) {
  // if an error happened, then jump here
  // err is the error object
} finally {
  // do in any case after try/catch
}
There may be no catch section or no finally, so shorter constructs try...catch and try...finally are also valid.

Error objects have following properties:

message – the human-readable error message.
name – the string with error name (error constructor name).
stack (non-standard, but well-supported) – the stack at the moment of error creation.

//If an error object is not needed, we can omit it by using catch { instead of catch (err) {.

We can also generate our own errors using the throw operator. Technically, the argument of throw 
can be anything, but usually it’s an error object inheriting from the built-in Error class. More on extending errors in the next chapter.

Rethrowing is a very important pattern of error handling: a catch block usually expects and
 knows how to handle the particular error type, so it should rethrow errors it doesn’t know.

Even if we don’t have try...catch, most environments allow us to setup a “global” error
 handler to catch errors that “fall out”. In-browser, that’s window.onerror.
 
 
 We can inherit from Error and other built-in error classes normally. We just need to take care of the name 
 property and don’t forget to call super.
We can use instanceof to check for particular errors. It also works with inheritance. But sometimes 
we have an error object coming from a 3rd-party
 library and there’s no easy way to get its class. Then name property can be used for such checks.
Wrapping exceptions is a widespread technique: a function handles low-level exceptions and creates
 higher-level errors instead of various low-level ones. Low-level exceptions sometimes become 
 properties of that object like err.cause in the examples above, but that’s not strictly required.
 
 
 PROMISES
 
 Promises allow us to do things in the natural order. First, we run loadScript(script), and .then we write what to do with the result.
 We can call .then on a Promise as many times as we want. Each time, we’re adding a new “fan”, a new subscribing function, 
 to the “subscription list”. More about this in the next chapter: Promises chaining.
 
 CALLBACK 
 
 We must have a callback function at our disposal when calling loadScript(script, callback). 
 In other words, we must know what to do with the result before loadScript is called.
 There can be only one callback
 
 So promises give us better code flow and flexibility
 
 
 If a .then (or catch/finally, doesn’t matter) handler returns a promise, the rest of the chain 
 waits until it settles. When it does, its result (or error) is passed further.
 
 .catch handles errors in promises of all kinds: be it a reject() call, or an error thrown in a handler.
We should place .catch exactly in places where we want to handle errors and know how to handle them. The handler should analyze errors 
(custom error classes help) and rethrow unknown ones (maybe they are programming mistakes).
It’s ok not to use .catch at all, if there’s no way to recover from an error.
In any case we should have the unhandledrejection event handler (for browsers, and analogs for other environments) 
to track unhandled errors and inform the user (and probably our server) about them, so that our app never “just dies”.

There are 6 static methods of Promise class:

Promise.all(promises) – waits for all promises to resolve and returns an array of their results. 
If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.
Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as an array of objects with:
status: "fulfilled" or "rejected"
value (if fulfilled) or reason (if rejected).
Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
Promise.any(promises) (recently added method) – waits for the first promise to fulfill, 
and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.
Promise.resolve(value) – makes a resolved promise with the given value.
Promise.reject(error) – makes a rejected promise with the given error.
Of all these, Promise.all is probably the most common in practice.


“Promisification” is a long word for a simple transformation. 
It’s the conversion of a function that accepts a callback into a function that returns a promise.


Promisification is a great approach, especially when you use async/await (see the next chapter), but not a total replacement for callbacks.

Remember, a promise may have only one result, but a callback may technically be called many times.

So promisification is only meant for functions that call the callback once. Further calls will be ignored.

Promise handling is always asynchronous, as all promise actions pass through the internal “promise jobs” queue, also called “microtask queue” (V8 term).

So .then/catch/finally handlers are always called after the current code is finished.

If we need to guarantee that a piece of code is executed after .then/catch/finally, we can add it into a chained .then call.

In most Javascript engines, including browsers and Node.js, the concept of microtasks is closely tied with the “event loop” and “macrotasks”.


Let’s start with the async keyword. It can be placed before a function, like this:

async function f() {
  return 1;
}
The word “async” before a function means one simple thing: a function always returns a promise

The syntax:

// works only inside async functions
let value = await promise;
The keyword await makes JavaScript wait until that promise settles and returns its result.


Can’t use await in regular functions
If we try to use await in a non-async function, there would be a syntax error:

function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}
We may get this error if we forget to put async before a function. As stated earlier, await only works inside an async function.

async/await works well with Promise.all
When we need to wait for multiple promises, we can wrap them in Promise.all and then await:

// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);
In the case of an error, it propagates as usual, from the failed promise to
 Promise.all, and then becomes an exception that we can catch using try..catch around the call.
 
 Generators
Regular functions return only one, single value (or nothing).

Generators can return (“yield”) multiple values, one after another, on-demand. 
They work great with iterables, allowing to create data streams with ease.

Generator functions
To create a generator, we need a special syntax construct: function*, so-called “generator function”.

It looks like this:

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}


Generators are created by generator functions function* f(…) {…}.
Inside generators (only) there exists a yield operator.
The outer code and the generator may exchange results via next/yield calls.
In modern JavaScript, generators are rarely used. But sometimes they come in handy, 
because the ability of a function to exchange data with the calling code during the execution
 is quite unique. And, surely, they are great for making iterable objects
 
 
 Here are all types of export that we covered in this and previous articles.

You can check yourself by reading them and recalling what they mean:

Before declaration of a class/function/…:
export [default] class/function/variable ...
Standalone export:
export {x [as y], ...}.
Re-export:
export {x [as y], ...} from "module"
export * from "module" (doesn’t re-export default).
export {default [as y]} from "module" (re-export default).
Import:

Importing named exports:
import {x [as y], ...} from "module"
Importing the default export:
import x from "module"
import {default as x} from "module"
Import all:
import * as obj from "module"
Import the module (its code runs), but do not assign any of its exports to variables:
import "module"
We can put import/export statements at the top or at the bottom of a script, that doesn’t matter.

So, technically this code is fine:

sayHi();

// ...

import {sayHi} from './say.js'; // import at the end of the file
In practice imports are usually at the start of the file, but that’s only for more convenience.

Please note that import/export statements don’t work if inside {...}.

A conditional import, like this, won’t work:

if (something) {
  import {sayHi} from "./say.js"; // Error: import must be at top level
}


Dynamic imports work in regular scripts, they don’t require script type="module".

Please note:
Although import() looks like a function call, it’s a special syntax that just happens to use parentheses (similar to super()).

So we can’t copy import to a variable or use call/apply with it. It’s not a function.

A Proxy object wraps another object and intercepts operations, like reading/writing properties and others, 
optionally handling them on its own, or transparently allowing the object to handle them.

Proxies are used in many libraries and some browser frameworks. We’ll see many practical applications in this article.

Proxy
The syntax:

let proxy = new Proxy(target, handler)
target – is an object to wrap, can be anything, including functions.
handler – proxy configuration: an object with “traps”, methods that intercept operations.
 – e.g. get trap for reading a property of target, set trap for writing a property into target, and so on.
 
 Proxy is a wrapper around an object, that forwards operations on it to the object, optionally trapping some of them.

It can wrap any kind of object, including classes and functions.

The syntax is:

let proxy = new Proxy(target, {
  /* traps */
});
…Then we should use proxy everywhere instead of target. A proxy doesn’t have its own properties or methods. 
It traps an operation if the trap is provided, otherwise forwards it to target object.

We can trap:

Reading (get), writing (set), deleting (deleteProperty) a property (even a non-existing one).
Calling a function (apply trap).
The new operator (construct trap).
Many other operations (the full list is at the beginning of the article and in the docs).
That allows us to create “virtual” properties and methods, implement default values, 
observable objects, function decorators and so much more.

We can also wrap an object multiple times in different proxies, decorating it with various aspects of functionality.

The Reflect API is designed to complement Proxy. For any Proxy trap, there’s a
 Reflect call with same arguments. We should use those to forward calls to target objects.

Proxies have some limitations:

Built-in objects have “internal slots”, access to those can’t be proxied. See the workaround above.
The same holds true for private class fields, as they are internally implemented using slots. 
So proxied method calls must have the target object as this to access them.
Object equality tests === can’t be intercepted.
Performance: benchmarks depend on an engine, but generally accessing a property using a simplest
 proxy takes a few times longer. In practice that only matters for some “bottleneck” objects though.
 
 If eval’ed code doesn’t use outer variables, please call eval as window.eval(...):

This way the code is executed in the global scope:

let x = 1;
{
  let x = 5;
  window.eval('alert(x)'); // 1 (global variable)
}

A call to eval(code) runs the string of code and returns the result of the last statement.

Rarely used in modern JavaScript, as there’s usually no need.
Can access outer local variables. That’s considered bad practice.
Instead, to eval the code in the global scope, use window.eval(code).
Or, if your code needs some data from the outer scope, use new Function and pass it as arguments.

Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

Currying doesn’t call a function. It just transforms it.

Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c).
 JavaScript implementations usually both keep the function callable normally and return the partial if the arguments count is not enough.

Currying allows us to easily get partials. As we’ve seen in the logging example, 
after currying the three argument universal function log(date, importance, message) gives us partials
 when called with one argument (like log(date)) or two arguments (like log(date, importance)).
 
 
 Reference Type is an internal type of the language.

Reading a property, such as with dot . in obj.method() returns not exactly the property value,
 but a special “reference type” value that stores both the property value and the object it was taken from.

That’s for the subsequent method call () to get the object and set this to it.

For all other operations, the reference type automatically becomes the property value (a function in our case).

The whole mechanics is hidden from our eyes. It only matters in subtle cases, 
such as when a method is obtained dynamically from the object, using an expression.

