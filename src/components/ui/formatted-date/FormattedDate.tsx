'use client';

import { usePathname } from 'next/navigation';

interface FormattedDateProps {
  date: string;
}

export const FormattedDate = ({ date }: FormattedDateProps) => {
  const pathname = usePathname();

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formatDate = (dateStr: string, locale: string): string => {
    const date = new Date(dateStr + 'T00:00:00');
    const dateTimeFormat = new Intl.DateTimeFormat(locale, dateOptions);
    return dateTimeFormat.format(date);
  };

  const getFormattedDate = (dateStr: string): string => {
    const pathLocaleMatch = pathname.match(/^\/([a-zA-Z-]{2,5})\//);
    const locale = pathLocaleMatch ? pathLocaleMatch[1] : 'en';
    return formatDate(dateStr, locale);
  };

  const formattedDate = getFormattedDate(date);

  return <span className="text-sm">{formattedDate}</span>;
};
