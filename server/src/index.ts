import express from 'express'
import route from './routes'
import { AppDataSource } from './data-source'
const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'
app.use(cookieParser())


app.use(express.json())
import dotenv from 'dotenv'
dotenv.config({ path: "./.env" })


AppDataSource.initialize()
    .then(() => console.log("PostgreSQL connection established successfully."))
    .catch((err) => console.log(err))

app.use(cors({
    origin: "*",
    credentials: true
}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use("/", route)
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Express running on port ${PORT}.`)
})



