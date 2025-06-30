// 10. How does setInterval work with the event loop?
// How setImmediate Works
// 1. Event Loop Phases: Node.js event loop has several phases, including:
//     - Timers: handles timer callbacks
//     - Pending callbacks: handles I/O callbacks
//     - Idle, prepare: internal use only
//     - Poll: retrieves new I/O events
//     - Check: handles setImmediate callbacks
//     - Close callbacks: handles close events
// 2. setImmediate: When you call setImmediate, Node.js schedules the callback function to be executed in the next iteration of the event loop, but before the next poll phase.
// 3. Execution: When the event loop reaches the check phase, it executes the callbacks scheduled by setImmediate.

// Key Characteristics
// - Immediate Execution: setImmediate executes the callback function as soon as possible, but not immediately. It's scheduled for the next iteration of the event loop.
// - Before I/O Events: setImmediate callbacks are executed before the next poll phase, which means they take priority over I/O events.