import { User } from "../models/User"; // optional if you have a User type

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: string;
        organization: string;
        [key: string]: any; // optional if you want flexibility
      };
    }
  }
}
