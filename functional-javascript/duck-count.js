/*
In ES6 arguments will be undefined in arraw function, use rest parameter instead
const duckCount = (...args) => {
  return args.reduce((sum, arg) => {
    return sum + (Object.prototype.hasOwnProperty.call(arg, 'quack') ? 1 : 0)
  }, 0)
}
*/

// Official solution

function duckCount() {
  // Or use Array.from(arguments) or [].slice.call(arguments)
  // or Array.prototype.slice.call(arguments)
  return [...arguments].filter(arg => Object.prototype.hasOwnProperty.call(arg, 'quack')).length
}

module.exports = duckCount
