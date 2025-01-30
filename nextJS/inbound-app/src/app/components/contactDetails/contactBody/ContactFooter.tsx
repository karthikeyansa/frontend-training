import { Box, Button, ShareIcon } from "@adaptavant/eds-core";
import AddNoteModal from "../../notes/AddNoteModal";

export default function ContactFooter() {
  return (
    <Box className="fixed pl-64 bottom-5 flex gap-1">
      <Box className="flex gap-3">
		<AddNoteModal />
        <Button
          variant="neutralSecondary"
          iconStart={ShareIcon}
          onClick={() => {
            alert("Share");
          }}
        >
          Share
        </Button>
      </Box>
    </Box>
  );
}
