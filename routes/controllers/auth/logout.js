const { Router } = require("express")

const router = Router()

const logout = (appRouter) => {

  appRouter.use("/logout", router)
  router.get("/", (req, res, next) => {
    res.redirect("..")
  })

}




module.exports = logout