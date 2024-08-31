import express from 'express';
import { connectDb } from './config/db.js';
// import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import admin from 'firebase-admin';
import serviceAccount from './config/food-del-3bf6f-firebase-adminsdk-b6vpv-637983329b.json' assert {type: 'json'};

// app config
const app = express();
const port = 4000;
const __dirname = 'server/index.html'

// dbConnection
connectDb();

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// middleware
app.use(express.json());
// app.use(cors);

// api endpoints
app.use("/api/user", userRouter)

app.get("/", (request, response) => {
    response.send("API Working")
});

app.listen(port, () => { console.log(`Server Started on http://localhost:${port}`) })