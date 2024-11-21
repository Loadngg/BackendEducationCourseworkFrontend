import { List, Progress } from 'antd'

import { IUserQuiz } from '@/types/user.type'

interface Props {
	index: number
	item: IUserQuiz
	quizQuestionsLength: number | undefined
	quizTitle: string | undefined
}

export function UserResult({
	index,
	item,
	quizQuestionsLength,
	quizTitle,
}: Props) {
	return (
		<List.Item
			key={index}
			extra={[
				<Progress
					type='dashboard'
					percent={item.score}
					size={80}
				/>,
			]}
		>
			<List.Item.Meta
				title={quizTitle ? quizTitle : 'Загрузка названия...'}
				description={`Количество верных ответов: ${quizQuestionsLength ? quizQuestionsLength * (item.score / 100) + '/' + quizQuestionsLength : '(Загрузка...)'}`}
			/>
		</List.Item>
	)
}
