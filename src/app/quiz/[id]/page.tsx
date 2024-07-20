"use client"
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { QuizResponse } from "@/components/quizResponse";
import { Question } from "@/model/question";
import { Quiz } from "@/model/quiz";
import { quizService } from "@/services/quiz-service";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function QuizPage() {
  const [quiz, setQuiz] = useState<Quiz>()
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selectedResponses, setSelectedResponses] = useState<string>('')

  const {id} = useParams()
  const quizId = Number(id)

  useEffect(() => {
    quizService.getOne(quizId).then((result) => {
      setQuiz(result)

      if(result.questions)
        setCurrentQuestion(result.questions[0])
    });
  }, [quizId])

  if(!currentQuestion) return 

  function handleNextQuestion() {
    if(!quiz?.questions) return 
    const { questions } = quiz

    const currentIndex = getCurrentQuestionIndex()

    if(currentIndex < questions.length - 1)
      setCurrentQuestion(questions[currentIndex + 1])

    setSelectedResponses('')
    isResponseCorrect()
   }

   function getCurrentQuestionIndex(): number {
    if(!currentQuestion || !quiz?.questions) return -1 

    return quiz.questions.findIndex(({id}) => id === currentQuestion.id)
   }

  function addResponse(id: number) {
    const responseId = id.toString()
    
    if(selectedResponses.includes(responseId)) return
    
    setSelectedResponses(selectedResponses.length? `${selectedResponses}:${id}`: `${id}`)
  }

  function removeResponse(id: number) {
    const responseId = id.toString()
    
    if(!selectedResponses?.includes(responseId)) return

    setSelectedResponses(selectedResponses.replace(`:${responseId}`, ''))
  }
  
  function handleSelectResponse(id: number) {
    const responseId = id.toString()

    !selectedResponses?.includes(responseId) ? addResponse(id) : removeResponse(id) 
  }

  function isResponseCorrect(): boolean {
    if(!selectedResponses) return false

    const correctResponsesSort = currentQuestion?.correctResponses.split(':').sort().join(':')
    const selectedResponsesSort = selectedResponses.split(':').sort().join(':') 

    console.log({correctResponsesSort, selectedResponsesSort})
    console.log(correctResponsesSort === selectedResponsesSort)

    return correctResponsesSort === selectedResponsesSort
  }
  
  return (
    <Container>
      <main className="px-16 py-8">
        <div className="w-full bg-gray-200 rounded-full h-4 ">
          <div className="bg-primary-500 h-full rounded-full" style={{width: "45%"}}></div>
        </div>
          <div>
            <h2 className="">{currentQuestion.text}</h2>
            <div className="w-full flex gap-2 items-center">
              <Image 
                className="w-[650px] h-[400px] flex-1 rounded-lg" 
                src={currentQuestion.image} 
                alt="im" 
                width={100} 
                height={100}
                loader={() => currentQuestion.image}
              />
              <div className="w-full flex flex-col items-end gap-2">
                <div className="w-full flex gap-2 flex-col">
                  {currentQuestion.responses?.map((_, i) => (
                    <QuizResponse 
                      key={i} 
                      text={_.text} 
                      isActive={selectedResponses?.includes(_.id.toString())}
                      onClick={() => handleSelectResponse(_.id)}  
                    /> 
                  ))}
                </div>
                <div> 
                  <Button 
                    className="px-10 py-3" onClick={handleNextQuestion}
                  >
                    Seguinte
                  </Button>
                </div>
              </div>
            </div>
          </div>
      </main>
    </Container>
  )
}