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
import { MessageContext } from "./components/MessageContextProvider";
import ActivityHeader from "./components/activities/ActivityHeader";
import ActivityBody from "./components/activities/ActivityBody";
import { addMessages, addToReadMessages, selectMessage } from "@/app/redux/features/message-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "./redux/store";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const messages = useAppSelector((state) => state.messageReducer.messageList);
  const selectedMessage = useAppSelector((state) => state.messageReducer.selectedMessage);

  useEffect(() => {
    const fetchData = async () => {
      const mockResponse: SetStateAction<MessageType[]> = await new Promise(
        (resolve) =>
          setTimeout(() => {
            resolve([...mockMessageData]);
          }, 10)
      );
      dispatch(addMessages(mockResponse));
    };

    if(messages.length){
      dispatch(selectMessage(messages[0]));
      dispatch(addToReadMessages(messages[0].id));
    } else {
      fetchData();
    }
  }, [messages]);

  return (
    <MessageContext.Provider
      value={{
        messages,
        selectedMessage,
        searchQuery,
        setSearchQuery,
      }}
    >
      <Box className="flex">
        <Box className="w-[312px] border-tertiary border-r-2">
          <InboxHeaderComponent />
          <MessageList />
        </Box>
        {selectedMessage && (
          <>
            <Box className="p-8 py-5 w-[760px] border-tertiary border-r-2">
              <ContactHeader />
              <ContactBody />
              <ContactFooter />
            </Box>
            <Box className="flex flex-col w-[312px]">
              <ActivityHeader />
              {selectedMessage.activities?.length > 0 ? (
                <ActivityBody />
              ) : (
                <ActivityBody />
              )}
            </Box>
          </>
        )}
      </Box>
    </MessageContext.Provider>
  );
}
