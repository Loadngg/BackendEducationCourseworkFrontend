import { Button, Layout, Result } from 'antd'
import Link from 'next/link'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

export function Completed() {
	return (
		<Layout className='flex flex-col items-center justify-center h-screen'>
			<Result
				status='success'
				title='Вы успешно завершили данный тест!'
				extra={[
					<Link href={DASHBOARD_PAGES.LECTURES}>
						<Button type='primary'>Вернуться к лекциям</Button>
					</Link>,
				]}
			/>
		</Layout>
	)
}
