# Clean Code

## Intro
In this reading, we will cover the fundamentals of clean code and good code style. 

You are expected to use the following resources as a guideline for good code style in all of your projects. 

Your understanding and execution of good code style and best coding practices are a big part of every project evaluation in this course.

## JS Style Guide

  - Read up to section 7 of this JS Style Guide (https://github.com/airbnb/javascript)


### 1. Primitives

When you access a primitive type you work directly on its value.

  - string
  - number
  - boolean
  - null
  - undefined
  - symbol
  - bigint


 Ex: 

    const foo = 1;
    let bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9

### 2. Complex
When you access a complex type you work on a reference to its value:

  - object
  - array
  - function

Ex:

    const foo = [1, 2];
    const bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9


## References

### 1. Const for All References

Why? This ensures you cannot reassign your references, which can lead to bugs and difficult to comprehend code.

  // bad

    var a = 1;
    var b = 2;

  // good

    const a = 1;
    const b = 2;

### 2. Reassign Using Let

Why? let is block-scoped rather than function scoped like var.

// bad

    var count = 1;
    if (true) {
      count += 1;
    }

// good, use the let.

    let count = 1;
    if (true) {
      count += 1;
    }

## Objects

### 1. Use Literal Syntax for Object Creation:

// bad

    const item = new Object();

// good

    const item = {};

### 2. Use Computed Property Names when Creating Objects with Dynamic Property Names

Why? They allow you to define all the properties of an object in one place.


    function getKey(k) {
      return `a key named ${k}`;
    }

    // bad
    const obj = {
      id: 5,
      name: 'San Francisco',
    };
    obj[getKey('enabled')] = true;

    // good
    const obj = {
      id: 5,
      name: 'San Francisco',
      [getKey('enabled')]: true,
    };

### 3. Use Object Method Shorthand:
// bad

    const atom = {
      value: 1,

      addValue: function (value) {
        return atom.value + value;
      },
    };

// good

    const atom = {
      value: 1,

      addValue(value) {
        return atom.value + value;
      },
    };

### 4. Use Property Value Shorthand:
Why? It is shorter and descriptive:


const lukeSkywalker = 'Luke Skywalker';

// bad

    const obj = {
      lukeSkywalker: lukeSkywalker,
    };

// good

    const obj = {
      lukeSkywalker,
    };

### 5. Group Your Shorthand Properties at the Beginning of Your Object Declaration:
Why? It’s easier to tell which properties are using the shorthand.


    const anakinSkywalker = 'Anakin Skywalker';
    const lukeSkywalker = 'Luke Skywalker';

// bad

    const obj = {
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      lukeSkywalker,
      episodeThree: 3,
      mayTheFourth: 4,
      anakinSkywalker,
    };

// good

    const obj = {
      lukeSkywalker,
      anakinSkywalker,
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      episodeThree: 3,
      mayTheFourth: 4,
    };

### 6. Only Quote Properties that are Valid Identifiers:
Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

// bad

    const bad = {
      'foo': 3,
      'bar': 4,
      'data-blah': 5,
    };

// good

    const good = {
      foo: 3,
      bar: 4,
      'data-blah': 5,
    };

### 7.  Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf:

Why? These methods may be shadowed by properties on the object in question - consider { hasOwnProperty: false } - or, the object may be a null object (Object.create(null)). 

In modern browsers that support ES2022, or with a polyfill such as https://npmjs.com/object.hasown, Object.hasOwn can also be used as an alternative to Object.prototype.hasOwnProperty.call.

    // bad
    console.log(object.hasOwnProperty(key));

    // good
    console.log(Object.prototype.hasOwnProperty.call(object, key));

    // better
    const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
    console.log(has.call(object, key));

    // best
    console.log(Object.hasOwn(object, key)); // only supported in browsers that support ES2022

    /* or */
    import has from 'has'; // https://www.npmjs.com/package/has
    console.log(has(object, key));
    /* or */
    console.log(Object.hasOwn(object, key)); // https://www.npmjs.com/package/object.hasown

### 8. Prefer the object spread syntax over Object.assign to shallow-copy objects:

Use the object rest parameter syntax to get a new object with certain properties omitted: 

    // very bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
    delete copy.a; // so does this

    // bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

    // good
    const original = { a: 1, b: 2 };
    const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

    const { a, ...noA } = copy; // noA => { b: 2, c: 3 }

## Arrays

### 1. Use Literal Syntax for Array Creation:

    // bad
    const items = new Array();

    // good
    const items = [];

### 2. Use Array.push Instead of Direct Assignment to Add Items to an Array:

    const someStack = [];

    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');

### 3. Use Array Spreads to Copy Arrays:

    // bad
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i += 1) {
      itemsCopy[i] = items[i];
    }

    // good
    const itemsCopy = [...items];

