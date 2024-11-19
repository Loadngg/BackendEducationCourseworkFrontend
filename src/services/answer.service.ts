import { IUserAnswerFormState } from '@/types/user.type'

import { axiosWithAuth } from '@/api/interceptors'

class AnswerService {
	private BASE_URL = '/answer'

	async createResult(data: IUserAnswerFormState) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response.data
	}
}

export const answerService = new AnswerService()
