const express=require("express")
const router=express.Router()
router.route("/home/:id").get((req,res,next)=>{
    res.status(200).json({
        data:"successfull",
        "ff":`${req.params}`
    })
})
module.exports=router