const app = require("express")()
const appInit = require("./loaders")
const http = require("http")


const server = (app)=>{

  appInit(app)
  const server = http.createServer(app)

  server.listen(3000, ()=>{
    console.log("Server is listening on port "+3000)
  })



}

server(app)


