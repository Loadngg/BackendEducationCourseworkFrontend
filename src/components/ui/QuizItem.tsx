import { Button, Card } from 'antd'
import Link from 'next/link'

import { IQuiz } from '@/types/quiz.type'

interface Props {
	item: IQuiz | undefined
	showStartButton?: boolean
	startLink?: string
}

export function QuizItem({
	item,
	showStartButton = false,
	startLink = '',
}: Props) {
	return (
		<Card
			hoverable={!showStartButton}
			title={item?.title}
			className={showStartButton ? 'text-center' : ''}
		>
			<p className='mb-4'>
				Количество вопросов: {item?.questions ? item.questions.length : 0}
			</p>
			{showStartButton && (
				<Link href={startLink}>
					<Button type='primary'>Начать тестирование</Button>
				</Link>
			)}
		</Card>
	)
}
