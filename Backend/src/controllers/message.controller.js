import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/messages.model.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body; // message getting from body
    const { id: receiverId } = req.params; // jisko message send krna hai uski id
    const senderId = req.user._id; //currently login user --sender
    // check is there chat before
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    // if not chat before then create chat between receiver and sender
    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
      });
    }
    // send mesage
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    // save message id in messages array of id's---
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // save in parallely in database
    await Promise.all([conversation.save(), newMessage.save()]); // run parallel
    res.status(200).json({
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
      error,
    });
  }
};

// get Message
export const getMessage = async (req, res) => {
  try {
    const { id: chatUser } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, chatUser] },
    }).populate("messages");
    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;
    res.status(200).json({ messages });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal server error" + error,
    });
  }
};
