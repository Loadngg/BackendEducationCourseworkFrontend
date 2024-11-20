'use client'

import { useQuery } from '@tanstack/react-query'
import { List, Skeleton } from 'antd'
import Link from 'next/link'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

import { QuizItem } from './QuizItem'
import { quizService } from '@/services/quiz.service'
import { userService } from '@/services/user.service'

export function QuizzesList() {
	const quizQuery = useQuery({
		queryKey: ['quiz'],
		queryFn: () => quizService.getAll(),
	})

	const userQuizQuery = useQuery({
		queryKey: ['user'],
		queryFn: () => userService.getResults(),
	})

	const userQuizIds = new Set(
		userQuizQuery.data?.map(userQuiz => userQuiz.quizId)
	)
	const completedQuizzes = quizQuery.data?.filter(quiz =>
		userQuizIds.has(quiz.id)
	)

	return quizQuery.isLoading ? (
		<Skeleton active />
	) : (
		<List
			pagination={{ position: 'bottom', align: 'center' }}
			grid={{ gutter: 16, column: 4 }}
			dataSource={quizQuery.data}
			renderItem={(item, index) => (
				<List.Item key={index}>
					{completedQuizzes?.includes(item) ? (
						<QuizItem
							item={item}
							completed={true}
						/>
					) : (
						<Link href={`${DASHBOARD_PAGES.QUIZZES}/${item?.id}`}>
							<QuizItem
								item={item}
								completed={false}
							/>
						</Link>
					)}
				</List.Item>
			)}
		/>
	)
}
