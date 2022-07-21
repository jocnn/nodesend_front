import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import useAuth from '../context/auth/authState'

const Header = () => {

  const { user, userAuthenticated, userLogout } = useAuth()

	useEffect(() => {
		userAuthenticated()
	}, [userAuthenticated])

  return (
		<header className='py-4 flex flex-col md:flex-row items-center justify-between'>
			<Link href='/'>
				<a>
					<Image
						className='w-64 mb-8 md:mb-0'
						width={150}
						height={100}
						src='/logo.svg'
						alt='logo de la página'
					/>
				</a>
			</Link>
			<div className='flex gap-2'>
				{user ? (
					<div className='flex items-center gap-2'>
						<p>Hola: {user.name}</p>
						<button
							className='bg-black px-5 py-3 rounded text-white font-bold uppercase'
							onClick={ () => userLogout() }>
							Cerrar Sesión
						</button>
					</div>
				) : (
					<>
						<Link href='/login'>
							<a className='bg-red-500 px-5 py-3 rounded text-white font-bold uppercase'>
								Iniciar Sesión
							</a>
						</Link>
						<Link href='/signin'>
							<a className='bg-black px-5 py-3 rounded text-white font-bold uppercase'>
								Crear Cuenta
							</a>
						</Link>
					</>
				)}
			</div>
		</header>
  )
}

export default Header