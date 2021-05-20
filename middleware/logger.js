
const logger=(req,res,next)=>{
    
    if(5<4){
        next()
    }
    else{
        console.table({method:req.method,path:req.url})
        res.send("oups")
    }
}

module.exports=logger