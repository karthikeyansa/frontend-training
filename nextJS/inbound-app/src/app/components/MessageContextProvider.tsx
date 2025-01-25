import React from "react";
import { MessageContextProviderTypes } from "./sidebar/Messages.types";

export const MessageContext = React.createContext<MessageContextProviderTypes>({
    messages: [],
    searchQuery: "",
    setSearchQuery: () => "",
    searchMessages: [],
    setSearchMessages: () => [],
    selectedMessage: null,
    setSelectedMessage: () => [],
    readMessages: [],
    setReadMessages: () => [],
});