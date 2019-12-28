
const cors = require("cors")
const bodyParser = require("body-parser")
const hbs = require("hbs")
const path = require('path')

const routes = require("../routes")
const config = require("../config")


// console.log(routes(""))
const expressLoader = (app) => {

  //setting view engine
  app.set("views", config.app.getViewsUrl())
  app.set("view engine", "hbs")
  app.set("view options", { layout: path.join("layouts", "mainLayout") })

  hbs.registerPartials(path.join(app.get("views"), "partials"))

  app.use(cors())
  // parse various different custom JSON types as JSON
  app.use(bodyParser.json());


  app.use("/", routes())

  app.use((req, res, next) => {
    let err = new Error("not found")
    err.status = 404
    return next(err)
  })

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });



}


module.exports = expressLoader