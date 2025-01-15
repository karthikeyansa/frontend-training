"use client";
import { Box, Text } from "@adaptavant/eds-core";
import { MessageType } from "../../sidebar/Messages.types";
import SenderReceiverDetails from "./SenderReceiverDetails";

export default function ContactBody({
  selectedMessage,
}: {
  selectedMessage: MessageType;
}) {
  return (
    <Box className="flex flex-col py-2 px-8 gap-5">
      <SenderReceiverDetails selectedMessage={selectedMessage} />
      <Box>
        <Text className="text-body-12 text-secondary">Phone number</Text>
        <Text className="text-body-12 text-primary">
          {selectedMessage.call_back_number}
        </Text>
      </Box>
      <Box>
        <Text className="text-body-12 text-secondary">Call Type</Text>
        <Text className="text-body-12 text-primary">
          {selectedMessage.call_type}
        </Text>
      </Box>
      <Box>
        <Text className="text-body-12 text-secondary">Message</Text>
        <Text className="text-body-12 text-primary">
          {selectedMessage.message}
        </Text>
      </Box>
      <Box>
        <Text className="text-body-12 text-secondary">Delivered to</Text>
        <Text className="text-body-12 text-primary">
          {selectedMessage.client_email}
        </Text>
      </Box>
      <Box>
        <Text className="text-body-12 text-secondary">Message taken</Text>
        <Text className="text-body-12 text-primary">{`${selectedMessage.answered_date} · ${selectedMessage.answered_time} ${selectedMessage.tz}`}</Text>
      </Box>
    </Box>
  );
}
