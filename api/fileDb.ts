import { promises as fs } from 'fs';
import {randomUUID} from "crypto";
import {ApiMessage, Message} from "./types";

const filename = './db.json';
let messages: Message[] = [];

const fileDb = {
  async init() {
    try{
      const fileContents = await fs.readFile(filename);
      messages = JSON.parse(fileContents.toString());
    }catch (e) {
      console.log(e);
      messages = [];
    }
  },

  async getItems() {
    return messages;
  },

  async addItem(item: ApiMessage) {
    const id = randomUUID();
    const datetime = new Date().toString();

    const message = {
      id,
      ...item,
      datetime
    }

    messages.push(message);
    await this.save();
    return message;
  },

  async save() {
    await fs.writeFile(filename, JSON.stringify(messages))
  }
}

export default fileDb;

