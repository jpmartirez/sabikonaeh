import express from 'express'
import 'dotenv/config'
import axios from 'axios';
import apiRouter from './routes/apiRoute.js';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())

app.use('/api/openai', apiRouter)

app.listen(3000, () => {
    console.log("Server is listening to port 3000")
})