import express from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
import logger from "./src/utils/logger.js"
import connectDB from "./src/config/db.js"
import errorHandler from "./src/middleware/errorHandler.js"

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())
app.use(helmet())

//connect DB
connectDB()

//routes


//using our handler
app.use(errorHandler)

//Running port
const port = process.env.PORT || 1000

app.listen(port, () => {
    logger.info(`Running blog-service : ${port}`);
})