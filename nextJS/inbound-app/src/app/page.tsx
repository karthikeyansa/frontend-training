'use client'
import React, { SetStateAction, useEffect, useState } from "react";
import MessageList from "./components/MessageList";
import Header from "./components/Header";
import { MessageType } from "./components/Messages.types";
import mockMessageData from "./data/inboundMessages.json";

export default function Home() {

  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
      const fetchData = async () => {
        const mockResponse: SetStateAction<MessageType[]> = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([...mockMessageData]);
          }, 10)
        );
        setMessages(mockResponse);
      };
  
      fetchData();
    }, []);
  return (
    <React.Fragment>
      <Header count={messages.length}/>
      <MessageList messages={messages}/>
    </React.Fragment>
  );
}
