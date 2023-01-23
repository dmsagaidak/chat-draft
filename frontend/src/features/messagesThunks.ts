import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiMessage, Message} from "../types";
import axiosApi from "../axiosApi";

export const fetchMessages = createAsyncThunk<Message[]>(
  'messages/fetchAll',
  async () => {
    const response = await axiosApi.get<Message[]>('/');

    return response.data;
  }
);

export const fetchNew = createAsyncThunk<Message[]>(
  'messages/fetchNew',
  async () => {
    const response = await axiosApi.get<Message[]>('/');
    const messages = response.data;
    const lastDate = messages[messages.length -1].datetime;
    const lastRes = await axiosApi.get<Message[]>('/?datetime=' + lastDate);
    const lastMessages = lastRes.data;
    console.log(lastMessages);
    return lastMessages
  }
)

export const createMessage = createAsyncThunk<void, ApiMessage>(
  'messages/create',
  async (message) => {
    await axiosApi.post<ApiMessage>('/', message);
  }
)