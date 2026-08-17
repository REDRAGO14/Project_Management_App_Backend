import dotenv from "dotenv"
import path from "path"
import express from "express"

dotenv.config({
   path: path.resolve(process.cwd(), ".env")
})  

let port = process.env.PORT || 3000
let app = express()

app.get("/", (req, res)=>{
    res.send("welcome home")
})

app.get("/about", (req, res) =>{
    res.send("this is about")
})


app.listen(port, ()=>{
   console.log( `server is listening on http://localhost:${port}`);
})
