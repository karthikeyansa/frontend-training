"use client";
import { Avatar, Box, Heading, Track, Text } from "@adaptavant/eds-core";
import { MessageType } from "./Messages.types";
import { getExactMessageTime } from "../utilities/utility";

export default function MessageList({ messages }: { messages: MessageType[] }): React.JSX.Element {
  return (
    <Box as="ul" className="px-5 py-4">
      {messages.map((message: MessageType) => {
        return (
          <Box as="li" key={message.id} className="p-2">
            <Track verticalAlign="middle" className="gap-1" railStart={<Avatar name={message.client_name} size="32" />}>
              <MessageContentComponent message={message} />
            </Track>
          </Box>
        );
      })}
    </Box>
  );
}

function MessageContentComponent({message}: {message: MessageType}): React.JSX.Element {
  return (
    <Box className="p-2">
      <Track
        className="gap-4"
        railEnd={<ClientMessageTimeComponent message={message} />}
      >
        <Heading as="h3" className="text-heading-12">
          {message.client_name}
        </Heading>
      </Track>
      <Text className="font-strong text-body-12 text-primary line-clamp-1">
        {message.message}
      </Text>
    </Box>
  );
}

function ClientMessageTimeComponent({ message }: { message: MessageType }) {
  return (
    <Text className="text-body-8 text-secondary">
      {getExactMessageTime(message.answered_at)}
    </Text>
  );
}
