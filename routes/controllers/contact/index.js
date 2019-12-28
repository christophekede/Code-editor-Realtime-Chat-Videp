const { Router } = require("express")
const Mailer = require("../../../core/mailer/Mailer")


const router = Router()


const contact = (appRouter) => {
  appRouter.use("/contact", router)

  router.get("/", (req, res, next) => {
    res.render("contact", { title: "Contact" })
  })


  router.post("/", (req, res, next) => {
    const mailer = new Mailer()
    const { name, email, message } = req.body
    return res.render("thankYou")
    return res.render("thankYou", { title: "Contact" })
    // mailer.sendMail(email, "Contact", message)
    //   .then(data => {
    //     return res.render("thankYou", { title: "Contact" })
    //   }).catch(err => {
    //     let error = new Error("Service non disponible")
    //     error.status = 400
    //     next(error)
    //   })


  })



}



module.exports = contact;

