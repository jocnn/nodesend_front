import React from 'react'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
		<>
      <Head>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
        <title>NodeSend</title>
			</Head>
			<div className='bg-gray-100 min-h-screen'>
				<div className='container mx-auto'>
          <main className='mt-20'>
            {children}
          </main>
				</div>
			</div>
		</>
  )
}

export default Layout
