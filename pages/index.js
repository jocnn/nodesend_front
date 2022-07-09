import React, { useEffect } from 'react'
import Layout from '../components/layout'
import useAuth from '../context/auth/authState'

const authenticated = value => value

const Index = () => {

	const { userAuthenticated } = useAuth()
	authenticated(userAuthenticated())

	useEffect(() => {
		authenticated()
	}, [])

  return (
		<Layout>
			<h1>Index</h1>
		</Layout>
  )
}

export default Index