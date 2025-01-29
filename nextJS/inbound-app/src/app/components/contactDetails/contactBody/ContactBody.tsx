'use client';
import { Box, Text } from '@adaptavant/eds-core';
import SenderReceiverDetails from './SenderReceiverDetails';
import { MessageContext } from '../../MessageContextProvider';
import { useContext } from 'react';

export default function ContactBody() {
	const messageContextValue = useContext(MessageContext);
	return (
		<Box className="flex flex-col py-6 gap-5">
			<SenderReceiverDetails />
			<Box>
				<Text className="text-body-12 text-secondary">
					Phone number
				</Text>
				<Text className="text-body-12 text-primary">
					{messageContextValue.selectedMessage?.call_back_number}
				</Text>
			</Box>
			<Box>
				<Text className="text-body-12 text-secondary">Call Type</Text>
				<Text className="text-body-12 text-primary">
					{messageContextValue.selectedMessage?.call_type}
				</Text>
			</Box>
			<Box>
				<Text className="text-body-12 text-secondary">Message</Text>
				<Text className="text-body-12 text-primary">
					{messageContextValue.selectedMessage?.message}
				</Text>
			</Box>
			<Box>
				<Text className="text-body-12 text-secondary">
					Delivered to
				</Text>
				<Text className="text-body-12 text-primary">
					{messageContextValue.selectedMessage?.client_email}
				</Text>
			</Box>
			<Box>
				<Text className="text-body-12 text-secondary">
					Message taken
				</Text>
				<Text className="text-body-12 text-primary">{`${messageContextValue.selectedMessage?.answered_date} · ${messageContextValue.selectedMessage?.answered_time} ${messageContextValue.selectedMessage?.tz}`}</Text>
			</Box>
		</Box>
	);
}
