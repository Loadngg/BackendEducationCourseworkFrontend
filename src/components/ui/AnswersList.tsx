import { List } from 'antd'

import { IQuizAnswer } from '@/types/quiz.type'

import { AnswersItem } from './AnswersItem'

export function AnswersList({ data }: { data: IQuizAnswer[] | undefined }) {
	return (
		<List
			dataSource={data}
			itemLayout='horizontal'
			renderItem={(item, index) => (
				<List.Item key={index}>
					<AnswersItem item={item} />
				</List.Item>
			)}
		/>
	)
}
