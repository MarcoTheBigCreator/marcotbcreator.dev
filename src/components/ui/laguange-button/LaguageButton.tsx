interface Props {
  icon?: React.ReactNode;
  text: string;
}

export const LaguageButton = ({ icon, text }: Props) => {
  return (
    <button className="pt-3 h-12 w-12 flex align-middle justify-center shadow-[0_5px_15px_1px_rgb(140,0,255,55%)] hover:shadow-[0_6px_20px_rgba(140,0,255,30%)] hover:bg-violet-800 bg-violet-700 rounded-full text-white font-semibold lg:font-medium transition duration-200 ease-linear">
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </button>
  );
};
