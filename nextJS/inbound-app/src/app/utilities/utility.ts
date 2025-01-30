export function getExactMessageTime(messageContent: string): string {
  return messageContent.split(" · ")[1].replaceAll("IST", "").trim();
}
