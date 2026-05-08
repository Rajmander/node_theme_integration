import express from "express";
import path from "path";

import nodemailer from "nodemailer";

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

app.post("/sendEmail/", async (req, res, next) => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4f4a7c10f2c04d",
      pass: "65f1a81c4e7ddb",
    },
  });

  const mailOptions = {
    from: "test@example.com",
    to: "rajmandersinghmatharu@gmail.com",
    subject: "Test Email from Node.js",
    html: ` <div style="font-family: Arial, sans-serif; line-height:1.6;">
        <h2 style="color:#4CAF50;">Hello John Doe!</h2>
        <p>Thank you for signing up on our platform. Your account has been successfully created.</p>
        <h3>Account Details:</h3>
        <ul>
          <li><strong>Username:</strong> johndoe</li>
          <li><strong>Email:</strong> john@example.com</li>
        </ul>
        <p style="color:#555;">If you didn’t sign up, please ignore this email.</p>
        <hr>
        <p style="font-size: 0.9em; color:#888;">&copy; 2026 My Company. All rights reserved.</p>
      </div>`,
  };
  let info = await transporter.sendMail(mailOptions);
  console.log("Email sent: " + info.messageId);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
