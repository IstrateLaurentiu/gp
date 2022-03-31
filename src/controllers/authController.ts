import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import bycrypt from "bcryptjs";
import { authMiddleware } from "../middleware/auth";
import loginSchema from "../core/schemaValidations/loginSchema";
import { UserRepository } from "../repositories/UserRepository";
import { UserModel } from "../core/models";

const authRouter = Router();

const userRepository = new UserRepository(UserModel);

authRouter.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const user = await userRepository.findOne(req.user?.id, "-password");
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

authRouter.post("/", loginSchema, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  try {
    let user = await userRepository.findOneByCondition({ email });
    const isMatch = await bycrypt.compare(password, user?.password!);
    if (!user || !isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.TOKEN_SECRET!,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;

        res.send({ token, user });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default authRouter;
