import { QuizResponseProps } from "./types"

export const QuizResponse = ({text, isActive=false, onClick}: QuizResponseProps ) => {
  return (
    <div 
      className={`w-full flex gap-4 rounded-lg p-4 bg-gray-200 cursor-pointer hover:bg-secondary-500 hover:p-5 transition-all ${isActive && 'bg-secondary-500'}`}
      onClick={onClick} 
    >
      <input 
        className="w-6 h-6 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
        type="checkbox"
        checked={isActive}
        onChange={() => {}}
      />
      <p>{text}</p>
    </div>
  )
}