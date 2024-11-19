export interface IQuiz {
	id: number
	title: string
	questions?: IQuizQuestion[]
}

export interface IQuizQuestion {
	id: number
	question: string
	correctAnswerId: number
	quizId: number
	answers?: IQuizAnswer[]
}

export interface IQuizAnswer {
	id: number
	text: string
	questionId: number
}
