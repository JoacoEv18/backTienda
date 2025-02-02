import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import cors from "cors";

import productsRoutes from "./routes/product.route.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __dirname = path.resolve();
 
app.use(express.json()); // nos permite aceptar datos json

app.use(cors());

/*     if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, "/front/dist")));
        app.get("*", (req, res) => {
            res.sendFile(path.resolve(__dirname, "front", "dist", "index.html"));
        });
    }; */

app.use("/api/products", productsRoutes)

app.listen(port, ()=>{
    connectDB();
    console.log(`Server started at http://localhost:${port}`); 
});