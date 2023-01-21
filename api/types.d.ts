export interface Message {
  id: string;
  message: string;
  author: string;
  datetime: string;
}

export interface ApiMessage {
  message: string;
  author: string;
}