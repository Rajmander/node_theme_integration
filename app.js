import express from "express";
import path from "path";

import morgan from "morgan";

import expressLayouts from "express-ejs-layouts";

const app = express();

import adminRoutes from "./routes/admin.routes.js";

import { dbConnect } from "./config/db.js";

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.set("views", path.join(process.cwd(), "views"));

app.use(expressLayouts);

app.use(morgan("dev"));

app.set("layout", "layouts/admin"); // default layout

app.use(express.static(path.join(process.cwd(), "public")));

const PORT = 9000;

app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
