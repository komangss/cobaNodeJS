// try to access log function in logger.js
// remember when console log the module we have an object called exports

// Load a module
const logger = require('./logger') // if in same folder // use constant because we dont want to replace the variable
// console.log(logger);
// Return = 
// { log: [Function: log] }

// now we can use log function
logger.log('Hello World')
// Return = 
// Hello World