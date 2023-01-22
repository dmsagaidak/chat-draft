import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectMessages} from "./messagesSlice";
import {fetchMessages} from "./messagesThunks";
import {Grid} from "@mui/material";
import MessageItem from "./Components/MessageItem";

const Messages = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);

  useEffect(() => {
    void dispatch(fetchMessages());
  }, [dispatch]);



  return (
    <>
      <Grid container direction="column" spacing={2}>
        {messages.map(message => (
          <MessageItem
            key={message.id}
            message={message}/>
        ))}
      </Grid>
    </>
  );
};

export default Messages;