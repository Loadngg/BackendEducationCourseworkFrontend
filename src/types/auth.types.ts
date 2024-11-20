export interface IAuthForm {
	login: string
	password: string
}

export interface IUser {
	id: string
	login: string
	password: string
}

export interface IAuthResponse {
	user: IUser
	accessToken?: string
}
