

const isAuth = (req, res, next) => {
  const authenticated = true

  if (authenticated) return next()
  let error = new Error("not auth")
  error.status = 400
  res.redirect("/login")
}

module.exports = isAuth


