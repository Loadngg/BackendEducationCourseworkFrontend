import { Button, Card } from 'antd'

import { IQuizQuestion } from '@/types/quiz.type'

import { AnswersList } from './AnswersList'

export function QuestionItem({ item }: { item: IQuizQuestion }) {
	return (
		<Card title={item?.question}>
			<AnswersList data={item?.answers} />
			<Button type='primary'>Далее</Button>
		</Card>
	)
}
