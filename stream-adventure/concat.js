const concat = require('concat-stream')

process.stdin.pipe(concat((buf) => {
  let reversedStr = buf.toString().split('').reverse().join('')
  console.log(reversedStr)
}))
