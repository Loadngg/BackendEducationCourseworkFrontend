import { Card } from 'antd'
import Link from 'next/link'

import { ILecture } from '@/types/lecture.type'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

interface Props {
	item: ILecture
}

export default function LectureItem({ item }: Props) {
	return (
		<Link
			href={`${DASHBOARD_PAGES.LECTURES}/${item.id}`}
			className='w-full'
		>
			<Card
				className='font-bold'
				hoverable
			>
				{item.id}. {item.title}
			</Card>
		</Link>
	)
}
