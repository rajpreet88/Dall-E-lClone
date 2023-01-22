import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config();

const app = express();

app.use(cors()); //middleware
app.use(express.json({ limit: '50mb' })); //middleware
app.use('/api/v1/post', postRoutes); //postRoutes middleware
app.use('/api/v1/dalle', dalleRoutes); //dalleRoutes middleware

app.get('/', async (req, res) => {
    res.send('Hello from DALL-E')
})

// console.log(process.env.MONGODB_URL);

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8888, () => {
            console.log("The server is listening on http://localhost:8888")
        })
    } catch (err) {
        console.log(err);
    }

}

startServer();