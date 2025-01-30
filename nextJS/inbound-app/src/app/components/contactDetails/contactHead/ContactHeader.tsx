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
import { MessageContext } from "../../MessageContextProvider";
import { useContext } from "react";

export default function ContactHeader() {
  const messageContextValue = useContext(MessageContext);
  return (
    <Track
      verticalAlign="top"
      className="gap-8"
      railEnd={<HeaderContentOptions />}
    >
      <Track
        verticalAlign="middle"
        className="gap-1"
        railStart={
          <Avatar
            name={messageContextValue.selectedMessage?.client_name ?? ""}
            size="64"
          />
        }
      >
        <HeaderContent />
      </Track>
    </Track>
  );
}

function HeaderContent(): React.JSX.Element {
  const messageContextValue = useContext(MessageContext);
  return (
    <Box className="p-2">
      <Box className="flex flex-row gap-2">
        <Heading as="h3" className="text-heading-16 font-stronger">
          {messageContextValue.selectedMessage?.client_name}
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
          {messageContextValue.selectedMessage?.state}
        </Text>
        <Text className="text-body-12 text-secondary">·</Text>
        <Text className="text-body-12 text-secondary">
          {messageContextValue.selectedMessage?.country}
        </Text>
        <Text className="text-body-12 text-secondary">·</Text>
        <Text className="text-body-12 text-secondary">
          {messageContextValue.selectedMessage?.local_time}
        </Text>
      </Box>
    </Box>
  );
}

function HeaderContentOptions() {
  return (
    <Box className="flex gap-4">
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
