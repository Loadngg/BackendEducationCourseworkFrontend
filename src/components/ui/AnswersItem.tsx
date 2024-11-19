import { IQuizAnswer } from '@/types/quiz.type'

export function AnswersItem({ item }: { item: IQuizAnswer }) {
	return item.text
}
