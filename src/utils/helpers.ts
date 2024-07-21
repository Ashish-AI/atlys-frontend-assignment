export const isNil = (text: string | null | undefined) => {
  return text === undefined || text === null || text.trim() === "";
};
