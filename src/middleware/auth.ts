import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  user: Record<string,string>
}
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "No token; authorization denied" });
  }

  try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;
      req.user = decoded.user;
      next();
  } catch (err) {
      res.status(401).json({msg: 'Token not valid'});
  }
};
