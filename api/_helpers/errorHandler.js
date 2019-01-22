const HandledError = require('./error')

module.exports = res => err => {
  if (err instanceof HandledError) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(err)
    }
    return res.status(400).json({
      error: err.message
    })
  }

  console.error(err)
  return res.status(500).json({
    error: 'Unknown error happened'
  })
}
