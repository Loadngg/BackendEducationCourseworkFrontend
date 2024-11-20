import { IUserQuiz, IUserQuizFormState } from '@/types/user.type'

import { axiosWithAuth } from '@/api/interceptors'

class UserService {
	private BASE_URL = '/user'

	async getResults() {
		const response = await axiosWithAuth.get<IUserQuiz[]>(this.BASE_URL)
		return response.data
	}

	async createResult(data: IUserQuizFormState) {
		const response = await axiosWithAuth.post(`${this.BASE_URL}/result`, data)
		return response.data
	}
}

export const userService = new UserService()
