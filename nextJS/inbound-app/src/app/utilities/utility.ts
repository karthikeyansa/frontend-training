export function getExactMessageTime(messageContent: string): string {
  return messageContent.split(" · ")[1].replaceAll("IST", "").trim();
}

export function getCurrentDate(){
  return new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function isValidString(inputString: string): boolean {
  return typeof inputString === "string" && inputString.trim().length > 0;
}