import { Container } from "@/components/container";
import { InputSearch } from "@/components/input-search/input-search";
import { QuizCard } from "@/components/quiz-card";

export default function QuizExplorePage() {
  const options = ['all', 'history', 'literature', 'science', 'sports']
  return (
    <Container>
      <div className="py-4 px-16">
        <h2 className="mb-2">Quiz Explorer</h2>
        <InputSearch options={options}/>

        <div className="grid justify-items-center grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16">
          <QuizCard/>
          <QuizCard/>
          <QuizCard/>
          <QuizCard/>
          <QuizCard/>
        </div>
      </div>
    </Container>
  )
}