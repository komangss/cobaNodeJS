let url = 'http://logger.io/log'

function log(message) {
    // Send an Http request
    console.log(message)
    
}

// this create export object module
module.exports.log = log
// module.exports.endPoint = url