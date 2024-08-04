import { Header } from "../header"
import { ContainerProps } from "./types"

export const Container = ({children}: ContainerProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header/>
      <div className="px-16 py-8">
        {children}
      </div>
    </div>
  )
}