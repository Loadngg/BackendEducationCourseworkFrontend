'use client'

import { useQuery } from '@tanstack/react-query'
import { List, Skeleton } from 'antd'

import LectureItem from '../ui/LectureItem'

import { lectureService } from '@/services/lecture.service'

export function LectureList() {
	const { data, isLoading } = useQuery({
		queryKey: ['lecture'],
		queryFn: () => lectureService.getAll(),
	})

	return isLoading ? (
		<Skeleton active />
	) : (
		<List
			pagination={{ position: 'bottom', align: 'center' }}
			dataSource={data}
			itemLayout='horizontal'
			renderItem={(item, index) => (
				<List.Item key={index}>
					<LectureItem item={item} />
				</List.Item>
			)}
		/>
	)
}
