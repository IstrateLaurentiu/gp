import mongoose, { Schema, Model } from "mongoose";
import { Post, DbTable, Color, ProductType } from "../types";

const PostSchema: Schema<Post> = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: DbTable.USER,
  },
  type: {
    type: String,
    enum: ProductType,
    required: true,
  },
  amount: {
    type: Number,
    min: 0,
    required: true,
  },
  isPublic: {
    type: Boolean,
  },
  color: {
    type: String,
    enum: Color
  },
});
export const PostModel: Model<Post> = mongoose.model(DbTable.POSTS, PostSchema);
