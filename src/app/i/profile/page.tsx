import { Metadata } from 'next'

import { Profile } from './Profile'

export const metadata: Metadata = {
	title: 'Профиль',
}

export default function ProfilePage() {
	return <Profile />
}
