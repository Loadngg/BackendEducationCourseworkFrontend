'use client'

import { Progress, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'

import useQuiz from '@/hooks/useQuiz'

interface Props {
	quizId: string
	currentQuestionId: string
}

export function ProgressBar({ quizId, currentQuestionId }: Props) {
	const [percentage, setPercentage] = useState<number>(0)
	const { data, isLoading } = useQuiz(quizId)

	useEffect(() => {
		if (isLoading || !data || !data.questions) return

		const totalQuestions = data.questions.length
		const currentQuestionIndex = data.questions.findIndex(
			question => question.id == currentQuestionId
		)
		if (currentQuestionIndex && totalQuestions) {
			const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100
			setPercentage(progress)
		}
	}, [data])

	return isLoading ? (
		<Skeleton active />
	) : (
		<Progress
			percent={percentage}
			showInfo={false}
		/>
	)
}
