'use client';

interface FormattedDateProps {
  date: string;
}

export const FormattedDate = ({ date }: FormattedDateProps) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const getCookieValue = (name: string): string | undefined => {
    const matches = document.cookie.match(
      new RegExp(`(?:^|; )${name}=([^;]*)`)
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };
  const formatDate = (dateStr: string, locale: string): string => {
    const date = new Date(dateStr);
    const dateTimeFormat = new Intl.DateTimeFormat(locale, dateOptions);
    return dateTimeFormat.format(date);
  };

  const getFormattedDate = (dateStr: string): string => {
    const locale = getCookieValue('NEXT_LOCALE') || 'en-US';
    return formatDate(dateStr, locale);
  };

  const formattedDate = getFormattedDate(date);

  return <span className="text-sm">{formattedDate}</span>;
};
