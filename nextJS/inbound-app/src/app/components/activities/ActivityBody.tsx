import { Box, NotesFilledIcon, Text, Track } from "@adaptavant/eds-core";
import { useContext } from "react";
import { MessageContext } from "../MessageContextProvider";
import { ActivityType } from "../sidebar/Messages.types";
import { useAppSelector } from "@/app/redux/store";

export default function ActivityBody() {
  const messageListContext = useContext(MessageContext);
  const activityList = messageListContext.selectedMessage?.activities ?? [];

  return (
    <Box as="ul" className="p-3">
      {activityList?.map((activity: ActivityType) => (
        <Box as="li" className="p-2" key={activity.id}>
          <Track
            verticalAlign="top"
            className="gap-2"
            railStart={
              <Box className="py-1">
                <NotesFilledIcon tone="neutralTertiary" size="16" />
              </Box>
            }
          >
            <ActivityContent activity={activity} />
          </Track>
        </Box>
      ))}
    </Box>
  );
}

function ActivityContent({ activity }: { activity: ActivityType }) {
  return (
    <Box>
      <Box className="flex flex-col gap-1">
        <Track
          className="gap-2"
          railEnd={
            <Text className="text-body-10 text-secondary min-w-[48px]">
              {activity.created_time}
            </Text>
          }
        >
          <Text className="text-body-12 text-secondary min-w-[192px]">{`Note by ${activity.provider_name}`}</Text>
        </Track>
        <Text className="min-w-[248px] text-body-12 text-primary">
          {activity.provider_message}
        </Text>
      </Box>
    </Box>
  );
}
