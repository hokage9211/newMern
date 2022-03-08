const express=require("express")
const router=express.Router()
router.route("/home").get((req,res,next)=>{
    res.status(200).json({
        data:"successfull"
    })
})
module.exports=router