import { Flex, Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'

import { Sidebar } from '@/components/ui/Sidebar'

export function Wrapper({
	children,
}: Readonly<{
	children?: React.ReactNode
}>) {
	return (
		<Flex className='h-screen'>
			<Sidebar />
			<Layout>
				<Content className='m-4 overflow-y-scroll'>{children}</Content>
				<Footer className='text-center'>
					Coursework of Backend Education y.2024
				</Footer>
			</Layout>
		</Flex>
	)
}
