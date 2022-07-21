import React, { useEffect } from 'react'
import Layout from '../components/layout'
import useAuth from '../context/auth/authState'

const Index = () => {

	const { userAuthenticated } = useAuth()

	useEffect(() => {
		userAuthenticated()
	}, [userAuthenticated])

  return (
		<Layout>
			<h1>Index</h1>
		</Layout>
  )
}

export default Index