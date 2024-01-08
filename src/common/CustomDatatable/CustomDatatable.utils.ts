export const summarize = (value: string, max: number = 50): string => {
  if (value.length < max) return value;
  return value.substring(0, max) + " ...";
};
