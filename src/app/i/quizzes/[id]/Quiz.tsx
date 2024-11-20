'use client'

import { StyleProvider } from '@ant-design/cssinjs'
import { FormOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import { Breadcrumb, Skeleton, Space } from 'antd'
import { useParams } from 'next/navigation'

import { QuizItem } from '@/components/ui/QuizItem'
import { Wrapper } from '@/components/ui/Wrapper'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

import { quizService } from '@/services/quiz.service'

export function Quiz() {
	const params = useParams<{ id: string }>()

	const { data, isLoading } = useQuery({
		queryKey: ['quiz'],
		queryFn: () => quizService.getById(params.id),
	})

	return (
		<StyleProvider layer>
			<Wrapper>
				<Space
					direction='vertical'
					size='middle'
					className={'w-full'}
				>
					<Breadcrumb
						items={[
							{
								href: DASHBOARD_PAGES.QUIZZES,
								title: (
									<>
										<FormOutlined />
										<span>Тестирование</span>
									</>
								),
							},
							{
								href: `${DASHBOARD_PAGES.QUIZZES}/${params.id}`,
								title: params.id,
							},
						]}
					/>
					{isLoading || !data?.questions ? (
						<Skeleton active />
					) : (
						<QuizItem
							item={data}
							showStartButton
							startLink={`${DASHBOARD_PAGES.QUIZZES}/${params.id}/questions/${data.questions[0].id}`}
							completed={false}
						/>
					)}
				</Space>
			</Wrapper>
		</StyleProvider>
	)
}
