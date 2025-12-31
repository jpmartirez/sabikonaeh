import express from 'express'
import 'dotenv/config'
import axios from 'axios';
import apiRouter from './routes/apiRoute.js';
import cors from 'cors'

const app = express();


app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000;

app.use('/api/openai', apiRouter)

app.listen(PORT, () => {
    console.log("Server is listening to port 3000")
})