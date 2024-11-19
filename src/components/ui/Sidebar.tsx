'use client'

import {
	BookOutlined,
	FormOutlined,
	LogoutOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { useMutation } from '@tanstack/react-query'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { ItemType, MenuItemType } from 'antd/es/menu/interface'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

import { authService } from '@/services/auth.service'

export function Sidebar() {
	const [collapsed, setCollapsed] = useState(true)
	const { push } = useRouter()
	const pathname = usePathname()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => push(DASHBOARD_PAGES.AUTH),
	})

	const menu_items: ItemType<MenuItemType>[] = [
		{
			key: DASHBOARD_PAGES.PROFILE,
			icon: <UserOutlined />,
			label: <a href={DASHBOARD_PAGES.PROFILE}>Профиль</a>,
		},
		{
			key: DASHBOARD_PAGES.LECTURES,
			icon: <BookOutlined />,
			label: <a href={DASHBOARD_PAGES.LECTURES}>Лекции</a>,
		},
		{
			key: DASHBOARD_PAGES.QUIZZES,
			icon: <FormOutlined />,
			label: <a href={DASHBOARD_PAGES.QUIZZES}>Тесты</a>,
		},
		{
			key: DASHBOARD_PAGES.AUTH,
			icon: <LogoutOutlined />,
			label: 'Выйти',
			onClick: () => mutate(),
		},
	]

	return (
		<Sider
			collapsible
			collapsed={collapsed}
			onCollapse={value => setCollapsed(value)}
			className='overflow-auto h-screen fixed start-0 top-0 bottom-0'
		>
			<Menu
				theme='dark'
				mode='inline'
				selectedKeys={[pathname]}
				items={menu_items}
			/>
		</Sider>
	)
}
