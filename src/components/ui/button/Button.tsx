interface Props {
  icon?: React.ReactNode;
  text: string;
}

export const Button = ({ text, icon }: Props) => {
  return (
    <button className="flex align-middle  justify-center shadow-[0_5px_15px_1px_rgb(96,165,250,55%)] hover:shadow-[0_6px_20px_rgba(96,165,250,30%)] hover:bg-violet-800 px-8 py-2 bg-violet-700 rounded-full text-white font-light transition duration-200 ease-linear">
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </button>
  );
};
