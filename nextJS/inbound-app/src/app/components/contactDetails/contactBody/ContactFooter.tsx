import { Box, Button, NotesFilledIcon, ShareIcon } from '@adaptavant/eds-core';

export default function ContactFooter() {
	return (
		<Box className="fixed pl-96 bottom-5 flex gap-1">
			<Box className="flex gap-3">
				<Button
					variant="neutralSecondary"
					iconStart={NotesFilledIcon}
					onClick={() => {
						alert('Add note');
					}}
				>
					Add note
				</Button>
				<Button
					variant="neutralSecondary"
					iconStart={ShareIcon}
					onClick={() => {
						alert('Share');
					}}
				>
					Share
				</Button>
			</Box>
		</Box>
	);
}
