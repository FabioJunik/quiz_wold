import { Header } from "../header"
import { ContainerProps } from "./types"

export const Container = ({children}: ContainerProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header/>
      {children}
    </div>
  )
}