import { addActivity } from "@/app/redux/features/message-slice";
import { getCurrentDate, isValidString } from "@/app/utilities/utility";
import {
  Button,
  Heading,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  NotesFilledIcon,
  Field,
  Textarea,
  TextInput,
  SnackbarContent,
  Snackbar,
} from "@adaptavant/eds-core";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { MessageContext } from "../MessageContextProvider";

export default function AddNoteModal() {
  const [openModal, setOpenModal] = useState(false);
  const [notes, setNotes] = useState<string>("");
  const [notesProviderName, setNotesProviderName] = useState<string>("");
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const messageContextValue = useContext(MessageContext);

  const dispatch = useDispatch();

  function onModalOpen() {
    setOpenModal(true);
  }

  function onModalClose() {
    setOpenModal(false);
  }

  function onModalSave() {
    if (!isValidString(notes) || !isValidString(notesProviderName)) {
      setShowWarning(true);
    } else {
      dispatch(
        addActivity({
          activity: {
            id: "99393-49994-99494",
            created_time: getCurrentDate(),
            provider_name: notesProviderName,
            provider_message: notes,
          },
          messageId: messageContextValue.selectedMessage?.id,
        })
      );
    }
    onModalClose();
  }

  return (
    <>
      <Snackbar
        description="Invalid name and notes"
        onCloseButtonClick={() => {
          setShowWarning(false);
        }}
        title="Add notes warning"
        variant="critical"
        placement="bottom-start"
        autoCloseDuration={2000}
        offset={[24, 24]}
        onClose={() => setShowWarning(false)}
        open={showWarning}
      />
      <Button
        variant="neutralSecondary"
        iconStart={NotesFilledIcon}
        onClick={onModalOpen}
      >
        Add note
      </Button>
      <Modal
        classNames={{
          modalWrapper: "z-10",
        }}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        descriptionId="modal-description"
        onClose={onModalClose}
        open={openModal}
        role="alertdialog"
        titleId="modal-title"
      >
        <ModalHeader>
          <Heading
            as="h3"
            className="text-heading-16 font-stronger"
            id="modal-title"
          >
            Add new note
          </Heading>
        </ModalHeader>

        <ModalContent className="gap-2 flex flex-col">
          <Field label="Provider name" size="standard">
            <TextInput
              placeholder="Your name..."
              value={notesProviderName}
              onChange={(event) => {
                setNotesProviderName(event.target.value);
              }}
            />
          </Field>
          <Field label="Please enter a note" size="standard">
            <Textarea
              placeholder="Add your notes here..."
              value={notes}
              onChange={(event) => {
                setNotes(event.target.value);
              }}
            />
          </Field>
        </ModalContent>

        <ModalFooter>
          <Button onClick={onModalClose} variant="neutralTertiary">
            Discard changes
          </Button>

          <Button onClick={onModalSave}>Save</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
