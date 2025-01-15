"use client";
import {
  Avatar,
  Box,
  Heading,
  Track,
  Text,
  IconButton,
  CheckIcon,
  Tooltip,
  PhoneIcon,
  ChatIcon,
} from "@adaptavant/eds-core";
import { MessageType } from "../../sidebar/Messages.types";

export default function ContactHeader({
  selectedMessage,
}: {
  selectedMessage: MessageType;
}) {
  return (
    <Box className="flex py-5 px-8">
      <Track
        verticalAlign="middle"
        className="gap-1 w-3/4"
        railStart={<Avatar name={selectedMessage.client_name} size="64" />}
      >
        <HeaderContent selectedMessage={selectedMessage} />
      </Track>
      <HeaderContentOptions />
    </Box>
  );
}

function HeaderContent({
  selectedMessage,
}: {
  selectedMessage: MessageType;
}): React.JSX.Element {
  return (
    <Box className="p-2">
      <Box className="flex flex-row gap-2">
        <Heading as="h3" className="text-heading-16 font-stronger">
          {selectedMessage.client_name}
        </Heading>
        <Tooltip content="Verify" placement="right">
          {({ triggerProps }) => (
            <IconButton
              aria-label="Verify me!"
              icon={CheckIcon}
              size="small"
              variant="neutralSecondary"
              {...triggerProps}
              onClick={() => {
                alert("Verify Contact");
              }}
            />
          )}
        </Tooltip>
      </Box>
      <Box className="flex gap-1">
        <Text className="text-body-12 text-secondary">
          {selectedMessage.state}
        </Text>
        <Text className="text-body-12 text-secondary">·</Text>
        <Text className="text-body-12 text-secondary">
          {selectedMessage.country}
        </Text>
        <Text className="text-body-12 text-secondary">·</Text>
        <Text className="text-body-12 text-secondary">
          {selectedMessage.local_time}
        </Text>
      </Box>
    </Box>
  );
}

function HeaderContentOptions() {
  return (
    <Box className="flex gap-4 w-1/4">
      <Tooltip content="Call" placement="bottom">
        {({ triggerProps }) => (
          <IconButton
            aria-label="call"
            icon={PhoneIcon}
            size="standard"
            variant="neutralTertiary"
            {...triggerProps}
            onClick={() => {
              alert("Call");
            }}
          />
        )}
      </Tooltip>
      <Tooltip content="Chat" placement="bottom">
        {({ triggerProps }) => (
          <IconButton
            aria-label="chat"
            icon={ChatIcon}
            size="standard"
            variant="neutralTertiary"
            {...triggerProps}
            onClick={() => {
              alert("Chat");
            }}
          />
        )}
      </Tooltip>
    </Box>
  );
}
