import { Box, Button, NotesFilledIcon, ShareIcon } from "@adaptavant/eds-core";

export default function ContactFooter() {
  return (
    <Box className="fixed bottom-0 p-5 flex flex-row gap-1 justify-center items-center">
      <Box className="w-48 flex flex-row gap-3 pl-96">
        <Button
          variant="neutralSecondary"
          iconStart={NotesFilledIcon}
          onClick={() => {
            alert("Add note");
          }}
        >
          Add note
        </Button>
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
