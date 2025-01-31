import { MessageType, ActivityType } from "@/app/components/sidebar/Messages.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    messageList: MessageType[];
    searchMessages: MessageType[];
    selectedMessage: MessageType | null;
    readMessages: string[];
}

const initialState = {
    messageList: [],
    selectedMessage: null,
    searchMessages: [],
    readMessages: []
} as InitialState;

type AddActivityPayloadType = {
    activity: ActivityType,
    messageId?: string
}

export const message = createSlice({
    name: "message",
    initialState,
    reducers: {
        addMessages: (state, action: PayloadAction<MessageType[]>) => void(state.messageList = action.payload),
        addActivity: (state, action: PayloadAction<AddActivityPayloadType>) => {
            const exisitingMessageList = [...state.messageList];
            const messageItem = exisitingMessageList.find((message)=>message.id === action.payload.messageId);
            messageItem?.activities.push(action.payload.activity);
            state.messageList = [...exisitingMessageList];
        },
        selectMessage: (state, action: PayloadAction<MessageType>) => void(state.selectedMessage = action.payload),
        addSearchMessages: (state, action: PayloadAction<MessageType[]>) => void(state.searchMessages = action.payload),
        addToReadMessages: (state, action: PayloadAction<string>) => {
            const existingReadMessage = [...state.readMessages];
            existingReadMessage.push(action.payload);
            state.readMessages = [...existingReadMessage];
        },
    }
});

export const { addMessages, addActivity, selectMessage, addSearchMessages, addToReadMessages } = message.actions;
export default message.reducer;