import { BookOutlined } from '@ant-design/icons'
import { Breadcrumb, Flex, Space } from 'antd'

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
				<Flex
					justify='space-between'
					align='center'
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
					<h1 className='text-2xl font-bold'>
						Лекционный курс по бэкенд на NestJs
					</h1>
				</Flex>
				<LectureList />
			</Space>
		</Wrapper>
	)
}
