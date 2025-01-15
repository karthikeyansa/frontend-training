"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import MessageList from "./components/sidebar/MessageList";
import InboxHeaderComponent from "./components/contactDetails/contactHead/InboxHeaderComponent";
import { MessageType } from "./components/sidebar/Messages.types";
import mockMessageData from "./data/inboundMessages.json";
import { Box } from "@adaptavant/eds-core";
import ContactHeader from "./components/contactDetails/contactHead/ContactHeader";
import ContactBody from "./components/contactDetails/contactBody/ContactBody";
import ContactFooter from "./components/contactDetails/contactBody/ContactFooter";

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<MessageType | null>(
    null
  );
  const [readMessages, setReadMessages] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchMessages, setSearchMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockResponse: SetStateAction<MessageType[]> = await new Promise(
        (resolve) =>
          setTimeout(() => {
            resolve([...mockMessageData]);
          }, 10)
      );
      setMessages(mockResponse);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (messages.length) {
      setSelectedMessage(messages[0]);
      setReadMessages((prevState: any) =>
        !prevState.includes(messages[0].id)
          ? [...prevState, messages[0].id]
          : prevState
      );
    }
  }, [messages]);
  return (
    <Box className="flex">
      <Box className="border-solid border-r border-tertiary min-w-80 w-1/4">
        <InboxHeaderComponent
          messages={messages}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSearchMessages={setSearchMessages}
        />
        <MessageList
          messages={searchQuery ? searchMessages : messages}
          selectedMessage={selectedMessage}
          setSelectedMessage={setSelectedMessage}
          readMessages={readMessages}
          setReadMessages={setReadMessages}
        />
      </Box>
      {selectedMessage && (
        <Box className="fixed left-96 pl-10 w-3/4">
          <ContactHeader selectedMessage={selectedMessage} />
          <ContactBody selectedMessage={selectedMessage} />
          <ContactFooter />
        </Box>
      )}
    </Box>
  );
}
