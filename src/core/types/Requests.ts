import { Request } from "express"
import { User } from "./Models"
export interface IGetUserAuthInfoRequest extends Request {
  user: User
}