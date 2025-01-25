"use client";
import {
  Box,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuList,
  DropdownMenuPopover,
  DropdownMenuTrigger,
  Heading,
  IconButton,
  MoreIcon,
  Track,
} from "@adaptavant/eds-core";
import React from "react";
import SearchComponent from "../../sidebar/SearchInput";
import { MessageContext } from "../../MessageContextProvider";

export default function InboxHeaderComponent() {
  return (
    <Box className="bg-accent-tertiary relative py-3">
      <Track className="gap-4" railEnd={<MoreIconComponent />}>
        <Heading as="h3" className="text-heading-16 pl-4">
          Inbox
        </Heading>
      </Track>
      <AllMessagesComponent />
      <SearchComponent />
    </Box>
  );
}

function MoreIconComponent(): React.JSX.Element {
  return (
    <DropdownMenu popoverMaxWidth={200} popoverPlacement="bottom-end">
      {({ triggerProps }) => (
        <>
          <IconButton
            icon={MoreIcon}
            aria-label="Toggle dropdown menu"
            variant="neutralTertiary"
            {...triggerProps}
          />
          <DropdownMenuPopover>
            <DropdownMenuList>
              <DropdownMenuItem onClick={() => alert("Archive")}>
                Archive
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert("Trash")}>
                Trash
              </DropdownMenuItem>
            </DropdownMenuList>
          </DropdownMenuPopover>
        </>
      )}
    </DropdownMenu>
  );
}

function AllMessagesComponent(): React.JSX.Element {
  return (
    <MessageContext.Consumer>
      {(messageContextValue) => (
        <DropdownMenu popoverMaxWidth={200}>
          <DropdownMenuTrigger variant="neutralTertiary">{`All message (${messageContextValue.messages.length})`}</DropdownMenuTrigger>
          <DropdownMenuPopover>
            <DropdownMenuList>
              <DropdownMenuItem onClick={() => alert("Read Messages")}>
                Read Messages
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert("Unread Messages")}>
                Unread Messages
              </DropdownMenuItem>
            </DropdownMenuList>
          </DropdownMenuPopover>
        </DropdownMenu>
      )}
    </MessageContext.Consumer>
  );
}
