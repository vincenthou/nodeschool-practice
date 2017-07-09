/*
const repeat = (operation, times) => {
  if (times <= 0) return
  setTimeout(operation, 100)
  return repeat(operation, --times)
}
*/


const repeat = (operation, times) => {
  if (times <= 0) return
  operation()
  // Release the burden of call stack
  setTimeout(() => repeat(operation, --times))
}

// Official solution
/*
const repeat = (operation, times) => {
  if (times <= 0) return
  operation()
  if (times % 10) {
    repeat(operation, --times)
  } else {
    setTimeout(() => repeat(operation, --times))
  }
}
*/

module.exports = repeat
