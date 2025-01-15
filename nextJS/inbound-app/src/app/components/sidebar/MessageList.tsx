"use client";
import {
  Avatar,
  Box,
  Heading,
  Track,
  Text,
  RadioControlIcon,
} from "@adaptavant/eds-core";
import { MessageType } from "./Messages.types";

export default function MessageList({
  messages,
  readMessages,
  selectedMessage,
  setSelectedMessage,
  setReadMessages,
}: {
  messages: MessageType[];
  readMessages: string[];
  selectedMessage: MessageType | null;
  setSelectedMessage: (params: MessageType) => void;
  setReadMessages: (params: any) => void;
}): React.JSX.Element {
  return (
    <Box as="ul" className="mt-36">
      {messages.map((message: MessageType) => {
        return (
          <Box
            as="li"
            onClick={() => {
              setSelectedMessage(message);
              setReadMessages((prevState: any) =>
                !prevState.includes(message.id)
                  ? [...prevState, message.id]
                  : prevState
              );
            }}
            key={message.id}
            className={`p-3 ${
              selectedMessage?.id === message.id ? "bg-neutral-active" : ""
            }`}
          >
            <Track
              verticalAlign="middle"
              className="gap-1"
              railStart={<Avatar name={message.client_name} size="32" />}
            >
              <MessageContentComponent
                readMessages={readMessages}
                message={message}
              />
            </Track>
          </Box>
        );
      })}
      {messages.length === 0 && (
        <Box as="li">
          <Text className="text-body-12 text-center py-[350px]">
            No search results
          </Text>
        </Box>
      )}
    </Box>
  );
}

function MessageContentComponent({
  readMessages,
  message,
}: {
  message: MessageType;
  readMessages: string[];
}): React.JSX.Element {
  const isMessageRead: boolean = readMessages.includes(message.id);
  return (
    <Box className="p-2 cursor-pointer">
      <Track
        className="gap-4"
        railEnd={
          <ClientMessageTimeComponent
            isMessageRead={isMessageRead}
            message={message}
          />
        }
      >
        <Heading
          as="h3"
          className={`text-heading-12 ${
            isMessageRead ? "text-secondary" : "text-primary"
          }`}
        >
          {message.client_name}
        </Heading>
      </Track>
      <Track
        className="gap-2"
        railEnd={isMessageRead ? null : <RadioControlIcon size="16" />}
      >
        <Text
          className={`font-strong text-body-12 line-clamp-1 ${
            isMessageRead ? "text-secondary" : "text-primary"
          }`}
        >
          {message.message}
        </Text>
      </Track>
    </Box>
  );
}

function ClientMessageTimeComponent({
  message,
  isMessageRead,
}: {
  message: MessageType;
  isMessageRead: boolean;
}) {
  return (
    <Text
      className={`text-body-8 ${
        isMessageRead ? "text-secondary" : "text-primary"
      }`}
    >
      {message.answered_time}
    </Text>
  );
}
