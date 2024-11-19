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
	currentQuestionId: number
}

export function QuestionItem({ item, currentQuestionId }: Props) {
	const [messageApi, contextHolder] = message.useMessage()

	const [isLoading, setIsLoading] = useState(false)
	const [chosenId, setChosenId] = useState()

	const onChangeRadio = (e: RadioChangeEvent) => {
		console.log('radio checked', e.target.value)
		setChosenId(e.target.value)
	}

	const { data } = useQuiz(item.quizId.toString())
	const getNextLink = (): number => {
		if (!data?.questions) return -1
		const currentQuestionIndex = data.questions.findIndex(
			question => question.id == currentQuestionId
		)
		if (currentQuestionIndex === data.questions.length - 1) {
			window.location.replace(
				`${DASHBOARD_PAGES.QUIZZES}/${item.quizId}/completed`
			)
			return -1
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
			const nextLink = getNextLink()
			if (nextLink === -1) return
			message.success('Ответ отправлен')
			window.location.replace(
				`${DASHBOARD_PAGES.QUIZZES}/${item.quizId}/questions/${nextLink}`
			)
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

		const data: IUserAnswerFormState = {
			questionId: item.id,
			answerId: chosenId,
			isCorrect: chosenId == item.correctAnswerId,
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
							{item.answers?.map(i => <Radio value={i.id}>{i.text}</Radio>)}
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
