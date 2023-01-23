import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiMessage, Message} from "../types";
import axiosApi from "../axiosApi";

export const fetchMessages = createAsyncThunk<Message[], string>(
  'messages/fetchAll',
  async (string) => {
    if(string === '') {
      const response = await axiosApi.get<Message[]>('/messages');
      return response.data;
    } else {
      const response = await axiosApi.get<Message[]>('/messages?datetime=' + string);
      return response.data
    }

  }
);

export const createMessage = createAsyncThunk<void, ApiMessage>(
  'messages/create',
  async (message) => {
    await axiosApi.post<ApiMessage>('/messages/', message);
  }
)