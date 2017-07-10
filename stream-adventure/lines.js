// It will also works for `echo -e 'one\ntwo\nthree' | node lines.js` with split module
const split = require('split')
const through = require('through2')

const transform = () => { 
  let lineCount = 0
  return through(function(line, _, next){
    line = line.toString()
    line = lineCount % 2 ? line.toUpperCase() : line.toLowerCase()
    lineCount++
    // As split use \n to split lines, we need to reconstruct it
    this.push(line + '\n')
    next()
  })
}

// if the buffer arrives 
//process.stdin.pipe(transform()).pipe(process.stdout)
process.stdin
       .pipe(split()) // it seems that split also use partial apply function to cache something as I did with lineCount
       .pipe(transform())
       .pipe(process.stdout)
