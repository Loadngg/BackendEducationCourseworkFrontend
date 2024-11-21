import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Metadata } from 'next'

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'

import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>
				<Providers>
					<AntdRegistry>{children}</AntdRegistry>
				</Providers>
			</body>
		</html>
	)
}
