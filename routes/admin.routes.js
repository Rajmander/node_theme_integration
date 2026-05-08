import express from "express";

const router = express.Router();

import multer from "multer";

const upload = multer({ dest: "uploads/" });

import { userSchema } from "../config/validators/user.schema.js";
import { validate } from "../middlewares/validate.middleware.js";

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
router.post(
  "/users",
  upload.single("avatar"),
  userSchema,
  validate,
  createUser,
);

router.get("/users/add", addUser);

// Authentication
router.get("/login", login);

router.get("/api/users", usersData);

export default router;

/**
 * auth.schema.js
 * user.schema.js
 * product.schema.js
 *
 * trim()
 * notEmpty()
 * withMessage()
 * isLength({min: 40, max: 89})
 * withMessage()
 * isMobilePhone("en-IN")
 * withMessage()
 *
 * /^[6-9]\d{9}$/
 */
