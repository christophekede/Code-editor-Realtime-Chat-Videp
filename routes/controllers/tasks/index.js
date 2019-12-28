const { Router } = require("express")

const router = Router()


const task = (appRouter) => {
  appRouter.use("/", router)

  router.get("/createTask", (req, res, next) => {
    res.redirect(`/task/${15}`)
  })
  router.get("/task/:id", (req, res, next) => {
    const id = req.params.id

    if (id && !isNaN(id)) {

      return res.render("task", { id })
    } else {
      let error = new Error("Not valid params")
      error.status = 400
      return next(error)
    }

  })




}

module.exports = task