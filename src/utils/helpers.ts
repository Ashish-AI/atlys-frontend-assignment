export const isNil = (text: string | null | undefined) => {
  return text === undefined || text === null || text.trim() === "";
};

export function formatTimeAgo(dateAndTime: string): string {
  const now = new Date();
  const then = new Date(dateAndTime);
  const timeDiff = now.getTime() - then.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 1) {
    return `${days} days ago`;
  } else if (days === 1) {
    return `yesterday at ${then.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else if (hours > 1) {
    return `${hours} hours ago`;
  } else if (hours === 1) {
    return `an hour ago`;
  } else if (minutes > 1) {
    return `${minutes} minutes ago`;
  } else if (minutes === 1) {
    return `a minute ago`;
  } else {
    return `just now`;
  }
}
