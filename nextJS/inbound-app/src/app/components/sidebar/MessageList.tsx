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
import { MessageContext } from "../MessageContextProvider";
import classNames from "classnames";
import { useContext, useMemo } from "react";

export default function MessageList(): React.JSX.Element {
  const messageContextValue = useContext(MessageContext);

  const messageList = useMemo(() => {
    return messageContextValue.searchQuery.length
      ? messageContextValue.searchMessages
      : messageContextValue.messages;
  }, [messageContextValue.searchQuery, messageContextValue.messages]);
  return (
    <Box as="ul" className="max-h-screen overflow-y-auto h-[720px] w-[500px] scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {messageList.map((message: MessageType) => {
        return (
          <Box
            as="li"
            onClick={() => {
              messageContextValue.setSelectedMessage(message);
              messageContextValue.setReadMessages((prevState: any) =>
                !prevState.includes(message.id)
                  ? [...prevState, message.id]
                  : prevState
              );
            }}
            key={message.id}
            className={classNames("p-3", {
              "bg-neutral-active":
                messageContextValue.selectedMessage?.id === message.id,
            })}
          >
            <Track
              verticalAlign="middle"
              className="gap-1"
              railStart={<Avatar name={message.client_name} size="32" />}
            >
              <MessageContentComponent selectedMessage={message} />
            </Track>
          </Box>
        );
      })}

      {messageContextValue.searchMessages.length === 0 &&
        messageContextValue.searchQuery.length > 1 && (
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
  selectedMessage,
}: {
  selectedMessage: MessageType;
}): React.JSX.Element {
  const messageContextValue = useContext(MessageContext);
  const isMessageRead: boolean = messageContextValue.readMessages.includes(
    selectedMessage.id
  );
  return (
    <Box className="p-2 cursor-pointer">
      <Track
        className="gap-4"
        railEnd={
          <ClientMessageTimeComponent
            isMessageRead={isMessageRead}
            message={selectedMessage}
          />
        }
      >
        <Heading
          as="h3"
          className={classNames(
            "text-heading-12",
            { "text-secondary": isMessageRead },
            { "text-primary": !isMessageRead }
          )}
        >
          {selectedMessage?.client_name}
        </Heading>
      </Track>
      <Track
        className="gap-2"
        railEnd={isMessageRead ? null : <RadioControlIcon size="16" />}
      >
        <Text
          className={classNames("font-strong text-body-12 line-clamp-1", {
            "text-secondary": isMessageRead,
            "text-primary": !isMessageRead,
          })}
        >
          {selectedMessage?.message}
        </Text>
      </Track>
    </Box>
  );
}

function ClientMessageTimeComponent({
  message,
  isMessageRead,
}: {
  message: MessageType | null;
  isMessageRead: boolean;
}) {
  return (
    <Text
      className={classNames("text-body-8", {
        "text-secondary": isMessageRead,
        "text-primary": !isMessageRead,
      })}
    >
      {message?.answered_time}
    </Text>
  );
}
