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
} from "@adaptavant/eds-core";
import { useState } from "react";

export default function AddNoteModal() {
  const [openModal, setOpenModal] = useState(false);

  function onModalOpen() {
    setOpenModal(true);
  }

  function onModalClose() {
    setOpenModal(false);
  }

  return (
    <>
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
          <Field label="Please enter a note" size="standard">
            <Textarea placeholder="Add your notes here..." />
          </Field>
        </ModalContent>

        <ModalFooter>
          <Button onClick={onModalClose} variant="neutralTertiary">
            Discard changes
          </Button>

          <Button onClick={onModalClose}>Save</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
