const { Router } = require("express")

const health = require("./controllers/appHealth/health")
const contact = require("./controllers/contact")




const routes = () => {

  const appRouter = Router()
  appRouter.get("/", (req, res) => {
    res.render("index", { title: "chris" })
  })

  health(appRouter)
  contact(appRouter)

  return appRouter

}


module.exports = routes