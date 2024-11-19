export interface IUserQuiz {
	id: number
	userId: number
	quizId: number
	score: number
}

export interface IUserAnswer {
	id: number
	userId: number
	questionId: number
	answerId: number
	isCorrect: boolean
}

export type IUserQuizFormState = Partial<Omit<IUserQuiz, 'id'>>
export type IUserAnswerFormState = Partial<Omit<IUserAnswer, 'id' | 'userId'>>
