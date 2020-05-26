// node have few useful module build in node
// check in documentation = https://nodejs.org/dist/latest-v12.x/docs/api/

// example fs (filesystem), http (later we learn abouth this), os (work in operating system), path, etc
const path = require('path') // dont use ./ or ../ // node will think that was file

let pathObj = path.parse(__filename)
console.log(pathObj)
// return =
// {
//     root: 'C:\\',
//     dir: 'C:\\xampp\\htdocs\\cobaNodeJS',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
//   }