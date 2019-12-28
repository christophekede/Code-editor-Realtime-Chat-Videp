const { Router } = require("express")
const { isAuth } = require("../../middlewares")

const router = Router()

const home = (appRouter) => {

  appRouter.use("/", router)

  router.get("/", isAuth, (req, res) => {
    res.render("index", { title: "chris" })
  })


}


module.exports = home
