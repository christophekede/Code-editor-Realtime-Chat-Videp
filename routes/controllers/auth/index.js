const login = require("./login")
const logout = require("./logout")


const auth = (appRouter) => {

  login(appRouter)
  logout(appRouter)

}


module.exports = auth


