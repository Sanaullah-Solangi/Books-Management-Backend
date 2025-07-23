import express from "express";
import cors from "cors";
import morgan from "morgan";
import env from "dotenv/config";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import connectDB from "./config/db.js";
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);
app.listen(42000, () => {
  connectDB();
  console.log("Server is running at 42000");
});
