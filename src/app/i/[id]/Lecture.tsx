'use client'

import { BookOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import { Breadcrumb, Card, Divider, Skeleton, Space } from 'antd'
import { useParams } from 'next/navigation'
import Markdown from 'react-markdown'

import MaterialList from '@/components/ui/MaterialList'
import { Wrapper } from '@/components/ui/Wrapper'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

import { lectureService } from '@/services/lecture.service'

export function Lecture() {
	const params = useParams<{ id: string }>()

	const { data, isLoading } = useQuery({
		queryKey: ['lecture'],
		queryFn: () => lectureService.getById(params.id),
	})

	return (
		<Wrapper>
			<Space
				direction='vertical'
				size='middle'
				className='w-full'
			>
				<Breadcrumb
					items={[
						{
							href: DASHBOARD_PAGES.LECTURES,
							title: (
								<>
									<BookOutlined />
									<span>Лекции</span>
								</>
							),
						},
						{
							href: `${DASHBOARD_PAGES.LECTURES}/${params.id}`,
							title: params.id,
						},
					]}
				/>
				{isLoading ? (
					<Skeleton active />
				) : (
					<Card
						title={data?.title}
						className='w-full'
					>
						<Markdown>{data?.text}</Markdown>
						<Divider orientation='left'>Материалы лекции</Divider>
						<MaterialList materials={data?.materials} />
					</Card>
				)}
			</Space>
		</Wrapper>
	)
}
