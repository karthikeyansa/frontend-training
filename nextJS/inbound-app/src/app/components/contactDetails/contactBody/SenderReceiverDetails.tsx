"use client";
import { Box, Text } from "@adaptavant/eds-core";
import React from "react";
import { MessageContext } from "../../MessageContextProvider";

export default function SenderReceiverDetails() {
  return (
    <MessageContext.Consumer>
      {(messageContextValue) => (
        <React.Fragment>
          <Box>
            <Box className="gap-3 flex">
              <Box className="flex gap-1">
                <Text className="text-body-12 text-secondary">From</Text>
                <Text className="text-body-12 text-primary">
                  {messageContextValue.selectedMessage?.from_number}
                </Text>
              </Box>
              <Text className="text-body-12 text-secondary">·</Text>
              <Box className="flex gap-1">
                <Text className="text-body-12 text-secondary">To</Text>
                <Text className="text-body-12 text-primary">
                  {messageContextValue.selectedMessage?.to_number}
                </Text>
              </Box>
            </Box>
            <Box className="gap-1 flex">
              <Text className="text-body-12 text-secondary">Answered by</Text>
              <Text className="text-body-12 text-primary">
                {`${messageContextValue.selectedMessage?.cam_agent_name} - ${messageContextValue.selectedMessage?.answered_date} · ${messageContextValue.selectedMessage?.answered_time} ${messageContextValue.selectedMessage?.tz}`}
              </Text>
            </Box>
          </Box>
        </React.Fragment>
      )}
    </MessageContext.Consumer>
  );
}
