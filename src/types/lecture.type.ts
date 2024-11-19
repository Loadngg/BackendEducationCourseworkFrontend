export interface ILecture {
	id: React.Key
	title: string
	text: string
	materials?: ILectureMaterial[]
}

export interface ILectureMaterial {
	id: React.Key
	title: string
	fileLink: string
	lectureId: React.Key
}
