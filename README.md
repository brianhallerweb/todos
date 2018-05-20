## Todos app

### An example for my reference of a full stack application written with the MERN stack and deployed on Heroku.

#### Overview of React, ReactDOM, Webpack, and Babel

React, ReactDOM, Webpack, and Babel work together to create single page web apps. They interact in many ways but the short story is this: Babel transpiles JSX into ES5 Javascript with React methods. ReactDOM injects React code into the DOM through a single HTML page. Webpack is primarily a module bundler that works with Babel to bundle react components into one Javascript file (loaded with one script tag in the HTML file) made available in a public folder. Webpack is also used to set up a convenient Node development environment with tools like a development server.

#### Class based components and functional components

The major difference between class based components and functional components is that class-based components have state and access to component lifecycle methods. Functional components take in props as an argument and simply return JSX. This app provides examples of both.

#### Downward data flow

React components are arranged in a hierarchical fashion where parent components can only pass props downward to children. However, parents can pass functions as props that impact the state of the parent component. This effectively allows for 2 way data flow. The <AddTodo /> component provides a good example of this technique.

#### Component lifecycle methods

A components lifecycle includes mounting, updating, and unmounting. There are many methods that can fire at different times of this cycle but the most commonly used ones are componentDidMount, componentDidUpdate, constructor, and render. A common use of these methods is rendering data fetched from a database with componentDidMount or adding new data to a database with componentDidUpdate. It is worth nothing that these methods simply need to be declared, not called. React will call them at the correct times.

#### Rendering a list and the special behavior of arrays

Since rendering lists of data is so common in web apps, JSX supports arrays in an interesting way. It automatically renders the elements side by side, excluding the square brackets and the commas. This behavior makes creating a list of data very easy because it allows for mapping over an array data, creating new list item components in the process, and having them automatically rendered from the new array that is returned from map. If that isn't clear, just look at how my todo list is rendered.

#### 3 techniques for conditional rendering

1.  Use functions that either return JSX or undefined: When these functions are called, the jsx will either render properly or nothing will render at all. JSX doesn't render anything at all for falsy values.
2.  Use a ternary operator: Since ternary operators are so concise they work well when placed inside curly brackets within JSX.
3.  Use logical AND: Logical AND (&&) can be used like a ternary without needing to have an "else" condition. When the first condition is true, the second condition will render. When the first condition is false, nothing will render. This is surprising behavior. You would ordinary think that logical AND would only ever return true or false. It does return false when either condition is false. However, it doesn't return true when both conditions are true - it returns the second condition.

#### setState and the previous state

The preferred syntax for setState uses a callback with prevState as an argument. The reason for prevState is so that the new state can be safely based on the old state.

#### Forms

Forms have many convenient features for submitting data but they also require remembering to use the onSubmit attribute, preventing default POST behavior, and using the name attribute of input fields to access their data. Also, remember to trim the input strings to eliminate bugs that arrise from beginning or ending white space.

#### Event handlers and "this" binding

Event handlers are a common place where functions lose their "this" binding. The problem comes from the execution context of the event handler. To fix the problem, you simply have to remember to .bind(this) whenever assigning a function to an event handler or passing a function to a child component as props.

#### An approach to styling

This app has uses scss to create style modules, including a settings module that stores color and text size variables. There is one style.scss file that imports all the individual scss modules and itself is imported into the root react component. The modules follow the BEM naming convention. BEM stands for block element modifier. The block is the entire scss component. The element is some individual html element inside the block. A modifier is a sub element inside the element. Although scss supports nested code, the BEM naming convention is preferred for readability.
