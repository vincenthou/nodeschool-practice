function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}
//const end = done => done()
const through = require('through2')
//const stream = through(write, end)
//process.stdin.pipe(stream).pipe(process.stdout)
process.stdin.pipe(through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase())
  next()
})).pipe(process.stdout)
