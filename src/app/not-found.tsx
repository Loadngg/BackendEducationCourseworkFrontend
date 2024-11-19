import { Button, Layout, Result } from 'antd'
import { Metadata } from 'next'
import Link from 'next/link'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

export const metadata: Metadata = {
	title: '404',
	...NO_INDEX_PAGE,
}

export default function NotFound() {
	return (
		<Layout className='flex flex-col items-center justify-center h-screen'>
			<Result
				status='404'
				title='404'
				subTitle='Данной страницы не существует'
				extra={
					<Link href={DASHBOARD_PAGES.LECTURES}>
						<Button type='primary'>Вернуться назад</Button>
					</Link>
				}
			/>
		</Layout>
	)
}
