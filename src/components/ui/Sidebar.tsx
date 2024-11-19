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
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

import { authService } from '@/services/auth.service'

export function Sidebar() {
	const [collapsed, setCollapsed] = useState(true)
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push(DASHBOARD_PAGES.AUTH),
	})

	const menu_items: ItemType<MenuItemType>[] = [
		{
			key: '1',
			icon: <UserOutlined />,
			label: <Link href={DASHBOARD_PAGES.PROFILE}>Профиль</Link>,
		},
		{
			key: '2',
			icon: <BookOutlined />,
			label: <Link href={DASHBOARD_PAGES.LECTURES}>Лекции</Link>,
		},
		{
			key: '3',
			icon: <FormOutlined />,
			label: <Link href={DASHBOARD_PAGES.QUIZZES}>Тесты</Link>,
		},
		{
			key: '4',
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
				defaultSelectedKeys={['2']}
				items={menu_items}
			/>
		</Sider>
	)
}
