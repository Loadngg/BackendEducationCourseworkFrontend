export interface IUserQuiz {
	id: React.Key
	userId: React.Key
	quizId: React.Key
	score: number
}

export interface IUserAnswer {
	id: React.Key
	userId: React.Key
	questionId: React.Key
	answerId: React.Key
	isCorrect: boolean
}

export type IUserQuizFormState = Partial<Omit<IUserQuiz, 'id'>>
export type IUserAnswerFormState = Partial<Omit<IUserAnswer, 'id' | 'userId'>>
