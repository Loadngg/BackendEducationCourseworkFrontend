import { List } from 'antd'

import { ILectureMaterial } from '@/types/lecture.type'

interface Props {
	materials: ILectureMaterial[] | undefined
}

export default function MaterialList({ materials }: Props) {
	return (
		<List
			dataSource={materials}
			itemLayout='horizontal'
			renderItem={(item, index) => (
				<List.Item
					key={index}
					actions={[
						<a
							href={item.fileLink}
							target='_blank'
							rel='noopener noreferrer'
						>
							Скачать
						</a>,
					]}
				>
					<List.Item.Meta title={item.title} />
				</List.Item>
			)}
		/>
	)
}
