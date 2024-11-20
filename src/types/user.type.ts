export interface IUserQuiz {
	id: string
	userId: string
	quizId: string
	score: number
}

export interface IUserAnswer {
	id: string
	userId: string
	questionId: string
	quizId: string
	answerId: string
	isCorrect: boolean
}

export type IUserQuizFormState = Partial<Omit<IUserQuiz, 'id' | 'userId'>>
export type IUserAnswerFormState = Partial<Omit<IUserAnswer, 'id' | 'userId'>>
