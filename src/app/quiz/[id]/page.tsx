"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Question } from "@/model/question";
import { Quiz } from "@/model/quiz";
import { quizService } from "@/services/quiz-service";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { QuizResponse } from "@/components/quizResponse";
import { QuizResponseStyle } from "@/components/quizResponse/types";

interface SelectResponse {
  id: number;
  style: QuizResponseStyle;
}
export default function QuizPage() {
  const [quiz, setQuiz] = useState<Quiz>()
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selectedResponses, setSelectedResponses] = useState<SelectResponse[]>([])

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
    
    selecteWrongAndCorrectResponse()

    if(currentIndex < questions.length - 1){
      setTimeout(() => {
        setCurrentQuestion(questions[currentIndex + 1])
        setSelectedResponses([])
      }, 1000)
    }
    
   }

   function getCurrentQuestionIndex(): number {
    if(!currentQuestion || !quiz?.questions) return -1 

    return quiz.questions.findIndex(({id}) => id === currentQuestion.id)
   }

  function addResponse(id: number) {
    setSelectedResponses([...selectedResponses, { id, style: 'active' }])
  }

  function removeResponse(id: number) {
    setSelectedResponses(selectedResponses.filter(_ => _.id !== id))
  }
  
  const isResponseSelected = (id: number) => selectedResponses.some(response => response.id === id)

  function handleSelectResponse(id: number) {
    !isResponseSelected(id) ? addResponse(id) : removeResponse(id) 
  }

  function selecteWrongAndCorrectResponse() {
    const responses = selectedResponses.map(response => {
      if(currentQuestion?.correctResponses.includes(response.id.toString())) {
        return {...response, style: 'correct' }
      }

      return {...response, style: 'wrong' }
    }) as SelectResponse[]

    setSelectedResponses([...responses])
  }

  function isResponseCorrect(): boolean {
    if(!selectedResponses.length) return false

    const correctResponsesSort = sortResponses(currentQuestion?.correctResponses || '')
    const responsesId = selectedResponses.map(_ => _.id).join(':')
    const responsesSort = sortResponses(responsesId) 

    return correctResponsesSort === responsesSort
  }

  const sortResponses = (responses: string) =>  responses.split(':').sort().join(':')
  
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
                      onClick={() => handleSelectResponse(_.id)}
                      style={selectedResponses.find(r => r.id === _.id)?.style}
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