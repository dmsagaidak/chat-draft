import React from 'react';
import {Message} from "../../types";
import {Card} from "react-bootstrap";

interface Props {
  message: Message;
}

const MessageItem: React.FC<Props> = ({message}) => {
  return (
    <Card className="mt-2 p-2" style={{width: '70vw'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <p style={{paddingRight: '30px'}}><b>Author: </b>{message.author}</p> <p><b>Time & date: </b>{message.datetime}</p>
      </div>
      <Card.Text>
        {message.message}
      </Card.Text>
    </Card>
  );
};

export default MessageItem;