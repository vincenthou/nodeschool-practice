const logger = namespace => {
  return (...args) => {
    console.log.apply(console, [namespace].concat(args))
  } 
}

module.exports = logger
