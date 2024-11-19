import { useQuery } from '@tanstack/react-query'

import { quizService } from '@/services/quiz.service'

export default function useQuiz(id: string) {
	const { data, isLoading } = useQuery({
		queryKey: ['quiz'],
		queryFn: () => quizService.getById(id),
	})

	return { data, isLoading }
}
