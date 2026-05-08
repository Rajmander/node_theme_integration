import { body, param } from "express-validator";

export const userSchema = [
  body("username").trim().notEmpty().withMessage("Username is required"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Invalid email address"),
  body("mobile")
    .trim()
    .notEmpty()
    .withMessage("Mobile is required")
    .bail()
    .matches(/^[6-9]\d{9}$/)
    .withMessage("Invalid mobile number")
    .normalizeEmail(),
];

export const userIdSchema = [
  param("id").isMongoId().withMessage("Invalid user id"),
];

/**
 * trim()
 * notEmpty()
 * withMessage()
 * bail()
 * isLength()
 * matches()
 *
 *
 *
 *
 *
 *
 */
