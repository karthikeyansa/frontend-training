export type MessageType = {
    client_name: string,
    client_email: string,
    from_number: string,
    to_number: string,
    cam_agent_name: string,
    call_type: string,
    call_back_number: string,
    message: string,
    id: string;
    answered_date: string;
    answered_time: string;
    country: string;
    state: string;
    local_time: string;
    tz: string;

}

export type InboxHeaderComponentType = {
    searchQuery: string;
    setSearchQuery: (prevState: any) => void;
    setSearchMessages: (prevState: any) => void;
    messages: MessageType[];
}
