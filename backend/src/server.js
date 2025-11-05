import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// connectDB()

app.use(cors({
  origin: "http://localhost:5173"
}))

app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// app.use((req, res, next) => { // this is example of how middleware work
//     console.log(`A new request with method: ${req.method}, and URL: ${req.url}`)
//     next()
// })

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