### 4. Use Array Spreads to Convert an Iterable Object to an Array (instead of Array.from):

    const foo = document.querySelectorAll('.foo');

    // good
    const nodes = Array.from(foo);

    // best
    const nodes = [...foo];

### 5. Use Array.from for Converting an Array-Like Object to an Array:

    const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

    // bad
    const arr = Array.prototype.slice.call(arrLike);

    // good
    const arr = Array.from(arrLike);

### 6. Use Array.from for Mapping over iterables

Why? It avoids creating an intermediate array.

    // bad
    const baz = [...foo].map(bar);

    // good
    const baz = Array.from(foo, bar);

### 7. Use Return Statements in Array Method Callbacks: 

It’s ok to omit the return if the function body consists of a single statement returning an expression without side effects, following 8.2. eslint: array-callback-return

    // good
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });

    // good
    [1, 2, 3].map((x) => x + 1);

    // bad - no returned value means `acc` becomes undefined after the first iteration
    [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
      const flatten = acc.concat(item);
    });

    // good
    [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
      const flatten = acc.concat(item);
      return flatten;
    });

    // bad
    inbox.filter((msg) => {
      const { subject, author } = msg;
      if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
      } else {
        return false;
      }
    });

    // good
    inbox.filter((msg) => {
      const { subject, author } = msg;
      if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
      }

      return false;
    });

4.8 Use Line Breaks After Opening Array Brackets and Before Closing Array Brackets, if an Array has Multiple Lines:


    // bad
    const arr = [
      [0, 1], [2, 3], [4, 5],
    ];

    const objectInArray = [{
      id: 1,
    }, {
      id: 2,
    }];

    const numberInArray = [
      1, 2,
    ];

    // good
    const arr = [[0, 1], [2, 3], [4, 5]];

    const objectInArray = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    const numberInArray = [
      1,
      2,
    ];


## Destructing:

### 1. Use Object Destructuring When Accessing and Using Multple Propeties of an Object:

Why? Destructuring saves you from creating temporary references for those properties, and from repetitive access of the object. 

Repeating object access creates more repetitive code, requires more reading, and creates more opportunities for mistakes. 

Destructuring objects also provides a single site of definition of the object structure that is used in the block, rather than requiring reading the entire block to determine what is used.

    // bad
    function getFullName(user) {
      const firstName = user.firstName;
      const lastName = user.lastName;

      return `${firstName} ${lastName}`;
    }

    // good
    function getFullName(user) {
      const { firstName, lastName } = user;
      return `${firstName} ${lastName}`;
    }

    // best
    function getFullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    }

### 2. Use Array Destructuring:

    const arr = [1, 2, 3, 4];

    // bad
    const first = arr[0];
    const second = arr[1];

    // good
    const [first, second] = arr;

### 3. Use Object Destructuring for Multiple Return Values, Not Array Destructuring:

Why? You can add new properties over time or change the order of things without breaking call sites.

    // bad
    function processInput(input) {
      // then a miracle occurs
      return [left, right, top, bottom];
    }

    // the caller needs to think about the order of return data
    const [left, __, top] = processInput(input);

    // good
    function processInput(input) {
      // then a miracle occurs
      return { left, right, top, bottom };
    }

    // the caller selects only the data they need
    const { left, top } = processInput(input);

## Strings

### 1. Use Single Quotes '' for Strings:

    // bad
    const name = "Capt. Janeway";

    // bad - template literals should contain interpolation or newlines
    const name = `Capt. Janeway`;

    // good
    const name = 'Capt. Janeway';

## 2. Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.

Why? Broken strings are painful to work with and make code less searchable.

    // bad
    const errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // bad
    const errorMessage = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';

    // good
    const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

### 3. When programmatically building up strings, use template strings instead of concatenation.

Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

    // bad
    function sayHi(name) {
      return 'How are you, ' + name + '?';
    }

    // bad
    function sayHi(name) {
      return ['How are you, ', name, '?'].join();
    }

    // bad
    function sayHi(name) {
      return `How are you, ${ name }?`;
    }

    // good
    function sayHi(name) {
      return `How are you, ${name}?`;
    }

### 4. Never use eval() on a string; it opens too many vulnerabilities.

### 5. Do not unnecessarily escape characters in strings.

Why? Backslashes harm readability, thus they should only be present when necessary.

    // bad
    const foo = '\'this\' \i\s \"quoted\"';

    // good
    const foo = '\'this\' is "quoted"';
    const foo = `my name is '${name}'`;
    ⬆ back to top

