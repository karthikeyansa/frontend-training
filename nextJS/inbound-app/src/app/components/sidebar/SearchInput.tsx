"use client";
import { Box, Field, SearchInput } from "@adaptavant/eds-core";
import { InboxHeaderComponentType } from "./Messages.types";

export default function SearchComponent(props: InboxHeaderComponentType) {

  function onChangeHandler(event: any) {
    const searchInputValue = event?.target.value;
    props.setSearchQuery(searchInputValue);
    props.setSearchMessages(
      props.messages.filter((message) =>
        message.client_name.includes(searchInputValue) ||
        message.client_email.includes(searchInputValue) ||
        message.message.includes(searchInputValue)
      )
    );
  }
  return (
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
          onChange={onChangeHandler}
          onClear={() => {
            props.setSearchQuery("");
          }}
          placeholder="Search"
          value={props.searchQuery}
        />
      </Field>
    </Box>
  );
}
