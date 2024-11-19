import { Metadata } from 'next'

import { Lectures } from './Lectures'

export const metadata: Metadata = {
	title: 'Лекции',
}

export default function LecturesPage() {
	return <Lectures />
}
