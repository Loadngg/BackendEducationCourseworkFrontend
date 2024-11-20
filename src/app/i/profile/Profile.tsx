import { UserOutlined } from '@ant-design/icons'
import { Breadcrumb, Space } from 'antd'

import { UserResultsList } from '@/components/ui/UserResultsList'
import { Wrapper } from '@/components/ui/Wrapper'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

export function Profile() {
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
							href: DASHBOARD_PAGES.PROFILE,
							title: (
								<>
									<UserOutlined />
									<span>Профиль</span>
								</>
							),
						},
					]}
				/>
				<UserResultsList />
			</Space>
		</Wrapper>
	)
}
