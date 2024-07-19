import { QuizResponseProps } from "./types"

export const QuizResponse = ({text}: QuizResponseProps ) => {
  return (
    <div className="w-full flex gap-4 rounded-lg py-4 px-4 bg-gray-200 cursor-pointer hover:bg-secondary-500">
      <input type="checkbox" className="w-6 h-6 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"/>
      <p>{text}</p>
    </div>
  )
}