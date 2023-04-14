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
        'flex items-center justify-center w-full font-bold bg-accentOrange rounded-full text-white cursor-pointer py-3 border-0 transition-opacity hover:opacity-80 disabled:bg-gray-400 disabled:cursor-not-allowed'
      }
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
