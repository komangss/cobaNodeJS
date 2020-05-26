// lot of node core functionality is based on this consept of event,
// this A signal that something has happened

const EventEmitter = require('events') // noted here, the first letter of every variable name is uppercase, this indicate EventEmitter is class

// before we use method in EventEmitter, we need to instance the class
const emitter = new EventEmitter() // this is object(instance of that class)

// then we can use all the method in documentation in emitter

// emit mean is = Making a noise, produce - signaling. that event has added?

// Register a listener
emitter.on('messageLogged', (arg) => { // or e, or event // use arrow function // feature in ES6
    console.log('listener called', arg)
}) // pretty same like in jquery

// Raise an event
emitter.emit('messageLogged', { // object
    id: 1,
    url: 'https://'
})
// Return = listener called  { id: 1, url: 'https://' }