const { Router } = require("express")

const health = require("./controllers/appHealth/health")
const contact = require("./controllers/contact")
const auth = require("./controllers/auth")
const home = require("./controllers/home")
const task = require("./controllers/tasks")



const routes = () => {

  const appRouter = Router()

  auth(appRouter)
  health(appRouter)
  contact(appRouter)
  home(appRouter)
  task(appRouter)

  return appRouter

}


module.exports = routes