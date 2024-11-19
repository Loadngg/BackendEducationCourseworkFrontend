import { Metadata } from 'next'

import { Lecture } from './Lecture'

export const metadata: Metadata = {
	title: 'Лекция',
}

export default function LecturePage() {
	return <Lecture />
}
