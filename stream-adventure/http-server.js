const through = require('through2')
const http = require('http')

http.createServer((req, resp) => {
  if (req.method != 'POST') resp.end()
  req.pipe(through(function (buf, _, next) {
    this.push(buf.toString().toUpperCase())
    next()
  })).pipe(resp)
}).listen(process.argv[2])
