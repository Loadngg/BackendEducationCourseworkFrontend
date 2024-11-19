import { IQuiz } from '@/types/quiz.type'

import { axiosWithAuth } from '@/api/interceptors'

class QuizService {
	private BASE_URL = '/quiz'

	async getAll() {
		const response = await axiosWithAuth.get<IQuiz[]>(this.BASE_URL)
		return response.data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<IQuiz>(`${this.BASE_URL}/${id}`)
		return response.data
	}
}

export const quizService = new QuizService()
