import { check } from "express-validator";
import { Color, ProductType } from "../types";

export const createPostSchemaValidation = [
  check("type", "Type is required")
    .not()
    .isEmpty()
    .isIn(Object.values(ProductType)),
  check("amount", "Please include an amount").isNumeric(),
  check("color", "The selected color can't be used yet. Try green, beige or blue").isIn(Object.values(Color)),
  check("isPublic","isPublic is not boolean").isBoolean()
];

export const putPostSchemaValidation = [...createPostSchemaValidation, check("isPublic", "isPublic is undefined").isBoolean()];
