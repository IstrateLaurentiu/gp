import mongoose, {Schema,Model} from "mongoose";
import { User, DbTable } from "../types";

const UserSchema: Schema<User> = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const UserModel: Model<User>  = mongoose.model(DbTable.USER,UserSchema)