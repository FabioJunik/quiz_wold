import { Button } from "@/components/button";
import { Container } from "@/components/container";
import image from "../../../../../public/images/cuate.png"
import Image from "next/image";

export default function QuizCompletePage() {
  return (
    <Container>
      <div className="flex px-16 py-8 gap-8 flex-1 justify-between">
        <div className=" ">
          <h1>Quiz concluído</h1>
          <p className="text-2xl mt-8">Parabéns você finalizou o quiz com 88% de respostas certas. </p>
          <div className="bg-secondary-500 p-4 my-4 rounded-md">
            <p>✅ Respostas certas: 15</p>
            <p>❌ Respostas erradas: 5</p>
            <p>⏰ Tempo feito: 02:50s</p>
            <p>📊 Pontos : +50pts</p>
          </div>
          <div className="w-full flex justify-end gap-2 mt-24">
            <Button className="px-14" style="bottomless">Refazer</Button>
            <Button className="px-14">Concluir</Button>
          </div>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <Image src={image} alt="Cuate" />
        </div>
      </div>
    </Container>
  )
}