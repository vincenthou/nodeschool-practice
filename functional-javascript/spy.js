const Spy = (target, method) => {
  let spy = {count: 0}
  const oldMethod = target[method]
  target[method] = (...args) => {
    spy.count++
    // As arrow function is used, apply context should be target rather than this
    return oldMethod.apply(target, args)
  }
  return spy
}

module.exports = Spy
