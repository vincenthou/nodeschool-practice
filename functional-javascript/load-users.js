const loadUsers = (userIds, load, done) => {
  let completed = 0;
  let users = [];
  // Use forEach rather than for loop to avoid create clousure to cache
  // id for each async function
  usersId.forEach((userId) => {
    load(userId, (user) => {
      users.push(loadedUser)
      completed++
      if (completed === userIds.length) done(users)
    })
  })
}

module.exports = loadUsers
