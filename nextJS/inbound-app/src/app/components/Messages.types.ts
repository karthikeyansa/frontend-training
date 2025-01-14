export type MessageType = {
    client_name: string,
    client_email: string,
    from_number: string,
    to_number: string,
    cam_agent_name: string,
    answered_at: string,
    call_type: string,
    call_back_number: string,
    message: string,
    client_location_and_time: string,
    id: string
}

export type HeaderComponentType = {
    count: number
}