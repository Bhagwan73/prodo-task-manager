import express from 'express'
import route from './routes'
import { AppDataSource } from './data-source'
const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'
app.use(cookieParser())
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))

app.use(express.json())
import dotenv from 'dotenv'
dotenv.config({ path: "./.env" })


AppDataSource.initialize()
    .then(() => console.log("PostgreSQL connection established successfully."))
    .catch((err) => console.log(err))

app.use("/", route)
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Express running on port ${PORT}.`)
})



