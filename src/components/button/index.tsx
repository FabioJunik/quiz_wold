import { ButtonProps, StyleButton } from "./types";

export function Button({children, style, className, onClick}: ButtonProps) {
  const variantsSyle = {
    default: "bg-primary-500 text-white hover:bg-primary-700",
    bottomless: "border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
  }

  return (
    <button 
      className={`text-sm px-5 py-3 rounded-lg font-semibold transition duration-300 ${variantsSyle[style ||'default']} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}