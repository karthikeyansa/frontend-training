'use client';
import React, { SetStateAction, useEffect, useState } from 'react';
import MessageList from './components/sidebar/MessageList';
import InboxHeaderComponent from './components/contactDetails/contactHead/InboxHeaderComponent';
import { MessageType } from './components/sidebar/Messages.types';
import mockMessageData from './data/inboundMessages.json';
import { Box } from '@adaptavant/eds-core';
import ContactHeader from './components/contactDetails/contactHead/ContactHeader';
import ContactBody from './components/contactDetails/contactBody/ContactBody';
import ContactFooter from './components/contactDetails/contactBody/ContactFooter';
import { MessageContext } from './components/MessageContextProvider';

export default function Home() {
	const [messages, setMessages] = useState<MessageType[]>([]);
	const [selectedMessage, setSelectedMessage] =
		useState<MessageType | null>(null);
	const [readMessages, setReadMessages] = useState<string[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [searchMessages, setSearchMessages] = useState<MessageType[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const mockResponse: SetStateAction<MessageType[]> =
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve([...mockMessageData]);
					}, 10)
				);
			setMessages(mockResponse);
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (messages.length) {
			setSelectedMessage(messages[0]);
			setReadMessages((prevState: string[]) =>
				!prevState.includes(messages[0].id)
					? [...prevState, messages[0].id]
					: prevState
			);
		}
	}, [messages]);
	return (
		<MessageContext.Provider
			value={{
				messages,
				selectedMessage,
				setSelectedMessage,
				searchQuery,
				setSearchQuery,
				searchMessages,
				setSearchMessages,
				readMessages,
				setReadMessages,
			}}
		>
			<Box className="flex">
				<Box className="min-w-[500px]">
					<InboxHeaderComponent />
					<MessageList />
				</Box>
				{selectedMessage && (
					<Box className="p-8 py-5 w-screen">
						<ContactHeader />
						<ContactBody />
						<ContactFooter />
					</Box>
				)}
			</Box>
		</MessageContext.Provider>
	);
}
