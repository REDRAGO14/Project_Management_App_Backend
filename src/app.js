import express from "express"
import cors from "cors"

const app = express()

app.get("/", (req, res)=>{
    res.send("welcome home")
})

app.get("/about", (req, res) =>{
    res.send("this is about")
})


export default app