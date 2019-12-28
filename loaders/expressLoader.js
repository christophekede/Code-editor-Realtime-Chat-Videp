
const cors = require("cors")
const bodyParser = require("body-parser")
const routes = require("../routes")



// console.log(routes(""))
const expressLoader = (app) =>{

  app.set("view engine", "hbs")

  app.use(cors())
    // parse various different custom JSON types as JSON
  app.use(bodyParser.json());

  app.use("/", routes())

  app.use((req, res, next)=>{
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


module.exports =  expressLoader