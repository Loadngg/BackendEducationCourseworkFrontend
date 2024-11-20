'use client'

import { useQuery } from '@tanstack/react-query'
import { Skeleton, Space } from 'antd'
import { useParams } from 'next/navigation'

import { ProgressBar } from '@/components/ui/ProgressBar'
import { QuestionItem } from '@/components/ui/QuestionItem'
import { Wrapper } from '@/components/ui/Wrapper'

import { questionService } from '@/services/questions.service'

export function Question() {
	const params = useParams<{ id: string; questionId: string }>()

	const { data, isLoading } = useQuery({
		queryKey: ['question'],
		queryFn: () => questionService.getById(params.questionId),
	})

	return (
		<Wrapper>
			{isLoading ? (
				<Skeleton active />
			) : (
				data && (
					<Space
						direction='vertical'
						size='large'
						className='w-full'
					>
						<ProgressBar
							quizId={data.quizId}
							currentQuestionId={data.id}
						/>
						<QuestionItem
							item={data}
							currentQuestionId={data.id}
						/>
					</Space>
				)
			)}
		</Wrapper>
	)
}
