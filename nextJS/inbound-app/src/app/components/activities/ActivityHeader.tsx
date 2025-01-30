import { Box, Heading } from "@adaptavant/eds-core";

export default function ActivityHeader() {
  return (
    <Box className="p-5">
      <Heading as="h5" className="text-primary">
        All activities
      </Heading>
    </Box>
  );
}
