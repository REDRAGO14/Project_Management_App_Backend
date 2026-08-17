import dotenv from "dotenv"
import path from "path"

dotenv.config({
    path: path.resolve(process.cwd(), ".env")
})

let userName = process.env.name
console.log("start of the backend");
console.log("USER: ", userName);
