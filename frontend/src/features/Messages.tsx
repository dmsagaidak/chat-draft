import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectMessages, selectNewMessages} from "./messagesSlice";
import {fetchMessages, fetchNew} from "./messagesThunks";
import {Grid} from "@mui/material";
import MessageItem from "./Components/MessageItem";

const Messages = () => {
  const dispatch = useAppDispatch();
  let messages = useAppSelector(selectMessages);
  let newMessages = useAppSelector(selectNewMessages);

  useEffect(() => {
    void dispatch(fetchMessages());
    setInterval(() =>{dispatch(fetchNew());
      messages = messages.concat(newMessages);
      }, 3000)

  }, [dispatch, newMessages]);



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