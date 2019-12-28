const health = require("./controllers/appHealth/health")
const {Router} = require("express")



const routes  = () => {

  const appRouter = Router()

  health(appRouter)

  return appRouter

  }


module.exports = routes