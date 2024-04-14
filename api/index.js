import express from 'express';
import mongoose from "mongoose";
import dotenv from "nodemon";

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(r => {
        console.log('Connected to MongoDB');
    })
    .catch(e => {
        console.log('Error while connecting to MongoDB');
    });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});