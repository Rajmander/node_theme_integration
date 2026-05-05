import express from "express";

const router = express.Router();

import multer from "multer";

const upload = multer({ dest: "uploads/" });

import {
  dashboard,
  login,
  users,
  usersData,
  addUser,
  createUser,
} from "../controllers/admin.controller.js";

router.get("/dashboard", dashboard);

router.get("/users", users);
router.post("/users", upload.single("avatar"), createUser);

router.get("/users/add", addUser);

// Authentication
router.get("/login", login);

router.get("/api/users", usersData);

export default router;
