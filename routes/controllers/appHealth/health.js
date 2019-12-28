const express = require("express")
const router = express.Router()


const health = (app) =>{
 


  app.use("/health", router)

  router.get("/", (req, res)=>{
    console.log("ress")
    return res.status(200).json({health:"ok"})
  })

}

















module.exports=  health