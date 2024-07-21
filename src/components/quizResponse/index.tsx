import { QuizResponseProps } from "./types"

export const QuizResponse = ({text, onClick, style='default'}: QuizResponseProps ) => {
  const variantStyles = {
    default: "bg-gray-200 hover:bg-secondary-500 hover:p-5 cursor-pointer",
    active: "bg-secondary-500 hover:p-5 cursor-pointer",
    wrong: "bg-red-500",
    correct: "bg-green-500"
  }

  return (
    <div 
      className={`w-full flex gap-4 rounded-lg p-4 ${variantStyles[style]}`}
      onClick={onClick} 
    >
      <input 
        className="w-6 h-6 bg-gray-100 border-gray-300 rounded transition-all focus:ring-primary-500"
        type="checkbox"
        checked={style === 'active'}
        onChange={() => {}}
      />
      <p>{text}</p>
    </div>
  )
}