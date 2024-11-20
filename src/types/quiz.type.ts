export interface IQuiz {
	id: string
	title: string
	questions?: IQuizQuestion[]
}

export interface IQuizQuestion {
	id: string
	question: string
	correctAnswerId: string
	quizId: string
	answers?: IQuizAnswer[]
}

export interface IQuizAnswer {
	id: string
	text: string
	questionId: string
}
