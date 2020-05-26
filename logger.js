const EventEmitter = require('events')

let url = 'http://logger.io/log'

class Logger extends EventEmitter {
    // function log(message) { // we dont need 'function' keyword
    //     // Send an Http request
    //     console.log(message)
    // }

    log(message) { // this is method because all function inside class called method
        // Send an Http request
        console.log(message)

        this.emit('messageLogged', { // use this
            id: 1,
            url: 'https://'
        })
    }
}

// Export the class
module.exports = Logger