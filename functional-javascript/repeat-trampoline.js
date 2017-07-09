const repeatFn = (operation, times) => {
  // return function to make call stack pop directly just like tranmpoline
  // rather than use recursive to pop until all the call stacks pushed
  return () => {
    if (times <= 0) return
    operation()
    return repeatFn(operation, --times)
  }
}

const trampoline = (fn) => {
  while(fn && typeof fn === 'function') {
    fn = fn()
  }
}

module.exports = (operation, times) => {
  trampoline(() => {
    return repeatFn(operation, times)
  })
}
