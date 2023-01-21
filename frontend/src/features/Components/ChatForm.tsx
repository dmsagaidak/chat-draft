import React, {useState} from 'react';
import {ApiMessage} from "../../types";
import {Button, Grid, TextField} from "@mui/material";

interface Props {
 onSubmit: (message: ApiMessage) => void;
}

const ChatForm: React.FC<Props> = ({onSubmit}) => {
  const [message, setMessage] = useState<ApiMessage>({
    message: '',
    author: '',
    })

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const {name, value} = e.target;

    setMessage(prev => ({...prev, [name]: value}))
  }


  const onFormSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    onSubmit({
      ...message
    });
    setMessage(prevState => {
      return {...prevState, author: '', message: ''}
    })
  }


  return (
    <form
      autoComplete="off"
      onSubmit={onFormSubmit}>
      <Grid container direction="column" spacing={2} sx={{mt: 2}}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <TextField
            id="author"
            name="author"
            label="Author"
            value={message.author}
            onChange={onFormChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <TextField
            multiline rows={3}
            id="message"
            name="message"
            label="Message"
            value={message.message}
            onChange={onFormChange}
          />
        </Grid>
        <Grid item xs>
          <Button type="submit" color="primary" variant="contained">Send</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ChatForm;