import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { buildSingleError } from "../core/errorBuilder/ErrorBuilder";

interface JwtPayload {
  user: Record<string, string>;
}
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json(buildSingleError("No token; authorization denied"));
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json(buildSingleError("Token not valid"));
  }
};
