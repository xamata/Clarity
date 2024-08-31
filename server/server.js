import express from 'express';
import { connectDb } from './config/db.js';
// import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import admin from 'firebase-admin';
import serviceAccount from './config/food-del-3bf6f-firebase-adminsdk-b6vpv-637983329b.json' assert {type: 'json'};
import path from 'path';
import { fileURLToPath } from 'url';

// app config
const app = express();
const port = 4000;

// Get the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// dbConnection
connectDb();

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// middleware
app.use(express.json());

// Define the route for the root path
app.get('/', (req, res) => {
    // Serve the index.html file from the 'server' directory
    res.sendFile(path.join(__dirname, 'index.html'));
});


// api endpoints
app.use("/api/user", userRouter)

// app.get('/', function (req, res) { res.sendFile(path.join(__dirname, 'index.html')); })

app.listen(port, () => { console.log(`Server Started on http://localhost:${port}`) })
