import express from "express";

const router = express.Router();

import multer from "multer";

const upload = multer({ dest: "uploads/" });

import { userSchema, userIdSchema } from "../config/validators/user.schema.js";
import { validate } from "../middlewares/validate.middleware.js";

import {
  dashboard,
  login,
  users,
  singleUser,
  usersData,
  addUser,
  createUser,
  editUser,
  updateUser,
  userDelete,
} from "../controllers/admin.controller.js";

router.get("/dashboard", dashboard);

router.get("/users/add", addUser);
router.get("/users/:id", userIdSchema, validate, singleUser);
router.delete("/users/:id", userDelete);
router.get("/users", users);
router.post("/usersUpdate", upload.single("avatar"), updateUser);

// Edit user
router.get("/edit-users/:id", editUser);

router.post(
  "/users",
  upload.single("avatar"),
  userSchema,
  validate,
  createUser,
);

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
 *
 *
 * 2xx success 200 GET, update, delete
 *
 * 200
 * 201
 * 204
 *
 *
 * 4xx client errors
 * 400
 * 401
 * 403
 * 404
 * 409
 * 422
 * 429 Too many requests
 *
 * 5xx server errors
 */
