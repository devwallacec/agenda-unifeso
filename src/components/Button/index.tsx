interface IButtonProps { 
  label: string;
  onClick: () => void;
  type: "button" | "submit" | "reset";
  className: string;
}

// Componente base para botões
export const Button = ({className,label,onClick,type}: IButtonProps) => {
  return (
    <button
    type={type}
    onClick={onClick}
    className={`${className} text-white px-2 py-4 rounded-md w-1/2 self-end`}
  >
    {label}
  </button>
  )
}