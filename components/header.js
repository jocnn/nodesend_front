import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='py-8 flex flex-col md:flex-row items-center justify-between'>
      <Image className='w-64 mb-8 md:mb-0' width={150} height={100} src="/logo.svg" alt="logo de la página" />
    </header>
  )
}

export default Header