## Functions

### 1. Use named function expressions instead of function declarations.

Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. 

If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! 

Don’t forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable (which is often the case in modern browsers or when using compilers such as Babel).

This eliminates any assumptions made about the Error’s call stack. (Discussion)

    // bad
    function foo() {
      // ...
    }

    // bad
    const foo = function () {
      // ...
    };

    // good
    // lexical name distinguished from the variable-referenced invocation(s)
    const short = function longUniqueMoreDescriptiveLexicalFoo() {
      // ...
    };

### 2. Wrap immediately invoked function expressions in parentheses.

Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. 

Note that in a world with modules everywhere, you almost never need an IIFE.

    // immediately-invoked function expression (IIFE)
    (function () {
      console.log('Welcome to the Internet. Please follow me.');
    }());

### 3. Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead. 

Browsers will allow you to do it, but they all interpret it differently, which is bad news bears. eslint: no-loop-func

### 4. Note: ECMA-262 defines a block as a list of statements. A function declaration is not a statement.

    // bad
    if (currentUser) {
      function test() {
        console.log('Nope.');
      }
    }

    // good
    let test;
    if (currentUser) {
      test = () => {
        console.log('Yup.');
      };
    }

### 5. Never name a parameter arguments. This will take precedence over the arguments object that is given to every function scope.

    // bad
    function foo(name, options, arguments) {
      // ...
    }

    // good
    function foo(name, options, args) {
      // ...
    }

### 6. Never use arguments, opt to use rest syntax ... instead.

Why? ... is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like arguments.

    // bad
    function concatenateAll() {
      const args = Array.prototype.slice.call(arguments);
      return args.join('');
    }

    // good
    function concatenateAll(...args) {
      return args.join('');
    }
### 7. Use default parameter syntax rather than mutating function arguments.

    // really bad
    function handleThings(opts) {
      // No! We shouldn’t mutate function arguments.
      // Double bad: if opts is falsy it'll be set to an object which may
      // be what you want but it can introduce subtle bugs.
      opts = opts || {};
      // ...
    }

    // still bad
    function handleThings(opts) {
      if (opts === void 0) {
        opts = {};
      }
      // ...
    }

    // good
    function handleThings(opts = {}) {
      // ...
    }

### 8. Avoid side effects with default parameters.

Why? They are confusing to reason about.

    let b = 1;
    // bad
    function count(a = b++) {
      console.log(a);
    }
    count();  // 1
    count();  // 2
    count(3); // 3
    count();  // 3

### 9. Always put default parameters last.

    // bad
    function handleThings(opts = {}, name) {
      // ...
    }

    // good
    function handleThings(name, opts = {}) {
      // ...
    }

### 10. Never use the Function constructor to create a new function.

Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities.

    // bad
    const add = new Function('a', 'b', 'return a + b');

    // still bad
    const subtract = Function('a', 'b', 'return a - b');

### 11. Spacing in a function signature. eslint: space-before-function-paren space-before-blocks

Why? Consistency is good, and you shouldn’t have to add or remove a space when adding or removing a name.

    // bad
    const f = function(){};
    const g = function (){};
    const h = function() {};

    // good
    const x = function () {};
    const y = function a() {};

### 12. Never mutate parameters.

Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

    // bad
    function f1(obj) {
      obj.key = 1;
    }

    // good
    function f2(obj) {
      const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
    }

### 13. Never reassign parameters.

Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the arguments object. It can also cause optimization issues, especially in V8.

    // bad
    function f1(a) {
      a = 1;
      // ...
    }

    function f2(a) {
      if (!a) { a = 1; }
      // ...
    }

    // good
    function f3(a) {
      const b = a || 1;
      // ...
    }

    function f4(a = 1) {
      // ...
    }

### 14. Prefer the use of the spread syntax ... to call variadic functions.

Why? It’s cleaner, you don’t need to supply a context, and you can not easily compose new with apply.

    // bad
    const x = [1, 2, 3, 4, 5];
    console.log.apply(console, x);

    // good
    const x = [1, 2, 3, 4, 5];
    console.log(...x);

    // bad
    new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

    // good
    new Date(...[2016, 8, 5]);

### 15. Functions with multiline signatures, or invocations, should be indented just like every other multiline list in this guide: with each item on a line by itself, with a trailing comma on the last item.

    // bad
    function foo(bar,
                baz,
                quux) {
      // ...
    }

    // good
    function foo(
      bar,
      baz,
      quux,
    ) {
      // ...
    }

    // bad
    console.log(foo,
      bar,
      baz);

    // good
    console.log(
      foo,
      bar,
      baz,
    );

