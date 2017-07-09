const curryN = (fn, n) => {
  n = n || fn.length
  return (arg) => {
    // call directly at the end
    if (n <= 1) return fn(arg)
    // bind will return a function specified first parameter with context
    return curryN(fn.bind(null, arg), n - 1)
  }
}

module.exports = curryN
