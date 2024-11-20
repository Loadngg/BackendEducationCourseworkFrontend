'use client'

import { useQuery } from '@tanstack/react-query'
import { List, Skeleton } from 'antd'

import { UserResult } from './UserResult'
import { quizService } from '@/services/quiz.service'
import { userService } from '@/services/user.service'

export function UserResultsList() {
	const quizQuery = useQuery({
		queryKey: ['quiz'],
		queryFn: () => quizService.getAll(),
	})

	const userQuizQuery = useQuery({
		queryKey: ['user'],
		queryFn: () => userService.getResults(),
	})

	return userQuizQuery.isLoading ? (
		<Skeleton active />
	) : (
		<List
			pagination={{ position: 'bottom', align: 'center' }}
			dataSource={userQuizQuery.data}
			itemLayout='horizontal'
			renderItem={(item, index) => (
				<UserResult
					index={index}
					item={item}
					quizTitle={
						quizQuery.data?.find(quiz => quiz.id === item.quizId)?.title
					}
				/>
			)}
		/>
	)
}
