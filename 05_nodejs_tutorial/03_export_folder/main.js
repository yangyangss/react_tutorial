
const m = require('./module')
console.log(m)

// 注意， 如果package.json 这个文件不存在， 那么会尝试倒入文件夹下的index.js 和 index.json, 如果还没找到， 就会报错