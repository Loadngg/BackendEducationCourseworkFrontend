export interface ILecture {
	id: number
	title: string
	text: string
	materials?: ILectureMaterial[]
}

export interface ILectureMaterial {
	id: number
	title: string
	fileLink: string
	lectureId: number
}
