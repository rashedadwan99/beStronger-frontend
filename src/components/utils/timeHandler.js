import { format } from "date-fns";
export const formatTime = (time) => {
  const date = new Date();
  const timePublished = new Date(time);
  if (date.getFullYear > timePublished.getFullYear) {
    format(timePublished, "EEEE hh:mm aaaa");
    return;
  }
  if (date.getMonth() === timePublished.getMonth()) {
    const today = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const dayOfCreation = timePublished.getDate();
    const hourOfCreation = timePublished.getHours();
    const minuteOfCreation = timePublished.getMinutes();
    const daysDifference = today - dayOfCreation;
    const hoursDifference = hour - hourOfCreation;
    const minutesDifference = minute - minuteOfCreation;
    console.log(hoursDifference);
    if (!daysDifference) {
      if (hoursDifference >= 1) {
        return `${hoursDifference} hour${hoursDifference !== 1 ? `s` : ""} ago`;
      } else if (!hoursDifference) {
        if (minutesDifference >= 1) {
          return `${minutesDifference} minute${
            minutesDifference !== 1 ? `s` : ""
          } ago`;
        }
      }
      return "now";
    }
    if (daysDifference === 1) {
      return "yesterday, " + format(timePublished, "hh:mm aaaa");
    } else if (daysDifference > 1 && daysDifference < 10) {
      return (
        `${daysDifference} days ago, ` +
        format(timePublished, "EEEE hh:mm aaaa")
      );
    } else if (daysDifference >= 10) {
      return format(timePublished, "dd MMMM Y");
    }
  }
};
