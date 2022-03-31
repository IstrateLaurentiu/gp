import mongoose, {Schema,Model} from "mongoose";
import { Profile,DbTable } from "../types";

const ProfileSchema: Schema<Profile> = new mongoose.Schema({
   user: {
    type: Schema.Types.ObjectId,
    ref:  DbTable.USER
   },
   description: {
       type: String,
       required: false
   }
});

export const ProfileModel: Model<Profile>  = mongoose.model(DbTable.PROFILE,ProfileSchema)