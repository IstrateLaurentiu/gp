import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import bycrypt from "bcryptjs";
import userSchemaValidation from "../core/schemaValidations/userSchema";
import { validationResult } from "express-validator";
import { UserRepository } from "../repositories/UserRepository";
import { UserModel } from "../core/models";

const userRouter = Router();
const userRepository = new UserRepository(UserModel);

userRouter.post(
  "/",
  userSchemaValidation,
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      let user = await userRepository.findOneByCondition({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      const salt = await bycrypt.genSalt(10);

      let newPassword = await bycrypt.hash(password, salt);
      const newUser = await userRepository.create({
        name,
        email,
        password: newPassword,
      });

      const payload = {
        user: {
          id: newUser.id,
        },
      };

      jwt.sign(
        payload,
        process.env.TOKEN_SECRET!,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          return res.status(201).send({ token });
        }
      );
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
);

export default userRouter;
