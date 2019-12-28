const { Router } = require("express")

const router = Router()


const contact = (appRouter) => {
  appRouter.use("/contact", router)

  router.get("/", (req, res, next) => {
    res.render("contact", { title: "Contact" })
  })


  router.post("/", (req, res, next) => {
    res.render("thankYou", { title: "Contact" })
  })



}



module.exports = contact;

