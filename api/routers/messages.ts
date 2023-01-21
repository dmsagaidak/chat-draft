import express from "express";
import fileDb from "../fileDb";
import {ApiMessage} from "../types";

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  const messages = await fileDb.getItems();
  res.send(messages);
});

messagesRouter.post('/', async (req, res) => {
  const messageData: ApiMessage = {
    message: req.body.message,
    author: req.body.author,
  }

  const savedMessage = await fileDb.addItem(messageData);
  res.send(savedMessage)
})

export default messagesRouter;