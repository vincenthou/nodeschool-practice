const trumpet = require('trumpet')
const through = require('through2')
const tr = trumpet()
// pick partial stream
const upperStream = tr.select('.loud').createStream()
// transform the stream data and write back
upperStream.pipe(through(function (buf, _, next){
  this.push(buf.toString().toUpperCase())
  next()
})).pipe(upperStream)

process.stdin
       .pipe(tr)
       .pipe(process.stdout)
