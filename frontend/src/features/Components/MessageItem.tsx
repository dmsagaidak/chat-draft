import React from 'react';
import {Message} from "../../types";
import dayjs from 'dayjs'

import {Grid, Card, CardContent} from "@mui/material";

interface Props {
  message: Message;
}

const MessageItem: React.FC<Props> = ({message}) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} sx={{mt: 2}}>
      <Card>
        <CardContent>
          <span><strong>Author: </strong>{message.author}</span>
          <span style={{paddingLeft: '20px'}}>
            <strong>Date & time:</strong> {dayjs(message.datetime).format('DD.MM.YYYY HH:mm:ss')}
          </span>
          <div>{message.message}</div>
        </CardContent>
      </Card>
    </Grid>

  );
};

export default MessageItem;