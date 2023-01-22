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

export const createMessage = createAsyncThunk<void, ApiMessage>(
  'messages/create',
  async (message) => {
    await axiosApi.post<ApiMessage>('/', message);
  }
)