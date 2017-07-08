const countWords = words => {
  return words.reduce((countMap, word) => {
    countMap[word] = countMap[word] ? ++countMap[word] : 1
    // solution: countMap[word] = ++countMap[word] || 1
    // ++undefined -> NaN
    return countMap
  }, {})
}

module.exports = countWords
