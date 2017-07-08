const checkUsersValid = goodUsers => {
  return checkedUsers => {
    return checkedUsers.every(checkedUser => {
      return goodUsers.some(goodUser => goodUser.id == checkedUser.id)
    })
  }
}

module.exports = checkUsersValid
