import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='py-4 flex flex-col md:flex-row items-center justify-between'>
      <Link href="/">
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
			</div>
		</header>
  )
}

export default Header