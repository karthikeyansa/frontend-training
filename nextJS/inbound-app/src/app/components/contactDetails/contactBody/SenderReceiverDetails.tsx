"use client";
import { Box, Text } from "@adaptavant/eds-core";
import React from "react";
import { MessageType } from "../../sidebar/Messages.types";

export default function SenderReceiverDetails({
  selectedMessage,
}: {
  selectedMessage: MessageType;
}) {
  return (
    <React.Fragment>
      <Box>
        <Box className="gap-3 flex">
          <Box className="flex gap-1">
            <Text className="text-body-12 text-secondary">From</Text>
            <Text className="text-body-12 text-primary">
              {selectedMessage.from_number}
            </Text>
          </Box>
          <Text className="text-body-12 text-secondary">·</Text>
          <Box className="flex gap-1">
            <Text className="text-body-12 text-secondary">To</Text>
            <Text className="text-body-12 text-primary">
              {selectedMessage.to_number}
            </Text>
          </Box>
        </Box>
        <Box className="gap-1 flex">
          <Text className="text-body-12 text-secondary">Answered by</Text>
          <Text className="text-body-12 text-primary">
            {`${selectedMessage.cam_agent_name} - ${selectedMessage.answered_date} · ${selectedMessage.answered_time} ${selectedMessage.tz}`}
          </Text>
        </Box>
      </Box>
    </React.Fragment>
  );
}
