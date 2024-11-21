import { FormOutlined } from '@ant-design/icons'
import { Breadcrumb, Flex, Space } from 'antd'

import { QuizzesList } from '@/components/ui/QuizzesList'
import { Wrapper } from '@/components/ui/Wrapper'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

export function Quizzes() {
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
								href: DASHBOARD_PAGES.QUIZZES,
								title: (
									<>
										<FormOutlined />
										<span>Тестирование</span>
									</>
								),
							},
						]}
					/>
					<h1 className='text-2xl font-bold'>Тестирование по курсу NestJs</h1>
				</Flex>
				<QuizzesList />
			</Space>
		</Wrapper>
	)
}
