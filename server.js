const express=require("express")
// const logger=require("./middleware/logger")
// instance d'express
const app=express()


// middleware
app.use(express.json())


// app.use(logger)

// app.use(express.static(__dirname+"/public"))


// route
// app.get("/",(req,res)=>{
//     res.send("home page")
// })
// app.get("/about",(req,res)=>{
//     res.send("about page")
// })
// app.get("/" ,(req,res)=>{
    
//     res.sendFile(__dirname +"/public/index.html")
//     // C:\Users\maison info\Desktop\ws-expresss\public\index
// })

// app.get("/about",(req,res)=>{
//     res.sendFile(__dirname +"/public/products.html")
// })

// app.get("*",(req,res)=>{
//     res.send("ressource not found")
// })
// app.get("/css/style.css",(req,res)=>{
//     res.sendFile(__dirname+"/public/css/style.css" )
// })
// app.get("/css/style2.css",(req,res)=>{
//     res.sendFile(__dirname+"/public/css/style.css" )
// })


// routes
app.use("/api/users",require("./routes/api/users"))


// port
const port=5000
app.listen(port,err=>{
    err?console.log(err) : console.log(`server is running on port ${port}`) 
})