import express from express 
import {config} from "dotenv"; 

config({path:"./config/config.env"});

export const app=express();
import router from './routes/paymentRoutes.js'
app.use("/api",paymentRoute) 