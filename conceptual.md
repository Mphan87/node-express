### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?


callbacks, which allow you to provide functions to call once the asynchronous method has finished running; promises, which allow you to chain methods together; and async/await keywords,


- What is a Promise?

A promise is simply a placeholder for an asynchronous task which is yet to be completed


- What are the differences between an async function and a regular function?


 The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains



- What is the difference between Node.js and Express.js?


NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.


- What is the error-first callback pattern?


The error-first pattern consists of executing a function when the asynchronous operation ends (such as an incoming AJAX response) which takes as first argument an error, if one occurred, and the result of the request as extra arguments.


- What is middleware?


It is code that runs in the middle of the request / response cycle!
In Express, middleware are functions that get access to the req and res objects and can also call the next function.
express.json() is an example of middleware
Our 404 and global error handler are example of middleware


- What does the `next` function do?

The next() method returns an object with two properties done and value . You can also provide a parameter to the next method to send a value to the generator


- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)


Needs to return a JSON
Needs to use axios
Need to use a loop or map to gather the data for ellie matt and joel
Should start with a empty array and push the data into the array




```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
