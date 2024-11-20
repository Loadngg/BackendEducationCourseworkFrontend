import { Button, Card } from 'antd'
import Link from 'next/link'

import { IQuiz } from '@/types/quiz.type'

interface Props {
	item: IQuiz | undefined
	completed: boolean | undefined
	showStartButton?: boolean
	startLink?: string
}

export function QuizItem({
	item,
	completed,
	showStartButton = false,
	startLink = '',
}: Props) {
	const cardTitle = completed ? `${item?.title} (Пройдено)` : item?.title
	return (
		<Card
			hoverable={!showStartButton && !completed}
			title={cardTitle}
			className={
				showStartButton ? 'text-center' : completed ? 'opacity-60' : ''
			}
		>
			<p className='mb-4'>
				Количество вопросов: {item?.questions ? item.questions.length : 0}
			</p>
			{showStartButton && (
				<Link href={startLink}>
					<Button
						type='primary'
						disabled={completed}
					>
						Начать тестирование
					</Button>
				</Link>
			)}
		</Card>
	)
}
