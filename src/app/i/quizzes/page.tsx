import { Metadata } from 'next'

import { Quizzes } from './Quizzes'

export const metadata: Metadata = {
	title: 'Тестирование',
}

export default function QuizzesPage() {
	return <Quizzes />
}
