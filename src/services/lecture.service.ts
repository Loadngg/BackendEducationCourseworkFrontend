import { ILecture } from '@/types/lecture.type'

import { axiosWithAuth } from '@/api/interceptors'

class LectureService {
	private BASE_URL = '/lecture'

	async getAll() {
		const response = await axiosWithAuth.get<ILecture[]>(this.BASE_URL)
		let data = response.data
		if (data.length > 0) {
			data = data.toSorted((a, b) => Number(a.id) - Number(b.id))
		}
		return data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<ILecture>(`${this.BASE_URL}/${id}`)
		return response.data
	}
}

export const lectureService = new LectureService()
