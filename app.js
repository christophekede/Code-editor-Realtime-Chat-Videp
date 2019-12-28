const app = require("express")()
const http = require("http")

const Mailer = require("./core/mailer/Mailer")
const appInit = require("./loaders")


const server = (app) => {

  appInit(app)
  const server = http.createServer(app)

  server.listen(3000, () => {
    console.log("Server is listening on port " + 3000)
  })

  const t = new Mailer()

  // t.sendMail("chris.kede@yahoo.fr", "hello", "test").then(data => { console.log(data) })

}

server(app)


