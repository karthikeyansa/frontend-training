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
import { InboxHeaderComponentType } from "../../sidebar/Messages.types";
import SearchComponent from "../../sidebar/SearchInput";

export default function InboxHeaderComponent(props: InboxHeaderComponentType) {
  return (
    <Box className="bg-accent-tertiary fixed z-10 py-3 min-w-80 w-1/4">
      <Track className="gap-4" railEnd={<MoreIconComponent />}>
        <Heading as="h3" className="text-heading-16 pl-4">
          Inbox
        </Heading>
      </Track>
      <AllMessagesComponent {...props} />
      <SearchComponent {...props}/>
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

function AllMessagesComponent(props: InboxHeaderComponentType): React.JSX.Element {
  return (
    <DropdownMenu popoverMaxWidth={200}>
      <DropdownMenuTrigger variant="neutralTertiary">{`All message (${props.messages.length})`}</DropdownMenuTrigger>
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
  );
}
