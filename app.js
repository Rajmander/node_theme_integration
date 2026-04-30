import express from "express";
import path from "path";

import expressLayouts from "express-ejs-layouts";

const app = express();

import adminRoutes from "./routes/admin.routes.js";

app.set("view engine", "ejs");

app.set("views", path.join(process.cwd(), "views"));

app.use(expressLayouts);
app.set("layout", "layouts/admin"); // default layout

app.use(express.static(path.join(process.cwd(), "public")));

const PORT = 9000;

app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
