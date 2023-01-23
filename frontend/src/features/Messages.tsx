import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectMessages} from "./messagesSlice";
import {fetchMessages} from "./messagesThunks";
import {Grid} from "@mui/material";
import MessageItem from "./Components/MessageItem";

const Messages = () => {
  const dispatch = useAppDispatch();
  let messages = useAppSelector(selectMessages);
  const [params, setParams] = useState('');

  useEffect(() => {
    setInterval(()=> {dispatch(fetchMessages(params));
      let lastDate = messages[messages.length -1].datetime;
      setParams(lastDate);
      }, 3000)
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