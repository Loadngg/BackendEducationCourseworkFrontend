export interface IAuthForm {
	login: string
	password: string
}

export interface IUser {
	id: number
	login: string
	password: string
}

export interface IAuthResponse {
	user: IUser
	accessToken?: string
}
