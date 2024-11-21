'use client'

import { useMutation } from '@tanstack/react-query'
import { Button, Card, Radio, RadioChangeEvent, Space, message } from 'antd'
import { useState } from 'react'

import { IQuizQuestion } from '@/types/quiz.type'
import { IUserAnswerFormState } from '@/types/user.type'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

import useQuiz from '@/hooks/useQuiz'

import { errorCatch } from '@/api/error'

import { answerService } from '@/services/answer.service'

interface Props {
	item: IQuizQuestion
	currentQuestionId: string
}

export function QuestionItem({ item, currentQuestionId }: Props) {
	const [messageApi, contextHolder] = message.useMessage()

	const [isLoading, setIsLoading] = useState(false)
	const [chosenId, setChosenId] = useState()
	const [correctAnswer, setCorrectAnswer] = useState<boolean>(false)

	const onChangeRadio = (e: RadioChangeEvent) => setChosenId(e.target.value)

	const { data } = useQuiz(item.quizId)
	const getNextLink = (): string | undefined => {
		if (!data?.questions) return
		const currentQuestionIndex = data.questions.findIndex(
			question => question.id == currentQuestionId
		)
		if (currentQuestionIndex === data.questions.length - 1) {
			window.location.replace(
				`${DASHBOARD_PAGES.QUIZZES}/${item.quizId}/completed`
			)
			return
		}

		const nextId = data.questions[currentQuestionIndex + 1].id
		return nextId
	}

	const { mutate } = useMutation({
		mutationKey: ['answer'],
		mutationFn: (data: IUserAnswerFormState) =>
			answerService.createResult(data),
		onSuccess() {
			setIsLoading(false)
			correctAnswer
				? messageApi.success('Ответ правильный')
				: messageApi.error('Ответ неверный')
			messageApi.success('Ответ отправлен')
			setTimeout(() => {
				const nextLink = getNextLink()
				if (nextLink === undefined) return
				window.location.replace(
					`${DASHBOARD_PAGES.QUIZZES}/${item.quizId}/questions/${nextLink}`
				)
			}, 2000)
		},
		onError(error) {
			setIsLoading(false)
			messageApi.error(`Произошла ошибка: "${errorCatch(error)}"`)
		},
	})

	const submit = () => {
		if (chosenId === undefined) {
			messageApi.error('Вы не выбрали ответ')
			return
		}

		const tempIsCorrect = chosenId === item.correctAnswerId
		setCorrectAnswer(tempIsCorrect)
		const data: IUserAnswerFormState = {
			questionId: item.id,
			quizId: item.quizId,
			answerId: chosenId,
			isCorrect: tempIsCorrect,
		}
		setIsLoading(true)
		mutate(data)
	}

	return (
		<>
			{contextHolder}
			<Card title={item.question}>
				<Space
					direction='vertical'
					size='middle'
					className='w-full'
				>
					<Radio.Group
						onChange={onChangeRadio}
						value={chosenId}
						disabled={isLoading}
					>
						<Space direction='vertical'>
							{item.answers?.map(i => (
								<Radio
									value={i.id}
									key={i.id}
								>
									{i.text}
								</Radio>
							))}
						</Space>
					</Radio.Group>
					<Button
						type='primary'
						onClick={submit}
						loading={isLoading}
					>
						Далее
					</Button>
				</Space>
			</Card>
		</>
	)
}
