import { check } from "express-validator";
import { Color, ProductType } from "../types";

export const createPostSchemaValidation = [
  check("type", "Type is required")
    .not()
    .isEmpty()
    .isIn(Object.values(ProductType)),
  check("amount", "Please include an amount").isNumeric(),
  check("color", "Color does not match").isIn(Object.values(Color)),
];

export const putPostSchemaValidation = [...createPostSchemaValidation, check("isPublic", "isPublic is undefined").isBoolean()];
