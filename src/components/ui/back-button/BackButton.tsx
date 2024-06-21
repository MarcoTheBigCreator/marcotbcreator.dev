'use client';

import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

interface Props {
  path: string;
  message: string;
}

export const BackButton = ({ path, message }: Props) => {
  const router = useRouter();

  const onBack = () => {
    router.replace(path);
  };

  return (
    <button
      onClick={onBack}
      className="hover:text-violet-500 transition duration-200 ease-linear flex"
    >
      <IoArrowBack size={29} />
      <span className="mt-1 ml-1 hidden lg:block">{message}</span>
    </button>
  );
};
