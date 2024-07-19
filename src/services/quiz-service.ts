import { api } from "@/config/api";
import { Quiz } from "@/model/quiz";

export const quizService = {
  async getOne(id: number): Promise<Quiz> {
    const quiz = await api.get('/quiz.json')

    return quiz.data
  }
}