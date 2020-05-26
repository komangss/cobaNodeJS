const EventEmitter = require('events')

// load the logger module and called the log function
const Logger = require('./logger') // this is class
const logger = new Logger()

logger.on('messageLogged', (arg) => {
    console.log('listener called', arg)
})

logger.log('message')
// Return =
// message
// listener called { id: 1, url: 'https://' }
