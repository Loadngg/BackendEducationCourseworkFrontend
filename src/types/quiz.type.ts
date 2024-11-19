export interface IQuiz {
	id: React.Key
	title: string
	questions?: IQuizQuestion[]
}

export interface IQuizQuestion {
	id: React.Key
	question: string
	correctAnswerId: React.Key
	quizId: React.Key
	answers?: IQuizAnswer[]
}

export interface IQuizAnswer {
	id: React.Key
	text: string
	questionId: React.Key
}
