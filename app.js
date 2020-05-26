const EventEmitter = require('events') 
const emitter = new EventEmitter()

emitter.on('messageLogged', (arg) => {
    console.log('listener called', arg)
}) // this will not called, because we have 2 diferent EventEmitter (variabel on top)

// load the logger module and called the log function
const log = require('./logger')
log('message')