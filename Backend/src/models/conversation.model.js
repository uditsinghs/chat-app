import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import { Message } from "./messages.model.js";
const conversationSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Message,
        default:[]
      },
    ],
  },
  { timestamps: true }
);

export const Conversation = mongoose.model("Conversation", conversationSchema);
