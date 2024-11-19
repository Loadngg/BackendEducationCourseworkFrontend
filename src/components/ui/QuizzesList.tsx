'use client'

import { useQuery } from '@tanstack/react-query'
import { List, Skeleton } from 'antd'
import Link from 'next/link'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

import { QuizItem } from './QuizItem'
import { quizService } from '@/services/quiz.service'

export function QuizzesList() {
	const { data, isLoading } = useQuery({
		queryKey: ['quiz'],
		queryFn: () => quizService.getAll(),
	})

	return isLoading ? (
		<Skeleton active />
	) : (
		<List
			pagination={{ position: 'bottom', align: 'center' }}
			grid={{ gutter: 16, column: 4 }}
			dataSource={data}
			renderItem={(item, index) => (
				<List.Item key={index}>
					<Link href={`${DASHBOARD_PAGES.QUIZZES}/${item?.id}`}>
						<QuizItem item={item} />
					</Link>
				</List.Item>
			)}
		/>
	)
}
