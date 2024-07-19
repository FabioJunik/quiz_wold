"use client"
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { QuizResponse } from "@/components/quizResponse";
import { Quiz } from "@/model/quiz";
import { quizService } from "@/services/quiz-service";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function QuizPage() {
  const [quiz, setQuiz] = useState<Quiz>()
  const {id} = useParams()
  const quizId = Number(id)

  useEffect(() => {
    quizService.getOne(quizId).then((result) => {
      setQuiz(result)
    });
  }, [quizId])

  if(!quiz || !quiz.questions) return 
  return (
    <Container>
      <main className="px-16 py-8">
        <div className="w-full bg-gray-200 rounded-full h-4 ">
          <div className="bg-primary-500 h-full rounded-full" style={{width: "45%"}}></div>
        </div>
        {quiz.questions.map((question, i) => (
          <div key={i}>
            <h2 className="">{question.text}</h2>
            <div className="w-full flex gap-2 items-center">
              <Image 
                className="w-[650px] h-[400px] flex-1 rounded-lg" 
                src={question.image} 
                alt="im" 
                width={100} 
                height={100}
                loader={() => question.image}
              />
              <div className="w-full flex flex-col items-end gap-2">
                <div className="w-full flex gap-2 flex-col">
                  {question.responses?.map((_, i) => (
                    <QuizResponse key={i} text={_.text}/>
                   ))}
                </div>
                <div> 
                  <Button className="px-10 py-3">Seguinte</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </Container>
  )
}