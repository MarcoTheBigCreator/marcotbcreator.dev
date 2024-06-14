const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const formatDateUS = (dateStr: string) => {
  const date = new Date(dateStr);
  const dateTimeFormatUS = new Intl.DateTimeFormat('en-US', dateOptions);
  return dateTimeFormatUS.format(date);
};
