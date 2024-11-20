export interface ILecture {
	id: string
	title: string
	text: string
	materials?: ILectureMaterial[]
}

export interface ILectureMaterial {
	id: string
	title: string
	fileLink: string
	lectureId: string
}
