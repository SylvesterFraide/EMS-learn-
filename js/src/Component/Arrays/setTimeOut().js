export const SetTimeout = () => {
  //     setTimeout() in JavaScript
  // Last Updated : 29 Nov, 2024
  // The setTimeout() function is used to add delay or scheduling the execution of a
  // specific function after a certain period. It's a key feature of both browser
  //  environments and Node.js, enabling asynchronous behavior in code execution.
  // setTimeout(function() {
  //     console.log('Hello, world!');
  // }, 2000);
  // Output
  // Hello, world!
  // Syntax
  // setTimeout(function, delay, arg1, arg2, ...);
  // Parameters
  // function: After the specified time period, this is the function that is executed.
  // milliseconds: The delay time is expressed in milliseconds.
  // arg1, arg2, ...: If needed, these are the optional parameters.
  // 1. Cancellation the setTimeout() Function
  // JavaScript provides a corresponding function called clearTimeout() to cancel a
  // scheduled timeout before it gets executed.
  // function delayedFunction() {
  //     console.log("This won't be executed due to clearTimeout");
  // }
  // let timeoutId = setTimeout(delayedFunction, 2000);
  // // Cancel the setTimeout before it executes
  // clearTimeout(timeoutId);
  // console.log("Timeout canceled");
  // Output
  // Timeout canceled
  // 2. Purpose of setTimeout() Function
  // The setTimeout() function is utilized to introduce a delay or to execute a
  //  particular function after a specified amount of time has passed. It is part of
  //  the Web APIs provided by browsers and Node.js, allowing asynchronous execution of code.
  // console.log("Start");
  // setTimeout(function() {
  //     console.log("Delayed log after 2000 milliseconds");
  // }, 2000);
  // console.log("End");
  // Output
  // Start
  // End
  // Delayed log after 2000 milliseconds
  // Explanation
  // The setTimeout() function takes two parameters: a callback function and a time delay in milliseconds.
  // In the example, after the initial "Start" and "End" logs, the setTimeout() is set to execute the
  //  callback function (delayed log) after 2000 milliseconds (2 seconds).
  // The rest of the code continues executing without waiting for the delay, demonstrating the asynchronous
  //  nature of setTimeout().
  // After the specified delay, the callback function is invoked, resulting in the "Delayed log after 2000
  //  milliseconds" message being logged to the console.
  // Use Cases
  // Delaying Execution: It can be used to introduce delays in code execution, useful for scenarios like animations,
  // timed events, or deferred operations.
  // Asynchronous Operations: When combined with callback functions, it facilitates asynchronous behavior,
  // enabling non-blocking code execution.
  // Timeouts in Web Development: It's commonly employed in web development for handling timeouts, such as
  // showing a notification after a certain time or refreshing content.

  setTimeout(() => {
    console.log("This will be executed after 2 seconds");
  }, 2000);

};
