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
import { HeaderComponentType } from "./Messages.types";
import SearchComponent from "./SearchComponent";

export default function HeaderComponent(props: HeaderComponentType) {
  return (
    <Box className="px-5 py-4">
      <Track className="gap-4" railEnd={<MoreIconComponent />}>
        <Heading as="h3" className="text-heading-16 pl-4">
          Inbox
        </Heading>
      </Track>
      <AllMessagesComponent count={props.count} />
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

function AllMessagesComponent(props: HeaderComponentType): React.JSX.Element {
  return (
    <DropdownMenu popoverMaxWidth={200}>
      <DropdownMenuTrigger variant="neutralTertiary">{`All message (${props.count})`}</DropdownMenuTrigger>
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
