<!-- // JSX Rules. JSX Rules!

// JSX is more strict than HTML. There are few rules to keep in mind
// when using JSX. -->

  <!-- Rule #1

  All tags must be closed. There are two ways to close a tag.

  * Use two tags (an open tag and a close tag - as with <div>...</div>)
  * Use one self closing tag (as with <Album/> below). -->

<div>
  <img>
    <Album />
</div>;

<!-- 
The unclosed <img> tag above produces the following error:
SyntaxError: /src/index.js Expected corresponding JSX closing tag for <img> -->

<!-- Rule #2
A child tag must close before its parent. We are creating a tree structure. So the last one is open is the next one to close.
-->

<div>
  <ul>
    <li>
    </ul>
  </li>
</div>

<!-- These incorrectly nested tags produce the following error:
SyntaxError: /src/index.js Expected JSX closing tag for <li>
>


<!-- Rule #3
All JSX expressions must result in one root level element. A function can only return one value. A component defined using a JavaScript function so the sames rules. 
>
<!-- Good: -->
return (
  <div>
    <input />
  </div>
)

/* becomes */

return React.createElement("div", null, React.createElement("input", null))

<!--> becomes -->

return React.createElement("div", null, React.createElement("input, null))

<!-- Bad: -->
return (
  <div>
  </div>
  <input />
)

/* becomes? */

return (
  React.createElement("div", null)
  React.createElement("input", null)
)

/* Nope. Functions can't return multiple values like that. */
These adjacent JSX elements produce the following error.
SyntaxError: Adjacent JSX elements must be wrapped in an eclosing tag. Did you want a JSX fragment.

<!-- Rule #4 -->
<!-- No HTML comments -->
return (
  <div>
    <!--- Not allowed --->
    {/* Allowed */}
  </div>
)


<!-- Summary

JSX is a powerful language that allows us to declare how an interface looks. It is not a template language but it shares the declarative benefits of one.

We can take any JSX expression and render it to DOM using ReactDOM.render. Normally this is done once for an application. An expression must be valid so it important to follow the JSX rules:

  1. All tags must be closed.
  2. A child tag must close before its parent.
  3. All JSX expressions must result in one root level element.
  4. No HTML comments.
>