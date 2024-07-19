"use client"
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { QuizResponse } from "@/components/quizResponse";
import Image from "next/image";

export default function Quiz() {
  const quizImage = "http://localhost:3000/images/itachi.jpg"
  return (
    <Container>
      <main className="px-16 py-8">
        <div className="w-full bg-gray-200 rounded-full h-4 ">
          <div className="bg-primary-500 h-full rounded-full" style={{width: "45%"}}></div>
        </div>
        <h2 className="">Você sabe tudo sobre Naruto ?</h2>
        <div className="w-full flex gap-2 items-center">
          <Image 
            className="max-w-[750px] h-[400px] flex-1 rounded-lg" 
            src={quizImage} 
            alt="im" 
            width={100} 
            height={100}
            loader={() => quizImage}
          />
          <div className="flex flex-col items-end gap-2">
            <div className="flex flex-1 gap-2 flex-col">
              <QuizResponse text="Simplesmente o personagem mais mau do anime"/>
              <QuizResponse text="Simplesmente o personagem mais mau do anime"/>
              <QuizResponse text="Simplesmente o personagem mais mau do anime"/>
              <QuizResponse text="Simplesmente o personagem mais mau do anime"/>
              <QuizResponse text="Simplesmente o personagem mais mau do anime"/>
            </div>
            <div> 
              <Button className="px-10 py-3">Seguinte</Button>
            </div>
          </div>
        </div>
      </main>
    </Container>
  )
}