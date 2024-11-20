import { List, Progress } from 'antd'

import { IUserQuiz } from '@/types/user.type'

interface Props {
	index: number
	item: IUserQuiz
	quizTitle: string | undefined
}

export function UserResult({ index, item, quizTitle }: Props) {
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
			<List.Item.Meta title={quizTitle ? quizTitle : 'Загрузка названия...'} />
		</List.Item>
	)
}
