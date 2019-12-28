const { Router } = require("express")

const router = Router()

const login = (appRouter) => {

  appRouter.use("/login", router)



  router.get("/", (req, res, next) => {


    return res.render("login", {})

  })

  router.post("/", (req, res, next) => {
    const user = "chris"

    res.redirect("..")

  })




}




module.exports = login