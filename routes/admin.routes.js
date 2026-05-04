import express from "express";

const router = express.Router();

import {
  dashboard,
  login,
  users,
  usersData,
} from "../controllers/admin.controller.js";

router.get("/dashboard", dashboard);

router.get("/users", users);

// Authentication
router.get("/login", login);

router.get("/api/users", usersData);

export default router;
