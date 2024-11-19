import { FormOutlined } from '@ant-design/icons'
import { Breadcrumb, Space } from 'antd'

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
				<QuizzesList />
			</Space>
		</Wrapper>
	)
}
