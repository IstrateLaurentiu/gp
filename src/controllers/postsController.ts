import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import { authMiddleware } from "../middleware/auth";
import {
  putPostSchemaValidation,
  createPostSchemaValidation,
} from "../core/schemaValidations/postSchema";
import { PostRepository } from "../repositories/PostRepository";
import { PostModel } from "../core/models";
import {
  buildSingleError,
  ErrorBuilder,
} from "../core/errorBuilder/ErrorBuilder";

const postsRouter = Router();

const postRepository = new PostRepository(PostModel);

postsRouter.get("/me", authMiddleware, async (req: Request, res: Response) => {
  try {
    const posts = await postRepository.find(
      {
        user: req.user?.id,
      },
      "-password"
    );
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send(buildSingleError("Something went wrong"));
  }
});

postsRouter.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const posts = await postRepository.findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send(buildSingleError("Something went wrong"));
  }
});

//auth and get token
postsRouter.post(
  "/",
  authMiddleware,
  createPostSchemaValidation,
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { amount, type, color, isPublic } = req.body;

    if (amount <= 0) {
      return res.status(400).send(buildSingleError("Amount is negative or 0"));
    }

    try {
      const post = await postRepository.create({
        amount,
        type,
        color,
        user: req?.user?.id,
        isPublic
      });

      res.status(201).send(post);
    } catch (err) {
      console.error(err);
      res.status(500).send(buildSingleError("Something went wrong is negative"));
    }
  }
);

//auth and get token
postsRouter.put(
  "/:id",
  authMiddleware,
  putPostSchemaValidation,
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json(new ErrorBuilder({ errors: errors.array() }).errorInstance);
    }
    const { amount, type, color, isPublic } = req.body;

    if (amount <= 0) {
      return res.status(400).send(buildSingleError("Amount is negative or 0"));
    }

    try {
      const post = await postRepository.update(req.params.id, {
        amount,
        type,
        color,
        isPublic,
        user: req?.user?.id,
      });

      res.status(200).send(post);
    } catch (err) {
      console.error(err);
      res.status(500).send(buildSingleError("Something went wrong"));
    }
  }
);

postsRouter.delete(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const isDeleted = await postRepository.delete(req.params.id);

      res.status(200).send(isDeleted);
    } catch (err) {
      console.error(err);
      res.status(500).send(buildSingleError("Something went wrong"));
    }
  }
);

export default postsRouter;
