const EventEmitter = require('events') 
const emitter = new EventEmitter()
let url = 'http://logger.io/log'

function log(message) {
    // Send an Http request
    console.log(message)
    
}

emitter.emit('messageLogged', { // object
    id: 1,
    url: 'https://'
})

// this create export object module

// if we need to export just function
module.exports = log
