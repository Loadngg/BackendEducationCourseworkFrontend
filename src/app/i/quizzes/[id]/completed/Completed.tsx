'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Layout, Result, message } from 'antd'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

import { IUserAnswer, IUserQuizFormState } from '@/types/user.type'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

import { errorCatch } from '@/api/error'

import { answerService } from '@/services/answer.service'
import { userService } from '@/services/user.service'

const calculateScore = (data: IUserAnswer[] | undefined): number => {
	if (!data) return 0
	const totalAnswers = data?.length
	const correctAnswers = data?.filter(answer => answer.isCorrect).length

	const score = (correctAnswers / totalAnswers) * 100
	return score
}

export function Completed() {
	const params = useParams<{ id: string }>()
	const [messageApi, contextHolder] = message.useMessage()

	const { data, isLoading } = useQuery({
		queryKey: ['answer'],
		queryFn: () => answerService.getByQuizId(params.id),
	})

	const result: IUserQuizFormState = {
		quizId: params.id,
		score: calculateScore(data),
	}

	const { mutate } = useMutation({
		mutationKey: ['user'],
		mutationFn: (data: IUserQuizFormState) => userService.createResult(data),
		onSuccess() {
			messageApi.success('Ответ отправлен')
		},
		onError(error) {
			messageApi.error(`Произошла ошибка: "${errorCatch(error)}"`)
		},
	})

	useEffect(() => {
		if (data === undefined) return
		mutate(result)
	}, [isLoading, data])

	return (
		<>
			{contextHolder}
			<Layout className='flex flex-col items-center justify-center h-screen'>
				<Result
					status='success'
					title='Вы успешно завершили данный тест!'
					extra={[
						<Link href={DASHBOARD_PAGES.LECTURES}>
							<Button type='primary'>Вернуться к лекциям</Button>
						</Link>,
					]}
				/>
			</Layout>
		</>
	)
}
