"use client";
import { Box, Field, SearchInput } from "@adaptavant/eds-core";
import { MessageType } from "./Messages.types";

export default function SearchComponent() {
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
          onChange={() => {
            console.log("onChange")
          }}
          onClear={() => {
            console.log("onClear")
          }}
          placeholder="Search"
          value={""}
        />
      </Field>
    </Box>
  );
}
