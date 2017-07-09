// Actually I don't use function keyword for ES6 syntax :D
/*
module.exports = (arr, ...args) => {
  return Array.prototype.slice.apply(arr, args)
}
*/

// Offcial solution
// The context for Function is the function to be called
// Every function inherits from Function which has method bind, call, apply
module.exports = Function.call.bind(Array.prototype.slice)
