import { ButtonProps, StyleButton } from "./types";

export function Button({children, style, className, onClick}: ButtonProps) {
  const variantsSyle = {
    default: "bg-primary-500 text-white",
    bottomless: "border border-primary-500 text-primary-500"
  }

  return (
    <button 
      className={`text-sm px-4 py-2 rounded-lg font-semibold ${variantsSyle[style ||'default']} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}