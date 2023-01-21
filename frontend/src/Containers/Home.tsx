import React from 'react';
import ChatForm from "../features/Components/ChatForm";
import Messages from "../features/Messages";
import {useAppDispatch} from "../app/hooks";
import {ApiMessage} from "../types";
import {createMessage} from "../features/messagesThunks";

const Home = () => {
  const dispatch = useAppDispatch();

  const onFormSubmit = async (message: ApiMessage) => {
    await dispatch(createMessage(message));
  }

  return (
    <>
      <ChatForm onSubmit={onFormSubmit}/>
      <Messages/>
    </>
  );
};

export default Home;