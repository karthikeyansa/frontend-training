import React from "react";

export type ActivityType = {
	id: string;
	provider_name: string;
	provider_message: string;
	created_time: string;
  };

export type MessageType = {
  client_name: string;
  client_email: string;
  from_number: string;
  to_number: string;
  cam_agent_name: string;
  call_type: string;
  call_back_number: string;
  message: string;
  id: string;
  answered_date: string;
  answered_time: string;
  country: string;
  state: string;
  local_time: string;
  tz: string;
  activities: Array<ActivityType>;
};

export type InboxHeaderComponentType = {
  setSearchQuery: (prevState: "") => void;
  setSearchMessages: (prevState: Array<MessageType>) => void;
};

export type MessageContextProviderTypes = {
  messages: Array<MessageType>;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  searchMessages: Array<MessageType>;
  setSearchMessages: (value: Array<MessageType>) => void;
  selectedMessage: MessageType | null;
  setSelectedMessage: (value: MessageType) => void;
  readMessages: Array<string>;
  setReadMessages: React.Dispatch<React.SetStateAction<string[]>>;
};
