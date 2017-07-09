/*
const arrayMap = (arr, fn) => {
  return arr.reduce((mappedArr, item, index) => {
    mappedArr[index] = fn(item)
    return mappedArr
  }, [])
}
*/

// Official solution which can specify the context for callback
const arrayMap = (arr, fn, thisArg) => {
  return arr.reduce((acc, cur, idx, arr) => {
    acc.push(fn(thisArg, cur, idx, arr))
    return acc
  }, [])
}

module.exports = arrayMap
