import { check } from "express-validator";

const loginSchema = [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ]

export default loginSchema;

