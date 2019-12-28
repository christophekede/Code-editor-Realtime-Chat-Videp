const health = require("./controllers/appHealth/health")
const { Router } = require("express")



const routes = () => {

  const appRouter = Router()
  appRouter.get("/", (req, res) => {
    res.render("index", { title: "chris" })
  })

  health(appRouter)

  return appRouter

}


module.exports = routes