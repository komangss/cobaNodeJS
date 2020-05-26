const fs = require('fs')

// look we have synchronous and asynchronous method. always use asynchronous method


const files = fs.readdirSync('./') // synchronous // return all files in current folder
console.log(files)
// return = 
// [ '.git', 'app.js', 'logger.js' ]

// Asynchronous
// node will call the function (second parameter) when the asynchronous operation is completed
// fs.readdir('./', function(err, files) { // we call this function = callback // this function have 2 parameters
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// })
// return Result [ '.git', 'app.js', 'logger.js' ]

// lets say we have an error
fs.readdir('$', function(err, files) { // we call this function = callback // this function have 2 parameters
    if (err) console.log('Error', err);
    else console.log('Result', files);
})
// return = 
// Error [Error: ENOENT: no such file or directory, scandir 'C:\xampp\htdocs\cobaNo
// deJS\$'] {
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'scandir',
//   path: 'C:\\xampp\\htdocs\\cobaNodeJS\\$'
// }

