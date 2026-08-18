import dotenv from "dotenv"
import path from "path"
import app from "./app.js"

dotenv.config({
   path: path.resolve(process.cwd(), ".env")
})  

let port = process.env.PORT || 3000



app.listen(port, ()=>{
   console.log( `server is listening on http://localhost:${port}`);
})
