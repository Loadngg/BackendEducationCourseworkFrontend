'use client'

import { useQuery } from '@tanstack/react-query'
import { Skeleton } from 'antd'
import { useParams } from 'next/navigation'

import { AnswersList } from '@/components/ui/AnswersList'
import { Wrapper } from '@/components/ui/Wrapper'

import { questionService } from '@/services/questions.service'

export function Question() {
	const params = useParams<{ id: string; questionId: string }>()

	const { data, isLoading } = useQuery({
		queryKey: ['question'],
		queryFn: () => questionService.getById(params.id),
	})

	return (
		<Wrapper>
			{isLoading ? (
				<Skeleton active />
			) : (
				<div>
					{data?.question}
					<AnswersList data={data?.answers} />
				</div>
			)}
		</Wrapper>
	)
}
