import express from "express";
import fileDb from "../fileDb";
import {ApiMessage, Message} from "../types";

const messagesRouter = express.Router();
let data: Message[] = [];


messagesRouter.get('/', async (req, res) => {
  const queryDate = req.query.datetime as string;
  const date = new Date(queryDate);
  if(isNaN(date.getDate())){
    res.status(400).send({error: 'Invalid datetime'})
  }

  if (date) {

  }

  const messages = await fileDb.getItems();

  let lastMessages: Message[];

  if(messages.length <= 30) {
    lastMessages = messages;
  }else {
    lastMessages = messages.slice(-30);
  }
  data = lastMessages;

  res.send(data);
});


messagesRouter.post('/', async (req, res) => {
  if(!req.body.message || !req.body.author) {
    return res.status(400).send({error: `Author and message fields can't be empty`})
  }

  const messageData: ApiMessage = {
    message: req.body.message,
    author: req.body.author,
  }

  const savedMessage = await fileDb.addItem(messageData);
  res.send(savedMessage);
})

export default messagesRouter;