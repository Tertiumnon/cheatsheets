# NodeJS

## Installation

### Install on Ubuntu

- [Install on Ubuntu](https://github.com/nodesource/distributions/blob/master/README.md)

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install -y nodejs
```

## Q&A

### Pros & Cons

Pros:

- Non-blocking operations

Cons:

- Is not suitable for CPU-intensive tasks

### V8

Instead of employing an interpreter, V8 converts JavaScript code into more efficient machine code to increase performance. It turns JavaScript code into machine code during execution by utilizing a JIT (Just-In-Time) compiler.

### JIT compiler

### Threads

Node.js is single-threaded by default. However, it utilizes event-driven architecture and non-blocking I/O operations to handle multiple concurrent requests efficiently, enabling scalability and high performance in applications.

### Thread Pool, Libuv, I/O operations

A thread pool is a collection of threads that are used to execute tasks in parallel. In Node.js, the thread pool is handled by the libuv library, which is a multi-platform support library that provides asynchronous I/O operations.

### Event

### Event-driven architecture

### EventEmitter

*EventEmitter* is a class that holds all the objects that can emit events.

### Control Flow

*Control flow* in Node.js refers to the sequence in which statements and functions are executed. It manages the order of execution, handling asynchronous operations, callbacks, and error handling to ensure smooth program flow.

### Event Loop

The event loop in Node.js is a mechanism that allows it to handle multiple asynchronous tasks concurrently within a single thread. It continuously listens for events and executes associated callback functions.

### Worker processes

### REPL

REPL stands for Read Eval Print Loop, and it represents a computer environment. It’s similar to a Windows console or Unix/Linux shell in which a command is entered. Then, the system responds with an output.

- Read
- Eval
- Print
- Loop

### Demultiplexer

### API function types

- *Asynchronous*, non-blocking functions
- *Synchronous*, blocking functions

### Streams

### Stream types

- *Readable* – Used for reading operations
- *Writable* − Used for write operations
- *Duplex* − Can be used for both reading and write operations
- *Transform* − A type of duplex stream where the output is computed based on input

### Methods: process.nextTick(), setImmediate() and setTimeout()

- *process.nextTick()* postpones the execution of action until the next pass around the event loop, or it simply calls the callback function once the event loop's current execution is complete
- *setTimeout()* setTimeout() method schedules code execution after a specified delay, measured in milliseconds
- *setImmediate()* executes a callback on the next cycle of the event loop and returns control to the event loop for any I/O operations. setImmediate() has a higher priority than setTimeout().

### Methods: fork() and spawn()

- *fork()* is a particular case of spawn() that generates a new instance of a V8 engine. Multiple workers run on a single node code base for multiple tasks.
- *spawn()* launches a new process with the available set of commands. This method doesn’t generate a new V8 instance, and only a single copy of the node module is active on the processor.

### Methods: async.queue()

*async.queue()* returns a queue object which is capable of concurrent processing i.e processing multiple items at a single time.

The first parameter is executed on the element (function) added to the queue. The second parameter tells the queue, the number of elements to be processed at a particular time.

### Methods: console.time(), console.timeEnd() and performance.now()

The *console.time* and *console.timeEnd* methods allow you to measure the duration of a block of code. The console.time method is used to start the timer and the console.timeEnd method is used to stop the timer and log the duration to the console.

The *performance.now* method provides a more precise way to measure the duration of async operations. It returns the current timestamp in milliseconds, which can be used to calculate the duration of a task.

### Piping

*Piping* is a mechanism used to connect the output of one stream to another stream. It is normally used to retrieve data from one stream and pass output to another stream.

### Middleware

Middleware is the function that works between the request and the response cycle. Middleware gets executed after the server receives the request and before the controller sends the response.

### Flags used in the read/write operations in files

- r
- r+
- w
- w+
- a
- a+

### Test Pyramid

- Unit tests
- Integration tests
- E2E tests

### Callback-hell

### Promise vs Async/Await
