module.exports = {
  namedError: (name) => {
    const error = new Error()
    error.name = name
    return error
  },
}
