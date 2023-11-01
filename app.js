import express  from "express";
import morgan from "morgan";
import cors from "cors"

const app = express()

app.use(cors())
app.get("/", (req, res)=>{
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.send("api is running..");
})
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

export default app
