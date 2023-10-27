import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import db from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectsRoute.js";
import documentRoutes from "./routes/documentRoute.js";

//configuring dotenv
dotenv.config();

//importing db
db();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

//path for getting data from database
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/documentation", documentRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`.white.underline.bold);
});
