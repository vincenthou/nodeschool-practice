const getDependencies = (tree, depVersions) => {
  // use depVersions paranto share data between recursion
  depVersions = depVersions || []
  //if (!tree || !tree.dependencies || !tree.dependencies.length) return []
  let dependencies = tree && tree.dependencies || []
  Object.keys(dependencies).forEach((dep) => {
    depVersion = dep + '@' + tree.dependencies[dep].version
    if (depVersions.indexOf(depVersion) == -1) {
      depVersions.push(depVersion)
    }
    getDependencies(tree.dependencies[dep], depVersions)
  })
  return depVersions.sort()
}

module.exports = getDependencies
