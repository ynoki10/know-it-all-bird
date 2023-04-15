type Props = {
  onClick: () => void;
  text: string;
  disabled?: boolean;
};

const Button = ({ onClick, text, disabled = false }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'flex w-full cursor-pointer items-center justify-center rounded-full border-0 bg-accentOrange py-3 font-bold text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:bg-gray-400'
      }
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
