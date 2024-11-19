import { IQuizQuestion } from '@/types/quiz.type'

import { axiosWithAuth } from '@/api/interceptors'

class QuestionService {
	private BASE_URL = '/question'

	async getById(id: string) {
		const response = await axiosWithAuth.get<IQuizQuestion>(
			`${this.BASE_URL}/${id}`
		)
		return response.data
	}
}

export const questionService = new QuestionService()
