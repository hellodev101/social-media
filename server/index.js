import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

// Initialization of Express: The application is created using express().
const app = express()

// Middleware Setup: The body-parser middleware is used to handle JSON and URL-encoded data.
app.use(bodyParser.json({limit: "32mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}))
// CORS Configuration: The cors middleware is applied to allow cross
app.use(cors())

// Import Post Route. Every Rounter is going to start with /posts/
app.use('/posts', postRoutes)


const CONNECTION_URL = "mongodb+srv://sudoku:op0IyCW2kp02jUkc@cluster0.zgz7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
    .catch(err => console.log(err.message))
