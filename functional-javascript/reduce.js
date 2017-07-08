/*
const reduce = (arr, fn, init) => {
  if (!arr.length) return init
  // arr.length is not correct here
  init = fn(init, arr[0], arr.length, arr)
  return reduce(arr.slice(1), fn, init)
}
*/

// Official solution
const reduce = (arr, fn, init) => {
  return (function reduceOnce(index, value){
    if (index > arr.length - 1) return value
    return reduceOnce(index + 1, fn(value, arr[index], index, arr))
  }(0, init))
}

module.exports = reduce
