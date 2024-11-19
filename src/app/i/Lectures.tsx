import { BookOutlined } from '@ant-design/icons'
import { Breadcrumb, Space } from 'antd'

import { LectureList } from '@/components/ui/LectureList'
import { Wrapper } from '@/components/ui/Wrapper'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

export function Lectures() {
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
					]}
				/>
				<LectureList />
			</Space>
		</Wrapper>
	)
}
