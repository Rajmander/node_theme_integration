import express from "express";

const router = express.Router();

import { dashboard, login, users } from "../controllers/admin.controller.js";

// load dashboard
router.get("/dashboard", dashboard);
router.get("/users", users);

router.get("/login", login);

export default router;
