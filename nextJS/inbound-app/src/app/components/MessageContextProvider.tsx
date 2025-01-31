import React from "react";
import { MessageContextProviderTypes } from "./sidebar/Messages.types";

export const MessageContext = React.createContext<MessageContextProviderTypes>({
  messages: [],
  searchQuery: "",
  setSearchQuery: () => "",
  selectedMessage: null,
});
