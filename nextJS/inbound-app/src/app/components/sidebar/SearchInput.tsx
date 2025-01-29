'use client';
import { Box, Field, SearchInput } from '@adaptavant/eds-core';
import { MessageContext } from '../MessageContextProvider';

export default function SearchComponent() {
	return (
		<MessageContext.Consumer>
			{(messageContextValue) => (
				<Box className="p-3">
					<Field
						controlId="searchInput"
						label="searchlabel"
						labelVisibility="hidden"
						size="standard"
					>
						<SearchInput
							autoComplete="off"
							autoFocus={true}
							onChange={(event) => {
								const searchInputValue =
									event?.target.value?.toLowerCase();
								messageContextValue.setSearchQuery(
									searchInputValue
								);
								messageContextValue.setSearchMessages(
									messageContextValue.messages.filter(
										(message) =>
											message.client_name
												.toLowerCase()
												.includes(searchInputValue) ||
											message.client_email
												.toLowerCase()
												.includes(searchInputValue) ||
											message.message
												.toLowerCase()
												.includes(searchInputValue)
									)
								);
							}}
							onClear={() => {
								messageContextValue.setSearchQuery('');
							}}
							placeholder="Search"
							value={messageContextValue.searchQuery}
						/>
					</Field>
				</Box>
			)}
		</MessageContext.Consumer>
	);
}
