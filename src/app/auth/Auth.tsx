'use client'

import { StyleProvider } from '@ant-design/cssinjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Button, Card, Flex, Form, Input, Layout, message } from 'antd'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormItem } from 'react-hook-form-antd'
import * as z from 'zod'

import { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/page-url.config'

import { errorCatch } from '@/api/error'

import { authService } from '@/services/auth.service'

const schema = z.object({
	login: z.string().min(1, { message: 'Введите логин' }),
	password: z.string().min(1, { message: 'Введите пароль' }),
})

export function Auth() {
	const [messageApi, contextHolder] = message.useMessage()

	const { control, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange',
		resolver: zodResolver(schema),
	})

	const [isLoginForm, setIsLoginForm] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			setIsLoading(false)
			messageApi.success('Авторизация прошла успешно!')
			reset()
			push(DASHBOARD_PAGES.LECTURES)
		},
		onError(error) {
			setIsLoading(false)
			messageApi.error(`Произошла ошибка: "${errorCatch(error)}"`)
		},
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		setIsLoading(true)
		mutate(data)
	}

	return (
		<>
			{contextHolder}
			<StyleProvider layer>
				<Layout className='h-screen flex flex-col justify-center items-center'>
					<Card
						title='Авторизация'
						className='w-2/6'
					>
						<Form
							name='auth'
							onFinish={handleSubmit(onSubmit)}
							autoComplete='off'
						>
							<FormItem<IAuthForm>
								control={control}
								label='Логин'
								name='login'
							>
								<Input />
							</FormItem>

							<FormItem<IAuthForm>
								control={control}
								label='Пароль'
								name='password'
							>
								<Input.Password />
							</FormItem>

							<Form.Item label={null}>
								<Flex
									gap={12}
									justify='end'
								>
									<Button
										type='primary'
										htmlType='submit'
										loading={isLoading}
										onClick={() => setIsLoginForm(true)}
									>
										Логин
									</Button>
									<Button
										type='dashed'
										htmlType='submit'
										loading={isLoading}
										onClick={() => setIsLoginForm(false)}
									>
										Регистрация
									</Button>
								</Flex>
							</Form.Item>
						</Form>
					</Card>
				</Layout>
			</StyleProvider>
		</>
	)
}
