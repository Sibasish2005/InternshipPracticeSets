// 10. How does setTimeout work with the event loop?
// Registers a timer for the given delay.

// Continues executing the current code.

// When the delay is over, the callback is put into the task queue (also called callback queue).

// The event loop checks if the call stack is empty.

// If it's empty, the event loop pushes the callback from the task queue to the call stack and executes it.

setTimeout(() => {
    console.log("hello");
    
}, 1000);