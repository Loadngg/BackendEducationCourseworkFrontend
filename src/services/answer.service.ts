import { IUserAnswer, IUserAnswerFormState } from '@/types/user.type'

import { axiosWithAuth } from '@/api/interceptors'

class AnswerService {
	private BASE_URL = '/answer'

	async getByQuizId(quizId: string) {
		const response = await axiosWithAuth.get<IUserAnswer[]>(
			`${this.BASE_URL}/${quizId}`
		)
		return response.data
	}

	async createResult(data: IUserAnswerFormState) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response.data
	}
}

export const answerService = new AnswerService()
